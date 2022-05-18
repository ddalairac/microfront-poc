<template>
  <div id="app">
    <h1>MF Store (no router)</h1>
    <p>Custom navigation (Dinamic component))</p>
    <p class="bold">Host App: {{ hostApp }}</p>
    <button class="btn btn-primary" @click="onClickHome">home</button>
    <button class="btn btn-primary" @click="onClickPage">Page</button>
    <component :is="dinamicComponent" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
// import store from './store';
// import MfHome from './views/MfHome.vue';
// import MfPage from './views/MfPage.vue';
const MfHome = () => import(/* webpackChunkName: "mf-home-view" */ './views/MfHome.vue');
const MfPage = () => import(/* webpackChunkName: "mf-page-view" */ './views/MfPage.vue');

@Component({
  components: {
    MfHome,
    MfPage,
  },
})
export default class App extends Vue {
  @Prop({ default: 'not declared' }) private hostApp!: string;
  dinamicComponent = 'MfHome';
  onClickHome() {
    this.dinamicComponent = 'MfHome';
    this.onEmit()
  }
  onClickPage() {
    this.dinamicComponent = 'MfPage';
    this.onEmit()
  }

  onEmit(){
    this.$emit('change', this.dinamicComponent);
  }
}
</script>

<style lang="scss">
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
h1 {
  color: #4756b7;
}
.bold {
  font-weight: bold;
}
</style>
