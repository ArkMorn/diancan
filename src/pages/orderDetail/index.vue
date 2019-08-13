<template>
  <div class="orderDetail">
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
  padding:29rpx 25rpx;
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
    .container-item:last-child{
      border-bottom: none;
    }
  }
}
</style>
