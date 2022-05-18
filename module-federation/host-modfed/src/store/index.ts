import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 1,
  },
  mutations: {
    mutCounterIncrement(state) {
      state.counter += 1;
    },
    mutCounterincrease(state, num) {
      state.counter += num;
    },
  },
  actions: {
  },
  modules: {
  },
});
