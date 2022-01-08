// pages/history/history.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    historyS: [],
    value: "",
    modalHidden: true,
  },
  onLoad(options) {
    this.onChoice();
  },
  onPullDownRefresh() {
    let that = this;
    wx.showNavigationBarLoading() //在标题栏中显示加载
    setTimeout(function () {
      wx.hideNavigationBarLoading() //完成停止加载
      let history = wx.getStorageSync('history') || [];
      that.setData({
        historyS: history
      });
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1000);
  },
  onReachBottom: function () { },
  onShow() {
    this.onPullDownRefresh();
  },

  onInput: function (e) {
    this.setData({
      value: e.detail.value
    });
  },
  onclear() {
    this.setData({
      modalHidden: !this.data.modalHidden
    })
  },
  onChoice() {
    let that = this;
    let arr = []
    if (that.data.value != "") {
      let history = wx.getStorageSync('history') || [];
      history.forEach((item, index) => {
        if (item.num.indexOf(that.data.value) > -1) {
          arr.push(item);
        }
      })
      that.setData({
        historyS: arr
      });
    } else {
      that.setData({
        historyS: wx.getStorageSync('history') || []
      })
    }
  },
  switchModal() {
    this.setData({
      modalHidden: !this.data.modalHidden
    })
  },
  clearLog() {
    wx.removeStorageSync('history');
    this.setData({
      modalHidden: !this.data.modalHidden,
      historyS: []
    })
    wx.showToast({
      title: "删除成功",
      icon: 'success',
      duration: 1500
    })
  }
})