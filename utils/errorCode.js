//异常信息统一处理
const HTTP_ERROR = {
  // http 异常
  HTTP_DEFALUT_ERROR: new Map([
    [400, '请求参数错误'],
    [401, '请求要求用户的身份认证'],
    [403, '服务器拒绝执行此请求'],
    [404, '请求的资源无法找到'],
    [405, '请求中的方法被禁止'],
    [406, '服务器无法根据客户端请求的内容特性完成请求'],
    [407, '请求要求代理的身份认证'],
    [408, '请求超时'],
    [409, '请求存在冲突'],
    [410, '客户端请求的资源已经不存在'],
    [411, '服务器无法处理不带Content-Length的请求信息'],
    [412, '请求信息的先决条件错误'],
    [413, '请求的实体过大'],
    [414, '请求的URI过长'],
    [415, '无法处理请求附带的媒体格式'],
    [416, '无效的请求范围'],
    [417, '无法满足Expect的请求头信息'],
    [500, '服务器内部错误'],
    [501, '服务器不支持该请求功能'],
    [502, '请求失效'],
    [503, '服务器暂时的无法处理请求'],
    [504, '无法获取请求'],
    [505, 'http协议版本错误']
  ]),
  // 自定义异常
  CUSTOM_ERROR: new Map([
    [1, '暂时还未有具体信息'],
    [5000, '服务器错误'],
    [5010, '该域名在当前时间段禁止访问'],
    [5020, '授权失败'],
    [5030, '连接超时'],
    [5040, 'token异常'],
    [5050, 'token已过期'],
    [5060, '获取微信用户OpenID失败'],
    [5070, '表单参数错误'],
    [5080, '该账号已存在'],
    [5090, '该用户不存在'],
    [5100, '数据解析错误'],
    [5110, '数据更新失败']
  ])
}
// 使用方式：HTTP_ERROR.CUSTOM_ERROR.get(errCode) 获取
const getErrorMessage = function (error) {
  let response = error.response.data
  let err = {
    title: '未知错误',
    description: '系统发生未知的错误'
  }
  if (typeof response === 'string') {
    err.description = '服务器异常,请稍后重试'
  } else if (error.response.status >= 400 && error.response.status < 600) {
    err.title = (error.response.status < 500) ? '请求错误' : '服务器错误'
    err.description = HTTP_ERROR.HTTP_DEFALUT_ERROR.get(error.response.status)
  } else {
    err.code = response.status
    err.title = '后台系统错误'
    err.description = (response && 'status' in response && HTTP_ERROR.CUSTOM_ERROR.has(response.status)) ? HTTP_ERROR.CUSTOM_ERROR.get(response.status) : '操作失败,请稍后重试'
  }

  return err
}

export default HTTP_ERROR
