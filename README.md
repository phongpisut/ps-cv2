# ps-cv2 — Phongpisut Meemuk

React Native (via react-native-web) + Vite. Melon Merge uses Box2D (planck) and MoQ (`@moq/net`, WebTransport) for live visitors.

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
- Motion: CSS entrance (`.rise`), scroll reveals (`src/motion.tsx`), Web-Animations fingerprint draw-on, marquee, hover lifts. All respect `prefers-reduced-motion`.
