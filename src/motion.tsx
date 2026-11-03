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
