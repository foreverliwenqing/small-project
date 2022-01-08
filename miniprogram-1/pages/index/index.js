//index.js
//获取应用实例
let util = require('../../utils/util');
let saoApi = require('../../utils/request');
const app = getApp()

Page({
  data: {
    sao: "扫一扫",
    result: "",
    addHistory: false,
    searchCode: "",
    useInfo: ""
  },
  onLoad: function () {
    let that = this;
  },
  successFun(res) {
    let that = this;
    let iconFlag = ''
    if (res.status == 1) {
      that.setData({
        result: that.data.searchCode,
        useInfo: res.data.consignees
      })
      let history = wx.getStorageSync("history") || [];
      history.unshift({
        "num": that.data.searchCode,
        "util": util.formatTime(new Date()),
      })
      wx.setStorageSync("history", history);
      wx.hideLoading();
      iconFlag = 'success'
    } else {
      wx.hideLoading();
      iconFlag = 'none'
    }
    wx.showToast({
      title: res.msg,
      icon: iconFlag,
      duration: 2000
    })
  },
  failFun(err) {
    wx.hideLoading()
    wx.showToast({
      title: "订单号格式错误！",
      icon: 'none',
      duration: 2000
    })
  },
  start(item) {
    // 允许从相机和相册扫码
    var that = this;
    wx.scanCode({
      success: (res) => {
        var result = res.result;
        that.setData({
          searchCode: result
        })
        that.regestCode(result);
      },
      fail: (err) => {
        wx.showToast({
          title: "条形码不准确,识别错误",
          icon: 'none',
          duration: 1500
        })
      }
    })
  },
  regestCode(res) {
    wx.showLoading({ title: '加载中...', mask: "true" })
    saoApi.request("/hgapi/receupdate.api", { 'receno': res }, this.successFun, this.failFun)
  },
  onclear() {
    let that = this;
    that.setData({
      result: ""
    })
  },
  onReady: function () {
    // 页面渲染完毕
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload() {
    // 页面关闭
  },
  onShow() {
    this.setData({
      result: ""
    })
  },
  onSearch() {
    wx.reLaunch({
      url: "../sou/sou"
    })
  }
})
