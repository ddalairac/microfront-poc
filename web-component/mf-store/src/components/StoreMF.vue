<template>
  <div class="hello">
    <p>
      {{ msg }}
    </p>
    <button @click="addOne">MF+1</button>
    <button @click="increase(10)">MF increase 10</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import store from '../store';

@Component
export default class StoreMF extends Vue {
  @Prop() private msg!: string;

  addOne(): void {
    store.commit('mutCounterIncrement');
  }
  increase(num: number): void {
    store.commit('mutCounterincrease', num);
  }
}
</script>

<style scoped lang="scss"></style>
