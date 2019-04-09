<template>
    <nav>
        <ul>
            <li>商品</li>
            <li>评价</li>
            <li>商家</li>
        </ul>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style lang='sass'>
    nav{
        width:100vw;
        height:40px;
        border-bottom:1px solid rgba(7,17,27,0.1);
        ul{
            display: flex;
            font-size:14px;
            li{
                width:33.33%;
                height:100%;
                text-align:center;
                line-height:40px;
                color:rgb(77,85,93);
                &:first-child{
                    color:rgb(240,20,20);
                }
            }
        }
    }
</style>


