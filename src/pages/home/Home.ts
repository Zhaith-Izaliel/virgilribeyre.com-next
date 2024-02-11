import { defineComponent } from 'vue';
import NavBar from '@/components/navbar/NavBar.vue';
import Landing from '@/pages/landing/Landing.vue';
import AboutMe from '@/pages/about-me/AboutMe.vue';
import Portfolio from '@/pages/portfolio/Portfolio.vue';
import Experiences from '@/pages/experiences/Experiences.vue';
import FooterVue from '@/pages/footer/Footer.vue';
import BackToTop from '@/components/back-to-top/BackToTop.vue';
import { socials } from '@/data';

export default defineComponent({
  components: {
    NavBar,
    Landing,
    AboutMe,
    Portfolio,
    Experiences,
    FooterVue,
    BackToTop,
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
        socials,
      },
    };
  },
});
