<template>
    <div class="main">
        <div class="r1">
            <img src="../assets/redcardinal.png">
        </div>
        <div class="r2">
            <h2>At Fairlight Ventures, we want to make a difference, <br>
                we're not satisfied until we've helped our clients achieve their goals <br>
                and make a positive impact on the world.</h2>
        </div>
        <div class="r3">
            <router-link to="/services" class="but">
                <Button label="Discover Our Services" primary :to="{ path: '/contact'}" :class="'storybook-button--secondary'"/>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import Button from './Storybook/Button.vue';
</script>

<style>
.main {
    color: black;
}

.r1 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
}

.r1 img {
    width: 100px;
}

.r2 {
    display: flex;
    justify-content: center;
    align-items: center;
}

.r2 h2 {
    font-family: "TT";
    font-size: 40px;
    text-align: center;
}

.r3 {
    padding-top: 50px;
    padding-bottom: 100px;
}
.but {
    text-decoration: none;
}


@font-face {
  font-family: 'TT';
  src: url('../assets/fonts/src/assets/fonts/Old_Standard_TT/OldStandardTT-Regular.ttf') format('truetype');
  /* add additional file formats here */
  font-weight: lighter;
  font-style: italic;
}


</style>