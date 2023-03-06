<template>
    <div class="main" :class="{ 'right': position === 'right' }">
      <div class="col1">
        <img class="image" :src="imagePath">
      </div>
      <div class="col2">
        <h1 class="title">{{ title }}</h1>
        <p class="secondary-text">{{ subText }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Service',
    props: {
      imagePath: String,
      title: String,
      subText: String,
      position: {
        type: String,
        default: 'left',
        validator: value => ['left', 'right'].includes(value),
      },
    },
  };
  </script>
  
  <style scoped>
  .main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: white;
    box-shadow: rgb(150, 150, 150) 0px 1px 3px;
    width: auto;
    height: 400px;
    color: black;
  }
  
  .main.right {
    grid-template-columns: 1fr 1fr;
  }
  
  .col1 {
    order: 2;
  }
  
  .col2 {
    order: 1;
    padding-left: 50px;
    padding-right: 40px;
  }
  
  .main.right .col1 {
    order: 1;
  }
  
  .main.right .col2 {
    order: 2;
  }
  
  .image {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
  }
  
  .title {
    font-size: 30px;
    font-weight: bold;
    margin: 0;
    margin-top: 20px;
    font-family: "Arial";
  }
  
  .secondary-text {
    font-size: 28px;
    margin-top: 10px;
    font-family: "TT";
  }

  @font-face {
  font-family: 'TT';
  src: url('../assets/fonts/src/assets/fonts/Old_Standard_TT/OldStandardTT-Regular.ttf') format('truetype');
  /* add additional file formats here */
  font-weight: lighter;
  font-style: italic;
}
  </style>