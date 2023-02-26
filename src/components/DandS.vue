<template>
    <div class="conatiner">
        <div class="row">
            <div class="col">
                <img src="../assets/Pagebackground1.jpg" alt="IMG">
                <div class="name">Suzane Charlotte</div>
                <div class="career">Consulting & Advisory</div>
                <div class="quote">"Insert Quote Here"</div>
            </div>
            <div class="socials">
                <img src="" alt="IMG2">

            </div>
            <div class="socials">
                <img src="" alt="IMG2">

            </div>
            <div class="col">
                <img src="../assets/Pagebackground1.jpg" alt="IMG2">
                <div class="name">David Plisek</div>
                <div class="career">Cyber Guy</div>
                <div class="quote">"Insert Quote Here"</div>
            </div>
        </div>
    </div>
</template>

<style>
body {
    background-color: #E9EAEC;
    color: #000;
}
.container {
    width: auto;
    height: auto;
    flex-direction: row;
}

.row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.col {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 100px;
    margin-left: 100px;
}

.col img {
    width: 350px;
    height: 400px;
    margin: 50px;
}

.name {
    margin-top: -50px;
    text-align: center;
    font-weight: bold;
    font-size: 25px;
}
.career {
    font-size: 18px;
    font-weight: lighter;
}
.quote {
    margin-top: 40px;
    margin-bottom: 50px;
    font-style: italic;
}

@media (max-width: 767px) {
    .row {
        display: block;
    }
}
</style>