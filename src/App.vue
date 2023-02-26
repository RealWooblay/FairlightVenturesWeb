<script setup>
import {RouterView, RouterLink } from "vue-router"

</script>

<template>
  <nav>
    <div class="logo">
      <img src="./assets/featherlight.webp" alt="Logo">
    </div>
    <div class="links">
      <RouterLink active-class="active" to="/">Home</RouterLink>
      <RouterLink active-class="active" to="/about">About</RouterLink>
      <RouterLink active-class="active" to="/">Services</RouterLink>
      <RouterLink active-class="active" to="/">Contact</RouterLink>
    </div>
    <RouterView />
  </nav>

  
</template>

<style scoped>



</style>