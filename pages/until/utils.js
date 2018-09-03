const baseURl = 'https://m.yaojunrong.com'

const fetch = {
  http(url, methods,data) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: baseURl + url,
        data,
        methods: '',
        header:{
          'Content-Type': 'application/json'
        },
        success(res) {
          resolve(res)
        },
        fail(err){
          reject(err)
        }
      })
    })
  },
  get(url,data){
     return this.http(url,"GET",data);
  }
}
exports.fetch = fetch;
