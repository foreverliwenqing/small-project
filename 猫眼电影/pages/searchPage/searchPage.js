// pages/searchPage/searchPage.js
var API = require('../../utils/api.js')
var ApiCinema = require('../../utils/apiCinema.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moveList: "",
    cinames: [],
    searchMove: [],
    citySearch: [],
    moveNum: 0,
    cinamesNum: 0,
    historyS: [],
    inputVal: "",
    historyFlag: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    API.ajax('', function (res) {
      that.setData({
        moveList: res.data
      })
    });

    ApiCinema.ajax("http://getcinema.com", function (res) {
      that.setData({
        cinames: res.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    let searchArr = wx.getStorageSync('searchVal') || [];
    this.setData({
      historyS: searchArr.splice(0, 3)
    })
  },
  cancle() {
    wx.navigateBack()
  },
  onInput(e) {
    let arr = [], cinames = [];
    if (e.detail.value == "") {
      arr = [];
      cinames = [];
    } else {
      this.data.moveList.forEach(item => {
        if (item.nm.indexOf(e.detail.value) > -1 || item.showInfo.indexOf(e.detail.value) > -1) {
          let reg = /\/w.h/
          item.img = item.img.replace(reg, '')
          arr.unshift(item)
        }
      });
      this.data.cinames.forEach(item => {
        if (item.name.indexOf(e.detail.value) > -1) {
          cinames.unshift(item)
        }
      })
    }
    let arrNew = [], newCinames = [];
    if (arr.length > 3) {
      arrNew = arr.slice(0, 3);
    } else {
      arrNew = arr;
    } 
    if (cinames.length > 2) {
      newCinames = cinames.slice(0, 2);
    } else {
      newCinames = cinames;
    }
    this.setData({
      searchMove: arrNew,
      moveNum: arr.length,
      citySearch: newCinames,
      cinamesNum: cinames.length
    })
    console.log(arrNew)
  },
  onBlur(e) {
    let searchArr = wx.getStorageSync('searchVal') || [];
    if (e.detail.value != "") {
      searchArr.unshift(e.detail.value);
    }
    wx.setStorageSync('searchVal', searchArr);
  },
  onClose(e) {
    this.data.historyS.splice(e.currentTarget.dataset.index, 1);
    this.setData({
      historyS: this.data.historyS
    })
    wx.setStorageSync('searchVal', this.data.historyS)
  },
  onHistory(e) {
    let inpVal = e.currentTarget.dataset.item;
    this.setData({
      inputVal: e.currentTarget.dataset.item,
      historyFlag: false
    })

    let arr = [], cinames = [];
    this.data.moveList.forEach(item => {
      if (item.name.indexOf(inpVal) > -1 || item.nation.indexOf(inpVal) > -1) {
        arr.unshift(item)
      }
    });

    this.data.cinames.forEach(item => {
      if (item.address.indexOf(inpVal) > -1 || item.name.indexOf(inpVal) > -1) {
        cinames.unshift(item)
      } else if (inpVal == "") {
        cinames = []
      }
    })

    let arrNew = [], newCinames = [];
    if (arr.length > 3) {
      arrNew = arr.slice(0, 3);
    } else {
      arrNew = arr;
    }
    if (cinames.length > 2) {
      newCinames = cinames.slice(0, 2);
    } else {
      newCinames = cinames;
    }
    this.setData({
      searchMove: arrNew,
      moveNum: arr.length,
      citySearch: newCinames,
      cinamesNum: cinames.length
    })
  },
  clearHis() {
    wx.setStorageSync('searchVal', []);
    this.setData({
      historyS: []
    })
  },
  onMove() {
    console.log(this.data.cinames)
  },
  onCinema() {
    console.log(this.data.moveList)
  }
})