<template>
    <div class="star-box" :class='iconSize'>
        <i v-for='item,index of starClasses' :key='index' 
        class='star-item' :class='item'>
        </i>
    </div>
</template>
<script>
    export default {
        name:'star',
        props:{
            score:{
                type:Number,
                required:true
            },
            size:{
                type:String,
                default:'middle'
            }
        },
        computed:{
            //计算星星大小
            iconSize(){
                return 'star-'+this.size;
            },
            //计算星星的类型
            starClasses(){
                let array=[];
                let integer=parseInt(this.score);
                for(let i=0;i<integer;i++){
                    array.push('on');
                }
                let decimal=this.score % 1;
                if(decimal===0.5){
                    array.push('half');
                }else if(decimal>0.5){
                    array.push('on');
                }
                while(array.length<5){
                    array.push('off');
                }
                return array;
            }
        }
    }
</script>
<style lang='sass'>
    .star-box{
        margin-top:18px;
        i{
            display:inline-block;
            margin-right:18px;
            &:last-child{
                margin-right:0;
            }
        }
        &.star-small,&.star-24{
            i{
                width:12px;
                height:12px;
                background-size:cover;
                &.on{
                    background-image:url('./star24_on@2x.png');
                }
                &.half{
                    background-image:url('./star24_half@2x.png');
                }
                &.off{
                    background-image:url('./star24_off@2x.png');
                }
            }  
        }
        &.star-middle,&.star-36{
            i{
                width:18px;
                height:18px;
                background-size:cover;
                &.on{
                    background-image:url('./star36_on@2x.png');
                }
                &.half{
                    background-image:url('./star36_half@2x.png');
                }
                &.off{
                    background-image:url('./star36_off@2x.png');
                }
            }  
        }
        &.star-big,&.star-48{
            i{
                width:24px;
                height:24px;
                background-size:cover;
                &.on{
                    background-image:url('./star48_on@2x.png');
                }
                &.half{
                    background-image:url('./star48_half@2x.png');
                }
                &.off{
                    background-image:url('./star48_off@2x.png');
                }
            }  
        }
    }
</style>


