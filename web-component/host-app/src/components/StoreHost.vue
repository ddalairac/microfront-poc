<template>
  <div class="hello">
    <p>
      {{ msg }}
    </p>
    <button @click="addOne">host+1</button>
    <button @click="increase(10)">host increase 10</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import store from '../store';

@Component
export default class StoreHost extends Vue {
  @Prop() private msg!: string;

  addOne(): void {
    store.commit('mutCounterPlus');
  }
  increase(num: number): void {
    store.commit('mutCounterPlusNum', num);
  }
}
</script>

<style scoped lang="scss"></style>
