import './style.css'
import { Desk } from './desk/scene'
import { Hero } from './hero'
import { startChart } from './sections/chart'
import { profile, projects, projectGroups, jobs, skills, education, internship, languages } from './data'

document.documentElement.classList.add('js')
const $ = <T extends HTMLElement = HTMLElement>(s: string) => document.querySelector(s) as T

/* ---------- static text ---------- */
$('#year').textContent = String(new Date().getFullYear())
const mail = $<HTMLAnchorElement>('#mail')
mail.href = `mailto:${profile.email}`; mail.textContent = profile.email + ' ↗'

$('#proj-list').innerHTML = projectGroups.map((g) => `<li data-n="${g.n}"><div><b>${g.names.join(' & ')}</b><br><span>${g.client}</span></div></li>`).join('')
$('#cv-text').innerHTML = `
  <p>${profile.name}</p><p>${profile.title}, ${profile.location}. ${profile.email}</p>
  ${profile.bio.map((b) => `<p>${b}</p>`).join('')}
  <h2>Projects I've contributed to</h2><ul>${projects.map((p) => `<li>${p.name} (with ${p.client}): ${p.text}</li>`).join('')}</ul>
  <h2>Journey</h2><ul>${jobs.map((j) => `<li>${j.period}: ${j.role}, ${j.company} (${j.type})</li>`).join('')}</ul>
  <h2>Skills</h2>${Object.entries(skills).map(([k, v]) => `<p>${k}: ${v.join(', ')}</p>`).join('')}
  <h2>Education</h2><p>${education.degree}, ${education.school}, ${education.period}, GPAX ${education.gpax}. Internship: ${internship.org}, ${internship.project} (${internship.stack}). Languages: ${languages}</p>`

/* ---------- headings: words slide up one by one ---------- */
document.querySelectorAll<HTMLElement>('[data-words]').forEach((h) => {
  let i = 0
  const wrap = (node: Node) => {
    for (const child of [...node.childNodes]) {
      if (child.nodeType === Node.TEXT_NODE) {
        const frag = document.createDocumentFragment()
        for (const part of (child.textContent || '').split(/(\s+)/)) {
          if (!part) continue
          if (/^\s+$/.test(part)) { frag.append(' '); continue }
          const m = document.createElement('span'); m.className = 'wmask'
          const w = document.createElement('span'); w.className = 'w'; w.textContent = part; w.style.transitionDelay = `${i++ * 70}ms`
          m.append(w); frag.append(m)
        }
        child.replaceWith(frag)
      } else wrap(child)
    }
  }
  wrap(h)
})

/* ---------- reveal on scroll ---------- */
const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { rootMargin: '0px 0px -10% 0px' })
document.querySelectorAll('.reveal').forEach((el) => io.observe(el))

/* ---------- desk ---------- */
const stage = $('#stage')
const deskCanvas = $<HTMLCanvasElement>('#desk')
const desk = new Desk(deskCanvas)
const [first, last] = profile.name.split(' ')
const hero = new Hero($('#hero'), $<HTMLCanvasElement>('#hero-canvas'), Object.values(skills).flat(), first, last + '.', () => (innerWidth > 820 ? 124 : 66))
const heroMail = $<HTMLAnchorElement>('#hero-mail'); heroMail.href = `mailto:${profile.email}`
$('#hero-count').textContent = String(projects.length)
const smoothstep = (a: number, b: number, x: number) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t) }
const shows = [...document.querySelectorAll<HTMLElement>('.hud [data-show]')]
const items = [...document.querySelectorAll<HTMLElement>('#proj-list li')]
let lastActive = -1, lastPhase = ''
desk.onFrame = ({ phase, active }) => {
  if (phase !== lastPhase) {
    lastPhase = phase
    for (const el of shows) el.classList.toggle('off', el.dataset.show !== phase)
  }
  if (active !== lastActive) { lastActive = active; items.forEach((li) => li.classList.toggle('on', Number(li.dataset.n) === active)) }
}
const stageProgress = () => {
  const r = stage.getBoundingClientRect()
  return -r.top / Math.max(1, r.height - innerHeight)
}

Promise.all([
  document.fonts.load('700 100px Geist'), document.fonts.load('600 40px Geist'), document.fonts.load('400 30px Geist'),
  document.fonts.load('italic 400 100px "Instrument Serif"'), document.fonts.load('400 40px "Instrument Serif"'),
  document.fonts.load('500 30px "Geist Mono"'),
]).catch(() => {}).then(() => {
  hero.init()
  desk.ready()
  desk.setProgress(stageProgress())
  desk.start()
  $('#loading').classList.add('done')
})

new ResizeObserver(() => desk.resize()).observe(deskCanvas)
new IntersectionObserver(([e]) => (e.isIntersecting ? desk.start() : desk.stop())).observe(stage)

/* ---------- scroll: progress bar, stage, nav ---------- */
const bar = $('.progress')
const navLinks = [...document.querySelectorAll<HTMLAnchorElement>('.nav [data-go]')]
function onScroll() {
  const max = document.documentElement.scrollHeight - innerHeight
  bar.style.setProperty('--p', String(Math.min(1, scrollY / Math.max(1, max))))
  const s = stageProgress()
  desk.setProgress(s)
  hero.setOpacity(1 - smoothstep(0, 0.07, s)) // the Pretext overlay fades away to reveal the desk
  const here = s < 0.07 ? 'top' : s <= 1 ? 'projects'
    : ['contact', 'webgpu', 'physics', 'optimize', 'play'].find((id) => $('#' + id).getBoundingClientRect().top < innerHeight * 0.45) ?? 'projects'
  navLinks.forEach((a) => a.classList.toggle('on', a.dataset.go === here))
}
addEventListener('scroll', onScroll, { passive: true })
addEventListener('resize', onScroll)
onScroll()

const stageY = (p: number) => stage.offsetTop + p * (stage.offsetHeight - innerHeight)
navLinks.forEach((a) => a.addEventListener('click', (e) => {
  e.preventDefault()
  const go = a.dataset.go!
  const y = go === 'top' ? 0 : go === 'projects' ? stageY(0.62) : $('#' + go).getBoundingClientRect().top + scrollY + 40
  scrollTo({ top: y, behavior: 'smooth' })
}))

document.querySelector('[data-go="desk"]')?.addEventListener('click', (e) => { e.preventDefault(); scrollTo({ top: stageY(0.12), behavior: 'smooth' }) })

/* ---------- lazy demos: start when near, pause when away ---------- */
function whenVisible(el: Element, on: () => void, off: () => void, margin = '200px') {
  new IntersectionObserver(([e]) => (e.isIntersecting ? on() : off()), { rootMargin: margin }).observe(el)
}
const chart = startChart($<HTMLCanvasElement>('#chart'), $('#chart-fps'))
whenVisible($('#chart'), chart.start, chart.stop, '0px')

const hud = (root: string) => (k: string, v: string) => { const el = document.querySelector(`${root} [data-hud="${k}"]`); if (el) el.textContent = v }

let physics: Awaited<ReturnType<typeof import('./sections/physics').startPhysics>> | null = null
let physicsLoading = false, physicsVisible = false
whenVisible($('#physics-canvas'), async () => {
  physicsVisible = true
  if (physics) return physics.start()
  if (physicsLoading) return
  physicsLoading = true
  try {
    const { startPhysics } = await import('./sections/physics')
    physics = await startPhysics($<HTMLCanvasElement>('#physics-canvas'), hud('#physics'))
    document.querySelectorAll<HTMLButtonElement>('[data-phys]').forEach((b) => b.addEventListener('click', () => physics!.actions[b.dataset.phys!]()))
    $('#physics-msg').classList.add('done')
    if (physicsVisible) physics.start()
  } catch (err) {
    $('#physics-msg').textContent = 'Couldn’t start Box3D in this browser.'
    console.error(err)
  }
}, () => { physicsVisible = false; physics?.stop() })

let gpu: { start(): void; stop(): void } | null = null
let gpuLoading = false, gpuVisible = false
whenVisible($('#gpu-canvas'), async () => {
  gpuVisible = true
  if (gpu) return gpu.start()
  if (gpuLoading) return
  gpuLoading = true
  try {
    const { startWebGPU } = await import('./sections/webgpu')
    gpu = await startWebGPU($<HTMLCanvasElement>('#gpu-canvas'), hud('#webgpu'))
    $('#gpu-msg').classList.add('done')
    if (gpuVisible) gpu.start()
  } catch (err) {
    $('#gpu-msg').innerHTML = 'Your browser doesn’t expose WebGPU yet.<br>Try a recent Chrome or Edge, or Safari 26+.'
    const h = hud('#webgpu'); h('gpu', 'not available'); h('count', '131,072')
    console.warn(err)
  }
}, () => { gpuVisible = false; gpu?.stop() })

/* ---------- play: shared fruit drop over MoQ ---------- */
let melonStarted = false
let melon: { start(): void; stop(): void } | null = null
whenVisible($('#melon'), async () => {
  if (melon) return melon.start()
  if (melonStarted) return
  melonStarted = true
  const [{ Room }, { startMelon, TIERS, visitorFruit }] = await Promise.all([import('./game/room'), import('./game/melon')])
  const mine = visitorFruit()
  const room = new Room({ fruit: mine, score: 0, best: 0 })
  $('#m-mine').textContent = TIERS[mine].e
  $('#m-tiers').innerHTML = TIERS.map((t, i) => `<span class="${i === mine ? 'mine' : ''}">${t.e}</span>`).join('<i>›</i>')
  const esc = (x: string) => x.replace(/[^\w]/g, '')
  const render = () => {
    const others = Object.entries(room.peers)
    $('#m-dot').className = 'dot ' + (room.status === 'online' ? 'online' : room.status === 'error' ? 'error' : '')
    $('#m-status').textContent = room.status === 'error' ? 'Offline · needs WebTransport' : room.status === 'connecting' ? 'Connecting to the MoQ relay…' : `Live · ${others.length + 1} here now`
    $('#m-host').textContent = room.isHost && others.length ? '· 👑 running the physics' : ''
    $('#m-peers').innerHTML = others.length === 0
      ? '<li class="empty">No one else here yet. Open this page in another tab, or send it to a friend.</li>'
      : others.slice(0, 8).map(([id, p]) => `<li><div>${TIERS[p.fruit]?.e ?? '🍒'} visitor <span>${esc(id).slice(0, 4)}</span>${id === room.hostId ? ' 👑' : ''}</div><span>${p.score} / ${p.best}</span></li>`).join('')
    if (room.feed.length) $('#m-feed').innerHTML = room.feed.map((f) => `<li>${TIERS[f.who].e} ${f.self ? 'You' : 'Someone'} made ${TIERS[f.tier].e}</li>`).join('')
  }
  room.onChange = render
  render()
  room.start()
  melon = startMelon($<HTMLCanvasElement>('#melon'), room, {
    score: $('#m-score'), best: $('#m-best'), next: $('#m-next'), over: $('#m-over'), overScore: $('#m-over-score'), again: $('#m-again'),
  })
  melon.start()
}, () => { /* keep simulating: other visitors may depend on this tab */ }, '300px')
