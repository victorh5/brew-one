import { RouteRecordRaw } from 'vue-router'
import Home from '@/pages/HomeView.vue'
import Brass from '@/pages/BrassView.vue'
import Fermentation from '@/pages/FermentationView.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/brassagem',
    name: 'brass',
    component: Brass,
  },
  {
    path: '/rampa',
    name: 'ramp',
    component: () => import('@/pages/RampInfoView.vue')
  },
  {
    path: '/fermentacao',
    name: 'fermentation',
    component: Fermentation
  }
] as RouteRecordRaw[]