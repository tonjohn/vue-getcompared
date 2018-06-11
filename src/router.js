import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Mortgages from "./views/MortgagesView.vue";
import About from "./views/About.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Mortgages
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/mortgages",
      name: "mortgages",
      component: Mortgages
    }
  ]
});
