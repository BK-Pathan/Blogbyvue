import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import AddPost from '../pages/AddPost.vue'
import About from '../pages/About.vue'
import PostDetail from '../components/PostDetail.vue'
import Login from '../pages/Login.vue'  // ✅ import login component
import Signup from '../pages/Signup.vue'
import Footer from '../components/Footer.vue'
import AllBlogs from '../pages/AllBlogs.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/add', component: AddPost },
  { path: '/about', component: About },
  { path: '/login', component: Login }, 
   { path: '/contact', component: Contact },  // new route 
  { path: '/Signup', component: Signup},
  { path: '/Footer' , component: Footer},
  {path : '/all' , component: AllBlogs},
  {
    path: '/post/:id',    // dynamic route for post detail
    name: 'PostDetail',
    component: PostDetail,
    props: true            // optional, allows route params as props
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router