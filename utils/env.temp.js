// 运行环境配置文件
/**
 * 为了方便管理不同的环境
 * 填写本文件的url，并重命名为 env.js
 */
// 开发环境
const dev = {
  baseUrl: '',
  ws: '',
  h5: '',
  label: 'dev',
}

// 测试环境
const test = {
  baseUrl: '',
  ws: '',
  h5: '',
  label: 'test'
}

// 生产环境
const prod = {
  baseUrl: '',
  ws: '',
  h5: '',
  label: 'prod'
}

module.exports = {
  // host: prod
  host:dev
}
