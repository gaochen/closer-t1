(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1522"],{"0501":function(t,e,n){"use strict";var a=n("653d"),c=n.n(a);c.a},4008:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"not-found"},[n("div",{staticClass:"delete-icon"}),n("div",{staticClass:"subject-notfound"},[t._v("此贴子已被删除")])])}],i=(n("0501"),n("2877")),A={},r=Object(i["a"])(A,a,c,!1,null,"1bbf7c70",null);e["a"]=r.exports},"5d8f":function(t,e,n){},"653d":function(t,e,n){},8927:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.exist?n("section",{staticClass:"article"},[n("section",{staticClass:"article-wrap"},[n("section",{staticClass:"article-container"},[n("section",{staticClass:"article-title"},[t._v(" "+t._s(t.res.title)+" ")]),n("section",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],staticClass:"content article-content",domProps:{innerHTML:t._s(t.content.html)},on:{click:function(e){t.openClick(e)}}})])])]):n("Notfound")},c=[],i=(n("96cf"),n("3040")),A=n("c93e"),r=(n("cadf"),n("551c"),n("a78e"),n("2f62")),s=n("ed08"),o=n("4008"),u=Object(r["a"])("article"),l=u.mapState,f=u.mapActions,d=u.mapMutations,m={name:"Feed",components:{Notfound:o["a"]},data:function(){return{defaultImg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAGmAQMAAAAZMJMVAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURefn5ySG6Q8AAAA+SURBVHja7cExAQAAAMKg9U9tCj+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAvwGcmgABBZ8R+wAAAABJRU5ErkJggg==",vid:"",video:{},playIconTimer:null}},computed:Object(A["a"])({},l(["res","content","GET_MESSAGE_STATE","version_1_2","agent","exist"])),methods:Object(A["a"])({},f(["fetch_content"]),d(["GET_USER_AGENT"]),{fetch:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.fetch_content(this.$route.params);case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),openClick:function(t){var e=t.target;e.classList;if(this.$store.state.IS_APP){if(!e.dataset.vid&&!e.dataset.uid)return;Object(s["a"])(e.dataset.uid,e.dataset.vid)}}}),mounted:function(){var t=this;t.GET_USER_AGENT({nvg:navigator.userAgent,ref:location.pathname}),t.fetch()}},p=m,v=(n("ab6f"),n("2877")),g=Object(v["a"])(p,a,c,!1,null,"2714f0ed",null);e["default"]=g.exports},ab6f:function(t,e,n){"use strict";var a=n("5d8f"),c=n.n(a);c.a},c93e:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var a=n("a322");function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},c=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(c=c.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),c.forEach(function(e){Object(a["a"])(t,e,n[e])})}return t}}}]);
//# sourceMappingURL=chunk-1522.fbbbeeba.js.map