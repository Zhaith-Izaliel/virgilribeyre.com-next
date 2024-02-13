import { defineComponent, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { terminalTexts } from '@/data';
import { getSocialByName } from '@/hooks/data';
import AnimatedButton from '@/components/animated-button/AnimatedButton.vue';
import TerminalEffect from '@/components/terminal-effect/TerminalEffect.vue';
import AnimatedBackground from '@/components/animated-background/AnimatedBackground.vue';
import { SendSolidSolid, SendDiagonalSolidSolid } from '@iconoir/vue';
import { DateTime } from 'luxon';

export default defineComponent({
  components: {
    AnimatedButton,
    SendDiagonalSolidSolid,
    SendSolidSolid,
    TerminalEffect,
    AnimatedBackground,
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
        terminalTexts,
        malt: getSocialByName('malt'),
        stars: [
          {
            size: '1px',
            time: 50,
            number: 700,
          },
          {
            size: '2px',
            time: 75,
            number: 500,
          },
          {
            size: '3px',
            time: 80,
            number: 300,
          },
        ],
      },
    };
  },
});
