import { createI18n } from 'vue-i18n';
import getBrowserLang from '@/utils';
import en from './en';
import fr from './fr';

export default createI18n({
  locale: getBrowserLang().split('-')[0], // set locale
  legacy: false,
  fallbackLocale: 'en', // set fallback locale
  messages: {
    // set locale messages
    en,
    fr,
  },
});
