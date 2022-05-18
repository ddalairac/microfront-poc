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
import { Options, Vue } from 'vue-class-component';
import store from '../store';

@Options({
  props: {
    // msg: String,
  },
})
export default class StoreHost extends Vue {
  addOne(): void {
    store.commit('mutCounterPlus');
  }
  increase(num: number): void {
    store.commit('mutCounterPlusNum', num);
  }
}
</script>

<style scoped lang="scss"></style>
