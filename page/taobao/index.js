
//获取应用实例
var app = getApp();
Page({
  data: {
    tb:"",
    banner3_title: "",
    banner3_img:"",
    banner3_desc_bg:"",
   
    imgUrls: [
      'http://gw.alicdn.com/imgextra/i4/195/TB2TTzyaCiJ.eBjSszfXXa4bVXa_!!195-0-yamato.jpg_q50.jpg',
      'http://gw.alicdn.com/imgextra/i2/196/TB2XHXZamCI.eBjy1XbXXbUBFXa_!!196-0-yamato.jpg_q50.jpg',
      'http://img.alicdn.com/tps/TB1LX_WNVXXXXX7XpXXXXXXXXXX-1125-352.jpg_q50.jpg',
      'http://img.alicdn.com/imgextra/i2/83/TB2p6W8axuI.eBjy0FdXXXgbVXa_!!83-0-yamato.jpg_q50.jpg'
      
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    menu:{
      imgUrls:[
        'http://gw.alicdn.com/tps/i2/TB19BluIVXXXXX6XpXXN4ls0XXX-183-129.png?imgtag=avatar',
        'http://gw.alicdn.com/tps/TB1FDOHLVXXXXcZXFXXXXXXXXXX-183-129.png?imgtag=avatar',
        'http://gw.alicdn.com/tps/TB1PlmNLVXXXXXEXFXXXXXXXXXX-183-129.png?imgtag=avatar',
        'http://gw.alicdn.com/tps/TB1RN0HMFXXXXXNXpXXXXXXXXXX-183-129.png?imgtag=avatar',
        'http://gw.alicdn.com/tps/TB1exaOLVXXXXXeXFXXXXXXXXXX-183-129.png?imgtag=avatar',
        'http://img.alicdn.com/tps/TB1GzMJLXXXXXXoXXXXXXXXXXXX-183-129.png',
        'http://gw.alicdn.com/tps/i3/TB1Ewu2KVXXXXXkapXXN4ls0XXX-183-129.png',
        'http://gw.alicdn.com/tps/TB1cniBJpXXXXataXXXXXXXXXXX-183-129.png?imgtag=avatar',
        'http://img.alicdn.com/tps/TB1caopLVXXXXaDaXXXXXXXXXXX-183-129.png',
        'http://gw.alicdn.com/tps/i1/TB1c1FMIpXXXXawXpXXN4ls0XXX-183-129.png?imgtag=avatar'
      ],
      descs:[
          '天猫',
          '聚划算',
          '天猫国际',
          '外卖',
          '天猫超市',
          '充值中心',
          '阿里旅行',
          '领金币',
          '到家',
          '分类'
      ]
    }

  },
  //事件处理函数
  showloading:function(){
  },
  bindViewTap: function() {
  },
  onShow:function(){
     wx.showNavigationBarLoading();
     wx.setNavigationBarTitle({
     title: '首页'
   })
  },
  onLoad: function () {
    console.log('taobao-onLoad')
    var that = this;
     wx.request({
      url: 'http://changqing.tech/test.php', //仅为示例，并非真实的接口地址
      data: { },
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log("从app.js请求服务器test.php获取数据")
       
        that.setData({
          tb:res.data,
          banner3_title:res.data.title,
          banner3_img:res.data.img,
          banner3_desc:res.data.desc,
        })
       console.log(that.banner3_title);
      }
    });
  }
})