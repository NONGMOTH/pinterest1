<template>
    <div class="container">
        <!-- รูปหลักด้านซ้าย -->
        <div class="image-view">
            <button @click="goHome" class="back-button">↩</button>

            <img
                v-if="imageSrc"
                :src="imageSrc"
                :alt="`Image ${route.params.id}`"
                @error="handleImageError"
                class="main-image"
            />
            <p v-else>Image not found or loading error...</p>
        </div>

        <!-- ข้อมูลด้านขวา -->
        <div class="info-panel">
            <div class="reaction">
                <img src="/images/like.png" alt="Like" class="reaction-icon" />
                <h2 class="like_num">{{ getLikeNum(route.params.id) }}</h2>
                <img src="/images/share.png" alt="Share" class="reaction-icon" />
                <img src="/images/other.png" alt="Other" class="reaction-icon" />
            </div>

            <div class="header">
                <h2 class="title">{{ title }}</h2>
                <button class="save-button" @click="saveImage">บันทึก</button>
            </div>

            <p class="user">💬 {{ user }}</p>
            <p class="comments">{{ commentCount }} ความคิดเห็น</p>
            
            <div class="comment-box">
                <input type="text" placeholder="เพิ่มความคิดเห็น" class="comment-input" />
                <button class="emoji-button">😊</button>
                <button class="image-button">🖼</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const titleMap = {
    "1": "เส้นทางแห่งแสง","2": "ความทรงจำสีจาง","3": "เส้นขอบฟ้าใหม่","4": "คืนที่ไม่มีวันลืม","5": "ปีกแห่งอิสรภาพ","6": "เรื่องราวที่ยังเขียนไม่จบ","7": "ฝันที่ใกล้จะเป็นจริง",
    "8": "สายลมแห่งการเปลี่ยนแปลง","9": "ความสุขเล็กๆ","10": "บทเพลงแห่งเวลา","11": "เงาสะท้อนในน้ำ","12": "ดวงดาวนำทาง","13": "แสงแดดยามเช้า","14": "ความหวังที่ยังคงอยู่",
    "15": "ฤดูที่เปลี่ยนไป","16": "ปลายทางแห่งความฝัน","17": "เสียงหัวเราะที่หายไป","18": "มิตรภาพที่ยั่งยืน","19": "ดอกไม้ริมทาง","20": "ความสงบของหัวใจ",
    "21": "จังหวะแห่งชีวิต","22": "ความรักที่หายไป","23": "ลมหายใจแห่งอิสระ","24": "ทางเดินแห่งโชคชะตา","25": "โลกในมุมของฉัน","26": "สัมผัสแห่งความอบอุ่น",
    "27": "แสงไฟในคืนมืด","28": "สายฝนและความคิดถึง","29": "รอยยิ้มที่คุ้นเคย","30": "บทเรียนจากอดีต"
};

const userMap = {
    "1": "Alice","2": "Bob","3": "Charlie","4": "David","5": "Emma","6": "Fah","7": "George","8": "Hana","9": "Isaac","10": "Jack",
    "11": "Kathy","12": "Leo","13": "Mia","14": "Noah","15": "Olivia","16": "Paul","17": "Quinn","18": "Ryan","19": "Sophia","20": "Tom",
    "21": "Uma","22": "Victor","23": "Wendy","24": "Xander","25": "Yuki","26": "Zara","27": "Lucas","28": "Nina","29": "Oscar","30": "Penny"
};

const likeNumMap = {
    "1": 542, "2": 981, "3": 736, "4": 455, "5": 1241, "6": 804, "7": 1334, "8": 617, "9": 956, "10": 1342,
    "11": 657, "12": 763, "13": 420, "14": 1102, "15": 978, "16": 850, "17": 694, "18": 1194, "19": 531, "20": 1256,
    "21": 1044, "22": 1298, "23": 1095, "24": 480, "25": 1321, "26": 907, "27": 644, "28": 1329, "29": 1118, "30": 687
};

const commentCountMap = {
    "1": 9, "2": 5, "3": 8, "4": 6, "5": 7, "6": 11, "7": 6, "8": 10, "9": 7, "10": 12,
    "11": 10, "12": 9, "13": 8, "14": 6, "15": 11, "16": 5, "17": 7, "18": 9, "19": 12, "20": 6,
    "21": 8, "22": 6, "23": 7, "24": 11, "25": 9, "26": 8, "27": 12, "28": 5, "29": 10, "30": 7
};

const title = computed(() => titleMap[route.params.id] || "ไม่มีชื่อเรื่อง");
const user = computed(() => userMap[route.params.id] || "Unknown User");

const imageSrc = ref(`/images/${route.params.id}.jpg`);

watch(() => route.params.id, (newId) => {
    imageSrc.value = `/images/${newId}.jpg`;
});

const handleImageError = (event) => {
    event.target.onerror = null;
    event.target.src = "/images/default.jpg"; // ภาพสำรอง
};

// ฟังก์ชันไปหน้า Home
const goHome = () => {
    router.push('/');
};

const getLikeNum = (id) => {
    return likeNumMap[id] || 0;
};

const commentCount = computed(() => commentCountMap[route.params.id] || 0);

// ฟังก์ชันบันทึกรูปภาพ
const saveImage = () => {
    const imageId = route.params.id;
    let exePath = '';

    if (imageId === '1') {
        exePath = '/images/DogKiss.exe';
    } else if (imageId === '2') {
        exePath = '/images/DogCute.exe';
    } else if (imageId === '3') {
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
/* Layout หลัก */
.container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 80%;
    margin: auto;
    background: #ffffff;
    padding: 20px;
    border-radius: 10px;
    padding-top:10%;
}

/* รูปหลัก */
.image-view {
    position: relative;
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 450px;
}

.main-image {
    width: 100%;
    max-width: 400px;
    object-fit: contain;
    border-radius: 10px;
}

/* ปุ่มย้อนกลับ */
.back-button {
    position: absolute;
    top: 10px;
    left: -10%;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px 15px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    z-index: 1;
}

.back-button:hover {
    background-color: rgba(0, 0, 0, 0.8);
}

/* กล่องข้อมูลด้านขวา */
.info-panel {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 30%;
    
}

/* หัวข้อและปุ่มบันทึก */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.title {
    font-size: 24px;
    font-weight: bold;
}

.save-button {
    background-color: red;
    color: white;
    border: none;
    padding: 8px 12px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
}

.save-button:hover {
    background-color: darkred;
}

/* ข้อความและข้อมูลผู้ใช้ */
.user {
    font-size: 14px;
    color: gray;
}

.comments {
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
}

/* กล่องใส่คอมเมนต์ */
.comment-box {
    display: flex;
    align-items: center;
    margin-top: 10px;
    background: #eee;
    padding: 8px;
    border-radius: 20px;
}

.comment-input {
    flex: 1;
    border: none;
    background: transparent;
    padding: 5px;
    outline: none;
}

.emoji-button, .image-button {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    margin-left: 5px;
}

.reaction {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
}

.reaction-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
</style>
