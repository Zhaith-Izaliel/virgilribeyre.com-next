import { defineComponent, PropType, ref } from 'vue';
import type { NavBarItem, NavBarSocial } from '@/types';
import NavBarSocials from '@/components/navbar-socials/NavBarSocials.vue';
import { Menu, Xmark, IconoirProvider } from '@iconoir/vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  components: {
    Menu /* eslint-disable-line */,
    Xmark,
    NavBarSocials,
    IconoirProvider,
  },
  props: {
    items: { type: Array as PropType<NavBarItem[]>, default: () => [] },
    socials: { type: Array as PropType<NavBarSocial[]>, default: () => [] },
  },
  setup() {
    const { t } = useI18n();
    const state = ref({
      menuState: 'initial',
    });

    const toggleMenu = () => {
      switch (state.value.menuState) {
        case 'initial':
        case 'closed':
          state.value.menuState = 'open';
          return;
        case 'open':
        default:
          state.value.menuState = 'closed';
      }
    };

    return {
      state,
      toggleMenu,
      t,
    };
  },
});
