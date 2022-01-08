var Mock = require('./mock.js')
var API_HOST = "http://getcinema.com";
let DEBUG = true;  // 切换数据入口
function ajax(data = '', fn, method = "get", header = {}) {

  if (!DEBUG) {
    wx.request({
      url: config.API_HOST + data,
      method: method ? method : 'get',
      data: {},
      header: header ? header : { "Content-Type": "application/json" },
      success: function (res) {
        fn(res);
      }
    });
  } else {
    var res = Mock.mock({
      'error_code': '',
      'error_msg': '',
      'data': [
        {
          "cinemaId": 1701,
          "name": "保利国际影城北京天安门店",
          "address": "北京市西城区前门煤市街北京坊C1区，B1\\B2层",
          "longitude": 116.40084880851147,
          "latitude": 39.90288663866534,
          "gpsAddress": "116.40084880851147:39.90288663866534",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110102,
          "districtName": "西城区",
          "district": {
            "districtId": 110102,
            "name": "西城区"
          },
          "phone": "010-63015188",
          "telephones": [
            "010-63015188"
          ],
          "logoUrl": "https://pic.maizuo.comusr/1701/6f7ceb05dc004a2dc145a114c36bf25c.jpg",
          "businessTime": "09:00-23:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 2500,
          "Distance": 1.460982073799317,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4855,
          "name": "北京大观楼影城",
          "address": "北京市宣武区大栅栏街36号",
          "longitude": 116.40155543987987,
          "latitude": 39.90194462171088,
          "gpsAddress": "116.40155543987987:39.90194462171088",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110102,
          "districtName": "西城区",
          "district": {
            "districtId": 110102,
            "name": "西城区"
          },
          "phone": "010-63083312/63030878",
          "telephones": [
            "010-63083312/63030878"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4855/9b94f61faa8c93d87a2a1b60e83fab0d.jpg",
          "businessTime": "8:30-23:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 1300,
          "Distance": 1.5359293545694255,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4954,
          "name": "北京首都电影院西单店",
          "address": "北京市西城区西单北大街甲131号大悦城商场十层",
          "longitude": 116.37948802514565,
          "latitude": 39.916902487053484,
          "gpsAddress": "116.37948802514565:39.916902487053484",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110102,
          "districtName": "西城区",
          "district": {
            "districtId": 110102,
            "name": "西城区"
          },
          "phone": "010-66062266",
          "telephones": [
            "010-66062266"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4954/685c676565b37a6d0c30e685f03ddee7.jpg",
          "businessTime": "",
          "notice": "温馨提示：《姜子牙》影片，建议十三岁以上观众观看\n1）4D厅提示：“4D厅老幼孕（身高1米以下儿童），患有高血压，心脏病等特殊人群不宜观看，身高1米以上儿童（需在成人陪同下）观影且需购票。”\n2）影厅按摩座椅提示：\n                  2号厅提示：“本影厅5、6、7排为按摩座椅，请您知悉。”\n                  3号厅提示：“本影厅3、4、5排为按摩座椅，请您知悉。”\n                  7号厅提示：“本影厅5、6、7、8排为按摩座椅，请您知悉。”\n                 10号厅提示：“本影厅5、6、7、8排为按摩座椅，请您知悉。”\n                 11号厅提示：“本影厅5、6、7、8排为按摩座椅，请您知悉。”",
          "isVisited": 0,
          "lowPrice": 5340,
          "Distance": 1.911522449640245,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4876,
          "name": "北京地质礼堂影院",
          "address": "北京市西四羊肉胡同30号",
          "longitude": 116.37800739847866,
          "latitude": 39.92868731886429,
          "gpsAddress": "116.37800739847866:39.92868731886429",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110102,
          "districtName": "西城区",
          "district": {
            "districtId": 110102,
            "name": "西城区"
          },
          "phone": "010-66168376/010-66178928",
          "telephones": [
            "010-66168376/010-66178928"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4876/584b754558601bcebf9447c471e770a6.jpg",
          "businessTime": "10:00-24:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3630,
          "Distance": 1.9644636588731488,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 2800,
          "name": "北京首都电影院中华店",
          "address": "北京市西城区天桥南大街3号楼一层、二层（天桥艺术大厦南侧）",
          "longitude": 116.40432509452992,
          "latitude": 39.89186066721472,
          "gpsAddress": "116.40432509452992:39.89186066721472",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110102,
          "districtName": "西城区",
          "district": {
            "districtId": 110102,
            "name": "西城区"
          },
          "phone": "56928100",
          "telephones": [
            "56928100"
          ],
          "logoUrl": "https://pic.maizuo.comusr/2800/685c676565b37a6d0c30e685f03ddee7.jpg",
          "businessTime": "",
          "notice": "温馨提示：《姜子牙》影片，建议十三岁以上观众观看",
          "isVisited": 0,
          "lowPrice": 3740,
          "Distance": 2.120060395873076,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 7925,
          "name": "晟嘉国际影城北京新华店",
          "address": "北京市西城区新街口北大街1号新华百货5层",
          "longitude": 116.37766650770712,
          "latitude": 39.953464056579435,
          "gpsAddress": "116.37766650770712:39.953464056579435",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110102,
          "districtName": "西城区",
          "district": {
            "districtId": 110102,
            "name": "西城区"
          },
          "phone": "010-62210770",
          "telephones": [
            "010-62210770"
          ],
          "logoUrl": "https://pic.maizuo.comusr/7925/66b372bc8dc80b571e3b016bc9ed8a4a.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 5590,
          "Distance": 2.3140096392108256,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 760,
          "name": "北京横店电影城",
          "address": "北京东城区王府井大街253号王府井百货（北京市百货大楼）北馆8F",
          "longitude": 116.41613772215558,
          "latitude": 39.92053430506407,
          "gpsAddress": "116.41613772215558:39.92053430506407",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110101,
          "districtName": "东城区",
          "district": {
            "districtId": 110101,
            "name": "东城区"
          },
          "phone": "010-65231588",
          "telephones": [
            "010-65231588"
          ],
          "logoUrl": "https://pic.maizuo.comusr/760/80af2e32e40c3373d899ef830541609d.jpg",
          "businessTime": "10:00-22:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3590,
          "Distance": 2.3287283741541907,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 1409,
          "name": "北京耀莱成龙国际影城（王府井店）",
          "address": "北京市东城区王府井大街301号新燕莎金街购物广场地下一层MB124号 ",
          "longitude": 116.41711400058382,
          "latitude": 39.916109055899966,
          "gpsAddress": "116.41711400058382:39.916109055899966",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110101,
          "districtName": "东城区",
          "district": {
            "districtId": 110101,
            "name": "东城区"
          },
          "phone": "010-65204099",
          "telephones": [
            "010-65204099"
          ],
          "logoUrl": "https://pic.maizuo.comusr/1409/2e49b4c16ed820a93778589c38d105b8.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3400,
          "Distance": 2.4866973003747397,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4879,
          "name": "中影国际影城北京小西天店",
          "address": "北京市新街口外大街25号",
          "longitude": 116.37738671787977,
          "latitude": 39.95916222020957,
          "gpsAddress": "116.37738671787977:39.95916222020957",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110108,
          "districtName": "海淀区",
          "district": {
            "districtId": 110108,
            "name": "海淀区"
          },
          "phone": "010-62263455",
          "telephones": [
            "010-62263455"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4879/26b869623a2f5a3c88300b37f14ed9f4.jpg",
          "businessTime": "09:00-21:30",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4000,
          "Distance": 2.4929156863674966,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 123,
          "name": "北京百老汇影城新东安店",
          "address": "北京市东城区王府井大街138号新东安广场6层",
          "longitude": 116.41832797065001,
          "latitude": 39.920571864562824,
          "gpsAddress": "116.41832797065001:39.920571864562824",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110101,
          "districtName": "东城区",
          "district": {
            "districtId": 110101,
            "name": "东城区"
          },
          "phone": "010-65281898",
          "telephones": [
            "010-65281898"
          ],
          "logoUrl": "https://pic.maizuo.comusr/123/7B04C2FA1A8D8DD0137787673EF04642.jpg",
          "businessTime": "9:00-24:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3700,
          "Distance": 2.567705632278885,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 122,
          "name": "北京百老汇影城东方广场店",
          "address": "北京市东城区东长安街1号东方广场地下一层第五街bb65",
          "longitude": 116.42097635495453,
          "latitude": 39.91566972486501,
          "gpsAddress": "116.42097635495453:39.91566972486501",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110101,
          "districtName": "东城区",
          "district": {
            "districtId": 110101,
            "name": "东城区"
          },
          "phone": "010-85186778",
          "telephones": [
            "010-85186778"
          ],
          "logoUrl": "https://pic.maizuo.comusr/122/7B04C2FA1A8D8DD0137787673EF04642.jpg",
          "businessTime": "9：00-24：00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3500,
          "Distance": 2.907587278096262,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 762,
          "name": "北京活力天宝国际影城",
          "address": "北京朝阳区祁家豁子8号健翔大厦地下一层",
          "longitude": 116.38794161897783,
          "latitude": 39.986578403552016,
          "gpsAddress": "116.38794161897783:39.986578403552016",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-82994670-898",
          "telephones": [
            "010-82994670-898"
          ],
          "logoUrl": "https://pic.maizuo.comusr/762/9a639c0d809e7470d7bdc09fb8788434.jpg",
          "businessTime": "10:00-23:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3730,
          "Distance": 2.928691726206012,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 1835,
          "name": "东四工人文化宫(东宫影剧院)",
          "address": "北京市东城区隆福寺街47号",
          "longitude": 116.42194705939708,
          "latitude": 39.93162674901355,
          "gpsAddress": "116.42194705939708:39.93162674901355",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110101,
          "districtName": "东城区",
          "district": {
            "districtId": 110101,
            "name": "东城区"
          },
          "phone": "010-84014225",
          "telephones": [
            "010-84014225"
          ],
          "logoUrl": "https://pic.maizuo.comusr/1835/0358e756f35be79fceb9bfa740e3afe2.png",
          "businessTime": "",
          "notice": "温馨提示：1.请勿携带非本影院出售的食品饮料入场。2.影院内禁止吸烟。3.影片放映期间，请勿喧哗。4.请将手机关闭或调至震动。5.影院内禁止摄影、录像及录音。",
          "isVisited": 0,
          "lowPrice": 2900,
          "Distance": 2.9290546992261364,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 564,
          "name": "北京传奇奢华影城崇文门店",
          "address": "北京市东城区东打磨厂街7号新活馆B1层",
          "longitude": 116.41970864645613,
          "latitude": 39.905788165343886,
          "gpsAddress": "116.41970864645613:39.905788165343886",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110101,
          "districtName": "东城区",
          "district": {
            "districtId": 110101,
            "name": "东城区"
          },
          "phone": "010-67086545",
          "telephones": [
            "010-67086545"
          ],
          "logoUrl": "https://pic.maizuo.comusr/564/d7d1b7d05bab8e96dc91971bf3a3d476.png",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 2780,
          "Distance": 2.9344421121401356,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4918,
          "name": "北京首都电影院金融街店",
          "address": "北京市西城区金融大街18号地下一层",
          "longitude": 116.3683246927426,
          "latitude": 39.921587623242296,
          "gpsAddress": "116.3683246927426:39.921587623242296",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110102,
          "districtName": "西城区",
          "district": {
            "districtId": 110102,
            "name": "西城区"
          },
          "phone": "13911093804",
          "telephones": [
            "13911093804"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4918/685c676565b37a6d0c30e685f03ddee7.jpg",
          "businessTime": "10：00-22:00",
          "notice": "温馨提示：《姜子牙》影片，建议十三岁以上观众观看",
          "isVisited": 0,
          "lowPrice": 5870,
          "Distance": 3.069527141047705,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 136,
          "name": "北京UME国际影城安贞店",
          "address": "北京市东城区北三环东路36号环球贸易中心三期商场一层",
          "longitude": 116.41689598183656,
          "latitude": 39.97342909372155,
          "gpsAddress": "116.41689598183656:39.97342909372155",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110101,
          "districtName": "东城区",
          "district": {
            "districtId": 110101,
            "name": "东城区"
          },
          "phone": "010-58257733",
          "telephones": [
            "010-58257733"
          ],
          "logoUrl": "https://pic.maizuo.comusr/136/026AEC4183D7F89F83FEDFFA20AF26B8.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3300,
          "Distance": 3.1971985202165594,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 8415,
          "name": "华夏影城(环宇荟店)",
          "address": "北京市朝阳区安定路6号环宇荟5层（安贞门地铁站B口）",
          "longitude": 116.413037,
          "latitude": 39.983666,
          "gpsAddress": "116.413037:39.983666",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-87726788",
          "telephones": [
            "010-87726788"
          ],
          "logoUrl": "https://pic.maizuo.comusr/8415/66b372bc8dc80b571e3b016bc9ed8a4a.jpg",
          "businessTime": "周一至周日 09:00-21:00 ",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 5400,
          "Distance": 3.2878680060625443,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 5140,
          "name": "北京天幕新彩云国际影城",
          "address": "北三环中路中视云投大厦（北太平桥西远望楼宾馆中央新影集团）",
          "longitude": 116.37412,
          "latitude": 39.975577,
          "gpsAddress": "116.37412:39.975577",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-58092222",
          "telephones": [
            "010-58092222"
          ],
          "logoUrl": "https://pic.maizuo.comusr/5140/6d2b8d4cbb33cd980e658b89384563bb.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3200,
          "Distance": 3.2906586757063643,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 65,
          "name": "1+X电影生活空间今典花园店（原17.5影城）",
          "address": "北京海淀区文慧园北路9号空间蒙太奇大厦2层",
          "longitude": 116.36759338222693,
          "latitude": 39.95886199168544,
          "gpsAddress": "116.36759338222693:39.95886199168544",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110108,
          "districtName": "海淀区",
          "district": {
            "districtId": 110108,
            "name": "海淀区"
          },
          "phone": "010-62228452",
          "telephones": [
            "010-62228452"
          ],
          "logoUrl": "https://pic.maizuo.comusr/65/326493cd94f6c5658b8403cc42863caf.jpg",
          "businessTime": "9:00-凌晨01:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4260,
          "Distance": 3.4338625883047458,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 2995,
          "name": "大地影院（大红门合生广场店）",
          "address": "北京市丰台区果园8号楼6层",
          "longitude": 116.40462764382568,
          "latitude": 39.86181845225933,
          "gpsAddress": "116.40462764382568:39.86181845225933",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110106,
          "districtName": "丰台区",
          "district": {
            "districtId": 110106,
            "name": "丰台区"
          },
          "phone": "暂无",
          "telephones": [
            "暂无"
          ],
          "logoUrl": "https://pic.maizuo.comusr/2995/8b065cb4dcb38ad1ef206c4dc1d9c111.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4300,
          "Distance": 3.5191174457142704,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4933,
          "name": "北京搜秀影城",
          "address": "北京市崇文区崇外大街40号搜秀城9层",
          "longitude": 116.42566936614216,
          "latitude": 39.902797901042156,
          "gpsAddress": "116.42566936614216:39.902797901042156",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110101,
          "districtName": "东城区",
          "district": {
            "districtId": 110101,
            "name": "东城区"
          },
          "phone": "010-51671298",
          "telephones": [
            "010-51671298"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4933/1154b24b087076e31f01b24aa4ee0417.tmp",
          "businessTime": "10：00-24：00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4700,
          "Distance": 3.6032214193739227,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 132,
          "name": "北京百丽宫影城金宝汇店",
          "address": "北京市东城区灯市口金宝街金宝汇7层",
          "longitude": 116.42792492773532,
          "latitude": 39.92128998711733,
          "gpsAddress": "116.42792492773532:39.92128998711733",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110101,
          "districtName": "东城区",
          "district": {
            "districtId": 110101,
            "name": "东城区"
          },
          "phone": "010-85221977",
          "telephones": [
            "010-85221977"
          ],
          "logoUrl": "https://pic.maizuo.comusr/132/1B8E6696AEC84BD5F657642014FA3A92.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3800,
          "Distance": 3.619087462965007,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 124,
          "name": "北京百老汇影城国瑞购物中心店",
          "address": "北京市东城区国瑞城购物中心首层南侧",
          "longitude": 116.4263071693424,
          "latitude": 39.90440345181179,
          "gpsAddress": "116.4263071693424:39.90440345181179",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110101,
          "districtName": "东城区",
          "district": {
            "districtId": 110101,
            "name": "东城区"
          },
          "phone": "010-67171338",
          "telephones": [
            "010-67171338"
          ],
          "logoUrl": "https://pic.maizuo.comusr/124/7B04C2FA1A8D8DD0137787673EF04642.jpg",
          "businessTime": "9:00-24:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3700,
          "Distance": 3.640763924456472,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 6942,
          "name": "保利万和院线中都影城",
          "address": "北京市西城区王府井购物中心右安门店五层",
          "longitude": 116.3710329212619,
          "latitude": 39.87778703302782,
          "gpsAddress": "116.3710329212619:39.87778703302782",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110102,
          "districtName": "西城区",
          "district": {
            "districtId": 110102,
            "name": "西城区"
          },
          "phone": "010-83556610",
          "telephones": [
            "010-83556610"
          ],
          "logoUrl": "https://pic.maizuo.comusr/6942/ceab948f2d2368ca17d80da22c1ce58d.jpg",
          "businessTime": "9:30—最后一场电影结束",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3320,
          "Distance": 3.764839911911062,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 3037,
          "name": "CGV星聚汇星星影城北京奥体店",
          "address": "北京市朝阳区湖景东路11号新奥广场地下一层、二层",
          "longitude": 116.40035259353081,
          "latitude": 40.00583758966355,
          "gpsAddress": "116.40035259353081:40.00583758966355",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-84372280",
          "telephones": [
            "010-84372280"
          ],
          "logoUrl": "https://pic.maizuo.comusr/3037/5f0133ae4a9246adc7057a4426b711a6.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 6500,
          "Distance": 3.7905387430345012,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 5143,
          "name": "北京青春光线电影院",
          "address": "东滨河路乙一号雍和航星园内",
          "longitude": 116.42777823803874,
          "latitude": 39.95637989354378,
          "gpsAddress": "116.42777823803874:39.95637989354378",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110101,
          "districtName": "东城区",
          "district": {
            "districtId": 110101,
            "name": "东城区"
          },
          "phone": "010-87227162",
          "telephones": [
            "010-87227162"
          ],
          "logoUrl": "https://pic.maizuo.comusr/5143/edd008b8f4220085cbfaf0f2bf354a00.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3900,
          "Distance": 3.808336955045127,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4910,
          "name": "广安门电影院",
          "address": "北京市西城区白广路8号",
          "longitude": 116.36585768260868,
          "latitude": 39.889919066292045,
          "gpsAddress": "116.36585768260868:39.889919066292045",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110102,
          "districtName": "西城区",
          "district": {
            "districtId": 110102,
            "name": "西城区"
          },
          "phone": "010-63522737/010-63531507",
          "telephones": [
            "010-63522737/010-63531507"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4910/fc9df6772956583b8928fd04fab41a91.jpg",
          "businessTime": "8:30-24:00",
          "notice": "姜子牙影片建议十三岁以上观众观看，谢谢！",
          "isVisited": 0,
          "lowPrice": 1200,
          "Distance": 3.8630167590688136,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 814,
          "name": "北京华谊兄弟影院洋桥店",
          "address": "北京市丰台区马家堡东路101号院10号楼银泰百货六层",
          "longitude": 116.3915523579752,
          "latitude": 39.85082319888619,
          "gpsAddress": "116.3915523579752:39.85082319888619",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110106,
          "districtName": "丰台区",
          "district": {
            "districtId": 110106,
            "name": "丰台区"
          },
          "phone": "010-56530888",
          "telephones": [
            "010-56530888"
          ],
          "logoUrl": "https://pic.maizuo.comusr/814/df76568711e54fe1d0825b818368d974.jpg",
          "businessTime": "10:00-22:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 2400,
          "Distance": 3.9437973268165263,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4887,
          "name": "北京剧院",
          "address": "北京市安慧里三区10号",
          "longitude": 116.41516629457709,
          "latitude": 39.997301730192355,
          "gpsAddress": "116.41516629457709:39.997301730192355",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-64975575",
          "telephones": [
            "010-64975575"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4887/448a8e1e33c69c1b9bd69bca868c532c.jpg",
          "businessTime": "",
          "notice": "除夕当天不营业",
          "isVisited": 0,
          "lowPrice": 3630,
          "Distance": 3.978464238641428,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 1756,
          "name": "保利国际影城北京凯德大峡谷店",
          "address": "北京丰台区南三环首地大峡谷购物中心5层",
          "longitude": 116.37383606653798,
          "latitude": 39.86091866248993,
          "gpsAddress": "116.37383606653798:39.86091866248993",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110106,
          "districtName": "丰台区",
          "district": {
            "districtId": 110106,
            "name": "丰台区"
          },
          "phone": "010-87578551",
          "telephones": [
            "010-87578551"
          ],
          "logoUrl": "https://pic.maizuo.comusr/1756/6f7ceb05dc004a2dc145a114c36bf25c.tmp",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3780,
          "Distance": 4.191445703558829,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 845,
          "name": "北京保利科学馆影院",
          "address": "北京市北辰东路5号中国科技馆新馆（鸟巢北侧）",
          "longitude": 116.40515289024383,
          "latitude": 40.01235287908331,
          "gpsAddress": "116.40515289024383:40.01235287908331",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-59041542/84374515 ",
          "telephones": [
            "010-59041542/84374515 "
          ],
          "logoUrl": "https://pic.maizuo.comusr/845/bb0b3d9623ce1b72dba0866adcfbc4c7.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4000,
          "Distance": 4.2120911580327,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 8645,
          "name": "北京博纳国际影城亚运村店",
          "address": "北京市朝阳区安立路68号-1层3区内B1-001",
          "longitude": 116.41490380970708,
          "latitude": 40.00460423749671,
          "gpsAddress": "116.41490380970708:40.00460423749671",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-59856199",
          "telephones": [
            "010-59856199"
          ],
          "logoUrl": "https://pic.maizuo.comusr/8645/66b372bc8dc80b571e3b016bc9ed8a4a.jpg",
          "businessTime": "9:30-23:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3420,
          "Distance": 4.271083103114689,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4907,
          "name": "北京金鸡百花影城",
          "address": "北京市朝阳区北三环东路22号",
          "longitude": 116.43051438319837,
          "latitude": 39.97463703166446,
          "gpsAddress": "116.43051438319837:39.97463703166446",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-64203483",
          "telephones": [
            "010-64203483"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4907/a78a09bd27f1b11d239f236faf8e7257.jpg",
          "businessTime": "08：30-22:30",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3630,
          "Distance": 4.46722195867511,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9443,
          "name": "泰禾影城（马家堡店）",
          "address": "丰台区角门19号新荟城购物中心4层泰禾影城马家堡店",
          "longitude": 116.38438370034449,
          "latitude": 39.84232600001338,
          "gpsAddress": "116.38438370034449:39.84232600001338",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110106,
          "districtName": "丰台区",
          "district": {
            "districtId": 110106,
            "name": "丰台区"
          },
          "phone": "010-87587970",
          "telephones": [
            "010-87587970"
          ],
          "logoUrl": "",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 1330,
          "Distance": 4.514863601622051,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9467,
          "name": "百誉朗克影城",
          "address": "朝阳区林萃西里16号楼华创生活广场F1层",
          "longitude": 116.37890529436132,
          "latitude": 40.016142263282,
          "gpsAddress": "116.37890529436132:40.016142263282",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-57761726",
          "telephones": [
            "010-57761726"
          ],
          "logoUrl": "",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3090,
          "Distance": 4.652068367597411,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 835,
          "name": "北京博纳国际影城方庄店",
          "address": "北京市丰台区蒲黄榆路28号芳群园一区",
          "longitude": 116.42874897751523,
          "latitude": 39.870240652744876,
          "gpsAddress": "116.42874897751523:39.870240652744876",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110106,
          "districtName": "丰台区",
          "district": {
            "districtId": 110106,
            "name": "丰台区"
          },
          "phone": "010－67699909",
          "telephones": [
            "010－67699909"
          ],
          "logoUrl": "https://pic.maizuo.comusr/835/5559efb89b4635016d7a651242cf1ee2.jpg",
          "businessTime": "9:00-23:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3210,
          "Distance": 4.725723659447923,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9440,
          "name": "北京深影影城",
          "address": "北京海淀区四道口学院南路50号哇沃生活广场三层",
          "longitude": 116.3554100239173,
          "latitude": 39.96330305004661,
          "gpsAddress": "116.3554100239173:39.96330305004661",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110108,
          "districtName": "海淀区",
          "district": {
            "districtId": 110108,
            "name": "海淀区"
          },
          "phone": "010-53979668 ",
          "telephones": [
            "010-53979668 "
          ],
          "logoUrl": "",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4530,
          "Distance": 4.772392912009091,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9449,
          "name": "三克影院（来福士店）",
          "address": "东城区东直门来福士购物中心5层",
          "longitude": 116.43859265510716,
          "latitude": 39.945783168388836,
          "gpsAddress": "116.43859265510716:39.945783168388836",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110101,
          "districtName": "东城区",
          "district": {
            "districtId": 110101,
            "name": "东城区"
          },
          "phone": "010-84080500",
          "telephones": [
            "010-84080500"
          ],
          "logoUrl": "",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 8050,
          "Distance": 4.844502016295467,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 8862,
          "name": "华联影院（公益西桥店）",
          "address": "北京市丰台区城南嘉园益城园14号楼F3-40",
          "longitude": 116.37577487932016,
          "latitude": 39.84017388575384,
          "gpsAddress": "116.37577487932016:39.84017388575384",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110106,
          "districtName": "丰台区",
          "district": {
            "districtId": 110106,
            "name": "丰台区"
          },
          "phone": "010-87588266",
          "telephones": [
            "010-87588266"
          ],
          "logoUrl": "",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 2420,
          "Distance": 4.963285531730111,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 5360,
          "name": "北京东融国际影城(草桥店)",
          "address": "北京丰台草桥东路1号上品折扣3层",
          "longitude": 116.36503107714961,
          "latitude": 39.85658312148019,
          "gpsAddress": "116.36503107714961:39.85658312148019",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110106,
          "districtName": "丰台区",
          "district": {
            "districtId": 110106,
            "name": "丰台区"
          },
          "phone": "010-87887846",
          "telephones": [
            "010-87887846"
          ],
          "logoUrl": "https://pic.maizuo.comusr/5360/575cc76ec9865a36a874baa0ec4fe89f.png",
          "businessTime": "9：00-24:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 2100,
          "Distance": 4.979531079104014,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 5058,
          "name": "北京金泉港IMAX国际影城",
          "address": "北京市朝阳区大屯里318号楼4层",
          "longitude": 116.4218642401206,
          "latitude": 40.01422511720809,
          "gpsAddress": "116.4218642401206:40.01422511720809",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-59655857",
          "telephones": [
            "010-59655857"
          ],
          "logoUrl": "https://pic.maizuo.comusr/5058/d6a030319da1b016620d0098a855db5b.jpg",
          "businessTime": "10:00-24:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4800,
          "Distance": 5.0906547854822195,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4840,
          "name": "北京完美世界影城四道口店（原17.5影城）",
          "address": "北京市海淀区四道口路2号京果商厦三层北侧17.5影城",
          "longitude": 116.35247337337464,
          "latitude": 39.96603357279651,
          "gpsAddress": "116.35247337337464:39.96603357279651",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110108,
          "districtName": "海淀区",
          "district": {
            "districtId": 110108,
            "name": "海淀区"
          },
          "phone": "010-62118930",
          "telephones": [
            "010-62118930"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4840/dab9381a3293fdd056e413e61a0a9707.jpg",
          "businessTime": "9:00－23:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3380,
          "Distance": 5.125805706211951,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4878,
          "name": "北京东环影城",
          "address": "东城区东中街9号东环广场B座地下一层",
          "longitude": 116.44261186350126,
          "latitude": 39.94247768704179,
          "gpsAddress": "116.44261186350126:39.94247768704179",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110101,
          "districtName": "东城区",
          "district": {
            "districtId": 110101,
            "name": "东城区"
          },
          "phone": "010-64185949",
          "telephones": [
            "010-64185949"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4878/0e39f57f05be1d2405b9a1c1d5252802.jpg",
          "businessTime": "09:00-23:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3630,
          "Distance": 5.264805754431498,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9446,
          "name": "晟嘉国际影城（月坛万方店）",
          "address": "西城区月坛南街30号万方西单商场",
          "longitude": 116.34775704307425,
          "latitude": 39.919407403782884,
          "gpsAddress": "116.34775704307425:39.919407403782884",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110102,
          "districtName": "西城区",
          "district": {
            "districtId": 110102,
            "name": "西城区"
          },
          "phone": "010-68575080-888",
          "telephones": [
            "010-68575080-888"
          ],
          "logoUrl": "",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4200,
          "Distance": 5.356467988458586,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 848,
          "name": "北京博纳影城悠唐店",
          "address": "三丰北里2号楼悠唐生活广场B1层（朝阳门钱柜对面）",
          "longitude": 116.44557822460035,
          "latitude": 39.927488700316175,
          "gpsAddress": "116.44557822460035:39.927488700316175",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-59775660",
          "telephones": [
            "010-59775660"
          ],
          "logoUrl": "https://pic.maizuo.comusr/848/bf5e24af316691cd1228dacaa396158d.jpg",
          "businessTime": "10:00-24:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3740,
          "Distance": 5.559912856852071,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 1702,
          "name": "中影国际影城北京石榴中心店",
          "address": "北京市丰台区宋家庄石榴中心斯坦福广场B1层（榴乡路88号院）",
          "longitude": 116.4300132562832,
          "latitude": 39.84799042587763,
          "gpsAddress": "116.4300132562832:39.84799042587763",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110106,
          "districtName": "丰台区",
          "district": {
            "districtId": 110106,
            "name": "丰台区"
          },
          "phone": "010-56762345",
          "telephones": [
            "010-56762345"
          ],
          "logoUrl": "https://pic.maizuo.comusr/1702/2dffcd54f18204485c3e66c775d0b7b8.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4000,
          "Distance": 5.578828362430843,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4929,
          "name": "北京当代MOMA百老汇电影中心",
          "address": "北京市东城区东直门香河园路1号当代MOMA北区T4座",
          "longitude": 116.44509900196672,
          "latitude": 39.95695808827053,
          "gpsAddress": "116.44509900196672:39.95695808827053",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110101,
          "districtName": "东城区",
          "district": {
            "districtId": 110101,
            "name": "东城区"
          },
          "phone": "010-84388258",
          "telephones": [
            "010-84388258"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4929/3b51c7f0c0553e580453117730dcb6b6.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 2800,
          "Distance": 5.664979546130851,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 8115,
          "name": "北京元影城",
          "address": "北京市朝阳区安立路28号院华创生活广场1层",
          "longitude": 116.418741,
          "latitude": 40.032766,
          "gpsAddress": "116.418741:40.032766",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-64126331",
          "telephones": [
            "010-64126331"
          ],
          "logoUrl": "https://pic.maizuo.comusr/8115/66b372bc8dc80b571e3b016bc9ed8a4a.jpg",
          "businessTime": "9:00-0:30",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4170,
          "Distance": 5.701190414704118,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 619,
          "name": "北京新华国际影城大钟寺店",
          "address": "北京市海淀区大钟寺中坤广场C座3层",
          "longitude": 116.34737847916625,
          "latitude": 39.971460821084236,
          "gpsAddress": "116.34737847916625:39.971460821084236",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110108,
          "districtName": "海淀区",
          "district": {
            "districtId": 110108,
            "name": "海淀区"
          },
          "phone": "010-82511616",
          "telephones": [
            "010-82511616"
          ],
          "logoUrl": "https://pic.maizuo.comusr/619/1F0B4FFA15DE7BB0158CBB2B6884FF47.jpg",
          "businessTime": "10:00-24:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3900,
          "Distance": 5.751092410058203,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 1339,
          "name": "北京红星太平洋影城",
          "address": "北京市朝阳区七圣中街12号院爱琴海购物中心6层",
          "longitude": 116.44283078055403,
          "latitude": 39.97776200557009,
          "gpsAddress": "116.44283078055403:39.97776200557009",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-84240610",
          "telephones": [
            "010-84240610"
          ],
          "logoUrl": "https://pic.maizuo.comusr/1339/f2fba9fd558de8218d030f32eb39d8a2.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 5640,
          "Distance": 5.761113577186787,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4948,
          "name": "北京嘉华国际影城(学清路店)",
          "address": "北京市海淀区学清路甲8号，圣熙八号购物中心五层西侧",
          "longitude": 116.359565,
          "latitude": 40.014207,
          "gpsAddress": "116.359565:40.014207",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110108,
          "districtName": "海淀区",
          "district": {
            "districtId": 110108,
            "name": "海淀区"
          },
          "phone": "010-82732228",
          "telephones": [
            "010-82732228"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4948/f3cee67119e11df361b358ae4ba3723e.jpg",
          "businessTime": "9:00-24:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4590,
          "Distance": 5.786356924478342,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 1484,
          "name": "北京万达电影城槐房店",
          "address": "北京市丰台区槐房南路6号院万达广场4层万达影城",
          "longitude": 116.374792,
          "latitude": 39.819783,
          "gpsAddress": "116.374792:39.819783",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110106,
          "districtName": "丰台区",
          "district": {
            "districtId": 110106,
            "name": "丰台区"
          },
          "phone": "暂无",
          "telephones": [
            "暂无"
          ],
          "logoUrl": "https://pic.maizuo.comusr/1484/142a8cbb77b1a308a0f000539c4960cd.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4910,
          "Distance": 5.925456320167512,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4938,
          "name": "北京新华国际影城宝盛店",
          "address": "北京市海淀区宝盛北里西区28楼兴美生活广场五层",
          "longitude": 116.37683884943398,
          "latitude": 40.04317796204542,
          "gpsAddress": "116.37683884943398:40.04317796204542",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110108,
          "districtName": "海淀区",
          "district": {
            "districtId": 110108,
            "name": "海淀区"
          },
          "phone": "010-62905220、15210457635",
          "telephones": [
            "010-62905220、15210457635"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4938/58022b720d332742345a6e7847222993.tmp",
          "businessTime": "周一至周四9:15-22:30，周五、六、日8:45-23:00，特殊法定节假日8:15-23:30。",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4050,
          "Distance": 5.978439881016775,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4040,
          "name": "米瑞酷影城（北京日坛店）",
          "address": "北京市朝阳区神路街39号B座-1层",
          "longitude": 116.45023847728096,
          "latitude": 39.92484126891719,
          "gpsAddress": "116.45023847728096:39.92484126891719",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-85306797",
          "telephones": [
            "010-85306797"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4040/951181e84712e8e4fabeaee864792b6a.jpg",
          "businessTime": "9:00-24:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3100,
          "Distance": 6.082654663797247,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 622,
          "name": "北京正华影城",
          "address": "北京市丰台区政馨园三区5号楼底商B1层",
          "longitude": 116.43806697660406,
          "latitude": 39.85155460462937,
          "gpsAddress": "116.43806697660406:39.85155460462937",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110106,
          "districtName": "丰台区",
          "district": {
            "districtId": 110106,
            "name": "丰台区"
          },
          "phone": "010-87688666",
          "telephones": [
            "010-87688666"
          ],
          "logoUrl": "https://pic.maizuo.comusr/622/659BCB6857574317682B82422C2BB8CB.jpg",
          "businessTime": "9:30-22:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4150,
          "Distance": 6.114679410790276,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 731,
          "name": "北京米高梅MG影城",
          "address": "北京市朝阳区工体北路21号永利国际购物中心B1",
          "longitude": 116.450853277572,
          "latitude": 39.94090814717298,
          "gpsAddress": "116.450853277572:39.94090814717298",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-58010588",
          "telephones": [
            "010-58010588"
          ],
          "logoUrl": "https://pic.maizuo.comusr/731/0267d19f90e205be85b5c754be065767.png",
          "businessTime": "周一至周日10:00-02:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4270,
          "Distance": 6.1695242031530535,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9453,
          "name": "英皇电影城（英皇集团中心店）",
          "address": "朝阳区建外大街丁12号英皇集团中心B1层",
          "longitude": 116.45108208856166,
          "latitude": 39.913913887158024,
          "gpsAddress": "116.45108208856166:39.913913887158024",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-51208009-817",
          "telephones": [
            "010-51208009-817"
          ],
          "logoUrl": "",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4640,
          "Distance": 6.222368815951958,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4868,
          "name": "北京K酷国际影城",
          "address": "北京市朝阳区北苑路42号",
          "longitude": 116.42515599083136,
          "latitude": 40.0396391406815,
          "gpsAddress": "116.42515599083136:40.0396391406815",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-84929466",
          "telephones": [
            "010-84929466"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4868/1f043e591a7516111faf45d95c199128.jpg",
          "businessTime": "10：00-23：00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3000,
          "Distance": 6.345949402387012,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9456,
          "name": "泰禾影城（立水桥店）",
          "address": "朝阳区安立路3号1幢1层106",
          "longitude": 116.41745955445926,
          "latitude": 40.04996619150913,
          "gpsAddress": "116.41745955445926:40.04996619150913",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-84818788",
          "telephones": [
            "010-84818788"
          ],
          "logoUrl": "",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 1330,
          "Distance": 6.417199664871068,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4900,
          "name": "北京鲁信影城(立水桥店)",
          "address": "立清路明天第一城7号院，蓝黛时空汇内",
          "longitude": 116.414718,
          "latitude": 40.05333,
          "gpsAddress": "116.414718:40.05333",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-84671861",
          "telephones": [
            "010-84671861"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4900/c67b06e7eaa12f2d4ca8a79e99441902.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4000,
          "Distance": 6.464823226772484,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4950,
          "name": "北京紫光影城",
          "address": "北京市朝阳区朝外大街蓝岛大厦西区五至六层",
          "longitude": 116.45477005039217,
          "latitude": 39.928369408466324,
          "gpsAddress": "116.45477005039217:39.928369408466324",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-65992922",
          "telephones": [
            "010-65992922"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4950/6b9c425cdda3962d2f88b01dcd857cd9.jpg",
          "businessTime": "9:30-21:30",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3630,
          "Distance": 6.5822533791904,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4897,
          "name": "北京卢米埃影城(芳草地店)",
          "address": "北京市朝阳区东大桥路9号楼地下二层LG2-26单元",
          "longitude": 116.456167,
          "latitude": 39.92488,
          "gpsAddress": "116.456167:39.92488",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-56907679",
          "telephones": [
            "010-56907679"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4897/4931d2acca6c82bbb0d63ebc9bb5e288.jpg",
          "businessTime": "9：00-12:30",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 6900,
          "Distance": 6.742020761057553,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 5142,
          "name": "北京艾米·1895电影街",
          "address": "工体北路13号世茂工三3楼，艾米·1895电影街（三里屯商圈）",
          "longitude": 116.45672016745091,
          "latitude": 39.941644135198935,
          "gpsAddress": "116.45672016745091:39.941644135198935",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-64160922",
          "telephones": [
            "010-64160922"
          ],
          "logoUrl": "https://pic.maizuo.comusr/5142/c67b06e7eaa12f2d4ca8a79e99441902.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3900,
          "Distance": 6.823341620019491,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9450,
          "name": "新影联东申影城（贵友店）",
          "address": "朝阳区建国门外大街甲5号贵友大厦4层",
          "longitude": 116.45766245489695,
          "latitude": 39.914843754491024,
          "gpsAddress": "116.45766245489695:39.914843754491024",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-65629164-808",
          "telephones": [
            "010-65629164-808"
          ],
          "logoUrl": "",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3650,
          "Distance": 6.944385965054621,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 5362,
          "name": "中影星美国际影城北京世贸天阶店",
          "address": "北京朝阳区光华路9号世贸天阶商业南街B1层",
          "longitude": 116.458167,
          "latitude": 39.922281,
          "gpsAddress": "116.458167:39.922281",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-52061071",
          "telephones": [
            "010-52061071"
          ],
          "logoUrl": "https://pic.maizuo.comusr/5362/ebb0f5a1d028e2dbceb43055d1b68ccb.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 5000,
          "Distance": 6.970372969037998,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9406,
          "name": "北京沃美启泰影城（中骏世界城店）",
          "address": "朝阳区金汇路101幢中骏世界城E座B1层",
          "longitude": 116.45920769847588,
          "latitude": 39.92343932917864,
          "gpsAddress": "116.45920769847588:39.92343932917864",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-80699201",
          "telephones": [
            "010-80699201"
          ],
          "logoUrl": "",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4400,
          "Distance": 7.083192636760676,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 1911,
          "name": "保利国际影城北京万源店",
          "address": "北京市丰台区东高地万源北航路航天万源广场5楼",
          "longitude": 116.43042534585115,
          "latitude": 39.80901233451727,
          "gpsAddress": "116.43042534585115:39.80901233451727",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110106,
          "districtName": "丰台区",
          "district": {
            "districtId": 110106,
            "name": "丰台区"
          },
          "phone": "010-68198833",
          "telephones": [
            "010-68198833"
          ],
          "logoUrl": "https://pic.maizuo.comusr/1911/6f7ceb05dc004a2dc145a114c36bf25c.tmp",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3500,
          "Distance": 7.132775879783156,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4924,
          "name": "北京万达国际影城天通苑店",
          "address": "北京市昌平区立汤路186号龙德广场五层",
          "longitude": 116.42170739597854,
          "latitude": 40.06553029969137,
          "gpsAddress": "116.42170739597854:40.06553029969137",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110114,
          "districtName": "昌平区",
          "district": {
            "districtId": 110114,
            "name": "昌平区"
          },
          "phone": "010-84844742",
          "telephones": [
            "010-84844742"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4924/efa28b68ee4ca8973b963e07b383dbd6.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 5350,
          "Distance": 7.311306080217862,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 135,
          "name": "北京UME国际影城华星店",
          "address": "北京市海淀区双榆树科学院南路44号",
          "longitude": 116.3327994047395,
          "latitude": 39.97352786109801,
          "gpsAddress": "116.3327994047395:39.97352786109801",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110108,
          "districtName": "海淀区",
          "district": {
            "districtId": 110108,
            "name": "海淀区"
          },
          "phone": "010-82115566转105",
          "telephones": [
            "010-82115566转105"
          ],
          "logoUrl": "https://pic.maizuo.comusr/135/4c825a0a7d23df9fed5b85caad9a4bc7.jpg",
          "businessTime": "8:30-23:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3790,
          "Distance": 7.319587406850284,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4848,
          "name": "北京国图影院",
          "address": "北京市海淀区中关村南大街33号",
          "longitude": 116.32977194000131,
          "latitude": 39.94744415850596,
          "gpsAddress": "116.32977194000131:39.94744415850596",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110108,
          "districtName": "海淀区",
          "district": {
            "districtId": 110108,
            "name": "海淀区"
          },
          "phone": "010-68485462/88545520",
          "telephones": [
            "010-68485462/88545520"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4848/e53ade43d9af678a0c7c2f12f6fba4af.jpg",
          "businessTime": "9:00-19:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3400,
          "Distance": 7.383566903397003,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 1416,
          "name": "北京星环影城立水桥店",
          "address": "北京朝阳区立水桥城铁站13号线A口东亚新华小区北门",
          "longitude": 116.35110040323318,
          "latitude": 39.81840626739857,
          "gpsAddress": "116.35110040323318:39.81840626739857",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-64127668",
          "telephones": [
            "010-64127668"
          ],
          "logoUrl": "https://pic.maizuo.comusr/1416/4ce35bb5ea8277ebdc3501a5d287ba86.png",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3100,
          "Distance": 7.418409009637547,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4898,
          "name": "北京耀莱成龙国际影城马连道店",
          "address": "北京市西城区马连道路25号楼新年华生活购物广场5层",
          "longitude": 116.3322901553459,
          "latitude": 39.88296268326584,
          "gpsAddress": "116.3322901553459:39.88296268326584",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110102,
          "districtName": "西城区",
          "district": {
            "districtId": 110102,
            "name": "西城区"
          },
          "phone": "010-63252722",
          "telephones": [
            "010-63252722"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4898/6bd1e28fc42771ea4c23b8cc94568ef3.jpg",
          "businessTime": "周一至周五8:30-1.00；周六日7:30-1:00",
          "notice": "4DX观影须知：孕妇、老弱残者、心血管疾病患者、易晕眩者、4岁及1米以下儿童谢绝观看4DX电影，1.3m以下儿童在成人陪同下需购票观影。",
          "isVisited": 0,
          "lowPrice": 6100,
          "Distance": 7.425838632138313,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 258,
          "name": "金逸影城新都店",
          "address": "北京市海淀区西三旗新都环岛东南侧新都购物中心一层",
          "longitude": 116.3681056912491,
          "latitude": 40.067225546220506,
          "gpsAddress": "116.3681056912491:40.067225546220506",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110108,
          "districtName": "海淀区",
          "district": {
            "districtId": 110108,
            "name": "海淀区"
          },
          "phone": "010-82936951",
          "telephones": [
            "010-82936951"
          ],
          "logoUrl": "https://pic.maizuo.comusr/258/e17742beed83cd647c22fde4bdb3a2a8.jpg",
          "businessTime": "9:30-21:30",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 2500,
          "Distance": 7.448686328057003,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 1759,
          "name": "保利国际影城北京北苑华贸店",
          "address": "北京朝阳区清河营南街7号院华贸天地B1层步行街西侧（地铁13号线北苑站西北200米）",
          "longitude": 116.436858,
          "latitude": 40.053976,
          "gpsAddress": "116.436858:40.053976",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-84870622",
          "telephones": [
            "010-84870622"
          ],
          "logoUrl": "https://pic.maizuo.comusr/1759/6f7ceb05dc004a2dc145a114c36bf25c.tmp",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3680,
          "Distance": 7.6651713013181855,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4885,
          "name": "北京劲松电影院",
          "address": "北京市劲松中街404号",
          "longitude": 116.46264407637376,
          "latitude": 39.88918722828639,
          "gpsAddress": "116.46264407637376:39.88918722828639",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-67709306",
          "telephones": [
            "010-67709306"
          ],
          "logoUrl": "",
          "businessTime": "09:00-21:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3630,
          "Distance": 7.727386600856766,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 952,
          "name": "北京百丽宫影城国贸店",
          "address": "北京市朝阳区建国门外大街1号国贸商城三期地下一层3B120",
          "longitude": 116.4649844317189,
          "latitude": 39.917964508166236,
          "gpsAddress": "116.4649844317189:39.917964508166236",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-85351808",
          "telephones": [
            "010-85351808"
          ],
          "logoUrl": "https://pic.maizuo.comusr/952/3534a192f4c226d6311eec04b0f9bddc.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4800,
          "Distance": 7.741774227379256,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 847,
          "name": "橙天嘉禾影城（凤凰汇店）",
          "address": "北京朝阳区曙光西里甲5号院24号楼1311",
          "longitude": 116.4640714838291,
          "latitude": 39.96848480438384,
          "gpsAddress": "116.4640714838291:39.96848480438384",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-56383227 ",
          "telephones": [
            "010-56383227 "
          ],
          "logoUrl": "https://pic.maizuo.comusr/847/4c416622d62f37631504e23aba6cd832.jpg",
          "businessTime": "10：00-24：00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 5300,
          "Distance": 7.852420524671367,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4927,
          "name": "北京美嘉欢乐影城三里屯店",
          "address": "北京市朝阳区三里屯北路19号Village地下一层（三里屯酒吧街南口西侧）",
          "longitude": 116.46620136619327,
          "latitude": 39.943418785049566,
          "gpsAddress": "116.46620136619327:39.943418785049566",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-64176118",
          "telephones": [
            "010-64176118"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4927/63bace14abcc0b4f6d04413781c6dd1c.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 6400,
          "Distance": 7.882447542828633,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4825,
          "name": "CGV星聚汇影城北京清河店",
          "address": "北京海淀区海淀区清河中街68号五彩城购物中心东区7层",
          "longitude": 116.3407217406931,
          "latitude": 40.03591619539625,
          "gpsAddress": "116.3407217406931:40.03591619539625",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110108,
          "districtName": "海淀区",
          "district": {
            "districtId": 110108,
            "name": "海淀区"
          },
          "phone": "010-82816767",
          "telephones": [
            "010-82816767"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4825/54e243434d4fb1509ac927ab5c374e86.jpg",
          "businessTime": "10:00-24:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3000,
          "Distance": 8.050524690462847,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 134,
          "name": "北京UME国际影城双井店",
          "address": "北京朝阳区东三环中路双井桥北富力广场5-6层",
          "longitude": 116.46735101758493,
          "latitude": 39.90109264496714,
          "gpsAddress": "116.46735101758493:39.90109264496714",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-59037171",
          "telephones": [
            "010-59037171"
          ],
          "logoUrl": "https://pic.maizuo.comusr/134/026AEC4183D7F89F83FEDFFA20AF26B8.jpg",
          "businessTime": "9:00-23:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 5960,
          "Distance": 8.10965040271662,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4888,
          "name": "北京朝阳剧场",
          "address": "北京市东三环北路36号",
          "longitude": 116.46926099476026,
          "latitude": 39.92823792531356,
          "gpsAddress": "116.46926099476026:39.92823792531356",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-65011555/010-65060838",
          "telephones": [
            "010-65011555/010-65060838"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4888/621949c395631019136293a0a3de1c87.tmp",
          "businessTime": "9:00-21:00",
          "notice": "不支持退票",
          "isVisited": 0,
          "lowPrice": 4300,
          "Distance": 8.195348516691954,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 5148,
          "name": "明星时代影城(北京梦秀店)",
          "address": "北京市朝阳区望京西路41号梦秀商场6层",
          "longitude": 116.463554,
          "latitude": 40.000072,
          "gpsAddress": "116.463554:40.000072",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-64725856",
          "telephones": [
            "010-64725856"
          ],
          "logoUrl": "https://pic.maizuo.comusr/5148/c67b06e7eaa12f2d4ca8a79e99441902.jpg",
          "businessTime": "10:00-23:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3600,
          "Distance": 8.319050651258184,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4860,
          "name": "北京海淀剧院",
          "address": "北京市海淀区中关村大街28号",
          "longitude": 116.32459743885691,
          "latitude": 39.98249054295966,
          "gpsAddress": "116.32459743885691:39.98249054295966",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110108,
          "districtName": "海淀区",
          "district": {
            "districtId": 110108,
            "name": "海淀区"
          },
          "phone": "010-82533588-99",
          "telephones": [
            "010-82533588-99"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4860/79c0dc468f63012fb43f29f6e0ec9bbe.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3520,
          "Distance": 8.323872483693645,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 1997,
          "name": "大地影院（西三旗物美店）",
          "address": "北京海淀区悦秀路99号二层大地影院",
          "longitude": 116.34446282381995,
          "latitude": 40.05300997552968,
          "gpsAddress": "116.34446282381995:40.05300997552968",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110108,
          "districtName": "海淀区",
          "district": {
            "districtId": 110108,
            "name": "海淀区"
          },
          "phone": "010-60603728",
          "telephones": [
            "010-60603728"
          ],
          "logoUrl": "https://pic.maizuo.comusr/1997/8b065cb4dcb38ad1ef206c4dc1d9c111.tmp",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3900,
          "Distance": 8.334480732956063,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 1910,
          "name": "保利国际影城北京龙旗广场店",
          "address": "北京市昌平区文华路与黄平路龙旗广场",
          "longitude": 116.35508735257811,
          "latitude": 40.07233776088411,
          "gpsAddress": "116.35508735257811:40.07233776088411",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110114,
          "districtName": "昌平区",
          "district": {
            "districtId": 110114,
            "name": "昌平区"
          },
          "phone": "010-82694321-9",
          "telephones": [
            "010-82694321-9"
          ],
          "logoUrl": "https://pic.maizuo.comusr/1910/6f7ceb05dc004a2dc145a114c36bf25c.tmp",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 2500,
          "Distance": 8.36320120297742,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 897,
          "name": "北京完美世界影城比如店",
          "address": "朝阳区京顺路111号比如世界购物中心1层",
          "longitude": 116.4683474180566,
          "latitude": 39.97403987329511,
          "gpsAddress": "116.4683474180566:39.97403987329511",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-64304175",
          "telephones": [
            "010-64304175"
          ],
          "logoUrl": "https://pic.maizuo.comusr/897/dab9381a3293fdd056e413e61a0a9707.jpg",
          "businessTime": "",
          "notice": "影片《寂静之地》即将上映，小学生以及学龄前儿童应在家长陪同下观看。",
          "isVisited": 0,
          "lowPrice": 4190,
          "Distance": 8.382430685974644,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4823,
          "name": "北京嘉美国际影城旧宫店",
          "address": "北京市大兴区旧宫镇小红门路39号永辉超市东侧",
          "longitude": 116.34659944347544,
          "latitude": 39.800802656288795,
          "gpsAddress": "116.34659944347544:39.800802656288795",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110115,
          "districtName": "大兴区",
          "district": {
            "districtId": 110115,
            "name": "大兴区"
          },
          "phone": "010-58310538",
          "telephones": [
            "010-58310538"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4823/a78e743975983b0962e633a23ce9a3b6.tmp",
          "businessTime": "10:00-22:30",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 2150,
          "Distance": 8.402999206161471,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 1424,
          "name": "北京耀莱成龙国际影城（西红门店）",
          "address": "北京市大兴区欣旺北大街8号鸿坤广场6楼、7楼",
          "longitude": 116.34667427232442,
          "latitude": 39.79731003565297,
          "gpsAddress": "116.34667427232442:39.79731003565297",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110115,
          "districtName": "大兴区",
          "district": {
            "districtId": 110115,
            "name": "大兴区"
          },
          "phone": "010-80255335",
          "telephones": [
            "010-80255335"
          ],
          "logoUrl": "https://pic.maizuo.comusr/1424/efe07501971f2fda932391a6c00a3411.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4100,
          "Distance": 8.529694702140993,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 162,
          "name": "北京金逸电影城中关村店",
          "address": "北京市海淀区中关村大街19号新中关购物中心B1层",
          "longitude": 116.32171508369589,
          "latitude": 39.98423020415006,
          "gpsAddress": "116.32171508369589:39.98423020415006",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110108,
          "districtName": "海淀区",
          "district": {
            "districtId": 110108,
            "name": "海淀区"
          },
          "phone": "010-82486800",
          "telephones": [
            "010-82486800"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4/e2d4c899d9026847626cfcc0dafd9d7e.jpg",
          "businessTime": "10:00-23:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4000,
          "Distance": 8.655527379408674,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9315,
          "name": "北京耀莱成龙影城（花乡店）",
          "address": "北京市丰台区南四环西路76号花乡奥莱村13号楼3层",
          "longitude": 116.3304540188835,
          "latitude": 39.83342022240887,
          "gpsAddress": "116.3304540188835:39.83342022240887",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110106,
          "districtName": "丰台区",
          "district": {
            "districtId": 110106,
            "name": "丰台区"
          },
          "phone": "010-83711556 ",
          "telephones": [
            "010-83711556 "
          ],
          "logoUrl": "",
          "businessTime": "9:30-22:30",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 2690,
          "Distance": 8.686213850982877,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9447,
          "name": "星典影城（亮马桥四季店）",
          "address": "朝阳区亮马桥路48号四季商业中心三层",
          "longitude": 116.47381236742322,
          "latitude": 39.956152173157996,
          "gpsAddress": "116.47381236742322:39.956152173157996",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-50953535",
          "telephones": [
            "010-50953535"
          ],
          "logoUrl": "",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3630,
          "Distance": 8.79763748201306,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9354,
          "name": "星典影城（六里桥店）",
          "address": "丰台区西三环南路10号月恒正大新生活广场三层",
          "longitude": 116.31907940502451,
          "latitude": 39.88526971309556,
          "gpsAddress": "116.31907940502451:39.88526971309556",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110106,
          "districtName": "丰台区",
          "district": {
            "districtId": 110106,
            "name": "丰台区"
          },
          "phone": "010-56638890",
          "telephones": [
            "010-56638890"
          ],
          "logoUrl": "",
          "businessTime": "9：00 - 22:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3100,
          "Distance": 8.805095919446751,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4901,
          "name": "北京美嘉欢乐影城中关村店",
          "address": "北京市海淀区中关村大街5号 中关村广场购物中心3层（爱奇艺创新大厦南侧）",
          "longitude": 116.31970705108432,
          "latitude": 39.98965072567315,
          "gpsAddress": "116.31970705108432:39.98965072567315",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110108,
          "districtName": "海淀区",
          "district": {
            "districtId": 110108,
            "name": "海淀区"
          },
          "phone": "010-59863777",
          "telephones": [
            "010-59863777"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4901/0823e9aa7b0da6ca83fa286188157ce9.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4040,
          "Distance": 8.952937419991128,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4926,
          "name": "北京CBD万达广场店",
          "address": "北京市朝阳区建国路93号万达广场三层",
          "longitude": 116.47784789802844,
          "latitude": 39.91709500020848,
          "gpsAddress": "116.47784789802844:39.91709500020848",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-59603399",
          "telephones": [
            "010-59603399"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4926/efa28b68ee4ca8973b963e07b383dbd6.jpg",
          "businessTime": "8:30—24:00（随排映时间调整）",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 6440,
          "Distance": 9.173055253149672,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 8653,
          "name": "北京居然耀莱成龙影城丽泽桥店",
          "address": "北京市丰台区西三环南路甲27号5-101",
          "longitude": 116.316344,
          "latitude": 39.878156,
          "gpsAddress": "116.316344:39.878156",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110106,
          "districtName": "丰台区",
          "district": {
            "districtId": 110106,
            "name": "丰台区"
          },
          "phone": "010-83733877",
          "telephones": [
            "010-83733877"
          ],
          "logoUrl": "https://pic.maizuo.comusr/8653/66b372bc8dc80b571e3b016bc9ed8a4a.jpg",
          "businessTime": "9：00-1:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3000,
          "Distance": 9.191848490581222,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 8122,
          "name": "中影星美国际影城(温都水城店)",
          "address": "北京市昌平区北七家镇温都水城广场4-5层",
          "longitude": 116.37913094870544,
          "latitude": 40.11205635837425,
          "gpsAddress": "116.37913094870544:40.11205635837425",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110114,
          "districtName": "昌平区",
          "district": {
            "districtId": 110114,
            "name": "昌平区"
          },
          "phone": "010-80456231",
          "telephones": [
            "010-80456231"
          ],
          "logoUrl": "https://pic.maizuo.comusr/8122/66b372bc8dc80b571e3b016bc9ed8a4a.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3900,
          "Distance": 9.193540022410017,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 2206,
          "name": "北京沃美影城回龙观店",
          "address": "北京市育知东路30号华联商厦4层",
          "longitude": 116.34370231837521,
          "latitude": 40.077884544637016,
          "gpsAddress": "116.34370231837521:40.077884544637016",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110114,
          "districtName": "昌平区",
          "district": {
            "districtId": 110114,
            "name": "昌平区"
          },
          "phone": "暂无",
          "telephones": [
            "暂无"
          ],
          "logoUrl": "https://pic.maizuo.comusr/2206/8e665ef687f749fd22bf2d4cd5a79513.tmp",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4100,
          "Distance": 9.32252074443263,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 1806,
          "name": "北京金逸影城荟聚IMAX店",
          "address": "北京市大兴区欣宁大街15号荟聚购物中心3层",
          "longitude": 116.33501022712503,
          "latitude": 39.793890620248185,
          "gpsAddress": "116.33501022712503:39.793890620248185",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110115,
          "districtName": "大兴区",
          "district": {
            "districtId": 110115,
            "name": "大兴区"
          },
          "phone": "010-60200580",
          "telephones": [
            "010-60200580"
          ],
          "logoUrl": "https://pic.maizuo.comusr/1806/26172d97474bd7fafa1a9bc43b23d5c0.png",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 5000,
          "Distance": 9.530298753464614,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 637,
          "name": "北京莱纳恒泰影城",
          "address": "北京市丰台区丰台北路18号恒泰广场E座6层",
          "longitude": 116.31355725156301,
          "latitude": 39.87263500612975,
          "gpsAddress": "116.31355725156301:39.87263500612975",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110106,
          "districtName": "丰台区",
          "district": {
            "districtId": 110106,
            "name": "丰台区"
          },
          "phone": " 010-63836886",
          "telephones": [
            " 010-63836886"
          ],
          "logoUrl": "https://pic.maizuo.comusr/637/1b6de44953e80e8074627d70348adb05.jpg",
          "businessTime": "10:00-次日01:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 5340,
          "Distance": 9.56738226253768,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9444,
          "name": "比高电影城（来广营）",
          "address": "朝阳区香宾路66号百安居2层",
          "longitude": 116.4725208556254,
          "latitude": 40.02212744362945,
          "gpsAddress": "116.4725208556254:40.02212744362945",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-84903279",
          "telephones": [
            "010-84903279"
          ],
          "logoUrl": "",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3970,
          "Distance": 9.699758677697785,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 15,
          "name": "北京传奇时代影城蓝色港湾店",
          "address": "朝阳区朝阳公园路6号，蓝色港湾国际商区SA-42",
          "longitude": 116.48239486090966,
          "latitude": 39.954944396689925,
          "gpsAddress": "116.48239486090966:39.954944396689925",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-59056868",
          "telephones": [
            "010-59056868"
          ],
          "logoUrl": "https://pic.maizuo.comusr/15/FD3A80A710DF255BC20AA21E08355DB3.jpg",
          "businessTime": "10:00-24:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4550,
          "Distance": 9.735857584683382,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 5146,
          "name": "北京卢米埃影城(万科店)",
          "address": "北京市大兴区旧宫镇住总万科广场5层L5001-L6001",
          "longitude": 116.46601030200114,
          "latitude": 39.81136496174883,
          "gpsAddress": "116.46601030200114:39.81136496174883",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110115,
          "districtName": "大兴区",
          "district": {
            "districtId": 110115,
            "name": "大兴区"
          },
          "phone": "010-50927566",
          "telephones": [
            "010-50927566"
          ],
          "logoUrl": "https://pic.maizuo.comusr/5146/4931d2acca6c82bbb0d63ebc9bb5e288.jpg",
          "businessTime": "9:00~1:30",
          "notice": "除放映事故及系统故障，影票一经售出概不退换",
          "isVisited": 0,
          "lowPrice": 4900,
          "Distance": 9.79302847870834,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 350,
          "name": "奥兰环球影城（北京望京店）",
          "address": "北京市朝阳区来广营西路5号院诚盈中心地下一层商业街 北京奥兰环球影城（望京店）",
          "longitude": 116.472623334318,
          "latitude": 40.02650754098494,
          "gpsAddress": "116.472623334318:40.02650754098494",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-52622339",
          "telephones": [
            "010-52622339"
          ],
          "logoUrl": "https://pic.maizuo.comusr/350/727c4067ed6d76e31c18820607ef56f3.png",
          "businessTime": "09：30-23：00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 1120,
          "Distance": 9.813773483913543,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4870,
          "name": "北京新影联华谊兄弟影院",
          "address": "北京市朝阳区广顺北大街16号望京华彩商业中心B1",
          "longitude": 116.47595651487887,
          "latitude": 40.01673559707628,
          "gpsAddress": "116.47595651487887:40.01673559707628",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-57620488",
          "telephones": [
            "010-57620488"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4870/ce35fd5608944e4260c00cb1d2d6227b.jpg",
          "businessTime": "星期一至星期五09：30-22：30；星期六至星期日09：00-22：30",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3990,
          "Distance": 9.920233157700437,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 6902,
          "name": "北京寰映影城合生汇店",
          "address": "北京市朝阳区西大望路甲22号院朝阳合生汇",
          "longitude": 116.48416648780761,
          "latitude": 39.899531695440665,
          "gpsAddress": "116.48416648780761:39.899531695440665",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "4000806060",
          "telephones": [
            "4000806060"
          ],
          "logoUrl": "https://pic.maizuo.comusr/6902/f0d14e66743e88d366637d6d1ffcfbff.jpg",
          "businessTime": "8:00-24：00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 6440,
          "Distance": 9.96910567681826,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9459,
          "name": "耀莱私影（华贸店）",
          "address": "朝阳区建国路89号18号楼L02内",
          "longitude": 116.48509888625748,
          "latitude": 39.91729711654415,
          "gpsAddress": "116.48509888625748:39.91729711654415",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-65331215",
          "telephones": [
            "010-65331215"
          ],
          "logoUrl": "",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 44060,
          "Distance": 9.977798587244305,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9445,
          "name": "东融国际影城（西小口店）",
          "address": "海淀区文龙家园四里4号楼4F-08",
          "longitude": 116.3054340544974,
          "latitude": 39.96548984110075,
          "gpsAddress": "116.3054340544974:39.96548984110075",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110108,
          "districtName": "海淀区",
          "district": {
            "districtId": 110108,
            "name": "海淀区"
          },
          "phone": "010-62937490",
          "telephones": [
            "010-62937490"
          ],
          "logoUrl": "",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4200,
          "Distance": 10.194315185471385,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 1996,
          "name": "大地影院（十里河铭泽店）",
          "address": "北京市朝阳区周庄嘉园甲32号楼铭泽生活广场5层大地影院",
          "longitude": 116.48345746739571,
          "latitude": 39.86903021110803,
          "gpsAddress": "116.48345746739571:39.86903021110803",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-87156707",
          "telephones": [
            "010-87156707"
          ],
          "logoUrl": "https://pic.maizuo.comusr/1996/8b065cb4dcb38ad1ef206c4dc1d9c111.tmp",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 7100,
          "Distance": 10.231488749239345,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 836,
          "name": "北京博纳国际影城晶品店",
          "address": "海淀区复兴路51号凯德晶品购物中心四层 ",
          "longitude": 116.30380264186073,
          "latitude": 39.914458454220586,
          "gpsAddress": "116.30380264186073:39.914458454220586",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110108,
          "districtName": "海淀区",
          "district": {
            "districtId": 110108,
            "name": "海淀区"
          },
          "phone": "010-88178889",
          "telephones": [
            "010-88178889"
          ],
          "logoUrl": "https://pic.maizuo.comusr/836/5559efb89b4635016d7a651242cf1ee2.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4700,
          "Distance": 10.252592974699185,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9473,
          "name": "枫花园汽车电影院（朝阳公园店）",
          "address": "朝阳区亮马桥路21号（朝阳公园北门对面）",
          "longitude": 116.48693175109119,
          "latitude": 39.963634303548055,
          "gpsAddress": "116.48693175109119:39.963634303548055",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-64329884/64319595",
          "telephones": [
            "010-64329884/64319595"
          ],
          "logoUrl": "",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 13320,
          "Distance": 10.297958257132056,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 584,
          "name": "恒业影城北京IMAX店",
          "address": "北京市丰台区万丰路（地铁9号线、10号线六里桥站）银座和谐广场购物中心5F ",
          "longitude": 116.30456581886607,
          "latitude": 39.88780870389614,
          "gpsAddress": "116.30456581886607:39.88780870389614",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110106,
          "districtName": "丰台区",
          "district": {
            "districtId": 110106,
            "name": "丰台区"
          },
          "phone": "010-63268070",
          "telephones": [
            "010-63268070"
          ],
          "logoUrl": "https://pic.maizuo.comusr/584/068d826aea5bf9ff1962d6c7efcb8316.jpg",
          "businessTime": "10:00至24:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3940,
          "Distance": 10.350845461686268,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 1995,
          "name": "大地影院（望京新天地店）",
          "address": "北京市朝阳区望京合生麒麟社影院",
          "longitude": 116.48469510332056,
          "latitude": 40.00378940021695,
          "gpsAddress": "116.48469510332056:40.00378940021695",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-57389734",
          "telephones": [
            "010-57389734"
          ],
          "logoUrl": "https://pic.maizuo.comusr/1995/8b065cb4dcb38ad1ef206c4dc1d9c111.tmp",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 1990,
          "Distance": 10.566456353007826,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4880,
          "name": "北京海淀工人文化宫",
          "address": "北京市海淀区万柳华府北街2号（万柳中路北口）",
          "longitude": 116.3016781771771,
          "latitude": 39.977874489711915,
          "gpsAddress": "116.3016781771771:39.977874489711915",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110108,
          "districtName": "海淀区",
          "district": {
            "districtId": 110108,
            "name": "海淀区"
          },
          "phone": "010-82567511/010-82568336",
          "telephones": [
            "010-82567511/010-82568336"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4880/7cf7d55a1a9f22578b220beacbd870e3.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3740,
          "Distance": 10.724595075948988,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9461,
          "name": "京南电影院",
          "address": "大兴区丽园路9号3层303",
          "longitude": 116.33780165849726,
          "latitude": 39.75648014733077,
          "gpsAddress": "116.33780165849726:39.75648014733077",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110115,
          "districtName": "大兴区",
          "district": {
            "districtId": 110115,
            "name": "大兴区"
          },
          "phone": "010-69268343/69269936",
          "telephones": [
            "010-69268343/69269936"
          ],
          "logoUrl": "",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 2860,
          "Distance": 10.725758683664024,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9465,
          "name": "莱纳龙域影城",
          "address": "昌平区龙域中街1号院1号楼昌发展万科广场5层",
          "longitude": 116.32248241087268,
          "latitude": 40.07220116577702,
          "gpsAddress": "116.32248241087268:40.07220116577702",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110114,
          "districtName": "昌平区",
          "district": {
            "districtId": 110114,
            "name": "昌平区"
          },
          "phone": "010-62905670",
          "telephones": [
            "010-62905670"
          ],
          "logoUrl": "",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4290,
          "Distance": 10.758204675560156,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 8882,
          "name": "华联影院（回龙观店）",
          "address": "北京市昌平区回龙观西大街111号北京华联3层",
          "longitude": 116.32568132979374,
          "latitude": 40.08178815542265,
          "gpsAddress": "116.32568132979374:40.08178815542265",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110114,
          "districtName": "昌平区",
          "district": {
            "districtId": 110114,
            "name": "昌平区"
          },
          "phone": "010-50954999",
          "telephones": [
            "010-50954999"
          ],
          "logoUrl": "",
          "businessTime": "10:00—24:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3690,
          "Distance": 10.814685363189811,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9343,
          "name": "奥兰环球影城（方恒购物中心一店）",
          "address": "北京市朝阳区阜通东大街6号院4号楼4层4-010",
          "longitude": 116.48898868925133,
          "latitude": 39.99604732875522,
          "gpsAddress": "116.48898868925133:39.99604732875522",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "telephones": [
            ""
          ],
          "logoUrl": "",
          "businessTime": "9:00-3:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3940,
          "Distance": 10.894757074704373,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9344,
          "name": "奥兰环球影城（方恒购物中心二店）",
          "address": "北京市朝阳区阜通东大街6号院4号楼四层4-02至4-15",
          "longitude": 116.48898868925133,
          "latitude": 39.99604732875522,
          "gpsAddress": "116.48898868925133:39.99604732875522",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "13810327043",
          "telephones": [
            "13810327043"
          ],
          "logoUrl": "",
          "businessTime": "9:00-3:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3940,
          "Distance": 10.894757074704373,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4871,
          "name": "万达国际影城望京店",
          "address": "北京市朝阳区望京阜通西大街望京东园一区120楼新荟城五层",
          "longitude": 116.48839130890075,
          "latitude": 40.0018318120999,
          "gpsAddress": "116.48839130890075:40.0018318120999",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-64139608-600",
          "telephones": [
            "010-64139608-600"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4871/efa28b68ee4ca8973b963e07b383dbd6.jpg",
          "businessTime": "9:00-24:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4250,
          "Distance": 10.921449215132348,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 6901,
          "name": "北京万达影城西铁营店",
          "address": "北京市丰台区西铁营中路1号万达广场七层万达影城",
          "longitude": 116.30638814477953,
          "latitude": 39.83039235992806,
          "gpsAddress": "116.30638814477953:39.83039235992806",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110106,
          "districtName": "丰台区",
          "district": {
            "districtId": 110106,
            "name": "丰台区"
          },
          "phone": "4000806060",
          "telephones": [
            "4000806060"
          ],
          "logoUrl": "https://pic.maizuo.comusr/6901/f0d14e66743e88d366637d6d1ffcfbff.jpg",
          "businessTime": "8:00-24：00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4360,
          "Distance": 11.087889635669379,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4865,
          "name": "北京市大兴剧院",
          "address": "北京大兴区黄村镇黄村西大街15号",
          "longitude": 116.34411926867428,
          "latitude": 39.73762787780067,
          "gpsAddress": "116.34411926867428:39.73762787780067",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110115,
          "districtName": "大兴区",
          "district": {
            "districtId": 110115,
            "name": "大兴区"
          },
          "phone": "010-69252566",
          "telephones": [
            "010-69252566"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4865/51d64a33f38cd2a172084ef916f13cd6.jpg",
          "businessTime": "10:00-23:00",
          "notice": "1.3米（含）以下儿童观看动画片、儿童题材影片需持票入场",
          "isVisited": 0,
          "lowPrice": 4030,
          "Distance": 11.106668465504884,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 3035,
          "name": "北京最影城",
          "address": "北京市大兴区黄村镇百联清城购物中心三层北区",
          "longitude": 116.33802403941608,
          "latitude": 39.74439226100211,
          "gpsAddress": "116.33802403941608:39.74439226100211",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110115,
          "districtName": "大兴区",
          "district": {
            "districtId": 110115,
            "name": "大兴区"
          },
          "phone": "暂无",
          "telephones": [
            "暂无"
          ],
          "logoUrl": "https://pic.maizuo.comusr/3035/8e341ab60ea5c99dfb6c00a496c57483.png",
          "businessTime": "9:30~24:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3630,
          "Distance": 11.195262990609969,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 1014,
          "name": "北京耀莱成龙国际影城慈云寺店",
          "address": "北京市朝阳区慈云寺北里209号未来汇2层",
          "longitude": 116.4961616398841,
          "latitude": 39.917140465548464,
          "gpsAddress": "116.4961616398841:39.917140465548464",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-65980898",
          "telephones": [
            "010-65980898"
          ],
          "logoUrl": "https://pic.maizuo.comusr/1014/2e49b4c16ed820a93778589c38d105b8.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4200,
          "Distance": 11.207564019550734,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 620,
          "name": "北京世纪东都国际影城",
          "address": "北京市朝阳区东四环中路195号华腾新天地5层",
          "longitude": 116.49509214698799,
          "latitude": 39.89123845546917,
          "gpsAddress": "116.49509214698799:39.89123845546917",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-87952964/67",
          "telephones": [
            "010-87952964/67"
          ],
          "logoUrl": "https://pic.maizuo.comusr/620/AF8280E297790BECCCF21CB1472F6DFE.jpg",
          "businessTime": "10:00-24:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4200,
          "Distance": 11.23582234018003,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 1912,
          "name": "保利国际影城北京缤纷城店",
          "address": "北京市大兴区金星西路3号绿地缤纷城购物中心4层",
          "longitude": 116.32424942272608,
          "latitude": 39.76762017958578,
          "gpsAddress": "116.32424942272608:39.76762017958578",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110115,
          "districtName": "大兴区",
          "district": {
            "districtId": 110115,
            "name": "大兴区"
          },
          "phone": "010-80255600",
          "telephones": [
            "010-80255600"
          ],
          "logoUrl": "https://pic.maizuo.comusr/1912/6f7ceb05dc004a2dc145a114c36bf25c.tmp",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3500,
          "Distance": 11.29470291543086,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4818,
          "name": "北京魔影国际影城金源店",
          "address": "海淀区远大路1号院B座5层西侧001号居然之家楼上",
          "longitude": 116.29503796483041,
          "latitude": 39.96650610292939,
          "gpsAddress": "116.29503796483041:39.96650610292939",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110108,
          "districtName": "海淀区",
          "district": {
            "districtId": 110108,
            "name": "海淀区"
          },
          "phone": "010-88878912",
          "telephones": [
            "010-88878912"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4818/c67b06e7eaa12f2d4ca8a79e99441902.jpg",
          "businessTime": "10:00-24:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 2600,
          "Distance": 11.343914571418306,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 1483,
          "name": "北京万达电影城丰台店",
          "address": "北京市丰台区丰科路6号万达广场六层",
          "longitude": 116.30671313015371,
          "latitude": 39.81348351395823,
          "gpsAddress": "116.30671313015371:39.81348351395823",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110106,
          "districtName": "丰台区",
          "district": {
            "districtId": 110106,
            "name": "丰台区"
          },
          "phone": "暂无",
          "telephones": [
            "暂无"
          ],
          "logoUrl": "https://pic.maizuo.comusr/1483/142a8cbb77b1a308a0f000539c4960cd.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 5350,
          "Distance": 11.451856721684432,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4858,
          "name": "中影国际影城北京丰台千禧街店",
          "address": "北京市丰台区靛厂路千禧购物街4号楼F1-F3",
          "longitude": 116.29351713360204,
          "latitude": 39.89617830551897,
          "gpsAddress": "116.29351713360204:39.89617830551897",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110106,
          "districtName": "丰台区",
          "district": {
            "districtId": 110106,
            "name": "丰台区"
          },
          "phone": "010-88177970",
          "telephones": [
            "010-88177970"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4858/2dffcd54f18204485c3e66c775d0b7b8.jpg",
          "businessTime": "",
          "notice": "3D眼镜信息：免费3D眼镜请至自助机领取或选择租赁其他款式。",
          "isVisited": 0,
          "lowPrice": 3690,
          "Distance": 11.490840266701966,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 1758,
          "name": "CGV星聚汇星星影城北京颐堤港店",
          "address": "朝阳区酒仙桥路近将台路口颐堤港4层",
          "longitude": 116.49738364259814,
          "latitude": 39.97567931365734,
          "gpsAddress": "116.49738364259814:39.97567931365734",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-84260800",
          "telephones": [
            "010-84260800"
          ],
          "logoUrl": "https://pic.maizuo.comusr/1758/7a6c881e8de5feb90805ae20fa92ef32.tmp",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 6000,
          "Distance": 11.549831335492495,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9285,
          "name": "北京英嘉星美影城",
          "address": "北京市海淀区远大路1号E段5501号",
          "longitude": 116.29249602972884,
          "latitude": 39.96421779881764,
          "gpsAddress": "116.29249602972884:39.96421779881764",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110108,
          "districtName": "海淀区",
          "district": {
            "districtId": 110108,
            "name": "海淀区"
          },
          "telephones": [
            ""
          ],
          "logoUrl": "",
          "businessTime": "10:00-24:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 5100,
          "Distance": 11.606346570408304,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9382,
          "name": "北京苏宁影城（慈云寺店）",
          "address": "朝阳区慈云寺北里118号楼负一层",
          "longitude": 116.50098150977585,
          "latitude": 39.922045349504515,
          "gpsAddress": "116.50098150977585:39.922045349504515",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-57303316",
          "telephones": [
            "010-57303316"
          ],
          "logoUrl": "",
          "businessTime": "9:00-24:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4710,
          "Distance": 11.732609468358852,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9609,
          "name": "完美世界影城（北京西直门凯德mall店）",
          "address": "西城区西直门外大街1号西区商业凯德mall商城5层41号",
          "longitude": 116.50214724083614,
          "latitude": 39.91660911921225,
          "gpsAddress": "116.50214724083614:39.91660911921225",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110102,
          "districtName": "西城区",
          "district": {
            "districtId": 110102,
            "name": "西城区"
          },
          "phone": "010-58302550",
          "telephones": [
            "010-58302550"
          ],
          "logoUrl": "",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 5190,
          "Distance": 11.87430786234869,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 2511,
          "name": "中影国际影城北京丰台永旺店",
          "address": "北京丰台区丰葆路永旺梦乐城4层",
          "longitude": 116.299285,
          "latitude": 39.824942,
          "gpsAddress": "116.299285:39.824942",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110106,
          "districtName": "丰台区",
          "district": {
            "districtId": 110106,
            "name": "丰台区"
          },
          "phone": "010-88177970",
          "telephones": [
            "010-88177970"
          ],
          "logoUrl": "https://pic.maizuo.comusr/2511/2dffcd54f18204485c3e66c775d0b7b8.tmp",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3690,
          "Distance": 11.916210360565481,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4920,
          "name": "北京丰台青少年剧场",
          "address": "北京市丰台区西四环南路86号",
          "longitude": 116.2905583847438,
          "latitude": 39.85788052934521,
          "gpsAddress": "116.2905583847438:39.85788052934521",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110106,
          "districtName": "丰台区",
          "district": {
            "districtId": 110106,
            "name": "丰台区"
          },
          "phone": "010-63810206",
          "telephones": [
            "010-63810206"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4920/8e341ab60ea5c99dfb6c00a496c57483.tmp",
          "businessTime": "10:00-24:00，24：00后不售票",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4570,
          "Distance": 12.22841890409636,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 786,
          "name": "北京耀莱成龙国际影城（五棵松店）",
          "address": "北京市海淀区复兴路69号五棵松卓展时代百货五层东侧",
          "longitude": 116.28323818297356,
          "latitude": 39.91911221661019,
          "gpsAddress": "116.28323818297356:39.91911221661019",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110108,
          "districtName": "海淀区",
          "district": {
            "districtId": 110108,
            "name": "海淀区"
          },
          "phone": "010-68188877",
          "telephones": [
            "010-68188877"
          ],
          "logoUrl": "https://pic.maizuo.comusr/786/6bd1e28fc42771ea4c23b8cc94568ef3.jpg",
          "businessTime": "9:00-22:30",
          "notice": "春节期间耀莱影城营业时间调整：2月15日除夕早9:30-晚16:30；2月16日-2月21日春节期间营业时间早8:00-晚23:30；早场暂停（详情咨询现场工作人员或关注影城微信公众号，了解早场信息）给您带来的不变尽情谅解祝您春节快乐！",
          "isVisited": 0,
          "lowPrice": 4500,
          "Distance": 12.52459368049915,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 2065,
          "name": "北京万画四季青影城",
          "address": "北京市海淀区西四环北路117号金四季购物中心",
          "longitude": 116.27778295327255,
          "latitude": 39.950124266516376,
          "gpsAddress": "116.27778295327255:39.950124266516376",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110108,
          "districtName": "海淀区",
          "district": {
            "districtId": 110108,
            "name": "海淀区"
          },
          "phone": "010-88493114",
          "telephones": [
            "010-88493114"
          ],
          "logoUrl": "https://pic.maizuo.comusr/2065/6acc150478c5674a591c8a7f42ca4104.tmp",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3850,
          "Distance": 13.157988881417129,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 1994,
          "name": "大地影院（垡头永辉店）",
          "address": "北京市朝阳区垡头翠城永辉超市地下一层",
          "longitude": 116.51104208233484,
          "latitude": 39.86312688888419,
          "gpsAddress": "116.51104208233484:39.86312688888419",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-56350596",
          "telephones": [
            "010-56350596"
          ],
          "logoUrl": "https://pic.maizuo.comusr/1994/8b065cb4dcb38ad1ef206c4dc1d9c111.tmp",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4000,
          "Distance": 13.266898919305888,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 1592,
          "name": "唐阁影城-北京亦庄店",
          "address": "北京市大兴区亦庄荣华中路8号华联力宝购物中心4层F4-01号商铺",
          "longitude": 116.507116,
          "latitude": 39.811305,
          "gpsAddress": "116.507116:39.811305",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110115,
          "districtName": "大兴区",
          "district": {
            "districtId": 110115,
            "name": "大兴区"
          },
          "phone": "010-52595199",
          "telephones": [
            "010-52595199"
          ],
          "logoUrl": "https://pic.maizuo.comusr/1592/a50a1068a202ccacee179474703cedb1.png",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4800,
          "Distance": 13.733625336684245,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4839,
          "name": "北京大料国际影城",
          "address": "北京经济开发区文化园东路6号1幢3层03F01号",
          "longitude": 116.509915,
          "latitude": 39.816853,
          "gpsAddress": "116.509915:39.816853",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110115,
          "districtName": "大兴区",
          "district": {
            "districtId": 110115,
            "name": "大兴区"
          },
          "phone": "010-67859009",
          "telephones": [
            "010-67859009"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4839/723b1390273de04ac68144e517a7b33c.jpg",
          "businessTime": "10:30-00:30",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 5230,
          "Distance": 13.902633849317308,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 7456,
          "name": "华联影院（肖家河店）",
          "address": "北京市海淀区龙背村路99号院1号楼1层F1-33、2层F2-33",
          "longitude": 116.277315,
          "latitude": 40.021824,
          "gpsAddress": "116.277315:40.021824",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110108,
          "districtName": "海淀区",
          "district": {
            "districtId": 110108,
            "name": "海淀区"
          },
          "phone": "010-59012456",
          "telephones": [
            "010-59012456"
          ],
          "logoUrl": "https://pic.maizuo.comusr/7456/4c825a0a7d23df9fed5b85caad9a4bc7.jpg",
          "businessTime": "9:30-01:30",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 5590,
          "Distance": 13.931404038773124,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9478,
          "name": "大地院线影城（珠江摩尔店）",
          "address": "昌平区回龙观镇北清路1号院7号楼内7-101-26",
          "longitude": 116.2964350993901,
          "latitude": 40.10226582345031,
          "gpsAddress": "116.2964350993901:40.10226582345031",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110114,
          "districtName": "昌平区",
          "district": {
            "districtId": 110114,
            "name": "昌平区"
          },
          "phone": "010-69739899",
          "telephones": [
            "010-69739899"
          ],
          "logoUrl": "",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3540,
          "Distance": 13.94303665138081,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4946,
          "name": "中影国际影城北京昌平永旺店",
          "address": "北京市昌平区北清路1号永旺国际商城3楼",
          "longitude": 116.29549742474283,
          "latitude": 40.102765099978285,
          "gpsAddress": "116.29549742474283:40.102765099978285",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110114,
          "districtName": "昌平区",
          "district": {
            "districtId": 110114,
            "name": "昌平区"
          },
          "phone": "010-80700847",
          "telephones": [
            "010-80700847"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4946/93e6fb999d53e4486ececae82482d5c8.jpg",
          "businessTime": "10：00-22：00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4090,
          "Distance": 14.040754975761223,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 3134,
          "name": "SFC上影影城（北京大兴龙湖IMAX店）",
          "address": "北京市大兴区永兴路7号院1号楼3F-Z2",
          "longitude": 116.32666601456495,
          "latitude": 39.69181344594236,
          "gpsAddress": "116.32666601456495:39.69181344594236",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110115,
          "districtName": "大兴区",
          "district": {
            "districtId": 110115,
            "name": "大兴区"
          },
          "phone": "总机：010-60279357",
          "telephones": [
            "总机：010-60279357"
          ],
          "logoUrl": "https://pic.maizuo.comusr/3134/50c9ac9aa30931a36fa313bf87b36407.jpg",
          "businessTime": "早10：00至晚22：30",
          "notice": "初一11点前与20点后的观影客户，初二至初七看早场10点前的观影客户，烦请从商场8号门4号电梯到三层",
          "isVisited": 0,
          "lowPrice": 4300,
          "Distance": 14.055479737466728,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9099,
          "name": "北京魔影国际影城达美店",
          "address": "北京市朝阳区青年路7号院100幢-1层",
          "longitude": 116.52249932233464,
          "latitude": 39.94369104413681,
          "gpsAddress": "116.52249932233464:39.94369104413681",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-85816080",
          "telephones": [
            "010-85816080"
          ],
          "logoUrl": "",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3950,
          "Distance": 14.137706190888284,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 163,
          "name": "金逸影城大悦城店",
          "address": "北京市朝阳区朝北大悦城8层（朝阳北路与青年路交汇路口）",
          "longitude": 116.52502456691984,
          "latitude": 39.93031463661267,
          "gpsAddress": "116.52502456691984:39.93031463661267",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-85527199",
          "telephones": [
            "010-85527199"
          ],
          "logoUrl": "https://pic.maizuo.comusr/163/e17742beed83cd647c22fde4bdb3a2a8.jpg",
          "businessTime": "10:00-23:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 6000,
          "Distance": 14.402472529291144,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 8802,
          "name": "CGV影城（天宫院凯德店）",
          "address": "大兴区华佗路与新源大街交叉口凯德MALL6F",
          "longitude": 116.32558897590256,
          "latitude": 39.67829408363588,
          "gpsAddress": "116.32558897590256:39.67829408363588",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110115,
          "districtName": "大兴区",
          "district": {
            "districtId": 110115,
            "name": "大兴区"
          },
          "phone": "010-89205278",
          "telephones": [
            "010-89205278"
          ],
          "logoUrl": "https://pic.maizuo.comusr/8802/4c825a0a7d23df9fed5b85caad9a4bc7.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 5000,
          "Distance": 14.682875125725282,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4843,
          "name": "北京密云大剧院",
          "address": "北京市密云鼓楼西大街1号",
          "longitude": 116.50144602355505,
          "latitude": 40.10980497771805,
          "gpsAddress": "116.50144602355505:40.10980497771805",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110118,
          "districtName": "密云区",
          "district": {
            "districtId": 110118,
            "name": "密云区"
          },
          "phone": "010-69041575",
          "telephones": [
            "010-69041575"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4843/e170fd4ec11aa07f2277c2d9cdec293f.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3730,
          "Distance": 14.771676822711783,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4819,
          "name": "北京嘉华国际影城(活力东方店)",
          "address": "北京市朝阳区姚家园路甲1号活力东方购物中心四层",
          "longitude": 116.52846482190431,
          "latitude": 39.94694201787042,
          "gpsAddress": "116.52846482190431:39.94694201787042",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-51193399",
          "telephones": [
            "010-51193399"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4819/f3cee67119e11df361b358ae4ba3723e.jpg",
          "businessTime": "9:00-24:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4000,
          "Distance": 14.809335476271832,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 722,
          "name": "北京万画田村影城",
          "address": "北京市海淀区田村路43号京粮广场北侧二楼万画影城",
          "longitude": 116.26054,
          "latitude": 39.936703,
          "gpsAddress": "116.26054:39.936703",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110108,
          "districtName": "海淀区",
          "district": {
            "districtId": 110108,
            "name": "海淀区"
          },
          "phone": "010-88179880",
          "telephones": [
            "010-88179880"
          ],
          "logoUrl": "https://pic.maizuo.comusr/722/07cd2d4dee0b8d0a9ad7cd301a574f32.png",
          "businessTime": "早9：30-晚23:30",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4370,
          "Distance": 15.043479983538775,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4850,
          "name": "中国电影博物馆",
          "address": "北京市朝阳区南影路5号",
          "longitude": 116.52802340086484,
          "latitude": 40.002467533328776,
          "gpsAddress": "116.52802340086484:40.002467533328776",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-84355959/010-51654567",
          "telephones": [
            "010-84355959/010-51654567"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4850/3aaa276eed275c6f367bbb133e99c1f4.jpg",
          "businessTime": "周一闭馆（节假日除外），周二至周日9：00—16：30",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 1230,
          "Distance": 15.168555987506595,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9474,
          "name": "乐开花影院",
          "address": "朝阳区东坝李家坟7号创意总社1949传媒产业基地6号楼",
          "longitude": 116.5314409502792,
          "latitude": 39.95977025051714,
          "gpsAddress": "116.5314409502792:39.95977025051714",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "telephones": [
            ""
          ],
          "logoUrl": "",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 9480,
          "Distance": 15.188766831140393,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9314,
          "name": "北京耀莱成龙影城（玉泉山）",
          "address": "北京市海淀区北坞嘉园南里35号楼玉泉商业生活中心",
          "longitude": 116.2580789812334,
          "latitude": 39.982118068002315,
          "gpsAddress": "116.2580789812334:39.982118068002315",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110108,
          "districtName": "海淀区",
          "district": {
            "districtId": 110108,
            "name": "海淀区"
          },
          "phone": "17600857412",
          "telephones": [
            "17600857412"
          ],
          "logoUrl": "",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4100,
          "Distance": 15.528554767251311,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 3244,
          "name": "CGV星聚汇影城北京亦庄店",
          "address": "北京市经济技术开发区荣华南路2 号院9 号楼三层F3-316",
          "longitude": 116.52346850414935,
          "latitude": 39.78992438329218,
          "gpsAddress": "116.52346850414935:39.78992438329218",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110115,
          "districtName": "大兴区",
          "district": {
            "districtId": 110115,
            "name": "大兴区"
          },
          "phone": "暂无",
          "telephones": [
            "暂无"
          ],
          "logoUrl": "https://pic.maizuo.comusr/3244/7a6c881e8de5feb90805ae20fa92ef32.png",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 6100,
          "Distance": 15.83454661493923,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 3371,
          "name": "北京东融国际影城西直河店",
          "address": "北京朝阳区十八里店乡西直河商业中心华联商场场一层南侧",
          "longitude": 116.53416343131373,
          "latitude": 39.85060757809864,
          "gpsAddress": "116.53416343131373:39.85060757809864",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-87300397",
          "telephones": [
            "010-87300397"
          ],
          "logoUrl": "https://pic.maizuo.comusr/3371/4ca6cc9edd2cbf93081052acc34c91db.jpg",
          "businessTime": "9:00-24:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3630,
          "Distance": 15.914684559224224,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 5144,
          "name": "北京中传国际影城(亦庄店)",
          "address": "经济技术开发区科创五街38号C座3层F3-C3006",
          "longitude": 116.539294,
          "latitude": 39.809862,
          "gpsAddress": "116.539294:39.809862",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110115,
          "districtName": "大兴区",
          "district": {
            "districtId": 110115,
            "name": "大兴区"
          },
          "phone": "010-87227162",
          "telephones": [
            "010-87227162"
          ],
          "logoUrl": "https://pic.maizuo.comusr/5144/0f524cee6e8730e80fd962aaba116d5f.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4600,
          "Distance": 17.065431488761657,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 1757,
          "name": "北京中间影院",
          "address": "北京市海淀区杏石口路中间艺术园区中间影院",
          "longitude": 116.23740528659961,
          "latitude": 39.95966373832307,
          "gpsAddress": "116.23740528659961:39.95966373832307",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110108,
          "districtName": "海淀区",
          "district": {
            "districtId": 110108,
            "name": "海淀区"
          },
          "phone": "010-62858257",
          "telephones": [
            "010-62858257"
          ],
          "logoUrl": "https://pic.maizuo.comusr/1757/d1f2e55529cb5ee52127ca721c4d7e27.tmp",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4170,
          "Distance": 17.675953352091646,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 2546,
          "name": "保利国际影城北京东坝店",
          "address": "北京市朝阳区东坝中路",
          "longitude": 116.554236,
          "latitude": 39.958837,
          "gpsAddress": "116.554236:39.958837",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "暂无",
          "telephones": [
            "暂无"
          ],
          "logoUrl": "https://pic.maizuo.comusr/2546/6f7ceb05dc004a2dc145a114c36bf25c.tmp",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4000,
          "Distance": 17.712230393863006,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4872,
          "name": "北京石景山万达广场店",
          "address": "石景山区石景山路乙18号万达广场娱乐楼4楼",
          "longitude": 116.23269821423581,
          "latitude": 39.91126709866239,
          "gpsAddress": "116.23269821423581:39.91126709866239",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110107,
          "districtName": "石景山区",
          "district": {
            "districtId": 110107,
            "name": "石景山区"
          },
          "phone": "010-68663399",
          "telephones": [
            "010-68663399"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4872/efa28b68ee4ca8973b963e07b383dbd6.jpg",
          "businessTime": "8:30—24:00（随排映时间调整）",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 5350,
          "Distance": 18.162661454244585,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9457,
          "name": "沙河镇中影智信影城",
          "address": "昌平区奇点中心（北京市昌平区能源东路1号）",
          "longitude": 116.25539331725021,
          "latitude": 40.16072525932102,
          "gpsAddress": "116.25539331725021:40.16072525932102",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110114,
          "districtName": "昌平区",
          "district": {
            "districtId": 110114,
            "name": "昌平区"
          },
          "phone": "010-60776292",
          "telephones": [
            "010-60776292"
          ],
          "logoUrl": "",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 2550,
          "Distance": 19.326391911387578,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 5147,
          "name": "北京华彩恐龙主题影城",
          "address": "后沙峪九重汇8层",
          "longitude": 116.549567,
          "latitude": 40.112005,
          "gpsAddress": "116.549567:40.112005",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110113,
          "districtName": "顺义区",
          "district": {
            "districtId": 110113,
            "name": "顺义区"
          },
          "phone": "010-80498699",
          "telephones": [
            "010-80498699"
          ],
          "logoUrl": "https://pic.maizuo.comusr/5147/c67b06e7eaa12f2d4ca8a79e99441902.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4600,
          "Distance": 19.369399666298857,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 1022,
          "name": "北京首都电影院昌平店",
          "address": "北京市昌平区南环路金隅万科广场8层",
          "longitude": 116.27767364835641,
          "latitude": 40.21932716847132,
          "gpsAddress": "116.27767364835641:40.21932716847132",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110114,
          "districtName": "昌平区",
          "district": {
            "districtId": 110114,
            "name": "昌平区"
          },
          "phone": "010-60749995",
          "telephones": [
            "010-60749995"
          ],
          "logoUrl": "https://pic.maizuo.comusr/1022/685c676565b37a6d0c30e685f03ddee7.jpg",
          "businessTime": "",
          "notice": "温馨提示：《姜子牙》影片，建议十三岁以上观众观看 \n1）4D提示：“4D厅老幼孕（身高1米以下儿童），高血压，心脏病等人群不宜观看，身高1米以上儿童观影（在成人陪同下）需购票。”\n 2）LUXE厅提示：”本影厅9排5-20座，10排、11排、12排8-23座为按摩座椅，请您知悉。”",
          "isVisited": 0,
          "lowPrice": 4270,
          "Distance": 19.40751118762339,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4847,
          "name": "大地影院（昌平菓岭假日店）",
          "address": "北京市昌平区昌崔路203号果岭假日广场四楼大地数字影院",
          "longitude": 116.2714937223632,
          "latitude": 40.22863370783766,
          "gpsAddress": "116.2714937223632:40.22863370783766",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110114,
          "districtName": "昌平区",
          "district": {
            "districtId": 110114,
            "name": "昌平区"
          },
          "phone": "010-80100287",
          "telephones": [
            "010-80100287"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4847/b0ba621366edbecd624fc637e13727f4.jpg",
          "businessTime": "10:10-00:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 6100,
          "Distance": 20.21120169078037,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 5066,
          "name": "北京华夏天合国际影城",
          "address": "北京市通州区台湖镇定海园二里新城商厦4004号",
          "longitude": 116.57241395545434,
          "latitude": 39.804976062915266,
          "gpsAddress": "116.57241395545434:39.804976062915266",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110112,
          "districtName": "通州区",
          "district": {
            "districtId": 110112,
            "name": "通州区"
          },
          "phone": "010-68868858",
          "telephones": [
            "010-68868858"
          ],
          "logoUrl": "https://pic.maizuo.comusr/5066/a9ddc0f321c193e2432d76c7fd5cee32.jpg",
          "businessTime": "10:00-24:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3300,
          "Distance": 20.6331937692915,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 773,
          "name": "金逸国际影城双桥店",
          "address": "北京市朝阳区双桥路3号东星时尚广场5层(八通线城铁双桥站南50米)",
          "longitude": 116.58211938921811,
          "latitude": 39.9141117956561,
          "gpsAddress": "116.58211938921811:39.9141117956561",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-59769805",
          "telephones": [
            "010-59769805"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4/e2d4c899d9026847626cfcc0dafd9d7e.jpg",
          "businessTime": "10:30-23:30",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 5500,
          "Distance": 20.77318699910696,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9347,
          "name": "北京乐糖影城房山店",
          "address": "北京市房山区长阳镇长政南街1号院1号楼5F-01、5F-06街",
          "longitude": 116.21994756431866,
          "latitude": 39.768937770342205,
          "gpsAddress": "116.21994756431866:39.768937770342205",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110111,
          "districtName": "房山区",
          "district": {
            "districtId": 110111,
            "name": "房山区"
          },
          "phone": "010-50875258",
          "telephones": [
            "010-50875258"
          ],
          "logoUrl": "",
          "businessTime": "09:30——22:30",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3650,
          "Distance": 21.11082236856509,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 8869,
          "name": "北京ACE影城",
          "address": "北京市顺义区后沙峪镇安平街5号院1号楼4层",
          "longitude": 116.56510849173343,
          "latitude": 40.12578717266202,
          "gpsAddress": "116.56510849173343:40.12578717266202",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110113,
          "districtName": "顺义区",
          "district": {
            "districtId": 110113,
            "name": "顺义区"
          },
          "phone": "010-60407788",
          "telephones": [
            "010-60407788"
          ],
          "logoUrl": "",
          "businessTime": "09:00~23:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3300,
          "Distance": 21.22093606754838,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 2679,
          "name": "幸福蓝海国际影城北京房山店",
          "address": "北京市房山区广阳新路9号院1号楼3层中粮万科半岛广场三层",
          "longitude": 116.2198805668971,
          "latitude": 39.758749386983666,
          "gpsAddress": "116.2198805668971:39.758749386983666",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110111,
          "districtName": "房山区",
          "district": {
            "districtId": 110111,
            "name": "房山区"
          },
          "phone": "010-50923706",
          "telephones": [
            "010-50923706"
          ],
          "logoUrl": "https://pic.maizuo.comusr/2679/c51188d89beda3c3221edd8bac4de6a1.tmp",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 5250,
          "Distance": 21.311937185633735,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9683,
          "name": "北京万达影城昌平保利光魔店",
          "address": "北京市昌平区鼓楼南街佳莲时代广场四层",
          "longitude": 116.24084085781912,
          "latitude": 40.229293912874866,
          "gpsAddress": "116.24084085781912:40.229293912874866",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110114,
          "districtName": "昌平区",
          "district": {
            "districtId": 110114,
            "name": "昌平区"
          },
          "phone": "010-60700001 ",
          "telephones": [
            "010-60700001 "
          ],
          "logoUrl": "",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 6000,
          "Distance": 22.69758107889911,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9097,
          "name": "北京完美云太狼影城",
          "address": "北京市朝阳区朝阳路28号1层166室",
          "longitude": 116.60001160750133,
          "latitude": 39.91721660575456,
          "gpsAddress": "116.60001160750133:39.91721660575456",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-59154998",
          "telephones": [
            "010-59154998"
          ],
          "logoUrl": "",
          "businessTime": "9:00-23:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 5600,
          "Distance": 22.7588204923989,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 5113,
          "name": "北京耀莱成龙国际影城（温泉镇店）",
          "address": "北京市海淀区温泉镇北部文化中心D座4层",
          "longitude": 116.19534896001338,
          "latitude": 40.04819507559265,
          "gpsAddress": "116.19534896001338:40.04819507559265",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110108,
          "districtName": "海淀区",
          "district": {
            "districtId": 110108,
            "name": "海淀区"
          },
          "phone": "010-62452939",
          "telephones": [
            "010-62452939"
          ],
          "logoUrl": "https://pic.maizuo.comusr/5113/efe07501971f2fda932391a6c00a3411.jpg",
          "businessTime": "9：30~23：00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4700,
          "Distance": 23.046297364110984,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4899,
          "name": "北京完美世界影城管庄店（原17.5影城）",
          "address": "北京市朝阳区京通苑30号楼L307",
          "longitude": 116.60297676666765,
          "latitude": 39.91814774514581,
          "gpsAddress": "116.60297676666765:39.91814774514581",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-85377718",
          "telephones": [
            "010-85377718"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4899/dab9381a3293fdd056e413e61a0a9707.jpg",
          "businessTime": "09：00-22：00",
          "notice": "影片《寂静之地》即将上映，小学生以及学龄前儿童应在家长陪同下观看。",
          "isVisited": 0,
          "lowPrice": 3300,
          "Distance": 23.087550922009257,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 2207,
          "name": "北京沃美影城常营店",
          "address": "北京市朝阳区朝阳北路17号北京华联常营购物中心西区4层",
          "longitude": 116.6053079431271,
          "latitude": 39.93200953951904,
          "gpsAddress": "116.6053079431271:39.93200953951904",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "暂无",
          "telephones": [
            "暂无"
          ],
          "logoUrl": "https://pic.maizuo.comusr/2207/8e665ef687f749fd22bf2d4cd5a79513.tmp",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4200,
          "Distance": 23.33978432116722,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 5141,
          "name": "北京卢米埃影城(长楹天街IMAX店)",
          "address": "北京市朝阳区常营长楹天街购物中心东区五层",
          "longitude": 116.60612232893634,
          "latitude": 39.93088736909613,
          "gpsAddress": "116.60612232893634:39.93088736909613",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "phone": "010-85095626",
          "telephones": [
            "010-85095626"
          ],
          "logoUrl": "https://pic.maizuo.comusr/5141/4931d2acca6c82bbb0d63ebc9bb5e288.jpg",
          "businessTime": "9：00-12:30",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4500,
          "Distance": 23.430267662648554,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9429,
          "name": "北京万达影城房山店",
          "address": "房山区首创奥特莱斯广场",
          "longitude": 116.19420997420302,
          "latitude": 39.769228376302316,
          "gpsAddress": "116.19420997420302:39.769228376302316",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110111,
          "districtName": "房山区",
          "district": {
            "districtId": 110111,
            "name": "房山区"
          },
          "phone": "18601947982",
          "telephones": [
            "18601947982"
          ],
          "logoUrl": "",
          "businessTime": "10:00-22:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4360,
          "Distance": 23.78371000220543,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 1595,
          "name": "北京保利国际影城苹果园店",
          "address": "北京市石景山区阜石路300号喜隆多新国际购物中心三层",
          "longitude": 116.17798001726598,
          "latitude": 39.92917424481819,
          "gpsAddress": "116.17798001726598:39.92917424481819",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110107,
          "districtName": "石景山区",
          "district": {
            "districtId": 110107,
            "name": "石景山区"
          },
          "phone": "010-53021058",
          "telephones": [
            "010-53021058"
          ],
          "logoUrl": "https://pic.maizuo.comusr/1595/6f7ceb05dc004a2dc145a114c36bf25c.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4900,
          "Distance": 24.230392287483795,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9472,
          "name": "新影联美亚东申影城",
          "address": "房山区学园北街26号院1号楼北京时代广场一层",
          "longitude": 116.18030330570475,
          "latitude": 39.7310277350812,
          "gpsAddress": "116.18030330570475:39.7310277350812",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110111,
          "districtName": "房山区",
          "district": {
            "districtId": 110111,
            "name": "房山区"
          },
          "phone": "010-51313738",
          "telephones": [
            "010-51313738"
          ],
          "logoUrl": "",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3980,
          "Distance": 25.90091704682503,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 2183,
          "name": "sfc上影影城（北京房山店）",
          "address": "北京市房山区黄辛庄路口东南角绿地缤纷城三层",
          "longitude": 116.167278728302,
          "latitude": 39.7627503171464,
          "gpsAddress": "116.167278728302:39.7627503171464",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110111,
          "districtName": "房山区",
          "district": {
            "districtId": 110111,
            "name": "房山区"
          },
          "phone": "010-52802652 ",
          "telephones": [
            "010-52802652 "
          ],
          "logoUrl": "https://pic.maizuo.comusr/2183/50c9ac9aa30931a36fa313bf87b36407.tmp",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4100,
          "Distance": 26.72462714832732,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 837,
          "name": "北京博纳国际影城通州店",
          "address": "北京市通州区杨庄北里52号天时名苑小区14号楼F4-01(近通州北苑地铁站)",
          "longitude": 116.64268241458181,
          "latitude": 39.91018432824742,
          "gpsAddress": "116.64268241458181:39.91018432824742",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110112,
          "districtName": "通州区",
          "district": {
            "districtId": 110112,
            "name": "通州区"
          },
          "phone": "010-56351916-800",
          "telephones": [
            "010-56351916-800"
          ],
          "logoUrl": "https://pic.maizuo.comusr/837/5559efb89b4635016d7a651242cf1ee2.jpg",
          "businessTime": "10:00-23:30",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 2700,
          "Distance": 27.517681036977677,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 1427,
          "name": "北京通州万达广场店",
          "address": "北京市通州区新华西街58号万达广场1号楼5层",
          "longitude": 116.64846379475924,
          "latitude": 39.911666134128666,
          "gpsAddress": "116.64846379475924:39.911666134128666",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110112,
          "districtName": "通州区",
          "district": {
            "districtId": 110112,
            "name": "通州区"
          },
          "phone": "0",
          "telephones": [
            "0"
          ],
          "logoUrl": "https://pic.maizuo.comusr/1427/142a8cbb77b1a308a0f000539c4960cd.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 5350,
          "Distance": 28.158384110435346,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4861,
          "name": "北京良乡影剧院",
          "address": "北京市良乡拱辰大街31号",
          "longitude": 116.14817672785287,
          "latitude": 39.74441616247457,
          "gpsAddress": "116.14817672785287:39.74441616247457",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110111,
          "districtName": "房山区",
          "district": {
            "districtId": 110111,
            "name": "房山区"
          },
          "phone": "010-69352415",
          "telephones": [
            "010-69352415"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4861/e170fd4ec11aa07f2277c2d9cdec293f.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3300,
          "Distance": 29.0258464131532,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 8654,
          "name": "北京耀莱成龙国际影城房山天街店",
          "address": "北京市房山区政通南路2号院1号楼五层25、六层21",
          "longitude": 116.147092,
          "latitude": 39.751714,
          "gpsAddress": "116.147092:39.751714",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110111,
          "districtName": "房山区",
          "district": {
            "districtId": 110111,
            "name": "房山区"
          },
          "phone": "010-89363500",
          "telephones": [
            "010-89363500"
          ],
          "logoUrl": "https://pic.maizuo.comusr/8654/66b372bc8dc80b571e3b016bc9ed8a4a.jpg",
          "businessTime": "10:00-PM24:00",
          "notice": "4号D-BOX厅特殊影厅，该厅儿童观影需购票入场。前五排为头等舱座椅，后四排为动感座椅，购票时请注意。",
          "isVisited": 0,
          "lowPrice": 4800,
          "Distance": 29.02960203474009,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 7881,
          "name": "北京咪咚影院良乡国泰店",
          "address": "北京市房山区拱辰南大街7号院1号楼4层4-01",
          "longitude": 116.147775688341,
          "latitude": 39.734955792524595,
          "gpsAddress": "116.147775688341:39.734955792524595",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110111,
          "districtName": "房山区",
          "district": {
            "districtId": 110111,
            "name": "房山区"
          },
          "phone": "010-56036777",
          "telephones": [
            "010-56036777"
          ],
          "logoUrl": "https://pic.maizuo.comusr/7881/66b372bc8dc80b571e3b016bc9ed8a4a.jpg",
          "businessTime": "9:00 - 23:59",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3630,
          "Distance": 29.21817559784526,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4863,
          "name": "北京新华国际影城房山店",
          "address": "北京市房山区良乡北关西路14号华冠购物中心五层",
          "longitude": 116.14578133063421,
          "latitude": 39.74124339464468,
          "gpsAddress": "116.14578133063421:39.74124339464468",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110111,
          "districtName": "房山区",
          "district": {
            "districtId": 110111,
            "name": "房山区"
          },
          "phone": "010-69351155/69351302",
          "telephones": [
            "010-69351155/69351302"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4863/a515b8f63f21866256ab1bfa801b03d6.jpg",
          "businessTime": "9:30-22:30",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 2990,
          "Distance": 29.328116534407116,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 1774,
          "name": "北京万达影城（通州银兴光魔店）",
          "address": "北京市通州区翠景北里21号楼京通罗斯福广场5层乐天影城",
          "longitude": 116.66501200606726,
          "latitude": 39.89553907762322,
          "gpsAddress": "116.66501200606726:39.89553907762322",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110112,
          "districtName": "通州区",
          "district": {
            "districtId": 110112,
            "name": "通州区"
          },
          "phone": "010-80556767",
          "telephones": [
            "010-80556767"
          ],
          "logoUrl": "https://pic.maizuo.comusr/1774/be1a2ab7b73b8f8dae15c3d837f6fd35.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4800,
          "Distance": 30.034670709550184,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 1402,
          "name": "北京熙旺国际影院",
          "address": "北京市门头沟区双峪路35号熙旺中心B座6层",
          "longitude": 116.12007497549946,
          "latitude": 39.94128698706568,
          "gpsAddress": "116.12007497549946:39.94128698706568",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110109,
          "districtName": "门头沟区",
          "district": {
            "districtId": 110109,
            "name": "门头沟区"
          },
          "phone": "010-69862078",
          "telephones": [
            "010-69862078"
          ],
          "logoUrl": "https://pic.maizuo.comusr/1402/db187b322fc7a612014ec6598e4a2336.png",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 5230,
          "Distance": 30.681367556629244,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 1998,
          "name": "大地影院（顺义隆华购物中心店）",
          "address": "北京市顺义区仁和镇新顺南大街11号隆华购物中心6F",
          "longitude": 116.65726744477409,
          "latitude": 40.133222008439034,
          "gpsAddress": "116.65726744477409:40.133222008439034",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110113,
          "districtName": "顺义区",
          "district": {
            "districtId": 110113,
            "name": "顺义区"
          },
          "phone": "010-89472732",
          "telephones": [
            "010-89472732"
          ],
          "logoUrl": "https://pic.maizuo.comusr/1998/8b065cb4dcb38ad1ef206c4dc1d9c111.tmp",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 5000,
          "Distance": 30.826623421905232,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4953,
          "name": "北京博纳影城顺义新世界店",
          "address": "北京市顺义区新顺南大街18号新世界百货七层",
          "longitude": 116.65833436222829,
          "latitude": 40.1331121656919,
          "gpsAddress": "116.65833436222829:40.1331121656919",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110113,
          "districtName": "顺义区",
          "district": {
            "districtId": 110113,
            "name": "顺义区"
          },
          "phone": "010-60406018",
          "telephones": [
            "010-60406018"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4953/5559efb89b4635016d7a651242cf1ee2.jpg",
          "businessTime": "9:00-23:00",
          "notice": "温馨提示：MX4D10号影厅放映普通3D版本电影时并无4D特效",
          "isVisited": 0,
          "lowPrice": 4910,
          "Distance": 30.93713367233141,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 1123,
          "name": "北京幸福蓝海国际影城门头沟店",
          "address": "北京市门头沟区永定镇冯村华润Plus365购物中心2层",
          "longitude": 116.11756091302124,
          "latitude": 39.91710184641508,
          "gpsAddress": "116.11756091302124:39.91710184641508",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110109,
          "districtName": "门头沟区",
          "district": {
            "districtId": 110109,
            "name": "门头沟区"
          },
          "phone": "010-69806180",
          "telephones": [
            "010-69806180"
          ],
          "logoUrl": "https://pic.maizuo.comusr/1123/c51188d89beda3c3221edd8bac4de6a1.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4170,
          "Distance": 30.962684765568763,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4883,
          "name": "CGV星聚汇影城北京顺义店",
          "address": "北京市顺义区新顺南大街华联购物中心4楼",
          "longitude": 116.65889203028888,
          "latitude": 40.134472051804735,
          "gpsAddress": "116.65889203028888:40.134472051804735",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110113,
          "districtName": "顺义区",
          "district": {
            "districtId": 110113,
            "name": "顺义区"
          },
          "phone": "010-61490988",
          "telephones": [
            "010-61490988"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4883/7a6c881e8de5feb90805ae20fa92ef32.tmp",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 6200,
          "Distance": 31.01794506524561,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4859,
          "name": "门头沟影剧院",
          "address": "北京市门头沟区新桥大街12号",
          "longitude": 116.10772985752004,
          "latitude": 39.9485052596144,
          "gpsAddress": "116.10772985752004:39.9485052596144",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110109,
          "districtName": "门头沟区",
          "district": {
            "districtId": 110109,
            "name": "门头沟区"
          },
          "phone": "010-69842686",
          "telephones": [
            "010-69842686"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4859/e170fd4ec11aa07f2277c2d9cdec293f.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3300,
          "Distance": 32.063540009451444,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 5145,
          "name": "北京东融国际影城(月亮河店)",
          "address": "北京通州区永顺镇芙蓉园513号楼2-3层",
          "longitude": 116.68388863873174,
          "latitude": 39.92539666947454,
          "gpsAddress": "116.68388863873174:39.92539666947454",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110112,
          "districtName": "通州区",
          "district": {
            "districtId": 110112,
            "name": "通州区"
          },
          "phone": "010-80850020",
          "telephones": [
            "010-80850020"
          ],
          "logoUrl": "https://pic.maizuo.comusr/5145/575cc76ec9865a36a874baa0ec4fe89f.png",
          "businessTime": "10:00--22:30",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 2100,
          "Distance": 32.087942736351685,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 1999,
          "name": "大地影院（通州米拉家园店）",
          "address": "北京市通州区新油东路1号米拉时尚生活广场七层",
          "longitude": 116.68592419901735,
          "latitude": 39.901344981007476,
          "gpsAddress": "116.68592419901735:39.901344981007476",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110112,
          "districtName": "通州区",
          "district": {
            "districtId": 110112,
            "name": "通州区"
          },
          "phone": "010-80897926",
          "telephones": [
            "010-80897926"
          ],
          "logoUrl": "https://pic.maizuo.comusr/1999/8b065cb4dcb38ad1ef206c4dc1d9c111.tmp",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 7600,
          "Distance": 32.3451166071904,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 6708,
          "name": "顺义恒华国际影城（激光巨幕店）",
          "address": "北京市顺义区恒华西街2号院3号楼五层",
          "longitude": 116.662381,
          "latitude": 40.210376,
          "gpsAddress": "116.662381:40.210376",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110113,
          "districtName": "顺义区",
          "district": {
            "districtId": 110113,
            "name": "顺义区"
          },
          "phone": "010-60440260",
          "telephones": [
            "010-60440260"
          ],
          "logoUrl": "https://pic.maizuo.comusr/6708/2a243f94e14fbc0d4305bac92a668585.png",
          "businessTime": "早9:00至晚23:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4270,
          "Distance": 32.80279093051888,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 2763,
          "name": "北京耀莱成龙国际影城临河里店",
          "address": "北京市通州区梨园南街38号华业东方玫瑰华千里商业中心3层耀莱影城",
          "longitude": 116.69167964241977,
          "latitude": 39.88658378888272,
          "gpsAddress": "116.69167964241977:39.88658378888272",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110112,
          "districtName": "通州区",
          "district": {
            "districtId": 110112,
            "name": "通州区"
          },
          "phone": "010-81588918",
          "telephones": [
            "010-81588918"
          ],
          "logoUrl": "https://pic.maizuo.comusr/2763/efe07501971f2fda932391a6c00a3411.tmp",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 2190,
          "Distance": 33.02507292119027,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9452,
          "name": "IDA传奇影城（怀柔店）",
          "address": "怀柔区青春路15号四层",
          "longitude": 116.6362823094166,
          "latitude": 40.32398223053488,
          "gpsAddress": "116.6362823094166:40.32398223053488",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110116,
          "districtName": "怀柔区",
          "district": {
            "districtId": 110116,
            "name": "怀柔区"
          },
          "phone": "010-69627035",
          "telephones": [
            "010-69627035"
          ],
          "logoUrl": "",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 1330,
          "Distance": 33.181036894195664,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 8828,
          "name": "大地影院（鲁能美丽汇店）",
          "address": "北京市顺义区马坡镇顺恒大街鲁能商业综合体三层",
          "longitude": 116.67098906233731,
          "latitude": 40.1896221816502,
          "gpsAddress": "116.67098906233731:40.1896221816502",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110113,
          "districtName": "顺义区",
          "district": {
            "districtId": 110113,
            "name": "顺义区"
          },
          "phone": "010-50935954",
          "telephones": [
            "010-50935954"
          ],
          "logoUrl": "",
          "businessTime": "例:上午10点到次日凌晨1点",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4100,
          "Distance": 33.25944935069593,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 2593,
          "name": "米瑞酷影城（乔庄店）",
          "address": "北京市通州区运河西大街乔庄卜蜂莲花超市一层",
          "longitude": 116.69508197453881,
          "latitude": 39.89721407998391,
          "gpsAddress": "116.69508197453881:39.89721407998391",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110112,
          "districtName": "通州区",
          "district": {
            "districtId": 110112,
            "name": "通州区"
          },
          "phone": "010-81555545",
          "telephones": [
            "010-81555545"
          ],
          "logoUrl": "https://pic.maizuo.comusr/2593/0c96cfb2fae2672f4749bce0cf8f0488.tmp",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3630,
          "Distance": 33.37301417989401,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9458,
          "name": "米珈尼有渔影城",
          "address": "怀柔区南大街3号1幢101",
          "longitude": 116.64300410856461,
          "latitude": 40.31928215431977,
          "gpsAddress": "116.64300410856461:40.31928215431977",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110116,
          "districtName": "怀柔区",
          "district": {
            "districtId": 110116,
            "name": "怀柔区"
          },
          "phone": "010-69681660",
          "telephones": [
            "010-69681660"
          ],
          "logoUrl": "",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4280,
          "Distance": 33.65448651823126,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 6900,
          "name": "北京万达影城怀柔店",
          "address": "北京市怀柔区府前西街1号院1号楼万达广场7层",
          "longitude": 116.64339599075012,
          "latitude": 40.322839464959586,
          "gpsAddress": "116.64339599075012:40.322839464959586",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110116,
          "districtName": "怀柔区",
          "district": {
            "districtId": 110116,
            "name": "怀柔区"
          },
          "phone": "4000806060",
          "telephones": [
            "4000806060"
          ],
          "logoUrl": "https://pic.maizuo.comusr/6900/f0d14e66743e88d366637d6d1ffcfbff.jpg",
          "businessTime": "8:00-24：00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4360,
          "Distance": 33.792123892110965,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 8861,
          "name": "华联影城（通州店）",
          "address": "北京市通州区通胡大街甲3号3层商业F3-05A\\F3-05C",
          "longitude": 116.70662475118928,
          "latitude": 39.924186955584574,
          "gpsAddress": "116.70662475118928:39.924186955584574",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110112,
          "districtName": "通州区",
          "district": {
            "districtId": 110112,
            "name": "通州区"
          },
          "phone": "010-59747878",
          "telephones": [
            "010-59747878"
          ],
          "logoUrl": "",
          "businessTime": "10:00—24:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 2680,
          "Distance": 34.6193058056131,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 2528,
          "name": "北京博纳国际影城通州土桥店",
          "address": "北京市通州区梨园镇砖厂南里（华远·好天地购物中心）3层",
          "longitude": 116.70647903076437,
          "latitude": 39.87568394181374,
          "gpsAddress": "116.70647903076437:39.87568394181374",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110112,
          "districtName": "通州区",
          "district": {
            "districtId": 110112,
            "name": "通州区"
          },
          "phone": "010-61510188转800",
          "telephones": [
            "010-61510188转800"
          ],
          "logoUrl": "https://pic.maizuo.comusr/2528/eec3b8b28ffb31e98fb863d4c3bbb0d6.tmp",
          "businessTime": "9:30—23:59",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 2700,
          "Distance": 34.707216890953795,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 5363,
          "name": "北京怀柔环球国际影城",
          "address": "北京怀柔开放路泉河园二区和谐置家一层下元市场北",
          "longitude": 116.651909,
          "latitude": 40.335288,
          "gpsAddress": "116.651909:40.335288",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110116,
          "districtName": "怀柔区",
          "district": {
            "districtId": 110116,
            "name": "怀柔区"
          },
          "phone": "010-69622766",
          "telephones": [
            "010-69622766"
          ],
          "logoUrl": "https://pic.maizuo.comusr/5363/9a639c0d809e7470d7bdc09fb8788434.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3900,
          "Distance": 34.92483955161162,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9442,
          "name": " 唐阁影城（怀柔星东天地店）",
          "address": "怀柔区开放东路13号院2号楼",
          "longitude": 116.65624669797735,
          "latitude": 40.33088596429843,
          "gpsAddress": "116.65624669797735:40.33088596429843",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110116,
          "districtName": "怀柔区",
          "district": {
            "districtId": 110116,
            "name": "怀柔区"
          },
          "phone": "010-60686280",
          "telephones": [
            "010-60686280"
          ],
          "logoUrl": "",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 1330,
          "Distance": 35.196836140180004,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 7464,
          "name": "博纳国际影城（密云IMAX店）",
          "address": "北京市密云区滨河路178号华润万象汇4层L4-01Y",
          "longitude": 116.67875302613119,
          "latitude": 40.30955671982951,
          "gpsAddress": "116.67875302613119:40.30955671982951",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110118,
          "districtName": "密云区",
          "district": {
            "districtId": 110118,
            "name": "密云区"
          },
          "phone": "010-53951168-800",
          "telephones": [
            "010-53951168-800"
          ],
          "logoUrl": "https://pic.maizuo.comusr/7464/e230aa65880e2fa0e656b1a73ed10f4b.jpg",
          "businessTime": "9:00—23:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4270,
          "Distance": 36.73679778930072,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 5359,
          "name": "北京米珈尼汽车影院",
          "address": "雁水路3号（雁栖湖景区正门停车场内）",
          "longitude": 116.692419,
          "latitude": 40.403687,
          "gpsAddress": "116.692419:40.403687",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110116,
          "districtName": "怀柔区",
          "district": {
            "districtId": 110116,
            "name": "怀柔区"
          },
          "phone": "400-100-6939",
          "telephones": [
            "400-100-6939"
          ],
          "logoUrl": "https://pic.maizuo.comusr/5359/9a639c0d809e7470d7bdc09fb8788434.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 6400,
          "Distance": 40.57988746748236,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 2536,
          "name": "北京环球国际影城",
          "address": "北京市房山区兴房大街38号华冠欢乐城四楼",
          "longitude": 115.99425860041616,
          "latitude": 39.69876955736707,
          "gpsAddress": "115.99425860041616:39.69876955736707",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110111,
          "districtName": "房山区",
          "district": {
            "districtId": 110111,
            "name": "房山区"
          },
          "phone": "010-61375512",
          "telephones": [
            "010-61375512"
          ],
          "logoUrl": "https://pic.maizuo.comusr/2536/af6c97c15b206d8e1a56723f7f7c1dae.tmp",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 5300,
          "Distance": 46.10398031174788,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4862,
          "name": "北京燕山影剧院房山店",
          "address": "燕山岗南路3号（近燕山文化广场）",
          "longitude": 115.968905,
          "latitude": 39.732324,
          "gpsAddress": "115.968905:39.732324",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110111,
          "districtName": "房山区",
          "district": {
            "districtId": 110111,
            "name": "房山区"
          },
          "phone": "010-69331001",
          "telephones": [
            "010-69331001"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4862/c67b06e7eaa12f2d4ca8a79e99441902.jpg",
          "businessTime": "",
          "notice": "周一、二全天7折。周三至周五 （不含国家法定节假日）每天17：00前7折！！！\u0026lt;br/\u0026gt;\u0026lt;br/\u0026gt;即日起本影院可使用影客通票纸质兑换券咯！！！\u0026lt;br/\u0026gt;兑换方式：\u0026lt;br/\u0026gt;1.3张影客通票纸质兑换券可换1张普通电影门票；\u0026lt;br/\u0026gt;2.6张影客通票纸质兑换券可换1张3D电影门票；\u0026lt;br/\u0026gt;3.如电影最低票价高于影客通票纸质兑换券面值则需补齐差价。 \u0026lt;br/\u0026gt;\u0026lt;br/\u0026gt;会员政策：\u0026lt;br/\u0026gt;VIP会员卡：充值￥300，有效期12个月，原票价8折 。\u0026lt;br/\u0026gt;VIP贵宾卡：充值￥500，有效期12个月，原票价7折 。\u0026lt;br/\u0026gt;VIP钻石卡：充值￥1000 ，有效期12个月，原票价6折。\u0026lt;br/\u0026gt;注意事项：会员卡申办需缴纳10元工本费；所有会员卡均为储值卡。",
          "isVisited": 0,
          "lowPrice": 4400,
          "Distance": 48.486361351215436,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4834,
          "name": "大地影院（延庆金锣湾店）",
          "address": "北京市延庆区妫水北街39号1幢H座首层（金锣湾商业中心）沃尔玛旁",
          "longitude": 115.9829642052392,
          "latitude": 40.46758967662625,
          "gpsAddress": "115.9829642052392:40.46758967662625",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110119,
          "districtName": "延庆区",
          "district": {
            "districtId": 110119,
            "name": "延庆区"
          },
          "phone": "010-60165114",
          "telephones": [
            "010-60165114"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4834/8b065cb4dcb38ad1ef206c4dc1d9c111.tmp",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4900,
          "Distance": 52.99049337400243,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9455,
          "name": "东影时代影城（密云店）",
          "address": "密云区鼓楼南大街22号兴天阳生活广场4楼",
          "longitude": 116.84954704426833,
          "latitude": 40.38217565813752,
          "gpsAddress": "116.84954704426833:40.38217565813752",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110118,
          "districtName": "密云区",
          "district": {
            "districtId": 110118,
            "name": "密云区"
          },
          "phone": "010-69062568",
          "telephones": [
            "010-69062568"
          ],
          "logoUrl": "",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4200,
          "Distance": 55.33414479853288,
          "eTicketFlag": 0,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 4042,
          "name": "米瑞酷国际影城(密云店)",
          "address": "北京密云县密云区鼓楼南大街10号瑞家商场4层",
          "longitude": 116.8530145933674,
          "latitude": 40.38126505869916,
          "gpsAddress": "116.8530145933674:40.38126505869916",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110118,
          "districtName": "密云区",
          "district": {
            "districtId": 110118,
            "name": "密云区"
          },
          "phone": "010-61090321",
          "telephones": [
            "010-61090321"
          ],
          "logoUrl": "https://pic.maizuo.comusr/4042/951181e84712e8e4fabeaee864792b6a.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3800,
          "Distance": 55.669008699882035,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 2757,
          "name": "华联国际影城平谷店",
          "address": "北京市平谷区迎宾路1号院22号楼F5-13",
          "longitude": 117.101201,
          "latitude": 40.151936,
          "gpsAddress": "117.101201:40.151936",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110117,
          "districtName": "平谷区",
          "district": {
            "districtId": 110117,
            "name": "平谷区"
          },
          "phone": "010-56867788",
          "telephones": [
            "010-56867788"
          ],
          "logoUrl": "https://pic.maizuo.comusr/2757/b49df30150890d45e94b7245a0596d09.jpg",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4690,
          "Distance": 79.32530374772661,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 3174,
          "name": "北京平谷影剧院",
          "address": "北京市平谷区府前街3号影剧院",
          "longitude": 117.12876441206899,
          "latitude": 40.14746130941612,
          "gpsAddress": "117.12876441206899:40.14746130941612",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110117,
          "districtName": "平谷区",
          "district": {
            "districtId": 110117,
            "name": "平谷区"
          },
          "phone": "69962434",
          "telephones": [
            "69962434"
          ],
          "logoUrl": "https://pic.maizuo.comusr/3174/7fa69d6f97ca8e6a0d43ede945c2a946.png",
          "businessTime": "8：30-22：30",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 3730,
          "Distance": 82.33519339136211,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9407,
          "name": "北京米瑞酷影城（平谷店）",
          "address": "平谷区平谷大街电视塔环岛东北角",
          "longitude": 117.18804059772187,
          "latitude": 40.257122294697766,
          "gpsAddress": "117.18804059772187:40.257122294697766",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110117,
          "districtName": "平谷区",
          "district": {
            "districtId": 110117,
            "name": "平谷区"
          },
          "phone": "010-56866788",
          "telephones": [
            "010-56866788"
          ],
          "logoUrl": "",
          "businessTime": "10:00-23:00",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4700,
          "Distance": 89.72308140556972,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9770,
          "name": "博纳国际影城门头沟IMAX店",
          "address": "新城东街17号院2号楼5层Z05号、6层Z01号（地铁s1线上岸站B口出）",
          "longitude": 113.1761876044903,
          "latitude": 22.792702558461386,
          "gpsAddress": "113.1761876044903:22.792702558461386",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110109,
          "districtName": "门头沟区",
          "district": {
            "districtId": 110109,
            "name": "门头沟区"
          },
          "phone": "010-61869299",
          "telephones": [
            "010-61869299"
          ],
          "logoUrl": "",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 4000,
          "Distance": 872.7090422110508,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        },
        {
          "cinemaId": 9682,
          "name": "北京万达影城京港城店",
          "address": "光彩路京港城生活广场6楼",
          "longitude": 104.0834027045298,
          "latitude": 30.607679428374816,
          "gpsAddress": "104.0834027045298:30.607679428374816",
          "cityId": 110100,
          "cityName": "北京市",
          "districtId": 110105,
          "districtName": "朝阳区",
          "district": {
            "districtId": 110105,
            "name": "朝阳区"
          },
          "telephones": [
            ""
          ],
          "logoUrl": "",
          "businessTime": "",
          "notice": "",
          "isVisited": 0,
          "lowPrice": 6650,
          "Distance": 1412.6909651156432,
          "eTicketFlag": 1,
          "seatFlag": 1,
          "ticketTypes": null
        }
      ]
    })
    fn(res);
  }
}
module.exports = {
  ajax: ajax
}
