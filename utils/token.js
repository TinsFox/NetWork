import  env from 'env.js'
import API from './apiMap'
class Token {

  constructor() {
    this.tokenUrl = env.host.baseUrl + API.token
  }

  /**
   * 调用 API 接口，校验 token 是否有效
   */
  verify() {
    var token = wx.getStorageSync('token');
    if (token) {
      // 本地存在token
      // 存在，就向服务器校验token(随便拿一个接口调用进行验证)
      // this._veirfyFromServer(token);
    } else {
      // 不存在，就去服务器请求token
      this.getTokenFromServer();
    }
  }

  /**
   * 请求API接口，校验token的合法性
   * 如果不合法，会自动调用 getTokenFromServer 方法请求 token
   */
  _veirfyFromServer(token) {
    var that = this;
    console.log(token)
    wx.request({
      url: that.verifyUrl,
      method: 'GET',
      header: { 'content-type': 'application/json', 'Authorization': token },
      success: function (res) {
        var flag = res.statusCode === 200 ? true : false
        var valid = flag;
        if (!valid) {
          that.getTokenFromServer();
        }
      }
    })
  }

  /**
   * 请求API接口，获取新的token
   */
  getTokenFromServer(callBack) {
    var that = this;
    wx.login({
      success: function (res) {
        wx.request({
          url: that.tokenUrl,
          method: 'POST',
          data: {
            code: res.code
          },
          success: function (res) {
            // console.log(res.data.data)
            if(res.statusCode===200){
              wx.setStorageSync('token', res.data.data.token);
              wx.setStorageSync('identityId', res.data.data.identityId);
              wx.setStorageSync('phone', res.data.data.phone);
            }else{
              wx.showToast({
                title: '网络错误，请重试',
                icon: 'none'
              })
            }
          }
        })
      }
    })
  }
}


export { Token };