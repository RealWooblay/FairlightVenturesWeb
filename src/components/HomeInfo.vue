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
                <strong style="color:red; font-weight:normal; font-family: Bolds;">We have your back. </strong>
                <br>
            </h1>
            <router-link to="/contact" class="But">
                <Button class="bwt" label="Work with Us" primary :to="{ path: '/contact'}" style="display: inline-block" :class="'storybook-button--new'"/>
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
    color: rgb(51, 51, 51);
}

.info {
    font-size: 40px;
    padding: 50px;
}

.info h1 {
    font-weight: lighter;
    margin-bottom: 50px;
    line-height: 80px;
    font-family: 'Reg';
}

.info span {
    font-family: 'Bog';
}

@font-face {
  font-family: 'Bolds';
  src: url('../assets/fonts/TT_Chocolates_Trial_DemiBold.otf') format('truetype');
  /* add additional file formats here */
  font-weight: lighter;
  font-style: italic;
}

@font-face {
  font-family: 'Reg';
  src: url('../assets/fonts/TT_Chocolates_Trial_Light.otf') format('truetype');
  /* add additional file formats here */
  font-weight: lighter;
  font-style: italic;
}

@font-face {
  font-family: 'Bog';
  src: url('../assets/fonts/Bogart-Light-Italic-trial.ttf') format('truetype');
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

@media (max-width: 768px) {
    .info {
        font-size: 13px;
    }

    .info h1 {
        line-height: 54px;
        margin-bottom: 0px;
    }
    .info Button {
    left: 80px;
    }
    .info .bwt {
        font-size: 10px;
        padding: 15px;
        box-shadow: none;
    }
}

</style>