# ps-cv2 — Phongpisut Meemuk

Personal CV site. Plain TypeScript + Vite, three.js, Pretext, MoQ, Box3D (WASM) and WebGPU.

```bash
npm install
npm run dev        # local dev
npm run build      # static output in dist/
```

## How the page works
- **Landing** (`src/hero.ts`): a full-screen 2D overlay that fully covers the desk on a dark background. My skills run as text laid out with
  [Pretext](https://github.com/chenglou/pretext) (`layoutNextLine`), split per line around my name's glyphs, the
  foreground blocks (`[data-obstacle]`) and the cursor lens; drag the name and the text reflows. Drawn on demand only.
  Scrolling pulls it back into a shrinking ink splash (a CSS mask painted once) to reveal the desk; scrolling up spreads it back.
- **Desk** (`src/desk/`): a three.js desk seen top-down (journey notepad, education card, ID badge, mug, pencil,
  phone). The page scroll drives the camera down to the phone (`#stage` is 760vh with a sticky canvas); the phone
  screen unlocks into the "Contributions" list, which scrolls with the page.
- **Play** (`src/game/`): the shared fruit-drop game, synced over MoQ (`@moq/net`, free relay `cdn.moq.dev`, WebTransport).
  Each visitor publishes `state` / `input` / `world` tracks; the oldest visible visitor runs the planck physics and
  streams the board. `?room=name` for a private room; `VITE_MOQ_RELAY` to use another relay.
- **Optimization**: explainers for React Native Skia and Nitro Modules (animated SVG diagrams, a live Canvas 2D chart).
- **Box3D × WebAssembly** (`src/sections/physics.ts`): `box3d-wasm/standard` (no threads, so no COOP/COEP headers
  needed on GitHub Pages) stepping a world of boxes rendered with three.js instancing. HUD numbers are measured live.
- **WebGPU** (`src/sections/webgpu.ts`): raw WebGPU, 131,072 particles moved by a WGSL compute pass and drawn from the
  same storage buffer. Falls back to a message where `navigator.gpu` is missing.
- The desk renders on demand (no draw calls while idle; shadows update only while the phone moves).
- Demos start when scrolled near and pause when off screen. Motion respects `prefers-reduced-motion`.

## Deploy
Every push to `main` builds the site and publishes `dist/` to the `gh-pages` branch (`.github/workflows/deploy.yml`).
Live at **https://phongpisut.github.io/ps-cv2/**.
