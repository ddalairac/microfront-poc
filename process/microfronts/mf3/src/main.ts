import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

// // Import Bootstrap an BootstrapVue CSS files (order is important)
// import { BootstrapVue } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// // Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue)


new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
