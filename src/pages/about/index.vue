<template>
  <div class="about">
    <div class="about-top">
      <div class="about-head">
        <img src="../../../static/images/img1.jpg" alt="">
      </div>
      <div class="about-name">设计小哥</div>
    </div>
    <div class="about-center">
      <div class="center-left">
        <p>我的订单</p>
        <p class="p2">12</p>
      </div>
      <div class="center-right">
        <p>我的积分</p>
        <p class="p2">1000</p>
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
  .about{
    .about-top{
      height: 548rpx;
      background-color: #f8d512;
      .about-head{
        // width: 260rpx;
        // height:260rpx;
        // border-radius: 50%;
        // overflow: hidden;
        padding-top: 80rpx;
        position: relative;
        left: 50%;
        margin-left: -130rpx;
        img{
          width: 260rpx;
        height:260rpx;
        border-radius: 50%;  
        }
      }
      .about-name{
        font-size: 40rpx;
        margin-top: 32rpx;
        text-align: center;
      }
    }
    .about-center{
      padding: 50rpx 96rpx;
      margin-top: -74rpx;
      z-index: 100;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        width: 586rpx;
        border-radius: 10rpx;
        position: relative;
        left: 50%;
        margin-left: -293rpx;
      p{
        font-size: 30rpx;
        text-align: center;
      }
      .p2{
        margin-top: 12rpx;
      }
    }
  }
</style>

