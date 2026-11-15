import { SANS, SERIF } from '../desk/paint'

/*
 * Raw WebGPU: 131,072 particles spell my name. Every frame a compute pass (WGSL) moves
 * all of them on the GPU — springs home, gets pushed by the cursor — and a render pass
 * draws them straight from the same buffer. The CPU only uploads 32 bytes of uniforms.
 */

const N = 1 << 17
const STRIDE = 6 // pos.xy, vel.xy, home.xy

const COMMON = /* wgsl */ `
struct P { pos: vec2f, vel: vec2f, home: vec2f };
struct U { pointer: vec2f, aspect: f32, time: f32, dt: f32, force: f32, size: f32, pad: f32 };
`
const SIM = COMMON + /* wgsl */ `
@group(0) @binding(0) var<storage, read_write> ps: array<P>;
@group(0) @binding(1) var<uniform> u: U;

@compute @workgroup_size(256)
fn sim(@builtin(global_invocation_id) id: vec3u) {
  let i = id.x;
  if (i >= arrayLength(&ps)) { return; }
  var p = ps[i];
  var acc = (p.home - p.pos) * 14.0;
  var d = p.pos - u.pointer;
  d.x *= u.aspect;
  let dist = length(d) + 1e-4;
  let r = 0.2 + u.force * 0.25;
  if (dist < r) {
    let dir = normalize(vec2f(d.x / u.aspect, d.y));
    acc += dir * (1.0 - dist / r) * (30.0 + u.force * 220.0);
  }
  let n = sin(p.home.yx * vec2f(11.0, 7.0) + u.time * vec2f(1.1, 0.8));
  acc += vec2f(n.x, -n.y) * 0.35;
  p.vel = (p.vel + acc * u.dt) * exp(-u.dt * 4.5);
  p.pos += p.vel * u.dt;
  ps[i] = p;
}
`
const DRAW = COMMON + /* wgsl */ `
@group(0) @binding(0) var<storage, read> pr: array<P>;
@group(0) @binding(1) var<uniform> ur: U;

struct V { @builtin(position) pos: vec4f, @location(0) uv: vec2f, @location(1) speed: f32 };

@vertex
fn vs(@builtin(vertex_index) vi: u32, @builtin(instance_index) ii: u32) -> V {
  var corners = array<vec2f, 6>(vec2f(-1, -1), vec2f(1, -1), vec2f(-1, 1), vec2f(-1, 1), vec2f(1, -1), vec2f(1, 1));
  let c = corners[vi];
  let p = pr[ii];
  var o: V;
  o.pos = vec4f(p.pos + c * vec2f(ur.size / ur.aspect, ur.size), 0.0, 1.0);
  o.uv = c;
  o.speed = length(p.vel);
  return o;
}

@fragment
fn fs(v: V) -> @location(0) vec4f {
  let d = dot(v.uv, v.uv);
  if (d > 1.0) { discard; }
  let t = clamp(v.speed * 0.5, 0.0, 1.0);
  let col = mix(vec3f(0.98, 0.93, 0.84), vec3f(0.95, 0.45, 0.26), t);
  let a = (1.0 - d) * 0.85;
  return vec4f(col * a, a);
}
`

/** Sample points where my name has ink, in clip space for a canvas of this aspect. */
function namePoints(aspect: number): Float32Array {
  const H = 400, W = Math.round(H * aspect)
  const cv = document.createElement('canvas'); cv.width = W; cv.height = H
  const g = cv.getContext('2d', { willReadFrequently: true })!
  const size = Math.min(H * 0.34, W * 0.16)
  g.fillStyle = '#fff'; g.textAlign = 'center'
  g.font = `700 ${size}px ${SANS}`; g.fillText('Phongpisut', W / 2, H / 2 - size * 0.12)
  g.font = `italic 400 ${size * 1.1}px ${SERIF}`; g.fillText('Meemuk.', W / 2, H / 2 + size * 0.92)
  const data = g.getImageData(0, 0, W, H).data
  const pts: number[] = []
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if (data[(y * W + x) * 4 + 3] > 128) pts.push((x / W) * 2 - 1, -((y / H) * 2 - 1))
  return new Float32Array(pts)
}

export async function startWebGPU(canvas: HTMLCanvasElement, hud: (k: string, v: string) => void) {
  if (!navigator.gpu) throw new Error('no-webgpu')
  const adapter = await navigator.gpu.requestAdapter()
  if (!adapter) throw new Error('no-adapter')
  const device = await adapter.requestDevice()
  const ctx = canvas.getContext('webgpu')!
  const format = navigator.gpu.getPreferredCanvasFormat()
  ctx.configure({ device, format, alphaMode: 'premultiplied' })
  const info = (adapter as GPUAdapter & { info?: GPUAdapterInfo }).info
  hud('gpu', info?.description || info?.vendor || 'available')
  hud('count', N.toLocaleString('en-US'))

  const simModule = device.createShaderModule({ code: SIM })
  const module = device.createShaderModule({ code: DRAW })
  const particles = device.createBuffer({ size: N * STRIDE * 4, usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST })
  const uniforms = device.createBuffer({ size: 32, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST })
  const sim = device.createComputePipeline({ layout: 'auto', compute: { module: simModule, entryPoint: 'sim' } })
  const draw = device.createRenderPipeline({
    layout: 'auto',
    vertex: { module, entryPoint: 'vs' },
    fragment: { module, entryPoint: 'fs', targets: [{ format, blend: { color: { srcFactor: 'one', dstFactor: 'one-minus-src-alpha' }, alpha: { srcFactor: 'one', dstFactor: 'one-minus-src-alpha' } } }] },
    primitive: { topology: 'triangle-list' },
  })
  const bind = (p: GPUComputePipeline | GPURenderPipeline) => device.createBindGroup({
    layout: p.getBindGroupLayout(0), entries: [{ binding: 0, resource: { buffer: particles } }, { binding: 1, resource: { buffer: uniforms } }],
  })
  const simGroup = bind(sim), drawGroup = bind(draw)

  let aspect = 1
  function seed() {
    const pts = namePoints(aspect)
    const data = new Float32Array(N * STRIDE)
    for (let i = 0; i < N; i++) {
      const k = (Math.floor(Math.random() * (pts.length / 2))) * 2
      const o = i * STRIDE
      data[o] = (Math.random() * 2 - 1) * 1.2; data[o + 1] = (Math.random() * 2 - 1) * 1.2
      data[o + 4] = pts[k] + (Math.random() - 0.5) * 0.004; data[o + 5] = pts[k + 1] + (Math.random() - 0.5) * 0.004
    }
    device.queue.writeBuffer(particles, 0, data)
  }
  function resize() {
    const dpr = Math.min(2, devicePixelRatio || 1)
    const w = Math.max(1, Math.round(canvas.clientWidth * dpr)), h = Math.max(1, Math.round(canvas.clientHeight * dpr))
    if (canvas.width === w && canvas.height === h) return
    canvas.width = w; canvas.height = h
    aspect = w / h
    seed()
  }

  const pointer = { x: 9, y: 9, force: 0 }
  canvas.addEventListener('pointermove', (e) => {
    const r = canvas.getBoundingClientRect()
    pointer.x = ((e.clientX - r.left) / r.width) * 2 - 1; pointer.y = -(((e.clientY - r.top) / r.height) * 2 - 1)
  })
  canvas.addEventListener('pointerleave', () => { pointer.x = pointer.y = 9 })
  canvas.addEventListener('pointerdown', () => { pointer.force = 1 })

  const u = new Float32Array(8)
  let running = false, last = 0, t = 0, avg = 16, hudT = 0
  function frame(now: number) {
    if (!running) return
    const dt = Math.min(0.033, (now - last) / 1000); avg = avg * 0.95 + (now - last) * 0.05; last = now; t += dt
    pointer.force *= Math.exp(-dt * 3)
    u.set([pointer.x, pointer.y, aspect, t, dt, pointer.force, 0.0032 * (canvas.clientWidth < 600 ? 1.4 : 1), 0])
    device.queue.writeBuffer(uniforms, 0, u)
    const enc = device.createCommandEncoder()
    const cp = enc.beginComputePass(); cp.setPipeline(sim); cp.setBindGroup(0, simGroup); cp.dispatchWorkgroups(Math.ceil(N / 256)); cp.end()
    const rp = enc.beginRenderPass({ colorAttachments: [{ view: ctx.getCurrentTexture().createView(), loadOp: 'clear', storeOp: 'store', clearValue: { r: 0, g: 0, b: 0, a: 0 } }] })
    rp.setPipeline(draw); rp.setBindGroup(0, drawGroup); rp.draw(6, N); rp.end()
    device.queue.submit([enc.finish()])
    if (now - hudT > 400) { hudT = now; hud('frame', `${avg.toFixed(1)} ms`) }
    requestAnimationFrame(frame)
  }
  new ResizeObserver(resize).observe(canvas)
  resize()
  return {
    start() { if (!running) { running = true; last = performance.now(); requestAnimationFrame(frame) } },
    stop() { running = false },
  }
}
