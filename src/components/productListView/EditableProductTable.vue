<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Nazwa</th>
          <th>Cena</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in allProducts" :key="product.id">
          <td><input type="text" v-model="product.name" /></td>
          <td><input type="number" v-model="product.unitPrice" /></td>
          <td class="center">
            <button class="btn" @click="updateProduct(product)">
              Uaktualnij
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "EditableProductTable",
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["allProducts"]),
  },
  async mounted() {
    await this.fetchProducts();
  },
  methods: {
    ...mapActions(["fetchProducts", "updateProduct"]),
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 8px;
  text-align: center;
}

th {
  background-color: #ddd;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

/* Styl przycisku */
.btn {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

/* CSS dla widoku responsywnego */
@media screen and (max-width: 768px) {
  table {
    font-size: 12px;
  }

  th,
  td {
    padding: 6px;
  }

  input {
    margin: 0;
    padding: 0;
    width: 90%;
  }
}
</style>
