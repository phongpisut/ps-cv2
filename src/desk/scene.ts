import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'
import { PhoneScreen } from './phone'
import { wood, notepad, indexCard, idCard } from './paint'

/*
 * The desk, revealed when the Pretext overlay fades out: my journey notepad, education
 * card, ID badge, mug, pencil and phone, centred. Scrolling flies the camera down to the
 * phone, which unlocks into the list of projects I've contributed to.
 * Rendered on demand only: nothing is drawn while nothing moves.
 */

const PHONE = { w: 0.4, h: 0.82, t: 0.034 }

type P = { x: number; z: number; r: number }
type Layout = {
  pad: P; card: P; id: P; phone: P; pencil: P
  mug: [number, number]
  frame: { x0: number; x1: number; z0: number; z1: number } // landing framing
}
const WIDE: Layout = {
  pad: { x: -0.55, z: -0.08, r: -0.035 },
  card: { x: -0.5, z: 0.62, r: 0.05 },
  id: { x: 0.08, z: 0.66, r: 0.09 },
  phone: { x: 0.4, z: 0.0, r: 0.07 },
  pencil: { x: 0.92, z: 0.45, r: 1.15 },
  mug: [1.0, -0.3],
  frame: { x0: -1.0, x1: 1.25, z0: -0.62, z1: 0.86 },
}
const TALL: Layout = {
  pad: { x: -0.33, z: -0.5, r: -0.04 },
  phone: { x: 0.4, z: -0.45, r: 0.06 },
  card: { x: -0.3, z: 0.26, r: 0.05 },
  id: { x: 0.36, z: 0.3, r: 0.08 },
  pencil: { x: -0.22, z: 0.66, r: 0.1 },
  mug: [0.44, 0.68],
  frame: { x0: -0.72, x1: 0.74, z0: -1.0, z1: 0.84 },
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

export type DeskState = { progress: number; active: number; phase: 'hero' | 'desk' | 'zoom' | 'phone' } // active = workplace number

export class Desk {
  private renderer: THREE.WebGLRenderer
  private scene = new THREE.Scene()
  private camera = new THREE.PerspectiveCamera(30, 1, 0.05, 50)
  private screen = new PhoneScreen()
  private screenTex!: THREE.CanvasTexture
  private objs: Record<string, THREE.Object3D> = {}
  private layout = WIDE
  private mug = new THREE.Group()
  private phone = new THREE.Group()
  private placed = false
  private target = 0 // scroll progress through the stage (0..1)
  private shown = 0 // smoothed
  private lastScreen = ''
  private needsRender = true // render on demand: only when something changed
  private lastT = -1
  private running = false
  private last = 0
  onFrame?: (s: DeskState) => void

  constructor(private canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' })
    this.renderer.setPixelRatio(Math.min(1.5, devicePixelRatio || 1))
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.autoUpdate = false // static desk: re-render shadows only when the phone moves
    this.renderer.shadowMap.type = THREE.PCFShadowMap
    this.scene.background = new THREE.Color('#2a1d14')
    this.build()
  }

  /** Paint textures that need web fonts, then start. */
  ready() {
    this.screen.init()
    this.lastScreen = ''
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

    // notepad: a block of paper + the top page + spiral rings
    const pad = new THREE.Group()
    const block = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.024, 0.85), new THREE.MeshLambertMaterial({ color: '#efe9dc' }))
    block.position.y = 0.012; block.castShadow = block.receiveShadow = true
    pad.add(block, flat(0.62, 0.85, tex(notepad(), r), 0.0245))
    const ringMat = new THREE.MeshStandardMaterial({ color: '#c9c4bb', metalness: 0.9, roughness: 0.3 })
    const rings = new THREE.InstancedMesh(new THREE.TorusGeometry(0.02, 0.0035, 8, 20), ringMat, 9) // one draw call
    const m4 = new THREE.Matrix4(), rq = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2), one = new THREE.Vector3(1, 1, 1)
    for (let i = 0; i < 9; i++) rings.setMatrixAt(i, m4.compose(new THREE.Vector3(-0.29 + i * 0.0705 * (0.62 / 0.66), 0.03, -0.395), rq, one))
    rings.castShadow = true
    pad.add(rings)
    this.objs.pad = pad

    this.objs.card = flat(0.56, 0.347, tex(indexCard(), r), 0.0012)
    this.objs.card.castShadow = true

    const id = new THREE.Group()
    const idBody = new THREE.Mesh(new RoundedBoxGeometry(0.48, 0.006, 0.3, 2, 0.02), new THREE.MeshStandardMaterial({ color: '#f5f0e6', roughness: 0.4 }))
    idBody.position.y = 0.003; idBody.castShadow = idBody.receiveShadow = true
    id.add(idBody, flat(0.46, 0.289, tex(idCard(), r), 0.0062))
    this.objs.id = id


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

    s.add(pad, this.objs.card, id, pencil, this.mug, this.phone)
  }

  private place(l: Layout) {
    this.layout = l
    const put = (o: THREE.Object3D, p: P) => { o.position.x = p.x; o.position.z = p.z; o.rotation.y = -p.r }
    put(this.objs.pad, l.pad); put(this.objs.id, l.id); put(this.objs.pencil, l.pencil)
    this.objs.card.position.set(l.card.x, 0.0012, l.card.z); this.objs.card.rotation.set(-Math.PI / 2, 0, -l.card.r)
    this.mug.position.set(l.mug[0], 0.001, l.mug[1])
    this.renderer.shadowMap.needsUpdate = true
    this.needsRender = true
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
    const t = smooth(0.16, 0.45, s)
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
    this.renderer.shadowMap.needsUpdate = true
    this.needsRender = true
    const want = w / h < 0.85 ? TALL : WIDE
    if (want !== this.layout || !this.placed) { this.place(want); this.placed = true }
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
    const prev = this.shown
    this.shown += (this.target - this.shown) * (1 - Math.exp(-dt * 7))
    if (Math.abs(this.target - this.shown) < 0.0002) this.shown = this.target
    const s = this.shown
    let draw = this.needsRender || s !== prev
    if (draw) {
      const t = this.cameraAt(s)
      if (t !== this.lastT) { this.lastT = t; this.renderer.shadowMap.needsUpdate = true } // the phone moved
    }

    const unlock = smooth(0.43, 0.52, s)
    const scroll = Math.min(1, Math.max(0, (s - 0.53) / (0.96 - 0.53)))
    const now = new Date()
    const key = `${unlock.toFixed(3)}|${scroll.toFixed(4)}|${now.getMinutes()}`
    if (key !== this.lastScreen) {
      this.screen.draw(unlock, scroll, now)
      this.screenTex.needsUpdate = true
      this.lastScreen = key
      draw = true
    }

    if (draw) { this.renderer.render(this.scene, this.camera); this.needsRender = false }
    this.onFrame?.({ progress: s, active: this.screen.activeN, phase: s < 0.07 ? 'hero' : s < 0.16 ? 'desk' : s < 0.47 ? 'zoom' : 'phone' })
  }
}
