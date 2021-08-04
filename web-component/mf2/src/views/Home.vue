<template>
  <div class="home card">
    <h1>Home page</h1>
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss">
img{
    width: 20px;
}
</style>