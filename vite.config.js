import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  resolve: {
    alias: {
      '@': '/frontend',
    },
  },
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => ['swiper-container', 'swiper-slide'].includes(tag),
      },
    },
  })],
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
