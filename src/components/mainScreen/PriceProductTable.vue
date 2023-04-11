<template>
  <div>
    <DataTable :value="products" tableStyle="min-width: 20rem">
      <Column field="name" sortable header="Nazwa produktu"></Column>
      <Column field="unitPrice" sortable header="Cena">
        <template #body="slotProps">
          <span class="unit-price">{{ slotProps.data.unitPrice }} PLN</span>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
export default {
  name: "PriceProductTable",
  components: {
    DataTable,
    Column,
  },
  computed: {
    ...mapGetters(["getData"]),
    products() {
      return this.getData.products;
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
