import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/software',
      name: 'software',
      component: () => import(/* webpackChunkName: "about" */ './views/Software.vue'),
    },
    {
      path: '/web',
      name: 'web',
      component: () => import(/* webpackChunkName: "about" */ './views/Web.vue'),
    },
  ],
});
