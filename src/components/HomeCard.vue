<template>
    <div class="main">
        <div class="video-bg">
            <video autoplay muted loop>
                <source src="../assets/whitetech.mp4" type="video/mp4">
            </video>
        </div>
        <div class="text">
            <h1>EMPOWERING INNOVATION AND DRIVING CHANGE
                <br><span> - TOGETHER</span></h1>
        </div>
        <div class="But">
            <router-link to="/contact">
                <Button class="button" label="Get in touch" primary :to="{ path: '/contact'}" style="display: inline-block" :class="'storybook-button--primary'"/>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import Button from '../components/Storybook/Button.vue';
</script>

<style scoped>

.main {
    background: linear-gradient(135deg, #ffffff, #e8e8e8, #ffffff);
}

video {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.text {
    position: absolute;
    top: 20%;
    padding-left: 30px;
}

.text h1, span {
    color: darkgrey;
    font-size: 55px;
    font-weight: bold;
    -webkit-text-stroke: 2px black;
    text-shadow: 0 0 2px black;
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
}
.text span {
    color: red;
}

.But {
    position: absolute;
    bottom: 30%;
    left: 30px;
}


</style>