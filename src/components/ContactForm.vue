<template>
  <div class="contact">
      <div class="form">
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
            <button type="submit">Submit</button>
          </form>
      </div>
      <div class="col">
          <h1>Contact Information</h1> <br>
          <h4>Email: <span>thisisaplaceholder@fakeemail.com</span></h4>
          <br>
          <h4>Address: <span> 435 Tree Ave, Sydney</span></h4>
          <br>
          <p>Thank you for contacting us! <br> We will get back to you as soon as possible.</p> <br>
          <img class=lower src="../assets/Android-amico.png">
      </div>
      <div class="col">
        <img src="../assets/Android-amico.png">
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
}
}
</script>

<style>

.contact {
  display: grid;
  grid-template-columns: 1fr 1fr 0.8fr;
  gap: 50px;
  padding: 50px;
}

.form {
  padding-left: 20px;
  font-family: "Reg";
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
  background-color: #007aff;
  color: white;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
.col {
  color: black;
  font-size: 20px;
  font-family: "Bolds";
}

.col img {
  width: 100%;
}

.col h1 {
  font-weight: bold;
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