<!-- <template>
<div>

<h1>Blog Posts</h1>

<div v-for="post in filteredPosts" :key="post.id" class="post">
  <h3>
    <router-link :to="'/post/'+post.id">
      {{post.title}}
    </router-link>
  </h3>

  <p>{{post.category}}</p>
</div>

</div>
</template>

<script>

import { posts } from "../data/posts"

export default {

data(){
return{
posts
}
},

computed:{

filteredPosts(){

const category = this.$route.query.category

if(!category){
return this.posts
}

return this.posts.filter(p => p.category === category)

}

}

}

</script> -->