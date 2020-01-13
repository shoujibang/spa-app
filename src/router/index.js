import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Person from '../views/Person.vue'
import News from '../views/News.vue'
import Active from '../views/Active.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta:{
      title:"官网"
    }
  },
  {
    path: '/news',
    name: 'news',
    component: News,
    meta:{
      title:"资讯中心"
    }
  },
  {
    path: '/active',
    name: 'active',
    component: Active,
    meta:{
      title:"活动中心"
    }
  },
  {
    path: '/person',
    name: 'person',
    component: () => import(/* webpackChunkName: "about" */ '../views/Person.vue'),
    meta:{
      title:"个人中心"
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    meta:{
      title:"登录",
      isShow:false
    }
  }

 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to,from,next) =>{
  /**修改title */
  if(to.meta.title){
    document.title = to.meta.title;
  }
  next();
})


export default router
