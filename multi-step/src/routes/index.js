import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeVue',
    component: HomeView
  },
  {
    path: '/step2',
    name: 'TestVue',
    component: () => import(/* webpackChunkName: "about" */ '../views/Step2.vue')
  },
  {
    path: '/step3',
    name: 'PickAddOns',
    component: () => import(/* webpackChunkName: "about" */ '../views/Step3.vue')
  },
  {
    path: '/step4',
    name: 'FinishingUp',
    component: () => import(/* webpackChunkName: "about" */ '../views/Step4.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router