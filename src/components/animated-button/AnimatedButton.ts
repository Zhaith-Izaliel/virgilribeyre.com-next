import { PropType, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import type { ButtonType, StyleType } from '@/types';

export default defineComponent({
  props: {
    styleType: {
      type: String as PropType<StyleType>,
      default: () => 'info',
    },
    type: {
      type: String as PropType<ButtonType>,
      default: () => 'block-effect',
    },
  },
  setup() {
    const { t } = useI18n();
    return { t };
  },
});
