<template>
    <div class="main">
        <div class="video-bg">
            <video autoplay muted loop controls="false" playsinline>
                <source src="../assets/whitetech.mp4" type="video/mp4">
            </video>
        </div>
        <div class="text">
            <h1>Empowering innovation and driving change,
                <span> together</span></h1>
        </div>
        <div class="But">
            <router-link to="/contact">
                <Button class="button" label="Get in touch" primary :to="{ path: '/contact'}" style="display: inline-block" :class="'storybook-button--primary'"/>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import Button from '../components/Storybook/Button.vue';

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Get the video element
    const video = document.querySelector('video');
    // Hide the controls
    video.controls = false;
  }
</script>

<style scoped>

.main {
    background: linear-gradient(135deg, #ffffff, #e8e8e8, #ffffff);
    height: 70vh; /* set full height of viewport */
}

video {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.text {
    position: absolute;
    top: 20%;
    padding-left: 30px;
}

.text h1, span {
    color: darkgrey;
    font-size: 55px;
    font-weight: bold;
    -webkit-text-stroke: 1px black;
    text-shadow: 0 0 1px black;
    font-family: "Bolds";
}

.text h1 {
    font-family: "Bolds";
}
.text span {
    color: red;
}

.But {
    position: absolute;
    bottom: 30%;
    left: 30px;
}

@font-face {
  font-family: 'Bolds';
  src: url('../assets/fonts/TT_Chocolates_Trial_DemiBold.otf') format('truetype');
  /* add additional file formats here */
  font-weight: lighter;
  font-style: italic;
}

@font-face {
  font-family: 'Reg';
  src: url('../assets/fonts/TT_Chocolates_Trial_Light.otf') format('truetype');
  /* add additional file formats here */
  font-weight: lighter;
  font-style: italic;
}


@media (max-width: 1079px) {
    .text h1, span {
        font-size: 30px;
        text-shadow: 0 0 1px black;
        -webkit-text-stroke: 1px black;
    }

    .text {
        top: 5%;
    }

    .button {
        font-size: 10px;
        padding: 8px;
    }
    .But {
        bottom: 10%;
    }

    .main {
        height: 26vh;
    }
}
@media (max-width: 400px) {
    .text h1, span {
        font-family: "Reg";
        color: black;
        font-size: 15px;
        text-shadow: 0 0 0px black;
        -webkit-text-stroke: 0px black;
    }
    .main {
        height: 15vh;
    }
}
</style>