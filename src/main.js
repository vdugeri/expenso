import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import DateTime from "vue-datetime";
import "vue-datetime/dist/vue-datetime.css";
import VueSVGIcon from "vue-svgicon";

Vue.use(VueSVGIcon);

Vue.config.productionTip = false;

Vue.use(DateTime);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
