<template>
  <div class="slideshow">
    <img :src="currentImage" :key="currentImage" class="slideshow-image" :style="{ opacity: opacity }" />
    <img :src="nextImage" :key="nextImage" class="slideshow-image" :style="{ opacity: nextOpacity }" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'https://i.imgur.com/2wPCmfw.jpg',
        'https://i.imgur.com/Y9zu8TH.jpg',
        'https://i.imgur.com/0FMgyZM.png',
        // add image URLs here
      ],
      currentIndex: 0,
      opacity: 1,
      nextOpacity: 0,
      intervalId: null,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
    nextImage() {
      return this.images[(this.currentIndex + 1) % this.images.length];
    }
  },
  methods: {
    transition() {
      this.nextOpacity = 1;
      setTimeout(() => {
        this.opacity = 0;
        setTimeout(() => {
          this.currentIndex = (this.currentIndex + 1) % this.images.length;
          this.opacity = 1;
          this.nextOpacity = 0;
        }, 900);
      }, 8000);
    }
  },
  mounted() {
    this.transition();
    this.intervalId = setInterval(() => {
      this.transition();
    }, 5000);
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
};
</script>

<style scoped>
.slideshow {
  width: 100%;
  height: 110vh;
  position: relative;
  overflow: hidden;
}

.slideshow-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}

.slideshow-image:first-child {
  opacity: 1;
}
</style>