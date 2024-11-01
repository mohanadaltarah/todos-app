import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("@/views/HomeView.vue"),
    meta: {
      title: "Home Page",
    },
  },
  {
    name: "ShowTodos",
    path: "/show-todos",
    component: () => import("@/views/ShowTodos.vue"),
    meta: {
      title: "Show Todos",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router;
