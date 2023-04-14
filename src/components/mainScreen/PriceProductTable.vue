<template>
  <div>
    <DataTable :value="filteredOrders" tableStyle="min-width: 20rem">
      <Column field="product" sortable header="Nazwa produktu"></Column>
      <Column field="unitPrice" sortable header="Cena">
        <template #body="slotProps">
          <span class="unit-price">{{ slotProps.data.unitPrice }} PLN</span>
        </template>
      </Column>
      <Column field="quantity" header="Ilość sprzedanych">
        <template #body="slotProps">
          {{ sumQuantity(slotProps.data.product) }}
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

export default {
  name: "PriceProductTable",
  components: {
    DataTable,
    Column,
  },
  computed: {
    ...mapGetters(["allOrders"]),
    filteredOrders() {
      const uniqueProducts = this.allOrders.reduce((acc, order) => {
        if (!acc.some((o) => o.product === order.product)) {
          acc.push(order);
        }
        return acc;
      }, []);
      return uniqueProducts;
    },
  },
  created() {
    this.fetchOrders();
  },
  methods: {
    ...mapActions(["fetchOrders"]),
    sumQuantity(product) {
      return this.allOrders
        .filter((order) => order.product === product)
        .reduce((acc, order) => acc + order.quantity, 0);
    },
  },
};
</script>

<style>
.unit-price {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  background-color: #6db55a;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  border: 1px solid #4e4e4e;
}
</style>
