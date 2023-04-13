<template>
  <div>
    <Button class="p-button-sm p-button-success" @click="onClick">{{
      text
    }}</Button>
  </div>
</template>
<script>
import Button from "primevue/button";

export default {
  name: "ButtonComponent",
  props: {
    text: {
      type: String,
      default: "text",
    },
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
  components: {
    Button,
  },
};
</script>

<style scoped>
.p-button {
  text-align: center;
  display: flex;
  justify-content: center;
}
</style>
