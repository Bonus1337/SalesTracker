import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddOrderView from "../views/AddOrderView.vue";
import ProductListView from "../views/ProductListView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/add-order",
    name: "AddOrderView",
    component: AddOrderView,
  },
  {
    path: "/product-list",
    name: "ProductListView",
    component: ProductListView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
