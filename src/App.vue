<script setup>
import {RouterView, RouterLink } from "vue-router"

</script>

<template>
  <nav>
    <div class="links">
      <div class="logo">
        <img src="./assets/redcardinal.png" alt="Logo">
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
  background: linear-gradient(135deg, #ffffff, #e8e8e8, #ffffff);
  border-left: 1px solid red;
  border-right: 1px solid red;
}
.links {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 10px;
  border-bottom: 1px solid red;
  height: 100px; /* add a fixed height to the container to vertically center the items */
  padding-top: 50px;
  padding-bottom: 50px;
}

.links a {
  text-decoration: none;
  color: black;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;  
}

.links .active {
  font-weight: bold;
  color: red;
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

@media (max-width: 767px) {
  .links a {
    font-size: 14px;
  }
}
@media (max-width: 500px) {
  .links a {
    font-size: 12px;
  }
}

</style>