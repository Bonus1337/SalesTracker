<template>
  <div>
    <HeaderComponent :headerText="headerText" />
    <PriceProductTable />
    <AddProductForm />
  </div>
</template>

<script>
import HeaderComponent from "@/components/shared/HeaderComponent.vue";
import PriceProductTable from "@/components/mainScreen/PriceProductTable.vue";
import AddProductForm from "@/components/productListView/AddProductForm.vue";

export default {
  name: "ProductListView",
  components: {
    HeaderComponent,
    PriceProductTable,
    AddProductForm,
  },
  data() {
    return {
      headerText: "Lista produktów",
    };
  },
};
</script>
