import { prepareWithSegments, layoutWithLines } from '@chenglou/pretext'
import { projects, type Project } from '../data'
import { C, SANS, SERIF, MONO, canvas, roundRect } from './paint'

/*
 * The phone's screen, built as layers so scrolling costs nothing on the CPU:
 *   content – the whole "Contributions" list painted ONCE into one tall texture; the page
 *             scroll just slides its texture coordinates (no redraw, no re-upload)
 *   header  – the translucent top bar that fades in once scrolled (opacity only)
 *   chrome  – status bar + home indicator (repainted once a minute)
 *   lock    – the lock screen (repainted once a minute), fades/zooms away on unlock
 *   frame   – dynamic island + rounded screen corners (static)
 * All layout is authored in "screen pixels" (SCREEN_W × SCREEN_H); canvases are scaled down.
 */

export const SCREEN_W = 780, SCREEN_H = 1688
const R = 96 // screen corner radius
const PAD = 44
const TOP = 330 // list starts below the large title
export const HEADER_H = 150

type Card = { p: Project; y: number; h: number; title: string[]; lines: string[]; tagRows: string[][] }
const TITLE_FONT = `600 44px ${SANS}`, TITLE_LH = 50
const TITLE_W = SCREEN_W - PAD * 2 - 32 - 150 - 130 // card width − padding − icon − the "05 · WEB" label
const time = (d: Date) => d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })

/** A canvas of `w×h` screen pixels drawn at scale `k`. */
function layer(w: number, h: number, k: number) {
  const [cv, g] = canvas(Math.round(w * k), Math.round(h * k))
  g.scale(k, k)
  return [cv, g] as const
}

export type ScreenState = { v0: number; vRepeat: number; header: number; active: number; mark: { y: number; h: number } | null }

export class PhoneScreen {
  content!: HTMLCanvasElement
  header!: HTMLCanvasElement
  readonly chrome: HTMLCanvasElement
  readonly lock: HTMLCanvasElement
  readonly frame: HTMLCanvasElement
  private chromeG: CanvasRenderingContext2D
  private lockG: CanvasRenderingContext2D
  private cards: Card[] = []
  private contentH = SCREEN_H
  private active = 0
  /** Workplace number of the card in the middle of the screen. */
  get activeN() { return this.cards[this.active]?.p.n ?? 1 }

  constructor() {
    ;[this.chrome, this.chromeG] = layer(SCREEN_W, SCREEN_H, 0.5)
    ;[this.lock, this.lockG] = layer(SCREEN_W, SCREEN_H, 0.6)
    this.frame = this.paintFrame()
  }

  /** Lay out and paint everything (call once fonts are loaded). */
  init(now: Date) {
    this.layout()
    this.paintContent()
    this.paintHeader()
    this.minute(now)
  }

  private layout() {
    const [, g] = canvas(1, 1)
    const inner = SCREEN_W - PAD * 2 - 64
    const textFont = `400 30px ${SANS}`
    let y = TOP
    this.cards = projects.map((p, i) => {
      if (i > 0 && p.n !== projects[i - 1].n) y += 18 // a little air between workplaces
      const lines = layoutWithLines(prepareWithSegments(p.text, textFont), inner, 44).lines.map((l) => l.text)
      const title = layoutWithLines(prepareWithSegments(p.name, TITLE_FONT), TITLE_W, TITLE_LH).lines.map((l) => l.text)
      g.font = `500 22px ${MONO}`
      const tagRows: string[][] = [[]]; let rowW = 0
      for (const t of p.tags) {
        const w = g.measureText(t).width + 36
        if (rowW + w > inner && rowW > 0) { tagRows.push([]); rowW = 0 }
        tagRows[tagRows.length - 1].push(t); rowW += w + 12
      }
      const head = Math.max(120, 10 + title.length * TITLE_LH + 44)
      const h = 32 + head + 30 + 34 + lines.length * 44 + 22 + tagRows.length * 52 + 26
      const card: Card = { p, y, h, title, lines, tagRows }
      y += h + 28
      return card
    })
    this.contentH = y + 80
  }

  /** The whole list, once. Kept under 4096px tall so every phone GPU can hold it. */
  private paintContent() {
    const k = Math.min(0.72, 4096 / this.contentH)
    const [cv, g] = layer(SCREEN_W, this.contentH, k)
    g.fillStyle = '#f3eee4'; g.fillRect(0, 0, SCREEN_W, this.contentH)
    g.fillStyle = C.faint; g.font = `500 24px ${MONO}`; g.fillText('(02) MY CV', PAD, 190)
    g.fillStyle = C.ink; g.font = `700 76px ${SANS}`; g.fillText('Contributions', PAD, 272)
    for (const c of this.cards) this.paintCard(g, c)
    this.content = cv
  }

  private paintHeader() {
    const [cv, g] = layer(SCREEN_W, HEADER_H, 0.6)
    g.fillStyle = 'rgba(243,238,228,.94)'; g.fillRect(0, 0, SCREEN_W, HEADER_H)
    g.fillStyle = 'rgba(29,27,24,.08)'; g.fillRect(0, HEADER_H - 2, SCREEN_W, 2)
    g.fillStyle = C.ink; g.font = `600 34px ${SANS}`; g.textAlign = 'center'; g.fillText('Contributions', SCREEN_W / 2, 136)
    this.header = cv
  }

  private paintFrame() {
    const [cv, g] = layer(SCREEN_W, SCREEN_H, 0.5)
    // black outside the rounded screen, so the rectangular layers below get round corners
    g.fillStyle = '#0a0a0b'; g.fillRect(0, 0, SCREEN_W, SCREEN_H)
    g.globalCompositeOperation = 'destination-out'
    roundRect(g, 0, 0, SCREEN_W, SCREEN_H, R); g.fill()
    g.globalCompositeOperation = 'source-over'
    roundRect(g, SCREEN_W / 2 - 118, 30, 236, 70, 35); g.fillStyle = '#050505'; g.fill()
    return cv
  }

  /** Repaint the clock layers (call when the minute changes). */
  minute(now: Date) {
    const g = this.chromeG
    g.clearRect(0, 0, SCREEN_W, SCREEN_H)
    this.status(g, now, C.ink)
    roundRect(g, SCREEN_W / 2 - 140, SCREEN_H - 34, 280, 10, 5); g.fillStyle = 'rgba(0,0,0,.55)'; g.fill()
    this.paintLock(now)
  }

  /** Where the list is for a scroll position (0..1): texture window, header fade, active card. */
  state(scroll: number): ScreenState {
    const maxScroll = Math.max(0, this.contentH - SCREEN_H)
    const off = scroll * maxScroll
    const mid = off + SCREEN_H * 0.5
    let best = 0, bd = Infinity
    this.cards.forEach((c, i) => { const d = Math.abs(c.y + c.h / 2 - mid); if (d < bd) { bd = d; best = i } })
    this.active = best
    const c = this.cards[best]
    const vRepeat = SCREEN_H / this.contentH
    return {
      vRepeat, v0: 1 - off / this.contentH - vRepeat, // texture v of the screen's bottom edge (v grows upwards)
      header: Math.min(1, off / 160),
      active: best,
      mark: c ? { y: c.y + c.h / 2 - off, h: c.h * 0.62 } : null,
    }
  }

  private status(g: CanvasRenderingContext2D, now: Date, color: string) {
    g.fillStyle = color; g.font = `600 34px ${SANS}`
    g.fillText(time(now), 80, 78)
    for (let i = 0; i < 4; i++) g.fillRect(560 + i * 14, 72 - i * 7, 9, 10 + i * 7)
    roundRect(g, 630, 50, 66, 32, 9); g.strokeStyle = color; g.lineWidth = 3; g.stroke()
    roundRect(g, 635, 55, 48, 22, 5); g.fill()
    g.fillRect(699, 60, 5, 12)
  }

  private paintLock(now: Date) {
    const g = this.lockG
    g.clearRect(0, 0, SCREEN_W, SCREEN_H)
    g.save()
    roundRect(g, 0, 0, SCREEN_W, SCREEN_H, R); g.clip()
    const grad = g.createLinearGradient(0, 0, SCREEN_W * 0.6, SCREEN_H)
    grad.addColorStop(0, '#2a1a12'); grad.addColorStop(0.55, '#7a3219'); grad.addColorStop(1, '#d9502a')
    g.fillStyle = grad; g.fillRect(0, 0, SCREEN_W, SCREEN_H)
    for (const [x, y, r, a] of [[620, 420, 380, 0.18], [120, 1300, 420, 0.14]] as const) {
      const rg = g.createRadialGradient(x, y, 0, x, y, r); rg.addColorStop(0, `rgba(255,190,140,${a})`); rg.addColorStop(1, 'rgba(255,190,140,0)')
      g.fillStyle = rg; g.fillRect(0, 0, SCREEN_W, SCREEN_H)
    }
    this.status(g, now, '#fff')
    g.textAlign = 'center'; g.fillStyle = 'rgba(255,255,255,.85)'; g.font = `500 36px ${SANS}`
    g.fillText(now.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' }), SCREEN_W / 2, 270)
    g.fillStyle = '#fff'; g.font = `600 230px ${SANS}`
    g.fillText(time(now), SCREEN_W / 2, 480)
    g.font = `italic 64px ${SERIF}`; g.fillStyle = 'rgba(255,255,255,.9)'; g.fillText('Phongpisut’s phone', SCREEN_W / 2, 590)
    roundRect(g, 40, 1180, SCREEN_W - 80, 200, 44); g.fillStyle = 'rgba(255,248,240,.88)'; g.fill()
    roundRect(g, 74, 1218, 96, 96, 24); g.fillStyle = C.accent; g.fill()
    g.fillStyle = '#fff'; g.font = `700 44px ${SANS}`; g.fillText('PM', 122, 1282)
    g.textAlign = 'left'; g.fillStyle = C.ink; g.font = `600 36px ${SANS}`; g.fillText('Contributions', 196, 1252)
    g.fillStyle = C.muted; g.font = `400 30px ${SANS}`
    g.fillText(`${projects.length} projects I’ve contributed to`, 196, 1298)
    g.fillStyle = C.faint; g.font = `400 26px ${SANS}`; g.fillText('Scroll to open ↓', 196, 1340)
    g.textAlign = 'right'; g.fillText('now', SCREEN_W - 74, 1252); g.textAlign = 'left'
    roundRect(g, SCREEN_W / 2 - 140, SCREEN_H - 34, 280, 10, 5); g.fillStyle = 'rgba(255,255,255,.8)'; g.fill()
    g.restore()
  }

  private paintCard(g: CanvasRenderingContext2D, c: Card) {
    const x = PAD, w = SCREEN_W - PAD * 2
    g.save()
    g.shadowColor = 'rgba(60,40,10,.12)'; g.shadowBlur = 24; g.shadowOffsetY = 10
    roundRect(g, x, c.y, w, c.h, 40); g.fillStyle = '#fffdf8'; g.fill()
    g.restore()
    const ix = x + 32
    let y = c.y + 32
    roundRect(g, ix, y, 120, 120, 30); g.fillStyle = C.paper2; g.fill()
    g.font = `66px system-ui, "Apple Color Emoji", "Segoe UI Emoji"`; g.textAlign = 'center'; g.fillText(c.p.emoji, ix + 60, y + 84); g.textAlign = 'left'
    g.fillStyle = C.ink; g.font = TITLE_FONT
    c.title.forEach((t, k) => g.fillText(t, ix + 150, y + 50 + k * TITLE_LH))
    g.fillStyle = C.muted; g.font = `400 28px ${SANS}`; g.fillText('with ' + c.p.client, ix + 150, y + 50 + (c.title.length - 1) * TITLE_LH + 44)
    g.fillStyle = C.faint; g.font = `500 22px ${MONO}`; g.textAlign = 'right'; g.fillText(`${String(c.p.n).padStart(2, '0')} · ${c.p.kind}`, x + w - 32, y + 30); g.textAlign = 'left'
    y += Math.max(120, 10 + c.title.length * TITLE_LH + 44) + 30
    g.fillStyle = C.accent; g.font = `500 22px ${MONO}`; g.fillText('MY PART', ix, y + 10); y += 34
    g.fillStyle = C.muted; g.font = `400 30px ${SANS}`
    for (const l of c.lines) { y += 44; g.fillText(l, ix, y - 10) }
    y += 22
    g.font = `500 22px ${MONO}`
    for (const row of c.tagRows) {
      let tx = ix
      for (const t of row) {
        const tw = g.measureText(t).width + 36
        roundRect(g, tx, y, tw, 40, 20); g.fillStyle = C.chip; g.fill()
        g.fillStyle = C.muted; g.fillText(t, tx + 18, y + 28)
        tx += tw + 12
      }
      y += 52
    }
  }
}

/** Screen-pixel → phone-screen plane coordinates (plane is 0.372 × 0.805, centred). */
export const SCREEN_PLANE = { w: 0.372, h: 0.805 }
export const PAD_X = PAD
