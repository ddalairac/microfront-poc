import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import MfHome from '../views/MfHome.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'MfHome',
    component: MfHome,
  },
  {
    path: '/mf-page',
    name: 'MfPage',
    component: () => import(/* webpackChunkName: "mf-page" */ '../views/MfPage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
