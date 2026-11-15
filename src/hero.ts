import { prepareWithSegments, layoutNextLine, clearCache, type LayoutCursor, type PreparedTextWithSegments } from '@chenglou/pretext'

/*
 * Landing overlay: my skills as running text on a dark page, laid out line by line with
 * Pretext and split around obstacles: my name's glyphs, the foreground blocks
 * ([data-obstacle]) and the cursor lens. Drag the name and the text reflows; it springs back.
 *
 * Plain 2D canvas at screen size, drawn only when something changes (pointer, drag, springs).
 * Scrolling fades the whole overlay out to reveal the 3D desk underneath.
 */

const FLOW_FONT = '500 13px "Geist Mono", ui-monospace, monospace'
const LINE_H = 22
const MIN_SEG = 70
const PAD_X = 12
const LENS_R = 64
const COL = { faint: '#8f7f6c', accent: '#f0794d', ink: '#f3ead9' }

type Run = [number, number]
type Rect = { x: number; y: number; w: number; h: number }
type Art = { canvas: HTMLCanvasElement; rows: Run[][]; w: number; h: number; pad: number }

function merge(iv: Run[]): Run[] {
  if (iv.length < 2) return iv
  iv.sort((p, q) => p[0] - q[0])
  const out: Run[] = [[iv[0][0], iv[0][1]]]
  for (let i = 1; i < iv.length; i++) {
    const last = out[out.length - 1]
    if (iv[i][0] <= last[1]) last[1] = Math.max(last[1], iv[i][1])
    else out.push([iv[i][0], iv[i][1]])
  }
  return out
}

/** Render the two-line name offscreen and record, for every CSS-pixel row, where ink is. */
function paintName(first: string, last: string, size: number): Art {
  const sans = `700 ${size}px Geist, Inter, system-ui, sans-serif`
  const serif = `italic 400 ${Math.round(size * 1.08)}px "Instrument Serif", Georgia, serif`
  const m = document.createElement('canvas').getContext('2d')!
  m.font = sans; const w1 = m.measureText(first).width
  m.font = serif; const w2 = m.measureText(last).width
  const pad = Math.ceil(size * 0.12)
  const w = Math.ceil(Math.max(w1, w2)) + pad * 2, h = Math.ceil(size * 2.05) + pad * 2
  const dpr = Math.min(2, devicePixelRatio || 1)
  const cv = document.createElement('canvas')
  cv.width = w * dpr; cv.height = h * dpr
  const g = cv.getContext('2d', { willReadFrequently: true })!
  g.scale(dpr, dpr)
  g.font = sans; g.fillStyle = COL.ink; g.fillText(first, pad, pad + size * 0.86)
  g.font = serif; g.fillStyle = COL.accent; g.fillText(last, pad, pad + size * 1.86)
  const data = g.getImageData(0, 0, cv.width, cv.height).data
  const rows: Run[][] = []
  for (let y = 0; y < h; y++) {
    const py = Math.min(cv.height - 1, Math.round((y + 0.5) * dpr))
    const runs: Run[] = []; let s = -1
    for (let px = 0; px < cv.width; px++) {
      const on = data[(py * cv.width + px) * 4 + 3] > 40
      if (on && s < 0) s = px
      if (!on && s >= 0) { runs.push([s / dpr, px / dpr]); s = -1 }
    }
    if (s >= 0) runs.push([s / dpr, cv.width / dpr])
    rows.push(runs)
  }
  return { canvas: cv, rows, w, h, pad }
}

export class Hero {
  private ctx: CanvasRenderingContext2D
  private flow?: PreparedTextWithSegments
  private art?: Art
  private W = 0
  private H = 0
  private dpr = 1
  private raf = 0
  private active = true
  private off = { x: 0, y: 0, vx: 0, vy: 0 }
  private drag: { id: number; dx: number; dy: number } | null = null
  private lens = { x: 0, y: 0, tx: 0, ty: 0, a: 0, on: false }
  private last = 0

  constructor(private root: HTMLElement, private canvas: HTMLCanvasElement, private words: string[], private first: string, private last2: string, private nameSize: () => number) {
    this.ctx = canvas.getContext('2d')!
    new ResizeObserver(() => this.resize()).observe(root)
    root.addEventListener('pointermove', (e) => this.onMove(e))
    root.addEventListener('pointerdown', (e) => this.onDown(e))
    root.addEventListener('pointerup', (e) => this.onUp(e))
    root.addEventListener('pointercancel', (e) => this.onUp(e))
    root.addEventListener('pointerleave', () => { this.lens.on = false; this.kick() })
  }

  /** Call once web fonts are loaded. */
  init() {
    clearCache() // drop any widths measured with fallback fonts
    this.flow = prepareWithSegments(this.words.map((s) => s.toUpperCase()).join('  ·  ') + '  ·  ', FLOW_FONT)
    this.resize()
  }

  /** 0 = gone (scrolled to the desk), 1 = fully shown. */
  setOpacity(o: number) {
    this.root.style.opacity = String(o)
    this.root.style.visibility = o <= 0.001 ? 'hidden' : 'visible'
    this.root.style.transform = `scale(${1 + (1 - o) * 0.04})`
    const was = this.active
    this.active = o > 0.001
    if (this.active && !was) this.kick()
  }

  private rel(el: Element): Rect {
    const r = el.getBoundingClientRect(), o = this.root.getBoundingClientRect()
    return { x: r.left - o.left, y: r.top - o.top, w: r.width, h: r.height }
  }
  private home() {
    const slot = this.root.querySelector('[data-name-slot]')
    if (!slot || !this.art) return { x: 0, y: 0 }
    const r = this.rel(slot)
    return { x: r.x - this.art.pad, y: r.y + (r.h - this.art.h) / 2 }
  }

  private resize() {
    this.dpr = Math.min(2, devicePixelRatio || 1)
    this.W = this.root.clientWidth; this.H = this.root.clientHeight
    this.canvas.width = Math.round(this.W * this.dpr); this.canvas.height = Math.round(this.H * this.dpr)
    if (this.flow) {
      const slot = this.root.querySelector('[data-name-slot]') as HTMLElement | null
      const room = slot ? slot.clientWidth : this.W
      let size = this.nameSize()
      this.art = paintName(this.first, this.last2, size)
      if (this.art.w - this.art.pad * 2 > room) { size = Math.floor(size * room / (this.art.w - this.art.pad * 2)); this.art = paintName(this.first, this.last2, size) }
    }
    this.kick()
  }

  private kick() { if (!this.raf && this.active && this.flow) { this.last = performance.now(); this.raf = requestAnimationFrame((t) => this.frame(t)) } }

  private frame(t: number) {
    this.raf = 0
    if (!this.flow || !this.art || !this.active) return
    const k = Math.min(3, (t - this.last) / 16.7); this.last = t
    let moving = false
    const o = this.off
    if (!this.drag) {
      o.vx += -o.x * 0.08 * k; o.vy += -o.y * 0.08 * k
      o.vx *= Math.pow(0.8, k); o.vy *= Math.pow(0.8, k)
      o.x += o.vx * k; o.y += o.vy * k
      if (Math.abs(o.x) + Math.abs(o.y) + Math.abs(o.vx) + Math.abs(o.vy) < 0.1) { o.x = o.y = o.vx = o.vy = 0 } else moving = true
    }
    const l = this.lens
    const e = 1 - Math.pow(1 - 0.25, k)
    if (Math.abs(l.tx - l.x) + Math.abs(l.ty - l.y) > 0.3) moving = true
    l.x += (l.tx - l.x) * e; l.y += (l.ty - l.y) * e
    const ta = l.on ? 1 : 0
    if (Math.abs(ta - l.a) > 0.01) moving = true; else l.a = ta
    l.a += (ta - l.a) * (1 - Math.pow(1 - 0.15, k))
    this.draw()
    if (moving) this.raf = requestAnimationFrame((tt) => this.frame(tt))
  }

  private draw() {
    const ctx = this.ctx, art = this.art!, W = this.W, H = this.H
    const hm = this.home(), nx = hm.x + this.off.x, ny = hm.y + this.off.y
    const rects: Rect[] = []
    this.root.querySelectorAll<HTMLElement>('[data-obstacle]').forEach((el) => {
      const p = Number(el.dataset.obstacle) || 14
      const r = this.rel(el)
      if (r.w && r.h) rects.push({ x: r.x - p, y: r.y - p * 0.6, w: r.w + p * 2, h: r.h + p * 1.2 })
    })
    const lens = this.lens
    const circle = lens.a > 0.02 ? { x: lens.x, y: lens.y, r: LENS_R * lens.a } : null

    ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0)
    ctx.clearRect(0, 0, W, H)
    ctx.font = FLOW_FONT; ctx.textBaseline = 'middle'
    const lines: [string, number, number][] = []
    let cursor: LayoutCursor = { segmentIndex: 0, graphemeIndex: 0 }
    const left = 16, right = W - 16
    for (let y = 70; y + LINE_H <= H - 4; y += LINE_H) {
      const y0 = y, y1 = y + LINE_H
      const block: Run[] = []
      for (const r of rects) if (r.y < y1 && r.y + r.h > y0) block.push([r.x, r.x + r.w])
      if (circle) {
        const dy = circle.y >= y0 && circle.y <= y1 ? 0 : Math.min(Math.abs(circle.y - y0), Math.abs(circle.y - y1))
        if (dy < circle.r) { const hw = Math.sqrt(circle.r * circle.r - dy * dy); block.push([circle.x - hw, circle.x + hw]) }
      }
      const top = Math.max(0, Math.floor(y0 - ny - 4)), bot = Math.min(art.h - 1, Math.ceil(y1 - ny + 4))
      for (let ry = top; ry <= bot; ry++) for (const [a, b] of art.rows[ry]) block.push([nx + a - PAD_X, nx + b + PAD_X])
      let x = left
      for (const [a, b] of [...merge(block), [right, Infinity] as Run]) {
        const segR = Math.min(a, right)
        if (segR - x >= MIN_SEG) {
          let line = layoutNextLine(this.flow!, segR - x, cursor)
          if (!line) { cursor = { segmentIndex: 0, graphemeIndex: 0 }; line = layoutNextLine(this.flow!, segR - x, cursor) }
          if (line) { lines.push([line.text, x, y + LINE_H / 2]); cursor = line.end }
        }
        x = Math.max(x, b)
        if (x >= right) break
      }
    }
    ctx.globalAlpha = 0.55; ctx.fillStyle = COL.faint
    for (const [s, x, y] of lines) ctx.fillText(s, x, y)
    if (lens.a > 0.02) {
      ctx.save()
      const R = LENS_R + 110
      ctx.beginPath(); ctx.arc(lens.x, lens.y, R, 0, Math.PI * 2); ctx.clip()
      const g = ctx.createRadialGradient(lens.x, lens.y, LENS_R * 0.8, lens.x, lens.y, R)
      g.addColorStop(0, COL.accent); g.addColorStop(1, 'rgba(240,121,77,0)')
      ctx.fillStyle = g; ctx.globalAlpha = lens.a
      for (const [s, x, y] of lines) if (Math.abs(y - lens.y) < R) ctx.fillText(s, x, y)
      ctx.restore()
    }
    ctx.globalAlpha = 1
    ctx.drawImage(art.canvas, nx, ny, art.w, art.h)
  }

  // --- pointer -----------------------------------------------------------------------
  private overName(px: number, py: number) {
    if (!this.art) return false
    const hm = this.home(), x = px - hm.x - this.off.x, y = Math.round(py - hm.y - this.off.y)
    if (y < 0 || y >= this.art.h) return false
    for (let ry = Math.max(0, y - 10); ry <= Math.min(this.art.h - 1, y + 10); ry++)
      for (const [a, b] of this.art.rows[ry]) if (x >= a - 8 && x <= b + 8) return true
    return false
  }
  private local(e: PointerEvent) { const o = this.root.getBoundingClientRect(); return { x: e.clientX - o.left, y: e.clientY - o.top } }
  private inFront(e: PointerEvent) { return !!(e.target as Element).closest?.('[data-obstacle]') }
  private onMove(e: PointerEvent) {
    if (!this.active) return
    const p = this.local(e)
    if (this.drag && e.pointerId === this.drag.id) { const hm = this.home(); this.off.x = p.x - this.drag.dx - hm.x; this.off.y = p.y - this.drag.dy - hm.y }
    const front = this.inFront(e)
    this.lens.on = e.pointerType === 'mouse' && !front && !this.drag
    if (this.lens.a < 0.02) { this.lens.x = p.x; this.lens.y = p.y }
    this.lens.tx = p.x; this.lens.ty = p.y
    this.root.style.cursor = this.drag ? 'grabbing' : !front && this.overName(p.x, p.y) ? 'grab' : ''
    if (this.drag) this.draw() // follow the finger immediately
    this.kick()
  }
  private onDown(e: PointerEvent) {
    if (!this.active || this.inFront(e)) return
    const p = this.local(e)
    if (!this.overName(p.x, p.y)) return
    const hm = this.home()
    this.drag = { id: e.pointerId, dx: p.x - hm.x - this.off.x, dy: p.y - hm.y - this.off.y }
    this.root.setPointerCapture(e.pointerId)
    this.root.style.cursor = 'grabbing'
    e.preventDefault()
  }
  private onUp(e: PointerEvent) {
    if (this.drag && e.pointerId === this.drag.id) { this.drag = null; this.root.style.cursor = ''; this.kick() }
  }
}
