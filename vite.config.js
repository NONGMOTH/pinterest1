import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/Intro_project/',  // กำหนด base path ให้ตรงกับชื่อ repository ของคุณ
});
