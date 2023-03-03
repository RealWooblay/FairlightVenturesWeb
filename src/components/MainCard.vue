<template>
  <div class="main-container">
    <div class = "container-one">
      <div class="Details">
        <h4>WELCOME TO</h4>
        <h1 style="color:red">Fairlight Ventures</h1>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
template {
  padding: 100px;
}
.main-container {
  background: linear-gradient(135deg, #ffffff, #e8e8e8, #ffffff);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  width: auto;
  height: 650px;
  }
.Details {
  color: rgb(169, 169, 169);
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

  .Details button:hover {
    background-color: #fad02c;
  }

  @media (max-width: 767px) {
    .Details button {
    font-size: medium;
    font-weight: bold;
    padding: 8px;
    padding-left: 25px;
    padding-right: 25px;
    margin-top: 50px;
  }
  }
</style>
