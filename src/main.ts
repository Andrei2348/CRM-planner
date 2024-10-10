import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'

const app = createApp(App)
async function initApp() {
  app.use(router).mount('#app')
}

window.addEventListener('load', initApp)