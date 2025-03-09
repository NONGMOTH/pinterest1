import { createRouter, createWebHashHistory } from 'vue-router'; // ใช้ createWebHashHistory
import HomeView from './views/HomeView.vue';
import ImageView from './views/ImageView.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/image/:id', component: ImageView, name: 'image' }
];

const router = createRouter({
    history: createWebHashHistory(), // ใช้ Hash Mode
    routes
});

export default router;
