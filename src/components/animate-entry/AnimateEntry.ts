import { onMounted, ref, defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const target = ref();
    const animate = ref(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate.value = true;
        }
      },
      {
        threshold: 0.3,
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
