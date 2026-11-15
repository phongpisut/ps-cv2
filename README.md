# ps-cv2 — Phongpisut Meemuk

Personal CV site. Plain TypeScript + Vite, three.js, Pretext, Box3D (WASM) and WebGPU.

```bash
npm install
npm run dev        # local dev
npm run build      # static output in dist/
```

## How the page works
- **Desk** (`src/desk/`): a three.js scene seen top-down on landing. The CV sheet is a live canvas texture:
  my skills run as text laid out with [Pretext](https://github.com/chenglou/pretext) (`layoutNextLine`), split per
  line around my name's glyphs, the text blocks, the cursor lens and the footprints of the mug and ID card. Drag the
  mug or the name and the text reflows. The page scroll drives the camera down to the phone (`#stage` is 640vh with
  a sticky canvas); the phone screen unlocks into the "Contributions" list, which scrolls with the page.
- **Optimization**: explainers for React Native Skia and Nitro Modules (animated SVG diagrams, a live Canvas 2D chart).
- **Box3D × WebAssembly** (`src/sections/physics.ts`): `box3d-wasm/standard` (no threads, so no COOP/COEP headers
  needed on GitHub Pages) stepping a world of boxes rendered with three.js instancing. HUD numbers are measured live.
- **WebGPU** (`src/sections/webgpu.ts`): raw WebGPU, 131,072 particles moved by a WGSL compute pass and drawn from the
  same storage buffer. Falls back to a message where `navigator.gpu` is missing.
- Demos start when scrolled near and pause when off screen. Motion respects `prefers-reduced-motion`.

## Deploy
Every push to `main` builds the site and publishes `dist/` to the `gh-pages` branch (`.github/workflows/deploy.yml`).
Live at **https://phongpisut.github.io/ps-cv2/**.
