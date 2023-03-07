<template>
    <div class="footer">
        <div class="row">
            <div class=info><h3> Fairlight Ventures </h3> 
            <router-link to="/">
            <a>Home</a>
            </router-link>
            <router-link to="/about">
            <a>About Us</a>
            </router-link>
            <router-link to="/services">
            <a>Services</a>
            </router-link>
            <router-link to="/contact">
            <a>Contact </a>
            </router-link>
            </div>
        </div>
        <div class="row2">
            <a href="https://instagram.com">
                <font-awesome-icon icon="fa-brands fa-instagram" />
            </a>
            <a href="twitter.com">
                <font-awesome-icon icon="fa-brands fa-twitter" />
            </a>
            <a href="facebook.com">
                <font-awesome-icon icon="fa-brands fa-facebook" />
            </a>
            <a href="linkedin.com">
                <font-awesome-icon icon="fa-brands fa-linkedin" />
            </a>
            <a href="spotify.com">
                <font-awesome-icon icon="fa-solid fa-link" />
            </a>
        </div>
        <div class="copyright">
            Copyright © 2023 Jack Coleman. All rights reserved.
        </div>
        <div class="row">
            <img src="../assets/redcardinal.png">

        </div>
    </div>
</template>

<style scoped>

.footer {
    display: grid;
    grid-template-columns: 1fr 2fr 0.5fr;
    background-color: black;
    padding-bottom: 20px;
}

.row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.row h3 {
    padding-top: 30px;
    padding-bottom: 10px;
    font-style: italic;
    font-size: 15px;
    color: #e9eaec;
}
.row a {
    font-size: 14px;
    color: #e9eaec;
    text-decoration: none;
    display: block;
}

.row img {
    width: 100px;
    height: 100px;
}

.row2 {
    margin-top: 70px;
}

.row2 a {
    justify-content: center;
    align-items: center;
    font-size: 25px;
    color: #e9eaec;
    margin-left: 130px;
}

.row2 a:hover {
    color: red;
}

.row a:hover {
    color: red;
}

.copyright {
    display: flex;
    flex-direction: row;
    position: absolute;
    justify-content: center;
    bottom: 3px;
    left: 600px;
    font-size: 12px;
}

@media (max-width: 1100px) {
    .copyright {
        display: none;
    }

    .row img {
        width: 50px;
        height: 50px;
    }
}

@media (max-width: 400px) {
    .row img {
        display: none;
    }
    .row2 a {
        font-size: 15px;
        margin-left: 50px;
    }
}
</style>