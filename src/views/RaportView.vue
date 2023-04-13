<template>
  <div>
    <HeaderComponent :headerText="filters" />
    <div class="filters">
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
      <Dropdown
        :options="yearOptions"
        v-model="selectedYear"
        placeholder="Wybierz rok"
        @change="onYearChange"
      ></Dropdown>
      <Button label="Resetuj filtry" @click="resetFilters"></Button>
    </div>

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
    <HeaderComponent :headerText="chartName" />
    <div class="chart-container">
      <Chart
        type="pie"
        :data="chartData"
        :options="chartOptions"
        class="chart"
      ></Chart>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Calendar from "primevue/calendar";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import Chart from "primevue/chart";
import HeaderComponent from "@/components/shared/HeaderComponent.vue";

export default {
  name: "RaportView",
  components: {
    DataTable,
    Column,
    Dropdown,
    Calendar,
    Button,
    Chart,
    HeaderComponent,
  },
  data() {
    return {
      orders: [],
      clients: [],
      selectedClient: null,
      dateRange: null,
      selectedYear: null,
      filters: "Filtry",
      chartName: "Wykres",
    };
  },
  computed: {
    ...mapGetters(["allOrders", "allClients"]),
    chartData() {
      const productSales = this.filteredOrders.reduce((acc, order) => {
        if (!acc[order.product]) {
          acc[order.product] = 0;
        }
        acc[order.product] += order.quantity * order.unitPrice;
        return acc;
      }, {});
      const labels = Object.keys(productSales);
      const backgroundColors = labels.map(() => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
      });
      return {
        labels,
        datasets: [
          {
            data: Object.values(productSales),
            backgroundColor: backgroundColors,
          },
        ],
      };
    },
    chartOptions() {
      return {
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                const label = context.label || "";
                const value = context.parsed || 0;
                return `${label}: ${value.toFixed(2)} PLN`;
              },
            },
          },
        },
      };
    },

    yearOptions() {
      const currentYear = new Date().getFullYear();
      const years = [];
      for (let year = currentYear - 5; year <= currentYear + 5; year++) {
        years.push(year);
      }
      return years;
    },
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
      if (this.selectedYear) {
        filtered = filtered.filter((order) => {
          const orderYear = new Date(order.date).getFullYear();
          return orderYear === this.selectedYear;
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
    resetFilters() {
      this.selectedClient = null;
      this.dateRange = null;
      this.selectedYear = null;
    },
  },
};
</script>

<style>
/* Dodajemy style do filtrów */
.filters {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.filters .p-dropdown {
  width: 15rem;
}

/* Dodajemy style do tabeli */
.table-class {
  font-size: 1.2rem;
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #ccc;
}

.table-class tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}
/* Dodajemy style do wykresu */
.chart-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10rem;
}
@media (max-width: 600px) {
  .chart-container {
    height: 300px;
    width: 100%;
  }
}
.chart {
  width: 400px;
  height: 400px;
}
@media (max-width: 600px) {
  .chart {
    height: 300px;
  }
}
</style>
