export default [
    {
        path: '/pchome',
        name: 'pchome',
        component:() => import("@/views/pc/PcIndex"),
        meta:{
          isShow:false,
          title:"首页官网"
        }
    },
    {
      path: '/newsList',
      name: 'newsList',
      component:() => import("@/views/pc/NewsList"),
      meta:{
        isShow:false,
        title:"资讯中心"
      },
      children:[{
        path: '/',
        name: 'IndexPage',
        component:() => import("@/views/admin/IndexPage"),
        meta:{
          isShow:false,
          title:"后台首页"
        },
      },{
        path: '/People',
        name: 'People',
        component:() => import("@/views/admin/People"),
        meta:{
          isShow:false,
          title:"员工关系"
        },
      },{
        path: '/PeopleOne',
        name: 'PeopleOne',
        component:() => import("@/views/admin/PeopleOne"),
        meta:{
          isShow:false,
          title:"工资管理"
        },
      },{
        path: '/AdminTable',
        name: 'AdminTable',
        component:() => import("@/views/admin/AdminTable"),
        meta:{
          isShow:false,
          title:"动态表格"
        },        
      },
      {
        path: '/drawlist',
        name: 'drawlist',
        component:() => import("@/views/admin/drawlist"),
        meta:{
          isShow:false,
          title:"拖拽列表"
        },
    },
      {
        path: '/treeTable',
        name: 'treeTable',
        component:() => import("@/views/admin/TreeTable"),
        meta:{
          isShow:false,
          title:"Tree表格"
        },
      },{
        path: '/PeopleTwo',
        name: 'PeopleTwo',
        component:() => import("@/views/admin/PeopleTwo"),
        meta:{
          isShow:false,
          title:"工资发放"
        },
      }
      ]
  },
  {
    path:'/Kindeditor',
    name:"Kindeditor",
    component:() => import("@/components/Kindeditor")
  }





]
