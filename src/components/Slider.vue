<template>
  <div class="slider-container">
    <video autoplay muted loop :src="currentVideo" :style="{opacity: showVideo ? 1 : 0}">
    </video>
    <div class="slider-caption" :style="{opacity: showCaption ? 1 : 0}">{{ currentCaption }}</div>
    <div class="Button"><button @click="nextSlide"><font-awesome-icon class="icon"  icon="fa-arrow-right" /></button></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        {
          src: 'src/assets/whitetech.mp4',
          caption: 'Empowering innovation and driving change - together'
        },
        {
          src: 'src/assets/whitetech.mp4',
          caption: 'Our mission: to empower entrepreneurs and innovators to solve the world\'s most pressing problems.'
        },
        // add more videos here
      ],
      currentIndex: 0,
      intervalId: null,
      showVideo: true,
      showCaption: true
    }
  },
  computed: {
    currentVideo() {
      return this.videos[this.currentIndex].src
    },
    currentCaption() {
      return this.videos[this.currentIndex].caption
    }
  },
  mounted() {
    this.intervalId = setInterval(() => {
      this.showVideo = false
      this.showCaption = false
      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.videos.length
        this.showVideo = true
        this.showCaption = true
      }, 0)
    }, 10000)
  },
  beforeUnmount() {
    clearInterval(this.intervalId)
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.videos.length
    }
  }
}
</script>

<style scoped>
.slider-container {
  width: 100%;
  height: 500px;
  background-color: white;
  position: relative;
  transition: opacity 1s ease-in-out;
}

.slider-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slider-caption {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: red;
  font-size: 45px;
  font-weight: bold;
  text-align: center;
  transition: opacity 2s ease-in-out;
  padding-bottom: 100px;
}

.icon {
  font-size: 30px;
}

.Button button {
  cursor: pointer;
}
</style>