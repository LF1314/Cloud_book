
import {fetch} from "../until/utils.js"

//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [],
    books:[],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 300
  },
  //事件处理函数

  onLoad: function () {
    this.getData();
    this.getbookData();

    } ,
  getUserInfo: function(e) {
    
  },
  getData:function(){
    fetch.get("/swiper").then(res=>{
      console.log(res.data.data)
      this.setData({
        imgUrls: res.data.data
      })
    })
  },
  getbookData:function(){
    fetch.get("/category/books").then(res=>{
      console.log(res.data.data)
      this.setData({
        books:res.data.data
      })
    })
  }

})
