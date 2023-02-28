<template>
    <div class="main-container">
        <video autoplay loop muted poster="../assets/HomeBackground.jpg" id="video-background">
            <source src="../assets/video.mp4" type="video/mp4">
        </video>
        <h1>Venture Partners</h1>
        <div class="row">
            <img src="../assets/circle-png.webp" alt="1">
            <img src="../assets/circle-png.webp" alt="2">
            <img src="../assets/circle-png.webp" alt="3">
            <img src="../assets/circle-png.webp" alt="4">
            <img src="../assets/circle-png.webp" alt="5">
        </div>
        <div class="row">
            <h3>Hello</h3>
            <h3>Hello</h3>  
            <h3>Hello</h3>  
            <h3>Hello</h3>  
            <h3>Hello</h3>            
        </div>
        <h1>Venture Builders</h1>
        <div class="row">
            <img src="../assets/circle-png.webp" alt="1">
            <img src="../assets/circle-png.webp" alt="2">
            <img src="../assets/circle-png.webp" alt="3">
            <img src="../assets/circle-png.webp" alt="4">
            <img src="../assets/circle-png.webp" alt="5">
        </div>
        <div class="row">
            <h3>Hello</h3>
            <h3>Hello</h3>  
            <h3>Hello</h3>  
            <h3>Hello</h3>  
            <h3>Hello</h3>            
        </div>
    </div>
</template>

<script setup>
import Button from './Button.vue';
</script>

<style scoped>
.main-container {
    color: #E9EAEC;
    position: relative;
}
#video-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}
.main-container h1 {
    display: flex;
    justify-content: center;
    padding-bottom: 40px;
    padding-top: 30px;
    font-size: 22px;
    text-shadow: 1px 1px 1px #000, 1px -1px 1px #000, -1px 1px 1px #000, -1px -1px 1px #000;
}
.row {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 150px;
    padding-right: 150px;
    background-color: transparent;
    color: #e9e9e9;
}
.row img {
    width: 100px;
}

.row h3 {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
}
</style>