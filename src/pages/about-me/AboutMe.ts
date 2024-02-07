import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { skills } from '@/data';
import Skills from '@/components/skills/Skills.vue';
import VueMarkdown from 'vue-markdown-render';

export default defineComponent({
  components: {
    VueMarkdown,
    Skills,
  },
  setup() {
    const { t } = useI18n();

    return { t };
  },
  data() {
    return {
      state: {
        skills,
      },
    };
  },
});
