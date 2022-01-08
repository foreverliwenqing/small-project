import ajax from '../../utils/request'
// pages/sou/sou.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas: [],
    inputVal: "",
    page: 1,
    noDataFlag: false,
    loadFlag: false,

    flagHeight: null
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    let query = wx.createSelectorQuery();
    query.select('.searchBox').boundingClientRect(rect => {
      that.setData({
        flagHeight: rect.height
      })
    }).exec();
  },
  reqFun() {
    let that = this;
    let params = {
      datas: that.data.inputVal,
      page: that.data.page,
      total: 10
    }
    ajax.request('/hgapi/getshelves.api', params, this.success, this.fail)
  },
  success(res) {
    let that = this;
    if (res.status) {
      wx.hideLoading();
      if (res.data.data.length < 10) {
        that.setData({
          noDataFlag: true,
          loadFlag: false
        })
      }
      let dataArr = that.data.datas.concat(res.data.data);
      that.setData({
        datas: dataArr
      })
      let query = wx.createSelectorQuery();
      query.select('.table').boundingClientRect(rect => {
        let height = rect.height;
        if(height < that.data.flagHeight) {
          that.onReachBottom();
        }
      }).exec();
    } else {
      wx.showToast({
        icon: 'none',
        title: res.msg,
        duration: 1500
      })
    }
  },
  fail(err) {
    wx.hideLoading();
    wx.showToast({
      icon: 'none',
      title: "查询失败，请重试...",
      duration: 1500
    })
  },
  set(e) {
    this.setData({
      inputVal: e.detail.value
    })
  },
  onSearch(e) {
    let that = this;
    that.setData({
      page: 1,
      datas: [],
      noDataFlag: false
    })
    that.reqFun();
    wx.showLoading({
      title: '加载中',
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
    let that = this;
    that.setData({
      page: that.data.page + 1,
      loadFlag: true
    })
    if (!that.data.noDataFlag) {
      that.reqFun()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})