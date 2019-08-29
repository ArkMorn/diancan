<template>
  <div class="login" v-if="showLogin">
    <div class="mask"></div>
    <button class="login-btn" open-type="getUserInfo" @getuserinfo="goLogin">点击登录</button>
  </div>
</template>

<script>
import { wxLogin } from "@/utils/request";
import { login, getToken, setToken, removeToken } from "@/utils/utils";
export default {
  data() {
    return {
      
    };
  },
  props:{
    showLogin:{
      type:Boolean,
      default:false
    }
  },

  components: {},

  methods: {
    goLogin(e) {
      let self=this
      if (e) {
        login(e,()=>{
          // self.showLogin=false
          self.$emit('getUserInfo',e.mp.detail.userInfo)
          self.$emit('loginSuccess')
        },()=>{

        });
      }
    }
  },
  created() {}
};
</script>
<style lang="less" scoped>
.login,
.mask {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(190, 180, 180, 0.5);
  z-index: 200;
}
.login-btn {
  z-index: 999;
  color: #fff;
  background-color: #e70909;
  display: inline-block;
  width: 220rpx;
  height: 80rpx;
  line-height: 80rpx;
  border: 4rpx solid #fff;
  font-size: 34rpx;
  border-radius: 10rpx;
  text-align: center;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
</style>
