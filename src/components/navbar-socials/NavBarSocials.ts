import { defineComponent, PropType } from 'vue';
import type { NavBarSocial } from '@/types';
import {
  Linkedin,
  GitlabFull,
  Github,
  Mail,
  Suitcase,
  IconoirProvider,
} from '@iconoir/vue';
import AnimatedButton from '../animated-button/AnimatedButton.vue';

export default defineComponent({
  components: {
    Linkedin,
    GitlabFull,
    Github,
    Mail,
    Suitcase,
    IconoirProvider,
    AnimatedButton,
  },
  props: {
    /**
     * The list of socials to show
     */
    socials: { type: Array as PropType<NavBarSocial[]>, default: () => [] },

    /**
     * Defines if the socials are used in the NavBar or in the NavMenu
     * @default true
     */
    isBar: { type: Boolean, default: () => true },

    iconWidth: { type: String, default: () => '1.5em' },
    iconHeight: { type: String, default: () => '1.5em' },
  },
});
