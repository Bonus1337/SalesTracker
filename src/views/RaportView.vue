<template>
  <div>
    <HeaderComponent :headerText="headerText" />
    <RaportTable />
  </div>
</template>

<script>
import HeaderComponent from "@/components/shared/HeaderComponent.vue";
import RaportTable from "@/components/raportView/RaportTable.vue";
export default {
  name: "RaportView",
  components: {
    HeaderComponent,
    RaportTable,
  },
  data() {
    return {
      headerText: "Raporty",
    };
  },
};
</script>
