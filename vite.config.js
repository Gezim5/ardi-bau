import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // Critical for relative file loading on GitHub Pages with custom domain
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
});
