import { defineComponent, PropType } from 'vue';
import type { NavBarSocial } from '@/types';
import {
  Linkedin, GitlabFull, Github, Mail, Suitcase,
} from '@iconoir/vue';

export default defineComponent({
  components: {
    Linkedin,
    GitlabFull,
    Github,
    Mail,
    Suitcase,
  },
  props: {
    socials: { type: Array as PropType<NavBarSocial[]>, default: () => [] },
  },
});

