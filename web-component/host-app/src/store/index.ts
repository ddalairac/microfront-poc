import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    number: 1,
  },
  mutations: {
    mutCounterPlus(state) {
      state.number += 1;
    },
    mutCounterPlusNum(state, num) {
      state.number += num;
    },
  },
  actions: {
  },
  modules: {
  },
});
