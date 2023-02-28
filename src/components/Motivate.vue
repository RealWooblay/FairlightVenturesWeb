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
            <Button link="/contact" class="b1" label="Contact Now!" textdeco="none"/>
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
    padding-top: 100px;
    padding-bottom: 50px;
}

.R h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    padding-bottom: 30px;
    padding-top: 35px;
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
    width: 300px;
    height: 350px;
}

.Button {
    background-color: transparent;
}

.b1 {
    text-decoration: none;
}
</style>