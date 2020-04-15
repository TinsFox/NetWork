//index.js
//获取应用实例
const app = getApp()
import { Category } from './indexModel'
var category=new Category()
Page({
  data: {

  },
  async onLoad () {
    let res = await category.get()
    console.log(res)
    console.log(app)
  },

  async initData(){
    let data={
      
    }
    let res = await category.getIndex(data)
    console.log(res)
  }
})
