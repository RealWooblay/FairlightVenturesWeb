<template>
  <div class="main-container">
    <div class = "container-one">
      <div class="Details">
        <h4>WELCOME TO</h4>
        <h1>Fairlight Ventures</h1>
      </div>
        
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  background-image: url(../assets/HomeBackground.jpg);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 800px;
  }
.Details {
  color: #E9EAEC;
  padding-top: 100px;
  font-size: 30px;
  display: block;
  justify-content: center;
  align-items: center;
}
</style>
