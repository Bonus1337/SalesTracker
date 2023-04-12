<template>
  <div>
    <HeaderComponent :headerText="headerText" />
    <OrderFormComponentVue />
  </div>
</template>
<script>
import HeaderComponent from "@/components/shared/HeaderComponent.vue";
import OrderFormComponentVue from "@/components/addOrder/OrderFormComponent.vue";
export default {
  name: "AddOrderView",
  components: {
    HeaderComponent,
    OrderFormComponentVue,
  },
  data() {
    return {
      headerText: "Formularz zamówienia",
    };
  },
};
</script>
<style scoped></style>
