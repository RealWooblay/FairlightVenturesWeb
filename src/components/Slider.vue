<template>
  <div class="slider-container">
    <video autoplay muted loop :src="currentVideo" :style="{opacity: showVideo ? 1 : 0, transition: 'opacity 2s ease-in-out'}">
    </video>
    <div class="slider-caption" :style="{opacity: showCaption ? 1 : 0, transition: 'opacity 2s ease-in-out'}">{{ currentCaption }}</div>
    <div class="Button" :style="{opacity: showButtons ? 1 : 0, transition: 'opacity 2s ease-in-out'}">
      <button @click="nextSlide"><font-awesome-icon class="icon"  icon="fa-arrow-right" /></button>
    </div>
    <div class="Contact">
      <router-link to="/contact">
        <button  :style="{opacity: showButtons ? 1 : 0, transition: 'opacity 2s ease-in-out'}">Get in Touch</button>
      </router-link>
    </div>
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
          src: 'src/assets/City.mp4',
          caption: 'Our mission: to empower entrepreneurs and innovators to solve the world\'s most pressing problems.'
        },
        {
        src: 'src/assets/City.mp4',
        caption: 'Our mission: to empower entrepreneurs and innovators to solve the world\'s most pressing problems.'
        },
        // add more videos here
      ],
      currentIndex: 0,
      intervalId: null,
      showVideo: true,
      showCaption: true,
      showButton: true
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
      this.showButton = false
      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.videos.length
        this.showVideo = true
        this.showCaption = true
        this.showButton = true
      }, 2000)
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
  left: 35%;
  transform: translateX(-50%);
  color: red;
  font-size: 45px;
  font-weight: bold;
  padding-bottom: 200px;
}

.icon {
  font-size: 30px;
}

.Button button {
  cursor: pointer;
  position: absolute;
  top: 250px;
  right: 50px;
}

.Contact button {
  font-size: 20px;
  top: 300px;
  left: 30px;
  padding-left: 50px;
  padding-right: 50px;
  height: 50px;
  cursor: pointer;
}
</style>