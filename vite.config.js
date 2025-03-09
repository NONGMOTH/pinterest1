import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/Intro_project/', // ตั้งค่า base path ให้ตรงกับชื่อ repository ของคุณ
});
