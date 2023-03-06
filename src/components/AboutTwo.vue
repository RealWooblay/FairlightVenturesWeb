<template>
    <div class="bg">
        <div class="main">
            <div class="col1">
                <h2>Our tailored consulting services help our clients
                    design and execute winning strategies 
                    that deliver <span>real results.</span>
                    <br>
                    <br>
                    Through our thought leadership and dynamic speaking engagements,
                    we inspire and inform the broader community about the latest developments
                    in emerging technologies and beyond. </h2>
            </div>
            <div class="col2">
                <img src="../assets/BussTec.png">
            </div>
            <div class="col3">
                <h2>We bring our:
                    <br>
                    <span>connections</span>
                    <br>
                    <span>resources</span>
                    <br>
                    <span>time</span>
                    <br>
                    to every engagement to help our clients succeed</h2>
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
    grid-template-columns: 2fr 0.2fr 1fr;
    padding: 100px;
    padding: 50px;
    background: linear-gradient(lightgrey, white, lightgrey);
    border-radius: 20%;
    color: black;
}

.col1 {
    padding: 30px;
    font-size: 15px;
}

.col2 img {
    width: 400px;
}

.col3 {
    padding: 30px;
}

.col3 span {
    font-size: 38px;
    font-weight: lighter;
}
.col3 h2 {
    font-size: 25px;
}

</style>