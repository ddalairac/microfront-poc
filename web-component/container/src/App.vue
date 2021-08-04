<template>
  <div id="app">
    <MenuTop />
    <div class="container">
      <MenuSide />
      <div class="views">
        <router-view />
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import MenuTop from "./components/MenuTop.vue";
import MenuSide from "./components/MenuSide.vue";
@Component<App>({
  components: {
    MenuTop,
    MenuSide,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
html,body,#app{
  height:100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  border: none;
}
h1,h2,h3,ul{
    text-align: left;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container{
    display: flex;
    flex-direction: row;
    height: 100%;
    flex-grow: 1;
}
.views{
    display: flex;
    justify-content: center;
    align-items: top;
    padding: 15px;
    width: 100%;
}
.page-1, .page-2, .page-3{
    width: 100%;
}

</style>
