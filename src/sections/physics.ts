import * as THREE from 'three'

/*
 * Box3D (Erin Catto's 3D physics engine, written in C) running as WebAssembly.
 * Boxes drop into a tray; click to throw a ball, or blow everything up.
 * The numbers in the HUD are measured live on this page.
 */

type Vec = { x: number; y: number; z: number }
type Quat = Vec & { w: number }
type Body = { getPosition(): Vec; getRotation(): Quat; isAwake(): boolean; destroy(): void; delete(): void; createBox(o: object): unknown; createSphere(o: object): unknown }
type World = { createBody(o: object): Body; step(dt: number, sub: number): void; getAwakeBodyCount(): number; explode(o: object): void; destroy(): void }
type B3 = { World: new (o: object) => World }

const MAX_BOXES = 260, MAX_BALLS = 40
const COLORS = ['#d9502a', '#f0794d', '#e9b949', '#5c8a5a', '#93b88a', '#ebe4d7', '#3d6e8f']

export async function startPhysics(canvas: HTMLCanvasElement, hud: (k: string, v: string) => void) {
  const t0 = performance.now()
  const { default: Box3D } = await import('box3d-wasm/standard')
  const b3 = (await Box3D()) as B3
  const loadMs = performance.now() - t0
  const wasm = performance.getEntriesByType('resource').find((e) => /box3d.*\.wasm/.test(e.name)) as PerformanceResourceTiming | undefined
  hud('load', `${Math.round(loadMs)} ms`)
  if (wasm?.decodedBodySize) hud('size', `${Math.round(wasm.decodedBodySize / 1024)} KB`)

  // --- three.js view ---
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
  renderer.setPixelRatio(Math.min(2, devicePixelRatio || 1))
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap
  const scene = new THREE.Scene()
  scene.background = new THREE.Color('#1f1a16')
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100)
  scene.add(new THREE.HemisphereLight('#fff4e6', '#3a2a1e', 1.6))
  const sun = new THREE.DirectionalLight('#fff1dc', 2.4)
  sun.position.set(-6, 12, 5); sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048)
  Object.assign(sun.shadow.camera, { left: -9, right: 9, top: 9, bottom: -9, near: 1, far: 40 }); sun.shadow.camera.updateProjectionMatrix()
  scene.add(sun)

  const floor = new THREE.Mesh(new THREE.BoxGeometry(14, 0.4, 9), new THREE.MeshStandardMaterial({ color: '#2b241e', roughness: 0.9 }))
  floor.position.y = -0.2; floor.receiveShadow = true; scene.add(floor)
  const wallMat = new THREE.MeshStandardMaterial({ color: '#3a3029', roughness: 0.8 })
  const walls: [number, number, number, number, number, number][] = [[0, 0.5, -4.5, 14, 1, 0.3], [0, 0.5, 4.5, 14, 1, 0.3], [-7, 0.5, 0, 0.3, 1, 9], [7, 0.5, 0, 0.3, 1, 9]]
  for (const [x, y, z, w, h, d] of walls) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wallMat); m.position.set(x, y, z); m.castShadow = m.receiveShadow = true; scene.add(m)
  }

  const boxMesh = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial({ roughness: 0.45 }), MAX_BOXES)
  boxMesh.castShadow = boxMesh.receiveShadow = true; boxMesh.count = 0; scene.add(boxMesh)
  const ballMesh = new THREE.InstancedMesh(new THREE.SphereGeometry(0.4, 24, 16), new THREE.MeshStandardMaterial({ color: '#f5f0e6', roughness: 0.25, metalness: 0.1 }), MAX_BALLS)
  ballMesh.castShadow = true; ballMesh.count = 0; scene.add(ballMesh)

  // --- Box3D world ---
  let world!: World
  let boxes: { body: Body; s: number }[] = []
  let balls: Body[] = []
  let ballCursor = 0
  const color = new THREE.Color()

  function addBox(x: number, y: number, z: number, s: number) {
    if (boxes.length >= MAX_BOXES) return
    const body = world.createBody({ type: 'dynamic', position: { x, y, z }, rotation: randomQuat(0.4) })
    body.createBox({ halfExtents: { x: s / 2, y: s / 2, z: s / 2 }, density: 1, friction: 0.6, restitution: 0.1 })
    boxMesh.setColorAt(boxes.length, color.set(COLORS[boxes.length % COLORS.length]))
    boxes.push({ body, s })
    boxMesh.count = boxes.length
    if (boxMesh.instanceColor) boxMesh.instanceColor.needsUpdate = true
  }
  function randomQuat(k: number): Quat {
    const e = new THREE.Euler((Math.random() - 0.5) * k, Math.random() * Math.PI, (Math.random() - 0.5) * k)
    const q = new THREE.Quaternion().setFromEuler(e)
    return { x: q.x, y: q.y, z: q.z, w: q.w }
  }
  function reset() {
    world?.destroy()
    world = new b3.World({ gravity: { x: 0, y: -10, z: 0 }, enableSleep: true })
    boxes = []; balls = []; ballCursor = 0; boxMesh.count = 0; ballMesh.count = 0
    const ground = world.createBody({ type: 'static', position: { x: 0, y: -0.2, z: 0 } })
    ground.createBox({ halfExtents: { x: 7, y: 0.2, z: 4.5 }, friction: 0.7 })
    for (const [x, y, z, w, h, d] of walls) {
      const b = world.createBody({ type: 'static', position: { x, y: y + 1.5, z } })
      b.createBox({ halfExtents: { x: w / 2, y: (h + 3) / 2, z: d / 2 } })
    }
    // a pyramid to knock over
    const s = 0.8
    for (let row = 0; row < 7; row++)
      for (let i = 0; i < 7 - row; i++) {
        const body = world.createBody({ type: 'dynamic', position: { x: (i - (6 - row) / 2) * (s + 0.02), y: s / 2 + row * s, z: 0 } })
        body.createBox({ halfExtents: { x: s / 2, y: s / 2, z: s / 2 }, density: 1, friction: 0.6 })
        boxMesh.setColorAt(boxes.length, color.set(COLORS[row % COLORS.length]))
        boxes.push({ body, s })
      }
    boxMesh.count = boxes.length
    if (boxMesh.instanceColor) boxMesh.instanceColor.needsUpdate = true
  }
  function drop(n: number) {
    for (let i = 0; i < n; i++) addBox((Math.random() - 0.5) * 9, 6 + Math.random() * 6, (Math.random() - 0.5) * 5, 0.45 + Math.random() * 0.5)
  }
  function shoot(origin: THREE.Vector3, dir: THREE.Vector3) {
    if (balls.length >= MAX_BALLS) { const old = balls[ballCursor]; old.destroy(); old.delete() }
    const b = world.createBody({ type: 'dynamic', position: { x: origin.x, y: origin.y, z: origin.z }, linearVelocity: { x: dir.x * 26, y: dir.y * 26, z: dir.z * 26 } })
    b.createSphere({ radius: 0.4, density: 4, friction: 0.4, restitution: 0.3 })
    if (balls.length < MAX_BALLS) balls.push(b); else { balls[ballCursor] = b; ballCursor = (ballCursor + 1) % MAX_BALLS }
    ballMesh.count = balls.length
  }
  reset()

  // --- input ---
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2()
  canvas.addEventListener('pointerdown', (e) => {
    const r = canvas.getBoundingClientRect()
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1)
    ray.setFromCamera(ndc, camera)
    shoot(camera.position.clone().addScaledVector(ray.ray.direction, 1.5), ray.ray.direction.clone())
  })
  const actions: Record<string, () => void> = {
    drop: () => drop(40),
    explode: () => world.explode({ position: { x: 0, y: 0.2, z: 0 }, radius: 6, falloff: 3, impulsePerArea: 14 }),
    reset,
  }

  // --- loop ---
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), sc = new THREE.Vector3()
  let running = false, acc = 0, last = 0, stepAvg = 0, hudT = 0, angle = 0
  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix()
  }
  function frame(now: number) {
    if (!running) return
    const dt = Math.min(0.05, (now - last) / 1000); last = now
    acc += dt
    let steps = 0
    while (acc >= 1 / 60 && steps < 3) {
      const s0 = performance.now()
      world.step(1 / 60, 4)
      stepAvg = stepAvg * 0.9 + (performance.now() - s0) * 0.1
      acc -= 1 / 60; steps++
    }
    if (steps === 3) acc = 0
    boxes.forEach(({ body, s }, i) => {
      const bp = body.getPosition(), bq = body.getRotation()
      m4.compose(p.set(bp.x, bp.y, bp.z), q.set(bq.x, bq.y, bq.z, bq.w), sc.set(s, s, s)); boxMesh.setMatrixAt(i, m4)
    })
    boxMesh.instanceMatrix.needsUpdate = true
    balls.forEach((b, i) => { const bp = b.getPosition(); m4.makeTranslation(bp.x, bp.y, bp.z); ballMesh.setMatrixAt(i, m4) })
    ballMesh.instanceMatrix.needsUpdate = true
    angle += dt * 0.08
    camera.position.set(Math.sin(angle) * 13, 7.5, Math.cos(angle) * 13); camera.lookAt(0, 1.2, 0)
    renderer.render(scene, camera)
    if (now - hudT > 250) {
      hudT = now
      hud('bodies', String(boxes.length + balls.length))
      hud('awake', String(world.getAwakeBodyCount()))
      hud('step', `${stepAvg.toFixed(2)} ms`)
    }
    requestAnimationFrame(frame)
  }
  new ResizeObserver(resize).observe(canvas)
  resize()
  return {
    actions,
    start() { if (!running) { running = true; last = performance.now(); requestAnimationFrame(frame) } },
    stop() { running = false },
  }
}
