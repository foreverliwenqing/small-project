Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: '/pages/swiper/swiper'
    }
  },

  data: {
    background: [
      "/assets/slide1.png",
      "/assets/slide2.png",
      "/assets/slide3.png"
    ],
    circular: true,
    //是否显示画板指示点，根据图片数量自动生成多少个圆点
    indicatorDots: true,
    //选中点的颜色
    //是否竖直
    vertical: false,
    //是否自动切换
    autoplay: true,
    //自动切换的间隔
    interval: 3000,
    //滑动动画时长毫秒
    duration: 1000,
    //所有图片的高度
    imgheights: [],
    //图片宽度
    imgwidth: 320,
    //默认
    current: 0
  },
  imageLoad: function (e) { //获取图片真实宽度
    var imgwidth = e.detail.width,
      imgheight = e.detail.height,
      //宽高比
      ratio = imgwidth / imgheight;
    //计算的高度值
    var viewHeight = 750 / ratio;
    var imgheight = viewHeight;
    var imgheights = this.data.imgheights;
    //把每一张图片的对应的高度记录到数组里
    imgheights[e.target.dataset.id] = imgheight;
    this.setData({
      imgheights: imgheights
    })
  },
  bindchange: function (e) {
    this.setData({
      current: e.detail.current
    })
  }
})