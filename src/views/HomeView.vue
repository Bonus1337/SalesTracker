<template>
  <div>
    <h2>Reklama</h2>
    <CarouselComponent />

    <div class="table">
      <h2>Tabela produktów</h2>
      <PriceProductTable />
    </div>
  </div>
</template>

<script>
import CarouselComponent from "@/components/mainScreen/CarouselComponent.vue";
import PriceProductTable from "@/components/mainScreen/PriceProductTable.vue";
export default {
  name: "HomeView",
  components: { CarouselComponent, PriceProductTable },
};
</script>

<style scoped>
body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}
.carousel {
  margin: 2rem auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.table {
  margin: 5rem auto;
  width: 80%;
}
</style>
