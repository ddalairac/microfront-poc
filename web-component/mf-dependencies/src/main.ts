import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VisionVue from '@vision/vision-vue/';
import { BootstrapVue } from 'bootstrap-vue';
import './iconLibrary';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VisionVue);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
