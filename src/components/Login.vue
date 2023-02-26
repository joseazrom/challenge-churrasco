<template>
  <div class="login-container">
    <img
      class="logo-churrasco"
      src="../assets/logos/logo-churrasco.png"
      alt=""
    />
    <LoginForm class="login-form" />
  </div>
  <h1 class="text-footer">web services under your control</h1>
</template>

<script>
import { useRouter } from "vue-router";

import LoginForm from "./LoginForm";

export default {
  name: "Login",
  components: {
    LoginForm,
  },
  mounted() {
    this.isLogged();
  },
  methods: {
    isLogged() {
      const router = useRouter();
      console.log(localStorage.getItem("Authorization"));
      if (localStorage.getItem("Authorization")) {
        router.push({ name: "productos" });
      } else {
        router.push({ name: "login" });
      }
    },
  },
};
</script>

<style>
.login-container {
  display: flex;
  width: 250px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10vh;
  margin-bottom: 55.3vh;
}
.login-form {
  margin-top: 27px;
}
.logo-churrasco {
  width: 150px;
  height: 100px;
}
.text-footer {
  font-size: 13px;
  font-weight: normal;
  padding-bottom: 2.5vh;
  color: rgba(255, 255, 255, 0.388);
}
</style>
