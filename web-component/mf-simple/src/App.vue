<template>
  <div id="app">
    <h1>MF simple</h1>
    <p>(no router, no store)</p>
    <p class="bold">Host App: {{ hostApp }}</p>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <button @click="onEmit">Emit Value</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  @Prop({ default: 'not declared' }) private hostApp!: string;
  onEmit(): void {
    this.$emit('change', 'emitted value');
  }
}
</script>

<style lang="scss">
h1 {
  color: #47b788;
}
.bold {
  font-weight: bold;
}
</style>
