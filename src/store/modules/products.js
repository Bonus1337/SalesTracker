import axios from "axios";

const state = {
  products: [],
};

const getters = {
  allProducts: (state) => state.products,
};

const actions = {
  async fetchProducts({ commit }) {
    const response = await axios.get("http://localhost:3000/products");
    commit("setProducts", response.data);
  },
  async addProduct({ commit }, product) {
    const response = await axios.post(
      "http://localhost:3000/products",
      product
    );
    commit("addProduct", response.data);
  },
  async updateProduct({ commit }, product) {
    const response = await axios.put(
      `http://localhost:3000/products/${product.id}`,
      product
    );
    commit("updateProduct", response.data);
  },
};

const mutations = {
  setProducts: (state, products) => (state.products = products),
  addProduct: (state, product) => state.products.push(product),
  async updateProduct({ commit }, product) {
    console.log("updateProduct", product);
    const response = await axios.put(
      `http://localhost:3000/products/${product.id}`,
      product
    );
    commit("updateProduct", response.data);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
