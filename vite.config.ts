import { defineConfig } from 'vite'
export default defineConfig({
  base: './',
  optimizeDeps: { exclude: ['box3d-wasm'] }, // keep its new URL('box3d.wasm', import.meta.url) intact
  build: { target: 'es2022', chunkSizeWarningLimit: 1200 },
})
