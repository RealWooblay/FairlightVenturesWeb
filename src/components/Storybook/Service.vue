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
  width: 100%;
  height: auto;
  color: black;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid grey;
}

.main:hover {
  box-shadow: 5px 5px 5px 10px rgba(255, 0, 0, 0.5);
}

.col2:hover {
  transition: 1s;
  box-shadow: 0px 5px 5px 5px rgba(75, 75, 75, 0.5);
}

.col1:hover {
  transition: 1s;
  box-shadow: 0px 5px 5px 5px rgba(75, 75, 75, 0.5);
}

.main.right {
  grid-template-columns: 1fr 1fr;
}

.col1 {
  order: 2;
  display: flex;
  justify-content: center; /* updated */
  align-items: center; /* updated */
}

.col2 {
  order: 1;
  padding-left: 50px;
  padding-right: 40px;
  display: flex;
  flex-direction: column; /* updated */
  justify-content: center;
}

.main.right .col1 {
  order: 1;
}

.main.right .col2 {
  order: 2;
}

.image {
  width: 100%;
  height: auto; /* updated */
  max-height: 400px;
  object-fit: cover;
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

@media only screen and (max-width: 768px) {
  .main {
    grid-template-columns: 1fr;
  }
  
  .col1 {
    order: 1;
  }
  
  .col2 {
    order: 2;
    padding: 20px;
  }
  
  .image {
    max-height: 300px;
  }

  .title {
  font-size: 20px;
}

.secondary-text {
  font-size: 14px;
}
}

@media only screen and (max-width: 768px) {
  .main.right {
    grid-template-columns: 1fr;
  }
  
  .col1 {
    order: 1;
  }
  
  .col2 {
    order: 2;
    padding: 20px;
  }
  
  .image {
    max-height: 300px;
  }

  .title {
  font-size: 20px;
}

.secondary-text {
  font-size: 14px;
}
}
</style>