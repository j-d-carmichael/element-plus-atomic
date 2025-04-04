import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import { createPinia } from 'pinia';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import App from './App.vue';
import router from '~/router';

// single entry for styling
import '~/styles/index.scss';

const app = createApp(App);
app.use(createPinia());
app.use(router);

// Include all for quick POC'ing
app.use(ElementPlus, { size: 'default', zIndex: 3000 });
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount('#app');
