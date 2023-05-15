import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/index.vue'
import UploadView from '@/views/upload/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import("@/views/home/index.vue"),
    },
    {
      path: '/upload',
      name: 'upload',
      component: UploadView
    }
  ]
})

export default router
