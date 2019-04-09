<template>
    <header>
        <div class='top'>
            <div class='pic-box'>
                <img :src='seller.avatar'>
            </div>
            <div class='top-right'>
                <p class='name'>
                    <i class='icon'></i>
                    <span>{{seller.name}}</span>
                </p>
                <p>{{seller.description}} / {{seller.deliveryTime}} 分钟送达</p>
                <p v-if='seller.supports'>
                    <i class='icon'></i>
                    <span>{{seller.supports[0].description}} , 满50减10</span>
                </p>
            </div>
            <div class='count' v-if='seller.supports' @click='show'>
                <span>{{seller.supports.length}}</span>
                个
                <span class="icon-keyboard_arrow_right"></span>
            </div>
        </div>
        <div class='bottom' @click='show'>
            <i class="icon"></i>
            <p>{{seller.bulletin}}</p>
            <span class="icon-keyboard_arrow_right"></span>
        </div>
        <div class="bg" :style="bg" v-if='seller.avatar'></div>

        <!-- 遮罩层 开始 -->
        <div class="mask" v-show='visible'>
            <div class="mask-content">
                <div class="mask-head">
                    <h2>{{seller.name}}</h2>
                    <star :score='seller.score' v-if='seller.score'/>
                </div>
                <cmp-title :titleData="'优惠信息'"/>
                <ul class='infoList' v-if='seller.supports'>
                    <li v-for='item,index of seller.supports' :key='index'>
                        <i class="cart"></i>
                        <span v-if='seller.supports'>{{item.description}}</span>
                    </li>
                </ul>
                <cmp-title :titleData="'商家公告'"/>
                <div class="bulletin">
                    <p>
                        {{seller.bulletin}}
                    </p>
                </div>
                <div class="remove icon-close" @click='hide'></div>
			</div>
        </div>
        <!-- 遮罩层 结束 -->
    </header>
</template>
<script>
    export default{
        name:'app',
        data(){
            return {
                seller:{},
                picture:{
                    imgSrc:'./src/assets/img/brand@2x.png',
                    even:'./src/assets/img/decrease_1@2x.png'
                },
                visible:false
            }
        },
        computed:{
            bg(){
                return {
                    background:`url(${this.seller.avatar})`
                }
            }
        },
        methods:{
            show(){
                this.visible=true;
            },
            hide(){
                this.visible=false;
            }
        },
        created(){
            fetch('http://localhost:9090/api/key',{method:'post'})
            .then(res=>res.json())
            .then(data=>{
                if(!data.code){
                    fetch('http://localhost:9090/api/seller?token='+data.key)
                    .then(res=>res.json())
                    .then(data=>{
                        this.seller=data.data;
                        console.log(this.seller)
                    })
                }
            })
        }
    }
</script>
<style lang='sass'>
    header{
        position:relative;
        padding-top: 24px;
        background: rgba(7,17,27,0.5);
        .top{
            position: relative;
            display: flex;
            width:100%;
            .pic-box{
                border-radius: 2px;
                margin-left: 24px;
                img{
                    width:64px;
                    height:64px;
                    border-radius: 2px;
                }
            }
            .top-right{
                margin-left: 16px;
                p{
                    font-weight:100;
                    color: #fff;
                    &:first-child{
                        font-size:16px;
                        font-weight: bold;
                        .icon{
                            display:inline-block;
                            width:30px;
                            height:18px;
                            background:url('./img/brand@2x.png');
                            background-size:cover;
                            vertical-align:middle;
                        }
                        span{
                            margin-left:6px;
                            vertical-align:middle;
                        }
                    }  
                    &:nth-child(2){
                        font-size: 12px;
                        line-height:12px;
                        margin: 8px 0 5px 0;
                    }  
                    &:nth-child(3){
                        font-size: 10px;
                        .icon{
                            display:inline-block;
                            margin-right:4px;
                            width:12px;
                            height:12px;
                            background:url('./img/decrease_1@2x.png');
                            background-size:cover;
                            vertical-align:middle;
                        }
                        span{
                            vertical-align:middle;
                        }
                    }  
                }
            }
            .count{
                position:absolute;
                box-sizing:border-box;
                bottom: -5px;
                right:12px;
                height: 24px;
                padding: 7px 8px;
                font-size: 10px;
                color:#fff;
                font-weight: 100;
                line-height: 12px;
                background: rgba(0,0,0,.2);
                border-radius:16px;
            }
        }
        .bottom{
            display:flex;
            align-items:center;
            height: 28px;
            margin-top:18px;
            background:rgba(7,17,27,.2);
            padding:0 12px;
            font-size: 10px;
            font-weight: 100;
            .icon{
                display:inline-block;
                width:22px;
                height:12px;
                background:url('./img/bulletin@2x.png');
                background-size:cover;
            }
            p{
                flex:1;
                text-overflow:ellipsis;
                overflow:hidden;
                white-space:nowrap;
                color:#fff;
                margin:0 4px;
            }
            span{
                color: #fff;
            }
        }
        .bg{
            position:absolute;
            top:0;
            z-index:-1;
            width:100vw;
            height:100%;
            filter: blur(5px);
            background-size:cover;
        }
        .mask{
            box-sizing:border-box;
            position:absolute;
            top:0;
            left:0;
            width: 100vw;
            height:100vh;
            padding: 64px 36px;
            background:rgba(0,0,0,.8);
            .mask-content{
                position:relative;
                height: 100%;
                .mask-head{
                    color:#fff;
                    text-align: center;
                    h2{
                        font-size:16px;
                        line-height:16px;
                    }
                    .star{
                        margin-top:16px;
                        i{
                            display:inline-block;
                            width:20px;
                            height:19px;
                            background:url('./img/star24_on@2x.png');
                            background-size:cover;
                            margin-right:12px;
                            &:last-child{
                                margin-right:0;
                                background:url('./img/star24_off@2x.png');
                                background-size:cover;
                            }
                        }
                    }
                }
                .infoList{
                    margin-left:12px;
                    li{
                        display:flex;
                        align-items:center;
                        font-size:12px;
                        color:rgb(255,255,255);
                        font-weight:200;
                        margin-bottom:12px;
                        &:last-child{
                            margin-bottom:0;
                            .cart{
                                background:url('./img/special_1@2x.png');
                                background-size:cover;
                            }
                            
                        }
                        &:first-child{
                            .cart{
                                background:url('./img/decrease_1@2x.png');
                                background-size:cover;
                            } 
                        }
                        &:nth-child(2){
                            .cart{
                                background:url('./img/discount_1@2x.png');
                                background-size:cover;
                            } 
                        }
                        &:nth-child(3){
                            .cart{
                                background:url('./img/discount_1@2x.png');
                                background-size:cover;
                            } 
                        }
                        &:nth-child(4){
                            .cart{
                                background:url('./img/special_1@2x.png');
                                background-size:cover;
                            } 
                        }
                        .cart{
                            display:inline-block;
                            width: 16px;
                            height:16px;
                            margin-right:6px;
                        }
                    }  
                }
                .bulletin{
                    padding: 0 12px;
                    color:rgb(255,255,255);
                    line-height:24px;
                    font-size:12px;
                    font-weight:200;
                }
                .remove{
                    position:absolute;
                    left:50%;
                    bottom:0;
                    margin-left:-16px;
                    font-size:32px;
                    color:rgba(255,255,255,.5);
                }
            }
        }
    }
</style>