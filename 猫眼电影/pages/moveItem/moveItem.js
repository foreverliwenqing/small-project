// pages/moveItem/moveItem.js
const app = new getApp()
const APIjson = require("../../utils/getJson.js")
Page({
  /**
   * 页面的初始数据
   */
  data: {
    bannerImg: [],
    indicatorDots: false,
    vertical: false,
    autoplay: true,
    interval: 100000,
    duration: 500,
    current: 0,

    bgImg: "",
    moveInfo: {}
  },
  change(event) {
    let that = this;
    let index = event.detail.current;
    APIjson.ajax("http://getJson.com", function (res) {
      res.data.forEach(item => {
        let reg = /\/w.h/
        item.img = item.img.replace(reg, '')
      });
      that.getMoveInfo(res.data)
      that.setData({
        bgImg: res.data[index].img,
        current: index,
        moveInfo: res.data[index]
      })
    })
  },
  onItem(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      current: index
    })
  },
  getMoveInfo(data) {
    let that = this;
    console.log(data, that.current)
  },
  goMap() {
    wx.navigateTo({
      url: "/pages/map/map"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: app.globalData.cinameTitle
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let that = this;
    APIjson.ajax("http://getJson.com", function (res) {
      res.data.forEach(item => {
        let reg = /\/w.h/
        item.img = item.img.replace(reg, '')
      });
      that.setData({
        bannerImg: res.data,
        moveInfo: res.data[0]
      })
    })
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