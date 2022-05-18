<template>
  <div class="mf-page">
    <h2> MF page</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class MfPage extends Vue {
  mounted(): void {
    window.parent.postMessage('MfPage mounted', '*');
  }
}
</script>
