import { createApp } from 'vue'
import '@/style.css'
import router from '@/router'
import App from './App.vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

const application = createApp(App).use(autoAnimatePlugin)
application.use(router)
application.mount('#app')
