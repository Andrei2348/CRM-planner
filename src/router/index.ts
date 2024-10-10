import { createRouter, createWebHistory } from "vue-router";
import { RouteNamesEnum } from "@/router/router.types";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: RouteNamesEnum.home,
      component: () => import("@/views/One.vue"),
    },
    {
      path: "/one",
      name: RouteNamesEnum.one,
      component: () => import("@/views/One.vue"),
    },
    {
      path: "/two",
      name: RouteNamesEnum.two,
      component: () => import("@/views/Two.vue"),
    },
    {
      path: "/three",
      name: RouteNamesEnum.three,
      component: () => import("@/views/Three.vue"),
    },
    {
      path: "/four",
      name: RouteNamesEnum.four,
      component: () => import("@/views/Four.vue"),
    },
    {
      path: "/five",
      name: RouteNamesEnum.five,
      component: () => import("@/views/Five.vue"),
    },
    {
      path: "/six",
      name: RouteNamesEnum.six,
      component: () => import("@/views/Six.vue"),
    },
  ],
});

export default router;
