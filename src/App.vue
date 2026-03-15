<template>
  <div class="app">
    <Navbar />

    <main class="main-content">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from './components/Footer.vue'
import Navbar from './components/navbar.vue'
import './style.css'


</script>

<style>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* page content expands */
.main-content {
  flex: 1;
}
</style>
