// Colors are CSS variables (defined in index.html) so light "paper" / dark "night paper"
// switch instantly without re-rendering. react-native-web passes var(--x) through as-is.
export const c = {
  bg: 'var(--bg)',
  sheet: 'var(--sheet)',
  sheet2: 'var(--sheet2)',
  ink: 'var(--ink)',
  muted: 'var(--muted)',
  faint: 'var(--faint)',
  line: 'var(--line)',
  accent: 'var(--accent)',
  accentInk: 'var(--accent-ink)',
  chip: 'var(--chip)',
  sage: 'var(--sage)',
  shadow: 'var(--shadow)',
  shadowHi: 'var(--shadow-hi)',
}
export const font = '"Geist", "Inter", system-ui, sans-serif'
export const serif = '"Instrument Serif", Georgia, serif'
export const mono = '"Geist Mono", ui-monospace, monospace'

/** Resolve a CSS variable to a concrete color (for <canvas>). */
export const cssVar = (name: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim() || '#888'

export type Theme = 'light' | 'dark'
export function initialTheme(): Theme {
  try {
    const t = new URLSearchParams(location.search).get('theme') || localStorage.getItem('theme')
    if (t === 'light' || t === 'dark') return t
  } catch { /* storage blocked */ }
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}
export function applyTheme(t: Theme) {
  document.documentElement.dataset.theme = t
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', cssVar('--bg'))
  try { localStorage.setItem('theme', t) } catch { /* storage blocked */ }
}
