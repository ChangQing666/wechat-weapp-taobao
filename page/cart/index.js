Page({
  data:{
    text:"我的购物车页面，近期正在开发中。。。"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
     wx.showNavigationBarLoading();
     wx.setNavigationBarTitle({
     title: '我的购物车'
   })
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})