import { createApp } from 'vue'
import './style.css'
import router from './router';
import App from './App.vue'

const application = createApp(App)
application.use(router)
application.mount('#app')
