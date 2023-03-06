<template>
        <AboutCard/>
        <InvestIn/>
        <AboutTwo/>
        <About3/>
        <Partners/>
        <Footer/> 
</template>

<script setup>
import AboutCard from '../components/AboutCard.vue';
import InvestIn from '../components/InvestIn.vue';
import AboutTwo from '../components/AboutTwo.vue';
import About3 from '../components/About3.vue';
import Partners from '../components/Partners.vue';
import Footer from '../components/Footer.vue';

</script>

<style>

.main {
    background: linear-gradient(135deg, #ffffff, #e8e8e8, #ffffff);
}
@font-face {
  font-family: 'Bog';
  src: url('../assets/fonts/Bogart-Light-Italic-trial.ttf') format('truetype');
  /* add additional file formats here */
  font-weight: lighter;
  font-style: italic;
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
</style>
