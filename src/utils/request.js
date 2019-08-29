import { _CONFIG } from '../../static/config/global.config.js';

const config = {
  login: '/app/auth',//登录
  getHomeData: '/home/index',//首页
  getProductData: '/home/product',//获取商品数据
  getDiancan: '/home/scan',//点餐页面数据
  getSearch: '/home/search',//搜索菜品
  wxLogin: '/app/auth',//微信登录
  userCenter:'/home/userCenter',//个人中心
  orderList:'/home/order',//订单列表
  orderDetail:'/home/orderDetail',//订单详情
  goPay:'/home/pay',//支付接口
  paySuccess:'/home/paySuccess',//支付成功
}

function ajax(options) {


  const {
    url = '',
    api = '',
    method = 'GET',
    data = {},
    timeout = 60 * 1000,            //1分钟
    withCredentials = false,        //`withCredentials`选项表明了是否是跨域请求
    loadingText = '加载中...',       //loading提示文字
    describe = '',                  //接口介绍
    showLoad = true,
    showTips = true,
  } = options;
  if (showLoad) {
    wx.showLoading({
      title: loadingText,
      mask: true
    });
  }

  return new Promise((resolve, reject) => {
    // var formData = (method == 'POST' || method == 'post') ? (JSON.stringify(data) || JSON.stringify({})) : (data || {});
    // var formData=JSON.stringify(data)
    // if (describe == "WXLogin") {
    //   var requestUrl = _CONFIG.EXTERNAL_LOGIN + api
    // }
    // var contentType = 'application/json;charset=UTF-8'
    var contentType = 'application/x-www-form-urlencoded'
    if(method == 'post') contentType = 'application/json;charset=UTF-8'
    var requestUrl = _CONFIG.REQUEST_BASE_URL + api

    wx.request({
      url: requestUrl,
      method: method,
      data: data,
      header: {
        'Content-Type': contentType,
        token:wx.getStorageSync('wx-token')||''
      },
      success: function (data) {  //请求成功的回调
        if (showLoad) {
          wx.hideLoading();
        }

        console.log("")
        console.log("请求：" + (describe || api))
        console.log("返回：", data.data)
        console.log("")
        if (data.data) {
          resolve(data.data)
        }
      },
      fail: function (err) { //请求失败的回调
        wx.hideLoading();
        console.log()
        console.log("请求：" + (describe || api))
        console.log("返回：", JSON.parse(JSON.stringify(err)))
        console.log("")
        reject(err)
      }
    })
  })
}


// =========
export function getHomeData(data = {}) {
  return new Promise((resolve, reject) => {
    ajax({
      api: config.getHomeData,
      method: 'get',
      describe: '获取首页数据',
      data: data
    }).then(data => {
      resolve(data);
    }).catch(err => {
      reject(err);
    })
  })
}
// ============
// =========
export function getProductData(data = {}) {
  return new Promise((resolve, reject) => {
    ajax({
      api: config.getProductData,
      method: 'get',
      describe: '获取商品数据',
      data: data
    }).then(data => {
      resolve(data);
    }).catch(err => {
      reject(err);
    })
  })
}
// ============
export function getDiancan(data = {}) {
  return new Promise((resolve, reject) => {
    ajax({
      api: config.getDiancan,
      method: 'get',
      describe: '点餐页面数据',
      data: data
    }).then(data => {
      resolve(data);
    }).catch(err => {
      reject(err);
    })
  })
}
// ============
export function getSearch(data = {}) {
  return new Promise((resolve, reject) => {
    ajax({
      api: config.getSearch,
      method: 'get',
      describe: '搜索菜品',
      data: data
    }).then(data => {
      resolve(data);
    }).catch(err => {
      reject(err);
    })
  })
}
export function wxLogin(data = {}) {
  return new Promise((resolve, reject) => {
    ajax({
      api: config.wxLogin,
      method: 'post',
      describe: '微信登录',
      data: data
    }).then(data => {
      resolve(data);
    }).catch(err => {
      reject(err);
    })
  })
}
export function userCenter(data = {}) {
  return new Promise((resolve, reject) => {
    ajax({
      api: config.userCenter,
      method: 'get',
      describe: '个人中心',
      data: data
    }).then(data => {
      resolve(data);
    }).catch(err => {
      reject(err);
    })
  })
}
export function orderList(data = {}) {
  return new Promise((resolve, reject) => {
    ajax({
      api: config.orderList,
      method: 'get',
      describe: '订单列表',
      data: data
    }).then(data => {
      resolve(data);
    }).catch(err => {
      reject(err);
    })
  })
}
export function orderDetail(data = {}) {
  return new Promise((resolve, reject) => {
    ajax({
      api: config.orderDetail,
      method: 'get',
      describe: '订单详情',
      data: data
    }).then(data => {
      resolve(data);
    }).catch(err => {
      reject(err);
    })
  })
}

export function goPay(data = {}) {
  return new Promise((resolve, reject) => {
    ajax({
      api: config.goPay,
      method: 'post',
      describe: '调起支付',
      data: data
    }).then(data => {
      resolve(data);
    }).catch(err => {
      reject(err);
    })
  })
}

export function paySuccess(data = {}) {
  return new Promise((resolve, reject) => {
    ajax({
      api: config.paySuccess,
      method: 'get',
      describe: '支付成功',
      data: data
    }).then(data => {
      resolve(data);
    }).catch(err => {
      reject(err);
    })
  })
}
