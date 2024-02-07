import { computed, defineComponent } from 'vue';
import { socials } from '@/data';
import { useI18n } from 'vue-i18n';
import NavBarSocials from '@/components/navbar-socials/NavBarSocials.vue';
import { DateTime } from 'luxon';

export default defineComponent({
  components: {
    NavBarSocials,
  },
  setup() {
    const { t } = useI18n();

    const currentYear = computed(() => DateTime.now().year);

    return {
      t,
      socials,
      currentYear,
    };
  },
});
