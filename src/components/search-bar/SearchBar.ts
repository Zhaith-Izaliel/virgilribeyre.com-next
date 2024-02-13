import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { Search, IconoirProvider } from '@iconoir/vue';

export default defineComponent({
  components: {
    Search,
    IconoirProvider,
  },
  props: {
    placeholder: { type: String, default: () => 'l_search_placeholder' },
    modelValue: { type: String, required: true },
  },
  emits: ['update:modelValue'],
  setup(_, ctx) {
    const { t } = useI18n();

    const updateModel = (event: any) => {
      ctx.emit('update:modelValue', event.target.value);
    };

    return {
      t,
      updateModel,
    };
  },
});
