import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path: '/',
        name: 'home',
        component: () => import("@/views/PageAccueil.vue"),
      },
      {
        path: '/expositionun',
        name: 'expositionun.liste',
        component: () => import("@/views/PageExpositionUn.vue"),
      },
      {
        path: '/expositiondeux',
        name: 'expositiondeux',
        component: () => import("@/views/PageExpositionDeux.vue"),
      },
      {
        path: '/oeuvre/:id',
        name: 'oeuvre.details',
        component: () => import("@/views/PageDetailsOeuvresUn.vue"),
      }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
