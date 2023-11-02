import {
  createRouter,
  createWebHistory
} from "vue-router";
import HomeView from '../views/HomeView/HomeView.vue'
export const router = createRouter({
  history: createWebHistory(),
  routes: [{
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
  ],
});