import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { build } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
});
