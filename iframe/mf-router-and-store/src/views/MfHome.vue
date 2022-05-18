<template>
  <div class="home">
    <h2>MF home page</h2>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <StoreMF msg="Store test component" />
    <p>MF store Counter: {{ counter }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import StoreMF from '../components/StoreMF.vue';
import store from '../store';

@Component({
  components: {
    StoreMF,
  },
})
export default class MfHome extends Vue {
  get counter(): number {
    window.parent.postMessage({ counter: store.state.counter }, '*');
    return store.state.counter;
  }

  mounted(): void {
    window.parent.postMessage('MfHome mounted', '*');
  }
}
</script>
