import { createElement as h, useEffect, useRef } from 'react'

// Generated thumbprint: concentric elliptical ridges with natural breaks around a looped core.
const CX = 32, CY = 34
const pt = (rx: number, ry: number, deg: number) => {
  const a = (deg * Math.PI) / 180
  return [CX + rx * Math.cos(a), CY + ry * Math.sin(a)].map((n) => n.toFixed(2)).join(' ')
}
const arc = (rx: number, ry: number, a0: number, a1: number) =>
  `M ${pt(rx, ry, a0)} A ${rx} ${ry} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${pt(rx, ry, a1)}`

export const RIDGES = Array.from({ length: 10 }, (_, i) => {
  const rx = 2.2 + i * 2.75, ry = 3 + i * 3
  const start = 140 - i * 4, end = 400 + i * 4
  const gap = 200 + ((i * 53) % 140)
  const segs = i < 2 ? [[start + 30, end - 30]] : [[start, gap - 8], [gap + 8, end]]
  return segs.map(([a, b]) => arc(rx, ry, a, b))
}).flat()

export default function Fingerprint({ size = 40, color = 'currentColor', animate = false }: {
  size?: number; color?: string; animate?: boolean
}) {
  const w = size > 100 ? 1.2 : size > 40 ? 1.8 : 2.4
  const ref = useRef<SVGSVGElement>(null)
  // Draw-on via Web Animations with measured lengths. Nothing is hidden by default,
  // so if the animation never runs the ridges simply stay fully drawn.
  useEffect(() => {
    if (!animate || !ref.current || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const anims = [...ref.current.querySelectorAll('path')].map((p, i) => {
      const len = p.getTotalLength()
      return p.animate(
        [{ strokeDasharray: `${len} ${len}`, strokeDashoffset: len }, { strokeDasharray: `${len} ${len}`, strokeDashoffset: 0 }],
        { duration: 1400, delay: 300 + i * 80, easing: 'cubic-bezier(.6,.05,.2,1)', fill: 'backwards' },
      )
    })
    return () => anims.forEach((a) => a.cancel())
  }, [animate])
  return h('svg', { ref, width: size, height: size, viewBox: '0 0 64 64', fill: 'none', role: 'img', 'aria-label': 'Fingerprint', style: { color, display: 'block' } },
    ...RIDGES.map((d, i) => h('path', { key: i, d, stroke: 'currentColor', strokeWidth: w, strokeLinecap: 'round' })))
}
