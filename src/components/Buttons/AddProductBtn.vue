<template>
  <router-link to="/add-product" class="add-button">AGREGAR PRODUCTO</router-link>
</template>
<style>
.add-button {
  width: 230px;
  height: 45px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  padding: 10px;
  background-color: #ffffff;
  color: #402f60bc;
  border: none;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  font-size: 17px;
  cursor: pointer;
  text-decoration: none;
}

.add-button::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background-color: rgba(57, 34, 87, 0.292);
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out;
}

.add-button:hover::after {
  width: 200%;
  height: 200%;
}
</style>
