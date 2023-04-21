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
        <a class="link" href="/privacy">Privacy Policy</a>
      </div>
      <div class="footer__social" ref="social">
        <a href="https://twitter.com">
          <font-awesome-icon icon="fa-brands fa-twitter" />
        </a>
        <a href="https://linkedin.com">
          <font-awesome-icon icon="fa-brands fa-linkedin" />
        </a>
      </div>
    </footer>
    <div class="copyright"><p>© 2023 Fairlight Ventures Pty Ltd. All rights reserved.</p></div>
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

  a {
    color: white;
  }

  .copyright {
    background-color: #1d1d1d;
    padding-bottom: 5px;
  }
  .copyright p {
    color: white;
    display: flex;
    justify-content: center;
  }
  .footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
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

.link {
    color: white;
    padding-top: 5px;
    text-decoration: none;
  }

  .link:hover {
    color: red;
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

  @media only screen and (max-width: 600px) {
  .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  
  .footer__brand {
    margin-bottom: 20px;
    text-align: center;
  }
  
  .footer__nav {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .footer__social {
    margin-top: 20px;
  }
}

/* Medium devices (tablets) */
@media only screen and (min-width: 601px) and (max-width: 1024px) {
  .footer {
    grid-template-columns: 1fr;
    padding: 30px;
  }
  
  .footer__brand {
    margin-bottom: 30px;
    text-align: center;
  }
  
  .footer__nav {
    flex-direction: column;
    gap: 20px;
    margin-bottom: 30px;
  }
  
  .footer__social {
    margin-top: 30px;
  }
}

  </style>
  