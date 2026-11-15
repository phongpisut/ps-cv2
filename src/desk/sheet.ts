import { prepareWithSegments, layoutNextLine, layoutWithLines, clearCache, type LayoutCursor, type PreparedTextWithSegments } from '@chenglou/pretext'
import { profile, skills, projects } from '../data'
import { C, SANS, SERIF, MONO, canvas, paperGrain } from './paint'

/*
 * The CV sheet on the desk. My skills run as text across the whole page, laid out
 * line by line with Pretext and split around every obstacle: my name's glyphs, the
 * text blocks, the pointer lens, and the footprints of things lying on the paper
 * (the mug, the ID card). Move any of them and the text reflows.
 */

export const SHEET_W = 2048, SHEET_H = 1448
const FLOW_FONT = `500 29px ${MONO}`
const LINE_H = 44
const MIN_SEG = 120
const NAME_SIZE = 206
const LENS_R = 120

type Run = [number, number]
export type Circle = { x: number; y: number; r: number }
export type Box = { x: number; y: number; w: number; h: number }
type Art = { cv: HTMLCanvasElement; rows: Run[][]; w: number; h: number; pad: number }

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

/** Paint the two-line name and record where its ink is on every pixel row. */
function paintName(first: string, last: string): Art {
  const sans = `700 ${NAME_SIZE}px ${SANS}`, serif = `italic 400 ${Math.round(NAME_SIZE * 1.1)}px ${SERIF}`
  const [, m] = canvas(1, 1)
  m.font = sans; const w1 = m.measureText(first).width
  m.font = serif; const w2 = m.measureText(last).width
  const pad = 24
  const w = Math.ceil(Math.max(w1, w2)) + pad * 2, h = Math.ceil(NAME_SIZE * 2.02) + pad * 2
  const [cv, g] = canvas(w, h)
  g.font = sans; g.fillStyle = C.ink; g.fillText(first, pad, pad + NAME_SIZE * 0.86)
  g.font = serif; g.fillStyle = C.accent; g.fillText(last, pad, pad + NAME_SIZE * 1.84)
  const data = g.getImageData(0, 0, w, h).data
  const rows: Run[][] = []
  for (let y = 0; y < h; y++) {
    const runs: Run[] = []; let s = -1
    for (let x = 0; x < w; x++) {
      const on = data[(y * w + x) * 4 + 3] > 40
      if (on && s < 0) s = x
      if (!on && s >= 0) { runs.push([s, x]); s = -1 }
    }
    if (s >= 0) runs.push([s, w])
    rows.push(runs)
  }
  return { cv, rows, w, h, pad }
}

export class CvSheet {
  readonly canvas: HTMLCanvasElement
  private g: CanvasRenderingContext2D
  private base: HTMLCanvasElement // paper + static blocks, painted once
  private flow!: PreparedTextWithSegments
  private art!: Art
  private home = { x: 70, y: 150 }
  off = { x: 0, y: 0, vx: 0, vy: 0 }
  dragging = false
  lens = { x: 0, y: 0, tx: 0, ty: 0, a: 0, on: false }
  private blocks: Box[] = []

  constructor() {
    ;[this.canvas, this.g] = canvas(SHEET_W, SHEET_H)
    this.base = canvas(SHEET_W, SHEET_H)[0]
  }

  /** Call once web fonts are loaded. */
  init() {
    clearCache()
    const words = Object.values(skills).flat().map((s) => s.toUpperCase())
    this.flow = prepareWithSegments(words.join('  ·  ') + '  ·  ', FLOW_FONT)
    const [first, last] = profile.name.split(' ')
    this.art = paintName(first, last + '.')
    this.paintBase()
  }

  private paintBase() {
    const g = this.base.getContext('2d')!
    paperGrain(g, SHEET_W, SHEET_H, C.paper, 11, 0.03)
    const B = this.blocks = [] as Box[]
    const M = 90
    // header
    g.fillStyle = C.faint; g.font = `500 26px ${MONO}`
    g.fillText('CURRICULUM VITAE · 2026', M, 96)
    g.textAlign = 'right'; g.fillText(profile.location.toUpperCase(), SHEET_W - M, 96); g.textAlign = 'left'
    B.push({ x: M - 20, y: 56, w: 470, h: 60 }, { x: SHEET_W - M - 340, y: 56, w: 360, h: 60 })

    // right block: who I am
    const rx = 1430, rw = SHEET_W - M - rx
    let y = 250
    g.fillStyle = C.accent; g.font = `500 24px ${MONO}`; g.fillText('HI, I’M A', rx, y); y += 62
    g.fillStyle = C.ink; g.font = `600 52px ${SANS}`
    g.fillText('React & React Native', rx, y); y += 62; g.fillText('developer.', rx, y); y += 66
    const tag = prepareWithSegments('Since 2021 I’ve contributed to banking, trading and insurance apps — mostly the smooth, animated parts.', `400 34px ${SANS}`)
    g.fillStyle = C.muted; g.font = `400 34px ${SANS}`
    for (const l of layoutWithLines(tag, rw, 48).lines) { g.fillText(l.text, rx, y); y += 48 }
    y += 30
    g.fillStyle = C.sage; g.beginPath(); g.arc(rx + 9, y - 10, 9, 0, Math.PI * 2); g.fill()
    g.fillStyle = C.ink; g.font = `500 28px ${MONO}`; g.fillText('OPEN TO NEW ADVENTURES', rx + 32, y); y += 52
    g.fillStyle = C.accent; g.font = `500 30px ${MONO}`; g.fillText(profile.email, rx, y)
    B.push({ x: rx - 30, y: 200, w: rw + 50, h: y - 200 + 40 })

    // bottom-left: the quote
    const qx = M, qw = 860
    y = 1060
    g.fillStyle = C.accent; g.font = `500 24px ${MONO}`; g.fillText('(01) ABOUT ME', qx, y); y += 70
    const q = prepareWithSegments('“I see the world as my classroom — and knowledge is the ultimate souvenir.”', `400 58px ${SERIF}`)
    g.fillStyle = C.ink; g.font = `400 58px ${SERIF}`
    for (const l of layoutWithLines(q, qw, 66).lines) { g.fillText(l.text, qx, y); y += 66 }
    B.push({ x: qx - 30, y: 1010, w: qw + 60, h: y - 1010 + 10 })

    // bottom-right: numbers
    const stats: [string, string][] = [['5+', 'YEARS'], ['8', 'TEAMS JOINED'], [String(projects.length), 'PROJECTS']]
    const sx = 1290
    stats.forEach(([n, l], i) => {
      const x = sx + i * 230
      g.fillStyle = C.ink; g.font = `600 96px ${SANS}`; g.fillText(n, x, 1300)
      g.fillStyle = C.faint; g.font = `500 22px ${MONO}`; g.fillText(l, x, 1340)
    })
    B.push({ x: sx - 30, y: 1190, w: SHEET_W - M - sx + 50, h: 180 })
  }

  private namePos() { return { x: this.home.x + this.off.x, y: this.home.y + this.off.y } }

  hitName(x: number, y: number) {
    const p = this.namePos(), lx = x - p.x, ly = Math.round(y - p.y)
    if (ly < 0 || ly >= this.art.h) return false
    for (let ry = Math.max(0, ly - 16); ry <= Math.min(this.art.h - 1, ly + 16); ry++)
      for (const [a, b] of this.art.rows[ry]) if (lx >= a - 14 && lx <= b + 14) return true
    return false
  }
  /** Move the dragged name so that sheet point (x, y) stays under the grab point. */
  dragTo(x: number, y: number, grab: { x: number; y: number }) {
    this.off.x = x - grab.x - this.home.x; this.off.y = y - grab.y - this.home.y
  }
  grabPoint(x: number, y: number) { const p = this.namePos(); return { x: x - p.x, y: y - p.y } }

  /** Springs and lens easing. Returns true while something is still moving. */
  step(dt: number) {
    const k = Math.min(1, dt * 60)
    let moving = false
    if (!this.dragging) {
      this.off.vx += -this.off.x * 0.08 * k; this.off.vy += -this.off.y * 0.08 * k
      this.off.vx *= Math.pow(0.8, k); this.off.vy *= Math.pow(0.8, k)
      this.off.x += this.off.vx * k; this.off.y += this.off.vy * k
      if (Math.abs(this.off.x) + Math.abs(this.off.y) + Math.abs(this.off.vx) + Math.abs(this.off.vy) < 0.2) { this.off.x = this.off.y = this.off.vx = this.off.vy = 0 } else moving = true
    } else moving = true
    const l = this.lens
    const e = 1 - Math.pow(1 - 0.25, k)
    if (Math.abs(l.tx - l.x) + Math.abs(l.ty - l.y) > 0.5) moving = true
    l.x += (l.tx - l.x) * e; l.y += (l.ty - l.y) * e
    const ta = l.on ? 1 : 0
    if (Math.abs(ta - l.a) > 0.01) moving = true
    l.a += (ta - l.a) * (1 - Math.pow(1 - 0.15, k))
    return moving
  }

  /** Lay out the flowing skills around everything and paint the sheet. */
  draw(circles: Circle[], boxes: Box[]) {
    const g = this.g, art = this.art, lens = this.lens
    g.drawImage(this.base, 0, 0)
    const n = this.namePos()
    const allBoxes = [...this.blocks, ...boxes]
    const allCircles = lens.a > 0.02 ? [...circles, { x: lens.x, y: lens.y, r: LENS_R * lens.a }] : circles

    const lines: [string, number, number][] = []
    let cursor: LayoutCursor = { segmentIndex: 0, graphemeIndex: 0 }
    const left = 70, right = SHEET_W - 70
    for (let y = 130; y + LINE_H <= SHEET_H - 50; y += LINE_H) {
      const y0 = y, y1 = y + LINE_H
      const block: Run[] = []
      for (const r of allBoxes) if (r.y < y1 && r.y + r.h > y0) block.push([r.x, r.x + r.w])
      for (const c of allCircles) {
        const dy = c.y >= y0 && c.y <= y1 ? 0 : Math.min(Math.abs(c.y - y0), Math.abs(c.y - y1))
        if (dy < c.r) { const hw = Math.sqrt(c.r * c.r - dy * dy); block.push([c.x - hw, c.x + hw]) }
      }
      const top = Math.max(0, Math.floor(y0 - n.y - 8)), bot = Math.min(art.h - 1, Math.ceil(y1 - n.y + 8))
      for (let ry = top; ry <= bot; ry++) for (const [a, b] of art.rows[ry]) block.push([n.x + a - 22, n.x + b + 22])

      let x = left
      for (const [a, b] of [...merge(block), [right, Infinity] as Run]) {
        const segR = Math.min(a, right)
        if (segR - x >= MIN_SEG) {
          let line = layoutNextLine(this.flow, segR - x, cursor)
          if (!line) { cursor = { segmentIndex: 0, graphemeIndex: 0 }; line = layoutNextLine(this.flow, segR - x, cursor) }
          if (line) { lines.push([line.text, x, y + LINE_H / 2]); cursor = line.end }
        }
        x = Math.max(x, b)
        if (x >= right) break
      }
    }

    g.font = FLOW_FONT; g.textBaseline = 'middle'
    g.globalAlpha = 0.6; g.fillStyle = C.faint
    for (const [s, x, y] of lines) g.fillText(s, x, y)
    if (lens.a > 0.02) {
      g.save()
      const R = LENS_R + 220
      g.beginPath(); g.arc(lens.x, lens.y, R, 0, Math.PI * 2); g.clip()
      const grad = g.createRadialGradient(lens.x, lens.y, LENS_R * 0.8, lens.x, lens.y, R)
      grad.addColorStop(0, C.accent); grad.addColorStop(1, 'rgba(217,80,42,0)')
      g.fillStyle = grad; g.globalAlpha = lens.a
      for (const [s, x, y] of lines) if (Math.abs(y - lens.y) < R) g.fillText(s, x, y)
      g.restore()
    }
    g.globalAlpha = 1; g.textBaseline = 'alphabetic'
    g.drawImage(art.cv, n.x, n.y)
  }
}
