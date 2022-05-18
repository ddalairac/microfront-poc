<template>
  <div>
    <h1>App Iframe MF</h1>
    <div class="cont card">
      <iframe src="http://localhost:8089/" frameborder="0" width="100%" height="100%"></iframe>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class WcStore extends Vue {}
</script>

<style lang="scss">
.cont {
}
</style>
