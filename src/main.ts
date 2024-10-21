import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import '@/styles/global.scss';
// import { createMetaManager, defaultConfig } from 'vue-meta';
import globalComponents from '@/plugins/globalComponents';
import createMetaManager from 'vue-meta';
import defaultConfig from 'vue-meta'

const app = createApp(App);

const pinia = createPinia();
globalComponents(app);

const metaManager = createMetaManager(false, {
  ...defaultConfig,
  meta: { tag: 'meta', nameless: true },
});

app.use(metaManager);
app.use(pinia);
app.use(router);

router.isReady().then(() => {
  app.mount('#app');
});
