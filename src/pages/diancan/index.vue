<template>
  <div class="diancan" v-if="scanData">
    <div class="diancan-out">
      <p class="out-top">您当前在{{scanData.shopName}}</p>
      <p class="out-center">{{scanData.num}}号桌</p>
      <p class="out-bottom">请您确认桌号祝您用餐愉快！</p>
      <div class="out-circle"><button  open-type="getUserInfo" @getuserinfo="goLogin">立即点餐</button></div>
    </div>
    <div class="diancan-ing">
      <div class="diancan-top">
        <img :src="scanData.shopPic" alt />
      </div>
      <div class="diancan-bottom"></div>
    </div>
  </div>
</template>

<script>
import { getDiancan } from "@/utils/request";
import { login, getToken, setToken, removeToken } from "@/utils/utils";
export default {
  data() {
    return { scanData: {}, shopId: "" };
  },

  components: {},

  methods: {
    goLogin(e) {
      if (e) {
        login(e,()=>{
          this.goShop()
        });
      }
    },
    getData(data) {
      getDiancan(data).then(res => {
        if (res.scan) {
          this.scanData = res.scan;
        }
      });
    },
    goShop() {
      wx.switchTab({ url: "/pages/index/main" });
    }
  },
  mounted() {
    let query = this.$root.$mp.query;
    // console.log(this.$root)
    let scene = decodeURIComponent(query.scene);
    console.log("this.$root", this.$root);
    console.log("this.$root.$mp", this.$root.$mp);

    if (query) {
      if (query.shopId&&query.num) {
        this.shopId = query.shopId;
        this.$store.commit("setShopId", query.shopId);
        this.$store.commit("setNum", query.num);
        this.getData({
          shopId: query.shopId,
          num: query.num
        });
      } else {
        wx.showToast({
          title: "该商家不存在", //提示的内容,
          icon: "none", //图标,
          duration: 2000, //延迟时间,
          mask: true, //显示透明蒙层，防止触摸穿透,
          success: res => {}
        });
      }
    }
  }
};
</script>
<style lang="less" scoped>
.diancan {
  height: 100vh;
  background-color: rgb(233, 233, 233);
  .diancan-out {
    position: fixed;
    top: 332rpx;
    width: 586rpx;
    height: 534rpx;
    left: 50%;
    margin-left: -293rpx;
    background-color: #fff;
    z-index: 999;
    border-radius: 10rpx;
    text-align: center;
    padding-top: 60rpx;
    .out-top {
      font-size: 32rpx;
    }
    .out-center {
      font-size: 60rpx;
      line-height: 100rpx;
    }
    .out-bottom {
      font-size: 20rpx;
      color: rgba(0, 0, 0, 0.5);
    }
    .out-circle {
      button{
      width: 216rpx;
      height: 216rpx;
      border-radius: 50%;
      background-color: rgb(242, 210, 34);
      line-height: 216rpx;
      font-size: 32rpx;
      position: relative;
      left: 50%;
      margin-left: -108rpx;
      margin-top: 44rpx;}
    }
  }
  .diancan-ing {
    .diancan-top {
      img {
        width: 100%;
        height: 460rpx;
      }
    }
  }
}
</style>
