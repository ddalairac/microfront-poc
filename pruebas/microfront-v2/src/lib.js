import Vue from 'vue'
import App from "@/App.vue";

const createInstance = (el) => {
    return new Vue({
      el,
      components: {
        App
      },
      template: "<App />"
    });
  };
  
  export default createInstance;