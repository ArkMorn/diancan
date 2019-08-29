<template>
  <div class="orderDetail">
    <div class="paysuccess">
      <p class="top">付款成功</p>
      <p class="center">支付成功，祝您用餐愉快</p>
      <p class="bottom">用餐桌号：{{num}}</p>
    </div>
    <div class="orderDetail-container">
      <div class="orderDetail-item" v-for="item in productList" :key="item.productName">
        <div class="item-left">
          <img :src="item.picUrl" alt />
        </div>
        <div class="item-right">
          <div class="right-top">{{item.productName}}</div>
          <div class="right-center">x{{item.num}}</div>
          <div class="right-bottom">￥{{item.price}}/份</div>
        </div>
      </div>
      <div class="order-count">
        <span class="left">共{{productList.length}}份</span>
        <span class="center">合计</span>
        <span class="right">￥{{count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { paySuccess } from "@/utils/request";
export default {
  data() {
    return {
      num: 0,
      productList: [],
      count: 0
    };
  },

  components: {},

  methods: {},

  mounted() {
    let query = this.$root.$mp.query;
    paySuccess({ orderId: query.orderId }).then(res => {
      if(res.successDto){
    this.num = res.successDto.seatNo;
      if (res.successDto.productList) {
        this.productList = res.successDto.productList;
        this.productList.forEach(e => {
          this.count += parseFloat(e.price) * parseFloat(e.num);
        });
      }}
    });
  }
};
</script>
<style lang="less" scoped>
.orderDetail {
  padding: 25rpx;
  .paysuccess {
    box-shadow: 2px 2px 6px #b3b0b0;
    margin-bottom: 30rpx;
    text-align: left;
    padding: 25rpx 30rpx;
    .top {
      font-weight: bold;
      color: rgb(1, 197, 130);
      font-size: 37rpx;
    }
    .center {
      color: rgb(65, 65, 65);
      font-size: 18rpx;
      line-height: 60rpx;
    }
    .bottom {
      padding-top: 10rpx;
      font-weight: bold;
      color: #000;
      font-size: 37rpx;
      border-top: 1rpx solid rgb(243, 243, 243);
    }
  }
  .orderDetail-container {
    border-radius: 10rpx;
    box-shadow: 2px 2px 6px #b3b0b0;
    padding: 0 12rpx;
    .orderDetail-item {
      border-bottom: 1rpx solid rgb(243, 243, 243);
      padding: 12rpx 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .item-left {
        width: 97rpx;
        height: 97rpx;
        flex: 0 0 97rpx;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .item-right {
        font-size: 26rpx;
        flex: 1;
        padding: 0 76rpx 0 23rpx;
        color: rgb(65, 65, 65);
        .right-top {
        }
        .right-center {
          text-align: right;
        }
        .right-bottom {
          color: rgb(255, 72, 0);
        }
      }
    }
    .order-count {
      height: 78rpx;
      line-height: 78rpx;
      text-align: right;
      color: #000;
      font-size: 26rpx;
      .center {
        margin-left: 34rpx;
        margin-right: 17rpx;
      }
      .right {
        font-size: 24rpx;
        color: rgb(255, 72, 0);
      }
    }
  }
}
</style>
