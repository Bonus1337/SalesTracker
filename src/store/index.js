import { createStore } from "vuex";
import data from "../data.json";

export default createStore({
  state: {
    data: data,
  },
  getters: {
    getData: (state) => state.data,
  },
  mutations: {},
  actions: {},
  modules: {},
});
