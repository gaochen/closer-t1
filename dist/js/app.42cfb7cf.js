(function(e){function t(t){for(var r,a,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)a=c[l],i[a]&&d.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i={app:0},o=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2593":"10cf9944","chunk-b14c":"17eb68d0"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-2593":1,"chunk-b14c":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2593":"7e65198f","chunk-b14c":"40a7bae5"}[e]+".css",a=s.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var c=i[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===a))return t()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){c=l[o],u=c.getAttribute("data-href");if(u===r||u===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,n(i)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){a[e]=0}));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise(function(t,n){r=i[e]=[t,n]});t.push(r[2]=o);var u,l=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e),u=function(t){d.onerror=d.onload=null,clearTimeout(p);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");o.type=r,o.request=a,n[1](o)}i[e]=void 0}};var p=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,l.appendChild(d)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2f74":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("8bbf"),a=n.n(r),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],c={name:"App"},s=c,u=n("2877"),l=Object(u["a"])(s,i,o,!1,null,null,null);l.options.__file="App.vue";var d=l.exports,p=(n("6423"),n("2f74"),n("6573"),n("aa35"),n("a481"),n("28a5"),n("7f7f"),n("6389")),f=n.n(p),h=(n("7c15"),n("c0d6")),m=(n("76a0"),function(){return n.e("chunk-b14c").then(n.bind(null,"e878"))}),_=function(){return n.e("chunk-2593").then(n.bind(null,"8927"))};a.a.use(f.a);var g=new f.a({mode:"history",routes:[{path:"/article/:id",name:"article",component:_},{path:"/comment/:sid",name:"comment",component:m}]});g.beforeEach(function(e,t,n){var r=e.meta,a=e.path,i=e.query,o=(e.name,e.params,a.split("/").slice(1)),c=i.type,s=i.category;switch(document.title=r.title?r.title:"贴近",o[0]){case"feed":"2"==c?"3"==s?g.replace({path:a.replace("feed","comment")}):g.replace({path:a.replace("feed","article")}):n();break;default:n();break}});var v=g,b=n("cebe"),w=n.n(b),x=n("f121"),y=w.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).BASE_API,timeout:15e3,withCredentials:!0});y.interceptors.request.use(function(e){console.log("xxxx");var t=x["a"].serverDevUrl+e.url;return/t1-sandbox.tiejin/.test(window.location.href)?t=x["a"].serverDevUrl+e.url:/t1.tiejin/.test(window.location.href)&&(t=x["a"].serverUrl+e.url),e.url=t,h["a"].state.IS_APP?h["a"].state.UA.indexOf("closer-ios")>-1?e.headers["Closer-Agent"]="Closer-Ios":h["a"].state.UA.indexOf("closer-android")>-1&&(e.headers["Closer-Agent"]="Closer-Android"):e.headers["Closer-Agent"]="Closer-H5",Cookies.get("uid")&&(e.headers["X-Udid"]=Cookies.get("uid")),Cookies.get("aid")&&(e.headers["X-Adid"]=Cookies.get("aid")),(Cookies.get("GroukAuth")&&-1==e.url.indexOf("auth")&&-1==e.url.indexOf("account")||Cookies.get("GroukAuth")&&-1!=e.url.indexOf("closer_account.bind_phone"))&&(e.headers.Authorization=Cookies.get("GroukAuth")),e},function(e){return Promise.reject(e).catch(e)}),y.interceptors.response.use(function(e){return e},function(e){var t=n("07f7").default;if(e&&e.response)switch(e.response.status){case 400:e.message="请求错误";break;case 401:e.message="未授权，请登录",router.push({name:"worldcupIndex"});break;case 403:e.message="拒绝访问",router.push({name:"worldcupIndex"});break;case 404:e.message="请求地址出错: ".concat(e.response.config.url);break;case 408:e.message="请求超时";break;case 500:e.message="服务器内部错误";break;case 501:e.message="服务未实现";break;case 502:e.message="网关错误";break;case 503:e.message="服务不可用";break;case 504:e.message="网关超时";break;case 505:e.message="HTTP版本不受支持";break;default:}else e.message="网络错误，请稍后再试！";return e&&e.response&&e.response.data&&e.response.data.message?console.warn(e.response.data.message):console.warn(e.message),t.reject(e).catch(e)});var k=y,T=n("a78e"),S=n.n(T),E=n("3a34"),O=n.n(E),j=n("c6c6"),I=n.n(j),C=(n("18a0"),n("9975")),A=n.n(C),R=n("ed08");if(/dev.tiejin/.test(window.location.href)||/sandbox.tiejin/.test(window.location.href)||/127.0.0.1/.test(window.location.href)||/local.tiejin.cn/.test(window.location.href)){new O.a;h["a"].state.IS_DEV=!0}function N(){var e=Math.min(screen.width,document.documentElement.getBoundingClientRect().width)/375*16;document.documentElement.style.fontSize=(e>=32?32:e)+"px"}function U(){var e=navigator.userAgent||window.navigator.userAgent;e=e.toLowerCase(),h["a"].state.UA=e,h["a"].state.V_1_2=Object(R["b"])(e),h["a"].state.IS_APP=Object(R["c"])(e)}window.Axios=k,window.Cookies=S.a,window.MobileDetect=I.a,window.TJ=A.a,window.setupWebViewJavascriptBridge=function(e){if(window.WebViewJavascriptBridge)return e(WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(e);window.WVJBCallbacks=[e];var t=document.createElement("iframe");t.style.display="none",t.src="https://__bridge_loaded__",document.documentElement.appendChild(t),setTimeout(function(){document.documentElement.removeChild(t)},0)},N(),U(),window.onresize=N,new a.a({store:h["a"],router:v,render:function(e){return e(d)}}).$mount("#app")},5880:function(e,t){e.exports=Vuex},6389:function(e,t){e.exports=VueRouter},6423:function(e,t,n){},6573:function(e,t,n){},"7c15":function(e,t,n){"use strict";var r,a=n("a322");t["a"]={admin:{get_auth_path:"closer_auth.get_auth_path",login_with_wechat:"closer_auth.login_with_wechat",closeruser_regist:"closer_auth.closeruser_regist",get_code_by_phone:"closer_account.get_code_by_phone_v2",check:"closer_account.check",check_wechat:"closer_account.check_wechat",info:"closer_user.info",user_show:"closer_user.show",bind_phone:"closer_account.bind_phone",like:"closer_reply.like",add_reply:"closer_reply.add_reply",invite_counts:"closer_user.invite_counts",wechat_config:"closer_share.wechat_config"},command:{show:"closer_subject.show",incr_view:"closer_subject.incr_view",comments:"closer_reply.comments",videos:"ali_vod.accessInfo",report:"closer_report.add",like:"closer_reply.like",add_reply:"closer_reply.add_reply",replys:"closer_reply.replys",reportType:"closer_report.get_report_types"},community:{show:"closer_community.show",community_subject_list_index:"closer_subject.community_subject_list_index",subscription:"closer_community.subscription"},group:{show:"closer_class.show",recruiting:"closer_class.recruiting",group_subject_list:"closer_subject.class_subject_list_index",share_group:"closer_share.outer_group"},activity:(r={get_activity:"closer_activity.get_activity",add_channel:"activity_worldcup.add_channel",check_guess_result:"activity_worldcup.check_guess_result",get_match_list:"activity_worldcup.get_match_list",get_user_guess_list:"activity_worldcup.get_user_guess_list",get_user_guess_statistic:"activity_worldcup.get_user_guess_statistic",guess_match:"activity_worldcup.guess_match",receive_chance:"activity_worldcup.receive_chance"},Object(a["a"])(r,"check_guess_result","activity_worldcup.check_guess_result"),Object(a["a"])(r,"activity_water_chance","activity_water.chance"),Object(a["a"])(r,"activity_water_update","activity_water.update"),Object(a["a"])(r,"activity_water_join","activity_water.join"),Object(a["a"])(r,"get_invite_statistic","closer_invite.get_statistic"),Object(a["a"])(r,"get_invitee_page_list","closer_invite.get_invitee_page_list"),Object(a["a"])(r,"get_yesterday_award_amt","closer_invite.get_yesterday_award_amt"),Object(a["a"])(r,"remind_login","closer_invite.remind_login"),r),statitics:{view_count:"closer_promotion_activity.view_count",get_adcookie:"closer_statistics.get_adcookie"},share:{wechat_config:"closer_share.wechat_config",get_adcookie:"closer_statistics.get_adcookie",common:"closer_statistics.user_action_v2"}}},"8bbf":function(e,t){e.exports=Vue},c0d6:function(e,t,n){"use strict";var r=n("a322"),a=n("8bbf"),i=n.n(a),o=n("5880"),c=n.n(o),s=n("ed08"),u=(n("96cf"),n("3040")),l=n("7c15"),d={get_adcookie:function(e){return Axios.post(l["a"].share.get_adcookie,e).then(function(e){return e.data})},common:function(e){return Axios.post(l["a"].share.common,e).then(function(e){return e.data})},subscription:function(e){return Axios.post(l["a"].community.subscription,e).then(function(e){return e.data})},incr_view:function(e){return Axios.post(l["a"].command.incr_view,e).then(function(e){return e.data})}},p=n("a78e"),f=n.n(p),h=!0,m={h5Cookies:"",incr_view:0},_={get_adcookie:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,i,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=n.webUdid,this,e.prev=3,i={webUdid:a},e.next=7,d.get_adcookie(i);case 7:if(o=e.sent,0!==o.code){e.next=11;break}return r("SET_H5COOKIES",o.result.udid),e.abrupt("return",o.result.udid);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](3),console.log("e==",e.t0);case 16:case"end":return e.stop()}},e,this,[[3,13]])}));return function(t,n){return e.apply(this,arguments)}}(),down_adcookies:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.state,n=t.rootState,t.commit,this,r={webUdid:!1,deviceType:n.nvgtype||"ios",deviceVersion:n.nvgversion||"11_0_0",adid:f.a.get("h5Adid")||"closer-share"},e.next=4,d.get_adcookie(r);case 4:return e.sent,e.abrupt("return",!0);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),down_statistics:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,i,o,c,u,l;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.state,a=t.rootState,t.commit,i=n.p1,f.a.get("user")&&(o=JSON.parse(f.a.get("user")).objectID||""),this,c={userId:o||"",deviceId:"",cookie:f.a.get("h5Cookies")||"",platform:"H5",attachPlatform:a.nvgTypeToPowerCase||"",communityId:a.res.communityid||"",title:a.res.title||"",action:"click",dreason:"",time:Date.now(),cost:Date.now()-r.enter_time||0,totalTime:r.duration_time||0},u=Object(s["f"])(i,c),console.log("para:",u),e.next=8,d.common(u);case 8:if(l=e.sent,console.log("data:",l),0!==l.code){e.next=12;break}return e.abrupt("return",!0);case 12:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),get_focus_stat:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,i,o,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=n.communityid,i=n.flag,this,e.prev=3,o={communityid:a,flag:i},e.next=7,d.subscription(o);case 7:if(c=e.sent,0!==c.code){e.next=17;break}if(0!=i){e.next=13;break}r("SET_FOCUS_STAT",!1,{root:!0}),e.next=15;break;case 13:return r("SET_FOCUS_STAT",!0,{root:!0}),e.abrupt("return",!0);case 15:e.next=18;break;case 17:Toast({message:c.result,position:"top"});case 18:e.next=23;break;case 20:e.prev=20,e.t0=e["catch"](3),Toast({message:e.t0,position:"top"});case 23:case"end":return e.stop()}},e,this,[[3,20]])}));return function(t,n){return e.apply(this,arguments)}}(),get_incr_view:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,n){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,this,e.prev=2,e.next=5,d.incr_view(n);case 5:a=e.sent,console.log(a),0===a.code&&r("SET_INCR_VIEW",a.result),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](2),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[2,10]])}));return function(t,n){return e.apply(this,arguments)}}()},g={SET_H5COOKIES:function(e,t){e.h5Cookies=t},SET_INCR_VIEW:function(e,t){e.incr_view=t}},v={namespaced:h,state:m,actions:_,mutations:g};function b(e){return w.apply(this,arguments)}function w(){return w=Object(u["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Axios.get("".concat(l["a"].command.show,"?subjectid=").concat(t)).then(function(e){return e.data}));case 1:case"end":return e.stop()}},e,this)})),w.apply(this,arguments)}var x={GET_MESSAGE_STATE:!1,GET_IS_APP:!1,GET_APP_TOKEN:"",version_1_2:!1,agent:"",isPre:!1,res:{},content:{},exist:!0},y={fetch_content:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,i,o,c,u,l;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=t.state,i=t.rootState,o=n.id,e.prev=2,e.next=5,b(o);case 5:if(c=e.sent,0==c.code){e.next=10;break}r("GET_EXIST_STATUS",!1),e.next=16;break;case 10:if(i.IS_APP){e.next=14;break}if(!(0===c.result.int_verify||-1===c.result.int_verify&&4!=c.result.int_category&&6!=c.result.int_category||c.result.bool_delete)){e.next=14;break}return r("GET_EXIST_STATUS",!1),e.abrupt("return");case 14:c.result.content&&(u=JSON.parse(c.result.content),i.CONTENT_IMGS,i.IMG_INDEX=0,2===c.result.int_type&&(l=Object(s["e"])(u.html,a.GET_MESSAGE_STATE),l&&(u.html=l)),r("SET_CONTENT",u)),r("SET_RES",c.result);case 16:e.next=22;break;case 18:throw e.prev=18,e.t0=e["catch"](2),r("GET_EXIST_STATUS",!1),e.t0;case 22:case"end":return e.stop()}},e,this,[[2,18]])}));return function(t,n){return e.apply(this,arguments)}}()},k={GET_USER_AGENT:function(e,t){var n=t.nvg.toLowerCase(),r=t.ref,a=n.indexOf("closer-ios")>-1||n.indexOf("closer-android")>-1,i=a||r.indexOf("/invite")>-1;e.version_1_2=Object(s["b"])(n),e.GET_MESSAGE_STATE=!i,e.GET_IS_APP=a,e.agent=n,e.isPre=r.indexOf("?view=pre")>-1},SET_CONTENT:function(e,t){e.content=t},SET_RES:function(e,t){e.res=t},GET_EXIST_STATUS:function(e,t){e.exist=t}},T={namespaced:!0,state:x,actions:y,mutations:k};n("b54a"),n("a481"),n("4917");function S(e){return E.apply(this,arguments)}function E(){return E=Object(u["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Axios.post(l["a"].command.show,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),E.apply(this,arguments)}var O=n("76a0"),j={namespaced:!0,state:{discuss:{},content:{},subject:{},subjectExist:!0},mutations:{setContent:function(e,t){e.content=t,console.timeEnd()},setDiscuss:function(e,t){e.discuss=t},setSubject:function(e,t){e.subject=t},setSubjectState:function(e,t){e.subjectExist=t}},actions:{getSubject:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,i,o,c,u,l,d;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,t.state,a=t.rootState,e.prev=1,e.next=4,S(n);case 4:if(i=e.sent,o=i.data,"undefined"==typeof o.code||0!=o.code){e.next=14;break}if(a.IS_APP){e.next=11;break}if(!(0===o.result.int_verify||-1===o.result.int_verify&&4!=o.result.int_category&&6!=o.result.int_category||o.result.bool_delete)){e.next=11;break}return r("setSubjectState",!1),e.abrupt("return");case 11:o.result.content&&(c=JSON.parse(o.result.content),2===o.result.int_type&&(a.CONTENT_IMGS,a.IMG_INDEX=0,u=Object(s["e"])(c.html),u&&(c.html=u),console.log(c.discuss),c.discuss&&(l=c.discuss.map(function(e){if(e.text){var t=/(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g,n=e.text.match(t);n?(e.weblink=!0,n.map(function(n){var r='<a href="'.concat(n,'" target="_blank">').concat(n,"</a>"),a=e.text.replace(t,r);e.newText=a})):e.weblink=!1}return e.image&&(e.image["index"]=a.IMG_INDEX,a.CONTENT_IMGS.push(e.image.link),a.IMG_INDEX++),e}),r("setDiscuss",l)),3===o.result.int_category&&c.end_html&&(d=Object(s["e"])(c.end_html),d&&(c.end_html=d)),r("setContent",c),delete o.result.content,r("setSubject",o.result))),e.next=15;break;case 14:r("setSubjectState",!1);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](1),r("setSubjectState",!1);case 20:case"end":return e.stop()}},e,this,[[1,17]])}));return function(t,n){return e.apply(this,arguments)}}()}},I=n("6bde");function C(e){return A.apply(this,arguments)}function A(){return A=Object(u["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Axios.post(l["a"].command.comments,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),A.apply(this,arguments)}var R={namespaced:!0,state:{messagelist:{data:[]}},mutations:{setCommentList:function(e,t){console.log("setCommentList--",t),e.messagelist=t.data.result.data,console.log(2,e.messagelist)}},actions:{getCommentsList:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,console.log("getCommentsList--",n),e.next=4,C(n).catch(function(e){Object(O["Toast"])("网络开小差啦~")});case 4:a=e.sent,i=a.data,console.log("data--",i),void 0!=Object(I["a"])(i.code)&&0==i.code&&r({type:"setCommentList",data:i});case 8:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}};n("cadf"),n("551c"),n("097d");function N(e){return U.apply(this,arguments)}function U(){return U=Object(u["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Axios.post(l["a"].command.add_reply,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),U.apply(this,arguments)}function G(e){return P.apply(this,arguments)}function P(){return P=Object(u["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Axios.post(l["a"].statitics.get_adcookie,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),P.apply(this,arguments)}var D={namespaced:!0,state:{replyData:{}},mutations:{updateData:function(e,t){console.log(1,t),e.replyData=t}},actions:{addReplyData:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,O["Indicator"].open({text:"加载中...",spinnerType:"fading-circle"}),console.log(2,n),e.next=5,N(n).catch(function(e){O["Indicator"].close(),Object(O["Toast"])("网络开小差啦~")});case 5:a=e.sent,i=a.data,console.log("2-data---",i),O["Indicator"].close(),void 0!=Object(I["a"])(i.code)&&0==i.code?r({type:"updateData",data:i}):i.result&&Object(O["Toast"])(i.result);case 10:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),getAdCookie:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.rootState,e.next=3,G(n).catch(function(e){Object(O["Toast"])("网络开小差啦~")});case 3:if(r=e.sent,a=r.data,void 0==Object(I["a"])(a.code)||0!=a.code){e.next=11;break}return console.log(1,a),a.result&&(i=a.result,i.udid&&Cookies.set("uid",i.udid,{expires:30})),e.abrupt("return",null);case 11:a.result&&Object(O["Toast"])(a.result);case 12:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}};function V(e){return M.apply(this,arguments)}function M(){return M=Object(u["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Axios.post(l["a"].admin.get_code_by_phone,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),M.apply(this,arguments)}function B(e){return L.apply(this,arguments)}function L(){return L=Object(u["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Axios.post(l["a"].admin.closeruser_regist,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),L.apply(this,arguments)}var J={namespaced:!0,state:{smsCode:""},mutations:{getSmsCode:function(e,t){e.smsCode=t}},actions:{getCode:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,O["Indicator"].open({text:"加载中...",spinnerType:"fading-circle"}),e.next=4,V(n).catch(function(e){O["Indicator"].close(),Object(O["Toast"])("网络开小差啦~")});case 4:a=e.sent,i=a.data,O["Indicator"].close(),void 0!=Object(I["a"])(i.code)&&0==i.code?r({type:"getSmsCode",data:i}):i.result&&Object(O["Toast"])(i.result);case 8:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),login:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t.rootState,t.state,console.log("login, payload ",n),r=/^(0|86|17951)?(1[23456789][0-9])[0-9]{8}$/,!n.phone||r.test(n.phone)){e.next=6;break}return Object(O["Toast"])("请输入正确的手机号"),e.abrupt("return");case 6:if(0!=n.token.length){e.next=9;break}return Object(O["Toast"])("请输入验证码"),e.abrupt("return");case 9:return Cookies.get("uid")&&(n["udid"]=Cookies.get("uid")),Cookies.get("aid")&&(n["adid"]=Cookies.get("aid")),n["protocol"]="WEB_SOCKET",O["Indicator"].open({text:"加载中...",spinnerType:"fading-circle"}),e.next=15,B(n).catch(function(e){O["Indicator"].close(),Object(O["Toast"])("网络开小差啦~")});case 15:if(a=e.sent,i=a.data,O["Indicator"].close(),void 0==Object(I["a"])(i.code)||0!=i.code){e.next=27;break}if(!i.result||!i.result.token){e.next=25;break}if(Cookies.set("GroukAuth",i.result.token,{expires:60}),!i.result.user){e.next=25;break}if(Cookies.set("user",JSON.stringify(i.result.user),{expires:60}),!n.push){e.next=25;break}return e.abrupt("return",i.result.user);case 25:e.next=30;break;case 27:return Object(O["Toast"])("网络开小差啦，请稍后再试"),O["Indicator"].close(),e.abrupt("return");case 30:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}};i.a.use(c.a);t["a"]=new c.a.Store(Object(r["a"])({state:{UA:"",IS_APP:!1,IS_NEW_USER:!1,IS_DEV:!1,IMG_INDEX:0,CONTENT_IMGS:[]},modules:{article:T,comment:j},mutations:{SET_CONTENT:function(e,t){e.content=t},GET_EXIST_STATUS:function(e,t){e.exist=t},SET_RES:function(e,t){e.res=t},SET_EXTENSION_TEXT:function(e,t){e.extension_text=t},SHOW_ALERT:function(e,t){e.alert_stat=t},SET_FOCUS_STAT:function(e,t){e.is_follow=t},GET_LOGIN_TYPE:function(e,t){e.get_login_type=t},SET_VISIBLE_LOGIN:function(e,t){e.visibleLogin=t}}},"modules",{common:v,article:T,comment:j,draft:R,message:D,login:J}))},cebe:function(e,t){e.exports=axios},ed08:function(e,t,n){"use strict";n.d(t,"e",function(){return i}),n.d(t,"d",function(){return o}),n.d(t,"a",function(){return c}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return u}),n.d(t,"g",function(){return l}),n.d(t,"f",function(){return d});n("a481"),n("ac6a"),n("4917"),n("28a5"),n("cadf"),n("551c"),n("097d");var r=n("f121"),a=n("c0d6");function i(e,t){var n=/<img.*?(?:>|\/>)/gi,r=e.match(n);if(r){var i=/src=[\'\"]?([^\'\"]*)[\'\"]?/i,o=/width=[\'\"]?([^\'\"]*)[\'\"]?/i,c=/height=[\'\"]?([^\'\"]*)[\'\"]?/i;r.forEach(function(t,n){var r,s,u,l=t.match(i),d=t.match(o),p=t.match(c);l?(a["a"].state.CONTENT_IMGS.push(l[1]),d&&p?(d[1]<200?(r=d[1]+"px",u=p[1]+"px"):(r="100%",u=100*p[1]/d[1]+"%"),u,s=t.replace(/src=/g,'style="width: '.concat(r,";height: ").concat(u,'; background: #e7e7e7; max-width: 100%;"  data-index="').concat(a["a"].state.IMG_INDEX,'" data-src='))):(r="100%",u="auto","28.27vw",s=t.replace(/src=/g,'style="width: '.concat(r,'; background: #e7e7e7; max-width: 100%;" data-feedlazy="feedlazy2"  data-index="').concat(a["a"].state.IMG_INDEX,'" data-src='))),a["a"].state.IMG_INDEX++):s="",e=e.replace(t,s)})}var s=/<video.*?(?:>|\/>|<\/video>)/gi,u=e.match(s);if(u){var l,d=/src=[\'\"]?([^\'\"]*)[\'\"]?/i,p=/vid=[\'\"]?([^\'\"]*)[\'\"]?/i,f=/imageUrl=[\'\"]?([^\'\"]*)[\'\"]?/i,h=/poster=[\'\"]?([^\'\"]*)[\'\"]?/i,m=/width=[\'\"]?([^\'\"]*)[\'\"]?/i,_=/height=[\'\"]?([^\'\"]*)[\'\"]?/i;u.forEach(function(n,r){var a,i,o,c,s=n.match(d),u=n.match(p),g=n.match(f),v=n.match(h),b=n.match(m),w=n.match(_),x="";a=u?u[1]:"",i=s?s[1]:"",c=parseInt(w[1])/parseInt(b[1]),o=g?g[1]:v?v[1]:"",c>1&&(x="video-box-vertical"),t=!1,l=t?"<section \n                    class='video-box video-box-h5 ".concat(x,"'\n                    data-vid='").concat(a,"'\n                    data-uid='").concat(i,"'\n                    >\n                    <section \n                      class='video-wrap'\n                      data-vid='").concat(a,"'\n                      data-uid='").concat(i,"'\n                      >\n                        <video src='").concat(s[1],"'\n                        class='video-tag'\n                        preload='none'\n                        controls\n                        controlsList='nodownload'\n                        poster='").concat(o,"'\n                        data-bg='").concat(o,'\'\n                        playsinline="true"\n                        webkit-playsinline="true"\n                        x5-playsinline="true"\n                        >\n                        </video>\n                    </section>\n                  </section>'):"<section \n                    class='video-box video-box-native'\n                    data-vid='".concat(a,"'\n                    data-uid='").concat(i,"'\n                    data-bg='").concat(o,"'>\n                    <section \n                      class='video-wrap'\n                      data-vid='").concat(a,"'\n                      data-uid='").concat(i,"'\n                      >\n                      <img data-src='").concat(o,"'\n                        class='video-play-poster'/>\n                      <span\n                        class='video-play-icon' data-vid='").concat(a,"' data-uid='").concat(i,"'></span>\n                    </section>\n                  </section>"),e=e.replace(n,l)})}var g=/<iframe.*?(?:>|\/>|<\/iframe>)/gi,v=e.match(g);if(v){var b=/width=[\'\"]?([^\'\"]*)[\'\"]?/i,w=/height=[\'\"]?([^\'\"]*)[\'\"]?/i;v.forEach(function(t,n){var r=t.match(b),a=t.match(w),i=t.split(r[0]),o="".concat(i[0],'width="100%"').concat(i[1]),c=o.split(a[0]),s="".concat(c[0],' height="240" ').concat(c[1]),u='<section class="imgbox tiejin-iframe">\n                  '.concat(s,"</iframe>\n                </section>");e=e.replace(t,u)})}return e}function o(e,t,n){var i=r["a"].fileUrl;if(a["a"].state.IS_DEV&&(i=r["a"].fileDevUrl),e){var o=n||500;return"src"===t?-1!==e.indexOf("://")?e+"?s="+o:i+e+"?s="+o:-1!==e.indexOf("://")?e:i+e}}function c(e,t){var n=t||null,r=e||null,i=a["a"].state.UA.indexOf("closer-ios")>-1;a["a"].state.V_1_2?i?window.WebViewJavascriptBridge&&setupWebViewJavascriptBridge(function(e){e.callHandler("playVideo",{url:r,vid:n})}):"undefined"!=typeof window.bridge&&window.bridge.playVideo(n,r):location.href="/?vid=".concat(n)}function s(e){try{var t=e.split("closerapp/version/")[1].split(".");return t[0]>1||1==t[0]&&t[1]&&t[1]>1||1==t[0]&&1==t[1]&&t[2]&&t[2]>100}catch(e){return!1}}function u(e){return e.indexOf("closer-ios")>-1||e.indexOf("closer-android")>-1}function l(e){var t=a["a"].state.CONTENT_IMGS,n=parseInt(e),r={imgs:t,index:n};console.log(r);var i=a["a"].state.UA.indexOf("closer-ios")>-1;i?window.WebViewJavascriptBridge&&setupWebViewJavascriptBridge(function(e){e.callHandler("tapImage",r)}):"undefined"!=typeof window.bridge&&window.bridge.tapImage(JSON.stringify(r))}function d(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n}},f121:function(e,t,n){"use strict";t["a"]={fileUrl:"https://file.tiejin.cn",fileDevUrl:"https://file-sandbox.tiejin.cn",serverUrl:"https://api.tiejin.cn/command/",devserverUrl:"http://10.3.0.11:8080/command/",subdevserverUrl:"http://oms-sandbox.tiejin.cn/command",serverDevUrl:"https://api-sandbox.tiejin.cn/command/",downUrl:"http://a.app.qq.com/o/simple.jsp?pkgname=com.ums.closer",wxLoginDevUrl:"https://h5-sandbox.tiejin.cn/redirect?redirectUrl=https://a-sandbox.tiejin.cn/teabar/water-9d3foyvita",wxLoginUrl:"https://h5.tiejin.cn/redirect?redirectUrl=https://a.tiejin.cn/teabar/water-9ziqRidiYX",file:"/file/upload/public"}}});
//# sourceMappingURL=app.42cfb7cf.js.map