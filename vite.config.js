import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: 'Intro_project', // เปลี่ยนเป็นชื่อ Repository ของคุณ
});
