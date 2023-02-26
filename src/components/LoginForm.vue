<template>
  <div class="container-form">
    <form @submit.prevent="iniciarSesion">
      <div class="username">
        <i class="icon-user mt-2.5" />
        <input
          class="login-input"
          type="text"
          placeholder="Username"
          v-model="username"
        />
      </div>
      <div class="password">
        <i class="icon-pass mt-2.5" />
        <input
          class="login-input"
          type="password"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <div class="container-buttons mt-2.5">
        <div class="checkbox-container">
          <input type="checkbox" id="remember" v-model="remember" />
          <label for="checked"> remember </label>
        </div>
        <div class="button">
          <input
            type="submit"
            value="Log In"
            title="Enviar"
            class="button-login"
          />
        </div>
      </div>
      <div v-if="showMessage" class="error">{{ msg }}</div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
      remember: false,
      showMessage: false,
      msg: "",
    };
  },
  methods: {
    async iniciarSesion() {
      var payload = {
        username: this.username,
        password: this.password,
      };
      try {
        const { data } = await this.axios.post(
          "http://vps.churrasco.digital:3005/login",
          payload
        );
        const { token } = data;
        if (token != undefined) {
          if (this.remember) {
            localStorage.setItem("username", this.username);
          }

          localStorage.setItem("Authorization", token);

          this.$router.push("/Productos");
        }
      } catch (error) {
        this.showMessage = true;
        this.msg = error.response.data.msg;
      }
    },
  },
};
</script>

<style>
.error {
  color: white;
}
.login-input {
  width: 84%;
}
.container-form {
  width: 100%;
}
.icon-user {
  display: inline-block;
  width: 20px;
  height: 15px;
  background-image: url("../assets/icons/user.png");
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 10px;
  margin-left: 10px;
  color: black;
}
.icon-pass {
  display: inline-block;
  width: 20px;
  height: 15px;
  background-image: url("../assets/icons/password.png");
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 10px;
  margin-left: 10px;
  color: black;
}
.username {
  display: flex;
  height: 40px;
  background: white;
  align-items: center;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom: 1px solid rgba(146, 146, 146, 0.253);
}
.password {
  display: flex;
  height: 40px;
  background: white;
  align-items: center;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
input {
  border: none;
}
input:focus {
  outline: none;
  border: none;
}
.container-buttons {
  display: flex;
  width: 100%;
  margin-top: 10px;
  justify-content: space-between;
  align-items: center;
}
.button-login {
  width: 90px;
  height: 40px;
  background-color: rgb(66, 50, 145);
  color: white;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}
.checkbox-container {
  color: rgb(164, 164, 164);
}
</style>
