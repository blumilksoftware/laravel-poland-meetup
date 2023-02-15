import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  console.log(process.env.VITE_GITHUB_ALIAS_ENABLED)
  console.log(process.env.VITE_GITHUB_ALIAS_ENABLED === "true")

  return {
    base: process.env.VITE_GITHUB_ALIAS_ENABLED === "true"
      ? '/laravel-poland-meetup/'
      : '/',
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
  }
})
