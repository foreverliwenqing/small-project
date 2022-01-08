// pages/city/city.js
var app = getApp();
var apiJson = require("../../utils/apiJson.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    citySList: [],
    cityS: [],
    searchValS: [],
    searchFlag: false,
    toView: '',
    localCity: "空",
    idxCity: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
          wx.showModal({
            title: '请求授权当前位置',
            content: '需要获取您的地理位置，请确认授权',
            success: function (res) {
              if (res.cancel) {
                wx.showToast({
                  title: '拒绝授权',
                  icon: 'none',
                  duration: 1000
                })
              } else if (res.confirm) {
                wx.openSetting({
                  success: function (dataAu) {
                    if (dataAu.authSetting["scope.userLocation"] == true) {
                      wx.showToast({
                        title: '授权成功',
                        icon: 'success',
                        duration: 1000
                      })
                      //再次授权，调用wx.getLocation的API
                    } else {
                      wx.showToast({
                        title: '授权失败',
                        icon: 'none',
                        duration: 1000
                      })
                    }
                  }
                })
              }
            }
          })
        } else if (res.authSetting['scope.userLocation'] == undefined) {
          //调用wx.getLocation的API
        }
        else {
          //调用wx.getLocation的API
        }
      }
    })
    if(app.globalData.localCity == "空") {
      wx.getLocation({
        type: 'wgs84',
        success(res) {
          const latitude = res.latitude   /* 维度*/
          const longitude = res.longitude  /* 经度 */
          var getAddressUrl = "https://apis.map.qq.com/ws/geocoder/v1/?location=" + latitude + "," + longitude + "&key=KRZBZ-BJOK6-LHSSO-ESNVM-A6BFE-ULFH7";
          wx.request({
            url: getAddressUrl,
            success: function (res) {
              that.setData({
                localCity: res.data.result.address_component.city
              })
            }
          })
        }
      })
    } else {
      that.setData({
        localCity: app.globalData.localCity
      })
    }
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
    let that = this;
    apiJson.ajax(
      'http://getMove.com', function (res) {
        that.getProfix(res.data.cities);
        that.setData({
          cityS: res.data.cities
        })
      }
    )
  },
  /**
   * 获取地区的英文首字母
   */
  getProfix: function (arr) {
    let that = this;
    let cityfixJson = [];
    arr.forEach(item => {
      if (!cityfixJson.length) {
        cityfixJson.push({
          'head': item.pinyin.charAt(0),
          'cityS': [item.pinyin],
          'cityNameS': [item.name]
        })
      } else {
        let res = cityfixJson.some((itemTw) => {
          if (item.pinyin.charAt(0) == itemTw.head) {
            itemTw.cityS.push(item.pinyin)
            itemTw.cityNameS.push(item.name)
            return true;
          }
        });
        if (!res) {
          cityfixJson.push({
            'head': item.pinyin.charAt(0),
            'cityS': [item.pinyin],
            'cityNameS': [item.name]
          })
        }
      }
    });
    this.setData({
      citySList: cityfixJson.sort((a, b) => (a.head > b.head) ? 1 : ((b.head > a.head) ? -1 : 0))
    })
  },
  getCode(e) {
    let searchArr = [];
    let that = this;
    that.data.cityS.forEach(item => {
      if (item.name.indexOf(e.detail.value) > -1 || item.pinyin.charAt(0).indexOf(e.detail.value) > -1) {
        searchArr.push(item)
      }
    });
    that.setData({
      searchValS: searchArr
    })
    if (e.detail.value == "") {
      that.setData({
        searchFlag: false
      })
    } else {
      that.setData({
        searchFlag: true
      })
    }
  },
  onItem(e) {
    this.setData({
      localCity: e.currentTarget.dataset.item
    })
    wx.setStorageSync('localCity', e.currentTarget.dataset.item)
    app.globalData.localCity = e.currentTarget.dataset.item;
    wx.navigateBack()
  },
  onItemTw(e) {
    this.setData({
      localCity: e.currentTarget.dataset.item,
      searchFlag: !this.data.searchFlag
    })
  },
  clickScroll(e) {
    var toView = e.currentTarget.dataset.id;
    console.log(toView)
    this.setData({
      "toView": toView,
      "idxCity": e.currentTarget.dataset.index
    })
    wx.showToast({
      title: toView.toUpperCase(),
      icon: 'none',
      duration: 1500
    })
  },
  scrollTop(e) {
    let arr = wx.createSelectorQuery().selectAll('.prefix');
  }
})