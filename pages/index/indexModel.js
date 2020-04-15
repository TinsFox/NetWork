import { axois } from '../../utils/axios'
const app = getApp()
var api = new axois()
class Category {
  constructor() {
    this.toast=true
  }
  async getIndex(data) {
        return api.axois({
          url: '',
          data:data,
          method:'POST',
        })
    }
    async get() {
      console.log(app)
      return api.axois({
        url: app.API.myInOrder,
        method:'GET',
      })
  }
}


export { Category };