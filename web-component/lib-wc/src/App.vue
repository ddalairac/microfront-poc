<template>
  <div id="appMFdep" class="container">
    <h1>Web Components Library</h1>
    <p>dependencies (Boostrap 5)</p>
    <div class="components">
      <VButton>Default</VButton>
      <VButton variant="btn-secondary">Secondary</VButton>
      <VButton variant="btn-outline-secondary">Outline Secondary</VButton>
    </div>
    <div class="components">
      <VAcordion />
    </div>
    <div class="components">
      <VDropdown text="Acctions Dropdown" :items="items" @clicked="onClickedItem" />
      <VDropdown
        text="Acctions Dropdown 2"
        :items="items"
        variant="btn-secondary"
        @on-click="onClickedItem"
      >
        <li class="dropdown-item" @click="onClickedItem('Manual Action')">Manual Action</li>
        <li class="dropdown-item" @click="onClickedItem('Manual Action 2')">Manual Action 2</li>
      </VDropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VButton from './components/VButton.vue';
import VAcordion from './components/VAcordion.vue';
import VDropdown, { tViewValue } from './components/VDropdown.vue';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

@Component({
  components: {
    VButton,
    VAcordion,
    VDropdown,
  },
})
export default class App extends Vue {
  items: tViewValue[] = [
    {
      view: 'Action 1',
      value: 'action1',
    },
    {
      view: 'Action 2',
      value: false,
    },
    {
      view: 'Action 3',
      value: ['action3', true],
    },
  ];
  onClickedItem(item: tViewValue): void {
    console.log(item);
  }
}
</script>

<style lang="scss">
// @import '@vision/vision-vue/dist/vision-vue.esm';
h1 {
  color: green;
}
#appMFdep {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.components {
  display: flex;
  border-top: 1px solid #ccc;
  padding: 30px 0 0;
  margin: 30px;
  > * {
    margin-right: 10px;
  }
}
</style>
