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
    console.log(response.data);
  },
  async addOrder({ commit }, order) {
    const response = await axios.post("http://localhost:3000/orders", order);
    commit("addOrder", response.data);
  },
  async deleteOrder({ commit }, orderId) {
    await axios.delete(`http://localhost:3000/orders/${orderId}`);
    commit("removeOrder", orderId);
  },
  async updateOrder({ commit }, updatedOrder) {
    const response = await axios.put(
      `http://localhost:3000/orders/${updatedOrder.id}`,
      updatedOrder
    );
    commit("updateOrder", response.data);
  },
};

const mutations = {
  setOrders: (state, orders) => (state.orders = orders),
  addOrder: (state, order) => state.orders.push(order),
  removeOrder: (state, orderId) => {
    state.orders = state.orders.filter((order) => order.id !== orderId);
  },
  updateOrder: (state, updatedOrder) => {
    const index = state.orders.findIndex(
      (order) => order.id === updatedOrder.id
    );
    if (index !== -1) {
      state.orders.splice(index, 1, updatedOrder);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
