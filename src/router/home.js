
export default [
    {
        path: '/',
        name: 'home',
        component: () => import("@/views/Home"),
        meta:{
          isShow:false,
          title:"首页"
        }
      },
      {
        path: "*",
        // component: () => import("@/views/Error")
        redirect: "/"
      },
    {
        path: "/error",
        name:"error",
        component: () => import("@/views/Error")
      },
    {
        path: '/active',
        name: 'active',
        component: () => import("@/views/Active")
    },
    {
        path: '/person',
        name: 'person',
        component: () => import("@/views/Person")
    },   
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    }
]
