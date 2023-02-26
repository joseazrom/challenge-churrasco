<template>
  <div class="topbar">
    <img
      src="../assets/logos/logo-churrasco.png"
      alt="Logo"
      class="logo-topbar"
    />
    <button class="btn-logout" @click="logout">
      <img class="icon-logout" src="../assets/icons/icon-logout.png" alt="" />
      <h1 class="text-btn">Cerrar Sesión</h1>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem("Authorization");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.topbar {
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  margin-top: 27px;
  color: #fff;
}

.logo-topbar {
  padding-left: 2.7%;
  width: 140px;
  height: 60px;
}
.btn-logout {
  display: flex;
  padding-right: 2.3%;
  align-items: center;
  width: 200px;
  height: 50px;
  justify-content: space-around;
  border-radius: 7px;
}
.icon-logout {
  width: 20px;
  height: 20px;
  background-color: transparent;
}
.text-btn {
  font-size: 17px;
}
</style>
