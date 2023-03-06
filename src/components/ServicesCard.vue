<template>
    <div class="main">
        <div class="video-bg">
            <video autoplay muted loop>
                <source src="../assets/RedWorld.mp4" type="video/mp4">
            </video>
        </div>
        <div class="text">
            <font-awesome-icon class="icon" icon="fa-microchip"/>
            <font-awesome-icon class="icon" icon="fa-seedling" />
            <font-awesome-icon class="icon" icon="fa-crown" />
            <font-awesome-icon class="icon" icon="fa-network-wired" />
        </div>
        <div class="text1">
            <h1>Investment</h1>
            <h1>Advisory</h1>
            <h1>Consulting</h1>
            <h1>Public Engagements</h1>
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
    background: linear-gradient(135deg, #e4e4e4, #9b9b9b, #e4e4e4);
}
video {
    height: 500px;
    width: 100%;
    object-fit: cover;
}

.text {
    position: absolute;
    top: 15%;
    left: 20%;
}

.text1 {
    position: absolute;
    top: 35%;
    left: 20%;
}

.text1 h1 {
    color: whitesmoke;
    display: inline-block;
    justify-content: space-evenly;
    padding-left: 75px;
    padding-right: 80px;
}

.icon {
    color: whitesmoke;
    font-size: 70px;
    display: inline-block;
    justify-content: space-evenly;
    padding-left: 100px;
    padding-right: 100px;
}
.But {
    position: absolute;
    bottom: 20%;
    left: 45%;
}


</style>