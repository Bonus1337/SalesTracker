import Vuex from "vuex";
import products from "./modules/products";
import clients from "./modules/clients";
import orders from "./modules/orders";

export default new Vuex.Store({
  modules: {
    products,
    clients,
    orders,
  },
});
