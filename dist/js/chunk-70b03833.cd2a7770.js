(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70b03833"],{"7e82":function(t,e,a){"use strict";var c=a("880c"),n=a.n(c);n.a},"880c":function(t,e,a){},8927:function(t,e,a){"use strict";a.r(e);var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("download-bar"),t.exist?a("section",{staticClass:"article"},[a("section",{staticClass:"article-wrap"},[a("section",{staticClass:"article-container"},[a("section",{staticClass:"article-title"},[t._v(" "+t._s(t.res.title)+" ")]),a("focus-bar",{staticClass:"focus-bar"}),a("div",{staticClass:"article-cover-box"},[a("img",{staticClass:"article-cover-img",attrs:{src:t.makeFileUrl(t.res.bigcover||t.res.cover),alt:""}})]),a("section",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],staticClass:"content article-content",domProps:{innerHTML:t._s(t.content.html)},on:{click:function(e){t.openClick(e)}}}),a("author-bar")],1),a("like-bar",{staticClass:"like-bar"}),a("message-board"),a("feed-list",{attrs:{subjectList:t.hotSubjects}}),a("foot-bar")],1)]):a("Notfound",{attrs:{isDelete:t.res.bool_delete}})],1)},n=[],r=(a("96cf"),a("3040")),o=a("c93e"),s=(a("a78e"),a("2f62")),i=a("ed08"),A=a("4008"),l=a("fb25"),u=a("c3f2"),d=a("c64e"),f=a("1a18"),b=a("d862"),g=a("26a9"),h=a("545f"),m={name:"Feed",components:{DownloadBar:l["a"],FootBar:u["a"],Notfound:A["a"],FocusBar:d["a"],LikeBar:f["a"],MessageBoard:b["a"],FeedList:g["a"],AuthorBar:h["a"]},data:function(){return{defaultImg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAGmAQMAAAAZMJMVAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURefn5ySG6Q8AAAA+SURBVHja7cExAQAAAMKg9U9tCj+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAvwGcmgABBZ8R+wAAAABJRU5ErkJggg==",vid:"",video:{},playIconTimer:null}},computed:Object(o["a"])({},Object(s["d"])("article",["res","content","GET_MESSAGE_STATE","version_1_2","agent","exist"]),Object(s["d"])("common",{hotSubjects:function(t){return t.hotSubjects}})),methods:Object(o["a"])({},Object(s["b"])(["getUserInfoWithWx"]),Object(s["b"])("article",["fetch_content"]),Object(s["c"])("article",["GET_USER_AGENT"]),Object(s["b"])("common",["getHotSubjects"]),{fetch:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("fetch"),t.next=3,this.fetch_content(this.$route.params);case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),tabImg:function(t){console.log(t.target.dataset.index),Object(i["l"])(t.target.dataset.index)},openClick:function(t){var e=t.target;e.classList;window.ENV.app&&(e.dataset.vid&&e.dataset.uid?Object(i["b"])(e.dataset.uid,e.dataset.vid):e.dataset.index&&Object(i["l"])(e.dataset.index))},makeFileUrl:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return console.log("url",decodeURI(t)),Object(i["i"])(t)}}),mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.$route.query.code&&(e={plateform:2,code:this.$route.query.code,protocol:"WEB_SOCKET",adid:Cookies.get("h5Adid")||"closer-t1"},console.log("params---",e),this.getUserInfoWithWx(e)),t.next=3,this.fetch();case 3:this.$store.dispatch("wx_config"),console.log("params.id:",this.$route.params.id),this.getHotSubjects();case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},p=m,v=(a("7e82"),a("2877")),j=Object(v["a"])(p,c,n,!1,null,"13ff86bd",null);j.options.__file="index.vue";e["default"]=j.exports}}]);
//# sourceMappingURL=chunk-70b03833.cd2a7770.js.map