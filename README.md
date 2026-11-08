# ps-cv2 — Phongpisut Meemuk

Personal CV site. React Native (via react-native-web) + Vite. Melon Merge uses Box2D (planck) and MoQ (`@moq/net`, WebTransport) for live visitors.

```bash
npm install
npm run dev        # local dev
npm run build      # static output in dist/
npm run icons      # fetch App Store icons into public/icons (needs internet; check the matches)
```

## Live visitors (MoQ)
- Each visitor publishes `ps-cv2/melon/<id>` with a `state` track (JSON per group) and subscribes to the others via relay announcements.
- Default relay: `https://cdn.moq.dev/anon`. Override with `VITE_MOQ_RELAY=https://your-relay/path` in `.env`.
- Requires WebTransport (Chrome / Edge / Firefox). Safari shows "offline".

## Design
- Light "paper" / dark "night paper" themes via CSS variables (`index.html`), toggle in the nav, `?theme=light|dark` to force.
- Hero (`src/SkillField.tsx`): my skills as running text laid out with [Pretext](https://github.com/chenglou/pretext) (`layoutNextLine`), split per line around obstacles — the name's glyph shapes, foreground cards (`<Obstacle>`), the pointer lens and a bouncing melon. Drag the name; the text reflows live.
- Motion: CSS entrance (`.rise`), scroll reveals and word-by-word headings, count-up stats, scroll progress bar, timeline line that draws on scroll, 3D card tilt (`src/motion.tsx`), fingerprint draw-on, marquee. All respect `prefers-reduced-motion`.

## Deploy
Every push to `main` builds the site and publishes `dist/` to the `gh-pages` branch (`.github/workflows/deploy.yml`).
Live at **https://phongpisut.github.io/ps-cv2/** (Settings → Pages → Source: *Deploy from a branch* → `gh-pages` / root).
