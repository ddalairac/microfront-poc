<template>
  <div class="home">
    <h2>HOST STORE</h2>
    <StoreHost msg="Host Store test component" />
    <p>num: {{ counter }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import StoreHost from '../components/StoreHost.vue';
import store from '../store';

@Component({
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
