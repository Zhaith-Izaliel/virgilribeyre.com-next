import { defineComponent, PropType, ref } from 'vue';
import type { NavBarItem, Social } from '@/types';
import { useI18n } from 'vue-i18n';
import { Language, Menu, Xmark, IconoirProvider } from '@iconoir/vue';
import NavBarSocials from '@/components/navbar-socials/NavBarSocials.vue';
import AnimatedButton from '@/components/animated-button/AnimatedButton.vue';
import LangMenu from '@/components/lang-menu/LangMenu.vue';
import useScrolled from '@/hooks/scroll';

export default defineComponent({
  components: {
    Menu /* eslint-disable-line */,
    Xmark,
    Language,
    LangMenu,
    NavBarSocials,
    AnimatedButton,
    IconoirProvider,
  },
  props: {
    items: { type: Array as PropType<NavBarItem[]>, default: () => [] },
    socials: { type: Array as PropType<Social[]>, default: () => [] },
  },
  setup() {
    const { t } = useI18n();
    const { scrolled, setupHooks } = useScrolled();
    const menuState = ref('initial');

    setupHooks();

    const toggleMenu = () => {
      switch (menuState.value) {
        case 'initial':
        case 'closed':
          menuState.value = 'open';
          return;
        case 'open':
        default:
          menuState.value = 'closed';
      }
    };

    return {
      menuState,
      scrolled,
      toggleMenu,
      t,
    };
  },
});
