<template>
    <div class="slider-container" :style="{backgroundImage: 'url(' + currentImage + ')', opacity: showImage ? 1 : 0}">
      <div class="slider-caption" :style="{opacity: showCaption ? 1 : 0}">{{ currentCaption }}</div>
      <div class="Button"><button @click="nextSlide"><font-awesome-icon class="icon"  icon="fa-arrow-right" /></button></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          {
            src: 'src/assets/HomeBackground.jpg',
            caption: 'Caption for image 1'
          },
          {
            src: 'src/assets/redcardinal.png',
            caption: 'Caption for image 2'
          },
          // add more images here
        ],
        currentIndex: 0,
        intervalId: null,
        showImage: true,
        showCaption: true
      }
    },
    computed: {
      currentImage() {
        return this.images[this.currentIndex].src
      },
      currentCaption() {
        return this.images[this.currentIndex].caption
      }
    },
    mounted() {
      this.intervalId = setInterval(() => {
        this.showImage = false
        this.showCaption = false
        setTimeout(() => {
          this.currentIndex = (this.currentIndex + 1) % this.images.length
          this.showImage = true
          this.showCaption = true
        }, 1000)
      }, 5000)
    },
    beforeUnmount() {
      clearInterval(this.intervalId)
    },
    methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
    }
  }
  }
  </script>
  
  <style scoped>
  .slider-container {
    width: 100%;
    height: 500px;
    background-position: center;
    background-size: cover;
    position: relative;
    transition: opacity 1s ease-in-out;
  }
  
  .slider-caption {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    transition: opacity 2s ease-in-out;
  }
  .Button {
    display: flex;
    justify-content: right;
    padding-right: 20px;
    padding-top: 200px;
  }
.icon {
    font-size: 30px;
    background-color: transparent;
}

  </style>