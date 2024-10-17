import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import '@/styles/global.scss'
import globalComponents from '@/plugins/globalComponents'

const app = createApp(App)

globalComponents(app)
async function initApp() {
  app.use(router).mount('#app')
}

window.addEventListener('load', initApp)