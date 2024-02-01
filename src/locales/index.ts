import { createI18n } from 'vue-i18n';
import en from './en';

export default createI18n({
  locale: 'en', // set locale
  legacy: false,
  fallbackLocale: 'en', // set fallback locale
  messages: {
    // set locale messages
    en,
  },
});
