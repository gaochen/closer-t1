(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1195e052"],{1181:function(t,e,s){t.exports=s.p+"img/illustrations.082c27e0.png"},"1ab4":function(t,e,s){},"23a2":function(t,e,s){"use strict";var a=s("1ab4"),i=s.n(a);i.a},"309e":function(t,e,s){"use strict";var a=s("f260"),i=s.n(a);i.a},"30d1":function(t,e,s){"use strict";var a=s("642c"),i=s.n(a);i.a},"386d":function(t,e,s){s("214f")("search",1,function(t,e,s){return[function(s){"use strict";var a=t(this),i=void 0==s?void 0:s[e];return void 0!==i?i.call(s,a):new RegExp(s)[e](String(a))},s]})},"545f":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.ENV.app||t.ENV.v120?t._e():s("section",{staticClass:"author-bar"},[3!=t.res.int_category?s("section",{staticClass:"author-list"},[t.res.nickname?s("p",[t._v("小编："+t._s(t.res.nickname))]):t._e(),t.res.authors?s("p",[t._v("作者："+t._s(t.res.authors)+" ")]):t._e()]):s("section",{staticClass:"author-list"},[s("p",[t._v("来自 "+t._s(t.res.className))])])])},i=[],n=s("c93e"),o=s("2f62"),r={props:{},data:function(){return{}},computed:Object(n["a"])({},Object(o["d"])(["res"]))},c=r,u=(s("30d1"),s("2877")),l=Object(u["a"])(c,a,i,!1,null,"2c4a8434",null);l.options.__file="authorBar.vue";e["a"]=l.exports},"642c":function(t,e,s){},8927:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[this.$store.state.exist?s("section",{staticClass:"article"},[s("download-bar"),s("section",{staticClass:"article-wrap"},[s("section",{staticClass:"article-container bg-f"},[t.ENV.app?t._e():s("section",{staticClass:"article-title"},[t._v(" "+t._s(this.$store.state.res.title)+" ")]),s("focus-bar",{staticClass:"focus-bar",attrs:{showTime:""}}),s("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],staticClass:"article-content",attrs:{id:"articleContent"},on:{click:function(e){t.openClick(e)}}},[t.cover?s("div",{staticClass:"article-cover-box"},[s("img",{staticClass:"article-cover-img",attrs:{"data-src":t.makeFileUrl(t.cover),"data-type":"preview"}})]):t._e(),s("div",{staticClass:"content",domProps:{innerHTML:t._s(this.$store.state.content.html)}})]),s("author-bar")],1),s("like-bar",{staticClass:"like-bar",attrs:{author:!0}}),s("message-board"),s("feed-list",{attrs:{subjectList:t.hotSubjects}}),s("foot-bar")],1)],1):s("Notfound",{attrs:{isDelete:this.$store.state.res.bool_delete}})],1)},i=[],n=(s("96cf"),s("3040")),o=s("c93e"),r=(s("a78e"),s("2f62")),c=s("ed08"),u=s("f8a4"),l=s("fb25"),d=s("c3f2"),A=s("c64e"),p=s("1a18"),f=s("d862"),h=s("26a9"),v=s("545f"),m={name:"Feed",components:{DownloadBar:l["a"],FootBar:d["a"],Notfound:u["a"],FocusBar:A["a"],LikeBar:p["a"],MessageBoard:f["a"],FeedList:h["a"],AuthorBar:v["a"]},data:function(){return{defaultImg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAGmAQMAAAAZMJMVAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURefn5ySG6Q8AAAA+SURBVHja7cExAQAAAMKg9U9tCj+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAvwGcmgABBZ8R+wAAAABJRU5ErkJggg==",vid:"",preSrc:"",preShow:!1}},computed:Object(o["a"])({},Object(r["d"])("common",["hotSubjects"]),{cover:function(){return!!this.$store.state.res.bigcover&&(this.$store.state.res.bigcover||this.$store.state.res.cover)}}),methods:Object(o["a"])({},Object(r["b"])("common",["fetch_content","getHotSubjects"]),{fetch:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={subjectid:this.$route.params.id},this.$route.query.udid&&this.$route.query.sto&&(e["share_udid"]=this.$route.query.udid,e["sto"]=this.$route.query.sto),t.next=4,this.fetch_content(e);case 4:this.$player.init(".content",{muted:!1,preload:!0,autoPlay:!0,loop:!1});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),openClick:function(t){var e=t.target;e.classList;this.ENV.app&&e.dataset.vid&&e.dataset.uid&&Object(c["b"])(e.dataset.uid,e.dataset.vid)},makeFileUrl:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Object(c["f"])(t)},listenToMyChild:function(t){this.preShow=t}}),mounted:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.fetch();case 2:this.$store.dispatch("wx_config"),this.getHotSubjects(),this.$preview.init("#articleContent");case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},b=m,g=(s("23a2"),s("2877")),w=Object(g["a"])(b,a,i,!1,null,null,null);w.options.__file="index.vue";e["default"]=w.exports},a8b7:function(t,e,s){t.exports=s.p+"img/tiejin.ce32b504.png"},ec55:function(t,e,s){t.exports=s.p+"img/open_browser.60911e5f.png"},f260:function(t,e,s){},f8a4:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"not-found"},[t.isApp?s("div",{staticClass:"delete"},[s("div",{staticClass:"delete-icon"}),s("div",{staticClass:"subject-notfound"},[t._v("此贴子已被删除")]),s("div")]):s("div",{staticClass:"todown"},[t._m(0),t._m(1),s("div",{staticClass:"down-btn",on:{click:t.download}},[s("span",[t._v("立即下载")])]),t._m(2)])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"todown-top"},[a("img",{staticClass:"todown-top-left",attrs:{src:s("a8b7")}}),a("img",{staticClass:"todown-top-right",attrs:{src:s("ec55")}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"todown-body"},[s("div",[t._v("根据国家法律规定")]),s("div",[t._v("该文章只能在app中打开查看")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{staticClass:"todown-bottom",attrs:{src:s("1181")}})])}],n=(s("28a5"),s("386d"),{name:"notFound",props:{isDelete:Boolean},computed:{isApp:function(){return this.ENV.app}},mounted:function(){this.initLoad()},methods:{initLoad:function(){var t=this;if(this.ENV.wx){var e=document.querySelector(".todown-top-right");e&&(e.style.display="block")}else this.ENV.wx||this.ENV.app||(document.querySelector(".down-btn").style.opacity=1,setTimeout(function(){t.download()},1500))},download:function(){location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.ums.closer"},isWeiXin:function(){var t=navigator.userAgent.toLowerCase(),e=!1,s=!1,a=!1;return e=/micromessenger/i.test(t),s=/qq/i.test(t),/mqqbrowser/i.test(t)&&(s=!1),a=/weibo/i.test(t),e||s||a},getParam:function(t){var e="",s=!1;if(0==location.search.indexOf("?")&&location.search.indexOf("=")>1){var a=unescape(location.search).substring(1,location.search.length).split("&"),i=0;while(i<a.length&&!s)a[i].indexOf("=")>0&&a[i].split("=")[0].toLowerCase()==t.toLowerCase()&&(e=a[i].split("=")[1],s=!0),i++}return e}}}),o=n,r=(s("309e"),s("2877")),c=Object(r["a"])(o,a,i,!1,null,"d192a418",null);c.options.__file="notfound.vue";e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-1195e052.53fad36d.js.map