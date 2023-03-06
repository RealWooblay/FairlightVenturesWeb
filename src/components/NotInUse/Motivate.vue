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
        <div class="button">
            <router-link to="/contact">
                <Button label="Contact Now!" primary :to="{ path: '/contact'}" style="display: inline-block" />
            </router-link>
        </div>
    </div>
</template>

<script setup>
import Button from '../Storybook/Button.vue';
</script>

<style scoped>
a {
    text-decoration: none;
}
.row {
    display: grid; /* use CSS grid */
    grid-template-columns: 1fr 1fr 1fr; /*create two equal columns */
    padding-top: 40px;
    padding-bottom: 50px;
    background-color: white;
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
    height: 400px;
    margin-bottom: 190px;
    z-index: 1;
}
.main {
    background-color: white;
    color: #000;
}
.button {
    padding-bottom: 50px;
    z-index: 1;
    display: flex;
    justify-content: center;
}
</style>