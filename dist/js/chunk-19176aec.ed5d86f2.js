(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19176aec"],{"0059":function(t,e,i){},"0b4a":function(t,e,i){},1962:function(t,e,i){"use strict";var s=i("0b4a"),n=i.n(s);n.a},2621:function(t,e){e.f=Object.getOwnPropertySymbols},"26a9":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.ENV.app?t._e():i("div",{staticClass:"feed"},[i("div",{staticClass:"head"},[t._v(t._s(t.title))]),t._l(t.subjectList,function(e,s){return i("div",{key:s,staticClass:"feed-content",on:{click:function(i){t.downloadApp(i,"",e.subjectid)}}},[0===e.int_type?i("div",{staticClass:"middle"},[i("div",{staticClass:"title"},[t._v(t._s(e.content.text)+" ")]),e.content.images&&e.content.images.length>0?i("div",{staticClass:"feed-img"},t._l(e.content.images,function(s,n){return n<3?i("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.fileUrlParse(s.link),expression:"fileUrlParse(img.link)",arg:"background-image"}],key:n,staticClass:"img"},[s.link.indexOf(".gif")>-1||s.link.indexOf(".GIF")>-1?i("span",{staticClass:"cover-icon"},[t._v("GIF图")]):s.width/s.height>=3?i("span",{staticClass:"cover-icon"},[t._v("全景")]):s.height/s.width>=3?i("span",{staticClass:"cover-icon"},[t._v("长图")]):t._e(),2===n&&e.content.images.length>3?i("span",{staticClass:"more-image"},[t._v(t._s(e.content.images.length-3)+"张更多")]):t._e()]):t._e()})):t._e()]):1===e.int_type?i("div",{staticClass:"middle"},[i("div",{staticClass:"title"},[t._v(t._s(e.content.text)+" ")]),e.content.videos[0].width>e.content.videos[0].height?i("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.content.videos[0].imageUrl,expression:"item.content.videos[0].imageUrl",arg:"background-image"}],staticClass:"video",style:{height:100*e.content.videos[0].height/e.content.videos[0].width+"vw"}},[i("div",{staticClass:"play-icon"})]):i("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.content.videos[0].imageUrl,expression:"item.content.videos[0].imageUrl",arg:"background-image"}],staticClass:"video vertical",style:{width:100*e.content.videos[0].width/e.content.videos[0].height+"vw",height:"82.93vw"}},[i("div",{staticClass:"play-icon"})])]):2===e.int_type?i("div",{staticClass:"middle"},[i("div",{staticClass:"feed"},[i("div",{staticClass:"feed-title"},[t._v(t._s(e.title))]),e.cover?i("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.fileUrlParse(e.cover),expression:"fileUrlParse(item.cover)",arg:"background-image"}],staticClass:"feed-cover"}):t._e()])]):t._e(),i("div",{staticClass:"bottom"},[i("span",{staticClass:"name"},[t._v(t._s(e.communityName))]),i("span",{staticClass:"community-count"},[t._v(t._s(e.commentNumber))]),i("span",{staticClass:"like-count"},[t._v(t._s(e.like))])])])}),i("div")],2)},n=[],a=i("ed08"),c=(i("2f62"),{name:"feedList",data:function(){return{}},props:{subjectList:{type:Array,default:function(){return[]}},title:{type:String,default:"热门文章"}},computed:{},methods:{dateFormate:function(t,e){return Object(a["h"])(t,e)},fileUrlParse:function(t,e,i){return Object(a["i"])(t,e,i)},downloadApp:function(t,e,i){var s="closer://feed/".concat(i);Object(a["f"])({store:this.$store,route:this.$route,str:e,defaultStr:"hot_feed",redirectUrl:s})}}}),o=c,r=(i("cd8c"),i("2877")),l=Object(r["a"])(o,s,n,!1,null,"5eed3aae",null);l.options.__file="feedList.vue";e["a"]=l.exports},"40f1":function(t,e,i){},4871:function(t,e,i){"use strict";var s=i("86ac"),n=i.n(s);n.a},7333:function(t,e,i){"use strict";var s=i("0d58"),n=i("2621"),a=i("52a7"),c=i("4bf8"),o=i("626a"),r=Object.assign;t.exports=!r||i("79e5")(function(){var t={},e={},i=Symbol(),s="abcdefghijklmnopqrst";return t[i]=7,s.split("").forEach(function(t){e[t]=t}),7!=r({},t)[i]||Object.keys(r({},e)).join("")!=s})?function(t,e){var i=c(t),r=arguments.length,l=1,u=n.f,d=a.f;while(r>l){var f,v=o(arguments[l++]),m=u?s(v).concat(u(v)):s(v),p=m.length,g=0;while(p>g)d.call(v,f=m[g++])&&(i[f]=v[f])}return i}:r},"86ac":function(t,e,i){},"9be4":function(t,e,i){"use strict";var s=i("0059"),n=i.n(s);n.a},c3f2:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.ENV.app?t._e():i("section",{staticClass:"footer"},[i("div",{staticClass:"footer-wrapper",on:{click:t.downApp}},[i("div",{staticClass:"footer-btn"},[t._v(t._s(t.btnText))])])])},n=[],a=i("ed08"),c={data:function(){return{btnText:"打开贴近app，查看更多精彩文章"}},methods:{downApp:function(){Object(a["g"])()}}},o=c,r=(i("4871"),i("2877")),l=Object(r["a"])(o,s,n,!1,null,"bb003f40",null);l.options.__file="footBar.vue";e["a"]=l.exports},c93e:function(t,e,i){"use strict";i.d(e,"a",function(){return n});var s=i("a322");function n(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){Object(s["a"])(t,e,i[e])})}return t}},cd8c:function(t,e,i){"use strict";var s=i("40f1"),n=i.n(s);n.a},dc20:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.ENV.app?t._e():i("section",{staticClass:"focus"},[t.is_follow?i("section",{staticClass:"focus-btn-disabled"}):t._e(),i("section",{on:{click:t.tjFocus}},[t.$route.path.indexOf("community")>-1?i("section",{staticClass:"focus-community"},[t.is_follow?i("section",{staticClass:"yet-focus"},[i("span",[t._v("已关注")])]):i("section",{staticClass:"no-focus"},[i("span",[t._v("关注栏目")])])]):i("section",{staticClass:"other"},[t.is_follow?i("section",{staticClass:"yet-focus"},[i("span",[t._v("已关注")])]):i("section",{staticClass:"no-focus"},[i("span",[t._v("关注")])])])])])},n=[],a=(i("f751"),i("96cf"),i("3040")),c=i("c93e"),o=i("2f62"),r=i("ed08"),l={props:{communityid:{type:String,default:""}},data:function(){return{}},computed:Object(c["a"])({},Object(o["d"])(["is_follow","isLogin"]),Object(o["d"])("article",["res"])),watch:{isLogin:function(t,e){console.log("isLogin:",t,e),t&&"focus"==this.$route.query.useraction&&(console.log("actons:tjFocus"),this.tjFocus())}},methods:Object(c["a"])({},Object(o["b"])(["getWxAuth"]),Object(o["b"])("common",["get_focus_stat"]),{tjFocus:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:Cookies.get("token")?this.get_focus_stat({communityid:this.res.communityid?this.res.communityid:this.communityid,flag:this.is_follow?0:1}):this.ENV.wx&&this.getWxAuth(Object(r["a"])(this.$route.path,Object.assign({},this.$route.query,{useraction:"focus"})));case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}),mounted:function(){}},u=l,d=(i("9be4"),i("2877")),f=Object(d["a"])(u,s,n,!1,null,"3042b288",null);f.options.__file="focus.vue";e["a"]=f.exports},f751:function(t,e,i){var s=i("5ca1");s(s.S+s.F,"Object",{assign:i("7333")})},fb25:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.ENV.app?t._e():i("section",{staticClass:"download-bar"},[i("div",{staticClass:"place"}),i("div",{staticClass:"wrap"},[i("div",{staticClass:"left"},[i("div",{staticClass:"left-logo"}),i("mt-swipe",{staticClass:"mtswipe left-desc",attrs:{auto:4e3,"show-indicators":!1}},[i("mt-swipe-item",[i("div",{staticClass:"swip-item"},[i("span",[t._v("贴近一点 看身边")])])]),i("mt-swipe-item",[i("div",{staticClass:"swip-item"},[i("span",[t._v("能赚稿费的本地内容社区")])])]),i("mt-swipe-item",[i("div",{staticClass:"swip-item"},[i("p",[t._v("打开贴近看资讯")]),i("p",[t._v("领10元红包")])])])],1)],1),i("div",{staticClass:"right"},[i("div",{staticClass:"right-btn",on:{click:t.handleClick}},[t._v("下载贴近")])])])])},n=[],a=(i("7f7f"),i("2b0e")),c=i("ed08"),o=i("f121"),r=i("76a0");a["default"].component(r["Swipe"].name,r["Swipe"]),a["default"].component(r["SwipeItem"].name,r["SwipeItem"]);var l={name:"downloadBar",mounted:function(){},methods:{handleClick:function(t,e){var i=o["a"].download;Object(c["f"])({store:this.$store,route:this.$route,str:e,defaultStr:"direct_top",redirectUrl:i})}}},u=l,d=(i("1962"),i("2877")),f=Object(d["a"])(u,s,n,!1,null,"60311dc5",null);f.options.__file="downloadBar.vue";e["a"]=f.exports}}]);
//# sourceMappingURL=chunk-19176aec.ed5d86f2.js.map