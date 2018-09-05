// pages/readbook/readbook.js
import { fetch } from "../until/utils.js"
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isloading:false,
    articleid:"",
    booktitle:[],
    bookid:"",
    article:{},
    title:"",
    ishow:false,
    viewopacity: 0,


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
   this.setData({
     articleid:options.id,
     bookid:options.book_id
   })
  },
   getarticledata:function(){
     this.setData({
       isloading:true
     })
     fetch.get(`/article/${this.data.articleid}`).then(res=>{
       console.log(res.data.data);
       let data = app.towxml.toJson(res.data.data.article.content, 'markdown');
  
       this.setData({
         article:data,
         title:res.data.data.title,
         isloading:false,
       })

     }).catch(err=>{
       this.setData({
         isloaing:false
       })
     })
    

   },

   getbooktitle:function(){
     fetch.get(`/titles/${this.data.bookid}`).then(res=>{
       console.log(res.data)
       this.setData({
         booktitle:res.data.data
       })
     })
   },
  // 导航栏动画
  change() {
    if (this.data.ishow) {
      let _this = this;
      function g() {
        if (_this.data.viewopacity > 0) {
          _this.setData({
            viewopacity: _this.data.viewopacity - 0.05
          })
          setTimeout(g, 10);
        } else {
          _this.setData({
            viewopacity: 0
          })
          _this.setData({
            ishow: !_this.data.ishow
          })
        }
      }
      g();

    }
    else {
      this.setData({
        ishow: !this.data.ishow
      })
      let _this = this;
      function f() {
        if (_this.data.viewopacity < 1) {
          _this.setData({
            viewopacity: _this.data.viewopacity + 0.05
          })
          setTimeout(f, 10);
        } else {
          _this.setData({
            viewopacity: 1
          })
        }
      }
      f();
    }

  },

  changetitle(e){
    let id = e.currentTarget.id
    this.setData({
      articleid:id
    })
    this.getarticledata();
   this.setData({
     ishow:!this.data.ishow
   })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getarticledata();
    this.getbooktitle();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})