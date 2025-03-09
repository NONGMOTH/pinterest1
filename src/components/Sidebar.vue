<template>
    <div class="sidebar">
        <!-- Logo -->
        <div class="mb-6 logo-container" @click="goToHome">
            <img src="/Pinterestlogo.png" alt="Logo" class="w-2 h-2" style="width: 52px; height: 36px; padding-top: 20px; padding-left: 10px;" />
        </div>
        <!-- Menu Icons -->
        <nav class="space-y-6">
            <button v-for="(item, index) in menuItems" :key="index" class="block p-2 rounded-lg text-center mb-4">
                <img :src="item.icon" :alt="item.name" class="w-2 h-2 mx-auto" style="width: 24px; height: 24px;" />
            </button>
        </nav>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const menuItems = [
    { name: "Home", icon: "home.png" },
    { name: "Add", icon: "add.png" },
    { name: "Notifications", icon: "Noti.png" },
    { name: "Messages", icon: "msg.png" },
];

const goToHome = () => {
    router.push('/');
};
</script>

<style scoped>
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 80px; /* ขนาดคงที่ของ Sidebar */
    background-color: white;
    box-shadow: 4px 0 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    /* ไม่ใช้ transform ใน hover เพื่อไม่ให้ sidebar ขยาย */
}

/* เพิ่ม cursor: pointer ให้กับโลโก้ */
.logo-container {
    cursor: pointer;
}

button {
    margin-left: 15px;
    margin-top: 35px;
    background-color: white;
    border: none;
    outline: none;
    display: flex;
    justify-content: center; /* จัดให้อยู่กลางในแนวนอน */
    align-items: center; /* จัดให้อยู่กลางในแนวตั้ง */
}

button img {
    width: 24px; /* ขนาดของรูปภาพ */
    height: 24px; /* ขนาดของรูปภาพ */
}
</style>