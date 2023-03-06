<template>
  <div class="main">
    <div class="col">
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
    <div class="col1">
      <h1>Contact Information</h1>
      <br>
      <h3>Email: ...</h3>
      <br>
      <h3>Address: ...</h3>
      <br>
      <h4>Thank you for Contacting Us! We will get back to you as soon as possible.
      <br> We are excited to take this journey with you to achieving your dreams.
      </h4>
      <br>
      <h1 style="color: darkred;">- Fairlight Ventures</h1>
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

.main {
  height: 550px;
}

label {
  display: block;
  margin-bottom: 0.5rem;
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

.main {
  padding: 70px;
  background: linear-gradient(135deg, #e4e4e4, #9b9b9b, #e4e4e4);
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.col1 {
  padding-left: 80px;
}


</style>