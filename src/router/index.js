import { createRouter, createWebHistory } from 'vue-router';

// === Импортируем все страницы (views) ===
import Home from '../views/Home.vue';
import Marketplace from '../views/Marketplace.vue';
import Arena from '../views/Arena.vue';
import Mint from '../views/Mint.vue';
import DAO from '../views/DAO.vue';
import Profile from '../views/Profile.vue';
import About from '../views/About.vue';
import Contacts from '../views/Contacts.vue';
import Terms from '../views/Terms.vue';
import NotFound from '../views/NotFound.vue';

// === Определяем маршруты ===
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '🏯 BladeVerse | Главная' },
  },
  {
    path: '/marketplace',
    name: 'Marketplace',
    component: Marketplace,
    meta: { title: '🗡 Blade Market | BladeVerse' },
  },
  {
    path: '/arena',
    name: 'Arena',
    component: Arena,
    meta: { title: '⚔ Battle Arena | BladeVerse' },
  },
  {
    path: '/mint',
    name: 'Mint',
    component: Mint,
    meta: { title: '🔥 Forge Blade NFT | BladeVerse' },
  },
  {
    path: '/dao',
    name: 'DAO',
    component: DAO,
    meta: { title: '🏛 Council & Events | BladeVerse' },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { title: '👤 Pilot Deck | BladeVerse' },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: '📖 Chronicle | BladeVerse' },
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts,
    meta: { title: '📡 Comms | BladeVerse' },
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms,
    meta: { title: '📜 Protocols | BladeVerse' },
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
    meta: { title: '❌ Void | BladeVerse' },
  },
];

// === Создаём роутер ===
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // При смене маршрута всегда прокручиваем наверх
    return { top: 0 };
  },
});

// === Динамически меняем title страницы ===
router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = 'BladeVerse';
  }
});

export default router;
