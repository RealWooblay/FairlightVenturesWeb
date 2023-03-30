<template>
    <div class="main">
      <div class="text" ref="text">
        <h1>We're not just investing in ideas:</h1>
        <h2>
          Calling those who are <span>passionate, driven,</span> and <span>committed</span> to making a
          difference
        </h2>
      </div>
      <div class="image" ref="image">
        <img src="../assets/Robot.png" alt="Rocket">
      </div>
    </div>
</template>
 
<script>
export default {
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

        const text = this.$refs.text;
        const image = this.$refs.image;
        observer.observe(text);
        observer.observe(image)
    }
  }
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #e9eaec;
  border: 1px solid grey;
  max-width: 1000px;
  margin: 0 auto; /* add this line to center horizontally */
  margin-top: 50px;
}
.main:hover {
  box-shadow: inset 0 0 10px 10px rgba(255, 1, 1, 0.4);
  animation: pulse 5s ease-in-out infinite;
}

@keyframes pulse {
  0% {
    box-shadow: inset 0 0 10px 0 rgba(255, 1, 1, 0.4);
  }
  50% {
    box-shadow: inset 0 0 10px 20px rgba(255, 1, 1, 0.4);
  }
  100% {
    box-shadow: inset 0 0 10px 0 rgba(255, 1, 1, 0.4);
  }
}
    .text {
      text-align: center;
      margin-bottom: 20px;
      opacity: 0;
      transition: opacity 1s ease-in-out;
    }
  
    .text h1 {
      font-size: 2rem;
      font-family: "Bolds";
      margin-bottom: 10px;
    }
  
    .text h2 {
      font-size: 1.5rem;
      font-family: "Reg";
      margin: 0;
    }
  
    .text span {
      color: red;
      font-family: "Bog";
    }
  
    .image img {
      width: 100%;
      max-width: 400px;
      margin-top: 20px;
    }

    .image {
      opacity: 0;
      transition: opacity 1s ease-in-out;
    }
  
    @media screen and (max-width: 767px) {
  .main {
    flex-direction: column;
  }
  .text {
    margin-bottom: 0;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .main {
    max-width: 750px;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1279px) {
  .main {
    max-width: 960px;
  }
}

@media screen and (min-width: 1280px) {
  .main {
    max-width: 1200px;
  }
}
  </style>