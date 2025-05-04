import { createRouter, createWebHistory } from 'vue-router';

import { useAuth } from '../auth.ts';
import AuthView from '../views/AuthView.vue';
import HomeView from '../views/HomeView.vue';
import DashboardView from '../views/DashboardView.vue';
import AboutView from '../views/AboutView.vue';
import NewsView from '../views/NewsView.vue';
import PostsView from '../views/PostsView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  { path: '/auth', name: 'auth', component: AuthView },
  { path: '/', name: 'home', component: HomeView },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/news', name: 'news', component: NewsView },
  { path: '/posts', name: 'posts', component: PostsView },
  { path: '/contact', name: 'contact', component: ContactView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  const { isAuthenticated } = useAuth();
  if (to.meta.auth && !isAuthenticated.value) {
    next('/auth');
  } else {
    next();
  }
});

export default router;
