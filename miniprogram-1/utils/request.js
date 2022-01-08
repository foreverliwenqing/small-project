// 封装request请求
var app = getApp();
// 将要使用的对象域名
var host = "https://rubywoo.store";
/**
 * Post请求
 * URL: 接口
 * postData: 参数，json类型
 * doSuccess: 成功的回调函数
 * doFail: 失败的回调函数
 */
function request(url, postData, doSuccess, doFail) {
  wx.request({
    // 项目的真实的接口
    url: host + url,
    header: {
      "content-type": "application/json;charset=UTF-8"
    },
    data: postData, // 传递的接口参数
    method: 'POST',
    success: function (res) {
      doSuccess(res.data);
    },
    fail: function () {
      doFail();
    }
  })
}

//GET请求，不需传参，直接URL调用，
function getData(url, doSuccess, doFail) {

  wx.request({
    url: host + url,
    header: {
      "content-type": "application/json;charset=UTF-8"
    },
    method: 'GET',
    success: function (res) {
      doSuccess(res.data);
    },
    fail: function () {
      doFail();
    },
  })
}

// 设置基于ajax请求链接
// function doAjax(url, postData, doSuccess, doFail) {
//   fetch(host + url)
//     .then(function (response) {
//       if (response.status == 200) {
//         that.data.page++;
//         return response.json();
//       }
//     })
//     .then(function (data) {
//       console.log(data);        //更新数据
//       that.setData({
//         listArr: that.data.page == 1 ? data : that.data.listArr.concat(data)
//       })
//       console.log(that.data.listArr);
//     })
// }
/**
* module.exports用来导出代码
*/
module.exports.request = request;
module.exports.getData = getData;


