<template>
  <div class="container">
    <h2>Microfront (blue color)</h2>
    <p class="bold">Host App: {{ hostApp }}</p>
    <div class="title">Framework: vue2 (blue color scoped)</div>
    <p>MF store Counter: {{ counter }}</p>
    <StoreMF />
  </div>
</template>

<script>
import store from './store';
import StoreMF from './components/StoreMF.vue';

export default {
  store,
  name: 'AppMF',
  components: { StoreMF },
  props: {
    hostApp: {
      type: String,
      default: 'not declared',
    },
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  .title {
    color: #475ab7;
    font-size: 20px;
  }
}
.bold {
  font-weight: bold;
}
</style>
