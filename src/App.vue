<template>
  <!-- ใส่ SearchBar ที่ติดขอบบน -->
  <SearchBar />
  
  <!-- ใส่ Sidebar ที่ติดขอบซ้าย -->
  <Sidebar />

  <!-- ใช้ <router-view> เพื่อให้แสดงหน้า HomeView หรือ ImageView ตามเส้นทาง -->
  <router-view></router-view> <!-- แสดงหน้าแยกต่างหากตามเส้นทาง -->
</template>

<script setup>
// นำเข้า SearchBar, Sidebar, และ HomeView (ถ้ายังต้องการแสดงใน App.vue)
import Sidebar    from './components/Sidebar.vue'
import SearchBar  from './components/SearchBar.vue'
</script>

<style scoped>
/* เพิ่มพื้นที่ให้เนื้อหาเพื่อไม่ให้ถูก SearchBar และ Sidebar ทับ */
.content {
  /* ปรับพื้นที่ทางซ้ายให้หลบ Sidebar */
  padding-top: 80px;   /* ปรับพื้นที่ด้านบนให้หลบ SearchBar */
  transition: padding-left 0.3s ease, padding-top 0.3s ease;
}
</style>


