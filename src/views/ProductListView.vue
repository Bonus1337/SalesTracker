<template>
  <div>
    <HeaderComponent :headerText="addProduct" />
    <AddProductForm />
    <HeaderComponent :headerText="productList" />
    <EditableProductTable />
  </div>
</template>

<script>
import HeaderComponent from "@/components/shared/HeaderComponent.vue";
import EditableProductTable from "@/components/productListView/EditableProductTable.vue";
import AddProductForm from "@/components/productListView/AddProductForm.vue";

export default {
  name: "ProductListView",
  components: {
    HeaderComponent,
    EditableProductTable,
    AddProductForm,
  },
  data() {
    return {
      productList: "Lista produktów",
      addProduct: "Dodaj produkt",
    };
  },
};
</script>
