import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { projects } from '@/data';
import Projects from '@/components/projects/Projects.vue';
import AnimatedButton from '@/components/animated-button/AnimatedButton.vue';
import VueMarkdown from 'vue-markdown-render';
import { getSocialByName } from '@/hooks';

export default defineComponent({
  components: {
    Projects,
    AnimatedButton,
    VueMarkdown,
  },
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
  data() {
    return {
      state: {
        projects,
        gitlab: getSocialByName('gitlab'),
      },
    };
  },
});
