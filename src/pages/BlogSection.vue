<template>
  <section class="blogs">
    <div class="container">
      <div class="heading">
        <h2>Blog</h2>
        <p>Travel tips, guides and inspiring stories.</p>
      </div>

      <div class="blog-grid">
        <!-- DUMMY POSTS -->
        <div
          v-for="post in dummyPosts"
          :key="post.id"
          class="blog-card glass-card"
        >
          <img :src="post.image" />

          <div class="card-body">
            <span class="category">{{ post.category }}</span>
            <h3>{{ post.title }}</h3>
            <p>{{ post.content }}</p>
          </div>
        </div>
      </div>

      <div class="btn-wrapper">
        <button @click="goToAllBlogs">Latest Posts</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const dummyPosts = [
  { id: 1, title: 'Top 10 Travel Tips', content: 'Discover the secrets of easy travel...', category: 'Travel', image: 'https://i.pinimg.com/1200x/6f/b7/31/6fb7315c14fe29e7bab845fdaaa09770.jpg' },
  { id: 2, title: 'City Guide: Paris', content: 'Explore the must-visit places in Paris...', category: 'Guide', image: 'https://i.pinimg.com/1200x/21/06/55/2106558ee01ba951864f63464573f2b2.jpg' },
  { id: 3, title: 'Adventure in the Alps', content: 'Experience thrilling adventures in the Alps...', category: 'Adventure', image: 'https://i.pinimg.com/1200x/cf/1d/b8/cf1db89fc8b650f69258258cb3423655.jpg' },
]

const goToAllBlogs = () => {
  router.push('/all')
}
</script>

<style scoped>
/* ── OUTER CONTAINER ── */
.blogs {
  width: 100%;
  padding: 60px 20px;
  background: linear-gradient(265deg, skyblue, rgb(119, 143, 163));
}

/* ── HEADING ── */
.heading h2 {
  font-size: 28px;
  margin-bottom: 5px;
  text-align: center;
  color: white;
}

.heading p {
  color: white;
  margin-bottom: 30px;
  text-align: center;
}

/* ── BLOG GRID ── */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

/* ── GLASS CARDS ── */
.blog-card.glass-card {
  background: rgba(255, 255, 255, 0.15); /* semi-transparent */
  border-radius: 14px;
  overflow: hidden;
  transition: 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.blog-card.glass-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 25px rgba(0,0,0,0.08);
}

/* ── IMAGES ── */
.blog-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

/* ── CARD BODY ── */
.card-body {
  padding: 18px;
  color: white; /* glass cards text white for contrast */
}

.category {
  font-size: 12px;
  color: white;
  font-weight: 600;
}

.card-body h3 {
  margin: 8px 0;
}

/* ── BUTTON ── */
.btn-wrapper {
  text-align: center;
  margin-top: 30px;
}

.btn-wrapper button {
  background: #4b95bd;
  color: white;
  padding: 10px 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
}

.btn-wrapper button:hover {
  background: #3680b1;
}
</style>