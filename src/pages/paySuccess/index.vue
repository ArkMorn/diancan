<template>
  <div class="orderDetail">
    <div class="paysuccess">
      <p class="top">付款成功</p>
      <p class="center">支付成功，祝您用餐愉快</p>
      <p class="bottom">用餐桌号：06</p>
    </div>
    <div class="orderDetail-container">
      <div class="orderDetail-item">
        <div class="item-left">
          <img src="../../../static/images/img1.jpg" alt=""/>
        </div>
        <div class="item-right">
          <div class="right-top">XXXW</div>
          <div class="right-center">XXX</div>
          <div class="right-bottom">XXXX</div>
        </div>
      </div>
      <div class="orderDetail-item">
        <div class="item-left">
          <img src="../../../static/images/img1.jpg" alt=""/>
        </div>
        <div class="item-right">
          <div class="right-top">XXXW</div>
          <div class="right-center">XXX</div>
          <div class="right-bottom">XXXX</div>
        </div>
      </div>
      <div class="order-count">
        <span class="left">共4份</span>
        <span class="center">合计</span>
        <span class="right">￥98</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  components: {
  },

  methods: {
  
  },

  created () {
    // let app = getApp()
  }
}
</script>
<style lang="less" scoped>
.orderDetail{
  padding:25rpx;
  .paysuccess{
    box-shadow: 2px 2px 6px #909090;
    margin-bottom: 30rpx;
    text-align: left;
    padding: 25rpx 30rpx;
    .top{
      font-weight: bold;
      color:rgb(1,197,130);
      font-size: 37rpx;
    }
    .center{
      color:rgb(65,65,65);
      font-size: 18rpx;
      line-height: 60rpx;
    }
    .bottom{
      padding-top: 10rpx;
      font-weight: bold;
      color:#000;
      font-size: 37rpx;
      border-top:1rpx solid rgb(243,243,243);
    }
  }
  .orderDetail-container{
    border-radius: 10rpx;
    box-shadow: 2px 2px 6px #909090;
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
    .order-count{
      height: 78rpx;
      line-height: 78rpx;
      text-align: right;
      color:#000;
      font-size: 26rpx;
      .center{
        margin-left: 34rpx;
        margin-right: 17rpx;
      }
      .right{
      font-size: 24rpx;
        color:rgb(255,72,0);
      }
    }
  }
}
</style>
