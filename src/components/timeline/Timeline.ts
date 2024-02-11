import { PropType, computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { TimelineEvent } from '@/types';
import TimelineCard from '@/components/timeline-card/TimelineCard.vue';
import { sortEvents } from '@/hooks/data';

export default defineComponent({
  components: {
    TimelineCard,
  },
  props: {
    events: { type: Array as PropType<TimelineEvent[]>, required: true },
  },
  setup(props) {
    const { t } = useI18n();

    const sortedEvents = computed((): TimelineEvent[] =>
      sortEvents(props.events)
    );

    return {
      t,
      sortedEvents,
    };
  },
});
