import { defineComponent } from 'vue';
import { IconoirProvider, NavArrowUp } from '@iconoir/vue';
import useScrolled from '@/hooks/scroll';

export default defineComponent({
  components: {
    IconoirProvider,
    NavArrowUp,
  },
  setup() {
    const { scrolled, setupHooks } = useScrolled();

    setupHooks();

    return {
      scrolled,
    };
  },
});
