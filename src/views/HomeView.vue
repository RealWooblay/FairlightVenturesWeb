<template>
    <div class="main">

        <!-- MAIN SECTION -->

        <HomeInfo/>


        <Partners/>

        <!-- ABOUT SECTION -->

        <div class="about" id="about">

            <div class="text5" ref="text5">
                <h2>
                  Our tailored consulting services help our clients design and execute 
                  winning strategies that deliver
                  <span>real results.</span>
                </h2>
                <h2>
                  Through our thought leadership and dynamic speaking engagements, 
                  we inspire and inform the broader community about the 
                  latest developments in emerging technologies and beyond.
                  We bring our 
                  <span>connections, resources, and time</span> 
                  to every engagement to help our clients succeed.
                </h2>

                
          </div>
          <router-link to="/#service" class="but">
                    <Button label="Discover Our Services" :class="'storybook-button--secondary'"/>
                </router-link>


          <Slider class="slider1"/>

          <Team/>


        </div>


        <!-- SERVICE SECTION -->

        <div class="services" id="service">

          <Carousel/>

          <News/>

        </div>

        <!-- CONTACT SECTION -->

        <ContactForm id="contact"/>



        <Footer/>



    </div>
</template>

<script>
import HomeInfo from '../components/HomeInfo.vue';
import Partners from '../components/Partners.vue';


import AboutTwo from '../components/AboutTwo.vue';
import Slider from '../components/Slider.vue';
import Team from '../components/Team.vue';


import Carousel from '../components/Carasel.vue';
import Button from '../components/Storybook/Button.vue';


import News from '../components/News.vue';
import ContactForm from '../components/ContactForm.vue'
import Footer from '../components/Footer.vue';

export default {
  name: 'HomeView',
  components: {
    HomeInfo,
    Partners,

    AboutTwo,
    Slider,
    Team,

    Carousel,
    Button,

    News,
    ContactForm,
    Footer,

  },
  mounted() {
        const options = {
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    entry.target.style.opacity = '1';
                }
            });
        }, options);

        const text5 = this.$refs.text5;
        observer.observe(text5);
    }
}
</script>

<style scoped>

.slider1 {
  height: 50vh;
  z-index: -1;
}

.text5 {
  position: absolute;
  top: 5%;
  margin: auto;
  text-align: left;
  transition: opacity 1s ease-in-out;
  opacity: 0;
  border: 1px solid #ccc;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 10px;
}
.text5 span {
  font-family: "Bog";
  color: red;
  font-size: 1.9rem;
  text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
}
  
.text5 h2 {
  font-family: "Bolds";
  font-size: 1.9rem;
  margin: 0;
  color: white;
  text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
}

.but {
  background: transparent;
  position: absolute;
  top: 35%;
  left: 40%;
  text-decoration: none;
}

@media only screen and (max-width: 768px) {
  .text5 {
    top: 6%;
    left: 5%;
    right: 5%;
  }

  .text5 h2, .text5 span {
    font-size: 0.8rem;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .text5 {
    top: 6%;
    left: 10%;
    right: 10%;
  }
  .text5 h2, .text5 span {
    font-size: 1.5rem;
  }
}

@media only screen and (min-width: 1025px) {
  .text5 {
    top: 2%;
    left: 10%;
    right: 10%;
  }
  .text5 h2, .text5 span {
    font-size: 1.8rem;
  }
}
</style>