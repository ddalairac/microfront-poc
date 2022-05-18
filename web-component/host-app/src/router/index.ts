import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/app-iframe',
    name: 'AppIframe',
    component: () => import(/* webpackChunkName: "app-iframe-view" */ '../views/AppIframe.vue'),
  },
  {
    path: '/wc-all',
    name: 'WcAll',
    component: () => import(/* webpackChunkName: "wc-simple-view" */ '../views/WcAll.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
