import { createElement as h, useEffect, useRef, type CSSProperties, type ReactNode } from 'react'
import { prepareWithSegments, layoutNextLine, clearCache, type LayoutCursor, type PreparedTextWithSegments } from '@chenglou/pretext'
import { cssVar } from './theme'

/*
 * Hero background: my skills as running text, laid out line by line with Pretext.
 * Every line is split around obstacles (my name, the foreground cards, the pointer
 * lens and a bouncing melon), so the text reflows live as things move between it.
 * Drag the name — it springs back home.
 */

const TEXT_FONT = '500 13px "Geist Mono", ui-monospace, monospace'
const LINE_H = 22
const MIN_SEG = 70 // narrower gaps stay empty (no one-word slivers)
const PAD_X = 12 // breathing room around the name's glyphs
const LENS_R = 64

type Run = [number, number]
type Rect = { x: number; y: number; w: number; h: number }

/** Mark a foreground element: the text flows around it and it receives pointer events. */
export function Obstacle({ children, style, pad = 14 }: { children: ReactNode; style?: CSSProperties; pad?: number }) {
  return h('div', { 'data-obstacle': pad, style: { pointerEvents: 'auto', alignSelf: 'flex-start', display: 'flex', flexDirection: 'column', ...style } }, children)
}

/** Reserves the space where the canvas draws my name (the real <h1> lives here for screen readers). */
export function NameSlot({ height, label }: { height: number; label: string }) {
  return h('div', { 'data-name-slot': '', style: { height, position: 'relative' } },
    h('h1', { style: { position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', margin: 0 } }, label))
}

type NameArt = { canvas: HTMLCanvasElement; rows: Run[][]; w: number; h: number; pad: number }

/** Render the two-line name offscreen and record, for every pixel row, where ink is. */
function paintName(first: string, last: string, size: number, ink: string, accent: string): NameArt {
  const sans = `700 ${size}px Geist, Inter, system-ui, sans-serif`
  const serif = `italic 400 ${Math.round(size * 1.08)}px "Instrument Serif", Georgia, serif`
  const m = document.createElement('canvas').getContext('2d')!
  m.font = sans; const w1 = m.measureText(first).width
  m.font = serif; const w2 = m.measureText(last).width
  const pad = Math.ceil(size * 0.12)
  const w = Math.ceil(Math.max(w1, w2)) + pad * 2
  const hgt = Math.ceil(size * 2.05) + pad * 2
  const dpr = Math.min(2, devicePixelRatio || 1)
  const cv = document.createElement('canvas')
  cv.width = w * dpr; cv.height = hgt * dpr
  const g = cv.getContext('2d', { willReadFrequently: true })!
  g.scale(dpr, dpr)
  g.textBaseline = 'alphabetic'
  g.font = sans; g.fillStyle = ink; g.fillText(first, pad, pad + size * 0.86)
  g.font = serif; g.fillStyle = accent; g.fillText(last, pad, pad + size * 1.86)
  // ink runs per CSS-pixel row (sampled at device resolution)
  const data = g.getImageData(0, 0, cv.width, cv.height).data
  const rows: Run[][] = []
  for (let y = 0; y < hgt; y++) {
    const py = Math.min(cv.height - 1, Math.round((y + 0.5) * dpr))
    const runs: Run[] = []
    let start = -1
    for (let px = 0; px < cv.width; px++) {
      const on = data[(py * cv.width + px) * 4 + 3] > 40
      if (on && start < 0) start = px
      if (!on && start >= 0) { runs.push([start / dpr, px / dpr]); start = -1 }
    }
    if (start >= 0) runs.push([start / dpr, cv.width / dpr])
    rows.push(runs)
  }
  return { canvas: cv, rows, w, h: hgt, pad }
}

/** Merge overlapping [a, b] intervals. */
function merge(iv: Run[]): Run[] {
  if (iv.length < 2) return iv
  iv.sort((p, q) => p[0] - q[0])
  const out: Run[] = [iv[0].slice() as Run]
  for (let i = 1; i < iv.length; i++) {
    const last = out[out.length - 1]
    if (iv[i][0] <= last[1]) last[1] = Math.max(last[1], iv[i][1])
    else out.push(iv[i].slice() as Run)
  }
  return out
}

export default function SkillField({ words, first, last, nameSize, children, style }: {
  words: string[]; first: string; last: string; nameSize: number; children: ReactNode; style?: CSSProperties
}) {
  const box = useRef<HTMLDivElement>(null)
  const cvs = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const root = box.current!, canvas = cvs.current!
    const ctx = canvas.getContext('2d')!
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    let prepared: PreparedTextWithSegments | null = null
    let art: NameArt | null = null
    let W = 0, H = 0, dpr = 1
    let colors = { faint: '#999', accent: '#d9502a', ink: '#222' }
    let raf = 0, visible = true, born = 0

    // name position = home (from the slot) + spring offset (drag)
    const off = { x: 0, y: 0, vx: 0, vy: 0 }
    let drag: { id: number; dx: number; dy: number } | null = null
    const lens = { x: -999, y: -999, tx: -999, ty: -999, on: false, a: 0 }
    const ball = { x: 0, y: 0, vx: 0.9, vy: 0.65, r: 30, placed: false }

    const text = words.map((s) => s.toUpperCase()).join('  ·  ') + '  ·  '

    function rel(el: Element): Rect {
      const r = el.getBoundingClientRect(), o = root.getBoundingClientRect()
      return { x: r.left - o.left, y: r.top - o.top, w: r.width, h: r.height }
    }
    function home() {
      const slot = root.querySelector('[data-name-slot]')
      if (!slot || !art) return { x: 0, y: 0 }
      const r = rel(slot)
      return { x: r.x - art.pad, y: r.y + (r.h - art.h) / 2 }
    }
    function prepare() {
      colors = { faint: cssVar('--faint'), accent: cssVar('--accent'), ink: cssVar('--ink') }
      clearCache() // web fonts are loaded now; drop any fallback-font widths
      prepared = prepareWithSegments(text, TEXT_FONT)
      const slot = root.querySelector('[data-name-slot]') as HTMLElement | null
      const room = slot ? slot.clientWidth : W
      let size = nameSize
      art = paintName(first, last, size, colors.ink, colors.accent)
      if (art.w - art.pad * 2 > room) { size = Math.floor(size * room / (art.w - art.pad * 2)); art = paintName(first, last, size, colors.ink, colors.accent) }
    }
    function resize() {
      dpr = Math.min(2, devicePixelRatio || 1)
      W = root.clientWidth; H = root.clientHeight
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr)
      canvas.style.width = W + 'px'; canvas.style.height = H + 'px'
      if (prepared) prepare()
    }

    function frame(t: number) {
      raf = 0
      if (!prepared || !art) return
      if (!born) born = t
      const age = reduce ? 1 : Math.min(1, (t - born) / 900)

      // springs
      if (!drag) {
        off.vx += -off.x * 0.08; off.vy += -off.y * 0.08
        off.vx *= 0.8; off.vy *= 0.8
        off.x += off.vx; off.y += off.vy
        if (Math.abs(off.x) < 0.05 && Math.abs(off.y) < 0.05 && Math.abs(off.vx) < 0.05) { off.x = off.y = off.vx = off.vy = 0 }
      }
      lens.x += (lens.tx - lens.x) * 0.22; lens.y += (lens.ty - lens.y) * 0.22
      lens.a += ((lens.on ? 1 : 0) - lens.a) * 0.12
      if (!ball.placed) { ball.x = W * 0.62; ball.y = H * 0.82; ball.placed = true }
      if (!reduce) {
        ball.x += ball.vx; ball.y += ball.vy
        if (ball.x < ball.r || ball.x > W - ball.r) { ball.vx *= -1; ball.x = Math.max(ball.r, Math.min(W - ball.r, ball.x)) }
        if (ball.y < ball.r + 70 || ball.y > H - ball.r) { ball.vy *= -1; ball.y = Math.max(ball.r + 70, Math.min(H - ball.r, ball.y)) }
      }

      const hm = home()
      const nx = hm.x + off.x, ny = hm.y + off.y + (1 - age) * 30

      // obstacles
      const rects: Rect[] = []
      root.querySelectorAll('[data-obstacle]').forEach((el) => {
        const p = Number((el as HTMLElement).dataset.obstacle) || 0
        const r = rel(el)
        if (r.w && r.h) rects.push({ x: r.x - p, y: r.y - p * 0.6, w: r.w + p * 2, h: r.h + p * 1.2 })
      })
      const circles: { x: number; y: number; r: number }[] = [{ x: ball.x, y: ball.y, r: ball.r + 10 }]
      if (lens.a > 0.02) circles.push({ x: lens.x, y: lens.y, r: LENS_R * lens.a })

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, W, H)
      ctx.font = TEXT_FONT
      ctx.textBaseline = 'middle'

      const lines: [string, number, number][] = []
      let cursor: LayoutCursor = { segmentIndex: 0, graphemeIndex: 0 }
      const left = 16, right = W - 16
      for (let y = 8; y + LINE_H <= H - 4; y += LINE_H) {
        const y0 = y, y1 = y + LINE_H
        const block: Run[] = []
        for (const r of rects) if (r.y < y1 && r.y + r.h > y0) block.push([r.x, r.x + r.w])
        for (const c of circles) {
          const dy = c.y >= y0 && c.y <= y1 ? 0 : Math.min(Math.abs(c.y - y0), Math.abs(c.y - y1))
          if (dy < c.r) { const hw = Math.sqrt(c.r * c.r - dy * dy); block.push([c.x - hw, c.x + hw]) }
        }
        // name glyph rows covering this band (+ a little vertical breathing room)
        const top = Math.max(0, Math.floor(y0 - ny - 4)), bot = Math.min(art.h - 1, Math.ceil(y1 - ny + 4))
        for (let ry = top; ry <= bot; ry++) for (const [a, b] of art.rows[ry]) block.push([nx + a - PAD_X, nx + b + PAD_X])

        let x = left
        for (const [a, b] of [...merge(block), [right, Infinity] as Run]) {
          const segR = Math.min(a, right)
          if (segR - x >= MIN_SEG) {
            let line = layoutNextLine(prepared, segR - x, cursor)
            if (!line) { cursor = { segmentIndex: 0, graphemeIndex: 0 }; line = layoutNextLine(prepared, segR - x, cursor) }
            if (line) { lines.push([line.text, x, y + LINE_H / 2]); cursor = line.end }
          }
          x = Math.max(x, b)
          if (x >= right) break
        }
      }

      // pass 1: faint text, fading in from the top
      ctx.globalAlpha = 0.42 * age
      ctx.fillStyle = colors.faint
      for (const [s, x, y] of lines) if (y < H * age + 40) ctx.fillText(s, x, y)
      // pass 2: accent glow around the pointer lens
      if (lens.a > 0.02) {
        ctx.save()
        const g = ctx.createRadialGradient(lens.x, lens.y, LENS_R * 0.8, lens.x, lens.y, LENS_R + 110)
        ctx.beginPath(); ctx.arc(lens.x, lens.y, LENS_R + 110, 0, Math.PI * 2); ctx.clip()
        g.addColorStop(0, colors.accent); g.addColorStop(1, 'transparent')
        ctx.fillStyle = g
        ctx.globalAlpha = lens.a * age
        for (const [s, x, y] of lines) if (Math.abs(y - lens.y) < LENS_R + 110) ctx.fillText(s, x, y)
        ctx.restore()
      }
      ctx.globalAlpha = 1

      // the melon
      ctx.font = `${ball.r * 1.5}px system-ui, "Apple Color Emoji", "Segoe UI Emoji"`
      ctx.textAlign = 'center'
      ctx.save(); ctx.translate(ball.x, ball.y); ctx.rotate(ball.x / 40)
      ctx.globalAlpha = age
      ctx.fillText('🍉', 0, 2)
      ctx.restore(); ctx.textAlign = 'left'

      // the name
      ctx.globalAlpha = age
      ctx.drawImage(art.canvas, nx, ny, art.w, art.h)
      ctx.globalAlpha = 1

      if (visible && !reduce) raf = requestAnimationFrame(frame)
    }
    const kick = () => { if (!raf && visible) raf = requestAnimationFrame(frame) }

    // pointer: lens follows; grab the name to drag it
    function overName(px: number, py: number) {
      if (!art) return false
      const hm = home(), x = px - hm.x - off.x, y = Math.round(py - hm.y - off.y)
      if (y < 0 || y >= art.h) return false
      for (let ry = Math.max(0, y - 10); ry <= Math.min(art.h - 1, y + 10); ry++)
        for (const [a, b] of art.rows[ry]) if (x >= a - 8 && x <= b + 8) return true
      return false
    }
    const local = (e: PointerEvent) => { const o = root.getBoundingClientRect(); return { x: e.clientX - o.left, y: e.clientY - o.top } }
    const inFront = (e: PointerEvent) => !!(e.target as Element).closest?.('[data-obstacle]')
    function onMove(e: PointerEvent) {
      const p = local(e)
      if (drag && e.pointerId === drag.id) {
        const hm = home(); off.x = p.x - drag.dx - hm.x; off.y = p.y - drag.dy - hm.y
      }
      const front = inFront(e)
      lens.on = e.pointerType === 'mouse' && !front && !drag
      lens.tx = p.x; lens.ty = p.y
      if (lens.x < -900) { lens.x = p.x; lens.y = p.y }
      root.style.cursor = drag ? 'grabbing' : !front && overName(p.x, p.y) ? 'grab' : ''
      kick()
    }
    function onDown(e: PointerEvent) {
      if (inFront(e)) return
      const p = local(e)
      if (!overName(p.x, p.y)) return
      const hm = home()
      drag = { id: e.pointerId, dx: p.x - hm.x - off.x, dy: p.y - hm.y - off.y }
      root.setPointerCapture(e.pointerId)
      root.style.cursor = 'grabbing'
      e.preventDefault()
    }
    function onUp(e: PointerEvent) {
      if (drag && e.pointerId === drag.id) { drag = null; root.style.cursor = ''; kick() }
    }
    const onLeave = () => { lens.on = false; kick() }

    const ro = new ResizeObserver(() => { resize(); kick() })
    ro.observe(root)
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) kick() })
    io.observe(root)
    root.addEventListener('pointermove', onMove)
    root.addEventListener('pointerdown', onDown)
    root.addEventListener('pointerup', onUp)
    root.addEventListener('pointercancel', onUp)
    root.addEventListener('pointerleave', onLeave)

    let alive = true
    resize()
    Promise.all([
      document.fonts.load(TEXT_FONT),
      document.fonts.load(`700 ${nameSize}px Geist`),
      document.fonts.load(`italic 400 ${nameSize}px "Instrument Serif"`),
    ]).catch(() => {}).then(() => { if (alive) { prepare(); kick() } })

    // theme switch → recolor (MutationObserver on <html data-theme>)
    const mo = new MutationObserver(() => { if (prepared) { prepare(); kick() } })
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    return () => {
      alive = false
      cancelAnimationFrame(raf)
      ro.disconnect(); io.disconnect(); mo.disconnect()
      root.removeEventListener('pointermove', onMove)
      root.removeEventListener('pointerdown', onDown)
      root.removeEventListener('pointerup', onUp)
      root.removeEventListener('pointercancel', onUp)
      root.removeEventListener('pointerleave', onLeave)
    }
  }, [words, first, last, nameSize])

  return h('div', { ref: box, style: { position: 'relative', width: '100%', touchAction: 'pan-y', ...style } },
    h('canvas', { ref: cvs, 'aria-hidden': true, style: { position: 'absolute', inset: 0, pointerEvents: 'none' } }),
    h('div', { style: { position: 'relative', pointerEvents: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' } }, children),
  )
}
