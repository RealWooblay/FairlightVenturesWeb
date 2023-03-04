<template>
    <div class="main-container">
        <div class="info">
            <h1>We work with <span>entrepreneurs and innovators</span>
                <br>
                to solve the world’s <strong style="font-weight: bold;">most pressing problems.</strong>
                <br>
                From the early <span>founder journey,</span>
                <br>
                through scaling and capital raising,
                <br>
                <strong style="color:red; font-weight:normal">We have your back. </strong>
                <br>
            </h1>
            <router-link to="/contact" class="But">
                <Button label="Work with Us" primary :to="{ path: '/contact'}" style="display: inline-block" :class="'storybook-button--new'"/>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import Button from './Storybook/Button.vue';
</script>

<style>
.main-container {
    background: linear-gradient(135deg, #ffffff, #e8e8e8, #ffffff);
    color: rgb(112, 112, 112);
}

.info {
    font-size: 40px;
    padding: 50px;
}

.info h1 {
    font-weight: lighter;
    margin-bottom: 50px;
    line-height: 118px;
}

.info span {
    font-family: 'Playfair';
}

@font-face {
  font-family: 'Playfair';
  src: url('../assets/fonts/Playfair_Display/PlayfairDisplay-Italic-VariableFont_wght.ttf') format('truetype');
  /* add additional file formats here */
  font-weight: lighter;
  font-style: italic;
}
.info Button {
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 380px;
}

</style>