import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Person from '../views/Person.vue'
import News from '../views/News.vue'
import Active from '../views/Active.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/news',
    name: 'news',
    component: News
  },
  {
    path: '/active',
    name: 'active',
    component: Active
  },
  {
    path: '/person',
    name: 'person',
    component: Person
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
