const app = getApp()
const API = require("../../utils/api.js")
const ApiCiname = require("../../utils/apiCinema.js")
// pages/moveInfo/moveInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moveItem: {},
    cinameS: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    let filmId = app.globalData.filmId;
    API.ajax("", function(res) {
      let list = res.data;
      list.forEach(item => {
        if(item.id == filmId) {
          const reg = /\/w.h/;
          item.img = item.img.replace(reg, '');
          that.setData({
            moveItem: item
          })
          wx.setNavigationBarTitle({
            title: item.nm,
          })
        }
      });
    })

    ApiCiname.ajax("http://getcinema.com", function(res) {
      res.data.forEach(item => {
        item.lowPrice = ((item.lowPrice) / 100).toFixed(2);
      });
      that.setData({
        cinameS: res.data
      })
    })
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

  },
  intrInfo() {
    wx.navigateTo({
      url: '/pages/intrInfo/intrInfo',
    })
  },
  toCiname(e) {
    app.globalData.cinameTitle = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '/pages/moveItem/moveItem',
    })
  }
})