import { defineComponent, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { getSocialByName } from '@/hooks/data';
import AnimatedButton from '@/components/animated-button/AnimatedButton.vue';
import { SendSolidSolid, SendDiagonalSolidSolid } from '@iconoir/vue';
import { DateTime } from 'luxon';

export default defineComponent({
  components: {
    AnimatedButton,
    SendDiagonalSolidSolid,
    SendSolidSolid,
  },
  setup() {
    const { t } = useI18n();

    const age = computed(() => {
      const today = DateTime.now();
      const birthday = DateTime.local(1999, 12, 18);
      const calculatedAge = today.diff(birthday, ['years']).toObject().years;
      return Math.floor(calculatedAge || 24);
    });

    return {
      t,
      age,
    };
  },
  data() {
    return {
      state: {
        malt: getSocialByName('malt'),
      },
    };
  },
});
