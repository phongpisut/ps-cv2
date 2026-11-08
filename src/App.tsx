import { createElement, useEffect, useState, type ReactNode } from 'react'
import { View, Text, ScrollView, Image, Linking, Pressable, useWindowDimensions } from 'react-native'
import { c, font, serif, mono, initialTheme, applyTheme, type Theme } from './theme'
import Fingerprint from './Fingerprint'
import MelonMerge, { TIERS, visitorFruit } from './MelonMerge'
import { Rise, Reveal, Css, Words, CountUp, Tilt, useScrollFx } from './motion'
import SkillField, { Obstacle, NameSlot } from './SkillField'
import { useRoom, type Room } from './live'
import { profile, webProjects, appProjects, jobs, skills, education, internship, languages, traits, type Project } from './data'

const FIELD_WORDS = Object.values(skills).flat()

/* ---------- primitives ---------- */

const T = ({ children, style }: { children: ReactNode; style?: object }) => (
  <Text style={[{ color: c.ink, fontFamily: font, fontSize: 16, lineHeight: 26 }, style]}>{children}</Text>
)
const Mono = ({ children, style }: { children: ReactNode; style?: object }) => (
  <Text style={[{ color: c.faint, fontFamily: mono, fontSize: 12, letterSpacing: 1.2, textTransform: 'uppercase' }, style]}>{children}</Text>
)
const Italic = ({ children, color = c.accent }: { children: ReactNode; color?: string }) => (
  <Text style={{ fontFamily: serif, fontStyle: 'italic', fontWeight: '400', color, letterSpacing: 0 }}>{children}</Text>
)
const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
type HoverState = { hovered?: boolean; pressed?: boolean }

/** A sheet of paper: soft shadow, hairline edge, optional tilt that straightens on hover. */
function Sheet({ children, tilt = 0, style, hover = true, tape }: { children: ReactNode; tilt?: number; style?: object; hover?: boolean; tape?: boolean }) {
  return (
    <Pressable
      style={({ hovered }: HoverState) => [{
        backgroundColor: c.sheet, borderRadius: 18, borderWidth: 1, borderColor: c.line, padding: 24,
        boxShadow: hover && hovered ? c.shadowHi : c.shadow,
        transform: [{ rotate: `${hover && hovered ? 0 : tilt}deg` }, { translateY: hover && hovered ? -6 : 0 }],
        transitionDuration: '350ms', transitionTimingFunction: 'cubic-bezier(.2,.8,.2,1)',
      }, style] as object}>
      {tape && <View style={{ position: 'absolute', top: -11, left: '50%', marginLeft: -42, width: 84, height: 22, backgroundColor: 'color-mix(in srgb, var(--accent) 22%, var(--sheet2))', opacity: 0.85, transform: [{ rotate: '-3deg' }], borderRadius: 2 } as object} />}
      {children}
    </Pressable>
  )
}

const Tags = ({ items }: { items: string[] }) => (
  <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
    {items.map((t) => (
      <View key={t} style={{ borderRadius: 99, paddingHorizontal: 10, paddingVertical: 3, backgroundColor: c.chip }}>
        <Text style={{ fontFamily: mono, fontSize: 11.5, lineHeight: 18, color: c.muted }}>{t}</Text>
      </View>
    ))}
  </View>
)

function Button({ label, onPress, primary, icon }: { label: string; onPress: () => void; primary?: boolean; icon?: string }) {
  return (
    <Pressable onPress={onPress}
      style={({ hovered, pressed }: HoverState) => ({
        flexDirection: 'row', alignItems: 'center', gap: 8,
        paddingHorizontal: 22, paddingVertical: 13, borderRadius: 999, borderWidth: 1,
        borderColor: primary ? c.ink : c.line, backgroundColor: primary ? c.ink : hovered ? c.sheet : 'transparent',
        boxShadow: hovered ? c.shadow : 'none',
        transform: [{ translateY: hovered && !pressed ? -2 : 0 }, { scale: pressed ? 0.97 : 1 }], transitionDuration: '200ms',
      } as object)}>
      <Text style={{ color: primary ? c.bg : c.ink, fontFamily: font, fontWeight: '600', fontSize: 15 }}>{label}</Text>
      {icon && <Text style={{ color: primary ? c.bg : c.ink, fontSize: 15 }}>{icon}</Text>}
    </Pressable>
  )
}

function SectionHead({ id, n, title, accent, sub }: { id: string; n: string; title: string; accent: string; sub?: string }) {
  return (
    <Reveal>
      <View nativeID={id} style={{ scrollMarginTop: 96, marginBottom: 36, gap: 10 } as object}>
        <Mono style={{ color: c.accent }}>({n})</Mono>
        <T style={{ fontSize: 46, lineHeight: 50, fontWeight: '600', letterSpacing: -1.6 }}>
          <Words text={title} /> <Italic><Words text={accent} start={title.split(' ').length * 70} /></Italic>
        </T>
        {sub && <T style={{ color: c.muted, fontSize: 17, maxWidth: 560 }}>{sub}</T>}
      </View>
    </Reveal>
  )
}

/* ---------- pieces ---------- */

function Nav({ wide, theme, toggle }: { wide: boolean; theme: Theme; toggle: () => void }) {
  const all: [string, string][] = [['About', 'about'], ['Contributions', 'work'], ['Play', 'play'], ['Journey', 'experience'], ['Skills', 'skills']]
  const links = wide ? all : all.filter(([, id]) => ['work', 'play'].includes(id))
  return (
    <View style={{ position: 'fixed', top: 14, left: 0, right: 0, zIndex: 20, alignItems: 'center', pointerEvents: 'box-none' } as object}>
      <Css cls="rise">
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: wide ? 22 : 14, paddingLeft: 10, paddingRight: 8, paddingVertical: 7, borderRadius: 999, backgroundColor: 'color-mix(in srgb, var(--sheet) 78%, transparent)', backdropFilter: 'blur(14px) saturate(1.4)', borderWidth: 1, borderColor: c.line, boxShadow: c.shadow } as object}>
          <Pressable onPress={() => go('top')} style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: c.accent, alignItems: 'center', justifyContent: 'center' }}>
              <Fingerprint size={20} color="var(--accent-ink)" />
            </View>
            {wide && <T style={{ fontWeight: '600', fontSize: 14 }}>Phongpisut</T>}
          </Pressable>
          {links.map(([l, id]) => (
            <Pressable key={id} onPress={() => go(id)}>
              {({ hovered }: HoverState) => <T style={{ fontSize: 14, color: hovered ? c.ink : c.muted }}>{l}</T>}
            </Pressable>
          ))}
          <Pressable onPress={toggle} accessibilityLabel="Toggle light / dark"
            style={({ hovered }: HoverState) => ({ width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center', backgroundColor: hovered ? c.chip : 'transparent', transitionDuration: '150ms' } as object)}>
            <Text style={{ fontSize: 16, color: c.ink }}>{theme === 'dark' ? '☀︎' : '☾'}</Text>
          </Pressable>
        </View>
      </Css>
    </View>
  )
}

function IdCard({ wide }: { wide: boolean }) {
  const rows: [string, string][] = [['Role', 'React · React Native'], ['Based', 'Bangkok, TH'], ['Coding since', '2021'], ['Looking for', 'Next adventure']]
  return (
    <Css cls="float" style={{ width: wide ? 360 : 300 }}>
      <Sheet hover={false} tape style={{ padding: 0, overflow: 'visible' }}>
        <View style={{ padding: 22, paddingBottom: 18, borderBottomWidth: 1, borderBottomColor: c.line, borderStyle: 'dashed', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Mono>Curriculum vitae</Mono>
          <Mono style={{ color: c.accent }}>Vol. 2026</Mono>
        </View>
        <View style={{ flexDirection: 'row', gap: 18, padding: 22, alignItems: 'center' }}>
          <View style={{ width: 112, height: 132, borderRadius: 12, backgroundColor: c.sheet2, borderWidth: 1, borderColor: c.line, alignItems: 'center', justifyContent: 'center' }}>
            <Fingerprint size={96} color="var(--accent)" animate />
          </View>
          <View style={{ flex: 1, gap: 9 }}>
            {rows.map(([k, v]) => (
              <View key={k}>
                <Mono style={{ fontSize: 10 }}>{k}</Mono>
                <T style={{ fontSize: 14, lineHeight: 19, fontWeight: '500' }}>{v}</T>
              </View>
            ))}
          </View>
        </View>
        <View style={{ paddingHorizontal: 22, paddingBottom: 20, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <T style={{ fontFamily: serif, fontStyle: 'italic', fontSize: 30, lineHeight: 32, color: c.muted }}>P. Meemuk</T>
          <View style={{ flexDirection: 'row', gap: 2, height: 26, alignItems: 'flex-end' }}>
            {Array.from({ length: 22 }, (_, i) => <View key={i} style={{ width: (i * 7) % 3 === 0 ? 3 : 1.5, height: '100%', backgroundColor: c.ink, opacity: 0.7 }} />)}
          </View>
        </View>
        {/* ink stamp */}
        <View style={{ position: 'absolute', right: -20, bottom: 46 }}>
          <Css cls="stamp">
            <View style={{ width: 92, height: 92, borderRadius: 46, borderWidth: 2.5, borderColor: c.accent, alignItems: 'center', justifyContent: 'center', mixBlendMode: 'multiply' } as object}>
              <View style={{ width: 78, height: 78, borderRadius: 39, borderWidth: 1, borderColor: c.accent, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontFamily: mono, fontSize: 9, letterSpacing: 1.5, color: c.accent, textAlign: 'center' }}>{'60 FPS\nAPPROVED\n★ ★ ★'}</Text>
              </View>
            </View>
          </Css>
        </View>
      </Sheet>
    </Css>
  )
}

function Marquee({ items, rev }: { items: string[]; rev?: boolean }) {
  const row = [...items, ...items]
  return (
    <Css cls="marquee-wrap" style={{ overflow: 'hidden', width: '100%' }}>
      <Css cls={rev ? 'marquee rev' : 'marquee'}>
        {row.map((s, i) => (
          <View key={i} style={{ flexDirection: 'row', alignItems: 'center', gap: 22, paddingRight: 22 }}>
            <T style={{ fontSize: 30, lineHeight: 44, fontWeight: i % 3 === 1 ? '400' : '600', letterSpacing: -0.8, fontFamily: i % 3 === 1 ? serif : font, fontStyle: i % 3 === 1 ? 'italic' : 'normal', color: i % 3 === 1 ? c.accent : c.ink }}>{s}</T>
            <Text style={{ color: c.faint, fontSize: 16 }}>✳︎</Text>
          </View>
        ))}
      </Css>
    </Css>
  )
}

function Icon({ p, size = 56 }: { p: Project; size?: number }) {
  const [failed, setFailed] = useState(!p.icon)
  const box = { width: size, height: size, borderRadius: size * 0.26 }
  if (failed)
    return (
      <View style={[box, { backgroundColor: c.sheet2, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: c.line }]}>
        <Text style={{ fontSize: size * 0.46 }}>{p.emoji}</Text>
      </View>
    )
  return <Image source={{ uri: p.icon! }} style={[box, { boxShadow: c.shadow }] as object} onError={() => setFailed(true)} />
}

const TILTS = [-1.2, 0.9, -0.6, 1.1, -0.9, 0.7]
function ProjectCard({ p, i, kind }: { p: Project; i: number; kind: string }) {
  return (
    <Reveal delay={(i % 3) * 90} style={{ flexGrow: 1, flexBasis: 300 }}>
      <Tilt style={{ flexGrow: 1 }}>
      <Sheet tilt={TILTS[i % TILTS.length]} tape={i % 2 === 0} style={{ gap: 16, flexGrow: 1 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
          <Icon p={p} />
          <View style={{ flex: 1 }}>
            <T style={{ fontSize: 21, lineHeight: 26, fontWeight: '600', letterSpacing: -0.5 }}>{p.name}</T>
            <T style={{ color: c.muted, fontSize: 13, lineHeight: 19 }}>with {p.client}</T>
          </View>
          <Mono style={{ fontSize: 10 }}>{kind}</Mono>
        </View>
        <T style={{ fontSize: 15, lineHeight: 24, color: c.muted }}>{p.text}</T>
        <Tags items={p.tags} />
      </Sheet>
      </Tilt>
    </Reveal>
  )
}

function LivePanel({ live, mine }: { live: Room; mine: number }) {
  const others = Object.entries(live.peers)
  const label = live.status === 'error' ? 'Offline · needs WebTransport'
    : live.status === 'connecting' ? 'Connecting to MoQ relay…' : `Live · ${others.length + 1} here now`
  return (
    <View style={{ flex: 1, minWidth: 270, gap: 18 }}>
      <Sheet hover={false} tilt={0.6} style={{ gap: 16 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          {createElement('span', { className: live.status === 'online' ? 'live-dot' : undefined, style: { width: 9, height: 9, borderRadius: 5, background: live.status === 'error' ? 'var(--accent)' : live.status === 'online' ? 'var(--sage)' : 'var(--faint)' } })}
          <Mono>{label}</Mono>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
          <View style={{ width: 64, height: 64, borderRadius: 32, backgroundColor: c.sheet2, borderWidth: 1, borderColor: c.line, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 36 }}>{TIERS[mine].e}</Text>
          </View>
          <View>
            <Mono style={{ fontSize: 10 }}>Your random fruit</Mono>
            <T style={{ fontFamily: serif, fontSize: 30, lineHeight: 34 }}>You{live.isHost && others.length > 0 ? <Text style={{ fontSize: 16 }}>  👑 host</Text> : null}</T>
          </View>
        </View>
        <View style={{ height: 1, backgroundColor: c.line }} />
        {others.length === 0 ? (
          <T style={{ fontSize: 14, color: c.faint }}>No one else here yet — open this page in another tab or send it to a friend.</T>
        ) : (
          <View style={{ gap: 10 }}>
            {others.slice(0, 8).map(([id, p]) => (
              <View key={id} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                  <Text style={{ fontSize: 22 }}>{TIERS[p.fruit]?.e ?? '🍒'}</Text>
                  <T style={{ fontSize: 15 }}>visitor <Text style={{ fontFamily: mono, color: c.faint }}>{id.slice(0, 4)}</Text>{id === live.hostId ? '  👑' : ''}</T>
                </View>
                <T style={{ fontSize: 14, color: c.muted, fontFamily: mono }}>{p.score} <Text style={{ color: c.faint }}>/ {p.best}</Text></T>
              </View>
            ))}
          </View>
        )}
      </Sheet>
      <Sheet hover={false} tilt={-0.8} style={{ gap: 10, backgroundColor: c.sheet2 }}>
        <Mono>Big merges</Mono>
        {live.feed.length === 0 ? (
          <T style={{ fontSize: 14, color: c.faint }}>Merges into 🍎 or bigger appear here for everyone.</T>
        ) : live.feed.map((f) => (
          <T key={f.id} style={{ fontSize: 14 }}>{TIERS[f.who].e} {f.self ? 'You' : 'Someone'} made {TIERS[f.tier].e}</T>
        ))}
      </Sheet>
    </View>
  )
}

/* ---------- page ---------- */

export default function App() {
  const { width } = useWindowDimensions()
  const wide = width > 820
  const [theme, setTheme] = useState<Theme>(initialTheme)
  useEffect(() => applyTheme(theme), [theme])
  useScrollFx()
  const [mine] = useState(visitorFruit)
  const [game, setGame] = useState({ score: 0, best: 0 })
  const live = useRoom({ fruit: mine, ...game })
  const [first, last] = profile.name.split(' ')
  const nameSize = wide ? 124 : 66

  return (
    <View style={{ flex: 1 }}>
    {createElement('div', { className: 'progress', 'data-scroll-progress': 'page' })}
    <Nav wide={wide} theme={theme} toggle={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} />
    <ScrollView style={{ flex: 1, backgroundColor: 'transparent' }} contentContainerStyle={{ alignItems: 'center' }}>

      {/* ---------- hero: my name among my skills (Pretext) ---------- */}
      <SkillField words={FIELD_WORDS} first={first} last={last + '.'} nameSize={nameSize} style={{ minHeight: wide ? 860 : 780 }}>
        <View nativeID="top" style={{ width: '100%', maxWidth: 1120, paddingHorizontal: 20, paddingTop: wide ? 140 : 100, paddingBottom: 80, flexDirection: wide ? 'row' : 'column', alignItems: wide ? 'center' : 'stretch', gap: wide ? 40 : 36 }}>
          <View style={{ flex: wide ? 1 : undefined }}>
            <Rise delay={100}>
              <Obstacle pad={10}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: c.sheet, borderWidth: 1, borderColor: c.line, borderRadius: 99, paddingHorizontal: 12, paddingVertical: 6, boxShadow: c.shadow } as object}>
                  {createElement('span', { className: 'live-dot', style: { width: 7, height: 7, borderRadius: 4, background: 'var(--sage)' } })}
                  <Mono style={{ fontSize: 11, color: c.muted }}>Hi, I'm · open to new adventures</Mono>
                </View>
              </Obstacle>
            </Rise>
            <View style={{ marginTop: 18 }}>
              <NameSlot height={Math.ceil(nameSize * 2.05)} label={profile.name} />
            </View>
            <Rise delay={480}>
              <Obstacle style={{ maxWidth: 500, marginTop: 14 }}>
                <T style={{ color: c.muted, fontSize: wide ? 21 : 18, lineHeight: wide ? 32 : 28 }}>
                  A React & React Native developer from {profile.location.split(',')[0]}. Since 2021 I've <Text style={{ color: c.ink, fontWeight: '600' }}>contributed</Text> to banking, trading and insurance apps — mostly the smooth, animated parts.
                </T>
              </Obstacle>
            </Rise>
            <Rise delay={600}>
              <Obstacle pad={12} style={{ marginTop: 30 }}>
                <View style={{ flexDirection: 'row', gap: 12, flexWrap: 'wrap' }}>
                  <Button primary label="Email me" icon="↗" onPress={() => Linking.openURL(`mailto:${profile.email}`)} />
                  <Button label="Read my CV" icon="↓" onPress={() => go('about')} />
                </View>
              </Obstacle>
            </Rise>
            <Rise delay={900}>
              <Obstacle pad={6} style={{ marginTop: 22 }}>
                <Css cls="nudge"><Mono style={{ fontSize: 11 }}>{wide ? '↖ drag my name · move your cursor through the text' : '↖ drag my name sideways'}</Mono></Css>
              </Obstacle>
            </Rise>
          </View>
          <Rise delay={400} style={{ alignItems: 'center' }}>
            <Obstacle pad={18} style={{ alignSelf: 'center' }}>
              <IdCard wide={wide} />
            </Obstacle>
          </Rise>
        </View>
      </SkillField>

      {/* ---------- marquee strip: a few things about me ---------- */}
      <View style={{ width: '100%', paddingVertical: 18, gap: 4, borderTopWidth: 1, borderBottomWidth: 1, borderColor: c.line, backgroundColor: c.sheet, transform: [{ rotate: '-1deg' }], boxShadow: c.shadow, marginVertical: 30 } as object}>
        <Marquee items={traits} />
      </View>

      <View style={{ width: '100%', maxWidth: 1120, paddingHorizontal: 20, paddingBottom: 40 }}>

        {/* ---------- about ---------- */}
        <View style={{ marginTop: 90 }}>
          <SectionHead id="about" n="01" title="A bit" accent="about me." />
          <View style={{ flexDirection: wide ? 'row' : 'column', gap: 40 }}>
            <Reveal style={{ flex: 1.2 }}>
              <T style={{ fontFamily: serif, fontSize: wide ? 40 : 30, lineHeight: wide ? 48 : 38, letterSpacing: -0.4 }}>
                “I see the world as my classroom — and knowledge is the <Italic>ultimate souvenir</Italic>.”
              </T>
            </Reveal>
            <Reveal delay={120} style={{ flex: 1, gap: 18 }}>
              {profile.bio.map((p) => <T key={p} style={{ fontSize: 17, lineHeight: 28, color: c.muted }}>{p}</T>)}
              <View style={{ flexDirection: 'row', gap: 28, marginTop: 10, flexWrap: 'wrap' }}>
                {[['5+', 'years contributing'], ['8', 'teams joined'], ['10+', 'repos in one Nx MFE']].map(([a, b]) => (
                  <View key={b}>
                    <T style={{ fontSize: 40, lineHeight: 44, fontWeight: '600', letterSpacing: -1.5 }}><CountUp value={a} /></T>
                    <Mono style={{ fontSize: 10.5 }}>{b}</Mono>
                  </View>
                ))}
              </View>
            </Reveal>
          </View>
        </View>

        {/* ---------- contributions ---------- */}
        <View style={{ marginTop: 140 }}>
          <SectionHead id="work" n="02" title="Projects I've" accent="contributed to." sub="I joined each of these teams as one of the developers. Here's my part in each — mobile apps people use every day, and the web tools behind them." />
          <Mono style={{ marginBottom: 20 }}>— Mobile apps</Mono>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 22 }}>
            {appProjects.map((p, i) => <ProjectCard key={p.name} p={p} i={i} kind="App" />)}
          </View>
          <Mono style={{ marginTop: 56, marginBottom: 20 }}>— Web</Mono>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 22 }}>
            {webProjects.map((p, i) => <ProjectCard key={p.name} p={p} i={i + 1} kind="Web" />)}
          </View>
        </View>

        {/* ---------- play ---------- */}
        <View style={{ marginTop: 140 }}>
          <SectionHead id="play" n="03" title="Take a break," accent="merge a melon." sub="One shared box for everyone on this page — synced live over MoQ. Same fruits touch → they merge." />
          <Reveal>
            <View style={{ flexDirection: wide ? 'row' : 'column', gap: 36, alignItems: wide ? 'flex-start' : 'stretch' }}>
              <MelonMerge mine={mine} room={live} onScore={(score, best) => setGame({ score, best })} />
              <LivePanel live={live} mine={mine} />
            </View>
          </Reveal>
        </View>

        {/* ---------- journey (timeline) ---------- */}
        <View style={{ marginTop: 140 }}>
          <SectionHead id="experience" n="04" title="My" accent="journey so far." sub="Eight teams in five years — each one a new classroom." />
          <View style={{ position: 'relative', paddingLeft: wide ? 44 : 30 }}>
            {createElement('div', { className: 'tl-line', 'data-scroll-progress': '', style: { left: wide ? 9 : 7 } })}
            {jobs.map((j, i) => (
              <Reveal key={j.period} delay={60}>
                <View style={{ position: 'relative', paddingVertical: 9 }}>
                  {createElement('span', { className: 'tl-dot', style: { position: 'absolute', left: wide ? -41 : -29, top: 32, width: 16, height: 16, borderRadius: 8, boxSizing: 'border-box', border: '2px solid var(--accent)', background: i === 0 ? 'var(--accent)' : 'var(--bg)' } })}
                  <Pressable style={({ hovered }: HoverState) => ({
                    flexDirection: wide ? 'row' : 'column', alignItems: wide ? 'center' : 'flex-start', gap: wide ? 24 : 4,
                    paddingVertical: 18, paddingHorizontal: 20, borderRadius: 14, borderWidth: 1,
                    borderColor: hovered ? c.line : 'transparent', backgroundColor: hovered ? c.sheet : 'transparent',
                    boxShadow: hovered ? c.shadow : 'none', transform: [{ translateX: hovered ? 8 : 0 }], transitionDuration: '300ms',
                  } as object)}>
                    {({ hovered }: HoverState) => (<>
                      <Mono style={{ width: wide ? 190 : undefined, color: i === 0 ? c.accent : c.faint }}>{j.period}{i === 0 ? '  · latest' : ''}</Mono>
                      <T style={{ flex: wide ? 1 : undefined, fontSize: 24, lineHeight: 30, fontWeight: '600', letterSpacing: -0.6 }}>{j.company}</T>
                      <T style={{ fontSize: 15, color: c.muted, textAlign: wide ? 'right' : 'left' }}>{j.role}<Text style={{ color: c.faint }}>{'\n'}{j.type}</Text></T>
                      {wide && <Text style={{ color: hovered ? c.accent : c.faint, fontSize: 20, transform: [{ translateX: hovered ? 4 : 0 }], transitionDuration: '250ms' } as object}>→</Text>}
                    </>)}
                  </Pressable>
                </View>
              </Reveal>
            ))}
          </View>
        </View>

        {/* ---------- skills ---------- */}
        <View style={{ marginTop: 140 }}>
          <SectionHead id="skills" n="05" title="My" accent="toolbox." />
          <View style={{ flexDirection: wide ? 'row' : 'column', gap: 22 }}>
            {Object.entries(skills).map(([k, v], i) => (
              <Reveal key={k} delay={i * 90} style={{ flex: 1 }}>
                <Sheet tilt={TILTS[i]} style={{ gap: 16, flexGrow: 1 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <T style={{ fontSize: 22, fontWeight: '600', letterSpacing: -0.5 }}>{k}</T>
                    <Mono>{String(v.length).padStart(2, '0')}</Mono>
                  </View>
                  <Tags items={v} />
                </Sheet>
              </Reveal>
            ))}
          </View>
          <View style={{ flexDirection: wide ? 'row' : 'column', gap: 22, marginTop: 22 }}>
            {[
              ['Education · ' + education.period, education.school, `${education.degree} · GPAX ${education.gpax}`],
              ['Internship · ' + internship.org, internship.project, internship.stack],
              ['Languages', languages, 'Happy to work across Thai & English teams'],
            ].map(([k, a, b], i) => (
              <Reveal key={k} delay={i * 90} style={{ flex: 1 }}>
                <Sheet tilt={-TILTS[i]} style={{ gap: 6, flexGrow: 1, backgroundColor: c.sheet2 }}>
                  <Mono style={{ color: c.accent }}>{k}</Mono>
                  <T style={{ fontSize: 19, lineHeight: 25, fontWeight: '600', marginTop: 4 }}>{a}</T>
                  <T style={{ fontSize: 14, color: c.muted }}>{b}</T>
                </Sheet>
              </Reveal>
            ))}
          </View>
        </View>

        {/* ---------- contact ---------- */}
        <Reveal>
          <View style={{ marginTop: 160, paddingVertical: wide ? 70 : 44, alignItems: 'center', gap: 22, overflow: 'hidden' }}>
            <View style={{ position: 'absolute', opacity: 0.08, top: -40 }}>
              <Fingerprint size={wide ? 520 : 340} color="var(--accent)" />
            </View>
            <Mono style={{ color: c.accent }}>(06) Say hello</Mono>
            <T style={{ fontSize: wide ? 92 : 50, lineHeight: wide ? 92 : 52, fontWeight: '700', letterSpacing: wide ? -4 : -2, textAlign: 'center' }}>
              <Words text="Thanks for" />{'\n'}<Italic><Words text="reading my CV." start={160} /></Italic>
            </T>
            <T style={{ color: c.muted, fontSize: 17, textAlign: 'center', maxWidth: 460 }}>If you're looking for someone to join your team on the next adventure, I'd love to hear from you.</T>
            <Pressable onPress={() => Linking.openURL(`mailto:${profile.email}`)}>
              {createElement('span', { className: 'underline', style: { fontFamily: font, fontSize: wide ? 24 : 18, color: 'var(--ink)', paddingBottom: 4 } }, profile.email + ' ↗')}
            </Pressable>
          </View>
        </Reveal>

        <View style={{ marginTop: 30, paddingTop: 22, borderTopWidth: 1, borderTopColor: c.line, flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
          <Mono>© {new Date().getFullYear()} {profile.name}</Mono>
          <Mono>Made by me · React Native Web · Pretext · Box2D · MoQ</Mono>
        </View>
      </View>
    </ScrollView>
    </View>
  )
}
