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
  },
  setup() {
    const { t } = useI18n();
    const model = defineModel({ required: true });

    return {
      t,
      model,
    };
  },
});
