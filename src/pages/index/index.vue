<template>
  <div class="index">
    <div class="index-search">
      <div class="search-wrap">
        <icon class="icon" type="search" size="14" />
        <input type="text" placeholder="今天想吃什么" @focus="toShowSearch" />
      </div>
    </div>
    <div class="index-container">
      <scroll-view
        scroll-y
        :style="{height:wrapperHeight+'px'}"
        class="index-left page-loadmore-wrapper"
      >
        <ul class="left-list" v-if="productList">
          <li
            @click="chooseList(index)"
            :class="['left-item',{'ischoose':index==selectIndex}]"
            v-for="(item,index) in productList"
            :key="index"
          >{{item.typeName}}</li>
        </ul>
      </scroll-view>
      <scroll-view
        scroll-y
        :style="{height:wrapperHeight+'px'}"
        class="index-right page-loadmore-wrapper"
      >
        <ul class="right-list" v-if="productList[selectIndex]">
          <li
            class="right-item"
            v-for="(item,index) in productList[selectIndex].productList"
            :key="index"
          >
            <img :src="item.productPic" alt class="item-img" />
            <div class="item-right">
              <p class="item-right-top">{{item.productName}}</p>
              <p class="item-right-center">好评推荐</p>
              <p class="item-right-bottom">￥{{item.price}}/份</p>
              <div class="stepper">
                <stepper :product="item" :index="index"  @changeCount="changeCount"></stepper>
              </div>
            </div>
          </li>
        </ul>
      </scroll-view>
    </div>
    <div class="search-page" v-if="showSearch">
      <div class="search-page-top">
        <div class="search-page-top-wrap">
          <icon class="icon" type="search" size="14" />
          <input type="text" placeholder="今天想吃什么" :focus="isFocus" v-model="searchValue" />
        </div>
        <span v-if="searchValue">搜索</span>
        <span v-else @click="showSearch=false">取消</span>
      </div>
      <div class="search-list">
        <div class="search-item">
          <div class="item-img">
            <img src="../../../static/images/img1.jpg" alt />
          </div>
          <p class="item-name">招牌麻辣鱼</p>
          <p class="item-price">￥98/份</p>
          <div class="stepper">
            <!-- <stepper></stepper> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import stepper from "@/components/stepper";
import { getProductData } from "@/utils/request";
export default {
  data() {
    return {
      wrapperHeight: 0,
      count: 0,
      showSearch: false,
      isFocus: true,
      searchValue: "",
      productList: [],
      selectIndex: 0
    };
  },

  components: { stepper },

  methods: {
    changeCount(count,index){
      this.productList[this.selectIndex].productList[index].count=count
      console.log(this.productList[this.selectIndex].productList[index])
    },
    // 获取商品数
    getProductCount(data){
      if(data instanceof Array){
        data.forEach(e=>{
          if(e.productId){
            if(wx.getStorageSync(''+e.productId)){
              let product=wx.getStorageSync(''+e.productId)
              e.count=product.count
            }else{
              e.count=0
            }
          }
        })
      }
    },
    chooseList(index) {
      this.selectIndex = index;
    },
    toShowSearch() {
      this.showSearch = true;
    },
    getData(id) {
      getProductData({ shopId: id }).then(res => {
        this.productList = res.productList;
        this.productList.forEach(e=>{
          if(e.productList){
            this.getProductCount(e.productList)
          }
        })
      });
    }
  },

  mounted() {
    let self = this;

    // 测试数据+++
    self.getData(1);
    // var query = this.$root.$mp.query;
    // self.getData(query.shopId)
    //

    const query = wx.createSelectorQuery();
    query
      .selectViewport()
      .fields({
        size: true
      })
      .select(".page-loadmore-wrapper")
      .boundingClientRect()
      .exec(function(res) {
        const DW = res[0].height;
        self.wrapperHeight = DW - res[1].top;
      });
  }
};
</script>

<style lang="less" scoped>
.search-page {
  padding-top: 104rpx;
  background-color: #f1f1f1;
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  .search-page-top {
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 104rpx;
    padding: 24rpx 28rpx 24rpx 20rpx;
    box-sizing: border-box;
    z-index: 100;
    .search-page-top-wrap {
      display: inline-block;
      width: 545rpx;
      background-color: rgba(237, 237, 237);
      border-radius: 30rpx;
      padding-left: 80rpx;
      font-size: 28rpx;
      position: relative;
      .icon {
        position: absolute;
        left: 40rpx;
        top: 10rpx;
      }
      input {
        width: 545rpx;
      }
    }
    span {
      display: inline-block;
      font-size: 28rpx;
      color: #000;
      margin-top: 14rpx;
      vertical-align: top;
      margin-left: 20rpx;
    }
  }
  .search-list {
    overflow: auto;
    padding: 12rpx 22rpx;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .search-item {
      position: relative;
      .stepper {
        position: absolute;
        right: 20rpx;
        bottom: 14rpx;
      }
      border-radius: 10rpx;
      // display: inline-block;
      background-color: #fff;
      flex: 0 0 322rpx;
      width: 322rpx;
      padding: 10rpx 12rpx 21rpx;
      margin-bottom: 12rpx;
      // margin: 0 8rpx 12rpx 12rpx;
      font-size: 26rpx;
      .item-img {
        width: 322rpx;
        height: 250rpx;
        border-radius: 10rpx;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .item-name {
        margin: 8rpx 0 48rpx;
      }
      .item-price {
        color: rgb(255, 72, 0);
      }
    }
  }
}
.index-search {
  padding: 24rpx 34rpx;
  .search-wrap {
    position: relative;
    background-color: rgba(237, 237, 237);
    border-radius: 30rpx;
    padding-left: 38%;
    font-size: 28rpx;
  }
  .icon {
    position: absolute;
    left: 35%;
    margin-left: -35rpx;
    top: 10rpx;
  }
}
.index {
  position: relative;
  .index-container {
    display: flex;
  }
  .index-left {
    font-size: 30rpx;
    color: rgb(136, 136, 136);
    // line-height: 108rpx;
    flex: 0 0 160rpx;
    width: 160rpx;
    .left-list {
      padding: 0 20rpx;
      .left-item {
        text-align: justify;
        line-height: 108rpx;
        height: 108rpx;
        overflow: hidden;
      }
      .left-item::after {
        line-height: 0;
        width: 100%;
        display: inline-block;
        content: "";
      }
    }
  }
  .index-right {
    flex: 1;
    .right-list {
      .right-item {
        border-top: 1rpx solid rgba(128, 128, 128, 0.5);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 184rpx;
        overflow: hidden;
        .item-img {
          flex: 0 0 184rpx;
          width: 184rpx;
          height: 184rpx;
        }
        .item-right {
          flex: 1;
          position: relative;
          box-sizing: border-box;
          font-size: 24rpx;
          padding: 25rpx;
          .item-right-top {
            color: rgb(0, 0, 0);
            font-size: 26rpx;
          }
          .item-right-center {
            margin: 10rpx 0 47rpx;
            color: rgb(65, 65, 65);
          }
          .item-right-bottom {
            color: rgb(255, 72, 0);
          }
          .stepper {
            position: absolute;
            right: 64rpx;
            bottom: 30rpx;
          }
          // .right-count1,
          // .right-count2 {
          //   position: absolute;
          //   right: 64rpx;
          //   bottom: 30rpx;
          //   background-color: rgb(243, 245, 249);
          // }
          // .right-count1 {
          //   width: 132rpx;
          //   height: 30rpx;
          //   line-height: 30rpx;
          //   border-radius: 30rpx;
          //   display: flex;
          //   justify-content: space-around;
          // }
          // .right-count2 {
          //   border-radius: 50%;
          //   width: 30rpx;
          //   height: 30rpx;
          //   line-height: 30rpx;
          //   text-align: center;
          // }
        }
      }
      .right-item:last-child {
        border-bottom: 1rpx solid rgba(128, 128, 128, 0.5);
      }
    }
  }
}
.ischoose {
  color: #000;
}
</style>

