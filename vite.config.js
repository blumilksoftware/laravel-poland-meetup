import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
  plugins: [vue()],
  server: {
    watch: {
      usePolling: true
    },
    port: 9088,
  }
})
