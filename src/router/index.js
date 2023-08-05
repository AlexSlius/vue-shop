import { createRouter, createWebHistory } from 'vue-router';

// pages
import HomePage from '@/pages/Home.vue';
import AboutPage from '@/pages/About.vue';
import CataloglllPage from '@/pages/CatalogAll.vue';
import CatalogCategory from "@/pages/CatalogCategory.vue";
import ContactPage from "@/pages/Contact.vue";
import NewsPage from "@/pages/News.vue";
import NewPage from "@/pages/New.vue";
import BaskedPage from "@/pages/Basked.vue";
import CardPage from "@/pages/Card.vue";
import YeyProtection from "@/pages/YeyProtection.vue";
import YeyCarePage from "@/pages/YeyCare.vue";
import InfoSportPage from "@/pages/InfoSport.vue";
import InfoSunPage from "@/pages/InfoSun.vue";
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
      path: "/contact",
      component: ContactPage,
    },
    {
      path: "/news",
      component: NewsPage,
    },
    {
      path: "/news/:id",
      component: NewPage,
    },
    {
      path: "/basked",
      component: BaskedPage
    },
    {
      path: "/card/:id",
      component: CardPage
    },
    {
      path: '/yey-protection',
      component: YeyProtection,
    },
    {
      path: '/yey-care',
      component: YeyCarePage,
    },
    {
      path: '/info-sport',
      component: InfoSportPage,
    },
    {
      path: '/info-sun',
      component: InfoSunPage,
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: ErrorPage
    },
  ]
})

export default router
