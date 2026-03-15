<template>
  <nav class="navbar">
    <div class="container">
      <div ><a href="/" class="logo">MyBlog</a></div>

   
<button class="hamburger" @click="toggleMenu">
  <span :class="['line', menuOpen ? 'active1' : '']"></span>
  <span :class="['line', menuOpen ? 'active2' : '']"></span>
  <span :class="['line', menuOpen ? 'active3' : '']"></span>
</button>
      <ul :class="['nav-links', { open: menuOpen }]">
        <li><router-link to="/" class="nav-link">Home</router-link></li>
        <li><router-link to="/about" class="nav-link">About</router-link></li>
        <li><router-link to="/all" class="nav-link">All Posts</router-link></li>

        <!-- Logged user -->
        <li v-if="user">
          <router-link to="/add" class="nav-link">Add Post</router-link>
        </li>
 
        <li>
    <router-link to="/contact" class="nav-link">Contact</router-link>
  </li>
        <!-- Auth links -->
        <li v-if="!user">
          <router-link to="/login" class="nav-link login-btn">Login</router-link>
        </li>
        <li v-if="!user">
          <router-link to="/signup" class="nav-link signup-btn">Signup</router-link>
        </li>

        <li v-if="user">
          <button class="nav-link logout-btn" @click="showLogoutDialog = true">Logout</button>
        </li>
        
      </ul>
    </div>
  </nav>

  <!-- ===== Logout Dialog ===== -->
  <div v-if="showLogoutDialog" class="dialog-overlay">
    <div class="dialog-box">
      <h3>Confirm Logout</h3>
      <p>Are you sure you want to logout?</p>
      <div class="dialog-actions">
        <button class="cancel" @click="showLogoutDialog = false">Cancel</button>
        <button class="confirm" @click="confirmLogout">Logout</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter, useRoute } from 'vue-router'

const menuOpen = ref(false)
const toggleMenu = () => { menuOpen.value = !menuOpen.value }

const user = ref<any>(null)
const showLogoutDialog = ref(false)
const router = useRouter()
const route = useRoute()

// Track auth state
onMounted(() => {
  onAuthStateChanged(auth, (u) => { user.value = u })
})

// Close menu on route change
watch(() => route.fullPath, () => {
  menuOpen.value = false
})

// Confirm Logout
const confirmLogout = async () => {
  await signOut(auth)
  showLogoutDialog.value = false
  router.push('/login')
}
</script>

<style scoped>
/* ===== Navbar ===== */
.navbar {
  width: 100%;
  background: rgba(105,134,175,0.5);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 10;
  height: 80px;
  border-bottom: 1px solid rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

/* ===== Links ===== */
.nav-links {
  display: flex;
  align-items: center;
  gap: 10px;
  list-style: none;
}

.nav-link {
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  padding: 5px 12px;
  border-radius: 5px;
  transition: 0.3s;
}

.nav-link:hover {
  background: rgba(255,255,255,0.2);
}

.nav-link.router-link-exact-active {
  background: #fff;
  color: #476793;
  font-weight: bold;
}

/* Buttons */
.login-btn { background: rgba(71,103,147,0.8); }
.signup-btn { background: #f59e0b; }
.logout-btn {
  background: #ff4d4d;
  border: none;
  cursor: pointer;
}

/* ===== Hamburger ===== */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 999;
}

.hamburger .line {
  width: 25px;
  height: 3px;
  background: #fff;
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* Active transforms for X animation */
.active1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}
.active2 {
  opacity: 0;
}
.active3 {
  transform: rotate(45deg) translate(-5px, -6px);
}

/* ===== Mobile ===== */
@media (max-width:768px){
  .hamburger { display:flex; }

  .nav-links {
    position: fixed;
    top: 0;
    right: 0;
    width: 50%;
    height: 100vh;
    background: rgba(71,103,147,0.95);
    flex-direction: column;
    padding-top: 80px;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    gap: 20px;
    z-index: 5;
  }

  .nav-links.open {
    transform: translateX(0);
  }

  .nav-links li {
    padding: 12px 20px;
    text-align: right;
  }
}

/* ===== Dialog ===== */
.dialog-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  animation: fadeIn .3s ease;
}

.dialog-box {
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(15px);
  padding: 25px;
  border-radius: 14px;
  width: 320px;
  text-align: center;
  color: #fff;
  box-shadow: 0 10px 30px rgba(0,0,0,.3);
  animation: scaleIn .3s ease;
}

.dialog-actions {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 15px;
}

.dialog-actions button {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}

.cancel { background: #777; color: #fff; }
.confirm { background: #ff4d4d; color: #fff; }

@keyframes fadeIn {
  from { opacity: 0 }
  to { opacity: 1 }
}

@keyframes scaleIn {
  from { transform: scale(.8); opacity: 0 }
  to { transform: scale(1); opacity: 1 }
}

</style>