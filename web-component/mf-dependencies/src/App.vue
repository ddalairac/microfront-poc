<template>
  <div id="appMFdep" class="container">
    <h1>MF Dependencies</h1>
    <p>dependencies (boostrap, boostrap-vue & Vision)</p>
    <div class="mb-3">
      <b-button @click="onButton('no class')">Button</b-button>
      <b-button @click="onButton('danger')" variant="danger">Button</b-button>
      <b-button @click="onButton('success')" variant="success">Button</b-button>
      <b-button @click="onButton('outline')" variant="outline-primary">Button</b-button>
      <div class="mt-2">Button Value: {{ buttonPress }}</div>
    </div>
    <div class="mb-3">
      <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
      <div class="mt-2">Input Value: {{ text }}</div>
    </div>

    <div class="mb-3">
      <b-button variant="outline-primary mr-2" v-b-modal.modal-1>Launch modal directive</b-button>
      <b-button variant="outline-primary" @click="onModal">Launch modal attr</b-button>

      <b-modal id="modal-1" title="BootstrapVue" v-model="modalIsOpen">
        <p class="my-4">Hello from modal!</p>
        <p class="my-4">Al Modal CSS need to exist in the host App (the styles of this modal are in 'demo-wc.css')</p>
      </b-modal>
    </div>
    <div class="mb-3">
      <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
        <b-dropdown-item
          v-for="(dItem, index) of dropdownItems"
          :key="index"
          :active="dropdownItemActive === dItem"
          :disabled="dItem.disabled"
          @click="onDropdownItem(dItem)"
          >{{ dItem.text }}</b-dropdown-item
        >
        <!-- <b-dropdown-item>First Action</b-dropdown-item>
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-item>Third Action</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item active>Active action</b-dropdown-item>
        <b-dropdown-item disabled>Disabled action</b-dropdown-item> -->
      </b-dropdown>
      <div class="mt-2">
        Dropdown Value: {{ dropdownItemActive && dropdownItemActive.text ? dropdownItemActive.text : '' }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { BButton, BFormInput, BModal, BDropdown, BDropdownItem } from 'bootstrap-vue';

@Component({
  components: {
    BButton,
    BFormInput,
    BModal,
    BDropdown,
    BDropdownItem,
    // HelloWorld,
  },
})
export default class App extends Vue {
  buttonPress = '';
  text = '';
  modalIsOpen = false;
  dropdownItems = [
    { text: 'First Action' },
    { text: 'Second Action' },
    { text: 'Third Action' },
    { text: 'Active Action', active: true },
    { text: 'Disabled Action', disabled: true },
  ];
  dropdownItemActive = null;

  onButton(str) {
    this.buttonPress = str;
    console.log('buttonPress', str);
  }
  onModal() {
    this.modalIsOpen = !this.modalIsOpen;
    console.log('modalIsOpen', this.modalIsOpen);
  }
  onDropdownItem(dItem) {
    this.dropdownItemActive = dItem;
    console.log('onDropdownItem', dItem);
  }
}
</script>

<style lang="scss">
@import '@vision/vision-vue/dist/vision-vue.esm';
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
</style>
