<template>
  <div class="add-order-header">
    <h1>{{ headerText }}</h1>
  </div>
</template>

<script>
export default {
  name: "AddOrderHeader",
  props: {
    headerText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.add-order-header {
  margin-bottom: 24px;
}

.add-order-header h1 {
  font-size: 36px;
  font-weight: bold;
  text-align: center;
}
</style>
