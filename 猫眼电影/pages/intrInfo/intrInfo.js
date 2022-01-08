const app = new getApp()
const API = require("../../utils/api.js")
// pages/intrInfo/intrInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    opaFlag: true,
    opaTitle: "展开",
    moveItem: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    let filmId = app.globalData.filmId;
    API.ajax("", function (res) {
      let list = res.data;
      list.forEach(item => {
        if (item.id == filmId) {
          console.log(item)
          const reg = /\/w.h/
          item.img = item.img.replace(reg, '');
          that.setData({
            moveItem: item
          })
        }
      });
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
  opaBtn(e) {
    let btnFlag = e.currentTarget.dataset.index, query = wx.createSelectorQuery(), titleFlag = "";
    this.setData({
      opaFlag: !btnFlag
    })
    if (btnFlag) {
      titleFlag = "收起"
    } else {
      titleFlag = "展开"
    }
    this.setData({
      opaTitle: titleFlag
    })
  }
})