(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71a6"],{"026d":function(t,e,n){},1181:function(t,e,n){t.exports=n.p+"img/illustrations.082c27e0.png"},"386d":function(t,e,n){n("214f")("search",1,function(t,e,n){return[function(n){"use strict";var i=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,i):new RegExp(n)[e](String(i))},n]})},4008:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"not-found"},[this.$store.state.IS_APP?n("div",{staticClass:"todown"},[t._m(0),t._m(1),n("div",{staticClass:"down-btn",on:{click:t.download}},[n("span",[t._v("立即下载")])]),t._m(2)]):n("div",{staticClass:"delete"},[n("div",{staticClass:"delete-icon"}),n("div",{staticClass:"subject-notfound"},[t._v("此贴子已被删除")]),n("div")])])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"todown-top"},[i("img",{staticClass:"todown-top-left",attrs:{src:n("a8b7")}}),i("img",{staticClass:"todown-top-right",attrs:{src:n("ec55")}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todown-body"},[n("div",[t._v("根据国家法律规定")]),n("div",[t._v("该文章只能在app中打开查看")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("img",{staticClass:"todown-bottom",attrs:{src:n("1181")}})])}],a=(n("28a5"),n("386d"),{name:"notFound",props:{isDelete:Boolean},mounted:function(){this.initLoad()},methods:{initLoad:function(){var t=this;this.isWeiXin()?document.querySelector(".todown-top-right").style.display="block":(document.querySelector(".down-btn").style.opacity=1,setTimeout(function(){t.download()},1500))},download:function(){location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.ums.closer"},isWeiXin:function(){var t=navigator.userAgent.toLowerCase(),e=!1,n=!1,i=!1;return e=/micromessenger/i.test(t),n=/qq/i.test(t),/mqqbrowser/i.test(t)&&(n=!1),i=/weibo/i.test(t),e||n||i},getParam:function(t){var e="",n=!1;if(0==location.search.indexOf("?")&&location.search.indexOf("=")>1){var i=unescape(location.search).substring(1,location.search.length).split("&"),o=0;while(o<i.length&&!n)i[o].indexOf("=")>0&&i[o].split("=")[0].toLowerCase()==t.toLowerCase()&&(e=i[o].split("=")[1],n=!0),o++}return e}}}),s=a,c=(n("a140"),n("2877")),r=Object(c["a"])(s,i,o,!1,null,"7fd5352b",null);r.options.__file="notfound.vue";e["a"]=r.exports},"4e50":function(t,e,n){"use strict";var i=n("026d"),o=n.n(i);o.a},8927:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.exist?n("section",{staticClass:"article"},[n("section",{staticClass:"article-wrap"},[n("section",{staticClass:"article-container"},[n("section",{staticClass:"article-title"},[t._v(" "+t._s(t.res.title)+" ")]),n("section",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],staticClass:"content article-content",domProps:{innerHTML:t._s(t.content.html)},on:{click:function(e){t.openClick(e)}}})])])]):n("Notfound",{attrs:{isDelete:t.res.bool_delete}})},o=[],a=(n("96cf"),n("3040")),s=n("c93e"),c=(n("a78e"),n("5880")),r=n("ed08"),l=n("4008"),u=Object(c["createNamespacedHelpers"])("article"),A=u.mapState,d=u.mapActions,f=u.mapMutations,p={name:"Feed",components:{Notfound:l["a"]},data:function(){return{defaultImg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAGmAQMAAAAZMJMVAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURefn5ySG6Q8AAAA+SURBVHja7cExAQAAAMKg9U9tCj+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAvwGcmgABBZ8R+wAAAABJRU5ErkJggg==",vid:"",video:{},playIconTimer:null}},computed:Object(s["a"])({},A(["res","content","GET_MESSAGE_STATE","version_1_2","agent","exist"])),methods:Object(s["a"])({},d(["fetch_content"]),f(["GET_USER_AGENT"]),{fetch:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.fetch_content(this.$route.params);case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),tabImg:function(t){console.log(t.target.dataset.index),Object(r["e"])(t.target.dataset.index)},openClick:function(t){var e=t.target;e.classList;window.ENV.app&&(e.dataset.vid&&e.dataset.uid?Object(r["a"])(e.dataset.uid,e.dataset.vid):e.dataset.index&&Object(r["e"])(e.dataset.index))}}),mounted:function(){this.GET_USER_AGENT({nvg:navigator.userAgent,ref:location.pathname}),this.fetch()}},m=p,v=(n("4e50"),n("2877")),g=Object(v["a"])(m,i,o,!1,null,"507436e2",null);g.options.__file="index.vue";e["default"]=g.exports},a140:function(t,e,n){"use strict";var i=n("fb58"),o=n.n(i);o.a},a8b7:function(t,e,n){t.exports=n.p+"img/tiejin.ce32b504.png"},c93e:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n("a322");function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){Object(i["a"])(t,e,n[e])})}return t}},ec55:function(t,e,n){t.exports=n.p+"img/open_browser.60911e5f.png"},fb58:function(t,e,n){}}]);
//# sourceMappingURL=chunk-71a6.e1f55766.js.map