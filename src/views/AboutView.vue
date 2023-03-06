<template>
    <div class="main">
        <AboutCard/>
        <InvestIn/>
        <AboutTwo/>
        <About3/>
        <Partners/>
        <Footer/>
    </div>  
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
    background-color: white;
}

</style>