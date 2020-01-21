<template>
    <div class="person">
        正在研发中...
    </div>
</template>
<script>
import {
    Tabbar,
    TabbarItem,
    Toast
    } from 'vant';
export default {
    name:'404',
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
    .person{
        font-size: 10px;
    }
</style>