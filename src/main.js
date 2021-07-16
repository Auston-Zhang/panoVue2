import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import '@aws-amplify/ui-vue';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
