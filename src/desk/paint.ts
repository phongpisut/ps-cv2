// Canvas painters for everything that lies on the desk (each becomes a three.js CanvasTexture).
import { jobs, education, internship } from '../data'

export const C = {
  paper: '#faf7f1', paper2: '#f3ede2', ink: '#1d1b18', muted: '#5f584e', faint: '#958c7e',
  line: '#ddd4c4', accent: '#d9502a', sage: '#5c8a5a', chip: '#ebe3d4',
}
export const SANS = 'Geist, Inter, system-ui, sans-serif'
export const SERIF = '"Instrument Serif", Georgia, serif'
export const MONO = '"Geist Mono", ui-monospace, monospace'

export function canvas(w: number, h: number) {
  const cv = document.createElement('canvas')
  cv.width = w; cv.height = h
  return [cv, cv.getContext('2d')!] as const
}

export function roundRect(g: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  g.beginPath(); g.roundRect(x, y, w, h, r)
}

/** Seeded noise so textures look the same on every visit. */
export function rng(seed: number) {
  return () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296 }
}

export function paperGrain(g: CanvasRenderingContext2D, w: number, h: number, base: string, seed = 1, amount = 0.035) {
  g.fillStyle = base; g.fillRect(0, 0, w, h)
  const r = rng(seed)
  for (let i = 0; i < (w * h) / 90; i++) {
    g.fillStyle = r() < 0.5 ? `rgba(80,60,30,${amount * r()})` : `rgba(255,255,255,${amount * 1.5 * r()})`
    g.fillRect(r() * w, r() * h, 1 + r() * 2, 1 + r() * 2)
  }
}

export function wood() {
  const [cv, g] = canvas(2048, 1024)
  const r = rng(7)
  const grad = g.createLinearGradient(0, 0, 0, 1024)
  grad.addColorStop(0, '#8a5a36'); grad.addColorStop(0.5, '#7b4e2d'); grad.addColorStop(1, '#86573a')
  g.fillStyle = grad; g.fillRect(0, 0, 2048, 1024)
  // planks
  for (let p = 0; p < 4; p++) {
    const y0 = p * 256
    g.fillStyle = `rgba(${r() < 0.5 ? '40,20,5' : '255,220,170'},${0.04 + r() * 0.05})`
    g.fillRect(0, y0, 2048, 256)
    g.fillStyle = 'rgba(30,15,5,.35)'; g.fillRect(0, y0, 2048, 2)
  }
  // grain streaks
  for (let i = 0; i < 900; i++) {
    const y = r() * 1024, len = 200 + r() * 900, x = r() * 2048
    g.strokeStyle = r() < 0.6 ? `rgba(45,22,8,${0.05 + r() * 0.12})` : `rgba(255,215,160,${0.03 + r() * 0.06})`
    g.lineWidth = 0.6 + r() * 2.2
    g.beginPath(); g.moveTo(x, y)
    g.bezierCurveTo(x + len * 0.3, y + (r() - 0.5) * 10, x + len * 0.7, y + (r() - 0.5) * 10, x + len, y + (r() - 0.5) * 6)
    g.stroke()
  }
  // a couple of knots
  for (let k = 0; k < 5; k++) {
    const x = r() * 2048, y = r() * 1024
    for (let ring = 1; ring < 9; ring++) {
      g.strokeStyle = `rgba(45,22,8,${0.18 - ring * 0.015})`; g.lineWidth = 1.5
      g.beginPath(); g.ellipse(x, y, ring * 9, ring * 3.2, 0, 0, Math.PI * 2); g.stroke()
    }
  }
  return cv
}

/** Spiral notepad page: my journey. */
export function notepad() {
  const W = 1024, H = 1404
  const [cv, g] = canvas(W, H)
  paperGrain(g, W, H, '#fbf8f0', 3)
  // ruled lines + margin
  g.strokeStyle = 'rgba(90,130,190,.28)'; g.lineWidth = 2
  for (let y = 250; y < H - 40; y += 62) { g.beginPath(); g.moveTo(0, y); g.lineTo(W, y); g.stroke() }
  g.strokeStyle = 'rgba(217,80,42,.45)'; g.beginPath(); g.moveTo(120, 90); g.lineTo(120, H); g.stroke()
  // spiral holes
  for (let x = 70; x < W; x += 74) { g.fillStyle = '#2a2622'; g.beginPath(); g.arc(x, 44, 13, 0, Math.PI * 2); g.fill() }
  g.fillStyle = C.ink; g.font = `italic 92px ${SERIF}`; g.fillText('My journey', 150, 190)
  g.fillStyle = C.accent; g.font = `500 26px ${MONO}`; g.fillText('8 TEAMS · 5 YEARS', 640, 186)
  let y = 300
  jobs.forEach((j, i) => {
    g.fillStyle = i === 0 ? C.accent : C.faint; g.font = `500 22px ${MONO}`
    g.fillText(j.period.toUpperCase() + (i === 0 ? '  · LATEST' : ''), 150, y - 18)
    g.fillStyle = C.ink; g.font = `600 38px ${SANS}`
    g.fillText(j.company.replace(' (Innovation Team)', ''), 150, y + 22)
    g.fillStyle = C.muted; g.font = `400 26px ${SANS}`
    g.fillText(j.role, 150, y + 56)
    // a bullet on the margin
    g.fillStyle = i === 0 ? C.accent : 'rgba(217,80,42,.35)'; g.beginPath(); g.arc(120, y + 8, 9, 0, Math.PI * 2); g.fill()
    y += 136
  })
  return cv
}

/** Index card: education, internship, languages. */
export function indexCard() {
  const W = 1000, H = 620
  const [cv, g] = canvas(W, H)
  paperGrain(g, W, H, '#fffdf7', 5)
  g.strokeStyle = 'rgba(217,80,42,.5)'; g.lineWidth = 3; g.beginPath(); g.moveTo(0, 120); g.lineTo(W, 120); g.stroke()
  g.strokeStyle = 'rgba(90,130,190,.25)'; g.lineWidth = 2
  for (let y = 190; y < H; y += 64) { g.beginPath(); g.moveTo(0, y); g.lineTo(W, y); g.stroke() }
  g.fillStyle = C.accent; g.font = `500 26px ${MONO}`; g.fillText(`EDUCATION · ${education.period}`, 50, 80)
  g.fillStyle = C.ink; g.font = `600 44px ${SANS}`; g.fillText(education.school, 50, 178)
  g.fillStyle = C.muted; g.font = `400 32px ${SANS}`; g.fillText(`${education.degree} · GPAX ${education.gpax}`, 50, 242)
  g.fillStyle = C.accent; g.font = `500 24px ${MONO}`; g.fillText(`INTERNSHIP · ${internship.org}`, 50, 362)
  g.fillStyle = C.ink; g.font = `500 34px ${SANS}`; g.fillText(`${internship.project} — ${internship.stack}`, 50, 412)
  g.fillStyle = C.accent; g.font = `500 24px ${MONO}`; g.fillText('LANGUAGES', 50, 488)
  g.fillStyle = C.ink; g.font = `500 34px ${SANS}`; g.fillText('Thai – Native  ·  English – Fair', 50, 540)
  return cv
}

function fingerprint(g: CanvasRenderingContext2D, cx: number, cy: number, s: number, color: string) {
  g.strokeStyle = color; g.lineWidth = s * 0.035; g.lineCap = 'round'
  for (let i = 1; i <= 9; i++) {
    const rx = i * s * 0.05, ry = i * s * 0.062
    const gap = 0.35 + (i % 3) * 0.25
    g.beginPath(); g.ellipse(cx, cy + s * 0.05, rx, ry, 0, Math.PI + gap * 0.3, Math.PI * 3 - gap); g.stroke()
  }
}

/** The CV badge from the old site, now a plastic card on the desk. */
export function idCard() {
  const W = 860, H = 540
  const [cv, g] = canvas(W, H)
  roundRect(g, 0, 0, W, H, 40); g.fillStyle = C.paper; g.fill()
  g.save(); g.clip()
  paperGrain(g, W, H, C.paper, 9, 0.02)
  g.fillStyle = C.accent; g.fillRect(0, 0, W, 10)
  g.restore()
  g.fillStyle = C.faint; g.font = `500 24px ${MONO}`; g.fillText('CURRICULUM VITAE', 44, 70)
  g.fillStyle = C.accent; g.textAlign = 'right'; g.fillText('VOL. 2026', W - 44, 70); g.textAlign = 'left'
  g.setLineDash([8, 8]); g.strokeStyle = C.line; g.lineWidth = 2; g.beginPath(); g.moveTo(0, 100); g.lineTo(W, 100); g.stroke(); g.setLineDash([])
  roundRect(g, 44, 130, 230, 270, 22); g.fillStyle = C.paper2; g.fill(); g.strokeStyle = C.line; g.stroke()
  fingerprint(g, 159, 262, 240, C.accent)
  const rows: [string, string][] = [['ROLE', 'React · React Native'], ['BASED', 'Bangkok, TH'], ['CODING SINCE', '2021'], ['LOOKING FOR', 'Next adventure']]
  rows.forEach(([k, v], i) => {
    g.fillStyle = C.faint; g.font = `500 20px ${MONO}`; g.fillText(k, 310, 152 + i * 66)
    g.fillStyle = C.ink; g.font = `600 32px ${SANS}`; g.fillText(v, 310, 186 + i * 66)
  })
  g.fillStyle = C.muted; g.font = `italic 64px ${SERIF}`; g.fillText('P. Meemuk', 44, 480)
  for (let i = 0; i < 26; i++) { g.fillStyle = C.ink; g.globalAlpha = 0.75; g.fillRect(560 + i * 9, 430, (i * 7) % 3 === 0 ? 5 : 2.5, 60) }
  g.globalAlpha = 1
  // stamp
  g.save(); g.translate(720, 330); g.rotate(-0.16); g.globalAlpha = 0.85
  g.strokeStyle = C.accent; g.lineWidth = 5; g.beginPath(); g.arc(0, 0, 82, 0, Math.PI * 2); g.stroke()
  g.lineWidth = 2; g.beginPath(); g.arc(0, 0, 68, 0, Math.PI * 2); g.stroke()
  g.fillStyle = C.accent; g.font = `600 20px ${MONO}`; g.textAlign = 'center'
  g.fillText('60 FPS', 0, -14); g.fillText('APPROVED', 0, 14); g.fillText('★ ★ ★', 0, 40)
  g.restore()

  return cv
}
