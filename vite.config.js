import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  css: {
    postcss: './postcss.config.cjs',
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080/api/v1/auth/register',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});