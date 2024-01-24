import { defineComponent, PropType } from 'vue';
import type { INavBarItem } from '@/types';

export default defineComponent({
  props: {
    itemsLeft: { type: Array as PropType<INavBarItem[]>, default: () => [] },
    itemsRight: { type: Array as PropType<INavBarItem[]>, default: () => [] },
    itemsCenter: { type: Array as PropType<INavBarItem[]>, default: () => [] },
  },
});
