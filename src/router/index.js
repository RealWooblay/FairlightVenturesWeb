import { createRouter, createWebHistory } from "vue-router"

import HomeView from "../views/HomeView.vue";
import PrivacyView from "../views/PrivacyView.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: HomeView,
        },
        {
          path: "/privacy",
          component: PrivacyView,
      },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
          return {
            el: to.hash,
            behavior: 'smooth',
          }
        }
      }
})

export default router