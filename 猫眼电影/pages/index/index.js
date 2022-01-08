//index.js
//获取应用实例
const app = getApp()
var API = require('../../utils/api.js')
Page({
  data: {
    currentData: 0,
    listS: [],
    localCity: "空",
    tabs: [
      "热映", "待映"
    ],
  },
  onLoad: function () {
    let that = this;
    // that.onPullDownRefresh()
    API.ajax('', function (res) {
      res.data.forEach(item => {
        let reg = /\/w.h/
        item.img = item.img.replace(reg, '')
      });
      that.setData({
        listS: res.data,
      })
    });
  },
  choose(e) {
    var that = this;
    if (this.data.currentData === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentData: e.target.dataset.index
      })
    }
  },
  onShowCity() {
    wx.navigateTo({
      url: "/pages/city/city"
    })
  },
  onSearch() {
    wx.navigateTo({
      url: "/pages/searchPage/searchPage",
    })
  },
  onShow() {
    let obj = wx.createSelectorQuery().select('.city')
    if (wx.getStorageSync('localCity') == "") {
      wx.navigateTo({
        url: '/pages/city/city',
      })
    } else {
      if(app.globalData.localCity == '空') {
        this.setData({
          localCity: wx.getStorageSync('localCity')
        })
      } else {
        this.setData({
          localCity: app.globalData.localCity
        })
      }
    }
  },
  buyTic(e) {
    app.globalData.filmId = e.target.dataset.index;
    wx.navigateTo({
      url: "/pages/moveInfo/moveInfo"
    })
  }
})
