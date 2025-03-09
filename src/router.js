import { createRouter, createWebHistory } from 'vue-router'; // ใช้ createWebHistory แทน createWebHashHistory
import HomeView from './views/HomeView.vue';
import ImageView from './views/ImageView.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/image/:id', component: ImageView, name: 'image' }
];

const router = createRouter({
    history: createWebHistory(), // ใช้ History Mode
    routes
});

export default router;
