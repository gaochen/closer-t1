(function(e){function t(t){for(var a,r,o=t[0],s=t[1],u=t[2],d=0,l=[];d<o.length;d++)r=o[d],i[r]&&l.push(i[r][0]),i[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);p&&p(t);while(l.length)l.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(a=!1)}a&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i={app:0},c=[];function o(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-3573":"3d1115dd","chunk-60a7":"5f3cadcb"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-3573":1,"chunk-60a7":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-3573":"38886f02","chunk-60a7":"ae9f1374"}[e]+".css",r=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var o=i[c],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===a||u===r))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){o=d[c],u=o.getAttribute("data-href");if(u===a||u===r)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var a=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.request=a,n(i)},l.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(l)}).then(function(){r[e]=0}));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise(function(t,n){a=i[e]=[t,n]});t.push(a[2]=c);var u,d=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(e),u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");c.type=a,c.request=r,n[1](c)}i[e]=void 0}};var p=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,d.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2f74":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],c={name:"App"},o=c,s=n("2877"),u=Object(s["a"])(o,r,i,!1,null,null,null),d=u.exports,l=(n("6423"),n("2f74"),n("6573"),n("aa35"),n("7f7f"),n("8c4f")),p=(n("7c15"),n("ed08")),A=n("c0d6"),m=(n("76a0"),function(){return n.e("chunk-3573").then(n.bind(null,"e878"))}),f=function(){return n.e("chunk-60a7").then(n.bind(null,"8927"))};a["default"].use(l["a"]);var h=new l["a"]({mode:"history",routes:[{path:"/article/:id",name:"article",component:f},{path:"/comment/:sid",name:"comment",component:m}]});h.beforeEach(function(e,t,n){var a=e.meta;e.path,e.query,e.name,e.params;document.title=a.title?a.title:"贴近";var r=navigator.userAgent||window.navigator.userAgent;r=r.toLowerCase(),A["a"].state.UA=r,A["a"].state.V_1_2=Object(p["b"])(r),A["a"].state.IS_APP=Object(p["d"])(r),n()});var g=h,v=n("bc3a"),_=n.n(v),b=n("f121"),w=_.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).BASE_API,timeout:15e3,withCredentials:!0});w.interceptors.request.use(function(e){var t=b["a"].serverDevUrl+e.url;return/a-sandbox.tiejin/.test(window.location.href)?t=b["a"].serverDevUrl+e.url:/a.tiejin/.test(window.location.href)&&(t=b["a"].serverUrl+e.url),e.url=t,A["a"].state.IS_APP?A["a"].state.UA.indexOf("closer-ios")>-1?e.headers["Closer-Agent"]="Closer-Ios":A["a"].state.UA.indexOf("closer-android")>-1&&(e.headers["Closer-Agent"]="Closer-Android"):e.headers["Closer-Agent"]="Closer-H5",Cookies.get("uid")&&(e.headers["X-Udid"]=Cookies.get("uid")),Cookies.get("aid")&&(e.headers["X-Adid"]=Cookies.get("aid")),(Cookies.get("GroukAuth")&&-1==e.url.indexOf("auth")&&-1==e.url.indexOf("account")||Cookies.get("GroukAuth")&&-1!=e.url.indexOf("closer_account.bind_phone"))&&(e.headers.Authorization=Cookies.get("GroukAuth")),e},function(e){return Promise.reject(e).catch(e)}),w.interceptors.response.use(function(e){return e},function(e){var t=n("07f7").default;if(e&&e.response)switch(e.response.status){case 400:e.message="请求错误";break;case 401:e.message="未授权，请登录",router.push({name:"worldcupIndex"});break;case 403:e.message="拒绝访问",router.push({name:"worldcupIndex"});break;case 404:e.message="请求地址出错: ".concat(e.response.config.url);break;case 408:e.message="请求超时";break;case 500:e.message="服务器内部错误";break;case 501:e.message="服务未实现";break;case 502:e.message="网关错误";break;case 503:e.message="服务不可用";break;case 504:e.message="网关超时";break;case 505:e.message="HTTP版本不受支持";break;default:}else e.message="网络错误，请稍后再试！";return e&&e.response&&e.response.data&&e.response.data.message?console.warn(e.response.data.message):console.warn(e.message),t.reject(e).catch(e)});var x=w,y=n("a78e"),k=n.n(y),E=n("3a34"),j=n.n(E),T=n("c6c6"),C=n.n(T),O=(n("18a0"),n("283e")),S=n.n(O);if(/sandbox.tiejin/.test(window.location.href)||/127.0.0.1/.test(window.location.href)||/local.tiejin.cn/.test(window.location.href)){new j.a;A["a"].state.IS_DEV=!0}function U(){var e=Math.min(screen.width,document.documentElement.getBoundingClientRect().width)/375*16;document.documentElement.style.fontSize=(e>=32?32:e)+"px"}A["a"].state.IS_DEV=!0,A["a"].state.UA=window.Axios=x,window.Cookies=k.a,window.MobileDetect=C.a,window.setupWebViewJavascriptBridge=function(e){if(window.WebViewJavascriptBridge)return e(WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(e);window.WVJBCallbacks=[e];var t=document.createElement("iframe");t.style.display="none",t.src="https://__bridge_loaded__",document.documentElement.appendChild(t),setTimeout(function(){document.documentElement.removeChild(t)},0)},a["default"].use(S.a,{preload:1.3,error:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAGmAQMAAAAZMJMVAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURefn5ySG6Q8AAAA+SURBVHja7cExAQAAAMKg9U9tCj+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAvwGcmgABBZ8R+wAAAABJRU5ErkJggg==",loading:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAGmAQMAAAAZMJMVAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURefn5ySG6Q8AAAA+SURBVHja7cExAQAAAMKg9U9tCj+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAvwGcmgABBZ8R+wAAAABJRU5ErkJggg==",attempt:1}),U(),window.onresize=U,new a["default"]({store:A["a"],router:g,render:function(e){return e(d)}}).$mount("#app")},6423:function(e,t,n){},6573:function(e,t,n){},"7c15":function(e,t,n){"use strict";var a,r=n("a322");t["a"]={admin:{get_auth_path:"closer_auth.get_auth_path",login_with_wechat:"closer_auth.login_with_wechat",closeruser_regist:"closer_auth.closeruser_regist",get_code_by_phone:"closer_account.get_code_by_phone_v2",check:"closer_account.check",check_wechat:"closer_account.check_wechat",info:"closer_user.info",user_show:"closer_user.show",bind_phone:"closer_account.bind_phone",like:"closer_reply.like",add_reply:"closer_reply.add_reply",invite_counts:"closer_user.invite_counts",wechat_config:"closer_share.wechat_config"},command:{show:"closer_subject.show",incr_view:"closer_subject.incr_view",comments:"closer_reply.comments",videos:"ali_vod.accessInfo",report:"closer_report.add",like:"closer_reply.like",add_reply:"closer_reply.add_reply",replys:"closer_reply.replys",reportType:"closer_report.get_report_types"},community:{show:"closer_community.show",community_subject_list_index:"closer_subject.community_subject_list_index",subscription:"closer_community.subscription"},group:{show:"closer_class.show",recruiting:"closer_class.recruiting",group_subject_list:"closer_subject.class_subject_list_index",share_group:"closer_share.outer_group"},activity:(a={get_activity:"closer_activity.get_activity",add_channel:"activity_worldcup.add_channel",check_guess_result:"activity_worldcup.check_guess_result",get_match_list:"activity_worldcup.get_match_list",get_user_guess_list:"activity_worldcup.get_user_guess_list",get_user_guess_statistic:"activity_worldcup.get_user_guess_statistic",guess_match:"activity_worldcup.guess_match",receive_chance:"activity_worldcup.receive_chance"},Object(r["a"])(a,"check_guess_result","activity_worldcup.check_guess_result"),Object(r["a"])(a,"activity_water_chance","activity_water.chance"),Object(r["a"])(a,"activity_water_update","activity_water.update"),Object(r["a"])(a,"activity_water_join","activity_water.join"),Object(r["a"])(a,"get_invite_statistic","closer_invite.get_statistic"),Object(r["a"])(a,"get_invitee_page_list","closer_invite.get_invitee_page_list"),Object(r["a"])(a,"get_yesterday_award_amt","closer_invite.get_yesterday_award_amt"),Object(r["a"])(a,"remind_login","closer_invite.remind_login"),a),statitics:{view_count:"closer_promotion_activity.view_count",get_adcookie:"closer_statistics.get_adcookie"}}},"801a":function(e,t,n){"use strict";n.d(t,"a",function(){return i});n("96cf");var a=n("3040"),r=n("7c15");function i(e){return c.apply(this,arguments)}function c(){return c=Object(a["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Axios.get("".concat(r["a"].command.show,"?subjectid=").concat(t)).then(function(e){return e.data}));case 1:case"end":return e.stop()}},e,this)})),c.apply(this,arguments)}},c0d6:function(e,t,n){"use strict";var a=n("2b0e"),r=n("2f62"),i=(n("3b2b"),n("a481"),n("4917"),n("96cf"),n("3040")),c=n("801a"),o=n("fa7d"),s={GET_MESSAGE_STATE:!1,GET_IS_APP:!1,GET_APP_TOKEN:"",version_1_2:!1,agent:"",isPre:!1,nvgversion:"",nvgtype:"",nvgTypeToPowerCase:"",res:{},content:{},discuss:{},isLongVideo:!1,webNoFooter:!0,exist:!1,incr_view:0,alert_stat:!1},u={fetch_content:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,n){var a,r,i,s,u,d,l;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,r=t.state,i=n.id,e.prev=2,e.next=5,Object(c["a"])(i);case 5:s=e.sent,0!=s.code||(s.result.content&&(u=JSON.parse(s.result.content),2===s.result.int_type&&(d=Object(o["c"])(u.html,r.GET_MESSAGE_STATE),d&&(u.html=d),3===s.result.int_category&&u.end_html&&(l=Object(o["c"])(u.end_html,r.GET_MESSAGE_STATE),l&&(u.end_html=l))),u.discuss&&u.discuss.map(function(e){if(e.text){var t=/(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g,n=e.text.match(t);n?(e.weblink=!0,n.map(function(n){var a='<a href="'.concat(n,'" target="_blank">').concat(n,"</a>"),r=e.text.replace(t,a);e.newText=r})):e.weblink=!1}return e}),a("SET_CONTENT",u)),a("SET_RES",s.result)),e.next=13;break;case 9:throw e.prev=9,e.t0=e["catch"](2),a("GET_EXIST_STATUS",!1),e.t0;case 13:case"end":return e.stop()}},e,this,[[2,9]])}));return function(t,n){return e.apply(this,arguments)}}(),get_community_focus_stat:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n,a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.state,e.next=3,Object(c["getCommunityFocusStat"])(a.res.communityid);case 3:r=e.sent,0===r.code&&r.result.isFollowed&&n("SET_FOCUS_STAT",r.result.isFollowed);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),get_incr_view:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=this,e.prev=2,{subjectid:n.$route.params.id},e.next=6,axios.get("".concat(api.command.incr_view,"?subjectid=").concat(n.$route.params.id,"&timestamp=").concat(Date.now()));case 6:a=e.sent,0===a.code&&n.$store.commit("GET_INCR_VIEW",a.result),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](2),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[2,10]])}));return function(t){return e.apply(this,arguments)}}(),get_code_by_login:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,n){var a,r,i,c,o,s,u,d,l,p,A,m,f,h;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.commit,r=n.code,i=n.inv_id,c=n.type,o=this,!c||"bonus"!==c){e.next=26;break}return p={code:r},e.next=7,o.$axios.$post("".concat(api.admin.check_wechat),p);case 7:if(A=e.sent,0==A.code){e.next=12;break}return e.abrupt("return",!1);case 12:if(!A.result.hasRegist){e.next=16;break}return e.abrupt("return",!1);case 16:u=A.result.unionId,d=A.result.nickName,l=A.result.avatar;case 19:if(!i){e.next=23;break}s={unionid:u,inviter:i,nickName:d,avatar:l,protocol:"WEB_SOCKET",udid:Cookie.get("h5Cookies"),adid:Cookie.get("h5Adid")||"closer-invitenew"},e.next=24;break;case 23:return e.abrupt("return",!1);case 24:e.next=27;break;case 26:s={plateform:2,code:r,protocol:"WEB_SOCKET",udid:Cookie.get("h5Cookies"),adid:Cookie.get("h5Adid")||"closer-share"};case 27:return e.next=29,o.$axios.$post("".concat(api.admin.login_with_wechat),s);case 29:if(m=e.sent,0!==m.code){e.next=40;break}return f={gender:m.result.user.gender,phones:m.result.user.phones,updateTime:m.result.user.updateTime,avatar:m.result.user.avatar,createTime:m.result.user.createTime,teamID:m.result.user.teamID,fullname:m.result.user.fullname,security_signal:m.result.user.security_signal,objectID:m.result.user.objectID,email:m.result.user.email,username:m.result.user.username,status:m.result.user.status},h=m.result.token,Cookie.set("token",h,{expires:7}),Cookie.set("user",f,{expires:7}),a("SET_USER",f),a("SET_TOKEN",h),e.abrupt("return",!0);case 40:return e.abrupt("return",!1);case 41:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),get_token_by_login:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,n){var a,r,i,c,o,s,u,d,l,p,A;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.commit,r=n.phone,i=n.token,c=n.type,e.prev=2,o=this,!c||"bonus"!==c){e.next=22;break}return s={type:"phone",code:r},e.next=8,o.$axios.$post("".concat(api.admin.check),s);case 8:if(u=e.sent,0==u.code){e.next=13;break}return Toast({message:"您不是新用户或者您已经领取过了",position:"top"}),location.href="/invite/alreadyget",e.abrupt("return",!1);case 13:if(!Cookie.get("inviter")){e.next=18;break}d=JSON.parse(Cookie.get("inviter")),s={phone:r,token:i,inviter:d.id,udid:Cookie.get("h5Cookies"),adid:Cookie.get("h5Adid")||"closer-invitenew",protocol:"WEB_SOCKET"},e.next=20;break;case 18:return Toast({message:"该账号没有被邀请",position:"top"}),e.abrupt("return",!1);case 20:e.next=23;break;case 22:s={phone:r,token:i,udid:Cookie.get("h5Cookies"),protocol:"WEB_SOCKET",adid:Cookie.get("h5Adid")||"closer-share"};case 23:return e.next=25,o.$axios.$post("".concat(api.admin.closeruser_regist),s);case 25:if(l=e.sent,0!==l.code){e.next=37;break}return p={gender:l.result.user.gender,phones:l.result.user.phones,updateTime:l.result.user.updateTime,avatar:l.result.user.avatar,createTime:l.result.user.createTime,teamID:l.result.user.teamID,fullname:l.result.user.fullname,security_signal:l.result.user.security_signal,objectID:l.result.user.objectID,email:l.result.user.email,username:l.result.user.username,status:l.result.user.status},A=l.result.token,Cookie.set("token",A,{expires:7}),Cookie.set("user",p,{expires:7}),a("SET_USER",p),a("SET_TOKEN",A),c&&"bonus"===c&&Toast({message:"领取成功，前往App直接领取",position:"top"}),e.abrupt("return",!0);case 37:return Toast({message:l.result,position:"top"}),e.abrupt("return",!1);case 39:e.next=45;break;case 41:throw e.prev=41,e.t0=e["catch"](2),Toast({message:"throw new error not be normal",position:"top"}),e.t0;case 45:case"end":return e.stop()}},e,this,[[2,41]])}));return function(t,n){return e.apply(this,arguments)}}(),get_focus_stat:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,n){var a,r,i,c,o,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,r=n.communityid,i=n.flag,c=this,e.prev=3,o={communityid:r,flag:i},e.next=7,c.$axios.$post("".concat(api.community.subscription),o);case 7:if(s=e.sent,0!==s.code){e.next=17;break}if(0!=i){e.next=13;break}a("SET_FOCUS_STAT",!1),e.next=15;break;case 13:return a("SET_FOCUS_STAT",!0),e.abrupt("return",!0);case 15:e.next=18;break;case 17:Toast({message:s.result,position:"top"});case 18:e.next=23;break;case 20:e.prev=20,e.t0=e["catch"](3),Toast({message:e.t0,position:"top"});case 23:case"end":return e.stop()}},e,this,[[3,20]])}));return function(t,n){return e.apply(this,arguments)}}()},d={GET_USER_AGENT:function(e,t){var n=t.nvg.toLowerCase(),a=t.ref,r=n.indexOf("closer-ios")>-1||n.indexOf("closer-android")>-1,i=r||a.indexOf("/invite")>-1;e.version_1_2=Object(o["a"])(n),e.GET_MESSAGE_STATE=!i,e.GET_IS_APP=r,e.agent=n,e.isPre=a.indexOf("?view=pre")>-1},GET_VERSION:function(e){var t,n,a,r=navigator.userAgent.toLowerCase();if(r.indexOf("android")>-1||r.indexOf("adr")>-1||r.indexOf("linux")>-1){if(t="android",a="Android",r.match(new RegExp("android\\s(\\d+(?:\\.\\d*)+)"))){var i=r.match(new RegExp("android\\s(\\d+(?:\\.\\d*)+)"));n=i[1].replace(/\./g,"_")}}else if(r.indexOf("iphone")>-1||r.indexOf("ipad")>-1||r.indexOf("safari")>-1){if(t="ios",a="IOS",r.match(new RegExp("version/(\\d+(?:\\.\\d*)+)"))){var c=r.match(new RegExp("version/(\\d+(?:\\.\\d*)+)"));n=c[1].replace(/\./g,"_")}}else t="windows",a="Windows";e.nvgversion=n,e.nvgtype=t,e.nvgTypeToPowerCase=a},SET_CONTENT:function(e,t){e.content=t},SET_RES:function(e,t){e.res=t},GET_EXIST_STATUS:function(e,t){e.exist=t}},l={state:s,actions:u,mutations:d};n("7c15");n("76a0");var p=n("ed08"),A={namespaced:!0,state:{discuss:{},content:{},subject:{}},mutations:{setContent:function(e,t){e.content=t,console.timeEnd()},setDiscuss:function(e,t){console.log("discuss",t),e.discuss=t},setSubject:function(e,t){console.log("subject",t),e.subject=t}},actions:{getSubject:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,n){var a,r,i,c,o,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:a=t.commit,console.time(),r={result:{double_longitude:0,long_time_line:0,int_post_limit:4,int_use:0,bool_delete:!1,bool_tip:!1,className:"19群组名群凤凤栏目1-名",isOffical:!1,title:"19群的神议论-请勿删除",int_read:1,userid:"9cvwbcsKxN",content:'{"summary":"这是描述文案","html":"<p>&#36825;&#26159;&#25551;&#36848;&#25991;&#26696;<\\/p><p>&#19979;&#38754;&#26159;&#22270;&#29255;<\\/p><p><img src=\\"http:\\/\\/file-sandbox.tiejin.cn\\/public\\/9ElLfd9ISi\\/IMG_20180717_151634.jpg.jpg\\" width=\\"2016\\" height=\\"1512\\" size=\\"1513616\\" \\/><\\/p><p>&#19979;&#38754;&#26159;&#35270;&#39057;<\\/p><p><video vid=\\"fcdff29ae04744ccb29cb9fe5e4967db\\" src=\\"http:\\/\\/video.tiejin.cn\\/sv\\/18bb5c03-164a7221d50\\/18bb5c03-164a7221d50.mp4\\" imageUrl=\\"http:\\/\\/video.tiejin.cn\\/image\\/cover\\/202304E262B54047B60AFEDD777F0A77-6-2.png\\" width=\\"720\\" height=\\"1456\\" duration=\\"3274.0\\" size=\\"425912\\" \\/><\\/p>","end_html":"<p>&#36825;&#26159;&#24635;&#32467;&#25991;&#26696;<\\/p><p>&#23567;&#38754;&#26159;&#22270;&#29255;<\\/p><p><img src=\\"http:\\/\\/file-sandbox.tiejin.cn\\/public\\/9ElLg4Cyjt\\/IMG_20180717_151650.jpg.jpg\\" width=\\"1512\\" height=\\"2016\\" size=\\"1593633\\" \\/><\\/p><p>&#19979;&#38754;&#26159;&#35270;&#39057;<\\/p><p><video vid=\\"827f9b69de1f4751af24089f432fd011\\" src=\\"http:\\/\\/video.tiejin.cn\\/sv\\/8213efc-164a7221d04\\/8213efc-164a7221d04.mp4\\" imageUrl=\\"http:\\/\\/video.tiejin.cn\\/image\\/cover\\/FAD1AF9B64D1443DBFC72993E78DD42D-6-2.png\\" width=\\"720\\" height=\\"1456\\" duration=\\"4733.0\\" size=\\"660711\\" \\/><\\/p>","discuss":[{"createTime":1531811722023,"nickname":"00083我我也nfncmbkv","avatar":"\\/avatar\\/u\\/9f1mt2zKIF?v=1529923996433","id":"9ElBYeFpct","text":"Jdjdjdjdz","type":0,"userId":"9f1mt2zKIF"},{"createTime":1531811724516,"nickname":"集体伺候我是002","avatar":"\\/avatar\\/u\\/8Vrm1jbf4B?v=1526613902922","id":"9ElBZYhlxU","text":"某事607你这个","type":0,"userId":"9cw7PJ1hLd"},{"createTime":1531811727364,"nickname":"凤凤栏目主名","avatar":"\\/public\\/9s1LnfdCqZ\\/temp.jpg","id":"9ElC2zhIz0","text":" 图库洛牌","type":0,"userId":"9cvwbcsKxN"},{"image":{"size":0,"link":"\\/public\\/9ElCbecZin\\/1531809186.jpg","width":828,"height":828},"createTime":1531811737529,"nickname":"00083我我也nfncmbkv","avatar":"\\/avatar\\/u\\/9f1mt2zKIF?v=1529923996433","id":"9ElCbeciKn","text":"","type":1,"userId":"9f1mt2zKIF"},{"createTime":1531811765450,"nickname":"集体伺候我是002","avatar":"\\/avatar\\/u\\/8Vrm1jbf4B?v=1526613902922","id":"9ElCztovIv","text":"","video":{"duration":0.0,"vid":"29666050af0846378847fc6bee92ebcd","size":0,"src":"http:\\/\\/video.tiejin.cn\\/sv\\/c14387e-164a71895e3\\/c14387e-164a71895e3.mp4","imageUrl":"http:\\/\\/video.tiejin.cn\\/image\\/cover\\/1F81294CFEE548C8978FF6E0C6FE1BD0-6-2.png","width":0,"height":0},"type":2,"userId":"9cw7PJ1hLd"},{"feed":{"summary":"[图片][图片][图片]","feedId":"wmJ5IrsVKFgv","feedType":0,"imageUrl":"\\/public\\/9ElDNG0vzi\\/IMG_20180717_151634.jpg.jpg","title":"图集贴-用户发帖"},"createTime":1531811854697,"nickname":"凤凤栏目主名","avatar":"\\/public\\/9s1LnfdCqZ\\/temp.jpg","id":"9ElDOxsEss","text":"wmJ5IrsVKFgv","type":3,"userId":"9cvwbcsKxN"},{"feed":{"summary":"[视频]","feedId":"wmJ5Wbcf3b7e","feedType":1,"imageUrl":"http:\\/\\/video.tiejin.cn\\/image\\/cover\\/EB4810D3D26B47198CE92B758F2F3F4D-6-2.png","title":"Android拍摄视频贴"},"createTime":1531811898171,"nickname":"集体伺候我是002","avatar":"\\/avatar\\/u\\/8Vrm1jbf4B?v=1526613902922","id":"9ElEqDCo1T","text":"wmJ5Wbcf3b7e","type":3,"userId":"9cw7PJ1hLd"},{"feed":{"summary":"[视频]","feedId":"wmJ69UVylGXX","feedType":1,"imageUrl":"http:\\/\\/video.tiejin.cn\\/image\\/cover\\/55D70AFA28744496A4A4B7B3DD0DBA98-6-2.jpg","title":"ios拍摄视频贴"},"createTime":1531811942712,"nickname":"00083我我也nfncmbkv","avatar":"\\/avatar\\/u\\/9f1mt2zKIF?v=1529923996433","id":"9ElF2K6a90","text":"wmJ69UVylGXX","type":3,"userId":"9f1mt2zKIF"},{"createTime":1531811978593,"nickname":"00083我我也nfncmbkv","avatar":"\\/avatar\\/u\\/9f1mt2zKIF?v=1529923996433","id":"9ElFxUB0X5","text":"","video":{"duration":0.0,"vid":"c5118d1265df4113b111e00ff21ae77d","size":0,"src":"http:\\/\\/video.tiejin.cn\\/c5118d1265df4113b111e00ff21ae77d\\/199e6a3afa3f400a9a129b514072b082-d4c7e8bf879f94da3a840dc4f1f78a1a-ld.mp4","imageUrl":"http:\\/\\/video.tiejin.cn\\/image\\/cover\\/AE88162AC59941208F6C43435890C7FE-6-2.jpg","width":0,"height":0},"type":2,"userId":"9f1mt2zKIF"},{"createTime":1531811994156,"nickname":"00083我我也nfncmbkv","avatar":"\\/avatar\\/u\\/9f1mt2zKIF?v=1529923996433","id":"9ElFLLAJW8","text":" Ios横向拍摄","type":0,"userId":"9f1mt2zKIF"},{"feed":{"summary":"哈哈哈","feedId":"wmJ6MWDuNn71","feedType":2,"imageUrl":"\\/public\\/9ElGM7fdbB\\/crop_1531812010867.png.jpg","title":"群组内发帖"},"createTime":1531812067832,"nickname":"凤凤栏目主名","avatar":"\\/public\\/9s1LnfdCqZ\\/temp.jpg","id":"9ElGMZ3B0a","text":"wmJ6MWDuNn71","type":3,"userId":"9cvwbcsKxN"},{"createTime":1531812127578,"nickname":"集体伺候我是002","avatar":"\\/avatar\\/u\\/8Vrm1jbf4B?v=1526613902922","id":"9ElHCWaRaX","text":"https:\\/\\/www.baidu.com","type":0,"userId":"9cw7PJ1hLd"},{"createTime":1531812166030,"nickname":"00083我我也nfncmbkv","avatar":"\\/avatar\\/u\\/9f1mt2zKIF?v=1529923996433","id":"9ElIaI2jVz","text":"http:\\/\\/www.baidu.com","type":0,"userId":"9f1mt2zKIF"},{"createTime":1531812096728,"nickname":"集体伺候我是002","avatar":"\\/avatar\\/u\\/8Vrm1jbf4B?v=1526613902922","id":"9ElHc5EeE1","text":"www.baidu.com","type":0,"userId":"9cw7PJ1hLd"}]}',cover:"/public/9ElLelmQTr/default.jpg.jpg",view:219,double_latitude:0,release_subjectid:"0",int_verify:1,int_release_type:1,long_publish_time:1533189337461,communityName:"凤凤测试栏目1",blogo:"http://file-sandbox.tiejin.cn/public/9cw0i80BHG/1526642448000.jpg",long_create_time:1531812389417,bool_task:!1,int_category:3,commentNumber:26,long_like:0,like:0,int_type:2,isTask:!1,region_id:"wfXYXEpsBEyN",long_view:200,subjectid:"wmJ8ptL07jte",long_update_time:1533525923948,tags:"0",long_share:4,int_cover_mode:0,verify_user:"wi4ThMgunRmN",classid:"9f32omiOVs",communityid:"9cvwbctrap",long_modify_time:0,user:{gender:2,attributes:{roster:{uid:"9cvwbcsKxN",gender:0,name:"我是花名",attributes:{security_signal:"02810000107"},id:"9s1LpQfvi7",avatar:"/public/9s1LnfdCqZ/temp.jpg",community:"9cvwbctrap"}},fullname:"凤凤栏目主名哈哈xx",avatar:"/avatar/u/9cvwbcsKxN?v=1529488290734",username:"12081040001"}},code:0},"undefined"!=typeof r.code&&0==r.code&&r.result.content&&(i=JSON.parse(r.result.content),2===r.result.int_type&&(c=Object(p["f"])(i.html,!1),c&&(i.html=c),3===r.result.int_category&&i.end_html&&(o=Object(p["f"])(i.end_html,!1),o&&(i.end_html=o))),i.discuss&&(s=i.discuss.map(function(e){if(e.text){var t=/(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g,n=e.text.match(t);n?(e.weblink=!0,n.map(function(n){var a='<a href="'.concat(n,'" target="_blank">').concat(n,"</a>"),r=e.text.replace(t,a);e.newText=r})):e.weblink=!1}return e}),a("setDiscuss",s)),a("setContent",i),delete r.result.content,a("setSubject",r.result));case 4:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}};a["default"].use(r["a"]);t["a"]=new r["a"].Store({state:{UA:"",IS_APP:!1,IS_NEW_USER:!1,IS_DEV:!1},modules:{article:l,comment:A}})},ed08:function(e,t,n){"use strict";n.d(t,"f",function(){return i}),n.d(t,"e",function(){return c}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return s}),n.d(t,"b",function(){return u}),n.d(t,"d",function(){return d});n("a481"),n("ac6a"),n("4917"),n("28a5");var a=n("f121"),r=n("c0d6");function i(e,t){var n=/<img.*?(?:>|\/>)/gi,a=e.match(n);if(a){var r=/src=[\'\"]?([^\'\"]*)[\'\"]?/i,i=/width=[\'\"]?([^\'\"]*)[\'\"]?/i,c=/height=[\'\"]?([^\'\"]*)[\'\"]?/i;a.forEach(function(t,n){var a,o,s,u=t.match(r),d=t.match(i),l=t.match(c);u?d&&l?(d[1]<200?(a=d[1]+"px",s=l[1]+"px"):(a="100%",s=100*l[1]/d[1]+"%"),s,o=t.replace(/src=/g,'style="width: '.concat(a,";height: 0; padding-bottom: ").concat(s,'; background: #e7e7e7; max-width: 100%;" data-feedlazy="feedlazy" data-index="').concat(n+1,'" data-src='))):(a="100%",s="auto","28.27vw",o=t.replace(/src=/g,'style="width: '.concat(a,'; background: #e7e7e7; max-width: 100%;" data-feedlazy="feedlazy2" data-index="').concat(n+1,'" data-src='))):o="",e=e.replace(t,o)})}var o=/<video.*?(?:>|\/>|<\/video>)/gi,s=e.match(o);if(s){var u,d=/src=[\'\"]?([^\'\"]*)[\'\"]?/i,l=/vid=[\'\"]?([^\'\"]*)[\'\"]?/i,p=/imageUrl=[\'\"]?([^\'\"]*)[\'\"]?/i,A=/poster=[\'\"]?([^\'\"]*)[\'\"]?/i;s.forEach(function(n,a){var r,i,c,o=n.match(d),s=n.match(l),m=n.match(p),f=n.match(A);r=s?s[1]:"",i=o?o[1]:"",c=m?m[1]:f?f[1]:"",u=t?"<section \n                    class='imgbox tiejin-videobox'\n                    data-vid='".concat(r,"'\n                    data-uid='").concat(i,"'\n                    >\n                    <video src='").concat(o[1],"'\n                      class='feed-video-bg'\n                      controls\n                      preload='none'\n                      data-bg='").concat(c,"'>\n                    </video>\n                  </section>"):"<section \n                    class='imgbox video-native-player tiejin-videobox-native feed-video-bg'\n                    data-vid='".concat(r,"'\n                    data-uid='").concat(i,"'\n                    data-bg='").concat(c,"'\n                    style='background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAGmAQMAAAAZMJMVAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURefn5ySG6Q8AAAA+SURBVHja7cExAQAAAMKg9U9tCj+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAvwGcmgABBZ8R+wAAAABJRU5ErkJggg==\");'>\n                    <section \n                      class='flex \n                      flex-align-center \n                      flex-pack-center'\n                      data-vid='").concat(r,"'\n                      data-uid='").concat(i,"'\n                      >\n                      <span \n                        class='icon-shipin-2' \n                        data-vid='").concat(r,"'\n                        data-uid='").concat(i,"'\n                        >\n                      </span>\n                    </section>\n                  </section>"),e=e.replace(n,u)})}var m=/<iframe.*?(?:>|\/>|<\/iframe>)/gi,f=e.match(m);if(f){var h=/width=[\'\"]?([^\'\"]*)[\'\"]?/i,g=/height=[\'\"]?([^\'\"]*)[\'\"]?/i;f.forEach(function(t,n){var a=t.match(h),r=t.match(g),i=t.split(a[0]),c="".concat(i[0],'width="100%"').concat(i[1]),o=c.split(r[0]),s="".concat(o[0],' height="240" ').concat(o[1]),u='<section class="imgbox tiejin-iframe">\n                  '.concat(s,"</iframe>\n                </section>");e=e.replace(t,u)})}return e}function c(e,t,n){var i=a["a"].fileUrl;if(r["a"].state.IS_DEV&&(i=a["a"].fileDevUrl),e){var c=n||500;return"src"===t?-1!==e.indexOf("://")?e+"?s="+c:i+e+"?s="+c:-1!==e.indexOf("://")?e:i+e}}function o(e,t){var n=new Date(e),a=new Date,r=n.getTime(n),i=a.getTime(a),c=i-r,o=c/1e3/60/60/24/30,s=Math.floor(o),u=c/1e3/60/60/24,d=Math.floor(u),l=c/1e3/60/60-24*d,p=Math.floor(l),A=c/1e3/60-1440*d-60*p,m=Math.floor(A),f=c/1e3-86400*d-3600*p-60*m,h=Math.floor(f);return s>1?s+"个月前":d>0?d+"天前":p>0?p+"小时前":m>10?m+"分钟前":h>0?"刚刚":void 0}function s(e,t){var n=e||null,a=t||null;console.log(e,"---",t);var i=r["a"].state.UA.indexOf("closer-ios")>-1;r["a"].state.V_1_2?i?window.WebViewJavascriptBridge&&this.setupWebViewJavascriptBridge(function(e){e.callHandler("playVideo",{vid:n,url:a})}):"undefined"!=typeof window.bridge&&window.bridge.playVideo(n,a):location.href="/?vid=".concat(n)}function u(e){try{var t=e.split("closerapp/version/")[1].split(".");return t[0]>1||1==t[0]&&t[1]&&t[1]>1||1==t[0]&&1==t[1]&&t[2]&&t[2]>100}catch(e){return!1}}function d(e){return e.indexOf("closer-ios")>-1||e.indexOf("closer-android")>-1}},f121:function(e,t,n){"use strict";t["a"]={fileUrl:"https://file.tiejin.cn",fileDevUrl:"https://file-sandbox.tiejin.cn",serverUrl:"https://api.tiejin.cn/command/",devserverUrl:"http://10.3.0.11:8080/command/",subdevserverUrl:"http://oms-sandbox.tiejin.cn/command",serverDevUrl:"https://api-sandbox.tiejin.cn/command/",downUrl:"http://a.app.qq.com/o/simple.jsp?pkgname=com.ums.closer",wxLoginDevUrl:"https://h5-sandbox.tiejin.cn/redirect?redirectUrl=https://a-sandbox.tiejin.cn/teabar/water-9d3foyvita",wxLoginUrl:"https://h5.tiejin.cn/redirect?redirectUrl=https://a.tiejin.cn/teabar/water-9ziqRidiYX",file:"/file/upload/public"}},fa7d:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"b",function(){return r}),n.d(t,"a",function(){return i});n("a481"),n("ac6a"),n("4917"),n("28a5");function a(e,t){var n=/<img.*?(?:>|\/>)/gi,a=e.match(n);if(a){var r=/src=[\'\"]?([^\'\"]*)[\'\"]?/i,i=/width=[\'\"]?([^\'\"]*)[\'\"]?/i,c=/height=[\'\"]?([^\'\"]*)[\'\"]?/i;a.forEach(function(t,n){var a,o,s,u=t.match(r),d=t.match(i),l=t.match(c);d&&l?d[1]<200?(a=d[1]+"px",s=l[1]+"px"):(a="100%",s=100*l[1]/d[1]+"%"):(a="100%",s="auto"),u?(u[1].replace(/\+/g,"%2b"),o=t.replace(/src=/g,'style="width: '.concat(a,";height: 0; padding-bottom: ").concat(s,'; background: #e7e7e7; max-width: 100%;" data-feedlazy="feedlazy" class="imgbox" data-index="').concat(n+1,'" data-src='))):("",o=""),e=e.replace(t,o)})}var o=/<video.*?(?:>|\/>|<\/video>)/gi,s=e.match(o);if(s){var u,d=/src=[\'\"]?([^\'\"]*)[\'\"]?/i,l=/vid=[\'\"]?([^\'\"]*)[\'\"]?/i,p=/imageUrl=[\'\"]?([^\'\"]*)[\'\"]?/i,A=/poster=[\'\"]?([^\'\"]*)[\'\"]?/i,m=/width=[\'\"]?([^\'\"]*)[\'\"]?/i,f=/height=[\'\"]?([^\'\"]*)[\'\"]?/i;s.forEach(function(n,a){var r,i,c,o=n.match(d),s=n.match(l),h=n.match(p),g=n.match(A),v=n.match(m),_=n.match(f),b="100%",w="51.75vw",x=parseInt(_[1])/parseInt(v[1]);r=s?s[1]:"",i=o?o[1]:"",c=h?h[1]:g?g[1]:"",x>.5625&&(b="64vw",w="36vw"),u=t?"<section \n                  id='con-".concat(r,"'\n                  style='width:").concat(b,";min-height:").concat(w,"'\n                  class='imgbox tiejin-videobox'\n                  data-vid='").concat(r,"'\n                  data-uid='").concat(i,"'\n                  data-w='").concat(v[1],"'\n                  data-h='").concat(_[1],"'\n                  data-src='").concat(o[1],"'\n                  >\n                  \n                </section>"):"<section \n                  class='video-box video-box-native'\n                  data-vid='".concat(r,"'\n                  data-uid='").concat(i,"'\n                  data-bg='").concat(c,"'\n                  style='background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAGmAQMAAAAZMJMVAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURefn5ySG6Q8AAAA+SURBVHja7cExAQAAAMKg9U9tCj+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAvwGcmgABBZ8R+wAAAABJRU5ErkJggg==\");'>\n                  <section \n                    class='flex \n                    flex-align-center \n                    flex-pack-center'\n                    data-vid='").concat(r,"'\n                    data-uid='").concat(i,"'\n                    >\n                    <span \n                      class='icon-shipin-2' \n                      data-vid='").concat(r,"'\n                      data-uid='").concat(i,"'\n                      >\n                    </span>\n                  </section>\n                </section>"),e=e.replace(n,u)})}var h=/<iframe.*?(?:>|\/>|<\/iframe>)/gi,g=e.match(h);if(g){var v=/width=[\'\"]?([^\'\"]*)[\'\"]?/i,_=/height=[\'\"]?([^\'\"]*)[\'\"]?/i;g.forEach(function(t,n){var a=t.match(v),r=t.match(_),i=t.split(a[0]),c="".concat(i[0],'width="100%"').concat(i[1]),o=c.split(r[0]),s="".concat(o[0],' height="240" ').concat(o[1]),u='<section class="imgbox tiejin-iframe">\n                '.concat(s,"</iframe>\n              </section>");e=e.replace(t,u)})}return e}function r(e,t,n,a,r){if(!n){var i=t||null,c=e||null;a?r?window.WebViewJavascriptBridge&&this.setupWebViewJavascriptBridge(function(e){e.callHandler("playVideo",{vid:i,url:c})}):"undefined"!=typeof window.bridge&&window.bridge.playVideo(i,c):location.href="/?vid=".concat(i)}}function i(e){try{var t=e.split("closerapp/version/")[1].split(".");return t[0]>1||1==t[0]&&t[1]&&t[1]>1||1==t[0]&&1==t[1]&&t[2]&&t[2]>100}catch(e){return!1}}}});
//# sourceMappingURL=app.7f9323bd.js.map