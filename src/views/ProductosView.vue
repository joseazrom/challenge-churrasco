<template>
  <div class="container-main">
    <TopBar />
    <div class="topbar-interno">
      <h1 class="title">NUESTROS PRODUCTOS</h1>
      <AddProductBtn />
    </div>
    <div class="product-grid">
      <div
        v-for="(product, index) in products"
        :key="product._id"
        class="product-card"
      >
        <img
          :src="getProductPicture(product)"
          :alt="product.name"
          class="product-image"
        />
        <h2 class="product-name">{{ product.name }}</h2>
        <p class="product-description">{{ product.description }}</p>
        <p class="product-price">{{ product.currency }} {{ product.price }}</p>
        <div class="container-code mt-8">
          <p class="product-code">
            SKU: {{ product.SKU }} | Code: {{ product.code }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TopBar from "../components/TopBar.vue";
import AddProductBtn from "../components/Buttons/AddProductBtn.vue";

export default {
  components: {
    TopBar,
    AddProductBtn,
  },
  async mounted() {
    const bearertoken = localStorage.getItem("Authorization");
    const { data } = await this.axios.get(
      "http://vps.churrasco.digital:3005/products",
      {
        headers: {
          Authorization: `Bearer ${bearertoken}`,
        },
      }
    );
    this.products = data.reverse();

    this.currentIndexByProduct = {};
    this.products.forEach((product, index) => {
      if (product.pictures.length > 1) {
        this.currentIndexByProduct[product._id] = 0;
        setInterval(() => {
          this.currentIndexByProduct[product._id] =
            (this.currentIndexByProduct[product._id] + 1) %
            product.pictures.length;
        }, 2500);
      }
    });
  },
  data() {
    return {
      products: [],
      currentIndexByProduct: {},
    };
  },
  methods: {
    getProductPicture(product) {
      if (product.pictures.length === 1) {
        return product.pictures[0];
      } else {
        return product.pictures[this.currentIndexByProduct[product._id]];
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap");
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,800");
.container-main {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 0px;
  margin-left: 5%;
  margin-right: 5%;
}
.topbar-interno {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2.5%;
}
.title {
  font-family: "Montserrat", sans-serif;
  font-size: 47px;
  color: white;
}
.btn-logout {
  display: flex;
  color: white;
  font-size: 25px;
  font-family: "Montserrat", sans-serif;
}
.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product-card {
  display: flex;
  width: 28.1%;
  height: 440px;
  flex-direction: column;
  align-items: flex-start;
  margin: 40px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 25px;
  box-shadow: 0px 4px 7px rgba(246, 246, 246, 0.3);
  transition: all 0.3s ease-in-out;
  background-color: white;
}

.product-card:hover {
  transform: translateY(-15px);
  box-shadow: 0px 5px 10px rgba(255, 255, 255, 0.5);
}

.product-image {
  width: 100%;
  max-height: 190px;
  object-fit: cover;
  margin-top: 0px;
  margin-bottom: 20px;
  border-radius: 25px;
  box-shadow: 3px 3px 3px rgba(83, 80, 89, 0.64);
}

.product-name {
  margin: 0;
  font-family: "Sora", sans-serif;
  font-size: 21px;
  font-weight: bold;
  text-align: center;
}

.product-description {
  font-family: "Sora", sans-serif;
  margin: 5px 0;
  height: 50px;
  font-size: 15px;
  text-align: center;
}

.product-price {
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
  color: #e91e1e;
}
.container-code {
  display: flex;
  width: 100%;
  margin-top: 15px;
  justify-content: end;
}
.product-code {
  font-family: "Pathway Gothic One", sans-serif;
  margin: 5px 0;
  font-size: 12px;
  font-weight: bold;
  color: #4949499e;
}

.add-to-cart {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #7926a6;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.add-to-cart:hover {
  background-color: #561796;
}
</style>
