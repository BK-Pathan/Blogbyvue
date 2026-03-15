<template>
  <div v-if="post" class="post-detail">
    <h2>{{ post.title }}</h2><br>
    <p><strong>Category:</strong> {{ post.category }}</p> <br>
    <!-- <img v-if="post.imageUrl" :src="post.imageUrl" alt="post image"/> -->
    <p  class="post-content">{{ post.content }}</p> <br>
    <p><strong>Author:</strong> {{ shortAuthor(post.authorName) }}</p>
    <p><em>Posted on: {{ post.createdAt?.toDate().toLocaleString() }}</em></p>

  </div>
  <div v-else>Post not found.</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'

// Route and post reference
const route = useRoute()
const post = ref<any>(null)

// Function to show first 2 words of author + **** if longer
const shortAuthor = (fullName: string | undefined) => {
  if (!fullName) return '****'

  const words = fullName.split(' ')
  
  // Pehle 2 words
  const firstTwoWords = words.slice(0, 2)

  // Har word ke pehle 2 letters + space
  const shortWords = firstTwoWords.map(word => word.slice(0, 2))

  return shortWords.join(' ') + ' ****'
}

// Fetch post on mount
onMounted(async () => {
  try {
    const docRef = doc(db, 'posts', route.params.id as string)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      post.value = docSnap.data()
      post.value.id = docSnap.id
    } else {
      post.value = null
    }
  } catch (error) {
    console.error('Error fetching post:', error)
    post.value = null
  }
})
</script>

<style scoped>
.post-detail {
  max-width: 700px;
  margin: 40px auto;
  padding: 20px;
  line-height: 1.6;
}

.post-detail h2 {
  font-size: 28px;
  margin-bottom: 10px;
}

.post-detail p {
  font-size: 16px;
}

.post-detail img {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  margin: 12px 0;
  border-radius: 8px;
}

.post-content {
  text-align: justify;
}

/* Tablet */
@media (max-width: 768px) {
  .post-detail {
    margin: 20px;
    padding: 15px;
  }

  .post-detail h2 {
    font-size: 24px;
  }

  .post-detail p {
    font-size: 15px;
  }
}

/* Mobile */
@media (max-width: 480px) {
  .post-detail {
    margin: 10px;
    padding: 12px;
  }

  .post-detail h2 {
    font-size: 20px;
  }

  .post-detail p {
    font-size: 14px;
  }

  .post-detail img {
    max-height: 200px;
  }
}
</style>