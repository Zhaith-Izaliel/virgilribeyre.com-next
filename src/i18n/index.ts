import { createI18n } from 'vue-i18n';

export default createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages: {
    // set locale messages
    en: {
      hello: 'Hello World',
      test: 'Eliott Girardi',
    },
  },
});
