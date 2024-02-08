import { PropType, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  props: {
    events: { type: Array as PropType<TimelineEvent[]>, required: true },
  },
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
});
