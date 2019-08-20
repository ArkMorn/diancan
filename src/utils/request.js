import {_CONFIG} from '../../static/config/global.config.js';

const config = {
  login:'/app/auth',//登录
  getHomeData:'/home/index',//首页
  getProductData:'/home/product',//获取商品数据
  getDiancan:'/home/scan'//点餐页面数据
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
    var formData = (method == 'POST' || method == 'post') ? (JSON.stringify(data) || JSON.stringify({})) : (data || {});
    var contentType='application/json'
    if (describe == "WXLogin") {
      var requestUrl = _CONFIG.EXTERNAL_LOGIN + api
    }
    else {
      var requestUrl = _CONFIG.REQUEST_BASE_URL + api
    }
    wx.request({
      url: url || requestUrl,
      method: method,
      data: formData,
      params: data,
      header: {
      'Content-Type': contentType
    },
      success: function (data) {  //请求成功的回调
        if (showLoad) {
          wx.hideLoading();
        }

        console.log("")
        console.log("请求：" + (describe || api))
        console.log("返回：", data.data)
        console.log("")
        try {
          if (data.data.hasOwnProperty('success')) {

            if (data.data.success) {
              resolve(data.data);
            } else {
              var e = data.data.error;
              if (showTips) {
                if (e && e.message.length < 20) {
                  wx.showToast({ title: e.message, icon: "none" });
                } else {
                  wx.showToast({ title: "服务器异常，请稍后重试", icon: "none" });
                }

              }
              reject(e);
            }


          } else {
            if (data.data) {
              resolve(data.data)
            }
          }
        } catch (e) {

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
export function getHomeData(data={}){
  return new Promise((resolve, reject) => {
    ajax({
      api: config.getHomeData,
      method: 'get',
      describe: '获取首页数据',
      data:data
    }).then(data => {
      resolve(data);
    }).catch(err => {
      reject(err);
    })
  })
}
// ============
// =========
export function getProductData(data={}){
  return new Promise((resolve, reject) => {
    ajax({
      api: config.getProductData,
      method: 'get',
      describe: '获取商品数据',
      data:data
    }).then(data => {
      resolve(data);
    }).catch(err => {
      reject(err);
    })
  })
}
// ============
export function getDiancan(data={}){
  return new Promise((resolve, reject) => {
    ajax({
      api: config.getDiancan,
      method: 'get',
      describe: '点餐页面数据',
      data:data
    }).then(data => {
      resolve(data);
    }).catch(err => {
      reject(err);
    })
  })
}