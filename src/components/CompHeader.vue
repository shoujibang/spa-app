<template>
    <div class="header">
       <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />
    </div>

    
</template>
<script>
import {
    Button,
    NavBar,
    Toast
    } from 'vant';
export default {
    name:'CompHeader',
    mixins:[

    ],
    components:{
        [NavBar.name]: NavBar,
        [Button.name]: Button,
        [Toast.name]: Toast,
    },
    props:{

    },
    data() {
        return {
            
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
        onClickLeft() {
            Toast('返回');
        },
        onClickRight() {
        Toast('按钮');
        }
    }

}
</script>
<style lang="less" scoped>
    .header{
        font-size: 20px;
    }
</style>