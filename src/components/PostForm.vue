<template>
  <form @submit.prevent="submitPost">
    <input v-model="title" placeholder="Post title" required />
    <textarea v-model="content" placeholder="Post content" required></textarea>
    <button type="submit">Add Post</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'add-post', post: { title: string; content: string }): void
}>()

const title = ref('')
const content = ref('')

const submitPost = () => {
  emit('add-post', { title: title.value, content: content.value })
  title.value = ''
  content.value = ''
}
</script>

<style>
input, textarea { display: block; width: 100%; margin-bottom: 10px; padding: 5px; }
button { padding: 5px 10px; }
</style>