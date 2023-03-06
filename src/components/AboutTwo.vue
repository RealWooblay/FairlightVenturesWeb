<template>
    <div class="bg">
        <div class="main">
            <div class="col2">
                <img src="../assets/Robot.png">
            </div>
            <div class="col1">
                <h2>Our tailored consulting services help our clients
                    design and execute winning strategies 
                    that deliver <span>real results.</span>
                    <br>
                    <br>
                    Through our thought leadership and dynamic speaking engagements,
                    we inspire and inform the broader community about the latest developments
                    in emerging technologies and beyond. </h2>
                    <br>
                    <h2>We bring our <span>connections, resources and time</span> to every engagement to help our clients succeed</h2>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg {
    background-color: white;
}
.main {
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 60px;
    background: lightgray;
    border-radius: 0%;
    color: black;
    font-family: "Reg";
}

.col1 {
    padding: 30px;
    font-size: 15px;
}

.col2 img {
    width: 400px;
}

.col1 span {
    color: red;
    font-family: "Bolds";
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