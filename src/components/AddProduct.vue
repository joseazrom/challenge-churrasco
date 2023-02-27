<template>
  <div class="container-main">
    <button class="back-button" @click="goBack">
      <img class="icon-back" src="../assets/icons/icon-back.png" alt="" />
      <h1>Volver</h1>
    </button>

    <h1 class="title">AGREGAR PRODUCTO</h1>
    <h1 class="sub-title">Ingresa los datos del producto</h1>
    <form class="form-container" @submit.prevent="submitForm">
      <div class="input-container">
        <label for="name" class="label">Nombre</label>
        <input
          placeholder="Ingresa un nombre"
          type="text"
          id="name"
          v-model="newProduct.name"
          required
        />
      </div>
      <div class="input-container">
        <label for="description" class="label">Descripción</label>
        <textarea
          placeholder="Ingresa una descripción"
          id="description"
          v-model="newProduct.description"
          required
        ></textarea>
      </div>

      <div class="group">
        <div class="input-container">
          <label for="text" class="label">SKU</label>
          <input
            placeholder="Ingresa el SKU"
            type="text"
            id="sku"
            v-model="newProduct.SKU"
            required
          />
        </div>

        <div class="input-container">
          <label for="code" class="label">Código</label>
          <input
            placeholder="Ingresa un código"
            type="text"
            id="code"
            v-model="newProduct.code"
            required
          />
        </div>
      </div>

      <div class="group">
        <div class="input-container">
          <label for="price" class="label">Precio</label>
          <input
            placeholder="Ingresa un precio"
            type="number"
            id="price"
            v-model="newProduct.price"
            required
          />
        </div>

        <div class="input-container">
          <label for="currency" class="label">Divisa</label>
          <input
            placeholder="Ingresa una divisa"
            type="text"
            id="currency"
            v-model="newProduct.currency"
            required
          />
        </div>
      </div>
      <div class="add-images">
        <h1 class="title-add">INGRESA LAS URL DE LAS IMÁGENES</h1>
        <button class="button-add-img" type="button" @click="addPicture">
          Agregar imagen
        </button>
      </div>

      <div class="form-group">
        <div class="input-add-img">
          <input
            placeholder="Ingresa el URL de la imagen"
            type="text"
            v-for="(picture, index) in newProduct.pictures"
            :key="index"
            v-model="newProduct.pictures[index]"
            required
          />
        </div>
      </div>
      <div class="button-container">
        <button class="button-send" type="submit">Enviar producto</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddProduct",

  data() {
    return {
      newProduct: {
        SKU: "",
        code: "",
        name: "",
        description: "",
        pictures: [],
        price: "",
        currency: "",
      },
    };
  },
  methods: {
    goBack() {
      window.history.back();
    },
    addPicture() {
      this.newProduct.pictures.push("");
    },
    async submitForm() {
      try {
        const bearertoken = localStorage.getItem("Authorization");
        const { data } = await axios.post(
          "http://vps.churrasco.digital:3005/addproduct",
          this.newProduct,
          {
            headers: {
              Authorization: `Bearer ${bearertoken}`,
            },
          }
        );

        alert("Producto agregado exitosamente.");
        this.newProduct = {
          SKU: "",
          code: "",
          name: "",
          description: "",
          pictures: [],
          price: "",
          currency: "",
          //   __v: "",
        };
      } catch (error) {
        alert(`Error al agregar producto: ${error.message}`);
      }
    },
  },
};
</script>

<style scoped>
.back-button {
  display: flex;
  align-items: center;
  margin: 5% 0 0 5%;
  border-radius: 10px;
  color: rgb(87, 57, 169);
}
.icon-back {
  width: 30px;
  height: 30px;
  margin-right: 7px;
}
.add-images {
  display: flex;
  width: 100%;
  margin-top: 27px;
  align-items: center;
  justify-content: space-between;
}
.input-add-img {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;
}
.container-main {
  display: flex;
  width: 900px;
  background-color: white;
  border-radius: 25px;
  margin: 5% 0 5%;
}
.title {
  display: flex;
  font-family: "Montserrat", sans-serif;
  color: rgb(87, 57, 169);
  margin-top: 20px;
  margin-left: 5%;
}
.sub-title {
  display: flex;
  font-family: "Montserrat", sans-serif;
  font-size: 17px;
  color: rgba(61, 48, 93, 0.712);
  margin-top: 7px;
  margin-left: 5%;
}
.title-add {
  display: flex;
  font-size: 25px;
  font-family: "Montserrat", sans-serif;
  color: rgba(45, 23, 102, 0.623);
}
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 2% 5%;
}
.input-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
}
.button-container {
  display: flex;
  align-items: center;
  margin-bottom: 1%;
}
.form-group {
  display: flex;
  width: 100%;
  color: whitesmoke;
  gap: 20px;
  align-items: center;
}

.group {
  display: flex;
  width: 100%;
  gap: 20px;
}
label {
  display: block;
  font-weight: bold;
}
input[type="text"],
textarea,
input[type="number"] {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ffffff;
  border-radius: 4px;
  background-color: rgba(77, 57, 115, 0.177);
  border-radius: 10px;
}

.button-send {
  display: flex;
  width: 157px;
  height: 50px;
  display: inline-block;
  background-color: rgba(63, 14, 88, 0.611);
  border-radius: 17px;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}

.button-send:hover {
  background-color: #a689c52f;
}

.button-send:active {
  background-color: #5e249582;
}
.button-add-img {
  display: flex;
  width: 160px;
  height: 35px;
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.611);
  border-radius: 17px;
  border: rgba(104, 26, 125, 0.485) solid 3px;
  color: #6b2bb088;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}

.button-add-img:hover {
  background-color: #a384c432;
}

.button-add-img:active {
  background-color: #9263be82;
}
</style>
