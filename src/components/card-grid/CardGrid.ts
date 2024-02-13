import { computed, defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { NavArrowDown, NavArrowUp, IconoirProvider } from '@iconoir/vue';

export default defineComponent({
  components: {
    IconoirProvider,
    NavArrowDown,
    NavArrowUp,
  },
  props: {
    cards: { type: Array, required: true },
    gridClasses: { type: String, default: () => 'grid-cols-1 md:grid-cols-3' },
    max: { type: Number, default: () => 3 },
    searched: { type: Boolean, default: () => false },
  },
  setup(props) {
    const { t } = useI18n();

    const state = {
      showMore: ref(false),
    };

    const shownCards = computed(() =>
      state.showMore.value && !props.searched
        ? props.cards
        : props.cards.slice(0, props.max)
    );

    const showMore = () => {
      state.showMore.value = !state.showMore.value;
    };

    return {
      state,
      shownCards,
      showMore,
      t,
    };
  },
});
