<template>
    <div class="edit-box">
        <editor id="editor_id" height="500px" width="300px" :content="content"
        :afterChange="afterChange(fiel)"
        
        fileManagerJson="https://oss.chanchuang.jdcloud.com/keeUploadFile/add"
        basePath='http://oss.chanchuang.jdcloud.com/api/fs/getById?ids='
        uploadJson="https://oss.chanchuang.jdcloud.com/keeUploadFile/add"
        :loadStyleMode="false"
        @on-content-change="onContentChange"></editor>

        

    </div>
</template>
<script>

export default {
    name:'Kindeditor',
    mixins:[

    ],
    components:{
      
    },
    props:{

    },
    data() {
        return {
           content:"",
           kitem:['source', '|', 'undo', 'redo', '|', 'preview', 'print', 'template', 'code', 'cut', 'copy', 'paste',
          'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
          'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'subscript',
          'superscript', 'clearhtml', 'quickformat', 'selectall', '|', 'fullscreen', '/',
          'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
          'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'image',
          'flash', 'media', 'insertfile', 'table', 'hr', 'emoticons', 'baidumap', 'pagebreak',
          'anchor', 'link', 'unlink', '|', 'about'],
        }
    },
    computed: {
        
    },
    watch: {
        
    },
    created() {
        
    },
    mounted() {
        console.log("富文本编辑器的值：",this.content)
    },
    destroyed() {
        
    },
    methods: {
      onContentChange (val) {
        console.log("富文本编辑器的值：",val)
        this.content = val
     },
    afterChange () {
        
    },
    }

}
</script>
<style lang="less" scoped>
    .edit-box{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        
    }
</style>