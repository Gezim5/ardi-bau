import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // If your repo was a subfolder, you’d write '/repo-name/'
  plugins: [react()],
  build: {
    outDir: 'docs', // Important for GitHub Pages when using /docs folder
  },
});
