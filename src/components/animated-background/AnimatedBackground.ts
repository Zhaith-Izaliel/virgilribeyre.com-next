import { PropType, defineComponent } from 'vue';
import { BackgroundStar } from '@/types';

export default defineComponent({
  props: {
    stars: { type: Array as PropType<BackgroundStar[]>, required: true },
  },
  setup() {
    const computeStyle = (star: BackgroundStar) => {
      let positions = 'box-shadow: ';
      let i = 0;

      const randomPos = (max: number) => Math.floor(Math.random() * max);

      for (i = 0; i < star.number; i += 1) {
        positions += `${randomPos(200)}vh ${randomPos(
          200
        )}vh var(--tw-shadow-color)`;
        if (i !== star.number - 1) {
          positions += ', ';
        } else {
          positions += ';';
        }
      }

      const size = `width:${star.size};height:${star.size};`;
      const animation = `animation-duration: ${star.time}s;`;
      return `${positions}${size}${animation}`;
    };

    return { computeStyle };
  },
});
