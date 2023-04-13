<template>
  <div>
    <DataTable
      :value="orders"
      tableStyle="min-width: 50rem"
      class="table-class"
    >
      <Column field="client" header="Nazwa klienta"></Column>
      <Column field="product" header="Nazwa produktów"></Column>
      <Column
        field="quantity"
        header="Ilość produktów zamówionych przez klienta"
      >
        <template #footer>{{ totalQuantity }} </template>
      </Column>
      <Column :field="unitPriceTemplate" header="Cena jednostkowa"></Column>
      <Column :field="totalPrice" header="Cena za całe zamówienie">
        <template #footer> {{ allSales }} PLN </template></Column
      >
    </DataTable>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
export default {
  name: "RaportTable",
  components: {
    DataTable,
    Column,
  },
  data() {
    return {
      orders: [],
    };
  },
  computed: {
    ...mapGetters(["allOrders"]),
    allSales() {
      return this.allOrders.reduce((acc, order) => {
        return acc + order.quantity * order.unitPrice;
      }, 0);
    },

    totalQuantity() {
      return this.orders.reduce((sum, order) => sum + order.quantity, 0);
    },
  },
  created() {
    this.fetchOrders().then(() => {
      this.orders = this.allOrders;
    });
  },
  methods: {
    ...mapActions(["fetchOrders"]),
    unitPriceTemplate(rowData) {
      return `${rowData.unitPrice.toFixed(2)} PLN`;
    },
    totalPrice(rowData) {
      console.log(rowData);
      console.log(rowData.quantity * rowData.unitPrice);
      return `${(rowData.quantity * rowData.unitPrice).toFixed(2)} PLN`;
    },
  },
};
</script>
<style>
.table-class {
  font-size: 1.2rem;
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #ccc;
}

.table-class tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
