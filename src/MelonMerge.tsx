import { useEffect, useRef, useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import * as planck from 'planck'
import { c, font, serif, mono, cssVar } from './theme'
import type { Room, World, FBody, Merge } from './live'

// Fruit tiers: same tier colliding → next tier.
export const TIERS = [
  { e: '🍒', r: 0.55 }, { e: '🍓', r: 0.75 }, { e: '🍇', r: 0.95 }, { e: '🍊', r: 1.2 },
  { e: '🍎', r: 1.45 }, { e: '🍐', r: 1.75 }, { e: '🍑', r: 2.05 }, { e: '🍍', r: 2.4 },
  { e: '🍈', r: 2.8 }, { e: '🍉', r: 3.25 },
]
const W = 16, H = 22, LINE = 3.2 // world metres
const PX = 22 // pixels per metre

type Body = planck.Body & { fid: number; tier: number; by: string; dead?: boolean; born: number }
type Draw = { tier: number; x: number; y: number; a: number }

// Each visitor gets a persistent random "signature" fruit.
export function visitorFruit() {
  try {
    const saved = localStorage.getItem('pm-fruit')
    if (saved) return Number(saved)
    const n = Math.floor(Math.random() * 4)
    localStorage.setItem('pm-fruit', String(n))
    return n
  } catch { return Math.floor(Math.random() * 4) }
}

type Props = { mine: number; room: Room; onScore?: (score: number, best: number) => void }

function loadBest() { try { return Number(localStorage.getItem('pm-best')) || 0 } catch { return 0 } }

export default function MelonMerge({ mine, room, onScore }: Props) {
  const canvas = useRef<HTMLCanvasElement>(null)
  const [score, setScore] = useState(0)
  const [best, setBest] = useState(loadBest)
  const [over, setOver] = useState(false)
  const roomRef = useRef(room); roomRef.current = room
  const cb = useRef({ onScore }); cb.current = { onScore }
  useEffect(() => {
    if (score > best) { setBest(score); try { localStorage.setItem('pm-best', String(score)) } catch { /* private mode */ } }
    cb.current.onScore?.(score, Math.max(score, best))
  }, [score, best])
  const [next, setNext] = useState(() => Math.floor(Math.random() * 4))
  const api = useRef<{ drop: (x: number) => void; aim: (x: number) => void; reset: () => void }>()
  const nextRef = useRef(next)
  nextRef.current = next

  useEffect(() => {
    const cv = canvas.current!
    const ctx = cv.getContext('2d')!
    const dpr = window.devicePixelRatio || 1
    cv.width = W * PX * dpr; cv.height = H * PX * dpr
    ctx.scale(dpr, dpr)
    const selfId = roomRef.current.selfId

    /* ---------- authoritative simulation (runs only while this client is host) ---------- */
    const world = new planck.World({ gravity: { x: 0, y: -22 } })
    const wall = { friction: 0.2 }
    const ground = world.createBody()
    ground.createFixture(new planck.Edge({ x: 0, y: 0 }, { x: W, y: 0 }), wall)
    ground.createFixture(new planck.Edge({ x: 0, y: 0 }, { x: 0, y: H * 2 }), wall)
    ground.createFixture(new planck.Edge({ x: W, y: 0 }, { x: W, y: H * 2 }), wall)

    const bodies = new Map<number, Body>()
    const toMerge: [Body, Body][] = []
    let scores: Record<string, number> = {}
    let merges: Merge[] = []
    let mergeN = 0, nextId = 1, v = 0, simOver = false, overTimer = 0, lastPub = 0

    const spawn = (tier: number, x: number, y: number, by: string, id = nextId++, angle = 0) => {
      const b = world.createDynamicBody({ position: { x, y }, angle, angularDamping: 0.6 }) as Body
      b.createFixture(new planck.Circle(TIERS[tier].r), { density: 1, friction: 0.3, restitution: 0.1 })
      b.fid = id; b.tier = tier; b.by = by; b.born = performance.now()
      bodies.set(id, b)
      nextId = Math.max(nextId, id + 1)
    }
    const clearSim = () => { bodies.forEach((b) => world.destroyBody(b)); bodies.clear(); toMerge.length = 0 }
    const resetSim = () => { clearSim(); scores = {}; merges = []; simOver = false; overTimer = 0 }
    // Become the simulator: continue from the newest snapshot any peer has (or start empty).
    const adopt = (w?: World) => {
      resetSim()
      if (!w) return
      v = Math.max(v, w.v)
      scores = { ...w.scores }; merges = [...w.merges]; simOver = w.over
      mergeN = Math.max(mergeN, 0, ...w.merges.map((m) => m.n))
      nextId = w.nextId
      // Stamp `born` in the past so adopted fruits count for game-over immediately.
      for (const [id, tier, x, y, a, by] of w.bodies) { spawn(tier, x, y, by, id, a); bodies.get(id)!.born = 0 }
    }
    const hostDrop = (by: string, x: number, tier: number) => {
      if (simOver || !(tier >= 0 && tier < 4)) return
      const r = TIERS[tier].r
      spawn(tier, Math.min(W - r, Math.max(r, x)), H - 1, by)
    }

    world.on('begin-contact', (ct) => {
      const a = ct.getFixtureA().getBody() as Body, b = ct.getFixtureB().getBody() as Body
      if (a.tier !== undefined && a.tier === b.tier && !a.dead && !b.dead && a.tier < TIERS.length - 1) {
        a.dead = b.dead = true
        toMerge.push([a, b])
      }
    })

    // Remote players' actions (only acted on while we are host).
    roomRef.current.onInput.current = (from, e) => {
      if (!roomRef.current.isHostRef.current) return
      if (e.kind === 'drop') hostDrop(from, e.x ?? W / 2, e.tier ?? 0)
      else if (e.kind === 'reset') resetSim()
    }

    const snapshot = (): World => ({
      host: selfId, v: ++v, nextId, scores, merges, over: simOver,
      bodies: [...bodies.values()].map((b): FBody => {
        const p = b.getPosition()
        return [b.fid, b.tier, +p.x.toFixed(3), +p.y.toFixed(3), +b.getAngle().toFixed(3), b.by]
      }),
    })

    const simulate = (dt: number, now: number) => {
      world.step(dt, 8, 3)
      while (toMerge.length) {
        const [a, b] = toMerge.pop()!
        const pa = a.getPosition(), pb = b.getPosition(), tier = a.tier + 1
        const by = (a.fid > b.fid ? a : b).by // the fruit that arrived last gets the credit
        world.destroyBody(a); world.destroyBody(b); bodies.delete(a.fid); bodies.delete(b.fid)
        spawn(tier, (pa.x + pb.x) / 2, (pa.y + pb.y) / 2, by)
        scores = { ...scores, [by]: (scores[by] ?? 0) + (tier + 1) * 2 }
        if (tier >= 4) merges = [...merges, { n: ++mergeN, by, tier }].slice(-6)
      }
      if (!simOver) {
        let above = false
        bodies.forEach((b) => { if (now - b.born > 1200 && b.getPosition().y + TIERS[b.tier].r > H - LINE) above = true })
        overTimer = above ? overTimer + dt : 0
        if (overTimer > 2) simOver = true
      }
      if (now - lastPub > 50) { lastPub = now; roomRef.current.publishWorld(snapshot()) }
    }

    /* ---------- view (host: live bodies; guest: smoothed host snapshots) ---------- */
    const shown = new Map<number, Draw>()
    const viewFromRemote = (): { list: Draw[]; w?: World } => {
      const w = roomRef.current.world.current?.w
      if (!w) return { list: [] }
      const ids = new Set<number>()
      for (const [id, tier, x, y, a] of w.bodies) {
        ids.add(id)
        const d = shown.get(id)
        if (!d) shown.set(id, { tier, x, y, a })
        else { d.x += (x - d.x) * 0.35; d.y += (y - d.y) * 0.35; d.a += (a - d.a) * 0.35; d.tier = tier }
      }
      shown.forEach((_, id) => { if (!ids.has(id)) shown.delete(id) })
      return { list: [...shown.values()], w }
    }

    let aimX = W / 2, lastDrop = 0, raf = 0, wasHost = false, uiScore = -1, uiOver = false

    api.current = {
      aim: (x) => { aimX = Math.min(W - TIERS[nextRef.current].r, Math.max(TIERS[nextRef.current].r, x)) },
      drop: (x) => {
        const now = performance.now()
        if (uiOver || now - lastDrop < 450) return
        lastDrop = now
        api.current!.aim(x)
        if (roomRef.current.isHostRef.current) hostDrop(selfId, aimX, nextRef.current)
        else roomRef.current.sendInput({ kind: 'drop', x: aimX, tier: nextRef.current })
        setNext(Math.floor(Math.random() * 4))
      },
      reset: () => {
        if (roomRef.current.isHostRef.current) resetSim()
        else roomRef.current.sendInput({ kind: 'reset' })
      },
    }

    const draw = (list: Draw[]) => {
      const accent = cssVar('--accent'), ink = cssVar('--ink')
      ctx.clearRect(0, 0, W * PX, H * PX)
      const Y = (y: number) => (H - y) * PX
      ctx.setLineDash([6, 6]); ctx.strokeStyle = accent; ctx.globalAlpha = 0.6
      ctx.beginPath(); ctx.moveTo(0, Y(H - LINE)); ctx.lineTo(W * PX, Y(H - LINE)); ctx.stroke()
      ctx.setLineDash([]); ctx.globalAlpha = 1
      const nt = TIERS[nextRef.current]
      ctx.globalAlpha = 0.25; ctx.fillStyle = accent
      ctx.fillRect(aimX * PX - 1, 0, 2, H * PX); ctx.globalAlpha = 1
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
      ctx.font = `${nt.r * 2 * PX * 0.9}px serif`
      ctx.fillText(nt.e, aimX * PX, Y(H - 1.2))
      for (const f of list) {
        const t = TIERS[f.tier]
        ctx.save(); ctx.translate(f.x * PX, Y(f.y)); ctx.rotate(-f.a)
        ctx.globalAlpha = 0.08; ctx.fillStyle = ink
        ctx.beginPath(); ctx.arc(0, 3, t.r * PX, 0, Math.PI * 2); ctx.fill()
        ctx.globalAlpha = 1
        ctx.font = `${t.r * 2 * PX * 0.85}px serif`
        ctx.fillText(t.e, 0, 2)
        ctx.restore()
      }
    }

    let prev = performance.now()
    const loop = (now: number) => {
      const dt = Math.min(0.033, (now - prev) / 1000); prev = now
      const isHost = roomRef.current.isHostRef.current
      if (isHost && !wasHost) adopt(roomRef.current.world.current?.w) // take over from the newest snapshot
      if (!isHost && wasHost) { clearSim(); shown.clear() }          // another visible peer simulates now
      wasHost = isHost

      let list: Draw[], myScore: number, isOver: boolean
      // Split brain (e.g. two peers simulated before seeing each other): a peer is holding a
      // newer board than ours → adopt it, so every peer converges on one board.
      const known = roomRef.current.world.current?.w
      if (isHost && known && known.host !== selfId && known.v > v) adopt(known)
      if (isHost) {
        simulate(dt, now)
        list = [...bodies.values()].map((b) => ({ tier: b.tier, x: b.getPosition().x, y: b.getPosition().y, a: b.getAngle() }))
        myScore = scores[selfId] ?? 0; isOver = simOver
      } else {
        const v = viewFromRemote()
        list = v.list; myScore = v.w?.scores[selfId] ?? 0; isOver = v.w?.over ?? false
      }
      if (myScore !== uiScore) { uiScore = myScore; setScore(myScore) }
      if (isOver !== uiOver) { uiOver = isOver; setOver(isOver) }
      draw(list)
      ;(window as unknown as { __melon: object }).__melon = { host: isHost, v, knownV: roomRef.current.world.current?.w.v, knownHost: roomRef.current.world.current?.w.host?.slice(0, 4), fruits: list.length, score: myScore, over: isOver, hostId: roomRef.current.hostId, me: selfId, peers: Object.entries(roomRef.current.peers).map(([id, p]) => `${id.slice(0, 4)}:${p.visible ? "vis" : "hid"}:${Math.round((Date.now() - p.since) / 1000)}s`) } // debug/test hook
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => { cancelAnimationFrame(raf); roomRef.current.onInput.current = undefined }
  }, [])

  const toWorld = (e: { clientX: number }) => {
    const r = canvas.current!.getBoundingClientRect()
    return ((e.clientX - r.left) / r.width) * W
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', width: W * PX, maxWidth: '100%', marginBottom: 10 }}>
        <View>
          <Text style={{ color: c.faint, fontFamily: mono, fontSize: 11, letterSpacing: 1.5 }}>SCORE</Text>
          <Text style={{ color: c.ink, fontFamily: serif, fontSize: 40, lineHeight: 42 }}>{score}</Text>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={{ color: c.faint, fontFamily: mono, fontSize: 11, letterSpacing: 1.5 }}>BEST {best} · NEXT</Text>
          <Text style={{ fontSize: 26 }}>{TIERS[next].e}</Text>
        </View>
      </View>
      <View style={{ width: W * PX, maxWidth: '100%', aspectRatio: W / H, borderRadius: 22, borderTopLeftRadius: 8, borderTopRightRadius: 8, overflow: 'hidden', backgroundColor: c.sheet, borderWidth: 1, borderTopWidth: 0, borderColor: c.line, boxShadow: 'var(--shadow), inset 0 -24px 40px -20px color-mix(in srgb, var(--ink) 12%, transparent)' } as object}>
        <canvas
          ref={canvas}
          style={{ width: '100%', height: '100%', touchAction: 'none', cursor: 'crosshair', display: 'block' }}
          onPointerMove={(e) => api.current?.aim(toWorld(e))}
          onPointerDown={(e) => api.current?.aim(toWorld(e))}
          onPointerUp={(e) => api.current?.drop(toWorld(e))}
        />
        {over && (
          <View style={{ position: 'absolute', inset: 0, backgroundColor: 'color-mix(in srgb, var(--sheet) 88%, transparent)', backdropFilter: 'blur(4px)', alignItems: 'center', justifyContent: 'center', gap: 12 } as object}>
            <Text style={{ color: c.ink, fontSize: 34, fontFamily: serif }}>Game over · {score}</Text>
            <Pressable onPress={() => api.current?.reset()}
              style={{ backgroundColor: c.accent, paddingHorizontal: 20, paddingVertical: 11, borderRadius: 999 }}>
              <Text style={{ color: c.accentInk, fontWeight: '600', fontFamily: font }}>Play again</Text>
            </Pressable>
          </View>
        )}
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 2, marginTop: 12, maxWidth: W * PX }}>
        {TIERS.map((t, i) => <Text key={i} style={{ fontSize: 16, opacity: i === mine ? 1 : 0.55 }}>{t.e}{i < TIERS.length - 1 ? <Text style={{ color: c.faint, fontSize: 11 }}> › </Text> : null}</Text>)}
      </View>
      <Text style={{ color: c.muted, fontSize: 13, marginTop: 6, fontFamily: font }}>Tap to drop · two of a kind merge into the next fruit</Text>
    </View>
  )
}
