

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>params: {{ paramsString }}</p>
    <p>params: {{ params }}</p>
    <p>client: {{ client }}</p>
    <p>survey: {{ survey }}</p>
  <SomeComponent></SomeComponent>
  </div>
</template>

<script>
import SomeComponent from './components/some-comp.vue'
export default {
  name: "App",
  components:{
      SomeComponent
  },
  methods: {
    getParams() {
      var params = {};
      var url_parts = window.location.search.split("?");
      if (url_parts.length === 2) {
        var param_parts = url_parts[1].split("&");
        for (var i = 0; i < param_parts.length; i++) {
          var kv = param_parts[i].split("=");
          params[kv[0]] = kv[1];
        }
      }
      console.log("params", params);
      return params;
    },
  },
  computed: {
    paramsString() {
      console.log("computed");
      return window.location.search;
    },
    params() {
      var params = {};
      var url_parts = window.location.search.split("?");
      if (url_parts.length === 2) {
        var param_parts = url_parts[1].split("&");
        for (var i = 0; i < param_parts.length; i++) {
          var kv = param_parts[i].split("=");
          params[kv[0]] = kv[1];
        }
      }
      console.log("params", params);
      return params;
    },
    client() {
      return "sd"//getParams().client ? params.client : null;
    },
    survey() {
        return "sd"//getParams().survey ? params.survey : null;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
