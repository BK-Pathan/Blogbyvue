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
      // Reset form
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
}
</script>

<style scoped>
.contact {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #6b8dd6, #3a5ca8);
  color: #fff;
  min-height: 90vh;
  transition: background 0.3s, color 0.3s;
  padding-bottom: 50px;
}

.hero {
  width: 100%;
  text-align: center;
  padding: 50px 20px 40px 20px;  /* top 50px, bottom 40px */
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 0; /* ya 20px agar rounded chahen */
  margin: 0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
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
  color: rgba(255, 255, 255, 0.85);
}

/* Form Container with Glass Effect */
.form-container {
  max-width: 500px;
  margin: 40px auto;
  padding: 40px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

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

/* Inputs and Textarea */
input,
textarea {
  padding: 15px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  outline: none;
  font-size: 16px;
  transition: all 0.3s ease;
}

input::placeholder,
textarea::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

input:focus,
textarea:focus {
  border-color: #ffd369;
  box-shadow: 0 0 10px rgba(255, 211, 105, 0.5);
  background: rgba(255, 255, 255, 0.1);
}

/* Button */
button {
  padding: 15px;
  background: #476793;
  color: #1a1a1a;
  font-weight: bold;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(93, 153, 163, 0.4);
}

button:hover {
  background: rgb(62, 106, 150);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(110, 201, 216, 0.5);
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    padding: 60px 15px 40px 15px;
    border-radius: 15px;
  }

  .form-container {
    padding: 25px;
    border-radius: 15px;
  }

  .hero h1 {
    font-size: 36px;
  }

  .hero p {
    font-size: 16px;
  }
}
</style>