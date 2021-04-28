import Vue from "vue";
import VueRouter from "vue-router";

import Calendario from "../components/Calendario.vue";
import HelloWorld from "../components/HelloWorld.vue";
import LandingPage from "../components/LandingPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/calendario",
    name: "calendario",
    component: Calendario,
  },
  {
    path: "/helloWorld",
    name: "HelloWorld",
    component: HelloWorld,
  },
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
