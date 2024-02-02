import { defineComponent, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Config from '@/config';
import AnimatedButton from '@/components/animated-button/AnimatedButton.vue';
import TerminalEffect from '@/components/terminal-effect/TerminalEffect.vue';
import AnimatedBackground from '@/components/animated-background/AnimatedBackground.vue';
import { SendSolidSolid, SendDiagonalSolidSolid } from '@iconoir/vue';

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

    // TODO: Change to Luxon
    const age = computed(() => {
      const calculateAge = (birthday: Date) => {
        const ageDifMs = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
      };

      const birthday = new Date(99, 11, 18);
      return calculateAge(birthday);
    });

    return {
      t,
      Config,
      age,
    };
  },
  data() {
    return {
      state: {
        terminalTexts: [
          {
            label: 'l_fullstack',
            class: 'text-indigo-500',
            time: 2,
          },
          {
            label: 'l_system',
            class: 'text-indigo-500',
            time: 2,
          },
          {
            label: 'l_devops',
            class: 'text-indigo-500',
            time: 2,
          },
          {
            label: 'l_video_games',
            class: 'text-indigo-500',
            time: 2,
          },
          {
            label: 'l_software_developer',
            class: 'text-indigo-500',
            time: 2,
          },
        ],

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
