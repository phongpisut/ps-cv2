import * as planck from 'planck'
import type { Room, World, FBody, Merge } from './room'

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

/** Each visitor gets a persistent random "signature" fruit. */
export function visitorFruit() {
  try {
    const saved = localStorage.getItem('pm-fruit')
    if (saved) return Number(saved)
    const n = Math.floor(Math.random() * 4)
    localStorage.setItem('pm-fruit', String(n))
    return n
  } catch { return Math.floor(Math.random() * 4) }
}
function loadBest() { try { return Number(localStorage.getItem('pm-best')) || 0 } catch { return 0 } }

export type MelonUI = { score: HTMLElement; best: HTMLElement; next: HTMLElement; over: HTMLElement; overScore: HTMLElement; again: HTMLElement }

/** Shared fruit-drop board. One visible peer simulates (planck), everyone renders the board. */
export function startMelon(cv: HTMLCanvasElement, room: Room, ui: MelonUI) {
  const ctx = cv.getContext('2d')!
  const dpr = Math.min(2, devicePixelRatio || 1)
  cv.width = W * PX * dpr; cv.height = H * PX * dpr
  ctx.scale(dpr, dpr)
  const selfId = room.selfId
  let best = loadBest(), score = 0, next = Math.floor(Math.random() * 4)
  ui.best.textContent = String(best); ui.next.textContent = TIERS[next].e

  /* ---------- authoritative simulation (only while this client is the simulator) ---------- */
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

  room.onInput = (from, e) => {
    if (!room.isHost) return
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
    if (now - lastPub > 50) { lastPub = now; room.publishWorld(snapshot()) }
  }

  /* ---------- view (simulator: live bodies; others: smoothed snapshots) ---------- */
  const shown = new Map<number, Draw>()
  const viewFromRemote = (): { list: Draw[]; w?: World } => {
    const w = room.world?.w
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

  let aimX = W / 2, lastDrop = 0, wasHost = false, uiOver = false, running = false
  const toWorld = (e: { clientX: number }) => { const r = cv.getBoundingClientRect(); return ((e.clientX - r.left) / r.width) * W }
  const aim = (x: number) => { aimX = Math.min(W - TIERS[next].r, Math.max(TIERS[next].r, x)) }
  const drop = (x: number) => {
    const now = performance.now()
    if (uiOver || now - lastDrop < 450) return
    lastDrop = now
    aim(x)
    if (room.isHost) hostDrop(selfId, aimX, next)
    else room.sendInput({ kind: 'drop', x: aimX, tier: next })
    next = Math.floor(Math.random() * 4); ui.next.textContent = TIERS[next].e
  }
  const reset = () => { if (room.isHost) resetSim(); else room.sendInput({ kind: 'reset' }) }
  cv.addEventListener('pointermove', (e) => aim(toWorld(e)))
  cv.addEventListener('pointerdown', (e) => aim(toWorld(e)))
  cv.addEventListener('pointerup', (e) => drop(toWorld(e)))
  ui.again.addEventListener('click', reset)

  const draw = (list: Draw[]) => {
    const accent = '#d9502a', ink = '#1d1b18'
    ctx.clearRect(0, 0, W * PX, H * PX)
    const Y = (y: number) => (H - y) * PX
    ctx.setLineDash([6, 6]); ctx.strokeStyle = accent; ctx.globalAlpha = 0.6
    ctx.beginPath(); ctx.moveTo(0, Y(H - LINE)); ctx.lineTo(W * PX, Y(H - LINE)); ctx.stroke()
    ctx.setLineDash([]); ctx.globalAlpha = 1
    const nt = TIERS[next]
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
    if (!running) return
    const dt = Math.min(0.033, (now - prev) / 1000); prev = now
    const isHost = room.isHost
    if (isHost && !wasHost) adopt(room.world?.w) // take over from the newest snapshot
    if (!isHost && wasHost) { clearSim(); shown.clear() } // another visible peer simulates now
    wasHost = isHost
    // Split brain (two peers simulated before seeing each other): adopt the newer board.
    const known = room.world?.w
    if (isHost && known && known.host !== selfId && known.v > v) adopt(known)
    let list: Draw[], myScore: number, isOver: boolean
    if (isHost) {
      simulate(dt, now)
      list = [...bodies.values()].map((b) => ({ tier: b.tier, x: b.getPosition().x, y: b.getPosition().y, a: b.getAngle() }))
      myScore = scores[selfId] ?? 0; isOver = simOver
    } else {
      const r = viewFromRemote()
      list = r.list; myScore = r.w?.scores[selfId] ?? 0; isOver = r.w?.over ?? false
    }
    if (myScore !== score) {
      score = myScore; ui.score.textContent = String(score)
      if (score > best) { best = score; ui.best.textContent = String(best); try { localStorage.setItem('pm-best', String(best)) } catch { /* private mode */ } }
      room.setMe({ score, best })
    }
    if (isOver !== uiOver) { uiOver = isOver; ui.over.hidden = !isOver; ui.overScore.textContent = String(score) }
    draw(list)
    requestAnimationFrame(loop)
  }
  room.setMe({ best })
  return {
    start() { if (!running) { running = true; prev = performance.now(); requestAnimationFrame(loop) } },
    stop() { running = false },
  }
}
