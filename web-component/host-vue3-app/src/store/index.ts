import { createStore } from 'vuex';

export default createStore({
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
