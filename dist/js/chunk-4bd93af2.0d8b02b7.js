(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bd93af2"],{"14bb":function(t,o,e){"use strict";var i=e("61bb"),s=e.n(i);s.a},"61bb":function(t,o,e){},7482:function(t,o,e){"use strict";var i=e("bb16"),s=e.n(i);s.a},bb16:function(t,o,e){},dc52:function(t,o,e){"use strict";e.r(o);var i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"column"},[e("download-bar",{ref:"downloadbar"}),e("div",{staticClass:"column-wrap box box-tb box-center-center"},[e("div",{staticClass:"cln-icon"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.communityShow.blogo,expression:"communityShow.blogo"}],attrs:{src:t.defaultImg}})]),e("div",{staticClass:"cln-name"},[t._v(t._s(t.communityShow.name))]),t.communityShow.description?e("div",{staticClass:"cln-text"},[t._v(t._s(t.communityShow.description))]):e("div",{staticClass:"cln-text"},[t._v("用心写出有态度，有深度，有高度的文章 "),e("br"),t._v("请关注我们吧～")]),e("Focus",{staticClass:"cln-btn",attrs:{communityid:t.communityid}})],1),t.groupList.data&&t.groupList.data.length>0?e("div",{staticClass:"group-wrap"},[e("div",{staticClass:"gr-line1 box box-lr"},[e("div",{staticClass:"gr-title"},[t._v("正在招募的群组")]),e("div",{staticClass:"gr-more",on:{click:t.downApp}},[t._v("更多群组 >")])]),t._l(t.groupList.data,function(o,i){return e("div",{key:i,staticClass:"gr-group box box-lr",on:{click:function(e){t.toGroup(o.id)}}},[e("div",{staticClass:"gr-left"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.fileUrlParse(o.group.avatar),expression:"fileUrlParse(item.group.avatar)"}]})]),e("div",{staticClass:"gr-right"},[e("div",{staticClass:"gr-name"},[t._v(t._s(o.group.name))]),e("div",{staticClass:"gr-text"},[t._v(t._s(JSON.parse(o.group.description)[0].content))])])])})],2):e("div",{staticClass:"nothing-group"},[e("p",[t._v("本栏目暂不开放招新")]),e("p",[t._v("可通过投稿申请建群～")])]),e("feed-list",{ref:"feedlist",staticClass:"feed-list",attrs:{subjectList:t.hotSubjects}}),e("foot-bar"),e("focus-alert",{attrs:{communityName:t.communityShow.name},on:{close:t.closeAlert,downApp:t.downApp}})],1)},s=[],n=e("c93e"),c=(e("96cf"),e("3040")),a=(e("f121"),e("fb25")),r=e("26a9"),u=e("dc20"),l=e("c3f2"),A=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("mt-popup",{staticClass:"alert-pop",model:{value:t.visible2,callback:function(o){t.visible2=o},expression:"visible2"}},[e("div",{staticClass:"header"},[e("div",{staticClass:"close",on:{click:t.closeAlert}})]),e("div",{staticClass:"content"},[e("div",{staticClass:"text"},[t._v("您已成功关注了“"+t._s(t.communityName)+"”贴近号，去快看看这个贴近号下的其他帖子吧~")]),e("div",{staticClass:"desc-img"})]),e("div",{staticClass:"footer",on:{click:t.download}},[t._v("确认")])])},m=[],d=(e("7f7f"),e("2b0e")),p=e("2f62"),f=e("76a0");d["default"].component(f["Popup"].name,f["Popup"]);var b={name:"alert-pop",props:{communityName:{type:String,default:""},downApp:Function,close:Function},data:function(){return{visible2:!1}},watch:{visible:function(t){this.visible2=t}},computed:Object(n["a"])({},Object(p["d"])("community",{visible:function(t){return t.visible}})),methods:{download:function(){this.$emit("downApp")},closeAlert:function(){this.$emit("close")}}},v=b,g=(e("14bb"),e("2877")),h=Object(g["a"])(v,A,m,!1,null,"458f1077",null);h.options.__file="focusAlert.vue";var w=h.exports,y=e("ed08"),C={name:"column",components:{DownloadBar:a["a"],FeedList:r["a"],Focus:u["a"],FootBar:l["a"],FocusAlert:w},data:function(){return{communityid:"",defaultImg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAGmAQMAAAAZMJMVAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURefn5ySG6Q8AAAA+SURBVHja7cExAQAAAMKg9U9tCj+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAvwGcmgABBZ8R+wAAAABJRU5ErkJggg=="}},mounted:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var o,e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("query params:---",this.$route.params),this.$route.query.code&&(o={plateform:2,code:this.$route.query.code,protocol:"WEB_SOCKET",adid:Cookies.get("h5Adid")||"closer-t1"},console.log("params---",o),this.getUserInfoWithWx(o)),this.communityid=this.$route.params.id,t.next=5,this.getCommunityShow(this.communityid);case 5:e={communityid:this.communityid,page:1,count:3},this.$store.dispatch("wx_config"),this.getGroupList(e),this.getHotSubjects(),console.log(this.communityShow);case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),computed:Object(n["a"])({},Object(p["d"])({is_follow:function(t){return t.is_follow}}),Object(p["d"])("community",{communityShow:function(t){return t.communityShow},groupList:function(t){return t.groupList},isFollow:function(t){return t.isFollow}}),Object(p["d"])("common",{authSuccess:function(t){return t.authSuccess},hotSubjects:function(t){return t.hotSubjects}})),methods:Object(n["a"])({},Object(p["c"])("community",["show","hide"]),Object(p["b"])("community",["getCommunityShow","getGroupList","getSubscription"]),Object(p["b"])("common",["getUserInfoWithWx","getHotSubjects"]),{downApp:function(){Object(y["e"])()},fileUrlParse:function(t,o,e){return Object(y["g"])(t,o,e)},toGroup:function(t){this.$router.push({path:"/group/".concat(t)})},closeAlert:function(){this.hide()}})},_=C,x=(e("7482"),Object(g["a"])(_,i,s,!1,null,"783f9958",null));x.options.__file="index.vue";o["default"]=x.exports}}]);
//# sourceMappingURL=chunk-4bd93af2.0d8b02b7.js.map