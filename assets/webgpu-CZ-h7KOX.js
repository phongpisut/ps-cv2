import{f as O,g as q}from"./index-CfIjbAcG.js";const l=1<<17,w=6,R=`
struct P { pos: vec2f, vel: vec2f, home: vec2f };
struct U { pointer: vec2f, aspect: f32, time: f32, dt: f32, force: f32, size: f32, pad: f32 };
`,T=R+`
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
`,_=R+`
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
`;function D(o){const n=Math.round(400*o),r=document.createElement("canvas");r.width=n,r.height=400;const a=r.getContext("2d",{willReadFrequently:!0}),u=Math.min(400*.34,n*.16);a.fillStyle="#fff",a.textAlign="center",a.font=`700 ${u}px ${O}`,a.fillText("Phongpisut",n/2,400/2-u*.12),a.font=`italic 400 ${u*1.1}px ${q}`,a.fillText("Meemuk.",n/2,400/2+u*.92);const v=a.getImageData(0,0,n,400).data,m=[];for(let f=0;f<400;f++)for(let d=0;d<n;d++)v[(f*n+d)*4+3]>128&&m.push(d/n*2-1,-(f/400*2-1));return new Float32Array(m)}async function V(o,g){if(!navigator.gpu)throw new Error("no-webgpu");const n=await navigator.gpu.requestAdapter();if(!n)throw new Error("no-adapter");const r=await n.requestDevice(),a=o.getContext("webgpu"),u=navigator.gpu.getPreferredCanvasFormat();a.configure({device:r,format:u,alphaMode:"premultiplied"});const v=n.info;g("gpu",v?.description||v?.vendor||"available"),g("count",l.toLocaleString("en-US"));const m=r.createShaderModule({code:T}),f=r.createShaderModule({code:_}),d=r.createBuffer({size:l*w*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),M=r.createBuffer({size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),P=r.createComputePipeline({layout:"auto",compute:{module:m,entryPoint:"sim"}}),F=r.createRenderPipeline({layout:"auto",vertex:{module:f,entryPoint:"vs"},fragment:{module:f,entryPoint:"fs",targets:[{format:u,blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"}}),U=t=>r.createBindGroup({layout:t.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:d}},{binding:1,resource:{buffer:M}}]}),z=U(P),E=U(F);let y=1;function H(){const t=D(y),e=new Float32Array(l*w);for(let i=0;i<l;i++){const p=Math.floor(Math.random()*(t.length/2))*2,s=i*w;e[s]=(Math.random()*2-1)*1.2,e[s+1]=(Math.random()*2-1)*1.2,e[s+4]=t[p]+(Math.random()-.5)*.004,e[s+5]=t[p+1]+(Math.random()-.5)*.004}r.queue.writeBuffer(d,0,e)}function B(){const t=Math.min(2,devicePixelRatio||1),e=Math.max(1,Math.round(o.clientWidth*t)),i=Math.max(1,Math.round(o.clientHeight*t));o.width===e&&o.height===i||(o.width=e,o.height=i,y=e/i,H())}const c={x:9,y:9,force:0};o.addEventListener("pointermove",t=>{const e=o.getBoundingClientRect();c.x=(t.clientX-e.left)/e.width*2-1,c.y=-((t.clientY-e.top)/e.height*2-1)}),o.addEventListener("pointerleave",()=>{c.x=c.y=9}),o.addEventListener("pointerdown",()=>{c.force=1});const S=new Float32Array(8);let h=!1,x=0,G=0,b=16,A=0;function C(t){if(!h)return;const e=Math.min(.033,(t-x)/1e3);b=b*.95+(t-x)*.05,x=t,G+=e,c.force*=Math.exp(-e*3),S.set([c.x,c.y,y,G,e,c.force,.0032*(o.clientWidth<600?1.4:1),0]),r.queue.writeBuffer(M,0,S);const i=r.createCommandEncoder(),p=i.beginComputePass();p.setPipeline(P),p.setBindGroup(0,z),p.dispatchWorkgroups(Math.ceil(l/256)),p.end();const s=i.beginRenderPass({colorAttachments:[{view:a.getCurrentTexture().createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}]});s.setPipeline(F),s.setBindGroup(0,E),s.draw(6,l),s.end(),r.queue.submit([i.finish()]),t-A>400&&(A=t,g("frame",`${b.toFixed(1)} ms`)),requestAnimationFrame(C)}return new ResizeObserver(B).observe(o),B(),{start(){h||(h=!0,x=performance.now(),requestAnimationFrame(C))},stop(){h=!1}}}export{V as startWebGPU};
