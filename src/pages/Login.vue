<template>
  <div class="login-container">
    <h2>Login</h2>

    <form @submit.prevent="login">
      <div class="form-group">
        <label>Email</label>
        <input v-model="email" type="email" placeholder="Enter your email" required />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input v-model="password" type="password" placeholder="Enter your password" required />
      </div>

      <button type="submit">Login</button>
    </form>

    <p class="signup-text">
      Don't have an account?
      <router-link to="/signup">Signup here</router-link>
    </p>
  </div>

  <!-- ===== Dialog ===== -->
  <div v-if="showDialog" class="dialog-overlay">
    <div class="dialog-box">
      <h3>{{ dialogTitle }}</h3>
      <p>{{ dialogMessage }}</p>

      <button class="dialog-btn" @click="closeDialog">
        OK
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

/* Dialog State */
const showDialog = ref(false)
const dialogTitle = ref('')
const dialogMessage = ref('')
const loginSuccess = ref(false)

/* Login */
const login = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    )

    dialogTitle.value = "Login Successful 🎉"
    dialogMessage.value = `Welcome ${userCredential.user.email}`
    loginSuccess.value = true
    showDialog.value = true

  } catch (err: any) {
    console.error(err)

    dialogTitle.value = "Login Failed"
    dialogMessage.value = err.message || "Invalid credentials"
    loginSuccess.value = false
    showDialog.value = true
  }
}

/* Close dialog */
const closeDialog = () => {
  showDialog.value = false

  if (loginSuccess.value) {
    router.push('/')
  }
}
</script>

<style scoped>

/* ===== Background ===== */
.login-container {
  max-width: 420px;
  margin: 80px auto;
  padding: 40px 35px;
  border-radius: 18px;
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255,255,255,0.2);
  box-shadow: 0 20px 45px rgba(0,0,0,0.15);
  text-align: center;
  animation: fadeSlide .8s ease;
}

:global(body){
  background: linear-gradient(135deg,#476793,#6b9ac4,#f59e0b);
  min-height:100vh;
  font-family:'Segoe UI',sans-serif;
}

h2{
  margin-bottom:25px;
  color:#fff;
  font-size:28px;
}

.form-group{
  margin-bottom:18px;
  text-align:left;
}

label{
  color:#fff;
  font-size:14px;
}

input{
  width:100%;
  padding:12px;
  border-radius:10px;
  border:none;
  background:rgba(255,255,255,.2);
  color:#fff;
}

input::placeholder{
  color:rgba(255,255,255,.7);
}

input:focus{
  background:rgba(255,255,255,.3);
  box-shadow:0 0 0 2px rgba(245,158,11,.6);
}

/* Button */
button{
  width:100%;
  padding:12px;
  border:none;
  border-radius:10px;
  margin-top:10px;
  cursor:pointer;
  font-weight:600;
  color:#fff;
  background:linear-gradient(135deg,#f59e0b,#ffb703);
}

button:hover{
  transform:translateY(-2px);
}

/* Signup text */
.signup-text{
  margin-top:18px;
  color:#fff;
}

.signup-text a{
  color:#7066ff;
  font-weight:600;
}

/* ===== Dialog ===== */
.dialog-overlay{
  position:fixed;
  inset:0;
  background:rgba(0,0,0,.5);
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:999;
  animation:fadeIn .3s ease;
}

.dialog-box{
  background:rgba(255,255,255,.15);
  backdrop-filter:blur(15px);
  padding:25px;
  border-radius:14px;
  width:320px;
  text-align:center;
  color:#fff;
  box-shadow:0 10px 30px rgba(0,0,0,.3);
  animation:scaleIn .3s ease;
}

.dialog-btn{
  margin-top:15px;
  background:#f59e0b;
}
/* ===== Responsive Fix ===== */


@media (max-width: 768px) {
  .login-container {
    margin: 60px 20px;   /* sides se gap */
    padding: 30px 25px;
  }
}

@media (max-width: 480px) {
  .login-container {
    margin: 40px 16px;   /* mobile side spacing */
    padding: 25px 20px;
    border-radius: 14px;
  }

  h2 {
    font-size: 24px;
  }

  input {
    padding: 11px;
  }

  button {
    padding: 11px;
  }
}
/* Animations */
@keyframes fadeSlide{
  from{opacity:0;transform:translateY(40px)}
  to{opacity:1;transform:translateY(0)}
}

@keyframes fadeIn{
  from{opacity:0}
  to{opacity:1}
}

@keyframes scaleIn{
  from{transform:scale(.8);opacity:0}
  to{transform:scale(1);opacity:1}
}

</style>