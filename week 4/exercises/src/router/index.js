import { createRouter, createWebHistory } from 'vue-router'
import MainMenu from '../components/MainMenu.vue';
import Ex1 from '../components/Ex1.vue';
import Ex2 from '../components/Ex2.vue';
import Ex3 from '../components/Ex3.vue';
import Ex4 from '../components/Ex4.vue';
import inClass from '../components/inClass.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  {
    path: '/',
    component: MainMenu
  },

  {
    path: '/Ex1/',
    component: Ex1
  },

  {
    path: '/Ex2/',
    component: Ex2
  },
  {
    path: '/Ex3/',
    component: Ex3
  },
  {
    path: '/Ex4/',
    component: Ex4
  },
  {
    path: '/inClass/',
    component: inClass
  },
],
})

export default router
