import { createRouter, createWebHistory } from 'vue-router';

import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import NewsView from '../views/NewsView.vue';
import PostsView from '../views/PostsView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
    { path: '/login', name: 'login', component: LoginView },
    { path: '/register', name: 'register', component: RegisterView },
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/news', name: 'news', component: NewsView },
    { path: '/posts', name: 'posts', component: PostsView },
    { path: '/contact', name: 'contact', component: ContactView },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
