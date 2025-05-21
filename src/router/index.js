import { createRouter, createWebHistory } from 'vue-router'
import TodoPage from '../views/TodoPage.vue'
import AboutPage from '../views/AboutPage.vue'
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/todo',
    name: 'Todo',
    component: TodoPage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
