<template>
  <div class="blogs-page">

    <!-- HERO -->
    <section class="hero">
      <h1>All Blog Posts</h1>
      <p>Explore all our articles, tutorials, and insights.</p>
    </section>

    <!-- BLOG GRID -->
    <section class="posts-wrapper">
      <PostList :posts="posts" />

      <Pagination
        :current-page="currentPage"
        :total-pages="totalPages"
        @change-page="currentPage = $event"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import PostList from '../components/PostList.vue'
import Pagination from '../components/Pagination.vue'

type Post = { id: number; title: string; content: string }

const posts = ref<Post[]>([]) // You can later move this to a store or localStorage
const currentPage = ref(1)
const perPage = 5

const totalPages = computed(() => Math.ceil(posts.value.length / perPage))
</script>

<style scoped>
.blogs-page {
    margin-top: 10px !important;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
  color: #111827;
}

.hero {
  text-align: center;
  padding: 80px 20px 50px;
  background: rgba(255,255,255,0.2);
  border-bottom: 1px solid rgba(255,255,255,0.3);
  border-radius: 20px;
  box-shadow: 0 6px 25px rgba(0,0,0,0.1);
}

.hero h1 {
  font-size: 42px;
  font-weight: 700;
  color: white;
  margin-bottom: 10px;
  line-height: 1.2;
}

.hero p {
  font-size: 18px;
  color: #4b5563;
  max-width: 650px;
  margin: 0 auto;
}

.posts-wrapper {
  margin: 50px 0;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 2 cards side by side */
  gap: 20px;
}

.blog-card {
  background: rgba(255,255,255,0.15);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.3);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}


.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 14px 28px rgba(0,0,0,0.18);
}

.blog-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  transition: transform 0.35s ease;
}

.blog-card:hover img {
  transform: scale(1.05);
}

.card-body {
  padding: 20px;
}

.category {
  font-size: 13px;
  font-weight: 500;
  color: #6366f1;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.card-body h3 {
  font-size: 20px;
  margin: 12px 0;
  font-weight: 600;
  color: #111827;
}

.card-body p {
  font-size: 15px;
  color: #4b5563;
  line-height: 1.6;
}

/* ── PAGINATION ── */
.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
}

.pagination button {
  padding: 8px 14px;
  border-radius: 10px;
  border: none;
  background: rgba(99,102,241,0.8);
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pagination button:hover {
  background: rgba(99,102,241,1);
  transform: translateY(-2px) scale(1.05);
}

/* ── RESPONSIVE ── */
@media (max-width: 640px) {
  .blogs-page {
    padding: 20px 10px;
  }
  .hero h1 {
    font-size: 32px;
  }
  .hero p {
    font-size: 16px;
  }
}</style>