import { createElement as h, useEffect, useRef, type CSSProperties, type ReactNode } from 'react'

// Plain DOM wrappers for CSS-driven motion (react-native-web Views don't take className).
const col: CSSProperties = { display: 'flex', flexDirection: 'column' }

/** Plays the "rise" entrance on mount, staggered by `delay` ms. */
export function Rise({ delay = 0, children, style }: { delay?: number; children: ReactNode; style?: CSSProperties }) {
  return h('div', { className: 'rise', style: { ...col, animationDelay: `${delay}ms`, ...style } }, children)
}

/** Fades/slides in when scrolled into view. */
export function Reveal({ delay = 0, children, style }: { delay?: number; children: ReactNode; style?: CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) { el.classList.add('in'); return }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('in'); io.disconnect() }
    }, { rootMargin: '0px 0px -8% 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return h('div', { ref, className: 'reveal', style: { transitionDelay: `${delay}ms`, ...style } }, children)
}

/** A DOM element with a className (for one-off CSS effects). */
export function Css({ cls, children, style, tag = 'div' }: { cls: string; children?: ReactNode; style?: CSSProperties; tag?: string }) {
  return h(tag, { className: cls, style }, children)
}

/** Splits a heading into words that slide up one after another when the parent .reveal comes in. */
export function Words({ text, start = 0 }: { text: string; start?: number }) {
  return h('span', null, ...text.split(' ').map((w, i, a) =>
    h('span', { key: i, className: 'wmask' },
      h('span', { className: 'w', style: { transitionDelay: `${start + i * 70}ms` } }, w + (i < a.length - 1 ? '\u00a0' : '')))))
}

/** Counts from 0 to `to` when scrolled into view; keeps any suffix ("5+", "10+"). */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const el = ref.current
    const m = value.match(/^(\d+)(.*)$/)
    if (!el || !m || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const to = Number(m[1]), rest = m[2]
    el.textContent = '0' + rest
    let raf = 0
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const step = (t: number) => {
        const k = Math.min(1, (t - t0) / 1200), ease = 1 - Math.pow(1 - k, 3)
        el.textContent = Math.round(to * ease) + rest
        if (k < 1) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
    })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [value])
  return h('span', { ref }, value)
}

/**
 * Scroll-linked effects. The page scrolls inside react-native-web's ScrollView, so listen
 * to scroll in the capture phase. Sets --p (0..1) on [data-scroll-progress] elements:
 * whole page for the top bar, own position in the viewport for everything else.
 */
export function useScrollFx() {
  useEffect(() => {
    let raf = 0
    const run = (scroller?: Element) => {
      raf = 0
      const vh = innerHeight
      document.querySelectorAll<HTMLElement>('[data-scroll-progress]').forEach((el) => {
        let p: number
        if (el.dataset.scrollProgress === 'page') {
          const s = scroller ?? document.scrollingElement!
          p = s.scrollTop / Math.max(1, s.scrollHeight - s.clientHeight)
        } else {
          const r = el.getBoundingClientRect()
          p = (vh * 0.75 - r.top) / Math.max(1, r.height)
        }
        el.style.setProperty('--p', String(Math.max(0, Math.min(1, p))))
      })
    }
    const onScroll = (e: Event) => {
      const t = e.target as Element
      if (!raf) raf = requestAnimationFrame(() => run(t instanceof Element && t.scrollHeight > t.clientHeight ? t : undefined))
    }
    document.addEventListener('scroll', onScroll, { capture: true, passive: true })
    run()
    return () => { document.removeEventListener('scroll', onScroll, { capture: true }); cancelAnimationFrame(raf) }
  }, [])
}

/** Card that leans toward the pointer in 3D. */
export function Tilt({ children, style, max = 6 }: { children: ReactNode; style?: CSSProperties; max?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const move = (e: { clientX: number; clientY: number }) => {
    const el = ref.current!, r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(900px) rotateY(${x * max}deg) rotateX(${-y * max}deg)`
    el.style.setProperty('--gx', `${(x + 0.5) * 100}%`); el.style.setProperty('--gy', `${(y + 0.5) * 100}%`)
  }
  const leave = () => { ref.current!.style.transform = '' }
  return h('div', { ref, className: 'tilt', onPointerMove: move, onPointerLeave: leave, style: { ...col, ...style } }, children)
}
