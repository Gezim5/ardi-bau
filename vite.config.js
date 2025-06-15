// vite.config.js (at project root)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // or '/ardi-bau/' if you're hosting under a sub-path
  plugins: [react()],
});
