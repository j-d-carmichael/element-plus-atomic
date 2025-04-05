import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import { createPinia } from 'pinia';

// Add all the el icons and fontawesomes for now as element plus icons are limited
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faIconsImporter } from '~/utils/faIconsImporter';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import App from './App.vue';
import router from '~/router';

// single entry for styling
import '~/styles/index.scss';

faIconsImporter();

const app = createApp(App);
app.use(createPinia());
app.use(router);

app.use(ElementPlus, { size: 'default', zIndex: 3000 });

// Include a whole bunch of icons, to refine later... this is a POC
app.component('font-awesome-icon', FontAwesomeIcon);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount('#app');
