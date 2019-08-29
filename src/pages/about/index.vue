<template>
  <div class="about">
    <login :showLogin="showLogin" @getUserInfo="getUserInfo" @loginSuccess="loginSuccess"></login>
    <div class="about-top">
      <div class="about-head">
        <img :src="headImg" alt />
      </div>
      <div class="about-name" v-if="name">{{name}}</div>
      <div class="about-name" v-else>未登录</div>
    </div>
    <div class="about-center">
      <div class="center-left" @click="goOrderList">
        <p>我的订单</p>
        <p class="p2">{{total}}</p>
      </div>
      <div class="center-right">
        <p>我的积分</p>
        <p class="p2">{{score}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import login from "@/components/login";
import { userCenter } from "@/utils/request";
export default {
  data() {
    return {
      showLogin: false,
      name: "",
      headImg: "",
      total: 0,
      score: 0
    };
  },

  components: {
    login
  },

  methods: {
    goOrderList() {
      wx.navigateTo({ url: "/pages/orderList/main" });
    },
    loginSuccess() {
      this.showLogin = false;
    },
    getUserInfo(userinfo) {
      if (userinfo) {
        this.name = userinfo.nickName || "";
        this.headImg = userinfo.avatarUrl || "";
      }
    }
  },

  onShow() {
    this.showLogin = false;
    let token = wx.getStorageSync("wx-token");
    let userinfo = wx.getStorageSync("wx-user");
    this.getUserInfo(userinfo);
    if (!token) {
      this.showLogin = true;
    } else {
      userCenter().then(res => {
        if (res.code == 401) {
          wx.showToast({
            title: "登录失效，请重新登录！", //提示的内容,
            icon: "none", //图标,
            duration: 1000, //延迟时间,
            mask: true //显示透明蒙层，防止触摸穿透,
          });
          this.showLogin = true;
        } else {
          let user = res.user;
          if (user) {
            this.score = user.score || 0;
            this.total = user.orderNum || 0;
          }
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.about {
  .about-top {
    height: 548rpx;
    background-color: #f8d512;
    .about-head {
      // width: 260rpx;
      // height:260rpx;
      // border-radius: 50%;
      // overflow: hidden;
      padding-top: 80rpx;
      position: relative;
      left: 50%;
      margin-left: -130rpx;
      img {
        width: 260rpx;
        height: 260rpx;
        border-radius: 50%;
      }
    }
    .about-name {
      font-size: 40rpx;
      margin-top: 32rpx;
      text-align: center;
    }
  }
  .about-center {
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
    p {
      font-size: 30rpx;
      text-align: center;
    }
    .p2 {
      margin-top: 12rpx;
    }
  }
}
</style>

