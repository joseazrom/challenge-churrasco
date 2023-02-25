<template>
  <div class="login-container">
    <img
      class="logo-churrasco"
      src="../assets/logos/logo-churrasco.png"
      alt=""
    />
    <LoginForm class="login-form" />
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

import LoginForm from "./LoginForm";

export default {
  name: "Login",
  components: {
    LoginForm,
  },
  mounted() {
    this.isLogged()
  },
  methods: {
    isLogged() {
      const router = useRouter();
      console.log(localStorage.getItem("Authorization"));
      if (localStorage.getItem("Authorization")) {
        router.push({ name: "productos" });
      } else {
        router.push({ name: 'login'});
      }
    },
  },
};
</script>

<style>
.login-container {
  display: flex;
  width: 100%;
  height: 100vh;
  padding-bottom: 130%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.login-form {
  margin-top: 20px;
}
.logo-churrasco {
  width: 150px;
  height: 100px;
}
</style>
