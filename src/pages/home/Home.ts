import { defineComponent } from 'vue';
import NavBar from '@/components/navbar/NavBar.vue';

export default defineComponent({
  components: {
    NavBar,
  },
  setup() {},
  data() {
    return {
      state: {
        left: [
          {
            label: 'test',
            route: '/#test',
          },
          {
            label: 'test2',
            route: '/#test',
          },
        ],
        center: [
          {
            label: 'test',
            route: '/#test',
          },
          {
            label: 'test2',
            route: '/#test',
          },
        ],
        right: [
          {
            label: 'test',
            route: '/#test',
          },
          {
            label: 'test2',
            route: '/#test',
          },
        ],
      },
    };
  },
});
