
import { wxLogin } from './request'
export function login(par = {}, successed, failed) {
    if (par) {
        let userInfo = par
        console.log('userInfo',userInfo)
        wx.login({
            success(res) {
                if (res.code) {
                    // successed()
                    let data = { encryptedData: userInfo.mp.detail.encryptedData, iv: userInfo.mp.detail.iv, code: res.code }
                    wxLogin(data).then(res => {
                        if (res.token) {
                            // 登录成功  
                            wx.setStorageSync("wx-user", userInfo.mp.detail.userInfo);
                            setToken(res.token)
                            if (successed) {
                                successed()
                            }
                            
                        } else {
                            //登录失败
                            wx.showToast({
                                title: '登录失败！', //提示的内容,
                                icon: 'none', //图标,
                                duration: 2000, //延迟时间,
                                mask: true, //显示透明蒙层，防止触摸穿透,
                                success: res => { }
                            });
                            if (failed) {
                                failed()
                            }
                        }
                    })
                } else {
                    console.log('登录失败！' + res.errMsg)
                }
            }
        })
    }
}
export function removeToken() {
    wx.removeStorageSync('wx-token')
}
export function getToken() {
    wx.getStorageSync('wx-token')
}
export function setToken(data) {
    wx.setStorageSync('wx-token', data)
}