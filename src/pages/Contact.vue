<template>
  <section class="contact">

    <!-- Hero -->
    <div class="hero">
      <h1>Contact Us</h1>
      <p>Have questions or suggestions? We'd love to hear from you!</p>
    </div>

    <!-- Contact Form -->
    <div class="form-container">
      <form @submit.prevent="submitForm">

        <label for="name">Name</label>
        <input type="text" id="name" v-model="form.name" required placeholder="Your Name">

        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email" required placeholder="Your Email">

        <label for="message">Message</label>
        <textarea id="message" v-model="form.message" required placeholder="Your Message"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>

  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      alert(`Thank you, ${this.form.name}! Your message has been sent.`);
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
}
</script>

<style scoped>

*{
  box-sizing: border-box;
}

.contact {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #6b8dd6, #3a5ca8);
  color: #fff;
  min-height: 100vh;
  padding-bottom: 50px;
}

/* Hero */

.hero {
  width: 100%;
  text-align: center;
  padding: 50px 20px 40px 20px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  margin: 0;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.hero h1 {
  font-size: 48px;
  margin-bottom: 10px;
  letter-spacing: 1px;
}

.hero p {
  max-width: 600px;
  margin: auto;
  font-size: 18px;
  color: rgba(255,255,255,0.85);
}

/* Form Container */

.form-container {
  width: 90%;
  max-width: 500px;
  margin: 40px auto;
  padding: 40px;
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.25);
  border: 1px solid rgba(255,255,255,0.2);
  transition: all 0.3s ease;
}

/* Form */

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Labels */

label {
  font-weight: 600;
  color: #fff;
  text-shadow: 0 1px 3px rgba(0,0,0,0.3);
}

/* Inputs */

input,
textarea {
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.3);
  background: rgba(255,255,255,0.05);
  color: #fff;
  outline: none;
  font-size: 16px;
  transition: all 0.3s ease;
}

textarea{
  min-height:120px;
  resize:vertical;
}

input::placeholder,
textarea::placeholder {
  color: rgba(255,255,255,0.6);
}

input:focus,
textarea:focus {
  border-color: #ffd369;
  box-shadow: 0 0 10px rgba(255,211,105,0.5);
  background: rgba(255,255,255,0.1);
}

/* Button */

button {
  padding: 15px;
  background: #476793;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(93,153,163,0.4);
}

button:hover {
  background: rgb(62,106,150);
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(110,201,216,0.5);
}

/* Tablet */

@media (max-width: 768px) {

  .hero h1 {
    font-size: 36px;
  }

  .hero p {
    font-size: 16px;
  }

  .form-container {
    width: 92%;
    padding: 25px;
  }

}

/* Mobile */

@media (max-width: 480px){

  .hero{
    padding:40px 15px;
  }

  .hero h1{
    font-size:28px;
  }

  .form-container{
    width:95%;
    padding:20px;
  }

  input,
  textarea{
    padding:12px;
    font-size:14px;
  }

  button{
    padding:13px;
    font-size:15px;
  }

}

</style>