<template>
    <div class="fotter">
        <van-tabbar v-model="active">
            <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item to="/news" icon="search">资讯</van-tabbar-item>
            <van-tabbar-item to="/active" icon="friends-o">活动</van-tabbar-item>
            <van-tabbar-item to="/person" icon="setting-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
import {
    Tabbar,
    TabbarItem,
    Toast
    } from 'vant';
export default {
    name:'CompFotter',
    mixins:[

    ],
    components:{
        [Tabbar.name]:Tabbar,
        [TabbarItem.name]:TabbarItem,
        [Toast.name]:Toast
    },
    props:{

    },
    data() {
        return {
           active:0 
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
    .fotter{
        font-size: 20px;
    }
</style>