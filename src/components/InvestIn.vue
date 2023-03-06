<template>
    <div class="main">
        <div class="text">
            <h1>We're not just investing in ideas:</h1>
            <br>
            <h2>Calling those who are
                <br>
                <span>passionate</span>
                <span>driven</span>
                and commited to <span>making a difference</span></h2>
        </div>
        <div class="image">
            <img src="../assets/Rocket_research-bro.png">
        </div>
    </div>
</template>

<style scoped>

.main {
    margin-top: 150px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    background: linear-gradient(135deg, #ffffff, #e8e8e8, #ffffff);
    color: black;
    margin-bottom: 50px;
    margin-left: 200px;
    margin-right: 200px;
    border: 1px solid grey;
}

.main:hover {
    box-shadow: 0px 0px 5px red;
    transition: 0.5s;
}


.text h1 {
    font-size: 30px;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Bolds";
}

.text h2 {
    font-size: 30px;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    font-family: "Reg";
    margin-left: 150px;
    padding-bottom: 50px;
}

.text span {
    color: red;
    font-size: 30px;
    font-family: "Bog";
}

.image img {
    width: 350px;
    position: absolute;
    right: 40%;
}

</style>