export default [
    {
        path: '/news',
        name: 'news',
        component: () => import('@views/News.vue'),
        meta:{
          title:"资讯中心",
          keepAlive: true
        },
        children:[{
          path:'/news/newsDetile',
          name:"newsDetile",
          component:() => import('@views/NewsDetile.vue')
        }]
      },
      {
        path:'/newsDetiles',
        name:"newsDetiles",
        component:() => import('@views/NewsDetile.vue')
      },
      {
        path: '/active',
        name: 'active',
        component: () => import('@views/Active.vue'),
        meta:{
          title:"活动中心",
          keepAlive: true
        }
      }
]