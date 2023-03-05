<template>
    <div class="main">
        <div class="image">
            <img src="../assets/Android-amico.png">
        </div>
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
    grid-template-columns: 1fr 2fr 1fr;
    background-color: white;
    color: black;
}

.text h1 {
    font-size: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.text h2 {
    font-size: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-style: italic;
}

.text span {
    color: red;
    font-size: 45px;
    font-family: "TT";
    font-weight: lighter;
}

.image img {
    width: 350px;
}

@font-face {
  font-family: 'TT';
  src: url('../assets/fonts/src/assets/fonts/Old_Standard_TT/OldStandardTT-Regular.ttf') format('truetype');
  /* add additional file formats here */
  font-weight: lighter;
  font-style: italic;
}
</style>