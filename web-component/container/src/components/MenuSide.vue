<template>
  <div  class="navC navC-side">
    <router-link class="btn btn-primary" to="/">Home</router-link>
    <router-link class="btn btn-primary" to="page1">Page1</router-link>
    <router-link class="btn btn-primary" to="page2">Page2</router-link>
    <router-link class="btn btn-primary" to="page3">Page3</router-link>
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
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: #f5f5f5;
  width: 150px;
  height: 100%;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 10px;

    // &.router-link-active {
    //   color: #8f1b1b;
    // }
    // &.router-link-active {
    //   color: #42b983;
    // }
  }
}
.navC-side {
  a {
    color: white;
    margin-bottom: 3px;
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
