(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06d16e6c"],{"4dbc":function(t,s,a){},"92b9":function(t,s){const a=(window.navigator.userAgent||navigator.userAgent).toLowerCase();t.exports={isTj:function(){return a.indexOf("closer-ios")>-1||a.indexOf("closer-android")>-1},callTjBridge:function(t,s){if(console.log("call:",t,"---",s),t&&s)try{a.indexOf("closer-ios")>-1?window.WebViewJavascriptBridge&&setupWebViewJavascriptBridge(function(a){a.callHandler(t,s,function(t){s.success&&s.success(t)})}):a.indexOf("closer-android")>-1&&"undefined"!=typeof window.bridge&&s.success&&s.success(window.bridge[t](s))}catch(t){options.fail&&options.fail(t)}}}},a1ca:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"wxapi_container"},[t._m(0),a("div",{staticClass:"lbox_close wxapi_form"},[a("h3",{attrs:{id:"menu-basic"}},[t._v("基础接口")]),a("span",{staticClass:"desc"},[t._v("判断当前客户端是否支持指定JS接口")]),a("button",{staticClass:"btn btn_primary",on:{click:t.checkJsApi}},[t._v("checkJsApi")]),a("h3",{attrs:{id:"menu-share"}},[t._v("分享接口")]),a("span",{staticClass:"desc"},[t._v("获取“分享到朋友圈”按钮点击状态及自定义分享内容接口")]),a("button",{staticClass:"btn btn_primary",on:{click:t.onMenuShareTimeline}},[t._v("onMenuShareTimeline")]),a("span",{staticClass:"desc"},[t._v("获取“分享给朋友”按钮点击状态及自定义分享内容接口")]),a("button",{staticClass:"btn btn_primary",on:{click:t.onMenuShareAppMessage}},[t._v("onMenuShareAppMessage")]),a("span",{staticClass:"desc"},[t._v("获取“分享到QQ”按钮点击状态及自定义分享内容接口")]),a("button",{staticClass:"btn btn_primary",on:{click:t.onMenuShareQQ}},[t._v("onMenuShareQQ")]),a("span",{staticClass:"desc"},[t._v("获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口")]),a("button",{staticClass:"btn btn_primary",on:{click:t.onMenuShareWeibo}},[t._v("onMenuShareWeibo")]),a("span",{staticClass:"desc"},[t._v("获取“分享到QZone”按钮点击状态及自定义分享内容接口")]),a("button",{staticClass:"btn btn_primary",on:{click:t.onMenuShareQZone}},[t._v("onMenuShareQZone")]),a("h3",{attrs:{id:"menu-image"}},[t._v("图像接口")]),a("span",{staticClass:"desc"},[t._v("拍照或从手机相册中选图接口")]),a("button",{staticClass:"btn btn_primary",attrs:{id:"chooseImage"}},[t._v("chooseImage")]),a("span",{staticClass:"desc"},[t._v("预览图片接口")]),a("button",{staticClass:"btn btn_primary",attrs:{id:"previewImage"}},[t._v("previewImage")]),a("span",{staticClass:"desc"},[t._v("上传图片接口")]),a("button",{staticClass:"btn btn_primary",attrs:{id:"uploadImage"}},[t._v("uploadImage")]),a("span",{staticClass:"desc"},[t._v("下载图片接口")]),a("button",{staticClass:"btn btn_primary",attrs:{id:"downloadImage"}},[t._v("downloadImage")]),a("h3",{attrs:{id:"menu-voice"}},[t._v("音频接口")]),a("span",{staticClass:"desc"},[t._v("开始录音接口")]),a("button",{staticClass:"btn btn_primary",attrs:{id:"startRecord"}},[t._v("startRecord")]),a("span",{staticClass:"desc"},[t._v("停止录音接口")]),a("button",{staticClass:"btn btn_primary",attrs:{id:"stopRecord"}},[t._v("stopRecord")]),a("span",{staticClass:"desc"},[t._v("播放语音接口")]),a("button",{staticClass:"btn btn_primary",attrs:{id:"playVoice"}},[t._v("playVoice")]),a("span",{staticClass:"desc"},[t._v("暂停播放接口")]),a("button",{staticClass:"btn btn_primary",attrs:{id:"pauseVoice"}},[t._v("pauseVoice")]),a("span",{staticClass:"desc"},[t._v("停止播放接口")]),a("button",{staticClass:"btn btn_primary",attrs:{id:"stopVoice"}},[t._v("stopVoice")]),a("span",{staticClass:"desc"},[t._v("上传语音接口")]),a("button",{staticClass:"btn btn_primary",attrs:{id:"uploadVoice"}},[t._v("uploadVoice")]),a("span",{staticClass:"desc"},[t._v("下载语音接口")]),a("button",{staticClass:"btn btn_primary",attrs:{id:"downloadVoice"}},[t._v("downloadVoice")]),a("h3",{attrs:{id:"menu-smart"}},[t._v("智能接口")]),a("span",{staticClass:"desc"},[t._v("识别音频并返回识别结果接口")]),a("button",{staticClass:"btn btn_primary",attrs:{id:"translateVoice"}},[t._v("translateVoice")]),a("h3",{attrs:{id:"menu-device"}},[t._v("设备信息接口")]),a("span",{staticClass:"desc"},[t._v("获取网络状态接口")]),a("button",{staticClass:"btn btn_primary",attrs:{id:"getNetworkType"}},[t._v("getNetworkType")]),a("h3",{attrs:{id:"menu-location"}},[t._v("地理位置接口")]),a("span",{staticClass:"desc"},[t._v("使用微信内置地图查看位置接口")]),a("button",{staticClass:"btn btn_primary",attrs:{id:"openLocation"}},[t._v("openLocation")]),a("span",{staticClass:"desc"},[t._v("获取地理位置接口")]),a("button",{staticClass:"btn btn_primary",attrs:{id:"getLocation"}},[t._v("getLocation")]),a("h3",{attrs:{id:"menu-webview"}},[t._v("界面操作接口")]),a("span",{staticClass:"desc"},[t._v("隐藏右上角菜单接口")]),a("button",{staticClass:"btn btn_primary",attrs:{id:"hideOptionMenu"}},[t._v("hideOptionMenu")]),a("span",{staticClass:"desc"},[t._v("显示右上角菜单接口")]),a("button",{staticClass:"btn btn_primary",attrs:{id:"showOptionMenu"}},[t._v("showOptionMenu")]),a("span",{staticClass:"desc"},[t._v("关闭当前网页窗口接口")]),a("button",{staticClass:"btn btn_primary",attrs:{id:"closeWindow"}},[t._v("closeWindow")]),a("span",{staticClass:"desc"},[t._v("批量隐藏功能按钮接口")]),a("button",{staticClass:"btn btn_primary",attrs:{id:"hideMenuItems"}},[t._v("hideMenuItems")]),a("span",{staticClass:"desc"},[t._v("批量显示功能按钮接口")]),a("button",{staticClass:"btn btn_primary",attrs:{id:"showMenuItems"}},[t._v("showMenuItems")]),a("span",{staticClass:"desc"},[t._v("隐藏所有非基础按钮接口")]),a("button",{staticClass:"btn btn_primary",attrs:{id:"hideAllNonBaseMenuItem"}},[t._v("hideAllNonBaseMenuItem")]),a("span",{staticClass:"desc"},[t._v("显示所有功能按钮接口")]),a("button",{staticClass:"btn btn_primary",attrs:{id:"showAllNonBaseMenuItem"}},[t._v("showAllNonBaseMenuItem")]),a("h3",{attrs:{id:"menu-scan"}},[t._v("微信扫一扫")]),a("span",{staticClass:"desc"},[t._v("调起微信扫一扫接口")]),a("button",{staticClass:"btn btn_primary",attrs:{id:"scanQRCode0"}},[t._v("scanQRCode(微信处理结果)")]),a("button",{staticClass:"btn btn_primary",attrs:{id:"scanQRCode1"}},[t._v("scanQRCode(直接返回结果)")]),a("h3",{attrs:{id:"menu-shopping"}},[t._v("微信小店接口")]),a("span",{staticClass:"desc"},[t._v("跳转微信商品页接口")]),a("button",{staticClass:"btn btn_primary",attrs:{id:"openProductSpecificView"}},[t._v("openProductSpecificView")]),a("h3",{attrs:{id:"menu-card"}},[t._v("微信卡券接口")]),a("span",{staticClass:"desc"},[t._v("批量添加卡券接口")]),a("button",{staticClass:"btn btn_primary",attrs:{id:"addCard"}},[t._v("addCard")]),a("span",{staticClass:"desc"},[t._v("调起适用于门店的卡券列表并获取用户选择列表")]),a("button",{staticClass:"btn btn_primary",attrs:{id:"chooseCard"}},[t._v("chooseCard")]),a("span",{staticClass:"desc"},[t._v("查看微信卡包中的卡券接口")]),a("button",{staticClass:"btn btn_primary",attrs:{id:"openCard"}},[t._v("openCard")]),a("h3",{attrs:{id:"menu-pay"}},[t._v("微信支付接口")]),a("span",{staticClass:"desc"},[t._v("发起一个微信支付请求")]),a("button",{staticClass:"btn btn_primary",attrs:{id:"chooseWXPay"}},[t._v("chooseWXPay")])])])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"wxapi_index_container"},[a("ul",{staticClass:"label_box lbox_close wxapi_index_list"},[a("li",{staticClass:"label_item wxapi_index_item"},[a("a",{staticClass:"label_inner",attrs:{href:"#menu-basic"}},[t._v("基础接口")])]),a("li",{staticClass:"label_item wxapi_index_item"},[a("a",{staticClass:"label_inner",attrs:{href:"#menu-share"}},[t._v("分享接口")])]),a("li",{staticClass:"label_item wxapi_index_item"},[a("a",{staticClass:"label_inner",attrs:{href:"#menu-image"}},[t._v("图像接口")])]),a("li",{staticClass:"label_item wxapi_index_item"},[a("a",{staticClass:"label_inner",attrs:{href:"#menu-voice"}},[t._v("音频接口")])]),a("li",{staticClass:"label_item wxapi_index_item"},[a("a",{staticClass:"label_inner",attrs:{href:"#menu-smart"}},[t._v("智能接口")])]),a("li",{staticClass:"label_item wxapi_index_item"},[a("a",{staticClass:"label_inner",attrs:{href:"#menu-device"}},[t._v("设备信息接口")])]),a("li",{staticClass:"label_item wxapi_index_item"},[a("a",{staticClass:"label_inner",attrs:{href:"#menu-location"}},[t._v("地理位置接口")])]),a("li",{staticClass:"label_item wxapi_index_item"},[a("a",{staticClass:"label_inner",attrs:{href:"#menu-webview"}},[t._v("界面操作接口")])]),a("li",{staticClass:"label_item wxapi_index_item"},[a("a",{staticClass:"label_inner",attrs:{href:"#menu-scan"}},[t._v("微信扫一扫接口")])]),a("li",{staticClass:"label_item wxapi_index_item"},[a("a",{staticClass:"label_inner",attrs:{href:"#menu-shopping"}},[t._v("微信小店接口")])]),a("li",{staticClass:"label_item wxapi_index_item"},[a("a",{staticClass:"label_inner",attrs:{href:"#menu-card"}},[t._v("微信卡券接口")])]),a("li",{staticClass:"label_item wxapi_index_item"},[a("a",{staticClass:"label_inner",attrs:{href:"#menu-pay"}},[t._v("微信支付接口")])])])])}],n=(a("cadf"),a("551c"),a("097d"),a("af1d")),c=a.n(n),l={methods:{checkJsApi:function(){c.a.checkJsApi({success:function(){alert("true")},fail:function(){alert("false")}})},onMenuShareAppMessage:function(){c.a.onMenuShareAppMessage({title:"互联网之子",desc:"在长大的过程中，我才慢慢发现，我身边的所有事，别人跟我说的所有事，那些所谓本来如此，注定如此的事，它们其实没有非得如此，事情是可以改变的。更重要的是，有些事既然错了，那就该做出改变。",link:"http://movie.douban.com/subject/25785114/",imgUrl:"http://demo.open.weixin.qq.com/jssdk/images/p2166127561.jpg",success:function(t){alert("已分享")},fail:function(t){alert(JSON.stringify(t))}})},onMenuShareTimeline:function(){c.a.onMenuShareTimeline({title:"互联网之子",link:"http://movie.douban.com/subject/25785114/",imgUrl:"http://demo.open.weixin.qq.com/jssdk/images/p2166127561.jpg",success:function(t){alert("已分享")},fail:function(t){alert(JSON.stringify(t))}})},onMenuShareQQ:function(){c.a.onMenuShareQQ({title:"互联网之子",desc:"在长大的过程中，我才慢慢发现，我身边的所有事，别人跟我说的所有事，那些所谓本来如此，注定如此的事，它们其实没有非得如此，事情是可以改变的。更重要的是，有些事既然错了，那就该做出改变。",link:"http://movie.douban.com/subject/25785114/",imgUrl:"http://img3.douban.com/view/movie_poster_cover/spst/public/p2166127561.jpg",success:function(t){alert("已分享")},fail:function(t){alert(JSON.stringify(t))}})},onMenuShareWeibo:function(){c.a.onMenuShareWeibo({title:"互联网之子",desc:"在长大的过程中，我才慢慢发现，我身边的所有事，别人跟我说的所有事，那些所谓本来如此，注定如此的事，它们其实没有非得如此，事情是可以改变的。更重要的是，有些事既然错了，那就该做出改变。",link:"http://movie.douban.com/subject/25785114/",imgUrl:"http://img3.douban.com/view/movie_poster_cover/spst/public/p2166127561.jpg",success:function(t){alert("已分享")},fail:function(t){alert(JSON.stringify(t))}})},onMenuShareQZone:function(){c.a.onMenuShareQZone({title:"互联网之子",desc:"在长大的过程中，我才慢慢发现，我身边的所有事，别人跟我说的所有事，那些所谓本来如此，注定如此的事，它们其实没有非得如此，事情是可以改变的。更重要的是，有些事既然错了，那就该做出改变。",link:"http://movie.douban.com/subject/25785114/",imgUrl:"http://img3.douban.com/view/movie_poster_cover/spst/public/p2166127561.jpg",success:function(t){alert("已分享")},fail:function(t){alert(JSON.stringify(t))}})}}},o=l,r=(a("dfc9"),a("2877")),d=Object(r["a"])(o,e,i,!1,null,"df866e7a",null);d.options.__file="index.vue";s["default"]=d.exports},af1d:function(t,s,a){var e=a("92b9");t.exports={config(t){console.log("obj",t),t&&console.log("ready","ok")},checkJsApi(t){console.log("checkJsApi",e.isTj()),e.isTj()?t.success&&t.success():t.fail&&t.fail()},onMenuShareTimeline(t){var s={title:"",link:"",imgUrl:"",desc:""},a=Object.assign({},s,t);e.callTjBridge("onMenuShareTimeline",a)},onMenuShareAppMessage(t){var s={title:"",desc:"",link:"",imgUrl:"",type:"",dataUrl:""},a=Object.assign({},s,t);e.callTjBridge("onMenuShareAppMessage",a)},onMenuShareQQ(t){var s={title:"",desc:"",link:"",imgUrl:""},a=Object.assign({},s,t);e.callTjBridge("onMenuShareQQ",a)},onMenuShareWeibo(t){var s={title:"",desc:"",link:"",imgUrl:""},a=Object.assign({},s,t);e.callTjBridge("onMenuShareWeibo",a)},onMenuShareQZone(t){var s={title:"",desc:"",link:"",imgUrl:""},a=Object.assign({},s,t);e.callTjBridge("onMenuShareQZone",a)},chooseImage(t){var s={count:1,sizeType:["original","compressed"],sourceType:["album","camera"]},a=Object.assign({},s,t);e.callTjBridge("chooseImage",a)},previewImage(t){var s={current:"",urls:[]},a=Object.assign({},s,t);e.callTjBridge("previewImage",a)},uploadImage(t){var s={localId:"",isShowProgressTips:1},a=Object.assign({},s,t);e.callTjBridge("uploadImage",a)},downloadImage(t){var s={serverId:"",isShowProgressTips:1},a=Object.assign({},s,t);e.callTjBridge("downloadImage",a)},getLocalImgData(t){var s={localId:""},a=Object.assign({},s,t);e.callTjBridge("getLocalImgData",a)}}},dfc9:function(t,s,a){"use strict";var e=a("4dbc"),i=a.n(e);i.a}}]);
//# sourceMappingURL=chunk-06d16e6c.78661958.js.map