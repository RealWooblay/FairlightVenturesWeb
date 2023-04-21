<template>
    <div class="main">

        <!-- MAIN SECTION -->

        <HomeInfo/>


        <PortfolioTrain/>

        <!-- ABOUT SECTION -->

        <div class="about" id="about">

          <Team/>

        </div>


        <!-- SERVICE SECTION -->

        <div class="services" id="service">

          <Services/>

        </div>

                <!-- CONTACT SECTION -->

        <ContactForm id="contact"/>


        <Footer/>



    </div>
</template>

<script>
import HomeInfo from '../components/HomeInfo.vue';
import PortfolioTrain from '../components/PortfolioTrain.vue';


import Team from '../components/Team.vue';


import Services from '../components/Services.vue';


import ContactForm from '../components/ContactForm.vue'
import Footer from '../components/Footer.vue';

export default {
  name: 'HomeView',
  components: {
    HomeInfo,

    Team,
    PortfolioTrain,

    Services,

    ContactForm,
    Footer,

  },
}
</script>