import { createApp } from 'vue';
import router from '@/router';
import i18n from '@/locales';
import App from '@/App.vue';
import '@/styles/all.css';

const app = createApp(App);

app.use(router);
app.use(i18n);
app.mount('#app');
