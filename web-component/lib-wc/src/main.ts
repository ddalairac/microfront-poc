import Vue from 'vue';
import App from './App.vue';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');