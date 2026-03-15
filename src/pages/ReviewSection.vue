<template>
  <section class="reviews">
    <h2>What Readers Say</h2>

    <div class="review-grid">
      <div
        class="review-card glass-card"
        v-for="(review, index) in reviews"
        :key="index"
      >
        <p>{{ review.text }}</p>
        <div class="user">
          <img :src="review.avatar" alt="User Avatar" />
          <span>{{ review.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const reviews = ref([
  {
    text: 'This blog completely changed how I plan my travels. Amazing content and beautiful design!',
    avatar: 'https://i.pinimg.com/1200x/7a/a1/db/7aa1dbae860dd50acb959ae6a180177f.jpg',
    name: 'Sarah Ahmed',
  },
  {
    text: 'I love the detailed guides and tips. Every post feels personal and really helpful for first-time travelers.',
    avatar: 'https://i.pinimg.com/736x/7c/25/74/7c25747aa214fa6eedec7cd13bf06a64.jpg',
    name: 'Ali Khan',
  },
  {
    text: 'A fantastic resource! The stories are inspiring, and the visuals make me want to pack my bags immediately.',
    avatar: 'https://i.pinimg.com/736x/4e/5d/84/4e5d84e967cdf19ece54aaa281220669.jpg',
    name: 'Fatima Noor',
  },
])
</script>

<style scoped>
.reviews {
  background: linear-gradient(180deg, skyblue, rgb(119, 143, 163));
  padding: 70px 20px;
  text-align: center;
}

.reviews h2 {
  font-size: 28px;
  margin-bottom: 40px;
  color: white;
}

.review-grid {
  max-width: 1000px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 25px;
}

.review-card.glass-card {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 14px;
  padding: 25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: white;
  transition: 0.3s;
}

.review-card.glass-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.08);
}

.user {
  margin-top: 15px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
}

.user img {
  width: 50px;       /* Fixed size for avatar */
  height: 50px;
  border-radius: 50%;
  object-fit: cover;  /* Ensures image fits nicely inside the circle */
  border: 2px solid white; /* Optional: nice border for glass effect */
}
</style>