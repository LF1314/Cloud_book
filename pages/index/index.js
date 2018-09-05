
import {fetch} from "../until/utils.js"

//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isloading:true,
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
  jumpmore:function(e){
    console.log(e)
    wx.navigateTo({
      url: `/pages/dypebook/typebook?id=${e.target.id}`,
    })

  },
  getbookData:function(){
  
    fetch.get("/category/books").then(res=>{
      console.log(res.data.data)
      
      this.setData({
        isloading: false,
        books:res.data.data
     
      })
    }).catch(err=>{
      this.setData({
        isloaing:false
      })
    })
  }

})
