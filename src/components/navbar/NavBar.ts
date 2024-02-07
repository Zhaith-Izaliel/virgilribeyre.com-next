import {
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  PropType,
  ref,
} from 'vue';
import type { NavBarItem, Social } from '@/types';
import { debounce } from 'lodash';
import { useI18n } from 'vue-i18n';
import { Language, Menu, Xmark, IconoirProvider } from '@iconoir/vue';
import NavBarSocials from '@/components/navbar-socials/NavBarSocials.vue';
import AnimatedButton from '@/components/animated-button/AnimatedButton.vue';
import LangMenu from '@/components/lang-menu/LangMenu.vue';

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
    const menuState = ref('initial');
    const scrolled = ref(false);

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

    const handleScroll = () => {
      if (window.scrollY > 0) {
        scrolled.value = true;
        return;
      }
      scrolled.value = false;
    };

    const debouncedHandleScroll = debounce(handleScroll, 100);

    onBeforeMount(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    });

    return {
      menuState,
      scrolled,
      toggleMenu,
      t,
    };
  },
});
