<template>
  <div class="slide" id="home">
    <Slider class="SS" />
  </div>
  <nav>
    <div class="links">
      <div class="logo">
        <img src="./assets/Lgo.png" alt="Logo">
        <div class="menu-button" :class="{ active: isMenuOpen }" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="menu" :class="{ active: isMenuOpen }">
        <RouterLink to="/#home" tag="button" v-scroll-to="'#home'">Home</RouterLink>
        <RouterLink to="/#about" tag="button" v-scroll-to="'#about'">About</RouterLink>
        <RouterLink to="/#service" tag="button" v-scroll-to="'#service'">Services</RouterLink>
        <RouterLink to="/#contact" tag="button" v-scroll-to="'#contact'">Contact</RouterLink>
      </div>
    </div>
    <div class="main">
      <div class="text">
        <br>
        <br>
        <br>
        <br>
        <h2>Empowering innovation and driving change, <span>together</span></h2>
      </div>
      <!--<div class="But">
            <router-link to="/contact">
                <Button class="button" label="Get in touch" primary :to="{ path: '/contact'}" style="display: inline-block" :class="'storybook-button--primary'"/>
            </router-link>
        </div>-->
    </div>
    <RouterView />
  </nav>
</template>

<script>
import { RouterView, RouterLink } from "vue-router";
import Button from './components/Storybook/Button.vue';
import Slider from './components/Slider.vue';
export default {
  components: {
    RouterView,
    RouterLink,
    Button,
    Slider,
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style scoped>
.links {
  background-color: rgb(0, 0, 0, 0.3);
  z-index: 2;
  position: fixed;
  width: 100%;
}

.logo h1 {
  color: #e9eaec;
  font-family: "Bolds";
}

.links a {
  padding-right: 40px;
  font-size: 20px;
  text-decoration: none;
  font-family: "Bolds";
  color: #e9eaec;
}

.links a:hover {
  text-decoration: underline;
}

nav {
  background: transparent;
}

.links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  /* add a fixed height to the container to vertically center the items */
  padding-top: 50px;
  padding-bottom: 50px;
}

.logo {
  display: flex;
  align-items: center;
  padding-left: 25px;
}

.logo img {
  max-width: 100px;
  padding-top: 10px;
  padding-right: 10px;
  margin-top: -15px;
  color: white;
}

.logo p {
  color: black;
  font-size: 14px;
  font-family: "Bolds";
}

.menu-button {
  display: none;
  cursor: pointer;
  margin-top: 20px;
}

.menu-button span {
  display: block;
  height: 2px;
  width: 20px;
  background: black;
  margin-bottom: 5px;
}

@media (max-width: 768px) {
  .menu-button {
    display: block;
    margin-left: auto;
  }

  .links {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .menu {
    display: none;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px 0;
    background: black;
  }

  .menu.active {
    display: flex;
  }

  .links a {
    font-size: 20px;
    padding: 10px 0;
  }
}

@media (max-width: 500px) {
  .links a {
    font-size: 14px;
  }
}

/* HOME CARD */

.main {
  background: transparent;
  height: 95vh;
  /* set full height of viewport */
}

.text {
  position: absolute;
  top: 25%;
  left: 5%;
  right: 10%;
}

.text h2,
span {
  color: #e9eaec;
  font-size: 60px;
  font-family: "Bolds";
}

.text h2,
span {
  color: #e9eaec;
  font-size: 50px;
  text-shadow: 0 0 5px black;
  font-family: "Bolds";
}

.text span {
  color: #62A5AA;
}


.slide {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
}

.SS {
  background-color: #e9eaec;
}

.menu-button {
  position: fixed;
  top: 10px;
  /* adjust as needed */
  right: 5%;
  /* adjust as needed */
}

.menu-button span {
  background-color: #e9eaec;
}

@media (max-width: 767px) {
  .text {
    top: 15%;
  }
}

@media (max-width: 530px) {
  .text {
    top: 20%;
  }

  .text h2 {
    font-size: 40px;
  }

  .text h2,
  span {
    font-size: 30px;
  }
}
</style>