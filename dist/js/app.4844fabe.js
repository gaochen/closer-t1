(function(e){function t(t){for(var r,a,o=t[0],s=t[1],u=t[2],l=0,d=[];l<o.length;l++)a=o[l],c[a]&&d.push(c[a][0]),c[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},c={app:0},i=[];function o(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-452d":"0bb372ad","chunk-7840":"69ccde2a"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-452d":1,"chunk-7840":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-452d":"38edcb41","chunk-7840":"04330e2b"}[e]+".css",a=s.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var o=c[i],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===r||u===a))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){o=l[i],u=o.getAttribute("data-href");if(u===r||u===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.request=r,n(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){a[e]=0}));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=c[e]=[t,n]});t.push(r[2]=i);var u,l=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=o(e),u=function(t){d.onerror=d.onload=null,clearTimeout(p);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}c[e]=void 0}};var p=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,l.appendChild(d)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2f74":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],i={name:"App"},o=i,s=n("2877"),u=Object(s["a"])(o,a,c,!1,null,null,null),l=u.exports,d=(n("6423"),n("2f74"),n("6573"),n("aa35"),n("a481"),n("4917"),n("7f7f"),n("8c4f")),p=(n("7c15"),n("c0d6")),h=(n("76a0"),function(){return n.e("chunk-7840").then(n.bind(null,"e878"))}),A=function(){return n.e("chunk-452d").then(n.bind(null,"8927"))};r["default"].use(d["a"]);var _=new d["a"]({mode:"history",routes:[{path:"/article/:id",name:"article",component:A},{path:"/comment/:sid",name:"comment",component:h}]});_.beforeEach(function(e,t,n){var r=e.meta,a=e.path,c=e.query,i=(e.name,e.params,a.match(/(?<=\/)[^\/]*(?=\/)?/g)),o=(i.length,c.type),s=c.category;switch(document.title=r.title?r.title:"贴近",i[0]){case"feed":"2"==o&&"0"==s?_.replace({path:a.replace("feed","article")}):"2"==o&&"1"==s?_.replace({path:a.replace("feed","draft")}):"2"==o&&"2"==s?_.replace({path:a.replace("feed","comment")}):n();break;default:n();break}});var f=_,m=n("bc3a"),g=n.n(m),v=n("f121"),w=g.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).BASE_API,timeout:15e3,withCredentials:!0});w.interceptors.request.use(function(e){var t=v["a"].serverDevUrl+e.url;return/t1-sandbox.tiejin/.test(window.location.href)?t=v["a"].serverDevUrl+e.url:/t1.tiejin/.test(window.location.href)&&(t=v["a"].serverUrl+e.url),e.url=t,p["a"].state.IS_APP?p["a"].state.UA.indexOf("closer-ios")>-1?e.headers["Closer-Agent"]="Closer-Ios":p["a"].state.UA.indexOf("closer-android")>-1&&(e.headers["Closer-Agent"]="Closer-Android"):e.headers["Closer-Agent"]="Closer-H5",Cookies.get("uid")&&(e.headers["X-Udid"]=Cookies.get("uid")),Cookies.get("aid")&&(e.headers["X-Adid"]=Cookies.get("aid")),(Cookies.get("GroukAuth")&&-1==e.url.indexOf("auth")&&-1==e.url.indexOf("account")||Cookies.get("GroukAuth")&&-1!=e.url.indexOf("closer_account.bind_phone"))&&(e.headers.Authorization=Cookies.get("GroukAuth")),e},function(e){return Promise.reject(e).catch(e)}),w.interceptors.response.use(function(e){return e},function(e){var t=n("07f7").default;if(e&&e.response)switch(e.response.status){case 400:e.message="请求错误";break;case 401:e.message="未授权，请登录",router.push({name:"worldcupIndex"});break;case 403:e.message="拒绝访问",router.push({name:"worldcupIndex"});break;case 404:e.message="请求地址出错: ".concat(e.response.config.url);break;case 408:e.message="请求超时";break;case 500:e.message="服务器内部错误";break;case 501:e.message="服务未实现";break;case 502:e.message="网关错误";break;case 503:e.message="服务不可用";break;case 504:e.message="网关超时";break;case 505:e.message="HTTP版本不受支持";break;default:}else e.message="网络错误，请稍后再试！";return e&&e.response&&e.response.data&&e.response.data.message?console.warn(e.response.data.message):console.warn(e.message),t.reject(e).catch(e)});var b=w,y=n("a78e"),x=n.n(y),k=n("3a34"),E=n.n(k),j=n("c6c6"),S=n.n(j),O=(n("18a0"),n("283e")),T=n.n(O),U=n("ed08");if(/sandbox.tiejin/.test(window.location.href)||/127.0.0.1/.test(window.location.href)||/local.tiejin.cn/.test(window.location.href)){new E.a;p["a"].state.IS_DEV=!0}function C(){var e=Math.min(screen.width,document.documentElement.getBoundingClientRect().width)/375*16;document.documentElement.style.fontSize=(e>=32?32:e)+"px"}function B(){var e=navigator.userAgent||window.navigator.userAgent;e=e.toLowerCase(),p["a"].state.UA=e,p["a"].state.V_1_2=Object(U["b"])(e),p["a"].state.IS_APP=Object(U["d"])(e)}p["a"].state.IS_DEV=!0,p["a"].state.UA=window.Axios=b,window.Cookies=x.a,window.MobileDetect=S.a,window.setupWebViewJavascriptBridge=function(e){if(window.WebViewJavascriptBridge)return e(WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(e);window.WVJBCallbacks=[e];var t=document.createElement("iframe");t.style.display="none",t.src="https://__bridge_loaded__",document.documentElement.appendChild(t),setTimeout(function(){document.documentElement.removeChild(t)},0)},r["default"].use(T.a,{preload:1.3,error:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAGmAQMAAAAZMJMVAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURefn5ySG6Q8AAAA+SURBVHja7cExAQAAAMKg9U9tCj+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAvwGcmgABBZ8R+wAAAABJRU5ErkJggg==",loading:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAGmAQMAAAAZMJMVAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURefn5ySG6Q8AAAA+SURBVHja7cExAQAAAMKg9U9tCj+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAvwGcmgABBZ8R+wAAAABJRU5ErkJggg==",attempt:1}),C(),B(),window.onresize=C,new r["default"]({store:p["a"],router:f,render:function(e){return e(l)}}).$mount("#app")},6423:function(e,t,n){},6573:function(e,t,n){},"7c15":function(e,t,n){"use strict";var r,a=n("a322");t["a"]={admin:{get_auth_path:"closer_auth.get_auth_path",login_with_wechat:"closer_auth.login_with_wechat",closeruser_regist:"closer_auth.closeruser_regist",get_code_by_phone:"closer_account.get_code_by_phone_v2",check:"closer_account.check",check_wechat:"closer_account.check_wechat",info:"closer_user.info",user_show:"closer_user.show",bind_phone:"closer_account.bind_phone",like:"closer_reply.like",add_reply:"closer_reply.add_reply",invite_counts:"closer_user.invite_counts",wechat_config:"closer_share.wechat_config"},command:{show:"closer_subject.show",incr_view:"closer_subject.incr_view",comments:"closer_reply.comments",videos:"ali_vod.accessInfo",report:"closer_report.add",like:"closer_reply.like",add_reply:"closer_reply.add_reply",replys:"closer_reply.replys",reportType:"closer_report.get_report_types"},community:{show:"closer_community.show",community_subject_list_index:"closer_subject.community_subject_list_index",subscription:"closer_community.subscription"},group:{show:"closer_class.show",recruiting:"closer_class.recruiting",group_subject_list:"closer_subject.class_subject_list_index",share_group:"closer_share.outer_group"},activity:(r={get_activity:"closer_activity.get_activity",add_channel:"activity_worldcup.add_channel",check_guess_result:"activity_worldcup.check_guess_result",get_match_list:"activity_worldcup.get_match_list",get_user_guess_list:"activity_worldcup.get_user_guess_list",get_user_guess_statistic:"activity_worldcup.get_user_guess_statistic",guess_match:"activity_worldcup.guess_match",receive_chance:"activity_worldcup.receive_chance"},Object(a["a"])(r,"check_guess_result","activity_worldcup.check_guess_result"),Object(a["a"])(r,"activity_water_chance","activity_water.chance"),Object(a["a"])(r,"activity_water_update","activity_water.update"),Object(a["a"])(r,"activity_water_join","activity_water.join"),Object(a["a"])(r,"get_invite_statistic","closer_invite.get_statistic"),Object(a["a"])(r,"get_invitee_page_list","closer_invite.get_invitee_page_list"),Object(a["a"])(r,"get_yesterday_award_amt","closer_invite.get_yesterday_award_amt"),Object(a["a"])(r,"remind_login","closer_invite.remind_login"),r),statitics:{view_count:"closer_promotion_activity.view_count",get_adcookie:"closer_statistics.get_adcookie"}}},c0d6:function(e,t,n){"use strict";var r=n("2b0e"),a=n("2f62"),c=(n("a481"),n("4917"),n("96cf"),n("3040")),i=n("7c15");function o(e){return s.apply(this,arguments)}function s(){return s=Object(c["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Axios.get("".concat(i["a"].command.show,"?subjectid=").concat(t)).then(function(e){return e.data}));case 1:case"end":return e.stop()}},e,this)})),s.apply(this,arguments)}var u=n("ed08"),l={GET_MESSAGE_STATE:!1,GET_IS_APP:!1,GET_APP_TOKEN:"",version_1_2:!1,agent:"",isPre:!1,res:{},content:{},exist:!0},d={fetch_content:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,c,i,s,l,d;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=t.state,c=n.id,e.prev=2,e.next=5,o(c);case 5:i=e.sent,0!=i.code?r("GET_EXIST_STATUS",!1):(i.result.content&&(s=JSON.parse(i.result.content),2===i.result.int_type&&(l=Object(u["f"])(s.html,a.GET_MESSAGE_STATE),l&&(s.html=l),3===i.result.int_category&&s.end_html&&(d=Object(u["f"])(s.end_html,a.GET_MESSAGE_STATE),d&&(s.end_html=d))),s.discuss&&s.discuss.map(function(e){if(e.text){var t=/(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g,n=e.text.match(t);n?(e.weblink=!0,n.map(function(n){var r='<a href="'.concat(n,'" target="_blank">').concat(n,"</a>"),a=e.text.replace(t,r);e.newText=a})):e.weblink=!1}return e}),r("SET_CONTENT",s)),r("SET_RES",i.result)),e.next=13;break;case 9:throw e.prev=9,e.t0=e["catch"](2),r("GET_EXIST_STATUS",!1),e.t0;case 13:case"end":return e.stop()}},e,this,[[2,9]])}));return function(t,n){return e.apply(this,arguments)}}()},p={GET_USER_AGENT:function(e,t){var n=t.nvg.toLowerCase(),r=t.ref,a=n.indexOf("closer-ios")>-1||n.indexOf("closer-android")>-1,c=a||r.indexOf("/invite")>-1;e.version_1_2=Object(u["b"])(n),e.GET_MESSAGE_STATE=!c,e.GET_IS_APP=a,e.agent=n,e.isPre=r.indexOf("?view=pre")>-1},SET_CONTENT:function(e,t){e.content=t},SET_RES:function(e,t){e.res=t},GET_EXIST_STATUS:function(e,t){e.exist=t}},h={namespaced:!0,state:l,actions:d,mutations:p};n("cadf"),n("551c");function A(e){return _.apply(this,arguments)}function _(){return _=Object(c["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Axios.post(i["a"].command.show,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),_.apply(this,arguments)}var f=n("76a0"),m={namespaced:!0,state:{discuss:{},content:{},subject:{},subjectExist:!0},mutations:{setContent:function(e,t){e.content=t,console.timeEnd()},setDiscuss:function(e,t){console.log("discuss",t),e.discuss=t},setSubject:function(e,t){console.log("subject",t),e.subject=t},setSubjectState:function(e,t){console.log("subjectState",t),e.subjectExist=t}},actions:{getSubject:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,c,i,o,s,l;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,console.time(),e.next=4,A(n).catch(function(){Object(f["Toast"])("网络开小差啦~")});case 4:if(a=e.sent,c=a.data,"undefined"==typeof c.code||0!=c.code){e.next=13;break}if(!(0===c.result.int_verify||-1===c.result.int_verify&&4!=c.result.int_category&&6!=c.result.int_category||c.result.bool_delete)){e.next=10;break}return r("setSubjectState",!1),e.abrupt("return");case 10:c.result.content&&(i=JSON.parse(c.result.content),2===c.result.int_type&&(o=Object(u["f"])(i.html,!1),o&&(i.html=o),3===c.result.int_category&&i.end_html&&(s=Object(u["f"])(i.end_html,!1),s&&(i.end_html=s))),i.discuss&&(l=i.discuss.map(function(e){if(e.text){var t=/(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g,n=e.text.match(t);n?(e.weblink=!0,n.map(function(n){var r='<a href="'.concat(n,'" target="_blank">').concat(n,"</a>"),a=e.text.replace(t,r);e.newText=a})):e.weblink=!1}return e}),r("setDiscuss",l)),r("setContent",i),delete c.result.content,r("setSubject",c.result)),e.next=14;break;case 13:r("setSubjectState",!1);case 14:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}};r["default"].use(a["b"]);t["a"]=new a["b"].Store({state:{UA:"",IS_APP:!1,IS_NEW_USER:!1,IS_DEV:!1},modules:{article:h,comment:m}})},ed08:function(e,t,n){"use strict";n.d(t,"f",function(){return c}),n.d(t,"e",function(){return i}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return s}),n.d(t,"b",function(){return u}),n.d(t,"d",function(){return l});n("a481"),n("ac6a"),n("4917"),n("28a5");var r=n("f121"),a=n("c0d6");function c(e,t){var n=/<img.*?(?:>|\/>)/gi,r=e.match(n);if(r){var a=/src=[\'\"]?([^\'\"]*)[\'\"]?/i,c=/width=[\'\"]?([^\'\"]*)[\'\"]?/i,i=/height=[\'\"]?([^\'\"]*)[\'\"]?/i;r.forEach(function(t,n){var r,o,s,u=t.match(a),l=t.match(c),d=t.match(i);u?l&&d?(l[1]<200?(r=l[1]+"px",s=d[1]+"px"):(r="100%",s=100*d[1]/l[1]+"%"),s,o=t.replace(/src=/g,'style="width: '.concat(r,";height: ").concat(s,'; background: #e7e7e7; max-width: 100%;" data-index="').concat(n+1,'" data-src='))):(r="100%",s="auto","28.27vw",o=t.replace(/src=/g,'style="width: '.concat(r,'; background: #e7e7e7; max-width: 100%;" data-feedlazy="feedlazy2" data-index="').concat(n+1,'" data-src='))):o="",e=e.replace(t,o)})}var o=/<video.*?(?:>|\/>|<\/video>)/gi,s=e.match(o);if(s){var u,l=/src=[\'\"]?([^\'\"]*)[\'\"]?/i,d=/vid=[\'\"]?([^\'\"]*)[\'\"]?/i,p=/imageUrl=[\'\"]?([^\'\"]*)[\'\"]?/i,h=/poster=[\'\"]?([^\'\"]*)[\'\"]?/i,A=/width=[\'\"]?([^\'\"]*)[\'\"]?/i,_=/height=[\'\"]?([^\'\"]*)[\'\"]?/i;s.forEach(function(n,r){var a,c,i,o,s=n.match(l),f=n.match(d),m=n.match(p),g=n.match(h),v=n.match(A),w=n.match(_),b="";a=f?f[1]:"",c=s?s[1]:"",o=parseInt(w[1])/parseInt(v[1]),i=m?m[1]:g?g[1]:"",o>1&&(b="video-box-vertical"),u=t?"<section \n                    class='video-box video-box-h5 ".concat(b,"'\n                    data-vid='").concat(a,"'\n                    data-uid='").concat(c,"'\n                    >\n                    <section \n                      class='video-wrap'\n                      data-vid='").concat(a,"'\n                      data-uid='").concat(c,"'\n                      >\n                        <video src='").concat(s[1],"'\n                        class='video-tag'\n                        preload='none'\n                        controls\n                        controlsList='nodownload'\n                        poster='").concat(i,"'\n                        data-bg='").concat(i,'\'\n                        playsinline="true"\n                        webkit-playsinline="true"\n                        x5-playsinline="true"\n                        >\n                        </video>\n                    </section>\n                  </section>'):"<section \n                    class='video-box video-box-native'\n                    data-vid='".concat(a,"'\n                    data-uid='").concat(c,"'\n                    data-bg='").concat(i,"'>\n                    <section \n                      class='video-wrap'\n                      data-vid='").concat(a,"'\n                      data-uid='").concat(c,"'\n                      >\n                      <img data-src='").concat(i,"'\n                        class='video-play-poster'/>\n                      <span\n                        class='video-play-icon'></span>\n                    </section>\n                  </section>"),e=e.replace(n,u)})}var f=/<iframe.*?(?:>|\/>|<\/iframe>)/gi,m=e.match(f);if(m){var g=/width=[\'\"]?([^\'\"]*)[\'\"]?/i,v=/height=[\'\"]?([^\'\"]*)[\'\"]?/i;m.forEach(function(t,n){var r=t.match(g),a=t.match(v),c=t.split(r[0]),i="".concat(c[0],'width="100%"').concat(c[1]),o=i.split(a[0]),s="".concat(o[0],' height="240" ').concat(o[1]),u='<section class="imgbox tiejin-iframe">\n                  '.concat(s,"</iframe>\n                </section>");e=e.replace(t,u)})}return e}function i(e,t,n){var c=r["a"].fileUrl;if(a["a"].state.IS_DEV&&(c=r["a"].fileDevUrl),e){var i=n||500;return"src"===t?-1!==e.indexOf("://")?e+"?s="+i:c+e+"?s="+i:-1!==e.indexOf("://")?e:c+e}}function o(e,t){var n=new Date(e),r=new Date,a=n.getTime(n),c=r.getTime(r),i=c-a,o=i/1e3/60/60/24/30,s=Math.floor(o),u=i/1e3/60/60/24,l=Math.floor(u),d=i/1e3/60/60-24*l,p=Math.floor(d),h=i/1e3/60-1440*l-60*p,A=Math.floor(h),_=i/1e3-86400*l-3600*p-60*A,f=Math.floor(_);return s>1?s+"个月前":l>0?l+"天前":p>0?p+"小时前":A>10?A+"分钟前":f>0?"刚刚":void 0}function s(e,t){var n=e||null,r=t||null;console.log(e,"---",t);var c=a["a"].state.UA.indexOf("closer-ios")>-1;a["a"].state.V_1_2?c?window.WebViewJavascriptBridge&&this.setupWebViewJavascriptBridge(function(e){e.callHandler("playVideo",{vid:n,url:r})}):"undefined"!=typeof window.bridge&&window.bridge.playVideo(n,r):location.href="/?vid=".concat(n)}function u(e){try{var t=e.split("closerapp/version/")[1].split(".");return t[0]>1||1==t[0]&&t[1]&&t[1]>1||1==t[0]&&1==t[1]&&t[2]&&t[2]>100}catch(e){return!1}}function l(e){return e.indexOf("closer-ios")>-1||e.indexOf("closer-android")>-1}},f121:function(e,t,n){"use strict";t["a"]={fileUrl:"https://file.tiejin.cn",fileDevUrl:"https://file-sandbox.tiejin.cn",serverUrl:"https://api.tiejin.cn/command/",devserverUrl:"http://10.3.0.11:8080/command/",subdevserverUrl:"http://oms-sandbox.tiejin.cn/command",serverDevUrl:"https://api-sandbox.tiejin.cn/command/",downUrl:"http://a.app.qq.com/o/simple.jsp?pkgname=com.ums.closer",wxLoginDevUrl:"https://h5-sandbox.tiejin.cn/redirect?redirectUrl=https://a-sandbox.tiejin.cn/teabar/water-9d3foyvita",wxLoginUrl:"https://h5.tiejin.cn/redirect?redirectUrl=https://a.tiejin.cn/teabar/water-9ziqRidiYX",file:"/file/upload/public"}}});
//# sourceMappingURL=app.4844fabe.js.map