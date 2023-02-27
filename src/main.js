import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router";
import { createVuetify } from "vuetify";

import "vuetify/dist/vuetify.css";

const vuetify = createVuetify({
  icons: {
    iconfont: "mdiSvg", // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
});

var token = localStorage.getItem("token");
if (token) axios.defaults.headers.common["Authorization"] = "Bearer " + token;

createApp(App).use(router).use(VueAxios, axios).use(vuetify).mount("#app");
