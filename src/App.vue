<script setup>
import {RouterView, RouterLink } from "vue-router"

</script>

<template>
  <nav>
    <div class="links">
      <div class="logo">
        <img src="./assets/featherlight.webp" alt="Logo">
      </div>
      <RouterLink active-class="active" to="/">Home</RouterLink>
      <RouterLink active-class="active" to="/about">About Us</RouterLink>
      <RouterLink active-class="active" to="/services">Services</RouterLink>
      <RouterLink active-class="active" to="/contact">Contact</RouterLink>
    </div>
    <RouterView />
  </nav>

  
</template>

<style scoped>
nav {
  background-color: #040720;
  max-height: 50px;
  width: auto;
}
.links {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 10px;
}

.links a {
  text-decoration: none;
  color: #E9EAEC;
}

.active {
  font-weight: bold;
}
.logo img {
  max-width: 50px;
  margin-left: 25px;
}

@media (max-width: 767px) {
  .links a {
    font-size: 14px;
  }
}
@media (max-width: 500px) {
  .links a {
    font-size: 10px;
  }
}

</style>