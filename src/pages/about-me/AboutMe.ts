import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { skills } from '@/data';
import Skills from '@/components/skills/Skills.vue';
import VueMarkdown from 'vue-markdown-render';
import AnimatedButton from '@/components/animated-button/AnimatedButton.vue';
import { getSocialByName } from '@/hooks';

export default defineComponent({
  components: {
    VueMarkdown,
    Skills,
    AnimatedButton,
  },
  setup() {
    const { t } = useI18n();

    return { t };
  },
  data() {
    return {
      state: {
        skills,
        malt: getSocialByName('malt'),
      },
    };
  },
});
