(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30109435"],{"26a9":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.ENV.app?t._e():s("div",{staticClass:"feed"},[s("div",{staticClass:"head"},[t._v(t._s(t.title))]),t._l(t.subjectList,function(e,i){return s("div",{key:i,staticClass:"feed-content",on:{click:function(s){t.downloadApp(s,"",e.subjectid)}}},[s("div",{staticClass:"wrap"},[s("div",{staticClass:"middle"},[s("div",{staticClass:"cover"},[2===e.int_type?s("div",{staticClass:"feed-title"},[t._v(t._s(e.title))]):s("div",{staticClass:"feed-title"},[t._v(t._s(e.content.text))]),2===e.int_type&&e.cover?s("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.fileUrlParse(e.cover),expression:"fileUrlParse(item.cover)",arg:"background-image"}],staticClass:"feed-cover"}):0===e.int_type&&e.content.images&&e.content.images.length>0?s("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.fileUrlParse(e.cover),expression:"fileUrlParse(item.cover)",arg:"background-image"}],staticClass:"feed-cover"},[s("div",{staticClass:"image-num"},[t._v(t._s(e.content.images.length)+"图")])]):1===e.int_type?s("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.content.videos[0].imageUrl,expression:"item.content.videos[0].imageUrl",arg:"background-image"}],staticClass:"feed-cover"},[s("div",{staticClass:"play-icon"})]):t._e()])]),s("div",{staticClass:"bottom"},[s("label",{staticClass:"name"},[t._v(t._s(e.communityName))]),0!=e.commentNumber?s("label",{staticClass:"community-count"},[t._v(t._s(e.commentNumber)+"评论")]):t._e(),0!=e.commentNumber&&0!=e.like?s("label",[t._v("·")]):t._e(),0!=e.like?s("label",{staticClass:"like-count"},[t._v(t._s(e.like)+"赞")]):t._e(),s("label",{staticClass:"date"},[t._v(t._s(t.dateFormate(e.long_publish_time)))])])])])}),s("div")],2)},a=[],r=s("ed08"),o=s("f121"),n={name:"feedList",data:function(){return{}},props:{subjectList:{type:Array,default:function(){return[]}},title:{type:String,default:"热门文章"}},computed:{},methods:{dateFormate:function(t,e){return Object(r["c"])(t)},fileUrlParse:function(t,e,s){return Object(r["g"])(t,e,s)},downloadApp:function(t,e,s){var i="".concat(o["a"].download,"&link=closer://feed/").concat(s);Object(r["d"])({store:this.$store,route:this.$route,str:e,defaultStr:"hot_feed",redirectUrl:i})}}},c=n,u=(s("9af2"),s("2877")),l=Object(u["a"])(c,i,a,!1,null,"778cfd62",null);l.options.__file="feedList.vue";e["a"]=l.exports},"46f1":function(t,e,s){"use strict";var i=s("86e7"),a=s.n(i);a.a},5668:function(t,e,s){"use strict";var i=s("b3cd"),a=s.n(i);a.a},"6ff3":function(t,e,s){},"86e7":function(t,e,s){},"90ab":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"group"},[t.showDownload?s("div",{staticClass:"group-dl"},[s("div",{staticClass:"dl-hd"},[s("div",{staticClass:"hd-succ"}),s("p",{staticClass:"hd-msg"},[t._v(t._s(t.msg))])]),t._m(2),s("div",{staticClass:"dl-ft"},[s("div",{staticClass:"ft-logo"}),t._m(3),s("div",{staticClass:"ft-btn",on:{click:t.handleDownload}},[t._v("立即前往")])])]):s("div",[s("downloadBar"),t.group.group_info&&t.group.group_user_count?s("div",{staticClass:"member"},[s("div",{staticClass:"title"},[t._v("群组成员 "+t._s(t.group.group_user_count))]),s("ul",{staticClass:"member-icons"},[s("li",{staticClass:"head"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.fileUrlParse(t.group.group_info.group.attributes.monitor.user.avatar),expression:"fileUrlParse(group.group_info.group.attributes.monitor.user.avatar)"}],staticClass:"icon"}),t._m(0),s("div",{staticClass:"name"},[t._v(t._s(t.group.group_info.group.attributes.monitor.user.fullname))])]),t._l(t.group.group_user_info,function(e,i){return i<4?s("li",{key:i,staticClass:"head"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.fileUrlParse(e.props.roster.avatar),expression:"fileUrlParse(item.props.roster.avatar)"}],staticClass:"icon"}),s("div",{staticClass:"name"},[t._v(t._s(e.props.roster.name))])]):t._e()})],2),t.group.group_user_count>5?s("div",{staticClass:"more-member",on:{click:t.moreMember}},[t._v("查看更多群成员"),s("i",{staticClass:"arrow"})]):t._e()]):t._e(),t.group.group_info&&t.description()?s("div",{staticClass:"description"},[s("div",{staticClass:"desc"},[t._v("群简介")]),s("div",{staticClass:"desc-content"},[t._v(t._s(t.description()))])]):t._e(),t.group.group_info&&t.announcement()?s("div",{staticClass:"topic"},[t._m(1),s("div",{staticClass:"topic-content"},[t._v(t._s(t.announcement()))])]):t._e(),s("div",{staticClass:"split-box"}),t.groupFeedList&&t.groupFeedList.length>0?s("div",{staticClass:"group-info",on:{click:function(e){t.toCommunity(t.group.group_info.communityid)}}},[s("span",{staticClass:"title"},[t._v("所属贴近号")]),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.groupFeedList[0].blogo,expression:"groupFeedList[0].blogo"}],staticClass:"icon"}),s("span",{staticClass:"name"},[t._v(t._s(t.groupFeedList[0].communityName))]),s("i",{staticClass:"arrow-right right"})]):t._e(),s("div",{staticClass:"split-box"}),s("feedlist",{attrs:{subjectList:t.groupFeedList,title:t.groupFeedTitle}}),s("div",{staticClass:"group-ft"},[s("div",{staticClass:"group-btn",on:{click:t.handleJoinGroup}},[1===t.loading?s("spinner",{staticStyle:{"margin-right":"5px"},attrs:{size:16,type:"fading-circle",color:"#495060"}}):t._e(),s("span",[t._v("进入群组")])],1)])],1)])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"owner"},[s("span",[t._v("群主")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"current-topic"},[t._v("当前话题 "),s("i",{staticClass:"arrow-right"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dl-bd"},[s("div",{staticClass:"bd-img"}),s("p",{staticClass:"bd-tip"},[t._v("新用户请下载app，并以微信登录")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ft-content"},[s("div",{staticClass:"ft-title"},[t._v("下载「贴近」客户端")]),s("div",{staticClass:"ft-desc"},[t._v("贴近一点 看身边")])])}],r=(s("96cf"),s("3040")),o=s("c93e"),n=s("fb25"),c=s("26a9"),u=s("ed08"),l=s("2f62"),p=s("76a0"),d={components:{DownloadBar:n["a"],Feedlist:c["a"],Spinner:p["Spinner"]},data:function(){return{loading:2,showDownload:!0,msg:"恭喜，您已成功入群"}},computed:Object(o["a"])({},Object(l["d"])("group",{group:function(t){return t.group},groupFeedList:function(t){return t.groupFeedList},groupFeedTitle:function(t){return t.groupFeedTitle}})),beforeMount:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.$route.params.id){t.next=6;break}return t.next=3,this.getGroupInfo({groupId:this.$route.params.id});case 3:this.$store.dispatch("wx_config"),e={flag:1,classid:this.$route.params.id,index:"",pagesize:5},this.getGroupList(e);case 6:if(!this.$route.query.code){t.next=12;break}return s={plateform:2,code:this.$route.query.code,protocol:"WEB_SOCKET",adid:Cookies.get("h5Adid")||"closer-t1"},console.log("params---",s),t.next=11,this.getUserInfoWithWx(s);case 11:"group"==sessionStorage.userAction&&(this.handleJoinGroup(),sessionStorage.userAction=null);case 12:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),methods:Object(o["a"])({},Object(l["b"])("common",["getWxAuth","getUserInfoWithWx"]),Object(l["b"])("group",["getGroupInfo","getGroupList","joinGroup"]),{fileUrlParse:function(t,e,s){return Object(u["g"])(t,e,s)},description:function(){try{return JSON.parse(this.$store.state.group.group.group_info.group.description)[0].content}catch(t){return this.$store.state.group.group.group_info.group.description}},announcement:function(){try{return JSON.parse(this.$store.state.group.group.group_info.announcement)[0].content}catch(t){return this.$store.group.group.state.group.group_info.announcement}},moreMember:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.$store.commit("SET_EXTENSION_TEXT","more_group_member"),Cookies.get("token")?this.downloadApp():ENV.wx?this.getWxAuth({payload:{path:this.$route.path,query:this.$route.query}}):(this.$store.commit("GET_LOGIN_TYPE","toDown"),this.$store.commit("SET_VISIBLE_LOGIN",!0));case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),downloadApp:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e,s,i){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:Object(u["d"])({store:this.$store,route:this.$route,str:s,defaultStr:"more_group_member"});case 1:case"end":return t.stop()}},t,this)}));return function(e,s,i){return t.apply(this,arguments)}}(),toCommunity:function(t){this.$router.push({path:"/community/".concat(t)})},handleJoinGroup:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=this,1!=e.loading){t.next=3;break}return t.abrupt("return");case 3:if(e.loading=1,!Cookies.get("token")){t.next=13;break}return console.log("token"),t.next=8,this.joinGroup({classid:e.$route.params.id,join_limit:e.group.group_info.join_limit});case 8:s=t.sent,e.loading=2,s?(e.showDownload=!0,e.group.group_info.join_limit,e.msg="您的入群申请已提交~",setTimeout(u["e"],2e3)):Object(u["e"])(),t.next=15;break;case 13:console.log("else"),e.ENV.wx?e.getWxAuth({payload:{path:e.$route.path,query:e.$route.query},before:function(){sessionStorage.userAction="group"}}):Object(u["e"])();case 15:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),handleDownload:function(){Object(u["e"])()}})},m=d,f=(s("46f1"),s("2877")),g=Object(f["a"])(m,i,a,!1,null,"7cf583b7",null);g.options.__file="index.vue";e["default"]=g.exports},"9af2":function(t,e,s){"use strict";var i=s("6ff3"),a=s.n(i);a.a},b3cd:function(t,e,s){},fb25:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.ENV.app?t._e():s("section",{staticClass:"download-bar"},[t.placeholder?s("div",{staticClass:"place"}):t._e(),s("div",{staticClass:"wrap"},[s("div",{staticClass:"left"},[s("div",{staticClass:"left-logo"}),s("mt-swipe",{staticClass:"mtswipe left-desc",attrs:{auto:4e3,"show-indicators":!1}},[s("mt-swipe-item",[s("div",{staticClass:"swip-item"},[s("span",[t._v("贴近一点 看身边")])])]),s("mt-swipe-item",[s("div",{staticClass:"swip-item"},[s("span",[t._v("能赚稿费的本地内容社区")])])]),s("mt-swipe-item",[s("div",{staticClass:"swip-item"},[s("p",[t._v("打开贴近看资讯")]),s("p",[t._v("领10元红包")])])])],1)],1),s("div",{staticClass:"right"},[s("div",{staticClass:"right-btn",on:{click:t.handleClick}},[t._v("下载贴近")])])])])},a=[],r=(s("7f7f"),s("2b0e")),o=s("ed08"),n=s("f121"),c=s("76a0");r["default"].component(c["Swipe"].name,c["Swipe"]),r["default"].component(c["SwipeItem"].name,c["SwipeItem"]);var u={name:"downloadBar",props:{placeholder:{type:Boolean,default:!0}},mounted:function(){},methods:{handleClick:function(t,e){var s=n["a"].download;Object(o["d"])({store:this.$store,route:this.$route,str:e,defaultStr:"direct_top",redirectUrl:s})}}},l=u,p=(s("5668"),s("2877")),d=Object(p["a"])(l,i,a,!1,null,"05087866",null);d.options.__file="downloadBar.vue";e["a"]=d.exports}}]);
//# sourceMappingURL=chunk-30109435.70b6504e.js.map