import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'
import { CvSheet, SHEET_W, SHEET_H, type Circle, type Box } from './sheet'
import { PhoneScreen } from './phone'
import { wood, notepad, indexCard, sticky, idCard } from './paint'

/*
 * The desk. Seen from straight above on landing: my CV sheet (Pretext skills flowing
 * around my name and the coffee mug), a notepad with my journey, an index card, an ID
 * badge, sticky notes, a pencil and my phone. Scrolling flies the camera down to the
 * phone, which unlocks into the list of projects I've contributed to.
 */

const SW = 1.6, SH = SW * SHEET_H / SHEET_W // sheet size in desk units
const PHONE = { w: 0.4, h: 0.82, t: 0.034 }
const MUG_R = 0.085

type P = { x: number; z: number; r: number }
type Layout = {
  sheet: P; pad: P; card: P; id: P; phone: P; pencil: P; stickies: P[]
  mugPx: [number, number] // initial mug position, in sheet pixels
  frame: { x0: number; x1: number; z0: number; z1: number } // landing framing
}
const WIDE: Layout = {
  sheet: { x: -0.35, z: 0, r: 0.012 },
  pad: { x: 0.98, z: -0.1, r: -0.035 },
  card: { x: 1.0, z: 0.56, r: 0.05 },
  phone: { x: 1.72, z: 0.08, r: 0.07 },
  id: { x: -0.9, z: 0.73, r: -0.1 },
  pencil: { x: 0.55, z: 0.66, r: 0.35 },
  stickies: [{ x: -0.86, z: -0.71, r: 0.12 }, { x: 1.66, z: -0.56, r: -0.1 }, { x: 1.38, z: 0.72, r: 0.08 }],
  mugPx: [1160, 840],
  frame: { x0: -1.22, x1: 1.96, z0: -0.62, z1: 0.66 },
}
const TALL: Layout = {
  sheet: { x: 0, z: -0.62, r: 0.01 },
  pad: { x: -0.37, z: 0.5, r: -0.04 },
  card: { x: -0.3, z: 1.2, r: 0.05 },
  phone: { x: 0.4, z: 0.53, r: 0.06 },
  id: { x: 0.46, z: 1.16, r: -0.1 },
  pencil: { x: 0.12, z: 0.0, r: 0.12 },
  stickies: [{ x: -0.6, z: -1.36, r: 0.12 }, { x: 0.64, z: -1.33, r: -0.1 }, { x: 0.0, z: 1.55, r: 0.05 }],
  mugPx: [1500, 820],
  frame: { x0: -0.84, x1: 0.84, z0: -1.3, z1: 1.3 },
}

const smooth = (a: number, b: number, x: number) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t) }
const lerp = (a: number, b: number, t: number) => a + (b - a) * t

function tex(cv: HTMLCanvasElement, r: THREE.WebGLRenderer) {
  const t = new THREE.CanvasTexture(cv)
  t.colorSpace = THREE.SRGBColorSpace
  t.anisotropy = r.capabilities.getMaxAnisotropy()
  return t
}
function flat(w: number, h: number, map: THREE.Texture, y: number) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshLambertMaterial({ map }))
  m.rotation.x = -Math.PI / 2; m.position.y = y; m.receiveShadow = true
  return m
}

export type DeskState = { progress: number; active: number; phase: 'desk' | 'zoom' | 'phone' }

export class Desk {
  private renderer: THREE.WebGLRenderer
  private scene = new THREE.Scene()
  private camera = new THREE.PerspectiveCamera(30, 1, 0.05, 50)
  private sheet = new CvSheet()
  private screen = new PhoneScreen()
  private sheetTex!: THREE.CanvasTexture
  private screenTex!: THREE.CanvasTexture
  private objs: Record<string, THREE.Object3D> = {}
  private stickies: THREE.Object3D[] = []
  private layout = WIDE
  private mug = new THREE.Group()
  private phone = new THREE.Group()
  private ray = new THREE.Raycaster()
  private ndc = new THREE.Vector2()
  private drag: null | { kind: 'mug'; dx: number; dz: number } | { kind: 'name'; grab: { x: number; y: number } } = null
  private target = 0 // scroll progress through the stage (0..1)
  private shown = 0 // smoothed
  private sheetDirty = true
  private lastScreen = ''
  private running = false
  private last = 0
  onFrame?: (s: DeskState) => void

  constructor(private canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' })
    this.renderer.setPixelRatio(Math.min(2, devicePixelRatio || 1))
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFShadowMap
    this.scene.background = new THREE.Color('#2a1d14')
    this.build()
  }

  /** Paint textures that need web fonts, then start. */
  ready() {
    this.sheet.init(); this.screen.init()
    this.sheetDirty = true; this.lastScreen = ''
    this.resize()
  }

  private build() {
    const r = this.renderer, s = this.scene
    // lights: warm room light + a key light from the top left for soft shadows
    s.add(new THREE.HemisphereLight('#fff4e6', '#5a3c26', 1.9))
    const key = new THREE.DirectionalLight('#fff1dc', 2.2)
    key.position.set(-1.6, 3.4, -1.2)
    key.castShadow = true
    key.shadow.mapSize.set(2048, 2048)
    Object.assign(key.shadow.camera, { left: -2.6, right: 2.6, top: 2.2, bottom: -2.2, near: 0.5, far: 8 })
    key.shadow.camera.updateProjectionMatrix()
    key.shadow.bias = -0.0004; key.shadow.normalBias = 0.01; key.shadow.radius = 6
    s.add(key)

    // desk
    const wt = tex(wood(), r); wt.wrapS = wt.wrapT = THREE.RepeatWrapping; wt.repeat.set(1.6, 1.8)
    const desk = new THREE.Mesh(new THREE.BoxGeometry(9, 0.12, 6), new THREE.MeshStandardMaterial({ map: wt, roughness: 0.72 }))
    desk.position.y = -0.06; desk.receiveShadow = true
    s.add(desk)

    // CV sheet (live Pretext texture)
    this.sheetTex = tex(this.sheet.canvas, r)
    this.objs.sheet = flat(SW, SH, this.sheetTex, 0.001)

    // notepad: a block of paper + the top page + spiral rings
    const pad = new THREE.Group()
    const block = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.024, 0.85), new THREE.MeshLambertMaterial({ color: '#efe9dc' }))
    block.position.y = 0.012; block.castShadow = block.receiveShadow = true
    pad.add(block, flat(0.62, 0.85, tex(notepad(), r), 0.0245))
    const ringMat = new THREE.MeshStandardMaterial({ color: '#c9c4bb', metalness: 0.9, roughness: 0.3 })
    for (let i = 0; i < 9; i++) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.02, 0.0035, 8, 20), ringMat)
      ring.position.set(-0.29 + i * 0.0705 * (0.62 / 0.66), 0.03, -0.395); ring.rotation.y = Math.PI / 2; ring.castShadow = true
      pad.add(ring)
    }
    this.objs.pad = pad

    this.objs.card = flat(0.56, 0.347, tex(indexCard(), r), 0.0012)
    this.objs.card.castShadow = true

    const id = new THREE.Group()
    const idBody = new THREE.Mesh(new RoundedBoxGeometry(0.48, 0.006, 0.3, 2, 0.02), new THREE.MeshStandardMaterial({ color: '#f5f0e6', roughness: 0.4 }))
    idBody.position.y = 0.003; idBody.castShadow = idBody.receiveShadow = true
    id.add(idBody, flat(0.46, 0.289, tex(idCard(), r), 0.0062))
    this.objs.id = id

    const notes: [string, string][] = [['60 FPS or bust ✳', '#f7d96b'], ['Open to new adventures', '#f6a77e'], ['Always trying new libraries', '#b9d8a4']]
    notes.forEach(([t, c], i) => {
      const m = flat(0.22, 0.22, tex(sticky(t, c, 20 + i), r), 0.0016 + i * 0.0002)
      this.stickies.push(m)
    })

    // pencil (lies along its local x)
    const pencil = new THREE.Group()
    const len = 0.42
    const bodyMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, len, 6), new THREE.MeshStandardMaterial({ color: '#f2b632', roughness: 0.5 }))
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.012, 0.05, 6), new THREE.MeshStandardMaterial({ color: '#e8c79a', roughness: 0.8 }))
    tip.position.y = len / 2 + 0.025
    const lead = new THREE.Mesh(new THREE.ConeGeometry(0.0045, 0.018, 6), new THREE.MeshStandardMaterial({ color: '#333' }))
    lead.position.y = len / 2 + 0.041
    const ferrule = new THREE.Mesh(new THREE.CylinderGeometry(0.0125, 0.0125, 0.025, 12), new THREE.MeshStandardMaterial({ color: '#b8b2a7', metalness: 0.8, roughness: 0.3 }))
    ferrule.position.y = -len / 2 - 0.0125
    const eraser = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.03, 12), new THREE.MeshStandardMaterial({ color: '#e88b8b', roughness: 0.9 }))
    eraser.position.y = -len / 2 - 0.04
    for (const m of [bodyMesh, tip, lead, ferrule, eraser]) { m.castShadow = true; pencil.add(m) }
    pencil.children.forEach((m) => { m.rotation.z = -Math.PI / 2; m.position.set(m.position.y, 0.012, 0) })
    this.objs.pencil = pencil

    // coffee mug
    const mugMat = new THREE.MeshStandardMaterial({ color: '#d9502a', roughness: 0.35 })
    const profile = [[0, 0], [0.078, 0], [0.085, 0.01], [0.085, 0.16], [0.077, 0.16], [0.077, 0.012], [0, 0.012]].map(([x, y]) => new THREE.Vector2(x, y))
    const cup = new THREE.Mesh(new THREE.LatheGeometry(profile, 48), mugMat)
    const handle = new THREE.Mesh(new THREE.TorusGeometry(0.042, 0.011, 12, 32, Math.PI), mugMat)
    handle.rotation.z = -Math.PI / 2; handle.position.set(0.083, 0.085, 0)
    const coffee = new THREE.Mesh(new THREE.CircleGeometry(0.077, 40), new THREE.MeshStandardMaterial({ color: '#3b2112', roughness: 0.15 }))
    coffee.rotation.x = -Math.PI / 2; coffee.position.y = 0.13
    const crema = new THREE.Mesh(new THREE.RingGeometry(0.05, 0.077, 40), new THREE.MeshStandardMaterial({ color: '#8a5a33', roughness: 0.4, transparent: true, opacity: 0.55 }))
    crema.rotation.x = -Math.PI / 2; crema.position.y = 0.1305
    for (const m of [cup, handle]) { m.castShadow = true; m.receiveShadow = true }
    this.mug.add(cup, handle, coffee, crema)
    this.mug.rotation.y = 0.6

    // phone
    const body = new THREE.Mesh(new RoundedBoxGeometry(PHONE.w, PHONE.t, PHONE.h, 5, 0.05), new THREE.MeshStandardMaterial({ color: '#1c1c1f', metalness: 0.4, roughness: 0.35 }))
    body.position.y = PHONE.t / 2; body.castShadow = true
    this.screenTex = tex(this.screen.canvas, r)
    const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.372, 0.805), new THREE.MeshBasicMaterial({ map: this.screenTex, transparent: true, toneMapped: false }))
    screen.rotation.x = -Math.PI / 2; screen.position.y = PHONE.t + 0.0006
    this.phone.add(body, screen)

    s.add(this.objs.sheet, pad, this.objs.card, id, pencil, this.mug, this.phone, ...this.stickies)
  }

  private place(l: Layout) {
    this.layout = l
    const put = (o: THREE.Object3D, p: P) => { o.position.x = p.x; o.position.z = p.z; o.rotation.y = -p.r }
    put(this.objs.sheet, l.sheet)
    // the sheet plane is rotated -90° about X, so its spin goes on Z
    this.objs.sheet.rotation.set(-Math.PI / 2, 0, -l.sheet.r)
    put(this.objs.pad, l.pad); put(this.objs.id, l.id); put(this.objs.pencil, l.pencil)
    this.objs.card.position.set(l.card.x, 0.0012, l.card.z); this.objs.card.rotation.set(-Math.PI / 2, 0, -l.card.r)
    this.stickies.forEach((m, i) => { const p = l.stickies[i]; m.position.set(p.x, m.position.y, p.z); m.rotation.set(-Math.PI / 2, 0, -p.r) })
    const [mx, mz] = this.sheetToWorld(l.mugPx[0], l.mugPx[1])
    this.mug.position.set(mx, 0.001, mz)
    this.sheetDirty = true
  }

  // --- sheet <-> desk coordinates ---------------------------------------------------
  private sheetToWorld(px: number, py: number): [number, number] {
    const s = this.layout.sheet
    const lx = (px / SHEET_W - 0.5) * SW, lz = (py / SHEET_H - 0.5) * SH
    const c = Math.cos(s.r), n = Math.sin(s.r)
    return [s.x + lx * c - lz * n, s.z + lx * n + lz * c]
  }
  private worldToSheet(x: number, z: number): [number, number] {
    const s = this.layout.sheet
    const dx = x - s.x, dz = z - s.z, c = Math.cos(s.r), n = Math.sin(s.r)
    const lx = dx * c + dz * n, lz = -dx * n + dz * c
    return [(lx / SW + 0.5) * SHEET_W, (lz / SH + 0.5) * SHEET_H]
  }

  /** Footprints of things lying on the sheet, for the text to flow around. */
  private obstacles(): { circles: Circle[]; boxes: Box[] } {
    const k = SHEET_W / SW
    const [mx, my] = this.worldToSheet(this.mug.position.x, this.mug.position.z)
    const circles: Circle[] = [{ x: mx, y: my, r: MUG_R * k + 46 }]
    const boxes: Box[] = []
    const id = this.layout.id
    const corners = [[-0.24, -0.15], [0.24, -0.15], [0.24, 0.15], [-0.24, 0.15]].map(([a, b]) => {
      const c = Math.cos(id.r), n = Math.sin(id.r)
      return this.worldToSheet(id.x + a * c - b * n, id.z + a * n + b * c)
    })
    const xs = corners.map((p) => p[0]), ys = corners.map((p) => p[1])
    boxes.push({ x: Math.min(...xs) - 30, y: Math.min(...ys) - 24, w: Math.max(...xs) - Math.min(...xs) + 60, h: Math.max(...ys) - Math.min(...ys) + 48 })
    return { circles, boxes }
  }

  // --- camera ------------------------------------------------------------------------
  private fit(cx: number, cz: number, w: number, h: number) {
    const t = Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2))
    const d = Math.max(h / (2 * t), w / (2 * t * this.camera.aspect))
    return { cx, cz, d }
  }
  private cameraAt(s: number) {
    const f = this.layout.frame
    const a = this.fit((f.x0 + f.x1) / 2, (f.z0 + f.z1) / 2, f.x1 - f.x0, f.z1 - f.z0)
    const p = this.layout.phone
    const b = this.fit(p.x, p.z, PHONE.w * 1.25, PHONE.h * 1.24)
    const t = smooth(0.06, 0.4, s)
    const cx = lerp(a.cx, b.cx, t), cz = lerp(a.cz, b.cz, t), d = lerp(a.d, b.d, t)
    const tilt = Math.sin(Math.PI * t)
    this.camera.position.set(cx - tilt * d * 0.12, d * (1 - tilt * 0.08) + PHONE.t * t, cz + tilt * d * 0.42)
    this.camera.up.set(0, 0, -1)
    this.camera.lookAt(cx, PHONE.t * t, cz)
    // the phone lifts a little and straightens as we arrive
    this.phone.position.set(p.x, t * 0.03, p.z)
    this.phone.rotation.set(0, -p.r * (1 - t), 0)
    return t
  }

  // --- public ------------------------------------------------------------------------
  setProgress(p: number) { this.target = Math.min(1, Math.max(0, p)) }

  resize() {
    const w = this.canvas.clientWidth, h = this.canvas.clientHeight
    if (!w || !h) return
    this.renderer.setSize(w, h, false)
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
    const want = w / h < 0.85 ? TALL : WIDE
    if (want !== this.layout || !this.objs.sheet.userData.placed) { this.place(want); this.objs.sheet.userData.placed = true }
  }

  start() {
    if (this.running) return
    this.running = true; this.last = performance.now()
    const loop = (now: number) => {
      if (!this.running) return
      this.frame(Math.min(0.05, (now - this.last) / 1000)); this.last = now
      requestAnimationFrame(loop)
    }
    requestAnimationFrame(loop)
  }
  stop() { this.running = false }

  private frame(dt: number) {
    this.shown += (this.target - this.shown) * (1 - Math.exp(-dt * 7))
    if (Math.abs(this.target - this.shown) < 0.0002) this.shown = this.target
    const s = this.shown
    this.cameraAt(s)

    if (this.sheet.step(dt)) this.sheetDirty = true
    if (this.sheetDirty) {
      const o = this.obstacles()
      this.sheet.draw(o.circles, o.boxes)
      this.sheetTex.needsUpdate = true
      this.sheetDirty = false
    }

    const unlock = smooth(0.37, 0.46, s)
    const scroll = Math.min(1, Math.max(0, (s - 0.47) / (0.95 - 0.47)))
    const now = new Date()
    const key = `${unlock.toFixed(3)}|${scroll.toFixed(4)}|${now.getMinutes()}`
    if (key !== this.lastScreen) {
      this.screen.draw(unlock, scroll, now)
      this.screenTex.needsUpdate = true
      this.lastScreen = key
    }

    this.renderer.render(this.scene, this.camera)
    this.onFrame?.({ progress: s, active: this.screen.active, phase: s < 0.06 ? 'desk' : s < 0.42 ? 'zoom' : 'phone' })
  }

  // --- pointer: drag the mug or my name, lens over the sheet ---------------------------
  private pick(e: PointerEvent) {
    const r = this.canvas.getBoundingClientRect()
    this.ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1)
    this.ray.setFromCamera(this.ndc, this.camera)
  }
  private deskPoint() {
    const p = new THREE.Vector3()
    return this.ray.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), p) ? p : null
  }
  private sheetPx(): [number, number] | null {
    const hit = this.ray.intersectObject(this.objs.sheet)[0]
    if (!hit?.uv) return null
    return [hit.uv.x * SHEET_W, (1 - hit.uv.y) * SHEET_H]
  }
  private interactive() { return this.shown < 0.05 }

  pointerMove(e: PointerEvent) {
    this.pick(e)
    const lens = this.sheet.lens
    if (this.drag?.kind === 'mug') {
      const p = this.deskPoint()
      if (p) {
        this.mug.position.x = THREE.MathUtils.clamp(p.x - this.drag.dx, -3.5, 3.5)
        this.mug.position.z = THREE.MathUtils.clamp(p.z - this.drag.dz, -2.2, 2.2)
        this.sheetDirty = true
      }
    }
    const px = this.sheetPx()
    if (this.drag?.kind === 'name' && px) this.sheet.dragTo(px[0], px[1], this.drag.grab)
    const overMug = this.interactive() && this.ray.intersectObject(this.mug, true).length > 0
    const overName = this.interactive() && !!px && this.sheet.hitName(px[0], px[1])
    lens.on = this.interactive() && !!px && !this.drag && !overMug && e.pointerType === 'mouse'
    if (px) { if (lens.a < 0.02) { lens.x = px[0]; lens.y = px[1] } lens.tx = px[0]; lens.ty = px[1] }
    this.canvas.style.cursor = this.drag ? 'grabbing' : overMug || overName ? 'grab' : ''
    this.sheetDirty = true
  }
  pointerDown(e: PointerEvent) {
    if (!this.interactive()) return false
    this.pick(e)
    if (this.ray.intersectObject(this.mug, true).length) {
      const p = this.deskPoint()
      if (p) { this.drag = { kind: 'mug', dx: p.x - this.mug.position.x, dz: p.z - this.mug.position.z }; return true }
    }
    const px = this.sheetPx()
    if (px && this.sheet.hitName(px[0], px[1])) {
      this.drag = { kind: 'name', grab: this.sheet.grabPoint(px[0], px[1]) }
      this.sheet.dragging = true
      return true
    }
    return false
  }
  pointerUp() { this.drag = null; this.sheet.dragging = false; this.canvas.style.cursor = '' }
  pointerLeave() { this.sheet.lens.on = false }
}
