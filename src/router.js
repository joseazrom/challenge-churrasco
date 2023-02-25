import { createWebHistory, createRouter } from "vue-router";
import Login from "./components/Login.vue";
import ProductosView from "./views/ProductosView.vue";
import AddProduct from "./components/AddProduct.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/productos",
    name: "productos",
    meta: {
      requiresAuth: true,
    },
    component: ProductosView,
  },
  {
    path: "/add-product",
    name: "add-product",
    meta: {
      requiresAuth: true,
    },
    component: AddProduct,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("Authorization") != undefined) {
      next();
    } else {
      next({ name: "login" });
    }
  } else {
    next();
  }
});

export default router;
