<template>
<div class="traincont">
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
          { url: 'src/assets/clients/Arqit_BW.jpeg', alt: 'Slide 1' },
          { url: 'src/assets/clients/Bugcrowd_BW.png', alt: 'Slide 2' },
          { url: 'src/assets/clients/DivisionX_BW.png', alt: 'Slide 3' },
          { url: 'src/assets/clients/Heo_BW.png', alt: 'Slide 4' },
          { url: 'src/assets/clients/Livingbridge_BW.jpeg', alt: 'Slide 5' },
          { url: 'src/assets/clients/Moxy_BW.png', alt: 'Slide 6' },
          { url: 'src/assets/clients/PRNTR_BW.png', alt: 'Slide 7' },
          { url: 'src/assets/clients/Red_Piranha_BW.png', alt: 'Slide 8' },
          { url: 'src/assets/clients/SWG.png', alt: 'Slide 9' },
          { url: 'src/assets/clients/Winton_BW.png', alt: 'Slide 10' },
        ],
      };
    },
  });
  </script>

<style scoped>

.traincont {
    background-color: white;
    padding-top: 50px;
    padding-bottom: 50px;
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