<template>
    <div class="main-container">
        <h1>C L I E N T S</h1>
        <div class="row">
            <img src="../assets/clients/Arqit_BW.jpeg" alt="1">
            <img src="../assets/clients/Bugcrowd_BW.png" alt="2">
            <img src="../assets/clients/DivisionX_BW.png" alt="3">
            <img src="../assets/clients/Heo_BW.png" alt="4">
            <img src="../assets/clients/Livingbridge_BW.jpeg" alt="5">
        </div>
        <div class="row">
            <img src="../assets/clients/Moxy_BW.png" alt="6">
            <img src="../assets/clients/PRNTR_BW.png" alt="7">
            <img src="../assets/clients/Red_Piranha_BW.png" alt="8">
            <img src="../assets/clients/Winton_BW.png" alt="9">
            <img src="../assets/clients/SWG.png" alt="10">
        </div>
    </div>
</template>

<style scoped>
.main-container {
    color: rgb(51, 51, 51);
    position: relative;
    background: linear-gradient(135deg, #ffffff, #e8e8e8, #ffffff);
}
#video-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}
.main-container h1 {
    display: flex;
    justify-content: center;
    padding-top: 60px;
    padding-bottom: 40px;
    font-size: 42px;
    font-weight: bold;
    font-family: "Bog";

}
.row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 150px;
    padding-left: 150px;
    padding-right: 150px;
    background-color: transparent;
    color: rgb(112, 112, 112);
}
.row img {
    width: 100px;
    padding-bottom: 50px;
}

.row h3 {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
}

@font-face {
  font-family: 'Bog';
  src: url('../assets/fonts/Bogart-Light-Italic-trial.ttf') format('truetype');
  /* add additional file formats here */
  font-weight: lighter;
  font-style: italic;
}

</style>