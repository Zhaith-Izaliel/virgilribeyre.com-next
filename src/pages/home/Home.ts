import { defineComponent } from 'vue';
import NavBar from '@/components/navbar/NavBar.vue';
import Landing from '@/pages/landing/Landing.vue';
import Config from '@/config';

export default defineComponent({
  components: {
    NavBar,
    Landing,
  },
  data() {
    return {
      state: {
        items: [
          {
            label: 'l_startpage',
            route: '/#top',
          },
          {
            label: 'l_about_me',
            route: '/#about-me',
          },
          {
            label: 'l_portfolio',
            route: '/#portfolio',
          },
          {
            label: 'l_timeline',
            route: '/#timeline',
          },
        ],
        socials: [
          {
            name: 'mail',
            url: Config.socials.mail,
          },
          {
            name: 'malt',
            url: Config.socials.malt,
          },
          {
            name: 'linkedin',
            url: Config.socials.linkedin,
          },
          {
            name: 'gitlab',
            url: Config.socials.gitlab,
          },
          {
            name: 'github',
            url: Config.socials.github,
          },
        ],
      },
    };
  },
});
