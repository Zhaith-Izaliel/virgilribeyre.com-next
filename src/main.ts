import { createApp } from 'vue';
import router from '@/router';
import i18n from '@/locales';
import App from '@/App.vue';
import VueClickAway from 'vue3-click-away';
import '@/styles/all.css';

const app = createApp(App);

app.use(router);
app.use(i18n);
app.use(VueClickAway);
app.mount('#app');
