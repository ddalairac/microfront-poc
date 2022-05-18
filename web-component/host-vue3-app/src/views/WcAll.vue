<template>
  <div class="container">
    <div class="col">
      <h3>Vue2 outsourced</h3>
        <p>Event: {{ MFsimpleEmitedValue }}</p>
      <div class="card">
        <mfsimple-wc host-app="Vue2 App" @change="onChangeSimple" />
      </div>
    </div>

    <div class="col">
      <h3>Vue2 outsourced</h3>
      <p>Event 1: {{ MFstore1EmitedValue }}</p>
      <p>Event 2: {{ MFstore2EmitedValue }}</p>
      <div class="card">
        <mfstore-wc host-app="Vue2 App" @change="onChangeStore1" />
        <hr />
        <mfstore-wc host-app="Vue2 App" @change="onChangeStore2" />
      </div>
    </div>

    <div class="col">
      <h3>Vue2 inline</h3>
      <p>Event: {{ MFStoreiV2EmitedValue }}</p>
      <div class="card">
        <mfstore-wc-iv2 host-app="Vue2 App" @change="onChangeStoreiV2" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    // msg: String,
  },
})
export default class WcAll extends Vue {
  MFsimpleEmitedValue = '';
  onChangeSimple(value: CustomEvent) {
    this.MFsimpleEmitedValue = value.detail[0];
    console.log('MF Simple emit change:', value);
  }

  MFstore1EmitedValue = '';
  MFstore2EmitedValue = '';

  onChangeStore1(value: CustomEvent) {
    this.MFstore1EmitedValue = value.detail[0];
    console.log('MF Store1 emit change:', value);
  }
  onChangeStore2(value: CustomEvent) {
    this.MFstore2EmitedValue = value.detail[0];
    console.log('MF Store2 emit change:', value);
  }

  MFStoreiV2EmitedValue = '';
  onChangeStoreiV2(value: CustomEvent) {
    this.MFStoreiV2EmitedValue = value.detail[0];
    console.log('MF Store iV2 emit change:', value);
  }
}
</script>

<style lang="scss"></style>
