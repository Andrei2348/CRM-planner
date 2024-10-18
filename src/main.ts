import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'
import '@/styles/global.scss'
import globalComponents from '@/plugins/globalComponents'

const app = createApp(App)
const pinia = createPinia()

globalComponents(app)
async function initApp() {
  app.use(pinia)
  app.use(router).mount('#app')
}

window.addEventListener('load', initApp)