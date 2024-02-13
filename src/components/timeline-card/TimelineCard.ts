import { TimelineEvent } from '@/types';
import { DateTime } from 'luxon';
import { PropType, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import VueMarkdown from 'vue-markdown-render';

export default defineComponent({
  components: {
    VueMarkdown,
  },
  props: {
    event: {
      type: Object as PropType<TimelineEvent>,
      required: true,
    },
  },
  setup() {
    const { t, locale } = useI18n();

    const dateToString = (date: DateTime): string => {
      const now = DateTime.now();

      if (
        date.month === now.month &&
        date.year === now.year &&
        date.day === now.day
      ) {
        return t('l_now');
      }

      const string = date
        .setLocale(locale.value)
        .toLocaleString({ month: 'long', year: 'numeric' });

      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return {
      t,
      dateToString,
    };
  },
});
