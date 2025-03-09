<!-- components/SearchBar.vue -->
<template>
    <div class="search-container">
        <!-- Search Bar -->
        <div class="search-bar">
            <input
                type="text"
                v-model="searchQuery"
                class="search-input"
                placeholder="Search..."
            />
        </div>

        <!-- เมนูตัวเลือกด้านล่าง -->
        <div class="menu-bar">
            <button class="menu-item active">ทั้งหมด</button>
            <button class="menu-item">สถานที่ที่อยากไป</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const searchQuery = ref('')
</script>

<style scoped>
.search-container {
    border-bottom: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    box-shadow: none;
    z-index: 1000;
}

/* Search Bar */
.search-bar {
    border-bottom: none;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.search-input {
    border-bottom: none;    
    width: 50%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
    outline: none;
    box-shadow:none;
}

.search-input:focus {
    border-color: #007bff;
}

/* เมนูด้านล่าง */
.menu-bar {
    display: flex;
    justify-content: flex-start; /* ชิดซ้าย */
    gap: 20px;
    padding: 10px 20px; /* เว้นขอบซ้าย */
    padding-left: 90px;
    padding-top: 35px;
}

.menu-item {
    background: none;
    border: none;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    padding: 5px 10px;
    color: #555;
}

.menu-item.active {
    border-bottom: 3px solid #000000;
    color: #000000;
}
</style>
