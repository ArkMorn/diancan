<template>
  <div class="diancan">
    <div class="diancan-out">
      <p class="out-top">
        您当前在嘉禾寿司餐厅
      </p>
      <p class="out-center">
        06号桌
      </p>
      <p class="out-bottom">
        请您确认桌号祝您用餐愉快！
      </p>
      <div class="out-circle">
        立即点餐
      </div>
    </div>
    <div class="diancan-ing">
    <div class="diancan-top">
      <img src="../../../static/images/img1.jpg" alt="">
    </div>
    <div class="diancan-bottom"></div>
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
  .diancan{
    height:100vh;
    background-color: rgb(233,233,233);
    .diancan-out{
      position:fixed;
      top:332rpx;
      width:586rpx;
      height:534rpx;
      left:50%;
      margin-left:-293rpx;
      background-color: #fff;
      z-index:999;
      border-radius: 10rpx;
      text-align: center;
      padding-top:60rpx;
      .out-top{
        font-size: 32rpx;
      }
      .out-center{
        font-size: 60rpx;
        line-height: 100rpx;

      }
      .out-bottom{
        font-size: 20rpx;
        color:rgba(0,0,0,0.5);
      }
      .out-circle{
        width: 216rpx;
        height:216rpx;
        border-radius: 50%;
        background-color: rgb(242,210,34);
        line-height: 216rpx;
        font-size: 32rpx;
        position: relative;
        left: 50%;
        margin-left: -108rpx;
        margin-top: 44rpx;
      }
    }
    .diancan-ing{
      .diancan-top{
        img{
          width:100%;
          height:460rpx;
        }
      }
    }
  }
</style>
