import { createRouter, createWebHistory } from 'vue-router'
import { AllExpenses, Dashboard,PaymentReceived,PaymentSent,Party,OwnerPickup,ExpensesCategory } from '../views/index.js'


const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/expense/allExpenses',
    name: 'allExpenses',
    component: AllExpenses
  },
  {
    path: '/expense/PaymentSent',
    name: 'paymentSent',
    component: PaymentSent
  },
  {
    path: '/expense/paymentReceived',
    name: 'paymentReceived',
    component: PaymentReceived
  },
  {
    path: '/expense/party',
    name: 'party',
    component: Party
  },
  {
    path: '/expense/ownerPickup',
    name: 'ownerPickup',
    component: OwnerPickup
  },
  {
    path: '/expense/expensesCategory',
    name: 'expensesCategory',
    component: ExpensesCategory
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
export default router