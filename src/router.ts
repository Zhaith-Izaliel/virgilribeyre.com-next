import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash && to.hash !== '#top') {
      return {
        behavior: 'smooth',
        el: to.hash,
        top: 100,
      };
    }
    return {
      behavior: 'smooth',
      top: 0,
    };
  },
});
