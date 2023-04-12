<template>
  <div>
    <HeaderComponent :headerText="headerText" />
    <PriceProductTable />
  </div>
</template>

<script>
import HeaderComponent from "@/components/shared/HeaderComponent.vue";
import PriceProductTable from "@/components/mainScreen/PriceProductTable.vue";

export default {
  name: "ProductListView",
  components: {
    HeaderComponent,
    PriceProductTable,
  },
  data() {
    return {
      headerText: "Lista produktów",
    };
  },
};
</script>
