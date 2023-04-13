<template>
  <div class="table-responsive">
    <table class="table">
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
          <td>
            <ButtonComponent
              text="Uaktualnij"
              @click="updateProduct(product)"
            ></ButtonComponent>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ButtonComponent from "../shared/ButtonComponent.vue";

export default {
  name: "EditableProductTable",
  data() {
    return {};
  },
  components: {
    ButtonComponent,
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
.table {
  width: 100%;
  margin-bottom: 1rem;
  background-color: #fff;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
}

.table tbody + tbody {
  border-top: 2px solid #dee2e6;
}

.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

@media (max-width: 575.98px) {
  .table-responsive {
    overflow-x: auto;
  }
  .table {
    width: auto !important;
  }
}
</style>
