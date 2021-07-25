import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from './pages/main/index';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      id: 0,
      path: '/',
      title: '',
      component: Main,
    },
  ],
});

export default router;
