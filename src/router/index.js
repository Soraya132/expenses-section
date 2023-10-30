import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import ExpensesSubRoutes from "../views/ExpensesSubRoutes.vue"
const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/expenses/:category',
    name:'expenses', // Dynamic parameter ":id"
    component: ExpensesSubRoutes,
    props: true // Pass route params as props to the component
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
export default router