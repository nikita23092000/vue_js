import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import User from '../views/User.vue'
import News from '../views/News.vue'
import Messages from '../views/Message.vue'
import Albums from '../views/Albums.vue'
import Photos from '../views/Photos.vue'
import Post from '../views/Post.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, 
    {
      path: '/about',
      name: 'about',
      component: About
    }, 
    {
      path: '/user',
      name: 'User',
      component: User
    }, 
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/messahes',
      name: 'messages',
      component: Messages
    },
    {
      path: '/news/:id',
      name: 'post',
      component: Post
    },
    {
      path: '/albums',
      name: 'albums',
      component: Albums
    },
    {
      path: '/photos',
      name: 'photos',
      component: Photos
    },
    
  ]
})

export default router
