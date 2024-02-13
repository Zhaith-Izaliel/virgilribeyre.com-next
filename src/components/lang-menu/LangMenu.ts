import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { NavArrowRight, IconoirProvider, Language } from '@iconoir/vue';
import AnimatedButton from '../animated-button/AnimatedButton.vue';

export default defineComponent({
  components: {
    Menu, // eslint-disable-line
    MenuButton,
    MenuItem,
    MenuItems,
    NavArrowRight,
    Language,
    IconoirProvider,
    AnimatedButton,
  },
  setup() {
    const { t, availableLocales, locale } = useI18n();
    const setLocale = (newLocale: string) => {
      locale.value = newLocale;
    };

    const getFlag = (locale: string) =>
      new URL(`/src/assets/flags/${locale}.svg`, import.meta.url).toString();

    return {
      t,
      availableLocales,
      setLocale,
      getFlag,
    };
  },
});
