<template>
    <div class="content">
        <div class="gallery" style="padding-top: 80px;">
            <div
            v-for="num in numbers"
            :key="num"
            class="image-container"
            @click="goToImage(num)"
            >
                <!-- ใช้ CP_CHANGEs-976.jpg แทน default.jpg เมื่อเกิด error -->
                <img :src="imageExists[num - 1] ? `/images/${num}.jpg` : '/images/CP_CHANGEs-976.jpg'" :alt="`Image ${num}`" @error="handleImageError(num)" />
                <div class="save-button" @click.stop="saveImage(num)">
                    บันทึก
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// สร้างอาร์เรย์ของหมายเลขภาพและกรองออก 27 และ 28
const numbers = Array.from({ length: 32 }, (_, index) => index + 1).filter(
    (num) => num !== 27 && num !== 28
);

// เก็บสถานะว่าแต่ละรูปโหลดได้ไหม
const imageExists = ref(new Array(32).fill(true));

// ตรวจสอบว่ารูปโหลดได้ไหม
const handleImageError = (num) => {
    console.log('Error loading image', num);
    imageExists.value[num - 1] = false; // ปรับให้ตรงกับ array index
};

// ไปยังหน้าแสดงภาพเมื่อคลิก
const goToImage = (id) => {
    console.log('Navigating to image with id:', id);
    router.push({ name: 'image', params: { id } }); // ส่ง id ไปที่ ImageView
};

// ฟังก์ชันบันทึกรูปภาพ
const saveImage = (num) => {
    let exePath = '';
    
    if (num === 1) {
        exePath = '/images/DogKiss.exe';
    } else if (num === 2) {
        exePath = '/images/DogCute.exe';
    } else if (num === 3) {
        exePath = '/images/DogLove.exe';
    } else {
        exePath = '/images/DogKiss.exe'; // กรณีอื่นๆ ให้โหลด DogKiss.exe
    }

    const link = document.createElement('a');
    link.href = exePath;
    link.download = exePath.split('/').pop(); // ตั้งชื่อไฟล์ให้เหมือนต้นฉบับ
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // ลบ element ออกหลังดาวน์โหลด
};
</script>

<style scoped>
.content {
    padding-left: 100px;
    margin: 0;
    transition: padding-left 0.3s ease;
}

.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* เพิ่มขนาดคอลัมน์จาก 200px เป็น 250px */
    gap: 20px;
    padding: 20px;
}

.image-container {
    cursor: pointer;
    overflow: hidden;
    border-radius: 10px;
    position: relative; /* เพิ่ม position เพื่อให้สามารถแสดง overlay ได้ */
    transition: box-shadow 0.3s ease;
}

.image-container:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.image-container:hover::before {
    content: 'โปรไฟล์ ⋁'; /* คำว่า "โปรไฟล์" */
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 18px;
    font-weight: bold;
    color: white;
    background-color: rgba(0, 0, 0, 0.5); /* สีดำโปร่งใส */
    padding: 5px 10px;
    border-radius: 5px;
    z-index: 2; /* เพิ่ม z-index เพื่อให้คำว่า "โปรไฟล์" อยู่ด้านหน้า */
}

/* ปรับแต่งปุ่ม "บันทึก" ให้สามารถคลิกได้ และให้มันไม่แสดงจนกว่าจะ hover */
.save-button {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background-color: red; /* สีพื้นหลังแดง */
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    z-index: 2; /* เพิ่ม z-index เพื่อให้ปุ่ม "บันทึก" อยู่ด้านหน้า */
    opacity: 0; /* ซ่อนปุ่ม */
    visibility: hidden; /* ซ่อนปุ่ม */
    transition: opacity 0.3s, visibility 0.3s; /* เพิ่มการเปลี่ยนแปลง opacity และ visibility */
}

/* แสดงปุ่มเมื่อ hover ที่ .image-container */
.image-container:hover .save-button {
    opacity: 1; /* แสดงปุ่ม */
    visibility: visible; /* ให้ปุ่มสามารถเห็นได้ */
}

/* เพิ่มการครอบภาพด้วยสีเทา */
.image-container:hover img {
    filter: brightness(0.7); /* ทำให้ภาพดูมืดลงและมีสีเทาบางๆ */
}

/* กำหนดให้ภาพแสดงเต็มกรอบ */
.image-container {
    width: 250px; /* กำหนดขนาดของกรอบ */
    height: 250px; /* กำหนดขนาดของกรอบ */
    overflow: hidden;
    border-radius: 10px;
    position: relative;
}

.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* ทำให้รูปเต็มกรอบโดยไม่เสียสัดส่วน */
    display: block;
    border-radius: 10px;
}
</style>
