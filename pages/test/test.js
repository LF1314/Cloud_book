// pages/test/test.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    viewopacity:0,
    ishow:false,
    animation: {}
  
  },
   change(){
   
     if(this.data.ishow){
      
       let _this = this;
       function g() {
         if (_this.data.viewopacity > 0) {
           _this.setData({
             viewopacity: _this.data.viewopacity - 0.01
           })
           setTimeout(g, 30);
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
     else{
       this.setData({
         ishow: !this.data.ishow
       })
       let _this=this;
     function f(){
       if (_this.data.viewopacity<1){
         _this.setData({
           viewopacity:_this.data.viewopacity+0.01
         })
         setTimeout(f, 30);
       }else{
         _this.setData({
           viewopacity:1
         })
       } 
     }
     f();
     }
 
   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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