import { getSocialByName } from '@/hooks/data';
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const mail = getSocialByName('mail').url.toString();

    return {
      t,
      mail,
    };
  },
});
