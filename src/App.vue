<template>
  <nav>
    <div class="links">
      <div class="logo">
        <p>Fairlight Ventures</p>
        <img src="./assets/redcardinal.png" alt="Logo">
        <div class="menu-button" :class="{active: isMenuOpen}" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
      <div class="menu" :class="{active: isMenuOpen}">
        <RouterLink active-class="active" to="/" @click="closeMenu">Home</RouterLink>
        <RouterLink active-class="active" to="/about" @click="closeMenu">About Us</RouterLink>
        <RouterLink active-class="active" to="/services" @click="closeMenu">Services</RouterLink>
        <RouterLink active-class="active" to="/contact" @click="closeMenu">Contact</RouterLink>
      </div>
    </div>
    <RouterView />
  </nav>

</template>

<script>
import { RouterView, RouterLink } from "vue-router";
export default {
  components: {
    RouterView,
    RouterLink,
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

.links a {
  margin-right: 40px;
  font-size: 20px;
  text-decoration: none;
  font-family: "Bolds";
  color: black;
}

.links .active {
  color: red;
}

.links a:hover {
  text-decoration: underline;
}

nav {
  background: linear-gradient(135deg, #ffffff, #e8e8e8, #ffffff);
  border-left: 1px solid red;
  border-right: 1px solid red;
}
.links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid red;
  height: 100px; /* add a fixed height to the container to vertically center the items */
  padding-top: 50px;
  padding-bottom: 50px;
}
.logo {
  display: flex;
  align-items: center;
  margin-left: 25px;
}
.logo img {
  max-width: 50px;
  margin-right: 10px;
}
.logo p {
  color: black;
  font-size: 14px;
  font-family: "Bolds";
}
.menu-button {
  display: none;
  cursor: pointer;
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
    background: linear-gradient(135deg, #ffffff, #e8e8e8, #ffffff);
  }
  .menu.active {
    display: flex;
  }
  .links a {
    font-size: 20px;
    margin: 10px 0;
  }
}
@media (max-width: 500px) {
  .links a {
    font-size: 14px;
  }
}
</style>