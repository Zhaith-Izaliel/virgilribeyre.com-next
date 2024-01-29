import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import AnimatedButton from '@/components/animated-button/AnimatedButton.vue';
import { SendSolidSolid, SendDiagonalSolidSolid } from '@iconoir/vue';
import Config from '@/config';

export default defineComponent({
  components: {
    AnimatedButton,
    SendDiagonalSolidSolid,
    SendSolidSolid,
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
            colorClass: 'text-purple-500',
            time: 10,
          },
          {
            label: 'l_system',
            class: 'text-purple-500',
            time: 10,
          },
          {
            label: 'l_devops',
            colorClass: 'text-purple-500',
            time: 10,
          },
          {
            label: 'l_video_games',
            colorClass: 'text-purple-500',
            time: 10,
          },
          {
            label: 'l_software_developer',
            colorClass: 'text-purple-500',
            time: 10,
          },
        ],
      },
    };
  },
});
