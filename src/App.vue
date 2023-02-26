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
      <RouterLink active-class="active" to="/about">About</RouterLink>
      <RouterLink active-class="active" to="/">Services</RouterLink>
      <RouterLink active-class="active" to="/">Contact</RouterLink>
    </div>
    <RouterView />
  </nav>

  
</template>

<style scoped>
nav {
  background-color: #E9EAEC;
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
}

.active {
  font-weight: bold;
  color: #0000B8;
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