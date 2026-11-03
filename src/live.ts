// Shared Melon Merge room over MoQ (Media over QUIC / WebTransport).
//
// Every visitor publishes one broadcast  <PREFIX>/<visitorId>  with three tracks:
//   state – presence: { fruit, score, best, since }        (heartbeat every 2s)
//   input – the visitor's recent actions (drop / reset)    (cumulative list, deduped by seq)
//   world – full board snapshot, ~20Hz, only while this visitor is the HOST
// and subscribes to everyone else's three tracks.
//
// Peer-to-peer state: there is no fixed host. Every peer keeps the newest board snapshot it
// has seen (highest version `v`, from anyone) and re-publishes it on the heartbeat, so the
// board lives on as long as ANY peer is in the room and any peer can serve newcomers.
// One peer at a time does the physics: the oldest *visible* peer (browsers pause background
// tabs, so hidden tabs never simulate). When it hides or leaves, the next visible peer
// resumes from the newest snapshot. Others send drops on `input` and render the board.
//
// Late joiners: MoQ caches closed groups only ~5s and a new subscriber gets just the latest
// group, so everything that must be visible to newcomers is re-published regularly.
import { useEffect, useRef, useState, type MutableRefObject } from 'react'
import { Connection, Path, Time, type Track, type Broadcast, type Origin } from '@moq/net'

export type Peer = { fruit: number; score: number; best: number; since: number; visible: boolean }
/** [id, tier, x, y, angle, ownerId] */
export type FBody = [number, number, number, number, number, string]
export type Merge = { n: number; by: string; tier: number }
export type World = { v: number; host: string; nextId: number; bodies: FBody[]; scores: Record<string, number>; merges: Merge[]; over: boolean }
export type Input = { seq: number; kind: 'drop' | 'reset'; x?: number; tier?: number }
export type FeedItem = { id: number; who: number; tier: number; self: boolean }

const RELAY = (import.meta.env.VITE_MOQ_RELAY as string | undefined) ?? 'https://cdn.moq.dev/anon'
// `?room=name` for a private room. Bump v2 when the wire format changes so old clients can't mix in.
const ROOM = (new URLSearchParams(location.search).get('room') || 'lobby').replace(/[^\w-]/g, '').slice(0, 32) || 'lobby'
const PREFIX = `ps-cv2/melon/v2/${ROOM}`
const HEARTBEAT_MS = 2000
const STALE_MS = 8000
const selfId = (crypto.randomUUID?.() ?? Math.random().toString(36).slice(2)).replace(/-/g, '').slice(0, 8)
const since = Date.now()
const isVisible = () => document.visibilityState !== 'hidden'

const older = (a: { since: number; id: string }, b: { since: number; id: string }) =>
  a.since !== b.since ? a.since < b.since : a.id < b.id

export type Room = ReturnType<typeof useRoom>

export function useRoom(me: { fruit: number; score: number; best: number }) {
  const [peers, setPeers] = useState<Record<string, Peer>>({})
  const [feed, setFeed] = useState<FeedItem[]>([])
  const [status, setStatus] = useState<'connecting' | 'online' | 'error'>('connecting')

  const [visible, setVisible] = useState(isVisible)

  // Simulator ("host") = oldest VISIBLE member of the room. Hidden tabs are paused by the
  // browser, so they never simulate. If nobody is visible, nobody needs to see it move.
  let hostId: string | undefined, best: { since: number; id: string } | undefined
  const consider = (id: string, s: number) => { if (!best || older({ since: s, id }, best)) { best = { since: s, id }; hostId = id } }
  if (visible) consider(selfId, since)
  for (const [id, p] of Object.entries(peers)) if (p.visible) consider(id, p.since)
  const isHost = hostId === selfId

  const isHostRef = useRef(isHost); isHostRef.current = isHost
  const peersRef = useRef(peers); peersRef.current = peers
  /** Newest board snapshot known (highest `v`), from any peer or from us. */
  const world = useRef<{ w: World; at: number }>()
  /** Set by the game: called (on every client) for each new remote input. */
  const onInput = useRef<(from: string, e: Input) => void>()

  const tracks = useRef<{ state?: Track.Producer; input?: Track.Producer; world?: Track.Producer }>({})
  const state = useRef<Peer>({ ...me, since, visible: isVisible() })
  const inputs = useRef<Input[]>([])
  const inputSeq = useRef(0)
  const mergeSeen = useRef(0)
  const feedId = useRef(0)

  const write = (name: 'state' | 'input' | 'world', v: unknown) => {
    try { tracks.current[name]?.writeJson(v) } catch { /* not connected yet */ }
  }

  const keepNewest = (w: World) => {
    if (world.current && world.current.w.v >= w.v) return false
    world.current = { w, at: performance.now() }
    seeMerges(w)
    return true
  }

  // Turn new merges from any world snapshot (mine or the host's) into feed items.
  const seeMerges = (w: World) => {
    const fresh = w.merges.filter((m) => m.n > mergeSeen.current)
    if (!fresh.length) return
    mergeSeen.current = Math.max(...fresh.map((m) => m.n))
    setFeed((f) => [
      ...fresh.reverse().map((m) => ({
        id: ++feedId.current, tier: m.tier, self: m.by === selfId,
        who: m.by === selfId ? state.current.fruit : peersRef.current[m.by]?.fruit ?? 0,
      })),
      ...f,
    ].slice(0, 6))
  }

  useEffect(() => {
    if (typeof WebTransport === 'undefined') { setStatus('error'); return }
    const conn = new Connection({ url: new URL(RELAY) })
    let broadcast: Broadcast.Producer | undefined
    let alive = true
    const disposers: (() => void)[] = []
    const watching = new Map<string, () => void>()
    const lastSeen = new Map<string, number>()
    const lastInput = new Map<string, number>()

    disposers.push(conn.status.subscribe((s) => {
      setStatus(s === 'connected' ? 'online' : conn.error.peek() ? 'error' : 'connecting')
    }))

    // Tell the room when this tab is hidden/shown, so simulation moves to a visible peer.
    const onVis = () => {
      state.current = { ...state.current, visible: isVisible() }
      setVisible(isVisible())
      write('state', state.current)
    }
    document.addEventListener('visibilitychange', onVis)
    disposers.push(() => document.removeEventListener('visibilitychange', onVis))

    disposers.push(conn.origin.subscribe((table) => {
      if (!table || broadcast) return
      broadcast = table.createBroadcast(Path.from(PREFIX, selfId))
      tracks.current = {
        state: broadcast.createTrack('state'),
        input: broadcast.createTrack('input'),
        // keep the board cached for 10 min so it survives quiet rooms / throttled background tabs
        world: broadcast.createTrack('world', { maxAge: Time.Milli(10 * 60_000) }),
      }
      broadcast.announce()
      write('state', state.current)
      write('input', { events: inputs.current })
    }))

    const beat = setInterval(() => {
      write('state', state.current)
      write('input', { events: inputs.current })
      // Replicate: every non-simulating peer re-publishes the newest board it knows.
      if (!isHostRef.current && world.current) write('world', world.current.w)
      const now = Date.now()
      lastSeen.forEach((t, id) => { if (now - t > STALE_MS) forget(id) })
    }, HEARTBEAT_MS)
    disposers.push(() => clearInterval(beat))

    const originReady = async (): Promise<Origin.Table | undefined> => {
      for (;;) {
        const t = conn.origin.peek()
        if (t || !alive) return t
        await conn.origin.changed()
      }
    }

    // Read every group of a track; a closed/aborted stream (peer left) just ends the loop.
    const read = async (sub: Track.Subscriber, fn: (v: unknown) => void) => {
      try {
        for (;;) {
          const g = await sub.recvGroup()
          if (!g) return
          const v = await g.readJson()
          if (v !== undefined && alive) fn(v)
        }
      } catch { /* peer went away */ }
    }

    const follow = async (path: Path.Valid, id: string) => {
      if (watching.has(id)) return
      watching.set(id, () => {})
      const table = await originReady()
      if (!table || !alive || !watching.has(id)) return
      const req = table.request(path)
      let subs: Track.Subscriber[] = []
      watching.set(id, () => { subs.forEach((s) => s.close()); req.close() })
      req.active.subscribe((bc) => {
        if (!bc || !alive) return
        subs.forEach((s) => s.close())
        const [st, inp, wd] = (['state', 'input', 'world'] as const).map((n) => bc.track(n).subscribe())
        subs = [st, inp, wd]

        void read(st, (v) => {
          const s = v as Peer
          lastSeen.set(id, Date.now())
          setPeers((p) => ({ ...p, [id]: { fruit: s.fruit, score: s.score, best: s.best, since: s.since ?? Date.now(), visible: s.visible === true } })) // unknown → never elected
        })
        void read(inp, (v) => {
          const events = (v as { events?: Input[] }).events ?? []
          const max = Math.max(0, ...events.map((e) => e.seq))
          if (!lastInput.has(id)) { lastInput.set(id, max); return } // first message = history, not new actions
          const prev = lastInput.get(id)!
          lastInput.set(id, Math.max(prev, max))
          for (const e of events) if (e.seq > prev) onInput.current?.(id, e)
        })
        void read(wd, (v) => {
          const w = v as World
          if (typeof w?.v === 'number') keepNewest(w)
        })
      })
    }
    const forget = (id: string) => {
      watching.get(id)?.(); watching.delete(id); lastSeen.delete(id); lastInput.delete(id)
      setPeers((p) => { const { [id]: _, ...rest } = p; return rest })
    }

    const announced = conn.announced(Path.Pattern.subtree(PREFIX))
    ;(async () => {
      for await (const u of announced) {
        if (!alive) break
        const full = Path.hasPrefix(Path.from(PREFIX), u.prefix) ? u.prefix : Path.join(Path.from(PREFIX), u.prefix)
        const id = Path.parts(full).slice(-1)[0]
        if (id === selfId) continue
        if (u.kind === 'retracted') forget(id)
        else void follow(full, id)
      }
    })().catch(() => setStatus('error'))

    return () => {
      alive = false
      announced.close()
      watching.forEach((stop) => stop())
      disposers.forEach((d) => d())
      broadcast?.close()
      tracks.current = {}
      conn.close()
    }
  }, [])

  // Presence: publish score changes promptly (throttled ~4/s); heartbeat covers quiet periods.
  const last = useRef(0)
  useEffect(() => {
    state.current = { ...state.current, ...me }
    const t = setTimeout(() => { last.current = Date.now(); write('state', state.current) }, Math.max(0, 250 - (Date.now() - last.current)))
    return () => clearTimeout(t)
  }, [me.score, me.best, me.fruit])

  return {
    selfId, peers, feed, status, hostId, isHost,
    world, onInput, isHostRef,
    /** Host only: publish the authoritative board. */
    publishWorld: (w: World) => { keepNewest(w); write('world', w) },
    /** Non-host: ask the host to do something. Keeps the last 10 actions so none are lost. */
    sendInput: (e: Omit<Input, 'seq'>) => {
      inputs.current = [...inputs.current, { ...e, seq: ++inputSeq.current }].slice(-10)
      write('input', { events: inputs.current })
    },
  }
}

export type { MutableRefObject }
