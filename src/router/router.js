import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/main/index";

import menu1 from "@/views/menu1/index";
import menu2 from "@/views/menu2/index";
import test from "@/views/test";

Vue.use(Router);

export default new Router({
  mode: "history", // #제거
  routes: [
    {
      id: 0,
      path: "/",
      name: "Home",
      component: Home
    },
    {
      id: 1,
      path: "/menu1",
      name: "menu1",
      component: menu1
    },
    {
      id: 2,
      path: "/menu2",
      name: "menu2",
      component: menu2
    },
    {
      id: 3,
      path: "/test",
      name: "test",
      component: test
    }
  ]
});
