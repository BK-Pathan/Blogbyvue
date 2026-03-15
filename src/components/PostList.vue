<template>
  <div class="post-list">
    <div v-if="posts.length === 0">No posts yet.</div>

    <div v-for="post in posts" :key="post.id" class="post-card">

      <!-- NORMAL VIEW -->
      <div v-if="!editingPost || editingPost.id !== post.id">
        <h3 @click="viewPost(post)">{{ post.title }}</h3>
        <p>{{ post.content.slice(0, 100) }}...</p>
        <p>By: {{ maskAuthor(post.authorName) }}</p>

        <div v-if="user && (user.email === adminEmail || user.email === post.authorEmail)" class="actions">
          <button class="update-btn" @click.stop="startEdit(post)">Update</button>
          <button class="delete-btn" @click.stop="confirmDelete(post.id)">Delete</button>
        </div>
      </div>

      <!-- EDIT MODE -->
      <div v-else class="edit-form">
        <input v-model="editingPost.title" placeholder="Post title"/>
        <textarea v-model="editingPost.content" rows="4" placeholder="Post content"></textarea>
        <div class="actions">
          <button class="save-btn" @click="saveUpdate">Save</button>
          <button class="cancel-btn" @click="editingPost = null">Cancel</button>
        </div>
      </div>

    </div>
  </div>

  <!-- ===== Dialog ===== -->
  <div v-if="showDialog" class="dialog-overlay">
    <div class="dialog-box">
      <h3>{{ dialogTitle }}</h3>
      <p>{{ dialogMessage }}</p>
      <div v-if="isConfirm">
        <button class="dialog-btn" @click="confirmYes">Yes</button>
        <button class="dialog-btn cancel-btn" @click="closeDialog">No</button>
      </div>
      <div v-else>
        <button class="dialog-btn" @click="closeDialog">OK</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { db, auth } from '../firebase'
import { collection, getDocs, query, orderBy, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'

const posts = ref<any[]>([])
const editingPost = ref<any>(null)
const user = ref<any>(null)
const adminEmail = import.meta.env.VITE_ADMIN_EMAIL
const router = useRouter()

// Dialog state
const showDialog = ref(false)
const dialogTitle = ref('')
const dialogMessage = ref('')
const isConfirm = ref(false)
let deleteTargetId: string | null = null

// Track logged-in user
onAuthStateChanged(auth, (u) => { user.value = u })

// Fetch posts
const fetchPosts = async () => {
  try {
    const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'))
    const querySnapshot = await getDocs(q)
    posts.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}

onMounted(fetchPosts)

// Navigate to PostDetail
const viewPost = (post: any) => {
  router.push({ name: 'PostDetail', params: { id: post.id } })
}

// Start editing
const startEdit = (post: any) => {
  editingPost.value = { ...post }
}

// Confirm delete
const confirmDelete = (postId: string) => {
  dialogTitle.value = 'Confirm Delete'
  dialogMessage.value = 'Are you sure you want to delete this post?'
  isConfirm.value = true
  deleteTargetId = postId
  showDialog.value = true
}

// Confirm yes for delete
const confirmYes = async () => {
  if (!deleteTargetId) return
  try {
    await deleteDoc(doc(db, 'posts', deleteTargetId))
    posts.value = posts.value.filter(p => p.id !== deleteTargetId)
    dialogTitle.value = 'Deleted ✅'
    dialogMessage.value = 'Post deleted successfully!'
    isConfirm.value = false
  } catch (error) {
    console.error('Delete error:', error)
    dialogTitle.value = 'Failed ❌'
    dialogMessage.value = 'Failed to delete post.'
    isConfirm.value = false
  } finally {
    deleteTargetId = null
  }
}

// Save update
const saveUpdate = async () => {
  if (!editingPost.value.title || !editingPost.value.content) {
    dialogTitle.value = 'Error ❌'
    dialogMessage.value = "Title and content can't be empty."
    showDialog.value = true
    return
  }

  try {
    const postRef = doc(db, 'posts', editingPost.value.id)
    await updateDoc(postRef, {
      title: editingPost.value.title,
      content: editingPost.value.content
    })
    editingPost.value = null
    dialogTitle.value = 'Updated ✅'
    dialogMessage.value = 'Post updated successfully!'
    showDialog.value = true
    fetchPosts()
  } catch (error) {
    console.error(error)
    dialogTitle.value = 'Failed ❌'
    dialogMessage.value = 'Failed to update post.'
    showDialog.value = true
  }
}

// Mask author name (show first 2 letters of first two words, rest *)
const maskAuthor = (fullName: string | undefined) => {
  if (!fullName) return '****'

  const words = fullName.split(' ')
  
  // Pehle 2 words
  const firstTwoWords = words.slice(0, 2)

  // Har word ke pehle 2 letters + space
  const shortWords = firstTwoWords.map(word => word.slice(0, 2))

  return shortWords.join(' ') + ' ****'
}

// Close dialog
const closeDialog = () => {
  showDialog.value = false
  isConfirm.value = false
}
</script>

<style scoped>
.post-list {
  max-width: 1200px;
  margin: 40px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.post-card {
  border-radius: 12px;
  padding: 18px;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(8px);
  transition: 0.3s;
  margin-bottom: 20px;
}

.post-card:hover {
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  transform: translateY(-4px);
}

.post-card h3 { margin: 0 0 10px; color: #476793; cursor: pointer; }
.post-card p { margin: 0 0 12px; color: #333; }

/* Actions */
.actions { display: flex; gap: 10px; margin-top: 10px; }
button { padding: 6px 12px; border: none; border-radius: 6px; cursor: pointer; color: white; }
.update-btn { background: #4CAF50; } .update-btn:hover { background: #3e8e41; }
.delete-btn { background: #ff4d4d; } .delete-btn:hover { background: #d93636; }
.save-btn { background: #2196f3; } .cancel-btn { background: #777; }

/* Edit form */
.edit-form input, .edit-form textarea { width: 100%; margin-bottom: 10px; padding: 8px; border-radius: 6px; border: 1px solid #ccc; }

/* Dialog */
.dialog-overlay {
  position: fixed; inset:0;
  background: rgba(0,0,0,0.5);
  display:flex; justify-content:center; align-items:center;
  z-index: 999;
}

.dialog-box {
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(15px);
  padding: 25px;
  border-radius: 14px;
  width: 320px;
  text-align: center;
  color: #000;
  box-shadow: 0 10px 30px rgba(0,0,0,.3);
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
.dialog-btn:hover { background: #3b82f6; }
.dialog-btn.cancel-btn { background: #777; margin-left: 8px; }

@media (max-width: 900px) { .post-list { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 500px) { .post-list { grid-template-columns: 1fr; } }
</style>