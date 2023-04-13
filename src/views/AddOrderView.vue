<template>
  <div>
    <HeaderComponent :headerText="headerText" />
    <OrderFormComponentVue />
    <OrderEditableTable />
  </div>
</template>
<script>
import HeaderComponent from "@/components/shared/HeaderComponent.vue";
import OrderFormComponentVue from "@/components/addOrder/OrderFormComponent.vue";
import OrderEditableTable from "@/components/addOrder/OrderEditableTable.vue";
export default {
  name: "AddOrderView",
  components: {
    HeaderComponent,
    OrderFormComponentVue,
    OrderEditableTable,
  },
  data() {
    return {
      headerText: "Formularz zamówienia",
    };
  },
};
</script>
<style scoped></style>
