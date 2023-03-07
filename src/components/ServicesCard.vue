<template>
    <div class="container">
      <div class="video-wrapper">
        <video autoplay muted loop>
          <source src="../assets/RedWorld.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="content-wrapper">
        <div class="icons">
          <div class="icon-item">
            <font-awesome-icon class="icon" icon="fa-microchip" />
            <span class="icon-text">Investment</span>
          </div>
          <div class="icon-item">
            <font-awesome-icon class="icon" icon="fa-seedling" />
            <span class="icon-text">Advisory</span>
          </div>
          <div class="icon-item">
            <font-awesome-icon class="icon" icon="fa-crown" />
            <span class="icon-text">Consulting</span>
          </div>
          <div class="icon-item">
            <font-awesome-icon class="icon" icon="fa-network-wired" />
            <span class="icon-text">Engagements</span>
          </div>
        </div>
        <div class="button-wrapper">
          <router-link to="/contact">
            <Button
              class="button"
              label="Get in touch"
              primary
              :to="{ path: '/contact'}"
              :class="'storybook-button--primary'"
            />
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Button from '../components/Storybook/Button.vue';
  </script>
  
  <style scoped>
  .container {
    position: relative;
    height: 400px;
  }
  
  .video-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 500px;
    overflow: hidden;
    z-index: 0;
  }
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .content-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
  }
  
  .icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 30px;
  }
  
  .icon {
    font-size: 70px;
    color: white;
    margin-bottom: 20px;
  }
  
  .icon-text {
    color: white;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button {
  background-color: transparent;
  border: 2px solid white;
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 15px 30px;
  text-align: center;
  text-decoration: none; /* set text decoration to none */
  display: inline-block;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button:hover {
  background-color: white;
  color: black;
}

@media (max-width: 767px) {
    .icon {
        font-size: 40px;
    }
}
  </style>