<template>
    <div class="main">
        <div class="video-bg">
            <video autoplay muted loop>
                <source src="../assets/City.mp4" type="video/mp4">
            </video>
        </div>
        <div class="text">
            <h1><span>Our mission:</span> <br>
                to empower entrepreneurs and innovators <br>
                to solve the world's most pressing problems.
            </h1>
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

video {
    height: 500px;
    width: 100%;
    object-fit: cover;
}

.text {
    position: absolute;
    top: 15%;
    padding-left: 30px;
}

.text h1, span {
    color: whitesmoke;
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
    bottom: 20%;
    left: 30px;
}


</style>