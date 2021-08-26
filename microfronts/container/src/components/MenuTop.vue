<template>
  <div class="navC">
    <router-link to="/">Home</router-link> |
    <router-link to="/page1">Page1</router-link> |
    <router-link to="/page2">Page2</router-link> |
    <router-link to="/page3">Page3</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MenuTop extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navC {
  padding: 10px;
  height: 30px;
  background: #42b983;
  min-height: 40px;

  a {
    font-weight: bold;
    color: #2c3e50;

    // &.router-link-exact-active {
    //   color: white;
    // }
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
