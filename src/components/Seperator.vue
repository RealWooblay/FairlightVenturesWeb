<template>
    <div class="video-container">
      <div class="video">
        <video autoplay muted loop>
          <source src="src/assets/whitetech.mp4" type="video/mp4">
        </video>
      </div>
    </div>
  </template>
  
  <style scoped>
  .video-container {
    position: relative;
    height: 200px;
    max-height: 200px;
    overflow: hidden;
  }
  
  .video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  
  video {
    width: 100%;
  }
  </style>