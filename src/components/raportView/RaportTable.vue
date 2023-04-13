<template>
  <div>
    <Dropdown
      :options="clients"
      v-model="selectedClient"
      optionLabel="name"
      placeholder="Wybierz klienta"
      @change="onClientChange"
    ></Dropdown>
    <Calendar
      v-model="dateRange"
      selectionMode="range"
      dateFormat="yy-mm-dd"
    ></Calendar>
    <DataTable
      :value="filteredOrders"
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
        <template #footer> {{ totalPriceComputed.toFixed(2) }} PLN </template>
      </Column>
    </DataTable>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Calendar from "primevue/calendar";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Dropdown from "primevue/dropdown";

export default {
  name: "RaportTable",
  components: {
    DataTable,
    Column,
    Dropdown,
    Calendar,
  },
  data() {
    return {
      orders: [],
      clients: [],
      selectedClient: null,
      dateRange: null,
    };
  },
  computed: {
    ...mapGetters(["allOrders", "allClients"]),
    totalPriceComputed() {
      return this.filteredOrders.reduce((acc, order) => {
        return acc + order.quantity * order.unitPrice;
      }, 0);
    },
    allSales() {
      return this.allOrders.reduce((acc, order) => {
        return acc + order.quantity * order.unitPrice;
      }, 0);
    },
    totalQuantity() {
      return this.filteredOrders.reduce(
        (sum, order) => sum + order.quantity,
        0
      );
    },
    filteredOrders() {
      let filtered = this.orders;
      if (this.selectedClient) {
        filtered = filtered.filter(
          (order) => order.client === this.selectedClient.name
        );
      }
      if (this.dateRange && this.dateRange.length === 2) {
        const [startDate, endDate] = this.dateRange;
        filtered = filtered.filter((order) => {
          const orderDate = new Date(order.date);
          return orderDate >= startDate && orderDate <= endDate;
        });
      }
      return filtered;
    },
  },
  created() {
    this.fetchOrders().then(() => {
      this.orders = this.allOrders;
    });
    this.fetchClients().then(() => {
      this.clients = this.allClients;
    });
  },
  methods: {
    ...mapActions(["fetchOrders", "fetchClients"]),
    unitPriceTemplate(rowData) {
      return `${rowData.unitPrice.toFixed(2)} PLN`;
    },
    totalPrice(rowData) {
      return `${(rowData.quantity * rowData.unitPrice).toFixed(2)} PLN`;
    },
    onClientChange() {
      this.$nextTick(() => {
        this.$refs.dataTable.filter();
      });
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
