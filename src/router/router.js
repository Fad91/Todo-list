import TodoPage from '@/pages/TodoPage';
import DoneTodos from '@/pages/DoneTodos';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/todos',
  },
  {
    path: '/todos',
    component: TodoPage
  },
  {
    path: '/done-todos',
    component: DoneTodos
  }
]

const router = createRouter(
  {
    routes, 
    history: createWebHistory(process.env.BASE_URL)
  }
)

export default router;