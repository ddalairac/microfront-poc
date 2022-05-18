<template>
  <div>
    <p>MF Comp store Counter: {{ counter }}</p>
    <button @click="addOne">MF+1</button>
    <button @click="increase(10)">MF increase 10</button>
  </div>
</template>

<script>
import store from '../store';

export default {
  store,
  name: 'StoreMF',
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
