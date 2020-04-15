/**
 * 有需要的时候，可以将程序的API接口全部在一个文件列出
 * 格式：名称：值
 * example：'REFRESH_TOKEN': '/gcu-api/refresh'
 */
const API = {
  'token':'/public/wx/login',
  // 令牌刷新
  'REFRESH_TOKEN': '/gcu-api/refresh',
  // 根据乘客输入的城市和上下车地点查询地点的相关信息（模糊查询
  'myInOrder': '/repair_item/user/in_orders',
  // 订单列表
  'ORDER_LIST': '/my/order/list',
  // 收费说明
  'CHARGE_DESCRIPTION': '/h5/charge-description.html',
  // 免责协议
  'DISCLAIMER_AGREEMENT': '/h5/disclaimer-agreement.html'
}

export default API