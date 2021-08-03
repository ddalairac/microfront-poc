<template>
  <div id="app">
    <div class="card">
      <h2>Router component</h2>
      <div id="nav">
        <h1>Web component 2</h1>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view />
    </div>
    <div class="card">
      <h2>Dinamic component</h2>
      <button @click="onClickHome">home</button>
      <button @click="onClickAbout">About</button>
      <component :is="dinamicComponent" />
    </div>
    <!-- <div class="card">
      <h2>Harcode components</h2>
      <Home />
      <About />
    </div> -->
  </div>
</template>




<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Home from "./views/Home.vue";
import About from "./views/About.vue";

export enum AppEvent {
  Status = "app:status",
}

@Component<App>({
  components: {
    Home,
    About,
  },
})
export default class App extends Vue {
  data: any = null;
  dinamicComponent: any = "Home";
  onClickHome(){
      this.dinamicComponent = "Home";
  }
  onClickAbout(){
      this.dinamicComponent = "About";
  }
  created() {
    console.log("created() -> data:", this.data);
  }

  async loadApp() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("setTimeout()");
        resolve("fetch Data");
      }, 10);
    });
  }

  mounted() {
    console.log("mounted() -> data:", this.data);
    this.loadApp().then((data) => {
      this.data = data;
      console.log("loadApp() -> data:", this.data);
    });
  }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.card {
  border: 1px #2c3e50 solid;
  border-radius: 5px;
  padding: 5px;
}
</style>
