// 运行环境配置文件

// 开发环境
const dev = {
  baseUrl: 'https://class.landofdream.top/api/v2',
  ws: 'wss://dev.qq.cn',
  h5: 'https://dev.qq.cn',
  label: 'dev',
}

// 测试环境
const test = {
  baseUrl: 'https://test.qq.cn',
  ws: 'wss://test.qq.cn',
  h5: 'https://test.qq.cn',
  label: 'test'
}

// 生产环境
const prod = {
  baseUrl: 'https://class.landofdream.top/api/v2',
  ws: 'wss://prod.qq.cn',
  h5: 'https://prod.qq.cn',
  label: 'prod'
}

module.exports = {
  // host: prod
  host:dev
}
