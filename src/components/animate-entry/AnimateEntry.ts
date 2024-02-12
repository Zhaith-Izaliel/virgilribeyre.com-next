import { ref, onMounted, PropType, defineComponent } from 'vue';
import { AnimationType } from '@/types';

export default defineComponent({
  props: {
    animationType: {
      type: String as PropType<AnimationType>,
      default: () => 'fadeIn',
    },
  },
  setup() {
    const target = ref();
    const animate = ref(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        animate.value = entry.isIntersecting;
      },
      {
        threshold: 0.5,
      }
    );

    onMounted(() => {
      observer.observe(target.value);
    });

    return {
      animate,
      target,
    };
  },
});
