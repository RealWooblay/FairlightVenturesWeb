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
          <h4>Address: <span>123 Tree Ave, Sydney</span></h4>
          <br>
          <p>Thank you for contacting us! <br> We will get back to you as soon as possible.</p>
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
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  padding: 50px;
}

.form {
  padding-left: 20px;
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
}

.col h1 {
  font-weight: bold;
}

.col span {
  font-style: italic;
  font-size: 13px;
}

</style>