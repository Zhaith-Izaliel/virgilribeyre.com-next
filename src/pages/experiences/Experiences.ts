import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { events } from '@/data';
import Timeline from '@/components/timeline/Timeline.vue';
import VueMarkdown from 'vue-markdown-render';

export default defineComponent({
  components: {
    Timeline,
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
        events,
      },
    };
  },
});
