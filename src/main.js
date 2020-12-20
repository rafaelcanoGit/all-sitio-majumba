import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./vuetify";
import axios from 'axios'
import lineClamp from 'vue-line-clamp'

Vue.use(lineClamp)
Vue.config.productionTip = false;

Vue.use(axios)
require('@/assets/css/ckeditor5.css');
require('@/assets/css/vue-navigation-bar.css');

Vue.component("HelloWorld", require("./components/HelloWorld.vue").default);
Vue.component("Footer", require("./views/Footer.vue").default);
Vue.component("error-404", require("./components/Error404.vue").default);
Vue.component("dialogo", require("./components/Dialogo.vue").default);

const moment = require('moment')
require('moment/locale/es')
Vue.use(require('vue-moment'), {
  moment
})


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
