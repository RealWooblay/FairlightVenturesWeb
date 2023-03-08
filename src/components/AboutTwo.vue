<template>
    <div class="bg">
        <div class="main">
            <div class="col1">
                <h2>Our tailored consulting services help our clients design and execute winning strategies that deliver <span>real results.</span></h2>
                <br>
                <h2>Through our thought leadership and dynamic speaking engagements, we inspire and inform the broader community about the latest developments in emerging technologies and beyond.</h2>
                <br>
                <h2>We bring our <span>connections, resources, and time</span> to every engagement to help our clients succeed.</h2>
            </div>
            <div class="col2">
                <img src="../assets/Robot.png">
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg {
    background-color: white;
}

.main {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 40px;
    background: lightgray;
    border-radius: 0%;
    color: black;
    font-family: "Reg";
}

.col1 {
    width: 100%;
    max-width: 700px;
    padding: 20px;
    font-size: 20px;
    text-align: center;
}

.col1 h2 {
    margin-bottom: 20px;
    font-size: 24px;
    line-height: 1.5;
    font-weight: normal;
}

.col1 span {
    color: red;
    font-family: "Bolds";
}

.col2 {
    width: 100%;
    max-width: 400px;
    text-align: center;
}

.col2 img {
    max-width: 100%;
}

@media (max-width: 850px) {
    .col1 {
        font-size: 18px;
    }
}

@media (max-width: 560px) {
    .col1 {
        font-size: 16px;
    }

    .col2 {
        margin-top: 20px;
    }
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