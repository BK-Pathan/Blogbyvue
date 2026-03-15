<template>
  <div class="add-post glass-container">
    <h2>Add New Post</h2>

    <form @submit.prevent="submitPost">
      <div class="form-group">
        <label>Title</label>
        <input v-model="title" type="text" placeholder="Enter post title" required />
      </div>

      <div class="form-group">
        <label>Category</label>
        <select v-model="category" required>
          <option disabled value="">Select Category</option>
          <option>Technology</option>
          <option>AI</option>
          <option>Business</option>
          <option>Education</option>
          <option>Lifestyle</option>
          <option>Health & Fitness</option>
          <option>Travel</option>
          <option>Food</option>
          <option>Entertainment</option>
          <option>News</option>
        </select>
      </div>

      <div class="form-group">
        <label>Author Name</label>
        <input v-model="authorName" type="text" placeholder="Enter your name" required />
      </div>

      <div class="form-group">
        <label>Content</label>
        <textarea v-model="content" placeholder="Write content..." required></textarea>
      </div>

      <button type="submit" class="submit-btn">Submit Post</button>
    </form>
  </div>

  <!-- ===== Dialog ===== -->
  <div v-if="showDialog" class="dialog-overlay">
    <div class="dialog-box">
      <h3>{{ dialogTitle }}</h3>
      <p>{{ dialogMessage }}</p>
      <button class="dialog-btn" @click="closeDialog">OK</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { auth, db } from '../firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { useRouter } from 'vue-router'

const router = useRouter()

const title = ref('')
const content = ref('')
const category = ref('')
const authorName = ref(auth.currentUser?.displayName || auth.currentUser?.email || '')

// Dialog state
const showDialog = ref(false)
const dialogTitle = ref('')
const dialogMessage = ref('')
const postSuccess = ref(false)

const submitPost = async () => {
  try {
    await addDoc(collection(db, 'posts'), {
      title: title.value,
      content: content.value,
      category: category.value,
      authorName: auth.currentUser?.displayName || auth.currentUser?.email,
      authorId: auth.currentUser?.uid,
      authorEmail: auth.currentUser?.email,
      createdAt: serverTimestamp()
    })

    dialogTitle.value = 'Post Added 🎉'
    dialogMessage.value = 'Your post has been added successfully!'
    postSuccess.value = true
    showDialog.value = true

    // Clear form
    title.value = ''
    content.value = ''
    category.value = ''

  } catch (error: any) {
    console.error('Error adding post:', error)

    dialogTitle.value = 'Failed ❌'
    dialogMessage.value = error.message || 'Could not add post.'
    postSuccess.value = false
    showDialog.value = true
  }
}

// Close dialog + redirect
const closeDialog = () => {
  showDialog.value = false

  if (postSuccess.value) {
    router.push('/all')
  }
}
</script>

<style scoped>
.add-post {
  max-width: 600px;
  margin: 60px auto;
  padding: 30px 25px;
  border-radius: 20px;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  backdrop-filter: blur(15px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
}

.add-post h2 {
  text-align: center;
  color: #000;
  margin-bottom: 25px;
  font-size: 1.8rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
}

.form-group label {
  margin-bottom: 5px;
  font-weight: 500;
  color: #000;
}
.form-group ::placeholder{
  color: black;
}

input, textarea, select {
  padding: 12px 15px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.3);
  background: rgba(255,255,255,0.05);
  color: #000;
  font-size: 0.95rem;
}

input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 10px rgba(99,102,241,0.4);
}

.submit-btn {
  width: 100%;
  padding: 12px 0;
  border-radius: 12px;
  border: none;
  background: linear-gradient(90deg, #6366f1, #3b82f6);
  color: white;
  font-weight: 600;
  cursor: pointer;
}

/* Dialog */

.dialog-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-box {
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(15px);
  padding: 25px;
  border-radius: 14px;
  width: 320px;
  text-align: center;
}

.dialog-btn {
  margin-top: 15px;
  background: #6366f1;
  color: #fff;
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

@media (max-width: 640px) {
  .add-post {
    margin: 40px 15px;
    padding: 25px 15px;
  }
}
</style>