<template>
  <div class="navbar-container">
    <router-link to="/">
      <div class="navbar-logo">
        <img src="../assets/logo.jpeg" alt="Logo" />
      </div>
    </router-link>
    <div class="navbar-menu">
      <RouterLink v-for="link in links" :key="link.path" :to="link.path">
        <Button :label="link.label" class="p-button-text" />
      </RouterLink>
    </div>
    <div class="navbar-hamburger" @click="mobileMenuActive = !mobileMenuActive">
      <span class="navbar-hamburger-line"></span>
      <span class="navbar-hamburger-line"></span>
      <span class="navbar-hamburger-line"></span>
    </div>
    <div v-if="mobileMenuActive" class="navbar-mobile-menu">
      <RouterLink
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        class="p-button-text"
        @click="mobileMenuActive = false"
      >
        {{ link.label }}
      </RouterLink>
    </div>
  </div>
</template>

<script>
import Button from "primevue/button";

export default {
  name: "NavigationBar",
  components: {
    Button,
  },
  data() {
    return {
      links: [
        { path: "/sales-report", label: "Raport sprzedaży" },
        { path: "/product-list", label: "Zarządzanie listą produktów" },
        { path: "/add-order", label: "Zarządzanie zamówieniami" },
      ],
      mobileMenuActive: false,
    };
  },
};
</script>

<style scoped>
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333333;
  max-height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.navbar-logo img {
  height: 76px;
  width: auto;
  object-fit: contain;
}

.navbar-menu {
  display: flex;
  gap: 16px;
}

.navbar-menu .p-button-text {
  color: #ffffff;
}

/* Styl dla widoku mobilnego */

.navbar-hamburger {
  display: none;
  cursor: pointer;
}

.navbar-hamburger-line {
  display: block;
  width: 24px;
  height: 3px;
  background-color: #ffffff;
  margin: 5px 0;
}

.navbar-mobile-menu {
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background-color: #333333;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 999;
}

.navbar-mobile-menu .p-button-text {
  color: #ffffff;
}

@media (max-width: 768px) {
  .navbar-menu {
    display: none;
  }

  .navbar-hamburger {
    display: block;
    margin-right: 10px;
  }
}
</style>
