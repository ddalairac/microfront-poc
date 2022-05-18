<template>
  <div>
    <button @click="addOne">MF+1</button>
    <button @click="increase(10)">MF increase 10</button>
    <p>MF store Counter: {{ counter }}</p>
  </div>
</template>

<script>
import store from '../store';

export default {
  store,
  name: 'StoreHOST',
  methods: {
    addOne() {
      store.commit('mutCounterIncrement');
    },
    increase(num) {
      store.commit('mutCounterincrease', num);
    },
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
};
</script>
