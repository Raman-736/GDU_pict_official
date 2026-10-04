import { defineConfig } from "vite";

// Build used by the GDU PICT website: served from /play/ inside an iframe.
// No PWA here — a service worker scoped to the main site would be wrong.
export default defineConfig({
  base: "/play/",
  build: {
    outDir: "../gdu-pict-website/public/play",
    emptyOutDir: true,
  },
});
