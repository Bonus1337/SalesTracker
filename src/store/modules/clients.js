import axios from "axios";

const state = {
  clients: [],
};

const getters = {
  allClients: (state) => state.clients,
};

const actions = {
  async fetchClients({ commit }) {
    const response = await axios.get("http://localhost:3000/clients");
    commit("setClients", response.data);
  },
};

const mutations = {
  setClients: (state, clients) => (state.clients = clients),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
