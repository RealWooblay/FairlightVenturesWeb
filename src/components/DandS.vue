<template>
    <div class="conatiner">
        <div class="row">
            <div class="col">
                <img src="../assets/Pagebackground1.jpg" alt="IMG">
                <div class="name">Suzane Charlotte</div>
                <div class="career">Consulting & Advisory</div>
                <div class="quote">"Insert Quote Here"</div>
                <div class="socials1">
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
            </div>
            <div class="col">
                <br>
                <h1> Our Services </h1>
                <div class="services">
                <div class ="info">
                    <font-awesome-icon class="icon"  icon="fa-solid fa-microchip" />
                    <p> Enter information? </p>
                    <font-awesome-icon class="icon"  icon="fa-solid fa-seedling" />
                    <p> Enter information? </p>
                </div>
                <div class="info1">
                    <font-awesome-icon class="icon"  icon="fa-solid fa-crown" />
                    <p> Enter information? </p>
                    <font-awesome-icon class="icon"  icon="fa-solid fa-network-wired" />
                    <p> Enter information? </p>
                </div>
              </div>
              <div class = "Button"> 
                <button>Our Services →</button>
              </div>
            </div>
            <div class="col">
                <img src="../assets/Pagebackground1.jpg" alt="IMG2">
                <div class="name">David Plisek</div>
                <div class="career">Cyber Guy</div>
                <div class="quote">"Insert Quote Here"</div>
                <div class="socials2">
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
            </div>
        </div>
    </div>
</template>

<style>
.container {
    display: grid; /* use CSS grid */
    grid-template-columns: 1fr 1fr; /*create two equal columns */
    grid-gap: 20px; /* add some space between columns */
}

.row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #E9EAEC;
    color: #000;
}

.col {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px; /* add some padding to create space around elements */
    position: relative;
}

.col img {
    width: 280px;
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

.socials1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
    margin-top: 20px;
}

.socials2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
    margin-top: 20px;
}

.socials1 a {
    margin-bottom: 30px;
    transform: translate(170px, -550px);
}

.socials2 a {
    margin-bottom: 30px;
    transform: translate(-170px, -550px);
}

.services {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 40px;
  margin-left: 30px;
}

.info, .info1 {
  align-items: center;
  display: flex;
  flex-direction: column;
}

.info p, .info1 p {
  margin-left: 50px;
  margin-right: 10px;
  margin-top: 20px;
  margin-bottom: 50px;
  font-size: 12px;
}

.icon {
    font-size: 55px;
}

.Button button {
    font-size: 20px;
    border-radius: 8px;
    padding-left: 70px;
    padding-right: 70px;
    padding-top: 8px;
    padding-bottom: 8px;
    background-color: #9400D3;
    cursor: pointer;
    font-weight: bold;
}


@media (max-width: 1024px) {
    .row {
        display: block;
    }
    .socials1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    cursor: pointer;
    margin-top: 0px;
    margin-right: 20px;
    }

.socials2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    cursor: pointer;
    margin-top: 0px;
    margin-right: 20px;
}
.socials1 a {
    margin-right: 20px;
    transform: translate(20px, 0px);
}
.socials2 a {
    margin-right: 20px;
    transform: translate(20px, 0px);
}
.Button button {
    font-size: 10px;
    border-radius: 8px;
    margin-top: 0px;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 5px;
    padding-bottom: 5px;
}
.info, .info1 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
}

.info p, .info1 p {
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 12px;
  margin-bottom: 40px;
  font-size: 10px;
}
.col h1 {
    font-size: 18px;
}
.col img {
    width: 220px;
    height: 260px;
    margin: 50px;
}

.icon {
    font-size: 20px;
}
.name {
    margin-top: -50px;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
}
.career {
    font-size: 15px;
    font-weight: lighter;
}
.quote {
    margin-top: 14px;
    margin-bottom: 50px;
    font-style: italic;
    font-size: 13px;
}
.services {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 40px;
  margin-left: 30px;
}
}
</style>