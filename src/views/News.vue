<template>
    <div class="person">
        资讯中心
    </div>
</template>
<script>
import {
    Tabbar,
    TabbarItem,
    Toast
    } from 'vant';
export default {
    name:'News',
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