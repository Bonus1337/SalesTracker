<template>
  <div>
    <CarouselComponent />

    <div class="table">
      <h2>Tabela produktów</h2>
      <PriceProductTable />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CarouselComponent from "@/components/mainScreen/CarouselComponent.vue";
import PriceProductTable from "@/components/mainScreen/PriceProductTable.vue";
export default {
  name: "HomeView",
  components: { CarouselComponent, PriceProductTable },
};
</script>

<style scoped>
.table {
  margin-top: 5rem;
}
</style>
