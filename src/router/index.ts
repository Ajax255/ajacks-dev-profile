import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import SplashPage from '../views/SplashPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'SplashPage',
    component: SplashPage,
  },
  { path: '/:pathMatch(.*)*', component: SplashPage },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
