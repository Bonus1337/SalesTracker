import { createStore } from "vuex";
import data from "../data.json";

export default createStore({
  state: {
    data: data,
    products: data.products,
    clients: data.clients,
    orders: data.orders,
  },
  getters: {
    getData: (state) => state.data,
    getProducts(state) {
      return state.products;
    },
    getClients(state) {
      return state.clients;
    },
    getSelectedProductPrice(state) {
      if (state.products && state.products.length && state.selectedProduct) {
        const selectedProduct = state.products.find(
          (p) => p.name === state.selectedProduct.name
        );
        return selectedProduct.unitPrice * state.quantity;
      }
      return 0;
    },

    getOrders(state) {
      let orders = localStorage.getItem("orders");
      if (orders) {
        return JSON.parse(orders);
      } else {
        return state.orders;
      }
    },
  },
  mutations: {
    addOrder(state, order) {
      state.orders.push(order);
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },
  },
  actions: {},
  modules: {},
});
