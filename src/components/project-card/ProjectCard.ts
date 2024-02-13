import { PropType, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import type { Project } from '@/types';
import { IconoirProvider, ArrowRight } from '@iconoir/vue';
import VueMarkdown from 'vue-markdown-render';

export default defineComponent({
  components: {
    IconoirProvider,
    ArrowRight,
    VueMarkdown,
  },
  props: {
    project: { type: Object as PropType<Project>, required: true },
  },
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
});
