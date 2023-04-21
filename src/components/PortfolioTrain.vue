<template>
<div class="traincont">
  <div class="Training" ref="Training">
    <h1>Portfolio & Clients</h1>
    <Carousel :items-to-show="2.5" :wrap-around="true" :transition="5000" :autoplay="true" :touchDrag="true" :mouseDrag="true">
      <Slide v-for="(image, index) in images" :key="index">
        <img :src="image.url" :alt="image.alt" />
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { Carousel, Navigation, Slide } from 'vue3-carousel';
  
  import 'vue3-carousel/dist/carousel.css';
  
  export default defineComponent({
    name: 'WrapAround',
    components: {
      Carousel,
      Slide,
      Navigation,
    },
    data() {
      return {
        images: [
          { url: "https://i.imgur.com/KnkqpmQ.jpg", alt: 'Arqit' },
          { url: 'https://i.imgur.com/d1PNQLT.png', alt: 'Bugcrowd' },
          { url: 'https://i.imgur.com/6ddtDhw.png', alt: 'Division X' },
          { url: 'https://i.imgur.com/gwHjciO.png', alt: 'HE Robotics' },
          { url: 'https://i.imgur.com/FwKgCaC.jpg', alt: 'Living Bridge' },
          { url: 'https://i.imgur.com/qyOxHq1.png', alt: 'Moxy' },
          { url: 'https://i.imgur.com/JE1O1LH.png', alt: 'PRNTR' },
          { url: 'https://i.imgur.com/GmqRBsl.png', alt: 'Red Pirahna' },
          { url: 'https://i.imgur.com/6Bk2nnA.png', alt: 'SWG' },
          { url: 'https://i.imgur.com/J8WBRKf.png', alt: 'Winton' },
        ],
      };
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

        const Training = this.$refs.Training;
        observer.observe(Training);
    }
  });
  </script>

<style scoped>

.traincont {
    background-color: white;
    padding-top: 50px;
    padding-bottom: 50px;
}

.Training {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.traincont h1 {
    color: rgb(51, 51, 51);
    display: flex;
    justify-content: center;
    font-family: "Bolds";
    padding-bottom: 50px;
}

img {
    width: 40%;
    color: white;
}

</style>