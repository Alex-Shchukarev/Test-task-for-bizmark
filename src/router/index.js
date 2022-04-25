import { createRouter, createWebHistory } from 'vue-router'
import ProjectView from '../views/ProjectView.vue'

const routes = [
  {
    path: '/project/:projectId?',
    name: 'Kanban',
    component: ProjectView,
    alias: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
