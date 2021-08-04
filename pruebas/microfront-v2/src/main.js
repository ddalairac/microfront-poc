import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// import Vue from "vue";
// import App from "./App.vue";
// import wrap from "@vue/web-component-wrapper";

// const wrappedElement = wrap(Vue, App);
// window.customElements.define("mf-1", wrappedElement);