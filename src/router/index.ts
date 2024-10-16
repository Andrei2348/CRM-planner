import { createRouter, createWebHistory } from "vue-router";
import { RouteNamesEnum } from "@/router/router.types";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: RouteNamesEnum.home,
      component: () => import("@/views/MainComponent/MainComponent.vue"),
    },
    {
      path: "/login",
      name: RouteNamesEnum.one,
      component: () => import("@/views/LoginComponent/LoginComponent.vue"),
    },
  ],
});

export default router;
