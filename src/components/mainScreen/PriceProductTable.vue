<template>
  <div>
    <DataTable :value="products" tableStyle="min-width: 20rem">
      <Column field="name" header="Nazwa produktu"></Column>
      <Column field="unitPrice" header="Cena">
        <template #body="slotProps">
          {{ slotProps.data.unitPrice }} PLN
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
