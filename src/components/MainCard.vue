<template>
  <div class="main-container">
    <div class = "container-one">
      <div class="Details">
        <h4>WELCOME TO</h4>
        <h1>Fairlight Ventures</h1>
        <router-link to="/about">
          <button>About Us</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  background-image: url(../assets/HomeBackground.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  width: auto;
  height: 700px;
  }
.Details {
  color: #E9EAEC;
  font-size: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-top: 100px;
  }

  .Details h1 {
    font-weight: bold;
  }

  .Details button {
    border-radius: 10px;
    font-size: large;
    font-weight: bold;
    padding: 10px;
    padding-left: 35px;
    padding-right: 35px;
    margin-top: 50px;
    background-color: #fff;
    cursor: pointer;
  }
</style>
