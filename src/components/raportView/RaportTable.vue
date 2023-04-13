<template>
  <div>
    <DataTable :value="orders" tableStyle="min-width: 50rem">
      <Column field="client" header="Nazwa klienta"></Column>
      <Column field="product" header="Nazwa produktów"></Column>
      <Column
        field="quantity"
        header="Ilość produktów zamówionych przez klienta"
      ></Column>
      <Column :field="unitPriceTemplate" header="Cena jednostkowa"></Column>
      <Column :field="totalPrice" header="Cena za całe zamówienie"></Column>
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
  },
  created() {
    this.fetchOrders().then(() => {
      this.orders = this.allOrders;
      console.log(this.orders);
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
