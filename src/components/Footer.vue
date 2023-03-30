<template>
    <footer class="footer">
      <div class="footer__brand" ref="brand">
        <h3>Fairlight Ventures</h3>
        <nav class="footer__nav">
          <router-link to="/" class="footer__link">Home</router-link>
          <router-link to="/#about" v-scroll-to="'#about'" class="footer__link">About Us</router-link>
          <router-link to="/#service" v-scroll-to="'#service'" class="footer__link">Services</router-link>
          <router-link to="/#contact" v-scroll-to="'#contact'" class="footer__link">Contact</router-link>
        </nav>
      </div>
      <div class="footer__social" ref="social">
        <a href="https://twitter.com">
          <font-awesome-icon icon="fa-brands fa-twitter" />
        </a>
        <a href="https://linkedin.com">
          <font-awesome-icon icon="fa-brands fa-linkedin" />
        </a>
      </div>
      <div class="footer__copyright">
        © 2023 Fairlight Ventures Pty Ltd. All rights reserved.
      </div>
    </footer>
  </template>
  <script>
  export default {
    mounted() {
      const options = {
        rootMargin: '0px',
        threshold: 0.5,
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            entry.target.style.opacity = '1';
          }
        });
      }, options);
  
      const brand = this.$refs.brand;
      observer.observe(brand);
  
      const social = this.$refs.social;
      observer.observe(social);
    },
  };
  </script>
  <style scoped>
  .footer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: #1d1d1d;
    color: #e9eaec;
    padding: 40px 60px;
    text-align: center;
  }
  
  .footer__brand {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }
  
  .footer__brand h3 {
    font-style: italic;
    font-size: 1.2rem;
    margin-bottom: 15px;
  }
  
  .footer__nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
  
  .footer__link {
    font-size: 1rem;
    text-decoration: none;
    color: #e9eaec;
    transition: color 0.2s ease-in-out;
  }
  
  .footer__link:hover {
    color: red;
  }
  
  .footer__social {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-top: 30px;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }
  
.footer__social a {
    color: #e9eaec;
    font-size: 25px;
}

  .footer__social a:hover {
    color: red;
  }
  
  .footer__copyright {
    font-size: 0.8rem;
    justify-self: end;
  }

  @media (max-width: 768px) {
  .footer {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, auto);
    padding: 30px;
  }
  
  .footer__brand {
    order: 1;
  }
  
  .footer__nav {
    order: 3;
  }
  
  .footer__social {
    order: 2;
    margin-top: 0;
  }
  
  .footer__social a {
    font-size: 20px;
  }
  .footer__copyright {
    font-size: 0.8rem;
    justify-self: end;
    order: 4;
  }
}
  </style>
  