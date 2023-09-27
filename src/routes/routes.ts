import { RouteRecordRaw } from 'vue-router'
import Home from '@/pages/Home.vue'
import Brewing from '@/pages/brewing/BrewingPage.vue'
import Heating from '@/pages/brewing/HeatingPage.vue'
import Fermentation from '@/pages/fermentation/FermentationPage.vue'
import EmptyLayout from '@/layouts/empty.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/brewing',
    component: EmptyLayout,
    children: [
      {
        path: '',
        name: 'brewing',
        component: Brewing
      },
      {
        path: '/heating',
        name: 'heating',
        component: Heating
      },
    ]
  },
  {
    path: '/fermentation',
    name: 'fermentation',
    component: Fermentation
  }
]