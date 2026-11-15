import { prepareWithSegments, layoutWithLines } from '@chenglou/pretext'
import { projects, type Project } from '../data'
import { C, SANS, SERIF, MONO, canvas, roundRect } from './paint'

/*
 * The phone's screen: a lock screen while it lies on the desk, then (once the camera
 * has zoomed in) a "Contributions" app whose list scrolls with the page.
 */

export const SCREEN_W = 780, SCREEN_H = 1688
const R = 96 // screen corner radius
const PAD = 44
const TOP = 330 // list starts below the large title

type Card = { p: Project; y: number; h: number; title: string[]; lines: string[]; tagRows: string[][] }
const TITLE_FONT = `600 44px ${SANS}`, TITLE_LH = 50
const TITLE_W = SCREEN_W - PAD * 2 - 32 - 150 - 130 // card width − padding − icon − the "05 · WEB" label

export class PhoneScreen {
  readonly canvas: HTMLCanvasElement
  private g: CanvasRenderingContext2D
  private cards: Card[] = []
  private contentH = 0
  active = 0
  /** Workplace number of the card in the middle of the screen. */
  get activeN() { return this.cards[this.active]?.p.n ?? 1 }

  constructor() { [this.canvas, this.g] = canvas(SCREEN_W, SCREEN_H) }

  init() {
    const g = this.g
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

  /** unlock 0 = lock screen, 1 = app. scroll 0..1 through the list. */
  draw(unlock: number, scroll: number, now: Date) {
    const g = this.g
    g.clearRect(0, 0, SCREEN_W, SCREEN_H)
    g.save()
    roundRect(g, 0, 0, SCREEN_W, SCREEN_H, R); g.clip()

    if (unlock > 0.001) this.drawApp(scroll, now)
    if (unlock < 0.999) {
      g.save()
      g.globalAlpha = 1 - unlock * unlock
      g.translate(0, -unlock * SCREEN_H * 0.6)
      this.drawLock(now)
      g.restore()
    }
    // dynamic island
    roundRect(g, SCREEN_W / 2 - 118, 30, 236, 70, 35); g.fillStyle = '#050505'; g.fill()
    // home indicator
    roundRect(g, SCREEN_W / 2 - 140, SCREEN_H - 34, 280, 10, 5)
    g.fillStyle = unlock > 0.5 ? 'rgba(0,0,0,.55)' : 'rgba(255,255,255,.8)'; g.fill()
    g.restore()
  }

  private status(now: Date, color: string) {
    const g = this.g
    g.fillStyle = color; g.font = `600 34px ${SANS}`
    g.fillText(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }), 80, 78)
    // signal + battery
    for (let i = 0; i < 4; i++) { g.fillRect(560 + i * 14, 72 - i * 7, 9, 10 + i * 7) }
    roundRect(g, 630, 50, 66, 32, 9); g.strokeStyle = color; g.lineWidth = 3; g.stroke()
    roundRect(g, 635, 55, 48, 22, 5); g.fill()
    g.fillRect(699, 60, 5, 12)
  }

  private drawLock(now: Date) {
    const g = this.g
    const grad = g.createLinearGradient(0, 0, SCREEN_W * 0.6, SCREEN_H)
    grad.addColorStop(0, '#2a1a12'); grad.addColorStop(0.55, '#7a3219'); grad.addColorStop(1, '#d9502a')
    g.fillStyle = grad; g.fillRect(0, 0, SCREEN_W, SCREEN_H)
    // soft blobs
    for (const [x, y, r, a] of [[620, 420, 380, 0.18], [120, 1300, 420, 0.14]] as const) {
      const rg = g.createRadialGradient(x, y, 0, x, y, r); rg.addColorStop(0, `rgba(255,190,140,${a})`); rg.addColorStop(1, 'rgba(255,190,140,0)')
      g.fillStyle = rg; g.fillRect(0, 0, SCREEN_W, SCREEN_H)
    }
    this.status(now, '#fff')
    g.textAlign = 'center'; g.fillStyle = 'rgba(255,255,255,.85)'; g.font = `500 36px ${SANS}`
    g.fillText(now.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' }), SCREEN_W / 2, 270)
    g.fillStyle = '#fff'; g.font = `600 230px ${SANS}`
    g.fillText(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }), SCREEN_W / 2, 480)
    g.font = `italic 64px ${SERIF}`; g.fillStyle = 'rgba(255,255,255,.9)'; g.fillText('Phongpisut’s phone', SCREEN_W / 2, 590)
    // notification
    roundRect(g, 40, 1180, SCREEN_W - 80, 200, 44); g.fillStyle = 'rgba(255,248,240,.88)'; g.fill()
    roundRect(g, 74, 1218, 96, 96, 24); g.fillStyle = C.accent; g.fill()
    g.fillStyle = '#fff'; g.font = `700 44px ${SANS}`; g.fillText('PM', 122, 1282)
    g.textAlign = 'left'; g.fillStyle = C.ink; g.font = `600 36px ${SANS}`; g.fillText('Contributions', 196, 1252)
    g.fillStyle = C.muted; g.font = `400 30px ${SANS}`
    g.fillText(`${projects.length} projects I’ve contributed to`, 196, 1298)
    g.fillStyle = C.faint; g.font = `400 26px ${SANS}`; g.fillText('Scroll to open ↓', 196, 1340)
    g.textAlign = 'right'; g.fillText('now', SCREEN_W - 74, 1252); g.textAlign = 'left'
  }

  private drawApp(scroll: number, now: Date) {
    const g = this.g
    g.fillStyle = '#f3eee4'; g.fillRect(0, 0, SCREEN_W, SCREEN_H)
    const maxScroll = Math.max(0, this.contentH - SCREEN_H)
    const off = scroll * maxScroll
    // which card sits in the middle of the screen
    const mid = off + SCREEN_H * 0.5
    let best = 0, bd = Infinity
    this.cards.forEach((c, i) => { const d = Math.abs(c.y + c.h / 2 - mid); if (d < bd) { bd = d; best = i } })
    this.active = best

    g.save(); g.translate(0, -off)
    // large title
    g.fillStyle = C.faint; g.font = `500 24px ${MONO}`; g.fillText('(02) MY CV', PAD, 190)
    g.fillStyle = C.ink; g.font = `700 76px ${SANS}`; g.fillText('Contributions', PAD, 272)
    for (const [i, c] of this.cards.entries()) {
      if (c.y - off > SCREEN_H || c.y + c.h - off < 0) continue
      this.drawCard(c, i === best)
    }
    g.restore()

    // translucent header bar once scrolled
    const a = Math.min(1, off / 160)
    if (a > 0) {
      g.fillStyle = `rgba(243,238,228,${0.92 * a})`; g.fillRect(0, 0, SCREEN_W, 150)
      g.globalAlpha = a; g.fillStyle = C.ink; g.font = `600 34px ${SANS}`; g.textAlign = 'center'
      g.fillText('Contributions', SCREEN_W / 2, 136); g.textAlign = 'left'; g.globalAlpha = 1
    }
    this.status(now, C.ink)
  }

  private drawCard(c: Card, on: boolean) {
    const g = this.g
    const x = PAD, w = SCREEN_W - PAD * 2
    g.save()
    g.shadowColor = on ? 'rgba(217,80,42,.25)' : 'rgba(60,40,10,.12)'; g.shadowBlur = on ? 40 : 24; g.shadowOffsetY = 10
    roundRect(g, x, c.y, w, c.h, 40); g.fillStyle = '#fffdf8'; g.fill()
    g.restore()
    if (on) { roundRect(g, x, c.y, w, c.h, 40); g.strokeStyle = C.accent; g.lineWidth = 4; g.stroke() }
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
