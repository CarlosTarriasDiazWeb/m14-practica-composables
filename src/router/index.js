import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Post from "../views/Post.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/post/:id", name: "Post", component: Post, props: route => ({ ...route.params, id: route.params.id }) },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
