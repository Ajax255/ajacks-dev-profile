import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Contact from '../views/Contact.vue'
import Projects from '../views/Projects.vue'
import Work from '../views/Work.vue'
import Test from '../views/Test.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/work',
    name: 'Work',
    component: Work,
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
  { path: '/:pathMatch(.*)*', component: Home },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
