import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Dashboard from "./views/Dashboard.vue";
import AddService from "./views/AddService.vue";
import Callback from "./views/Callback.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/add-service",
      name: "add-service",
      component: AddService
    },
    {
      path: "/callback",
      name: "callback",
      component: Callback
    },
    {
      path: "/privacy",
      name: "privacy",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "privacy" */ "./views/Privacy.vue")
    },
    {
      path: "/terms",
      name: "terms",
      component: () => import(/* webpackChunkName: "terms" */ "./views/Terms.vue")
    },
    {
      path: "*",
      redirect: '/'
    }
  ]
});
