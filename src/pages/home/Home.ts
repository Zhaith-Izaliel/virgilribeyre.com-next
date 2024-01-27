import { defineComponent } from 'vue';
import NavBar from '@/components/navbar/NavBar.vue';

export default defineComponent({
  components: {
    NavBar,
  },
  data() {
    return {
      state: {
        items: [
          {
            label: 'test',
            route: '/#test',
          },
          {
            label: 'test2',
            route: '/#test',
          },
        ],
        socials: [
          {
            name: 'mail',
            url: 'https://aemail.com/82LL',
          },
          {
            name: 'malt',
            url: 'https://www.malt.fr/profile/virgilribeyre',
          },
          {
            name: 'linkedin',
            url: 'https://www.linkedin.com/in/virgil-ribeyre-810135196',
          },
          {
            name: 'gitlab',
            url: 'https://gitlab.com/Zhaith-Izaliel',
          },
          {
            name: 'github',
            url: 'https://github.com/Zhaith-Izaliel',
          },
        ],
      },
    };
  },
});
