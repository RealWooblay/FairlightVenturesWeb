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

  .col2:hover {
  transition: 1s;
  box-shadow: 5px 5px 20px rgba(255, 0, 0, 0.5);
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
    width: 500px;
    max-height: 400px;
    object-fit: cover;
    display: flex;
    justify-content: right;
    align-items: right;
  }
  
  .title {
    font-size: 30px;
    font-weight: bold;
    margin: 0;
    margin-top: 20px;
    font-family: "Bolds";
  }
  
  .secondary-text {
    font-size: 28px;
    margin-top: 10px;
    font-family: "Reg";
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
  </style>