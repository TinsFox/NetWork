import env from 'env.js'
import { Token } from 'token'
class axois {

  constructor() {

  }

  /**
   * 设置统一的异常处理
   */
  setErrorHandler(handler, toast) {
    this._errorHandler = handler;
    console.log(handler);
    this.showToast(toast);
  }

  async _refetch(params) {
    var token = new Token()
    await token.getTokenFromServer()
    // 延迟两秒重试
    setTimeout(() => {
      this.axois(params, true)
    }, 2000);
  }
  /**
   * 
   * @param {显示Loading} flag 
   */
  toast(flag){
    flag?wx.showLoading({
      title: '请稍后！',
    }):setTimeout(() => {
      wx.hideLoading()
    }, 500);
  }
  /**
   * 调用requestAll
   * @param {参数体} param 
   */
  axois(param) {
    return this.requestAll(param)
  }
  /**
   * 网络请求
   * @param {*} param 
   */
  requestAll(param, noRefetch) {
    this.toast(true)
    return new Promise((resolve, reject) => {
      var token = wx.getStorageSync('token')
      wx.request({
        url: env.host.baseUrl + param.url,
        data: param.data,
        header: { 'content-type': 'application/json', 'Authorization': token },
        method: param.method ? param.method : 'GET',
        success: (res => {
          let statusCode = res.statusCode
          let code = res.data.errorCode
          if (statusCode === 200) {
            switch (code) {
              case 0: resolve(res.data); break;
              default:
                break;
            }
          } else if (statusCode === 401) {
            if (!noRefetch) {
              this._refetch(param)
            }
            resolve(res.data)
          }
        }),
        fail: (res => {
          console.log(res)
          reject(res)
        }),
        complete:(res => {
          this.toast(false)
        })
      })
    })
  }
}
export { axois } 