<template>
  <div class="index">
    <div class="index-search">
      <input type="text" />
    </div>
    <div class="index-container">
      <scroll-view
        scroll-y
        :style="{height:wrapperHeight+'px'}"
        class="index-left page-loadmore-wrapper"
      >
        <ul class="left-list">
          <li class="left-item">蔬菜x</li>
          <li class="left-item">肉类大全</li>
          <li class="left-item">SSS</li>
          <li class="left-item">DDDD</li>
          <li class="left-item">FFFF</li>
          <li class="left-item">蔬菜</li>
          <li class="left-item">肉类大全</li>
          <li class="left-item">SSS</li>
          <li class="left-item">DDDD</li>
          <li class="left-item">FFFF</li>
          <li class="left-item">蔬菜</li>
          <li class="left-item">肉类大全</li>
          <li class="left-item">SSS</li>
          <li class="left-item">DDDD</li>
          <li class="left-item">FFFF</li>
          <li class="left-item">蔬菜</li>
          <li class="left-item">肉类大全</li>
          <li class="left-item">SSS</li>
          <li class="left-item">DDDD</li>
          <li class="left-item">FFFF</li>
        </ul>
      </scroll-view>
      <scroll-view
        scroll-y
        :style="{height:wrapperHeight+'px'}"
        class="index-right page-loadmore-wrapper"
      >
        <ul class="right-list">
          <li class="right-item">
            <img src="../../../static/images/img1.jpg" alt class="item-img" />
            <div class="item-right">
              <p class="item-right-top">招牌麻辣鱼</p>
              <p class="item-right-center">好评推荐</p>
              <p class="item-right-bottom">￥98/份</p>
              <div class="right-count1" v-if="count>0">
                <span class="count-reduce">-</span>
                <span class="count-number">10</span>
                <span class="count-add">+</span>
              </div>
              <div class="right-count2" v-else>
                <span class="count-none">+</span>
              </div>
            </div>
          </li>
          <li class="right-item">
            <img src="../../../static/images/img1.jpg" alt class="item-img" />
            <div class="item-right">
              <p class="item-right-top">招牌麻辣鱼</p>
              <p class="item-right-center">好评推荐</p>
              <p class="item-right-bottom">￥98/份</p>
              <div class="right-count"></div>
            </div>
          </li>
          <li class="right-item">
            <img src="../../../static/images/img1.jpg" alt class="item-img" />
            <div class="item-right">
              <p class="item-right-top">招牌麻辣鱼</p>
              <p class="item-right-center">好评推荐</p>
              <p class="item-right-bottom">￥98/份</p>
              <div class="right-count"></div>
            </div>
          </li>
          <li class="right-item">
            <img src="../../../static/images/img1.jpg" alt class="item-img" />
            <div class="item-right">
              <p class="item-right-top">招牌麻辣鱼</p>
              <p class="item-right-center">好评推荐</p>
              <p class="item-right-bottom">￥98/份</p>
              <div class="right-count"></div>
            </div>
          </li>
          <li class="right-item">
            <img src="../../../static/images/img1.jpg" alt class="item-img" />
            <div class="item-right">
              <p class="item-right-top">招牌麻辣鱼</p>
              <p class="item-right-center">好评推荐</p>
              <p class="item-right-bottom">￥98/份</p>
              <div class="right-count"></div>
            </div>
          </li>
          <li class="right-item">
            <img src="../../../static/images/img1.jpg" alt class="item-img" />
            <div class="item-right">
              <p class="item-right-top">招牌麻辣鱼</p>
              <p class="item-right-center">好评推荐</p>
              <p class="item-right-bottom">￥98/份</p>
              <div class="right-count"></div>
            </div>
          </li>
          <li class="right-item">
            <img src="../../../static/images/img1.jpg" alt class="item-img" />
            <div class="item-right">
              <p class="item-right-top">招牌麻辣鱼</p>
              <p class="item-right-center">好评推荐</p>
              <p class="item-right-bottom">￥98/份</p>
              <div class="right-count"></div>
            </div>
          </li>
          <li class="right-item">
            <img src="../../../static/images/img1.jpg" alt class="item-img" />
            <div class="item-right">
              <p class="item-right-top">招牌麻辣鱼</p>
              <p class="item-right-center">好评推荐</p>
              <p class="item-right-bottom">￥98/份</p>
              <div class="right-count"></div>
            </div>
          </li>
          <li class="right-item">
            <img src="../../../static/images/img1.jpg" alt class="item-img" />
            <div class="item-right">
              <p class="item-right-top">招牌麻辣鱼</p>
              <p class="item-right-center">好评推荐</p>
              <p class="item-right-bottom">￥98/份</p>
              <div class="right-count"></div>
            </div>
          </li>
          <li class="right-item">
            <img src="../../../static/images/img1.jpg" alt class="item-img" />
            <div class="item-right">
              <p class="item-right-top">招牌麻辣鱼</p>
              <p class="item-right-center">好评推荐</p>
              <p class="item-right-bottom">￥98/份</p>
              <div class="right-count"></div>
            </div>
          </li>
          <li class="right-item">
            <img src="../../../static/images/img1.jpg" alt class="item-img" />
            <div class="item-right">
              <p class="item-right-top">招牌麻辣鱼</p>
              <p class="item-right-center">好评推荐</p>
              <p class="item-right-bottom">￥98/份</p>
              <div class="right-count"></div>
            </div>
          </li>
        </ul>
      </scroll-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wrapperHeight: 0,
      count: 0
    };
  },

  components: {},

  methods: {},

  mounted() {
    // let app = getApp()
    let self = this;
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
.index {
  .index-search {
    input {
    }
  }
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
          .right-count1,.right-count2 {
            position: absolute;
            right: 64rpx;
            bottom: 30rpx;
            background-color: rgb(243, 245, 249);

            // border-radius: 50%;
            // span {
            //   display: inline-block;
            //   width: 30rpx;
            //   line-height: 30rpx;
            //   height: 30rpx;
            //   text-align: center;
            //   font-size: 30rpx;
            // }
            .count-reduce {
            }
            .count-number {
            }
            .count-plus {
            }
            .count-none {
            }
          }
          .right-count1{
            width: 132rpx;
            height: 30rpx;
            line-height: 30rpx;
            border-radius: 30rpx;
            display: flex;
            justify-content: space-around;
          }
          .right-count2{
            border-radius: 50%;
            width: 30rpx;
            height: 30rpx;
            line-height: 30rpx;
            text-align: center;
          }
        }
      }
      .right-item:last-child {
        border-bottom: 1rpx solid rgba(128, 128, 128, 0.5);
      }
    }
  }
}
</style>

