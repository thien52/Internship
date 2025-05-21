<template>
    <el-container>
        <el-main  class="about-text">
            <el-text type="success">Đây là phần giới thiệu</el-text>
            <el-text type="info">tôi đang học và phát triển các dự án sử dụng Vue.js, Element Plus</el-text>
        </el-main>
    </el-container>
</template>

<script>
export default {
name: 'AboutPage'
}
</script>

<style scoped>
.about-text{
    padding: 20px;
    font-size: 20px;
    display: flex;
    justify-content:  center;
    flex-direction: column;
     gap: 10px;
}

</style>