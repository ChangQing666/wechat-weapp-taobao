Page({
  data: {
    btn_login:"登录"
  },
  login: function(){
    console.log("")
    this.setData({
      btn_login:"正在登录中..."
    })
    // wx.redirectTo()
  }
   
})