<template>
    <div class="main">
        <div class="row">
            <div class="R">
                <h1>Take the Leap</h1>
                <p> THIS IS A BUNCH OF INFORMATION </p>
            </div>
            <div class = "R2">
                <img src="../assets/Pagebackground1.jpg">
            </div>
            <div class = "R">
                <h1> Begin your Journey</h1>
                <p> THIS IS ANOTHER BUNCH OF INFORMATION aiwdnainwdinaiwd niwdnaindiawndioandioanwaiwdnaoiwndawaiondawiondaoiwnd aiwdnaoiwndaiowndaiwondoiandionwionadiowndiaondawiond waiodniaons wiadnoaind winadoiwndaiownd s</p>
            </div>
        </div>
        <div class="Button">
            <router-link to="/contact">
                <Button link="/contact" label="Contact Now!" textdecoration="none"/>
            </router-link>
        </div>
    </div>
</template>

<script setup>
    import Button from './Button.vue';
</script>

<style scoped>

.row {
    display: grid; /* use CSS grid */
    grid-template-columns: 1fr 1fr 1fr; /*create two equal columns */
    padding-top: 40px;
    padding-bottom: 50px;
    background-color: #E9EAEC;
    color: #000;
}

.R h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    padding-bottom: 30px;
    padding-top: 5px;
}
.R p {
    display: flex;
    justify-content: center;
    align-items: center;
}

.R2 {
    display: flex;
    justify-content: center;
    align-items: center;
}

.R2 img {
    position: absolute;
    width: 330px;
    height: 600px;
    padding-bottom: 190px;
    z-index: 1;
}
.main {
    background-color: #E9EAEC;
    color: #000;
}
.Button {
    padding-bottom: 50px;
    text-decoration: none;
}
</style>