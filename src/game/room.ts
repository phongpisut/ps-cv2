// Shared fruit-drop room over MoQ (Media over QUIC / WebTransport), free public relay.
//
// Every visitor publishes one broadcast  <PREFIX>/<visitorId>  with three tracks:
//   state – presence: { fruit, score, best, since, visible }   (heartbeat every 2s)
//   input – the visitor's recent actions (drop / reset)       (cumulative list, deduped by seq)
//   world – full board snapshot, ~20Hz from the simulating peer
// and subscribes to everyone else's three tracks.
//
// No fixed host: every peer keeps the newest board snapshot it has seen (highest `v`) and
// re-publishes it on the heartbeat, so the board survives as long as anyone is in the room.
// One peer at a time runs the physics: the oldest *visible* peer (hidden tabs are paused by
// the browser). When it hides or leaves, the next visible peer resumes from the newest board.
import { Connection, Path, Time, type Track, type Broadcast, type Origin } from '@moq/net'

export type Peer = { fruit: number; score: number; best: number; since: number; visible: boolean }
/** [id, tier, x, y, angle, ownerId] */
export type FBody = [number, number, number, number, number, string]
export type Merge = { n: number; by: string; tier: number }
export type World = { v: number; host: string; nextId: number; bodies: FBody[]; scores: Record<string, number>; merges: Merge[]; over: boolean }
export type Input = { seq: number; kind: 'drop' | 'reset'; x?: number; tier?: number }
export type FeedItem = { id: number; who: number; tier: number; self: boolean }
export type Status = 'connecting' | 'online' | 'error'

export const RELAY = (import.meta.env.VITE_MOQ_RELAY as string | undefined) ?? 'https://cdn.moq.dev/anon'
// `?room=name` for a private room. Same wire format (v2) as the previous site, so old and new tabs share a board.
const ROOM = (new URLSearchParams(location.search).get('room') || 'lobby').replace(/[^\w-]/g, '').slice(0, 32) || 'lobby'
const PREFIX = `ps-cv2/melon/v2/${ROOM}`
const HEARTBEAT_MS = 2000
const STALE_MS = 8000
const isVisible = () => document.visibilityState !== 'hidden'
const older = (a: { since: number; id: string }, b: { since: number; id: string }) => (a.since !== b.since ? a.since < b.since : a.id < b.id)

export class Room {
  readonly selfId = (crypto.randomUUID?.() ?? Math.random().toString(36).slice(2)).replace(/-/g, '').slice(0, 8)
  readonly since = Date.now()
  peers: Record<string, Peer> = {}
  feed: FeedItem[] = []
  status: Status = 'connecting'
  /** Newest board snapshot known (highest `v`), from any peer or from us. */
  world?: { w: World; at: number }
  /** Set by the game: called for each new remote input. */
  onInput?: (from: string, e: Input) => void
  /** Called whenever presence / status / feed changes (for the side panel). */
  onChange?: () => void

  private visible = isVisible()
  private state: Peer
  private tracks: { state?: Track.Producer; input?: Track.Producer; world?: Track.Producer } = {}
  private inputs: Input[] = []
  private inputSeq = 0
  private mergeSeen = 0
  private feedId = 0
  private lastStateWrite = 0
  private stateTimer = 0
  private started = false

  constructor(me: { fruit: number; score: number; best: number }) {
    this.state = { ...me, since: this.since, visible: this.visible }
  }

  /** Simulator = oldest VISIBLE member of the room. */
  get hostId() {
    let id: string | undefined, best: { since: number; id: string } | undefined
    const consider = (pid: string, s: number) => { if (!best || older({ since: s, id: pid }, best)) { best = { since: s, id: pid }; id = pid } }
    if (this.visible) consider(this.selfId, this.since)
    for (const [pid, p] of Object.entries(this.peers)) if (p.visible) consider(pid, p.since)
    return id
  }
  get isHost() { return this.hostId === this.selfId }

  private changed() { this.onChange?.() }
  private write(name: 'state' | 'input' | 'world', v: unknown) {
    try { this.tracks[name]?.writeJson(v) } catch { /* not connected yet */ }
  }
  private keepNewest(w: World) {
    if (this.world && this.world.w.v >= w.v) return false
    this.world = { w, at: performance.now() }
    this.seeMerges(w)
    return true
  }
  /** New big merges in any snapshot become feed items. */
  private seeMerges(w: World) {
    const fresh = w.merges.filter((m) => m.n > this.mergeSeen)
    if (!fresh.length) return
    this.mergeSeen = Math.max(...fresh.map((m) => m.n))
    this.feed = [
      ...fresh.reverse().map((m) => ({
        id: ++this.feedId, tier: m.tier, self: m.by === this.selfId,
        who: m.by === this.selfId ? this.state.fruit : this.peers[m.by]?.fruit ?? 0,
      })),
      ...this.feed,
    ].slice(0, 6)
    this.changed()
  }

  /** Update my presence (score etc.), throttled to ~4/s; the heartbeat covers quiet periods. */
  setMe(me: Partial<Pick<Peer, 'fruit' | 'score' | 'best'>>) {
    this.state = { ...this.state, ...me }
    clearTimeout(this.stateTimer)
    this.stateTimer = window.setTimeout(() => { this.lastStateWrite = Date.now(); this.write('state', this.state) }, Math.max(0, 250 - (Date.now() - this.lastStateWrite)))
  }
  /** Simulating peer: publish the authoritative board. */
  publishWorld(w: World) { this.keepNewest(w); this.write('world', w) }
  /** Other peers: ask the simulator to do something. Keeps the last 10 actions so none are lost. */
  sendInput(e: Omit<Input, 'seq'>) {
    this.inputs = [...this.inputs, { ...e, seq: ++this.inputSeq }].slice(-10)
    this.write('input', { events: this.inputs })
  }

  /** Connect to the relay (once). */
  start() {
    if (this.started) return
    this.started = true
    if (typeof WebTransport === 'undefined') { this.status = 'error'; this.changed(); return }
    const conn = new Connection({ url: new URL(RELAY) })
    let broadcast: Broadcast.Producer | undefined
    const watching = new Map<string, () => void>()
    const lastSeen = new Map<string, number>()
    const lastInput = new Map<string, number>()

    conn.status.subscribe((s) => {
      const st: Status = s === 'connected' ? 'online' : conn.error.peek() ? 'error' : 'connecting'
      if (st !== this.status) { this.status = st; this.changed() }
    })

    // Tell the room when this tab is hidden/shown, so simulation moves to a visible peer.
    document.addEventListener('visibilitychange', () => {
      this.visible = isVisible()
      this.state = { ...this.state, visible: this.visible }
      this.write('state', this.state)
      this.changed()
    })

    conn.origin.subscribe((table) => {
      if (!table || broadcast) return
      broadcast = table.createBroadcast(Path.from(PREFIX, this.selfId))
      this.tracks = {
        state: broadcast.createTrack('state'),
        input: broadcast.createTrack('input'),
        // keep the board cached for 10 min so it survives quiet rooms / throttled background tabs
        world: broadcast.createTrack('world', { maxAge: Time.Milli(10 * 60_000) }),
      }
      broadcast.announce()
      this.write('state', this.state)
      this.write('input', { events: this.inputs })
    })

    setInterval(() => {
      this.write('state', this.state)
      this.write('input', { events: this.inputs })
      // Replicate: every non-simulating peer re-publishes the newest board it knows.
      if (!this.isHost && this.world) this.write('world', this.world.w)
      const now = Date.now()
      lastSeen.forEach((t, id) => { if (now - t > STALE_MS) forget(id) })
    }, HEARTBEAT_MS)

    const originReady = async (): Promise<Origin.Table | undefined> => {
      for (;;) {
        const t = conn.origin.peek()
        if (t) return t
        await conn.origin.changed()
      }
    }
    // Read every group of a track; a closed stream (peer left) just ends the loop.
    const read = async (sub: Track.Subscriber, fn: (v: unknown) => void) => {
      try {
        for (;;) {
          const g = await sub.recvGroup()
          if (!g) return
          const v = await g.readJson()
          if (v !== undefined) fn(v)
        }
      } catch { /* peer went away */ }
    }
    const follow = async (path: Path.Valid, id: string) => {
      if (watching.has(id)) return
      watching.set(id, () => {})
      const table = await originReady()
      if (!table || !watching.has(id)) return
      const req = table.request(path)
      let subs: Track.Subscriber[] = []
      watching.set(id, () => { subs.forEach((s) => s.close()); req.close() })
      req.active.subscribe((bc) => {
        if (!bc) return
        subs.forEach((s) => s.close())
        const [st, inp, wd] = (['state', 'input', 'world'] as const).map((n) => bc.track(n).subscribe())
        subs = [st, inp, wd]
        void read(st, (v) => {
          const s = v as Peer
          lastSeen.set(id, Date.now())
          this.peers = { ...this.peers, [id]: { fruit: s.fruit, score: s.score, best: s.best, since: s.since ?? Date.now(), visible: s.visible === true } }
          this.changed()
        })
        void read(inp, (v) => {
          const events = (v as { events?: Input[] }).events ?? []
          const max = Math.max(0, ...events.map((e) => e.seq))
          if (!lastInput.has(id)) { lastInput.set(id, max); return } // first message = history, not new actions
          const prev = lastInput.get(id)!
          lastInput.set(id, Math.max(prev, max))
          for (const e of events) if (e.seq > prev) this.onInput?.(id, e)
        })
        void read(wd, (v) => { const w = v as World; if (typeof w?.v === 'number') this.keepNewest(w) })
      })
    }
    const forget = (id: string) => {
      watching.get(id)?.(); watching.delete(id); lastSeen.delete(id); lastInput.delete(id)
      const { [id]: _, ...rest } = this.peers
      this.peers = rest
      this.changed()
    }

    const announced = conn.announced(Path.Pattern.subtree(PREFIX))
    ;(async () => {
      for await (const u of announced) {
        const full = Path.hasPrefix(Path.from(PREFIX), u.prefix) ? u.prefix : Path.join(Path.from(PREFIX), u.prefix)
        const id = Path.parts(full).slice(-1)[0]
        if (id === this.selfId) continue
        if (u.kind === 'retracted') forget(id)
        else void follow(full, id)
      }
    })().catch(() => { this.status = 'error'; this.changed() })
  }
}
