import { RouteRecordRaw } from 'vue-router'
import Home from '@/pages/HomeView.vue'
import Brassagem from '@/pages/BrassagemView.vue'
import FollowUpBrassagem from '@/pages/FollowUpBrassagemView.vue'
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
    component: Brassagem
  },
  {
    path: '/follow-up',
    name: 'follow-up-brass',
    component: FollowUpBrassagem
  },
  {
    path: '/fermentacao',
    name: 'fermentation',
    component: Fermentation
  }
] as RouteRecordRaw[]