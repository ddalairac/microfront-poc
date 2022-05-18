<template>
  <div class="home">
    <h2>HOST STORE</h2>
    <StoreHost msg="Host Store test component" />
    <p>num: {{ counter }}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import StoreHost from '../components/StoreHost.vue';
import store from '../store';

@Options({
  components: {
    StoreHost,
  },
})
export default class Home extends Vue {
  get counter(): number {
    return store.state.number;
  }
}
</script>
