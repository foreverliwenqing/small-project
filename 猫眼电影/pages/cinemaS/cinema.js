var API = require('../../utils/apiMp4.js')
var app = getApp();
Page({
    data: {
        winWidth: 0,    //  当前设备的宽度
        winHeight: 0,   //  当前设备的高度
        moveS: [],

        moveLeft: [],
        moveRight: [],

        imgWidth: '',
        allWidth: ''
    },
    onLoad: function () {
        var that = this;
        /**
         * 获取当前设备的宽高
         */
        wx.getSystemInfo({
            success: function (res) {
                that.setData({
                    winWidth: res.windowWidth,
                    winHeight: res.windowHeight
                });
            }
        });
        API.ajax('', function (res) {
            let leftVal = [], rightVal = []
            res.data.forEach((item, index) => {
                for (const i in item) {
                    if (i == 'vLike') {
                        if ((item[i] / 10000) > 1) {
                            item['vLike'] = (item[i] / 10000).toFixed(1);
                        } else {
                            item['vLike'] = item[i];
                        }
                    }
                }
            });
            that.setData({
                moveS: res.data
            })
        })
    },
    onPlay(e) {
        app.globalData.mid = e.currentTarget.dataset.url;
        wx.navigateTo({
          url: '/pages/movePlay/movePlay',
        })
    }
})