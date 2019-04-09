<template>
    <div class="line">
        <div class="title-line"></div>
        <div class="title-text">{{titleData}}</div>
        <div class="title-line"></div>
    </div>
</template>
<script>
    export default {
        name:'cmp-title',
        props:{
            titleData:{
                type:String,
                required:true
            }
        }
    }
</script>
<style lang='sass'>
    .line{
        display:flex;
        align-items:center;
        margin: 28px 0 24px 0;
        .title-line{
            width:112px;
            height:1px;
            background:rgba(255,255,255,.2);
        }
        .title-text{
            flex:1;
            font-size:12px;
            color:#fff;
            font-weight:350;
            line-height:14px;
            margin: 0 12px;
        }
    }
</style>


