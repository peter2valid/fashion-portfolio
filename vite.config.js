import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for the React portfolio site.
// This enables JSX transformation and hot module reloading via the React plugin.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
});
