<template>
  <div class="home">
    
    <HeroSection/>
    
    <BlogSection/>

    <ReviewSection/>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import HeroSection from './HeroSection.vue'
import ReviewSection from './ReviewSection.vue'
import BlogSection from './BlogSection.vue'


type Post = { id: number; title: string; content: string }

const posts = ref<Post[]>([]) // You can later move this to a store or localStorage
const currentPage = ref(1)
const perPage = 5

const totalPages = computed(() => Math.ceil(posts.value.length / perPage))
</script>

<style>
/* ===== PAGE BASE ===== */
.home {
  min-height: 100vh;
  background: #f8fafc;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, sans-serif;
}

/* ===== HERO SECTION ===== */
.hero {
  text-align: center;
  padding: 70px 20px 40px;
  background: white;
  border-bottom: 1px solid #e5e7eb;
}

.hero h1 {
  font-size: 38px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 12px;
}

.hero p {
  font-size: 17px;
  color: #6b7280;
  max-width: 600px;
  margin: auto;
}

/* ===== POSTS AREA ===== */
.posts-wrapper {
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
}
</style>