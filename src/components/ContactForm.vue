<template>
  <div class="contact">
      <div class="form" ref="col2">
          <form @submit.prevent="submitForm">
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
      <div class="col" ref="col">
          <h1>Contact Information</h1> <br>
          <p>Thank you for contacting us! <br> We will get back to you as soon as possible.</p> <br>
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
        message: ''
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
        alert('Your message has been sent!')
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

        const col = this.$refs.col;
        observer.observe(col);

        const col1 = this.$refs.col1;
        observer.observe(col1);

        const col2 = this.$refs.col2;
        observer.observe(col2);
    }
}
</script>

<style>

.contact {
  display: grid;
  grid-template-columns: 1fr 1fr 0.8fr;
  gap: 50px;
  padding: 50px;
  background-color: #e9eaec;
}

.form {
  padding-left: 20px;
  font-family: "Reg";
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

label {
  display: block;
  margin-bottom: 0.5rem;
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
  color: black;
  font-size: 20px;
  font-family: "Bolds";
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.col img {
  width: 100%;
}

.col h1 {
  font-family: "Bolds";
}

.col p {
  font-family: "Reg";
}

.col span {
  font-family: "Reg";
  font-size: 18px;
}
.lower {
  display: none;
}

@media (max-width: 900px) {
  .col img {
    display: none;
  }
  .contact {
    grid-template-columns: 1fr 1fr;
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
}

@media (max-width: 400px) {
  .contact {
    gap: 10px;
  }
  .col, .col span {
    font-size: 9px;
  }
}

</style>