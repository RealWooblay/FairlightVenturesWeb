<template>
  <div class="main-container">
    <div class="info" ref="info">
      <div class="text">
        <h1>We help <span>entrepreneurs and innovators</span>
          to solve the world’s <span>most pressing problems.</span>
          From the <span>early founder journey,</span>
          through <span>scaling</span> and capital raising,
          <strong>we have your back.</strong>
        </h1>
        <router-link to="/#contact">
          <Button class="bwt" label="WORK WITH US" style="display: inline-block" :class="'storybook-button--secondary'" />
        </router-link>
      </div>
      <div class="image" ref="info">
        <img src="../assets/Robot.png">
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Storybook/Button.vue';

export default {
  components: {
    Button,
  },
  mounted() {
    const options = {
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.style.opacity = '1';
        }
      });
    }, options);

    const info = this.$refs.info;

    observer.observe(info);
  }
}
</script>

<style>
.info {
  opacity: 0;
  display: flex;
  flex-wrap: wrap;
  transition: opacity 1s ease-in-out;
}

.info h1 {
  flex-basis: 100%;
  font-size: 40px;
  font-weight: lighter;
  padding: 0;
  padding-bottom: 50px;
  font-family: 'Reg';
}

.info span {
  font-weight: bold;
  font-family: "Reg";
}

.info p {
  flex-basis: 100%;
  font-size: 20px;
  padding: 0;
  padding-bottom: 20px;
}

.text {
  padding-left: 50px;
}

.info .bwt {
  padding-top: 20px;
}

.image img {
  width: 400px;
}

.text h1 span {
  font-family: "Bolds";
}

.text h1 strong {
  font-family: "Bolds";
  color: #62A5AA;
}

.main-container {
  background: #e9eaec;
  color: rgb(51, 51, 51);
  padding-top: 75px;
  padding-bottom: 50px;
}

@media (min-width: 768px) {
  .main-container {
    padding-left: 80px;
    padding-right: 80px;
  }
}

@media (max-width: 768px) {
  .info {
    flex-direction: column;
  }

  .text {
    padding: 20px;
    text-align: center;
  }

  .image {
    display: flex;
    justify-content: center;
  }

  .image img {
    width: 50%;
    height: auto;
    padding-top: 50px;
  }

  .info h1,
  .info p,
  .info span {
    font-size: 2rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .info {
    flex-direction: row;
    justify-content: space-between;
  }

  .text {
    flex-basis: 50%;
    padding-left: 40px;
  }

  .image {
    flex-basis: 40%;
  }

  .image img {
    width: 80%;
    height: auto;
  }

  .text h1 {
    font-size: 1.5rem;

  }
}

@media (min-width: 1025px) {
  .info {
    flex-direction: row;
    justify-content: space-between;
  }

  .text {
    flex-basis: 51%;
    padding-left: 40px;
  }

  .image {
    flex-basis: 40%;
  }

  .image img {
    width: 80%;
    height: auto;
  }
}
</style>