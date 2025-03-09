import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/Intro_project/',  // ต้องมี "/" นำหน้า
});
