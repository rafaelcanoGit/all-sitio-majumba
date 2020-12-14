import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./vuetify";
import axios from 'axios'

Vue.config.productionTip = false;

Vue.use(axios)
import './assets/css/ckeditor5.css';
require('@/assets/css/ckeditor5.css');
//require('@/../dist/css/ckeditor5.css');

Vue.component("HelloWorld", require("./components/HelloWorld.vue").default);
Vue.component("Footer", require("./views/Footer.vue").default);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
