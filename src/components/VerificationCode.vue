<template>
    <div class="verification-code">
       
    </div>
</template>
<script>
import {
    Button,
    NavBar,
    Toast
    } from 'vant';
export default {
    name:'VerificationCode',
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
    .verification-code{
        font-size: 20px;
    }
</style>