/*
 * A small live price chart drawn with Canvas 2D every frame — the kind of chart I built
 * with React Native Skia. (In Chrome, Canvas 2D is itself rendered by Skia.)
 */
export function startChart(canvas: HTMLCanvasElement, fpsOut: HTMLElement) {
  const g = canvas.getContext('2d')!
  const pts: number[] = []
  let v = 100
  for (let i = 0; i < 160; i++) { v += (Math.random() - 0.48) * 1.6; pts.push(v) }
  let running = false, last = 0, acc = 0, frames = 0, fpsT = 0, shift = 0

  function draw(now: number) {
    if (!running) return
    const dt = (now - last) / 1000; last = now
    frames++
    if (now - fpsT > 500) { fpsOut.textContent = `${Math.round((frames * 1000) / (now - fpsT))} fps`; frames = 0; fpsT = now }
    acc += dt
    shift = Math.min(1, acc / 0.12)
    if (acc >= 0.12) { acc = 0; shift = 0; v += (Math.random() - 0.48) * 1.6; pts.push(v); pts.shift() }

    const dpr = Math.min(2, devicePixelRatio || 1)
    const W = canvas.clientWidth, H = canvas.clientHeight
    if (canvas.width !== Math.round(W * dpr)) { canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr) }
    g.setTransform(dpr, 0, 0, dpr, 0, 0)
    g.clearRect(0, 0, W, H)
    const min = Math.min(...pts) - 2, max = Math.max(...pts) + 2
    const step = W / (pts.length - 2)
    const X = (i: number) => (i - shift) * step, Y = (p: number) => H - 14 - ((p - min) / (max - min)) * (H - 40)

    // grid
    g.strokeStyle = 'rgba(149,140,126,.18)'; g.lineWidth = 1
    for (let i = 1; i < 4; i++) { g.beginPath(); g.moveTo(0, (H * i) / 4); g.lineTo(W, (H * i) / 4); g.stroke() }
    // area + line (smoothed with quadratic curves)
    g.beginPath(); g.moveTo(X(0), Y(pts[0]))
    for (let i = 1; i < pts.length - 1; i++) { const xc = (X(i) + X(i + 1)) / 2, yc = (Y(pts[i]) + Y(pts[i + 1])) / 2; g.quadraticCurveTo(X(i), Y(pts[i]), xc, yc) }
    g.save()
    g.lineTo(W + step, H); g.lineTo(X(0), H); g.closePath()
    const grad = g.createLinearGradient(0, 0, 0, H); grad.addColorStop(0, 'rgba(217,80,42,.28)'); grad.addColorStop(1, 'rgba(217,80,42,0)')
    g.fillStyle = grad; g.fill(); g.restore()
    g.beginPath(); g.moveTo(X(0), Y(pts[0]))
    for (let i = 1; i < pts.length - 1; i++) { const xc = (X(i) + X(i + 1)) / 2, yc = (Y(pts[i]) + Y(pts[i + 1])) / 2; g.quadraticCurveTo(X(i), Y(pts[i]), xc, yc) }
    g.strokeStyle = '#d9502a'; g.lineWidth = 2.2; g.stroke()
    // live dot + price tag
    const lx = X(pts.length - 2), ly = Y(pts[pts.length - 2])
    const pulse = (now / 600) % 1
    g.fillStyle = `rgba(217,80,42,${0.35 * (1 - pulse)})`; g.beginPath(); g.arc(lx, ly, 4 + pulse * 12, 0, Math.PI * 2); g.fill()
    g.fillStyle = '#d9502a'; g.beginPath(); g.arc(lx, ly, 4, 0, Math.PI * 2); g.fill()
    g.font = '500 11px "Geist Mono", monospace'; g.fillStyle = '#5f584e'; g.textAlign = 'right'
    g.fillText(pts[pts.length - 2].toFixed(2), W - 8, Math.max(14, ly - 10))
    requestAnimationFrame(draw)
  }
  return {
    start() { if (!running) { running = true; last = fpsT = performance.now(); requestAnimationFrame(draw) } },
    stop() { running = false },
  }
}
