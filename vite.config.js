import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  resolve: {
    alias: {
      '@': '/frontend',
    },
  },
  plugins: [vue()],
  server: {
    watch: {
      usePolling: true,
    },
    port: 9088,
  },
  optimizeDeps: { 
    exclude: ['swiper/element/bundle'],
   },
})
