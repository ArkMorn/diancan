<template>
  <div class="orderDetail">
    <div class="orderDetail-container" v-if="detailList.length>0">
      <div class="orderDetail-item" v-for="item in detailList" :key="item">
        <div class="item-left">
          <img :src="item.picUrl" alt=""/>
        </div>
        <div class="item-right">
          <div class="right-top">{{item.productName}}</div>
          <div class="right-center">X{{item.num}}</div>
          <div class="right-bottom">￥{{item.price}}/份</div>
        </div>
      </div>
    </div>
    <div class="allCount">总价：￥{{count}}</div>
  </div>
</template>

<script>
import { orderDetail } from "@/utils/request";
export default {
  data () {
    return {
      detailList:[],
      count:0
    }
  },

  components: {
  },

  methods: {
  
  },

  mounted(){
     let query = this.$root.$mp.query;
    console.log(query)
    if(query.orderId){
      orderDetail({orderId:query.orderId}).then(res=>{
          this.count=res.detail.totalPrice
        if(res.detail.productList){
          this.detailList=res.detail.productList
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.orderDetail{
  padding:29rpx 25rpx;
  .orderDetail-container{
    border-radius: 10rpx;
    box-shadow: 2px 2px 6px #b3b0b0;
    padding:0 12rpx;
    .orderDetail-item{
      border-bottom: 1rpx solid rgb(243,243,243);
      padding:12rpx 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .item-left{
        width: 97rpx;
        height: 97rpx;
        flex:0 0 97rpx;
        img{
          width: 100%;
        height: 100%;
        }
      }
      .item-right{
        font-size: 26rpx;
        flex: 1;
        padding: 0 76rpx 0 23rpx;
        color:rgb(65,65,65);
        .right-top{

        }
        .right-center{
          text-align: right;
        }
        .right-bottom{
        color:rgb(255,72,0);}
      }
    }
    .container-item:last-child{
      border-bottom: none;
    }
  }
  .allCount{
    text-align: right;
    font-size: 32rpx;
    // line-height: 40rpx;
    padding-top: 20rpx;
    padding-right: 20rpx;
    color:rgb(255,72,0);
  }
}
</style>
