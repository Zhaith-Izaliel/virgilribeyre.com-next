import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  props: {
    iconBg: { type: String, default: '#000000' },
    iconColor: { type: String, default: '#ffffff' },
  },
  setup() {
    const { t } = useI18n();

    const state = ref({
      isIconBefore: true,
    });

    const hoverEnter = () => {
      state.value.isIconBefore = false;
    };

    const hoverLeave = () => {
      state.value.isIconBefore = true;
    };

    return { t, hoverEnter, hoverLeave, state };
  },
});
