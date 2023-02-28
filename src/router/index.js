import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About')
  },
  {
    path: '/property',
    name: 'property',
    component: () => import('@/views/Property')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/Blog')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('@/views/Contacts')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
