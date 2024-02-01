import { defineComponent } from 'vue';
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

    return {
      t,
      Config,
    };
  },
  data() {
    return {
      state: {
        terminalTexts: [
          {
            label: 'l_fullstack',
            class: 'text-purple-500',
            time: 2,
          },
          {
            label: 'l_system',
            class: 'text-purple-500',
            time: 2,
          },
          {
            label: 'l_devops',
            class: 'text-purple-500',
            time: 2,
          },
          {
            label: 'l_video_games',
            class: 'text-purple-500',
            time: 2,
          },
          {
            label: 'l_software_development',
            class: 'text-purple-500',
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
