<template>
<div class="container">
  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-touch="true" data-bs-interval="5000">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
      <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
      <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
      <li data-bs-target="#myCarousel" data-bs-slide-to="3"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active">
        <div class="row">
          <div class="col-md-6">
            <img src="../assets/services/advisory.png" alt="Slide 1">
          </div>
          <div class="col-md-6">
            <h3>Advisory</h3>
            <p>When it comes to cyber security, business operations, and capital raising, we know our stuff. At Fairlight Ventures, 
                our technical advisory boards and non-executive directorships provide unparalleled subject matter expertise to companies looking to take their game to the next level. 
                We work closely with our clients to understand their unique needs and tailor our approach to provide the best possible outcome.</p>
          </div>
        </div>
      </div>

      <div class="carousel-item">
        <div class="row">
          <div class="col-md-6">
            <img src="../assets/services/Investing.png" alt="Slide 2">
          </div>
          <div class="col-md-6">
            <h3>Investment</h3>
            <p>We back the best and brightest in emerging technologies. We are not just investing capital
         - we are investing our resources, time, and connections to help accelerate growth and solve problems. Our portfolio spans some of the most exciting areas of innovation,
          including cyber security, space tech, quantum technologies, and blockchain. We don’t just invest in ideas, we invest in the people behind them.</p>
          </div>
        </div>
      </div>

      <div class="carousel-item">
        <div class="row">
          <div class="col-md-6">
            <img src="../assets/services/Consulting.png" alt="Slide 3">
          </div>
          <div class="col-md-6">
            <h3>Consulting</h3>
            <p>If you're looking to design and improve your operations, or develop a winning strategy and execute it flawlessly, Fairlight Ventures has your back. 
                Our team can help you identify areas of improvement, develop a roadmap for success, and provide ongoing support to help you achieve your goals. 
                We're all about delivering results, and we're not satisfied until our clients are.</p>
          </div>
        </div>
      </div>

    <div class="carousel-item">
        <div class="row">
          <div class="col-md-6">
            <img src="../assets/services/Public_engagement.png" alt="Slide 4">
          </div>
          <div class="col-md-6">
            <h3>Speaking</h3>
            <p>We are passionate about sharing our expertise and thought leadership with the broader community. Whether it's keynotes, panels, or other speaking engagements, 
                we're always happy to engage and inspire audiences of all types. From emerging technologies to cyber security and beyond, we bring our A-game to every engagement to 
                deliver maximum impact.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Left and right controls -->
    <a class="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
  </template>

<style>
.carousel-item img {
  max-height: auto;
  max-width: 60%;
}

.carousel-item h3, .carousel-item p {
  color: #e9eaec;
  font-family: "Reg";
}

.carousel-control-prev,
    .carousel-control-next {
    top: auto;
    bottom: 5%;
    }

@media (max-width: 1200px) {
    .carousel-control-prev,
    .carousel-control-next {
    top: auto;
    bottom: -10%;
    }
    .carousel-indicators {
    bottom: -10%;
    }

    .container {
    height: 40vh;
    }
}    


@media (max-width: 767px) {
    .carousel-control-prev,
    .carousel-control-next {
    top: auto;
    bottom: -10%;
    }

    .carousel-indicators {
    bottom: -10%;
    }

    .container {
    height: 70vh;
    }
}
</style>