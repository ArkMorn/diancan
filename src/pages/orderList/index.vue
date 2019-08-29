<template>
  <div class="orderList">
    <login :showLogin="showLogin" @getUserInfo="getUserInfo" @loginSuccess="loginSuccess"></login>
    <div
      class="orderList-item"
      @click="goOrderDetail(item)"
      v-if="orderList.length>0"
      v-for="item in orderList"
      :key="item.orderId"
    >
      <div class="item-img">
        <img :src="item.picUrl" alt />
      </div>
      <div class="item-right">
        <div class="right-top">{{item.productName}}</div>
        <div class="right-center">
          <span class="center-left">{{item.shopName}}</span>
          <span class="center-right">价钱：{{item.price}}</span>
        </div>
        <div class="right-bottom">
          <span class="bottom-left">时间：{{item.createTime}}</span>
          <span class="bottom-right"></span>
        </div>
      </div>
    </div>
    <div v-if="orderList.length==0" style="text-align:center">暂无订单！</div>
  </div>
</template>

<script>
import { orderList } from "@/utils/request";
import login from "@/components/login";
export default {
  data() {
    return {
      orderList: [],
      showLogin: false
    };
  },

  components: { login },

  methods: {
    loginSuccess() {
      this.showLogin = false;
    },
    getUserInfo(userinfo) {},
    goOrderDetail(item) {
      wx.navigateTo({ url: "/pages/orderDetail/main?orderId=" + item.orderId });
    }
  },

  mounted() {
    orderList().then(res => {
      if (res.code == 401) {
        wx.showToast({
          title: "登录失效，请重新登录！", //提示的内容,
          icon: "none", //图标,
          duration: 1000, //延迟时间,
          mask: true //显示透明蒙层，防止触摸穿透,
        });
        this.showLogin = true;
      } else {
        if (res.list) this.orderList = res.list;
      }
    });
  }
};
</script>
<style lang="less" scoped>
.orderList {
  padding: 20rpx 25rpx 0;
  .orderList-item {
    margin-bottom: 25rpx;
    width: 100%;
    border-radius: 10rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    box-shadow: 2px 2px 6px #b3b0b0;
    .item-img {
      width: 168rpx;
      height: 154rpx;
      flex: 0 0 154rpx;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .item-right {
      flex: 1;
      font-size: 24rpx;
      color: rgb(65, 65, 65);
      line-height: 30rpx;
      padding-left: 20rpx;
      padding-right: 32rpx;
      .right-top {
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
        -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
        -webkit-line-clamp: 2; /** 显示的行数 **/
        overflow: hidden;
        // width: 510rpx;
      }
      .right-center {
        // width: 510rpx;
        margin-top: 25rpx;
        margin-bottom: 10rpx;
        display: flex;
        justify-content: space-between;
        .center-left {
        }
        .center-right {
          color:rgb(255, 72, 0);
        }
      }
      .right-bottom {
        // width: 510rpx;
        display: flex;
        justify-content: space-between;
        .bottom-left {
        }
        .bottom-right {
        }
      }
    }
  }
}
</style>
