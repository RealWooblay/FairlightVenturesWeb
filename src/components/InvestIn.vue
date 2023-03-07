<template>
    <div class="main">
      <div class="text">
        <h1>We're not just investing in ideas:</h1>
        <h2>
          Calling those who are <span>passionate, driven,</span> and <span>committed</span> to making a
          difference
        </h2>
      </div>
      <div class="image">
        <img src="../assets/Rocket_research-bro.png" alt="Rocket">
      </div>
    </div>
  </template>
  
  <style scoped>
    .main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: linear-gradient(135deg, #ffffff, #e8e8e8, #ffffff);
      border: 1px solid grey;
      margin: 50px 20px;
      padding: 20px;
    }
  
    .main:hover {
      box-shadow: 0px 0px 5px red;
      transition: 0.5s;
    }
  
    .text {
      text-align: center;
      margin-bottom: 20px;
    }
  
    .text h1 {
      font-size: 2rem;
      font-family: "Bolds";
      margin-bottom: 10px;
    }
  
    .text h2 {
      font-size: 1.5rem;
      font-family: "Reg";
      margin: 0;
    }
  
    .text span {
      color: red;
      font-family: "Bog";
    }
  
    .image img {
      width: 100%;
      max-width: 400px;
      margin-top: 20px;
    }
  
    @media (min-width: 768px) {
      .main {
        flex-direction: row;
        max-width: 1000px;
        margin: 50px auto;
        padding: 50px;
      }
  
      .text {
        margin-right: 20px;
        margin-bottom: 0;
      }
  
      .image img {
        margin-top: 0;
      }
    }
  
    @media (min-width: 1024px) {
      .text h1 {
        font-size: 2rem;
      }
  
      .text h2 {
        font-size: 2rem;
      }
      .main {
        margin-top: 150px;
      }
    }
  </style>