(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76744441"],{"2bff":function(e,n,t){},"44d7":function(e,n,t){"use strict";var a=t("2bff"),s=t.n(a);s.a},"92b9":function(e,n){const t=(window.navigator.userAgent||navigator.userAgent).toLowerCase();e.exports={isTj:function(){return t.indexOf("closer-ios")>-1||t.indexOf("closer-android")>-1},callTjBridge:function(e,n){if(console.log("call:",e,"---",n),e)try{t.indexOf("closer-ios")>-1?window.WebViewJavascriptBridge&&setupWebViewJavascriptBridge(function(t){n?t.callHandler(e,n,function(e){n.success&&n.success(e)}):t.callHandler(e,function(e){})}):t.indexOf("closer-android")>-1&&"undefined"!=typeof window.bridge&&(n?n.success&&n.success(window.bridge[e](n)):window.bridge[e]())}catch(e){options.fail&&options.fail(e)}}}},a1ca:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"wxapi_container"},[t("div",{staticClass:"lbox_close wxapi_form"},[t("h3",{attrs:{id:"menu-basic"}},[e._v("基础接口")]),t("span",{staticClass:"desc"},[e._v("判断当前客户端是否支持指定JS接口")]),t("button",{staticClass:"btn btn_primary",on:{click:e.checkJsApi}},[e._v("checkJsApi")]),t("h3",{attrs:{id:"menu-share"}},[e._v("分享接口")]),t("span",{staticClass:"desc"},[e._v("获取“分享到朋友圈”按钮点击状态及自定义分享内容接口")]),t("button",{staticClass:"btn btn_primary",on:{click:e.onMenuShareTimeline}},[e._v("onMenuShareTimeline")]),t("span",{staticClass:"desc"},[e._v("获取“分享给朋友”按钮点击状态及自定义分享内容接口")]),t("button",{staticClass:"btn btn_primary",on:{click:e.onMenuShareAppMessage}},[e._v("onMenuShareAppMessage")]),t("span",{staticClass:"desc"},[e._v("获取“分享到QQ”按钮点击状态及自定义分享内容接口")]),t("button",{staticClass:"btn btn_primary",on:{click:e.onMenuShareQQ}},[e._v("onMenuShareQQ")]),t("span",{staticClass:"desc"},[e._v("获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口")]),t("button",{staticClass:"btn btn_primary",on:{click:e.onMenuShareWeibo}},[e._v("onMenuShareWeibo")]),t("span",{staticClass:"desc"},[e._v("获取“分享到QZone”按钮点击状态及自定义分享内容接口")]),t("button",{staticClass:"btn btn_primary",on:{click:e.onMenuShareQZone}},[e._v("onMenuShareQZone")]),t("h3",{attrs:{id:"menu-image"}},[e._v("图像接口")]),t("span",{staticClass:"desc"},[e._v("拍照或从手机相册中选图接口")]),t("button",{staticClass:"btn btn_primary",on:{click:e.chooseImage}},[e._v("chooseImage")]),t("h3",{attrs:{id:"menu-device"}},[e._v("设备信息接口")]),t("span",{staticClass:"desc"},[e._v("获取网络状态接口")]),t("button",{staticClass:"btn btn_primary",on:{click:e.getNetworkType}},[e._v("getNetworkType")]),t("h3",{attrs:{id:"menu-location"}},[e._v("地理位置接口")]),t("span",{staticClass:"desc"},[e._v("使用微信内置地图查看位置接口")]),t("button",{staticClass:"btn btn_primary",on:{click:e.openLocation}},[e._v("openLocation")]),t("span",{staticClass:"desc"},[e._v("获取地理位置接口")]),t("button",{staticClass:"btn btn_primary",on:{click:e.getLocation}},[e._v("getLocation")]),t("h3",{attrs:{id:"menu-scan"}},[e._v("扫一扫")]),t("span",{staticClass:"desc"},[e._v("调起扫一扫接口")]),t("button",{staticClass:"btn btn_primary",on:{click:e.scanQRCode1}},[e._v("scanQRCode(直接返回结果)")])])])},s=[],i=t("af1d"),c=t.n(i),o={methods:{checkJsApi:function(){c.a.checkJsApi({success:function(){alert("true")},fail:function(){alert("false")}})},onMenuShareAppMessage:function(){c.a.onMenuShareAppMessage({title:"互联网之子",desc:"在长大的过程中，我才慢慢发现，我身边的所有事，别人跟我说的所有事，那些所谓本来如此，注定如此的事，它们其实没有非得如此，事情是可以改变的。更重要的是，有些事既然错了，那就该做出改变。",link:"http://movie.douban.com/subject/25785114/",imgUrl:"http://demo.open.weixin.qq.com/jssdk/images/p2166127561.jpg",success:function(e){alert("已分享")},fail:function(e){alert(JSON.stringify(e))}})},onMenuShareTimeline:function(){c.a.onMenuShareTimeline({title:"互联网之子",link:"http://movie.douban.com/subject/25785114/",imgUrl:"http://demo.open.weixin.qq.com/jssdk/images/p2166127561.jpg",success:function(e){alert("已分享")},fail:function(e){alert(JSON.stringify(e))}})},onMenuShareQQ:function(){c.a.onMenuShareQQ({title:"互联网之子",desc:"在长大的过程中，我才慢慢发现，我身边的所有事，别人跟我说的所有事，那些所谓本来如此，注定如此的事，它们其实没有非得如此，事情是可以改变的。更重要的是，有些事既然错了，那就该做出改变。",link:"http://movie.douban.com/subject/25785114/",imgUrl:"http://img3.douban.com/view/movie_poster_cover/spst/public/p2166127561.jpg",success:function(e){alert("已分享")},fail:function(e){alert(JSON.stringify(e))}})},onMenuShareWeibo:function(){c.a.onMenuShareWeibo({title:"互联网之子",desc:"在长大的过程中，我才慢慢发现，我身边的所有事，别人跟我说的所有事，那些所谓本来如此，注定如此的事，它们其实没有非得如此，事情是可以改变的。更重要的是，有些事既然错了，那就该做出改变。",link:"http://movie.douban.com/subject/25785114/",imgUrl:"http://img3.douban.com/view/movie_poster_cover/spst/public/p2166127561.jpg",success:function(e){alert("已分享")},fail:function(e){alert(JSON.stringify(e))}})},onMenuShareQZone:function(){c.a.onMenuShareQZone({title:"互联网之子",desc:"在长大的过程中，我才慢慢发现，我身边的所有事，别人跟我说的所有事，那些所谓本来如此，注定如此的事，它们其实没有非得如此，事情是可以改变的。更重要的是，有些事既然错了，那就该做出改变。",link:"http://movie.douban.com/subject/25785114/",imgUrl:"http://img3.douban.com/view/movie_poster_cover/spst/public/p2166127561.jpg",success:function(e){alert("已分享")},fail:function(e){alert(JSON.stringify(e))}})},chooseImage:function(){c.a.chooseImage({success:function(e){images.localId=e.localIds,alert("已选择 "+e.localIds.length+" 张图片")}})},getNetworkType:function(){c.a.getNetworkType({success:function(e){alert(e.networkType)},fail:function(e){alert(JSON.stringify(e))}})},openLocation:function(){c.a.openLocation({latitude:23.099994,longitude:113.32452,name:"TIT 创意园",address:"广州市海珠区新港中路 397 号",scale:14,infoUrl:"http://weixin.qq.com"})},getLocation:function(){c.a.getLocation({success:function(e){alert(JSON.stringify(e))},cancel:function(e){alert("用户拒绝授权获取地理位置")}})},scanQRCode1:function(){c.a.scanQRCode({needResult:1,desc:"scanQRCode desc",success:function(e){alert(JSON.stringify(e))}})}}},l=o,r=(t("44d7"),t("2877")),u=Object(r["a"])(l,a,s,!1,null,"10d19201",null);u.options.__file="index.vue";n["default"]=u.exports},af1d:function(e,n,t){var a=t("92b9");e.exports={config(e){console.log("obj",e),e&&console.log("ready","ok")},checkJsApi(e){console.log("checkJsApi",a.isTj()),a.isTj()?e.success&&e.success():e.fail&&e.fail()},updateAppMessageShareData(e){var n={title:"",desc:"",link:"",imgUrl:""},t=Object.assign({},n,e);a.callTjBridge("updateAppMessageShareData",t)},updateTimelineShareData(e){var n={title:"",link:"",imgUrl:""},t=Object.assign({},n,e);a.callTjBridge("updateTimelineShareData",t)},onMenuShareTimeline(e){var n={title:"",link:"",imgUrl:"",desc:""},t=Object.assign({},n,e);a.callTjBridge("onMenuShareTimeline",t)},onMenuShareAppMessage(e){var n={title:"",desc:"",link:"",imgUrl:"",type:"",dataUrl:""},t=Object.assign({},n,e);a.callTjBridge("onMenuShareAppMessage",t)},onMenuShareQQ(e){var n={title:"",desc:"",link:"",imgUrl:""},t=Object.assign({},n,e);a.callTjBridge("onMenuShareQQ",t)},onMenuShareWeibo(e){var n={title:"",desc:"",link:"",imgUrl:""},t=Object.assign({},n,e);a.callTjBridge("onMenuShareWeibo",t)},onMenuShareQZone(e){var n={title:"",desc:"",link:"",imgUrl:""},t=Object.assign({},n,e);a.callTjBridge("onMenuShareQZone",t)},chooseImage(e){var n={count:1,sizeType:["original","compressed"],sourceType:["album","camera"]},t=Object.assign({},n,e);a.callTjBridge("chooseImage",t)},previewImage(e){var n={current:"",urls:[]},t=Object.assign({},n,e);a.callTjBridge("previewImage",t)},uploadImage(e){var n={localId:"",isShowProgressTips:1},t=Object.assign({},n,e);a.callTjBridge("uploadImage",t)},downloadImage(e){var n={serverId:"",isShowProgressTips:1},t=Object.assign({},n,e);a.callTjBridge("downloadImage",t)},getLocalImgData(e){var n={localId:""},t=Object.assign({},n,e);a.callTjBridge("getLocalImgData",t)},getNetworkType(){a.callTjBridge("getNetworkType")},openLocation(e){var n={latitude:23.099994,longitude:113.32452,name:"TIT 创意园",address:"广州市海珠区新港中路 397 号",scale:14,infoUrl:"http://weixin.qq.com"},t=Object.assign({},n,e);a.callTjBridge("openLocation",t)},getLocation(){a.callTjBridge("getLocation")},scanQRCode(e){var n={needResult:1,desc:"scanQRCode desc"},t=Object.assign({},n,e);a.callTjBridge("scanQRCode1",t)}}}}]);
//# sourceMappingURL=chunk-76744441.67636cc5.js.map