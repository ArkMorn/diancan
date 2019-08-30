<template>
  <div class="cart">
    <login :showLogin="showLogin" @getUserInfo="getUserInfo" @loginSuccess="loginSuccess"></login>
    <div class="cart-container" v-if="!isNothing">
      <div
        class="cart-item"
        v-for="(item,index) in productList"
        :key="item.productId+item.count"
        v-if="item.count>0"
      >
        <div class="item-left" v-if="item.isSelect" @click="item.isSelect=false">
          <icon type="success" size="25" color="#f8d512" class="icon"/>
        </div>
        <div class="item-left" v-else @click="item.isSelect=true">
          <div class="circle"></div>
        </div>
        <div class="item-img">
          <img :src="item.productPic" alt />
        </div>
        <div class="item-right">
          <p class="right-name">{{item.productName}}</p>
          <p class="right-price">￥{{item.price}}/份</p>
          <div class="delete" @click="deleteProduct(item,index)">X</div>
          <div class="right-count1">
            <stepper :product="item"  @changeNum="changeNum"></stepper>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="nonthing">无</div>
    <div class="cart-bottom">
      <div class="item-left" v-if="selectAll&&!isNothing" @click.stop="selectAllFn" style="padding-top:30rpx">
        <icon type="success" size="25" color="#green"  class="icon"/>
      </div>
      <div class="item-left" v-else @click.stop="selectAllFn">
        <div class="circle"></div>
      </div>
      <p class="p1">
        <span class="span1">全选2</span>
        <span class="span2">合计：</span>
        <span class="span3">￥{{selectCost}}元</span>
      </p>
      <div class="bottom-btn" @click="pay">结算</div>
    </div>
  </div>
</template>

<script>
import stepper from "@/components/stepper";
import login from "@/components/login";
import { goPay } from "@/utils/request";
export default {
  data() {
    return {
      productList: [],
      selectAll: false,
      showLogin: false,
      isNothing: true
    };
  },

  components: { stepper, login },
  computed: {
    //被选中的购物车金额
    selectCost() {
      let cost = this.productList.reduce((num, val) => {
        return val.isSelect
          ? (num = num.add(parseInt(val.count).mul(val.price)))
          : (num += 0);
      }, 0);
      return cost.toFixed(2);
    },
    isSelectAll() {
      if (this.productList.length !== 0) {
        if (this.productList.every(val => val.isSelect)) {
          this.selectAll = true;
        } else {
          this.selectAll = false;
        }
      }
    },
    isNothingAll(){
      if (this.productList.length !== 0) {
        if (this.productList.every(val => val.count==0)) {
          this.isNothing = true;
        } else {
          this.isNothing = false;
        }
      }
    }
  },
  methods: {
    // 删除商品
    deleteProduct(item,index){
      console.log(item,index)
      wx.showModal({
        title: '提示', //提示的标题,
        content: '是否删除该商品', //提示的内容,
        showCancel: true, //是否显示取消按钮,
        cancelText: '取消', //取消按钮的文字，默认为取消，最多 4 个字符,
        cancelColor: '#000000', //取消按钮的文字颜色,
        confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
        confirmColor: '#3CC51F', //确定按钮的文字颜色,
        success: res => {
          if (res.confirm) {
            // console.log('用户点击确定')
            wx.removeStorageSync(''+item.productId);
            this.productList[index].count=0
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      });
    },
    changeNum(){
    },
    // 微信支付
    wxPay(par) {
      wx.requestPayment({
        // appId: config.result.appid,
        timeStamp: par.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
        nonceStr: par.nonceStr, // 支付签名随机串，不长于 32 位
        package: par.pack, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
        signType: par.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
        paySign: par.paySign, // 支付签名
        success: function(res) {
          // 支付成功后的回调函数
          if (par.orderId) {
            wx.navigateTo({
              url: "/pages/paySuccess/main?orderId=" + par.orderId
            });
          }
        },
        cancel: function(err) {
          // return
          wx.navigateTo({
            url: "/pages/orderList/main"
          });
        }
      });
    },
    loginSuccess() {
      this.showLogin = false;
    },
    getUserInfo(userinfo) {},
    //全选
    selectAllFn() {
      let len = this.productList.length;
      this.selectAll = !this.selectAll;
      for (var i = 0; i < len; i++) {
        this.$set(this.productList[i], "isSelect", this.selectAll);
      }
    },
    pay() {
      let token = wx.getStorageSync("wx-token");
      // console.log(this.productList)
      let payList = [];
      this.productList.forEach(e => {
        if (e.isSelect) {
          let str = "";
          str = e.productId + ":" + e.count;
          payList.push(str);
        }
      });
      if (payList.length == 0) {
        wx.showToast({
          title: "请选择商品！", //提示的内容,
          icon: "none", //图标,
          duration: 1000, //延迟时间,
          mask: true //显示透明蒙层，防止触摸穿透,
        });
        return;
      }
      if (!token) {
        this.showLogin = true;
      } else {
        var data = {};
        if (this.$store.state.shopId && this.$store.state.num) {
          data.shopId = this.$store.state.shopId;
          data.seatNo = this.$store.state.num;
          data.productAndNum = payList;
        }
        goPay(data).then(res => {
          if (res.code == 401) {
            wx.showToast({
              title: "登录失效，请重新登录！", //提示的内容,
              icon: "none", //图标,
              duration: 1000, //延迟时间,
              mask: true //显示透明蒙层，防止触摸穿透,
            });
            this.showLogin = true;
          } else {
            //微信支付
            if (res.pay) {
              this.productList.forEach(e => {
                if (e.isSelect) {
                  // console.log(e.productId);
                  wx.removeStorageSync(''+e.productId);
                }
              });
              this.wxPay(res.pay);
            }
          }
        });
      }
    }
  },
  onShow() {
    let list = wx.getStorageInfoSync();
    let self = this;
    self.showLogin = false;

    self.productList = [];
    if (list) {
      if (list.keys) {
        list.keys.forEach(e => {
          if (e.indexOf("wx") == -1) {
            let item = wx.getStorageSync(e);
            item.isSelect = true;
            self.productList.push(item);
          }
        });
      }
    }
  }
  // mounted() {
  //   let list = wx.getStorageInfoSync();
  //   let self = this;
  //   self.productList = [];
  //   console.log(list);
  //   if (list) {
  //     if (list.keys) {
  //       list.keys.forEach(e => {
  //         if (e.indexOf("wx") == -1) {
  //           let item = wx.getStorageSync(e);
  //           item.isSelect = false;
  //           self.productList.push(item);
  //         }
  //       });
  //     }
  //   }
  // }
};
</script>

<style lang="less" scoped>
.circle {
  width: 48rpx;
  height: 48rpx;
  border: 1rpx solid #000;
  border-radius: 50%;
  background-color: #fff;
  box-sizing: border-box;
}
.cart {
  padding: 29rpx 22rpx 107rpx 29rpx;
  .cart-container {
    box-shadow: 2px 2px 6px #b3b0b0;
    border-radius: 10rpx;
    padding: 11rpx 27rpx 11rpx 19rpx;

    .cart-item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 10rpx;
      height: 120rpx;
      .item-left {
      }
      .item-img {
        margin-left: 47rpx;
        margin-right: 18rpx;
        height: 95rpx;
        width: 95rpx;
        img {
          height: 95rpx;
          width: 95rpx;
        }
      }
      .item-right {
        flex: 1;
        position: relative;
        font-size: 26rpx;
        .right-name {
          color: rgb(188, 188, 188);
          margin-bottom: 30rpx;
        }
        .right-price {
          color: rgb(255, 72, 0);
        }
        .right-count1 {
          position: absolute;
          right: 0;
          bottom: 10rpx;
        }
      }
    }
    .cart-item:last-child {
      margin-bottom: 0;
    }
  }
  .cart-bottom {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 85rpx;
    background-color: rgb(249, 217, 41);
    color: #000;
    line-height: 85rpx;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 49rpx 0 44rpx;
    font-size: 26rpx;
    box-sizing: border-box;
    .bottom-left {
      flex: 0 0 44rpx;
    }
    .p1 {
      flex: 1;
      text-align: right;
      padding: 0 50rpx 0 20rpx;
      .span1 {
        float: left;
        // margin-right: 100rpx;
      }
      .span2 {
      }
      .span3 {
        float: right;
        color: rgb(255, 72, 0);
      }
    }
    .bottom-btn {
      flex: 0 0 113rpx;
      // border: 1rpx solid #000;
      // padding: 5rpx 5rpx;
      height: 65rpx;
      width: 113rpx;
      line-height: 65rpx;
      text-align: center;
      background-color: #fff;
    }
  }
}
.right-count1 {
  // background-color: rgb(243, 245, 249);
  // width: 132rpx;
  // height: 30rpx;
  // line-height: 30rpx;
  // border-radius: 30rpx;
  // display: flex;
  // justify-content: space-around;
}
.nonthing{
  font-size: 40rpx;
  text-align: center;
  color:#ddd;
}
.delete{
  position: absolute;
  right: -20rpx;
  top:0rpx;
  border-radius: 50%;
  // background-color: rgb(243, 245, 249);
  width: 40rpx;
  height: 40rpx;
  font-size: 20rpx;
  text-align: center;
  color:#b3b0b0;
}
</style>
