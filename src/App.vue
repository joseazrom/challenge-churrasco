<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import Login from "./components/Login.vue";
import ProductosView from "./views/ProductosView.vue";
export default {
  name: "App",
  components: {
    Login,
    ProductosView,
  },
};
</script>
<style>
body {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #4b388d 0%, #1e1c3c 99.99%, #1c0829 100%);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
