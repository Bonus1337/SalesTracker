import axios from "axios";

const state = {
  orders: [],
};

const getters = {
  allOrders: (state) => state.orders,
};

const actions = {
  async fetchOrders({ commit }) {
    const response = await axios.get("http://localhost:3000/orders");
    commit("setOrders", response.data);
  },
  async addOrder({ commit }, order) {
    const response = await axios.post("http://localhost:3000/orders", order);
    commit("addOrder", response.data);
  },
};

const mutations = {
  setOrders: (state, orders) => (state.orders = orders),
  addOrder: (state, order) => state.orders.push(order),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
