<!-- <template>
  <div class="blog-grid">
    <div v-for="post in posts" :key="post.id" class="blog-card">
      <div class="card-body">
        <h3>{{ post.title }}</h3>
        <p>{{ post.content }}</p>

        <router-link :to="`/post/${post.id}`">
          Read More
        </router-link>

        <button class="delete-btn">Delete</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  posts: Array
})
</script>

<style scoped>

.blog-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:20px;
}

.blog-card{
  background: rgba(255,255,255,0.15);
  border-radius:16px;
  padding:20px;
}
@media (max-width:900px){
.blog-grid{
grid-template-columns:repeat(2,1fr);
}
}

@media (max-width:500px){
.blog-grid{
grid-template-columns:1fr;
}
}


</style> -->