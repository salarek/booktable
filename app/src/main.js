import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./components/Home/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
const routes = [
  { path: "/", component: Home },
  { path: "/signup", component: Signup },
  { path: "/login", component: Login },
];
const router = new VueRouter({
  mode: "history",
  routes,
});
new Vue({
  el: "#app",
  router,
  render: (h) => {
    return h(App);
  },
});
