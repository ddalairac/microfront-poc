<template>
  <div id="app" class="card hard-line">
    <h1>Web component 2</h1>
    <h3>{{ compName }}</h3>
    <div class="card">
      <div class="display-as-columns">
        <h2>Router component</h2>
        <!-- <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        <router-view /> -->
      </div>
    </div>

    <div class="card">
      <div class="display-as-columns">
        <h2>Dinamic component</h2>
        <div>
          <button @click="onClickHome">home</button>
          <button @click="onClickAbout">About</button>
        </div>
        <component :is="dinamicComponent" />
      </div>
    </div>
  </div>
</template>




<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Home from "./views/Home.vue";
import About from "./views/About.vue";

@Component<App>({
  components: {
    Home,
    About,
  },
})
export default class App extends Vue {
  compName = "<mf-2>";
  data: any = null;
  dinamicComponent: any = "Home";
  onClickHome() {
    this.dinamicComponent = "Home";
  }
  onClickAbout() {
    this.dinamicComponent = "About";
  }
  created() {
    console.log("%c<mf-2>", "background: black;padding: 10px;");
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
  //   padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.display-as-columns {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  > :nth-child(1),
  > :nth-child(2),
  > :nth-child(3) {
    width: 33%;
  }
}
.card {
  border: 1px #ddd solid;
  border-radius: 5px;
  padding: 5px;
  &.hard-line {
    border-color: #2c3e50;
  }
  .card {
    padding: 15px;
    &:last-child {
      margin-top: 5px;
    }
    .card {
    background: #eee;}
  }
}
h1,
h2 {
  margin: 0;
}
</style>
