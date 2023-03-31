<template>
    <div class="Header">
      <h1>Team</h1>
    </div>
    <div class="bod">
      <div class="per" ref="per">
        <!--<img src="../assets/ef3-placeholder-image.jpeg">-->
        <h3>
          <span>Suzanne Charlotte</span>
        </h3>
        <p1>Sydney | <bold>Founder</bold></p1>
        <p>
          {{ summary }}
          <span v-if="showMore">
            <span style="font-size: 20px; color: #e9eaec">{{ description }}</span>
          </span>
          <button v-if="showMore" @click="showMore = false">Show Less ↑</button>
          <button v-else @click="showMore = true">Show More ↓</button>
        </p>
        <a href="www.youtube.com">LinkedIn</a>
      </div>
      <div class="per" ref="per1">
        <!--<img src="../assets/ef3-placeholder-image.jpeg">-->
        <h3>
          <span>David Plisek</span>
        </h3>
        <p1>Sydney | <bold>Founder</bold></p1>
        <p>
          {{ summary1 }}
          <span v-if="showMore2">
            <span style="font-size: 20px; color: #e9eaec">{{ description2 }}</span>
          </span>
          <button v-if="showMore2" @click="showMore2 = false">Show Less ↑</button>
          <button v-else @click="showMore2 = true">Show More ↓</button>
        </p>
        <a href="www.youtube.com">LinkedIn</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showMore: false,
        summary:
          "With over a decade of experience, she has helped numerous businesses grow and succeed through her strategic insights and expertise. She is a highly accomplished speaker, who has delivered",
        description:
          " keynote speeches and workshops to audiences across the world, Which have helped businesses enhance all aspects of operations. Committed to building strong relationships with her clients, she takes a hands-on approach to problem-solving, to provide tailored solutions that meet the unique needs of each business. She is dedicated to helping businesses achieve their goals and realize their full potential, bringing a unique perspective to every project, to provide the best possible outcomes.",
        showMore2: false,
        summary1:
            "Meet our resident expert in cyber security and emerging technologies. With a wealth of experience in the field, he has a deep understanding of the",
        description2:
            "latest threats and vulnerabilities facing businesses today. As a specialist in technology and cyber security, he brings a comprehensive understanding of the latest best practices and tools used to modernise businesses and protect them from cyber attacks, by working closely with clients to identify potential risks and develop tailored strategies to safeguard their data and systems. He is also knowledgable in emerging technologies such as AI and quantum computing, having access to a vast range of resources and connections in these areas, which he can leverage to help businesses stay ahead of the curve in their use of technology."
      };
    },
    mounted() {
      const options = {
        rootMargin: "0px",
        threshold: 0.5
      };
  
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
            entry.target.style.opacity = "1";
          }
        });
      }, options);
  
      const per = this.$refs.per;
      observer.observe(per);
  
      const per1 = this.$refs.per1;
      observer.observe(per1);
    }
  };
  </script>

<style scoped>
button {
  position: relative;
  padding-right: 20px; /* add space for the arrow */
  background: transparent;
  border: 0px;
  color: red;
  font-size: 17px;
  font-family: "Bolds";
}
.Header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}

.Header h1 {
    color: #e9eaec;
    font-family: "Bolds";

}

.bod {
    color: #e9eaec;
    background: transparent;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
}

.per {
    text-align: center;
    margin: 30px;
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

.per img {
    width: 400px;
}


.per span {
    color: red;
    font-family: "Reg";
}

.per p {
    color: #e9eaec;
    font-size: 20px;
    text-align: left;
    font-family: "Reg";
}

.per bold {
    font-family: "Bolds";
}

.per a {
    font-family: "Reg";
    font-size: 19px;
    text-underline-offset: 0.25em;
    color: red;
}

@media (max-width: 767px) {
  /* Styles for mobile devices */
  .bod {
    grid-template-columns: 1fr;
    grid-gap: 30px;
  }

  .per img {
    width: 100%;
    height: auto;
  }

  .per p {
    text-align: center;
  }

  .per a {
    display: block;
    text-align: center;
    margin-top: 20px;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  /* Styles for tablets */
  .bod {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }

  .per img {
    width: 100%;
    height: auto;
  }

  .per p {
    text-align: center;
  }

  .per a {
    display: block;
    text-align: center;
    margin-top: 20px;
  }
}

@media (min-width: 1024px) {
  /* Styles for desktops */
  .bod {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
  }

  .per img {
    width: 400px;
    height: auto;
  }

  .per p {
    text-align: left;
  }

  .per a {
    display: inline;
    margin-left: 10px;
  }
}

</style>