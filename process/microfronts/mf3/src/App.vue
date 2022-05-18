<template>
  <div id="app">
    <div class="card hard-line">
      <div class="display-as-columns">
        <div>
          <h1>Web component 3</h1>
          <h3>{{ compName }}</h3>
        </div>
        <div>
          <h2>Dinamic Component</h2>
          <button class="btn btn-primary" @click="onClickHome">home</button>
          <button class="btn btn-primary" @click="onClickAbout">About</button>
        </div>
        <component :is="dinamicComponent" class="card" />
      </div>
      <ul>
        <li>Typescript</li>
        <li>Store</li>
        <li>Navigation: dinamic component</li>
        <li>bootstrap-vue Package</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
// import { BootstrapVue } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

@Component({
  components: {
    Home,
    About,
  },
})
export default class App extends Vue {
  data: any = null;
  dinamicComponent: any = "Home";
  compName = "<mf-3>";
  onClickHome() {
    this.dinamicComponent = "Home";
  }
  onClickAbout() {
    this.dinamicComponent = "About";
  }
  created() {
    console.log("%c<mf-3>", "background: black;padding: 10px;");
    console.log("created()");
  }

  async loadApp() {
    return new Promise((resolve, reject) => {
      fetch("./data.json")
        .then((response)=> {//console.log("response: ",response)
          return response.json();
        })
        .catch((error)=> {
          reject(error);
        })
        .then((d)=> {
          resolve(d);
        });

      setTimeout(() => {
        reject("Timeout");
      }, 100);
    });
  }

  mounted() {
    console.log("mounted() -> data:", this.data);
    this.loadApp()
      .then((data) => {
        this.data = data;
        console.log("loadApp() -> data:", this.data);
      })
      .catch((error) => console.log("Fetch error: ",error));
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
  margin-bottom: 30px;
}
ul {
  text-align: left;
}
.card {
  border: 1px #ddd solid;
  border-radius: 5px;
  padding: 5px;
  &.hard-line {
    border-color: #2c3e50;
  }
  .card {
    background: #eee;
    padding: 15px;
  }
}
.display-as-columns {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > :nth-child(1),
  > :nth-child(2),
  > :nth-child(3) {
    width: 33%;
  }
}
</style>
