<template>
    <div class="main">

        <!-- MAIN SECTION -->

        <HomeInfo/>


        <Partners/>

        <!-- ABOUT SECTION -->

        <div class="about" id="about">

            <div class="text5" ref="text5">
                <h2>
                  We are not just <bold>investing</bold> in ideas - 
                  we are investing in people who are on a mission to making a difference.

                  Our <bold>tailored advisory and consulting services</bold> help our clients design 
                  and execute winning strategies that deliver real results. And through 
                  our thought leadership and dynamic <bold>speaking engagements</bold>, we inspire 
                  and inform the broader community about the latest developments in 
                  emerging technologies and beyond.

                  We bring our resources, time, and connections to every engagement to 
                  <bold>help our clients succeed.</bold>

                  At Fairlight Ventures, we want to make a difference, and we're not 
                  satisfied until we've helped our clients achieve their goals and 
                  make a <span>positive impact on the world.</span>
                </h2>

                
                <br>
          <router-link to="/#service" class="but">
              <Button label="Discover Our Services" :class="'storybook-button--new'"/>
          </router-link>
        </div>


          <Slider class="slider1"/>

          <Team/>


        </div>


        <!-- SERVICE SECTION -->

        <div class="services" id="service">

          <Services/>

        </div>

                <!-- CONTACT SECTION -->

          <ContactForm id="contact"/>

          <News/>




        <Footer/>



    </div>
</template>

<script>
import HomeInfo from '../components/HomeInfo.vue';
import Partners from '../components/Partners.vue';


import Slider from '../components/Slider.vue';
import Button from '../components/Storybook/Button.vue';
import Team from '../components/Team.vue';


import Services from '../components/Services.vue';


import News from '../components/News.vue';
import ContactForm from '../components/ContactForm.vue'
import Footer from '../components/Footer.vue';

export default {
  name: 'HomeView',
  components: {
    HomeInfo,
    Partners,

    Slider,
    Button,
    Team,

    Services,

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
  height: 60vh;
  z-index: -1;
}

.text5 {
  position: absolute;
  top: 5%;
  margin: auto;
  text-align: left;
  transition: opacity 1s ease-in-out;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 10px;
}
.text5 span {
  font-family: "Bolds";
  color: red;
  font-size: 1.9rem;
  text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
}

.text5 bold {
  font-family: "Bolds";
}
  
.text5 h2 {
  font-family: "Reg";
  font-size: 1.9rem;
  margin: 0;
  color: white;
  text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
}

.but {
  background: transparent;
  text-decoration: none;
}

@media only screen and (max-width: 768px) {
  .text5 {
    top: 1%;
    left: 5%;
    right: 5%;
  }

  .text5 h2, .text5 span {
    font-size: 0.8rem;
  }

}

@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .text5 {
    top: 1%;
    left: 10%;
    right: 10%;
  }
  .text5 h2, .text5 span {
    font-size: 1.1rem;
  }
}

@media only screen and (min-width: 1025px) {
  .text5 {
    top: 1%;
    left: 10%;
    right: 10%;
  }
  .text5 h2, .text5 span {
    font-size: 1.4rem;
  }

}
</style>