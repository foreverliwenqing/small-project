function getRandomColor() {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length === 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
var app = getApp();
var apiMp4 = require('../../utils/apiMp4.js');
// pages/movePlay/movePlay.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    mObj: {},
    spread: false,
    tabIndex: 'intr',
    barVal: false,
    danmuList:
      [{
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      }, {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
    }],
    inpDisabled: true,
    placeHolder: "点击发弹幕...",
    danmu: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    apiMp4.ajax("", function (res) {
      let result = res.data;
      result.forEach(item => {
        if (item.vId == app.globalData.mid) {
          that.setData({
            mObj: item
          })
        }
      });
    })
  },
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  // 发送弹幕
  bindSendDanmu(){
    let that = this;
    this.videoContext.sendDanmu({
       text: this.data.danmu,
       color: getRandomColor()
    })
    that.setData({
      danmu: '',
      inpDisabled: true,
      placeHolder: "点击发弹幕...",
    })
 },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () { },
  onopenTitle() {
    let that = this;
    that.setData({
      spread: !this.data.spread
    })
  },
  onBlur(e) {
    let that = this;
    that.setData({
      danmu: e.detail.value
    })
  },
  checkTab(e) {
    let that = this;
    that.setData({
      tabIndex: e.target.dataset.index
    })
  },
  onFocus() {
    let that = this;
    that.setData({
      inpDisabled: false,
      placeHolder: "正在输入..."
    })
  },
  oncancel() {
    let that = this;
    that.setData({
      inpDisabled: !this.data.inpDisabled,
      placeHolder: "点击发弹幕...",
      danmu: ''
    })
  }
})