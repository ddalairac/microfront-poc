<template>
  <div id="app">
    <h1>DEMO: Microfront WC</h1>
    <h2>Host App (vue 3)</h2>
    <div id="nav">
      <router-link to="/">Host Home</router-link> |
      <router-link to="/wc-all">MFs (Web Components)</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    // msg: String,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 5px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

h1 {
  color: #b74763;
  padding: 0 33px;
  margin-bottom: 0;
}

h3,h3 {
  margin-bottom: 10px;
}

.container {
  display: flex;
  padding: 0 20px;
}

.col {
  width: 50%;
  padding: 15px;
}

.card {
  margin: 0 0 60px;
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
