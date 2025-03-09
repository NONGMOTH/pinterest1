import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/pinterest1', // ตั้งค่า base path ให้ตรงกับชื่อ repository ของคุณ
});
