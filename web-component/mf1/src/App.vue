<template>
  <div id="app">
    <div class="card hard-line">
      <h1>Web component 1</h1>
      <h3>{{ compName }}</h3>
      <img alt="Vue logo" src="./assets/logo.png" />
      <HelloWorld msg="param data" />
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return { compName: "<mf-1>" };
  },
  created() {
    console.log("%c<mf-1>", "background: black;padding: 10px;");
  }
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

.card {
  border: 1px #ddd solid;
  border-radius: 5px;
  padding: 5px;
}
.card.hard-line {
  border-color: #2c3e50;
}
.card .card {
  background: #eee;
  padding: 15px;
}
img {
  height: 50px;
}
</style>
