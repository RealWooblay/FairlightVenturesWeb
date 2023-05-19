<template>
  <div class="Header">
    <h1 class="ish" ref="ish">Who we are</h1>
  </div>
  <div class="bod">
    <div class="per" ref="per">
      <img src="../assets/Suz_headshot.png">
      <h3>
        <span>Suzanne Charlotte Vos</span>
      </h3>
      <p1>
        <bold>Founder</bold>
      </p1>
      <p>
        {{ summary }}
        <span v-if="showMore">
          <span style="font-size: 20px; color: black">{{ description }}</span>
        </span>
        <button v-if="showMore" @click="showMore = false">Show Less ↑</button>
        <button v-else @click="showMore = true">Show More ↓</button>
      </p>
      <a href="https://www.linkedin.com/in/suzannecharlottevos/">LinkedIn</a>
    </div>
    <div class="per" ref="per1">
      <img src="../assets/Dave_headshot.png">
      <h3>
        <span>David Plisek</span>
      </h3>
      <p1>
        <bold>Founder</bold>
      </p1>
      <p>
        {{ summary1 }}
        <span v-if="showMore2">
          <span style="font-size: 20px; color: black">{{ description2 }}</span>
        </span>
        <button v-if="showMore2" @click="showMore2 = false">Show Less ↑</button>
        <button v-else @click="showMore2 = true">Show More ↓</button>
      </p>
      <a href="https://www.linkedin.com/in/david-plisek/">LinkedIn</a>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      showMore: false,
      summary:
        "Suzanne Charlotte Vos is a business strategist and speaker with a proven track record of driving innovation and helping businesses achieve their goals.",
      description:
        "Born and raised in the Netherlands, Suzanne began her professional career at her family's manufacturing business, where she gained invaluable experience and eventually guided the sale of the company. After her work in the family business, Suzanne transitioned to the fast-paced world of financial services in Amsterdam and Singapore, bringing her global outlook to the table. She served as the Head of Innovation & Transformation APAC for ING Bank, where she played a key role in setting up the bank's innovation lab in Singapore and internal innovation capability. Suzanne's unique perspective on business operations comes from her extensive experience in the family business and financial services, making her a driving force behind some of the most exciting developments in the industry. She is passionate about helping businesses realize their full potential through tailored solutions that meet their unique needs. With a focus on driving innovation and achieving success in today's rapidly changing business landscape, Suzanne is dedicated to helping businesses stay ahead of the curve and achieve their goals.",
      showMore2: false,
      summary1:
        "David Plisek is a cybersecurity and technology executive with over a decade of experience driving innovation and delivering value to businesses.",
      description2:
        "As Co-Founder of Fairlight Ventures, David brings a wealth of expertise and experience to the table, with a track record of success at notable companies such as NAB, Standard Chartered Bank, and Accenture. With a background in cybersecurity, economics, and investing, David is highly skilled in developing strategies that drive positive change and create value for clients. He has contributed to cybersecurity and diplomatic security efforts during his tenure at the Australian Department of Foreign Affairs and Trade, and is passionate about emerging technologies and the role they play in shaping the future. As Regional Business Development for APAC at Arqit, Co-Founder at DivisionX, and Core Contributor at Saltwater Games, David is at the forefront of some of the most exciting developments in the industry. His dedication to driving innovation and delivering value is second to none, and he is committed to working closely with clients to achieve their goals and make a positive impact on the world."
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

    const ish = this.$refs.ish;
    observer.observe(ish);
  }
};
</script>

<style scoped>
button {
  position: relative;
  padding-right: 20px;
  /* add space for the arrow */
  background: transparent;
  border: 0px;
  color: black;
  font-size: 17px;
  font-family: "Bolds";
}

.Header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
  background-color: white;
}

.ish {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.Header h1 {
  color: #223D6A;
  font-family: "Bolds";

}

.bod {
  color: black;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
}

.per {
  text-align: center;
  padding: 30px;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

@media screen and (min-width: 768px) {
  .per {
    padding-left: 120px;
    padding-right: 120px;
  }

}

.per img {
  width: 50%;
  padding-bottom: 20px;
}


.per span {
  font-family: "Reg";
  color: #62A5AA;
}

.per p {
  color: black;
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
  color: #62A5AA;
}

@media (max-width: 767px) {

  /* Styles for mobile devices */
  .bod {
    grid-template-columns: 1fr;
  }


  .per p {
    text-align: center;
  }

  .per a {
    display: block;
    text-align: center;
    padding-top: 20px;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {

  /* Styles for tablets */
  .bod {
    grid-template-columns: repeat(2, 1fr);
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
  }

  .per p {
    text-align: left;
  }

  .per a {
    display: inline;
    padding-left: 10px;
  }

  .per {
    padding-bottom: 100px;
  }
}
</style>