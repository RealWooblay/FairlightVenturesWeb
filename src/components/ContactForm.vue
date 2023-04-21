<template>
  <div class="contact">
      <div v-if="!formSubmitted" class="form" ref="col2">
          <form @submit.prevent="submitForm">
            <h1>Contact Us</h1>
            <br>
            <label>
              Name:
              <input type="text" v-model="name" />
            </label>
            <label>
              Email:
              <input type="email" v-model="email" />
            </label>
            <label>
              Message:
              <textarea v-model="message"></textarea>
            </label>
            <div><button type="submit">Submit</button></div>
          </form>
      </div>
      <div v-else class="thank-you-message">
        <h1>Thank You! <br>
        <p>Your message has been sent.</p>
        </h1>
      </div>
      <div class="col" ref="col1">
        <img src="../assets/Rocket_research-bro.png">
      </div>
    </div>
</template>
<script>
  import emailjs from 'emailjs-com'


  export default {
    data() {
      return {
        name: '',
        email: '',
        message: '',
        formSubmitted: false
      }
    },
    methods: {
  submitForm() {
    const templateParams = {
      name: this.name,
      email: this.email,
      message: this.message
    }

    emailjs
      .send('service_2wem0tp', 'template_fnyel2s', templateParams, '3lcPkK4z2zThlOxmI')
      .then(() => {
        this.formSubmitted = true
      })
      .catch(error => {
        console.error(error)
        alert('An error occurred while sending your message.')
      })

    this.name = ''
    this.email = ''
    this.message = ''
  }
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

        const col1 = this.$refs.col1;
        observer.observe(col1);

        const col2 = this.$refs.col2;
        observer.observe(col2);
    }
}
</script>

<style scoped>

.thank-you-message {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Reg";
  color: black;
}

.thank-you-message p {
  font-size: 20px;
  font-family: "Reg";
}

.contact {
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  padding: 50px;
  background-color: #e9eaec;
}

.contact h1 {
  color: rgb(51, 51, 51);
}

.form {
  padding-left: 150px;
  padding-right: 100px;
  font-family: "Reg";
  opacity: 0;
  transition: opacity 1s ease-in-out;
  color: black;
}

.form h1 {
  font-family: "Bolds";
}

label {
  display: block;
  color: black;
}

input,
textarea {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
}

button[type='submit'] {
  background-color: black;
  color: #e9eaec;
  font-family: "Reg";
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.col {
  padding-left: 50px;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.col img {
  width: 100%;
}

.lower {
  display: none;
}

@media (max-width: 950px) {
  .col img {
    display: none;
  }
  .col, .col span {
    font-size: 15px;
  }
  .form {
    padding-left: 0px;
  }
  .lower {
    display: contents;
  }
  .form {
  padding-left: 10px;
  padding-right: 10px;
  }

  .contact {
    display: grid;
    grid-template-columns: 1fr;
  }
}

</style>