import HomePage from '@/pages/home/Home.vue';
import NotFoundPage from '@/pages/not-found/NotFound.vue';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
  },
];
