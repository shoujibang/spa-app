<template>
    <div class="index-page">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/newsList' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">{{$route.meta.title}}</a></el-breadcrumb-item>
        </el-breadcrumb>
        <div class="top12">

        员工关系员工关系员工关系员工关系
        </div>
    </div>
</template>
<script>
export default {
    name:'People',
    mixins:[

    ],
    components:{
        
    },
    props:{

    },
    data() {
        return {
           open: false,
           isActive:0
        }
    },
    computed: {
        
    },
    watch: {
        
    },
    created() {
        
    },
    mounted() {
   
    },
    destroyed() {
        
    },
    methods: {
    
    }

}
</script>
<style lang="less" scoped>
    .index-page{
        font-size: 20px;
        font-weight: bold;
    }
</style>