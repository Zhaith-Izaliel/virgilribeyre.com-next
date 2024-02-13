import {
  defineComponent,
  PropType,
  ref,
  onMounted,
  computed,
  onUnmounted,
  watch,
} from 'vue';
import { useI18n } from 'vue-i18n';
import type { TerminalText } from '@/types';

export default defineComponent({
  props: {
    texts: {
      type: Array as PropType<TerminalText[]>,
      required: true,
    },
    isCol: { type: Boolean, default: () => false },
    loop: { type: Boolean, default: () => false },
    timing: { type: Number, default: () => 100 },
    pauseTime: { type: Number, default: () => 2000 },
  },
  setup(props) {
    const { t } = useI18n();

    const state = {
      currentCharacterId: ref(-1),
      direction: ref('write'),
      currentWordId: ref(0),
      intervalId: -1,
    };

    /**
     * Computes the current full word shown, after localization from vueI18n.
     * @returns The current full word shown, or '' if state.currentWordId is out of bound for props.texts.
     */
    const currentFullWord = computed(() => {
      const { currentWordId } = state;
      const word = t(props.texts[currentWordId.value].label);

      return !word ? '' : word;
    });

    /**
     * Computes the current shown word in the component.
     * For example, if the current full word is "Vue", the current shown word could be "Vu".
     * @returns the current slice of currentFullWord using state.currentCharacterId
     */
    const currentWord = computed(() => {
      const { currentCharacterId } = state;

      if (state.direction.value === 'stopped') {
        return currentFullWord.value;
      }

      return currentCharacterId.value < 0
        ? ''
        : currentFullWord.value.slice(0, currentCharacterId.value);
    });

    /**
     * Computes the current class linked to the current word
     * @returns the current class of the current word
     */
    const currentClass = computed(() => {
      const { currentWordId } = state;
      return props.texts[currentWordId.value].class;
    });

    /**
     * Cycles to the next character of the current word.
     * If the character is the last one, get back to the first character until the word is deleted
     * When the word is deleted, switch to the next word in `props.texts`
     * If there is no next word, cycle back to the first word in `props.texts`
     */
    const cycleCurrentWord = () => {
      const { currentCharacterId, currentWordId } = state;
      const isLastCharacter =
        currentCharacterId.value + 1 > currentFullWord.value.length;
      const isFirstCharacter = currentCharacterId.value - 1 < 0;
      const isLastWord = currentWordId.value + 1 >= props.texts.length;

      switch (state.direction.value) {
        case 'write':
          if (isLastCharacter) {
            state.direction.value = 'delete';
            return;
          }
          state.currentCharacterId.value += 1;
          return;

        case 'delete':
        default:
          if (isFirstCharacter) {
            state.currentWordId.value = isLastWord
              ? 0
              : currentWordId.value + 1;
            state.direction.value = 'write';
            state.currentCharacterId.value += 1;
            return;
          }
          state.currentCharacterId.value -= 1;
      }
    };

    /**
     * Defines a watcher that stops the interval when on the last word when `loop === false`
     */
    watch(state.direction, (newDirection) => {
      if (
        !props.loop &&
        newDirection === 'delete' &&
        state.currentWordId.value === props.texts.length - 1
      ) {
        window.clearInterval(state.intervalId);
        state.direction.value = 'stopped';
      }
    });

    /**
     * Pause the interval when the word is completely shown, before starting the delete animation
     */
    watch(state.currentCharacterId, (newId) => {
      if (newId === currentFullWord.value.length) {
        window.clearInterval(state.intervalId);
        window.setTimeout(() => {
          state.intervalId = window.setInterval(cycleCurrentWord, props.timing);
        }, props.pauseTime);
      }
    });

    onMounted(() => {
      /**
       * Defines an interval to cycle through every word in texts and show them character by character.
       */
      state.intervalId = window.setInterval(cycleCurrentWord, props.timing);
    });

    // Essential to clear the interval created to avoid memory leaks
    onUnmounted(() => {
      window.clearInterval(state.intervalId);
    });

    return {
      currentClass,
      currentWord,
      t,
      state,
    };
  },
});
