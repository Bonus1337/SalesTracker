<template>
  <NavigationBar />
  <div class="content">
    <router-view />
    <FooterComponent />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content {
  margin-top: 5rem;
}
</style>
<script>
import NavigationBar from "@/components/NavigationBar.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  components: {
    NavigationBar,
    FooterComponent,
  },
};
</script>
