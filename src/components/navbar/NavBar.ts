import { defineComponent, PropType } from 'vue';
import type { NavBarItem, NavBarSocial } from '@/types';
import NavBarSocials from '@/components/navbar-socials/NavBarSocials.vue';
import { Menu } from '@iconoir/vue';

export default defineComponent({
  components: {
    Menu, /* eslint-disable-line */
    NavBarSocials,
  },
  props: {
    items: { type: Array as PropType<NavBarItem[]>, default: () => [] },
    socials: { type: Array as PropType<NavBarSocial[]>, default: () => [] },
  },
});
