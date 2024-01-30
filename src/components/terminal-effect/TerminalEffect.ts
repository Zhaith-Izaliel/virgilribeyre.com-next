import { defineComponent, PropType, ref, onMounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import type { TerminalText } from '@/types';

export default defineComponent({
  props: {
    cursorText: { type: String, default: '_' },
    terminalTexts: {
      type: Array as PropType<TerminalText[]>,
      required: true,
    },
    isCol: { type: Boolean, default: () => false },
    loop: { type: Boolean, default: () => false },
    timing: { type: Number, default: () => 500 },
  },
  setup(props) {
    const { t } = useI18n();

    const state = ref({
      currentClass: props.terminalTexts[0].class,
      intervalId: new NodeJS.Timeout(),
      currentCharacterId: -1,
      currentWordId: -1,
    });

    const currentFullWord = computed(() =>
      t(props.terminalTexts[state.value.currentWordId].label)
    );

    const currentWord = computed(() =>
      currentFullWord.value.charAt(state.value.currentCharacterId)
    );

    onMounted(() => {
      state.value.intervalId = setInterval(() => {}, props.timing);
    });

    return {
      state,
      currentWord,
      t,
    };
  },
});
