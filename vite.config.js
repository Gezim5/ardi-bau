// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // very important for GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'docs', // ⚠️ this makes Vite output to /docs
  },
});
