<template>
    <div class="index-page">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/newsList' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">{{$route.meta.title}}</a></el-breadcrumb-item>
        </el-breadcrumb>
        <div class="top12">
            <div class="draw-list">
                <draggable
                    tag="ul"
                    v-model="drawlist"
                    v-bind="dragOptions"
                    @change="change"
                    :move="onMove"
                    @start="isDragging = true"
                    @end="isDragging = false"
                >
                    <li v-for="(item,index) in drawlist" :key="index">{{item.name}}</li>
                 </draggable>
            </div> 
            {{drawlist}}               
        </div>
    </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
    name:'PeopleOne',
    mixins:[

    ],
    components:{
        draggable
    },
    props:{

    },
    data() {
        return {
           open: false,
           isActive:0,           
           drawlist:[{
               name:"王"
           },{
               name:"张"
           },{
               name:"刘"
           },{
               name:"黄"
           },{
               name:"李"
           }],
           editable: true,
            isDragging: false,
            delayedDragging: false
        }
    },
    computed: {
       dragOptions() {
            return {
                animation: 0,
                group: "description",
                disabled: !this.editable,
                ghostClass: "ghost"
            };
        } 
    },
    watch: {
        isDragging(newValue) {
        if (newValue) {
            this.delayedDragging = true;
            return;
        }
        this.$nextTick(() => {
            this.delayedDragging = false;
        });
        }
    },
    created() {
        
    },
    mounted() {
   
    },
    destroyed() {
        
    },
    methods: {
        //在这里调后台的排序接口，这里的this.drawlist就是排序好的数据，直接给后台就行
        async change(opt) {
        console.log("00000000000000", this.drawlist);
        console.log("00000000000000opt", opt);
        
        },
        onMove({ relatedContext, draggedContext }) {
            const relatedElement = relatedContext.element;
            const draggedElement = draggedContext.element;
            return (
                (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
            );
        },
        getCookie(name) {
        var strcookie = document.cookie; //获取cookie字符串
        var arrcookie = strcookie.split("; "); //分割
        //遍历匹配
        for (var i = 0; i < arrcookie.length; i++) {
            var arr = arrcookie[i].split("=");
            if (arr[0] == name) {
            return arr[1];
            }
        }
        return "";
        },
    }

}
</script>
<style lang="less" scoped>
    .index-page{
        font-size: 20px;
        font-weight: bold;
        .draw-list{
            ul{
                display: flex;
                flex-wrap: wrap;
                li{
                    width: 9%;
                    text-align:center;
                    cursor: move;
                    min-width: 146px;
                    min-height: 146px;
                    line-height:146px;
                    border-radius: 10px;
                    border: 1px solid #cccccc;
                    padding: 5px;
                    overflow: hidden;
                    position: relative;
                    margin: 4px;
                    font-size: 20px;
                }
            }
        }
    }
</style>