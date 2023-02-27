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
                <RouterLink to="/services">
                    <button>Learn More →</button>
                </RouterLink>
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
    border: 1px solid #6699cc;
    transition: border-color 0.3s ease-in-out;
}

.col img:hover {
    border-color: #333652;
    box-shadow: 0 0 18px #333652;
    transition: 0.3s;
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
    font-style: italic;
}

.socials1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    position: relative;
    bottom: 475px;
    left: 160px;
}

.socials2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    position: relative;
    bottom: 475px;
    right: 160px;
}

.socials1 a {
    margin-bottom: 30px;
    color: #6699cc;
}

.socials2 a {
    margin-bottom: 30px;
    color: #6699cc;
}

.services {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 40px;
  margin-left: 0px;
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
  margin-right: 50px;
}

.icon {
    font-size: 45px;
}

.Button button {
    font-size: 15px;
    border-radius: 8px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 6px;
    padding-bottom: 6px;
    background-color: #fad02c;
    cursor: pointer;
    font-weight: bold;
}


@media (max-width: 767px) {
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
    position: absolute;
    right: 120px;
    top: -150px;
    }

.socials2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    cursor: pointer;
    margin-top: 0px;
    position: relative;
    left: -20px;
    top: -450px;
}
.socials1 a {
    margin-right: 20px;
    margin-left: 0px;
    position: relative;
    top: 500px;
    left: 20px;
}
.socials2 a {
    margin-right: 20px;
    position: relative;
    top: 500px;
    left: 20px;
}
.Button button {
    font-size: 7px;
    border-radius: 8px;
    margin-top: 0px;
    padding-left: 20px;
    padding-right: 20px;
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

@media (max-width: 1150px) {

.info p, .info1 p {
  margin-left: 15px;
  margin-right: 0px;
  margin-top: 12px;
  margin-bottom: 40px;
  font-size: 10px;
}

.icon {
    font-size: 25px;
}
.col h1 {
    font-size: 13px;
}
.col img {
    width: 150px;
    height: 240px;
    margin: 50px;
}
.name {
    margin-top: -50px;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
}
.career {
    font-size: 10px;
    font-weight: lighter;
}
.quote {
    margin-top: 14px;
    margin-bottom: 50px;
    font-style: italic;
    font-size: 12px;
}
.Button button {
    font-size: 10px;
    border-radius: 8px;
    margin-top: 0px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 4px;
    padding-bottom: 4px;
}
.socials1 {
    font-size: 10px;
    bottom: 340px;
    left: 100px;
    }

.socials2 {
    font-size: 10px;
    bottom: 340px;
    right: 100px;
}
}

</style>