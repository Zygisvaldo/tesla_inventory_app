import { createRouter, createWebHistory } from "vue-router";
import InventoryView from "../views/InventoryView.vue";
import AboutView from "../views/AboutView.vue";
import OrderCarView from "../views/OrderCarView.vue";

const routes = [
  {
    path: "/",
    name: "InventoryView",
    component: InventoryView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/orderCar/:carId",
    name: "orderCar",
    component: OrderCarView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
