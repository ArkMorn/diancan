<template>
  <div class="welcome">
    <div class="swiper-wrap">
      <swiper class="swiper" indicator-dots autoplay circular v-if="result.picList">
        <block v-for="(item,index) in result.picList" :key="index">
          <swiper-item>
            <image :src="item" alt />
          </swiper-item>
        </block>
      </swiper>
    </div>
    <div class="address">
      <p class="p1">商家地址</p>
      <div class="address-wrap" v-if="longitude&&latitude">
        <map
          id="map"
          :longitude="longitude"
          :latitude="latitude"
          scale="14"
          show-location
          style="width: 100%; height: 214rpx;border-radius:5rpx"
        ></map>
      </div>
      <p class="p2" v-if="result.currentLocation">当前位置：{{result.currentLocation}}</p>
    </div>
    <div class="recommend">
      <p class="p1">商家推荐</p>
      <div class="recommend-list" v-if="result.shopDTOList">
        <div class="recommend-item" v-for="(item,index) in result.shopDTOList" :key="index">
          <div class="item-top">
            <div class="top-img">
              <img :src="item.picUrl" alt />
            </div>
            <div class="top-name">
              <p class="name1">{{item.shopName}}</p>
              <!-- <p class="name2">西式简餐/轻食</p> -->
            </div>
          </div>
          <div class="item-bottom">
            <img :src="item.picUrl" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getHomeData } from "@/utils/request";
export default {
  data() {
    return {
      result:{},
      swiperImg: [
        { src: require("../../../static/images/img1.jpg") },
        { src: require("../../../static/images/img2.jpg") },
        { src: require("../../../static/images/img3.jpg") }
      ],
      latitude:"",
      longitude:"",
    };
  },

  components: {},

  methods: {
    //进入商店
    goShop(item){
      // console.log('xxx',item)
        this.$store.commit("setShopId",item.id);
      wx.switchTab({ url: '/pages/index/main' });
    },
    // 获取数据
    getData(data = {}) {
      getHomeData(data).then(res => {
        this.result=res.frontIndexDTO
        // if(result){
        //   this.currentLocation=result.currentLocation
        // }
      });
    }
  },

  mounted() {
    let self=this
    wx.getLocation({
      type: "wgs84",
      success(res) {
        console.log('用户位置',res);
        self.longitude=res.longitude
        self.latitude=res.latitude 
        // 测试数据+++
        // var data = { longitude: 113.27324, latitude: 23.15792 };
        var data = { longitude: res.longitude, latitude: res.latitude };
        // 
        self.getData(data);
      },
      fail(res) {
        wx.showToast({
          title: "获取位置失败，请重试!", //提示的内容,
          duration: 2000, //延迟时间,
          mask: true //显示透明蒙层，防止触摸穿透,
        });
      }
    });
  }
};
</script>
<style lang="less" scoped>
.welcome {
  background-color: #f1f1f1;
  min-height: 100vh;
}
.swiper-wrap {
  height: 324rpx;
  .swiper {
    height: 100%;
  }
  image {
    height: 324rpx;
  }
}
.address {
  background-color: #fff;
  padding-bottom: 30rpx;
  padding: 0 26rpx;
  .p1 {
    line-height: 56rpx;
    font-size: 28rpx;
  }
  .p2 {
    margin-top: 16rpx;
    font-size: 20rpx;
  }
  .address-wrap {
  }
}
.recommend {
  .p1 {
    text-align: center;
    padding-bottom: 30rpx;
    font-size: 32rpx;
    background-color: #fff;
  }
  .recommend-list {
    display: flex;
    justify-content: space-between;
    padding: 0 20rpx;
    flex-wrap: wrap;
    // background-color: #f1f1f1;
    .recommend-item {
      box-sizing: border-box;
      // border-radius: 10rpx;
      background-color: #fff;
      display: inline-block;
      width: 345rpx;
      // height: 301rpx;
      padding: 38rpx 34rpx;
      margin-bottom: 18rpx;
      .item-top {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 40rpx;
        .top-img {
          // width: 62rpx;
          // height: 52rpx;
          // overflow: hidden;
          margin-right: 15rpx;
          img {
            border-radius: 50%;
            width: 62rpx;
            height: 62rpx;
          }
        }
        .top-name {
          .name1 {
            margin-bottom: 12rpx;
            font-size: 24rpx;
          }
          .name2 {
            font-size: 18rpx;
          }
          color: rgb(173, 173, 173);
        }
      }
      .item-bottom {
        text-align: center;
        img {
          border-radius: 50%;
          width: 260rpx;
          height: 260rpx;
        }
      }
    }
  }
}
</style>
