import { createRouter, createWebHashHistory  } from "vue-router";
import HomeView from '../views/HomeView/HomeView.vue'

export const router = createRouter({
  history: createWebHashHistory (),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/projects",
      name: "ProjectsView",
      component: () => import("@/views/ProjectsView/ProjectsView.vue"),
    },
    {
      path: "/about",
      name: "AboutView",
      component: () => import("@/views/AboutView/AboutView.vue"),
    },
    {
      path: "/contacts",
      name: "ContactsView",
      component: () => import("@/views/ContactsView/ContactsView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/views/NotFound/NotFound.vue"),
    },
  ],
});