<template>
    <div class="news-list" :style="{height:leftHei}">
        <div class="left" :style="{height:leftHei}">
            <ul>
                <nav-item
                @itemfn="itemfn"
                v-for="(item,index) in navData"
                :datanav="item"
                :index="index"
                :key="index"
                ></nav-item>
            </ul>
        </div>
        <div class="right" >
            <router-view></router-view>
        </div>

    </div>
</template>
<script>

export default {
    name:'NewsList',
    mixins:[

    ],
    components:{
      
    },
    props:{

    },
    data() {
        return {
           leftHei:0,
           navData:[
               
               {
                title:"首页",
                url:"/newsList",
                text:"首页",
                icon:""
               },
               
               {
                title:"常用功能",
                url:"",
                text:"常用功能",
                icon:"el-icon-caret-right",
                children:[{
                        title:"动态table",
                        url:"/AdminTable",
                        text:"动态table",
                        icon:""
                    },
                    {
                    title:"拖拽列表排序",
                    url:"/drawlist",
                    text:"拖拽列表排序",
                    icon:""
                    },
                    {
                        title:"Treetable",
                        url:"/treeTable",
                        text:"Treetable",
                        icon:""
                    }]
               },
               {
                title:"人力资源",
                url:"",
                text:"人力资源",
                icon:"el-icon-caret-right",
                children:[
                    {
                        title:"人才管理",
                        url:"",
                        text:"人才管理",
                        icon:""
                    },{
                        title:"档案管理",
                        url:"",
                        text:"档案管理",
                        icon:"el-icon-caret-right",
                        children:[
                            {
                                title:"新增",
                                url:"",
                                text:"新增",
                                icon:""
                            },{
                                title:"修改",
                                url:"",
                                text:"删除",
                                icon:""
                            }
                        ]
                    },{
                        title:"文档管理",
                        url:"",
                        text:"文档管理",
                        icon:""
                    }
                ]
			   },{
                title:"财务管理",
                url:"",
                text:"财务管理",
                icon:"el-icon-caret-right",
                children:[
                    {
                        title:"工资管理",
                        url:"/PeopleOne",
                        text:"工资管理",
                        icon:""
                    },{
                        title:"工资发放",
                        url:"/PeopleTwo",
                        text:"工资发放",
                        icon:""
                    },{
                        title:"员工关系",
                        url:"/People",
                        text:"员工关系",
                        icon:""
                    }
                ]
			   }
           ]
        }
    },
    computed: {
        
    },
    watch: {
        
    },
    created() {
        
    },
    mounted() {
        this.$nextTick(() =>{
            let that = this;
            that.initleft()
            window.onresize = function(){
                // alert()
                
                that.initleft();
            }

        })
        console.log("-----jquery-----",this.$)

    },
    destroyed() {
        
    },
    methods: {
      itemfn(){

      },
      initleft(){
            let h = document.documentElement.clientHeight || document.body.clientHeight;
            let headers = parseInt($(".person").height()) 
         
            h = $(window).height()
            // h = h-headers
           this.leftHei = h + 'px';
        //    $("#app").css("overflow","hidden")
        },
    }

}
</script>
<style lang="less" scoped>
    .news-list{
        display: flex;
        justify-content: space-between;
        overflow: hidden;
        font-size: 30px;
        .left{
            width: 200px;
            height: 200px;
            border-right: 1px solid #ddd;
            background: rgb(84, 92, 100);
            color: #fff;
            padding-top: 50px;
        }
        .right{
            width: 100%;
            // height: 200px;
            text-align: left;
            padding: 30px;
            overflow: auto;
        }
    }
</style>