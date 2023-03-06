<template>
    <div class="main">
        <div class="text">
            <h1>We're not just investing in Ideas:</h1>
            <br>
            <h2>Calling those who are
                <br>
                <span>Passionate</span>
                <span>Driven</span>
                and Commited to <span>Making a Difference</span></h2>
        </div>
        <div class="image">
            <img src="../assets/Rocket_research-bro.png">
        </div>
    </div>
</template>

<style scoped>

.main {
    padding-top: 50px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    background: linear-gradient(135deg, #ffffff, #e8e8e8, #ffffff);
    color: black;
    padding-bottom: 40px;
}

.text h1 {
    font-size: 40px;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    font-family: "Reg";
    padding-left: 20px;
}

.text h2 {
    font-size: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;
    font-style: italic;
    font-family: "Reg";
    padding-left: 20px;
}

.text span {
    color: red;
    font-size: 30px;
    font-family: "Bolds";
    font-weight: lighter;
}

.image img {
    width: 350px;
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