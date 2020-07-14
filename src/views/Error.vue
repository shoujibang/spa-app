<template>
    <div class="person">
        页面正在开发中
    </div>
</template>
<script>
import {
    Tabbar,
    TabbarItem,
    Toast
    } from 'vant';
export default {
    name:'Error',
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