import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  css: {
    postcss: './postcss.config.cjs', // Đảm bảo đường dẫn đúng
  },
});