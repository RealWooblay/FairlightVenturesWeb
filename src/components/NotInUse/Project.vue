<template>
    <div class="main">
        <div class="title"> <h1>Our Projects</h1> </div>
        <div class="Head">
            <h3>Deep Tech</h3>
            
        </div>
        <div class="test">
            <a href="https://youtube.com"><img src="../assets/Pagebackground1.jpg"></a>
            <a href="https://youtube.com"><img src="../assets/Pagebackground1.jpg"></a>
            <a href="https://youtube.com"><img src="../assets/Pagebackground1.jpg"></a>
        </div>
        <div class="Head">
            <h3>Consultations</h3>
        </div>
        <div class="test">
            <a href="https://youtube.com"><img src="../assets/Pagebackground1.jpg"></a>
            <a href="https://youtube.com"><img src="../assets/Pagebackground1.jpg"></a>
            <a href="https://youtube.com"><img src="../assets/Pagebackground1.jpg"></a>
        </div>
        <div class="button">
            <router-link to="/contact">
                <Button label="Get Involved --->" primary :to="{ path: '/contact'}" style="display: inline-block" />
            </router-link>
        </div>
    </div>
</template>

<script setup>
import Button from '../Storybook/Button.vue';
</script>

<style>

.main {
    background-color: #040720;
    color: #E9EAEC;
}

.title {
    display: flex;
    justify-content: center;
}

.test {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.test img {
    width: 250px;
    margin-top: 50px;
    margin-bottom: 30px;
    height: 320px;
    border: 1px solid #6699cc;
    transition: border-color 0.3s ease-in-out;
}

.test img:hover {
    border-color: #333652;
    box-shadow: 0 0 18px #333652;
    transition: 0.3s;
}

.Head h3 {
    display: flex;
    justify-content: center;
    font-size: 22px;
    margin-top: 30px;
    text-shadow: 1px 1px 1px #000, 1px -1px 1px #000, -1px 1px 1px #000, -1px -1px 1px #000;
}

.Head h1 {
    display: flex;
    justify-content: center;
}

.title {
    background-color: rgba(0, 0, 0, 0.5);
}

.title h1 {
    padding: 50px;
    opacity: 1;
    z-index: 1;
    color: #E9EAEC;
    font-size: 25px;
}
.button {
    padding-bottom: 50px;
    z-index: 1;
    display: flex;
    justify-content: center;
}

</style>