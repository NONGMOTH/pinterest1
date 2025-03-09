import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ImageView from './views/ImageView.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/image/:id', component: ImageView, name: 'image' } // ชื่อ 'image' ใช้ใน goToImage
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
