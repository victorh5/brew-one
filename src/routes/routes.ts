import { RouteRecordRaw } from 'vue-router'
import Home from '@/pages/HomeView.vue'
import Brassagem from '@/pages/BrassagemView.vue'
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
    component: Brassagem,
  },
  {
    path: '/fermentacao',
    name: 'fermentation',
    component: Fermentation
  }
] as RouteRecordRaw[]