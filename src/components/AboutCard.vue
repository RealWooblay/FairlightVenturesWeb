<template>
    <div class="main">
        <div class="video-bg">
            <video :controls="false" autoplay muted loop controls playsinline>
                <source src="../assets/City.mp4" type="video/mp4">
            </video>
        </div>
        <div class="text">
            <h1>
                Empowering entrepreneurs and innovators <br>
                to solve the world's most pressing problems.
            </h1>
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
</script>

<style scoped>

.main {
    height: 50vh;
    margin-bottom: 200px;
}

video {
    height: 500px;
    width: 100%;
    object-fit: cover;
}

.text {
    position: absolute;
    top: 5%;
    padding-left: 30px;
}

.text h1, span {
    color: whitesmoke;
    font-size: 50px;
    -webkit-text-stroke: 1px black;
    text-shadow: 0 0 1px black;
    font-family: "Bolds";
}
.text span {
    color: red;
    font-family: "Bolds";
}

.But {
    position: absolute;
    bottom: 15%;
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
        font-size: 25px;
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
        bottom: 15%;
    }
    video {
        height: 250px;
    }
    .main {
        height: auto;
    }
}

@media (max-width: 400px) {
    .text h1, span {
        font-size: 15px;
        text-shadow: 0 0 0.3px black;
        -webkit-text-stroke: 0.3px black;
        font-family: Arial, Helvetica, sans-serif;
    }
}
</style>