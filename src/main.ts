import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import { useAuth } from './auth.ts'

const auth = useAuth();

const app = createApp(App);

app.use(router);
app.provide('auth', auth);
app.use(ElementPlus);

app.mount('#app');
