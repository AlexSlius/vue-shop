import { createRouter, createWebHistory } from 'vue-router';

// pages
import HomePage from '@/pages/Home.vue';
import AboutPage from '@/pages/About.vue';
import CataloglllPage from '@/pages/CatalogAll.vue';
import CatalogCategory from "@/pages/CatalogCategory.vue";
import ErrorPage from '@/pages/404.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/catalog',
      name: 'catalogAll',
      component: CataloglllPage,
    },
    {
      path: '/catalog/:id',
      component: CatalogCategory,
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: ErrorPage
    },
  ]
})

export default router
