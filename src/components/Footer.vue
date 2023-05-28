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
  </footer>
  <div class="copyright">
    <router-link to="/privacy" class="footer__link" @click.prevent="scrollToTop">Privacy Policy</router-link>
    <p>© 2023 Fairlight Ventures Pty Ltd. All rights reserved.</p>
  </div>
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

  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
</script>
<style scoped>
.copyright {
  background-color: #223D6A;
  padding-bottom: 5px;
}

@media (min-width: 768px) {
  .copyright p {
    display: flex;
  }

  .copyright {
    padding-left: 100px;
  }

  .footer {
    padding: 40px 100px;
  }
}

@media (max-width: 787px) {
  .footer {
    padding: 15px 40px;
  }

  .copyright {
    padding: 5px 40px;
  }

  .copyright p {
    font-size: 0.7rem;
  }

  .footer__brand h3 {
    font-size: 0.4rem;
    padding-top: 10px;
  }

  .footer__link {
    font-size: 0.7rem;
    gap: 2px;
  }
}

.footer {
  background-color: #223D6A;
  color: white;
  width: 100%;
}

.footer__brand {
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.footer__brand h3 {
  font-size: 1rem;
}

.footer__nav {
  display: flex;
  gap: 15px;
}

.footer__link {
  text-decoration: none;
  color: #e9eaec;
  transition: color 0.2s ease-in-out;
}

.footer__link:hover {
  color: #62A5AA;
}
</style>
  