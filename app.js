App({
  onLaunch: function () {
    console.log('App Launch');
     
 },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  getTaobaodata:function(){
    var that = this;
    wx.request({
      url: 'http://changqing.tech/test.php', //仅为示例，并非真实的接口地址
      data: {
      },
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log("从app.js请求服务器test.php获取数据")
        console.log(res.data);
        that.globalData.taobao = res.data;
       
      }
    });
  },
  globalData: {
    hasLogin: false,
    taobao:"",
  }
})
