<template>
  <div class="slider-container">
    <video autoplay muted loop :src="currentVideo" :style="{opacity: showVideo ? 1 : 0, transition: 'opacity 2s ease-in-out'}">
    </video>
    <div class="slider-caption" :style="{opacity: showCaption ? 1 : 0, transition: 'opacity 2s ease-in-out'}">{{ currentCaption }}</div>
    <div class="Button" :style="{opacity: showButtons ? 1 : 0, transition: 'opacity 2s ease-in-out'}">
    <!--  <button @click="nextSlide"><font-awesome-icon class="icon"  icon="fa-arrow-right" /></button> -->
    </div>
      <div v-if="currentIndex === 2" class="icon-container">
    <div class="icon-wrapper" :style="{opacity: showIcons ? 1 : 0, transition: 'opacity 2s ease-in-out'}">
      <font-awesome-icon class="icon" icon="fa-seedling" />
      <div class="icon-text">Investment</div>
    </div>
    <div class="icon-wrapper" :style="{opacity: showIcons ? 1 : 0, transition: 'opacity 2s ease-in-out 0.5s'}">
      <font-awesome-icon class="icon" icon="fa-microchip" />
      <div class="icon-text">Advisory</div>
    </div>
    <div class="icon-wrapper" :style="{opacity: showIcons ? 1 : 0, transition: 'opacity 2s ease-in-out 1s'}">
      <font-awesome-icon class="icon" icon="fa-crown" />
      <div class="icon-text">Consulting</div>
    </div>
    <div class="icon-wrapper" :style="{opacity: showIcons ? 1 : 0, transition: 'opacity 2s ease-in-out 1.5s'}">
      <font-awesome-icon class="icon" icon="fa-network-wired" />
      <div class="icon-text">Public Engagements</div>
    </div>
    <router-link to="/services" class="Learn">
        <button :style="{opacity: showButtons ? 1 : 0, transition: 'opacity 2s ease-in-out'}">Learn More</button>
    </router-link>
  </div>
    <div class="Contact">
      <router-link to="/contact">
        <button :style="{opacity: showButtons ? 1 : 0, transition: 'opacity 2s ease-in-out'}">Get in Touch</button>
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
          src: 'src/assets/RedWorld.mp4',
          caption:''
        },
        // add more videos here
      ],
      currentIndex: 0,
      intervalId: null,
      showVideo: true,
      showCaption: true,
      showButtons: true,
      showIcons: true,
    };
  },
  computed: {
    currentVideo() {
      return this.videos[this.currentIndex].src;
    },
    currentCaption() {
      return this.videos[this.currentIndex].caption;
    }
  },
  mounted() {
    this.intervalId = setInterval(() => {
      this.showVideo = false;
      this.showCaption = false;
      this.showButtons = false;
      this.showIcons = false;
      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.videos.length;
        this.showVideo = true;
        this.showCaption = true;
        this.showButtons = true;
        this.showIcons = true;
      }, 2000);
    }, 10000);
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.videos.length;
    }
  }
};
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
  color: grey;
  font-size: 45px;
  font-weight: bold;
  padding-bottom: 150px;
  -webkit-text-stroke: 2px black;
  text-shadow: 0 0 2px black;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
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
  font-size: 16px;
  top: 350px;
  left: 40px;
  padding-left: 40px;
  padding-right: 40px;
  height: 45px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
}

@font-face {
  font-family: 'TT';
  src: url('../assets/fonts/src/assets/fonts/Old_Standard_TT/OldStandardTT-Regular.ttf') format('truetype');
  /* add additional file formats here */
  font-weight: lighter;
  font-style: italic;
}

.icon-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-bottom: 430px;
}

.icon-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  margin: 40px; /* add some margin between the icons */
}

/* adjust the width and height of the icons as needed */
.icon-wrapper img {
  width: 80px;
  height: 80px;
}

.icon {
  font-size: 80px;
  color: white;
}

.icon-text {
  margin-top: 10px;
  font-size: 36px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: Arial, Helvetica, sans-serif;
  opacity: 0.7;
  color: white;
  text-shadow: 0 0 1px black;
  -webkit-text-stroke: 0.5px black;
}

.Learn {
  position: absolute;
  bottom: 50%;
  font-size: 20px;
  left: 43%;
}

.Learn button {
  text-transform: uppercase;
  cursor: pointer;
  height: 45px;
  padding-left: 40px;
  padding-right: 40px;
  font-size: 16px;
  font-weight: bold;
}

.slider-caption:nth-child(2) {
  color: white;
}

</style>