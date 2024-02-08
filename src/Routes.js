import { createRouter, createWebHistory } from "vue-router";
import Layout from "./components/Layout.vue";
import Dashboard from "./views/Dashboard.vue";
import RegisterProducts from "./views/RegisterProducts.vue";
import RegisterEmployees from "./views/RegisterEmployees.vue";
import Settings from "./views/Settings.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      { path: "/dashboard", component: Dashboard },
      { path: "/register/products", component: RegisterProducts },
      { path: "/register/employees", component: RegisterEmployees },
      { path: "/settings", component: Settings },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
