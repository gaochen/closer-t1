(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ce4ad424","chunk-ba485102"],{"029b":function(t,e,s){},"1ab4":function(t,e,s){},"23a2":function(t,e,s){"use strict";var i=s("1ab4"),a=s.n(i);a.a},"87cf":function(t,e,s){"use strict";var i=s("c294"),a=s.n(i);a.a},8901:function(t,e,s){},8927:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[this.$store.state.exist?s("section",{staticClass:"article"},[s("download-bar"),s("section",{staticClass:"article-wrap"},[s("section",{staticClass:"article-container bg-f"},[t.ENV.app?t._e():s("section",{staticClass:"article-title"},[t._v(" "+t._s(this.$store.state.res.title)+" ")]),s("focus-bar",{staticClass:"focus-bar",attrs:{showTime:""}}),s("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],staticClass:"article-content",on:{click:function(e){t.openClick(e)}}},[t.cover?s("div",{staticClass:"article-cover-box"},[s("img",{staticClass:"article-cover-img",attrs:{"data-src":t.makeFileUrl(t.cover),"data-type":"preview"}})]):t._e(),s("div",{staticClass:"content",domProps:{innerHTML:t._s(this.$store.state.content.html)}})]),s("author-bar")],1),s("like-bar",{staticClass:"like-bar",attrs:{author:!0}}),s("feed-list",{attrs:{subjectList:t.hotSubjects}}),s("message-board"),s("foot-bar")],1)],1):s("Notfound",{attrs:{isDelete:this.$store.state.res.bool_delete}})],1)},a=[],r=(s("96cf"),s("1da1")),o=s("be94"),n=(s("cadf"),s("551c"),s("097d"),s("a78e"),s("2f62")),c=s("ed08"),d=s("f8a4"),l=s("fb25"),u=s("c3f2"),h=s("c64e"),f=s("1a18"),m=s("d862"),A=s("26a9"),v=s("545f"),p={name:"Feed",components:{DownloadBar:l["a"],FootBar:u["a"],Notfound:d["a"],FocusBar:h["a"],LikeBar:f["a"],MessageBoard:m["a"],FeedList:A["a"],AuthorBar:v["a"]},data:function(){return{defaultImg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAGmAQMAAAAZMJMVAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURefn5ySG6Q8AAAA+SURBVHja7cExAQAAAMKg9U9tCj+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAvwGcmgABBZ8R+wAAAABJRU5ErkJggg==",vid:"",preSrc:"",preShow:!1}},computed:Object(o["a"])({},Object(n["d"])("common",["hotSubjects"]),{cover:function(){return this.$store.state.res.bigcover||this.$store.state.res.cover}}),methods:Object(o["a"])({},Object(n["b"])("common",["fetch_content","getHotSubjects","getUserInfoWithWx"]),{fetch:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={subjectid:this.$route.params.id},this.$route.query.udid&&this.$route.query.sto&&(e["share_udid"]=this.$route.query.udid,e["sto"]=this.$route.query.sto),t.next=4,this.fetch_content(e);case 4:this.$player.init(".content",{muted:!1,preload:!0,autoPlay:!0,loop:!1});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),clickImg:function(t){var e=t.target;this.ENV.app&&e.dataset.index?Object(c["k"])(e.dataset.index):e.dataset.src&&this.clickImgOuter(e.dataset.src)},clickImgOuter:function(t){this.preSrc=t,this.preShow=!0},openClick:function(t){var e=t.target;e.classList;this.ENV.app&&e.dataset.vid&&e.dataset.uid&&Object(c["b"])(e.dataset.uid,e.dataset.vid)},makeFileUrl:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Object(c["f"])(t)},listenToMyChild:function(t){this.preShow=t}}),mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.$route.query.code&&(e={plateform:2,code:this.$route.query.code,protocol:"WEB_SOCKET",adid:Cookies.get("h5Adid")||"closer-t1"},this.getUserInfoWithWx(e)),t.next=3,this.fetch();case 3:this.$store.dispatch("wx_config"),this.getHotSubjects(),this.$preview.init(".article-content");case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},g=p,b=(s("23a2"),s("2877")),k=Object(b["a"])(g,i,a,!1,null,null,null);k.options.__file="index.vue";e["default"]=k.exports},9991:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[this.$store.state.exist?s("div",{staticClass:"image-list"},[s("download-bar"),s("div",{staticClass:"focus-box"},[s("focus-bar",{attrs:{showTime:""}})],1),s("div",{staticClass:"feed-images"},[this.$store.state.res&&0===this.$store.state.res.int_type?s("section",{staticClass:"feed-img",attrs:{id:"imgListFeed"}},[this.$store.state.content?s("section",{staticClass:"feeder-title feeder-title-2 feeder-type-0"},[t._v(t._s(this.$store.state.content.text))]):t._e(),t.ENV.app?t._e():s("section",{staticClass:"feeder-images"},[this.$store.state.content.images&&1==this.$store.state.content.images.length?s("section",{staticClass:"feeder-img flex flex-pack-justify"},t._l(this.$store.state.content.images,function(e,i){return s("section",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.makeFileUrl(e.link),expression:"makeFileUrl(img.link)",arg:"background-image"}],key:i,staticClass:"feeder-img-list feeder-img-list-cell-1"},[s("img",{staticClass:"feeder-cover-list",attrs:{"data-src":t.makeFileUrl(e.link),"data-type":"preview"}}),e.link.indexOf(".gif")>-1||e.link.indexOf(".GIF")>-1?s("span",{staticClass:"cover_img_type"},[t._v("GIF图")]):e.width/e.height>=3?s("span",{staticClass:"cover_img_type"},[t._v("全景")]):e.height/e.width>=3?s("span",{staticClass:"cover_img_type"},[t._v("长图")]):t._e()])})):this.$store.state.content.images&&2==this.$store.state.content.images.length?s("section",{staticClass:"feeder-img flex flex-pack-justify"},t._l(this.$store.state.content.images,function(e,i){return s("section",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.makeFileUrl(e.link),expression:"makeFileUrl(img.link)",arg:"background-image"}],key:i,staticClass:"feeder-img-list feeder-img-list-cell-2"},[s("img",{staticClass:"feeder-cover-list",attrs:{"data-src":t.makeFileUrl(e.link),"data-type":"preview"}}),e.link.indexOf(".gif")>-1||e.link.indexOf(".GIF")>-1?s("span",{staticClass:"cover_img_type"},[t._v("GIF图")]):e.width/e.height>=3?s("span",{staticClass:"cover_img_type"},[t._v("全景")]):e.height/e.width>=3?s("span",{staticClass:"cover_img_type"},[t._v("长图")]):t._e()])})):this.$store.state.content.images&&3==this.$store.state.content.images.length||this.$store.state.content.images&&this.$store.state.content.images.length>4?s("section",{staticClass:"feeder-img flex"},t._l(this.$store.state.content.images,function(e,i){return s("section",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.makeFileUrl(e.link),expression:"makeFileUrl(img.link)",arg:"background-image"}],key:i,staticClass:"feeder-img-list feeder-img-list-cell-3"},[s("img",{staticClass:"feeder-cover-list",attrs:{"data-src":t.makeFileUrl(e.link),"data-type":"preview"}}),e.link.indexOf(".gif")>-1||e.link.indexOf(".GIF")>-1?s("span",{staticClass:"cover_img_type"},[t._v("GIF图")]):e.width/e.height>=3?s("span",{staticClass:"cover_img_type"},[t._v("全景")]):e.height/e.width>=3?s("span",{staticClass:"cover_img_type"},[t._v("长图")]):t._e()])})):this.$store.state.content.images&&4==this.$store.state.content.images.length?s("section",{staticClass:"feeder-img flex flex-pack-justify"},t._l(this.$store.state.content.images,function(e,i){return s("section",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.makeFileUrl(e.link),expression:"makeFileUrl(img.link)",arg:"background-image"}],key:i,staticClass:"feeder-img-list feeder-img-list-cell-4"},[s("img",{staticClass:"feeder-cover-list",attrs:{"data-src":t.makeFileUrl(e.link),"data-type":"preview"}}),e.link.indexOf(".gif")>-1||e.link.indexOf(".GIF")>-1?s("span",{staticClass:"cover_img_type"},[t._v("GIF图")]):e.width/e.height>=3?s("span",{staticClass:"cover_img_type"},[t._v("全景")]):e.height/e.width>=3?s("span",{staticClass:"cover_img_type"},[t._v("长图")]):t._e()])})):t._e()])]):t._e()]),s("div",{staticClass:"read-like"},[s("like-bar",{attrs:{author:!0}})],1),s("message-board"),s("feed-list",{attrs:{subjectList:t.hotSubjects}}),s("foot-bar")],1):s("Notfound",{attrs:{isDelete:this.$store.state.res.bool_delete}})],1)},a=[],r=(s("96cf"),s("1da1")),o=s("be94"),n=(s("2b0e"),s("2f62")),c=s("ed08"),d=s("fb25"),l=s("c64e"),u=s("1a18"),h=s("d862"),f=s("26a9"),m=s("c3f2"),A={name:"feed-img",props:{},components:{DownloadBar:d["a"],FocusBar:l["a"],LikeBar:u["a"],MessageBoard:h["a"],FeedList:f["a"],FootBar:m["a"]},data:function(){return{preSrc:"",preShow:!1}},computed:Object(o["a"])({},Object(n["d"])("common",{hotSubjects:function(t){return t.hotSubjects}})),mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.fetch();case 2:this.$store.dispatch("wx_config"),this.getHotSubjects(),this.$preview.init(".feed-images");case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),methods:Object(o["a"])({},Object(n["b"])("common",["getHotSubjects","getUserInfoWithWx","fetch_content"]),{fetch:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={subjectid:this.$route.params.id},this.$route.query.udid&&this.$route.query.sto&&(e["share_udid"]=this.$route.query.udid,e["sto"]=this.$route.query.sto),t.next=4,this.fetch_content(e);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),stringToJson:function(t){if(t)return JSON.parse(t)},makeFileUrl:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return console.log("url",decodeURI(t)),Object(c["f"])(t)},clickImg:function(t){var e=t.target;ENV.app&&e.dataset.index?Object(c["k"])(e.dataset.index):e.dataset.src&&this.clickImgOuter(e.dataset.src)},listenToMyChild:function(t){this.preShow=t},clickImgOuter:function(t){this.preSrc=t,this.preShow=!0},openClick:function(t){console.log("fdfadfdfd123131312;");var e=t.target;e.classList;ENV.app&&e.dataset.vid&&e.dataset.uid?Object(c["b"])(e.dataset.uid,e.dataset.vid):e.dataset.index&&this.ENV.app&&this.clickImg(t)}})},v=A,p=(s("e5e8"),s("2877")),g=Object(p["a"])(v,i,a,!1,null,"4ce8d2f4",null);g.options.__file="index.vue";e["default"]=g.exports},b007:function(t,e,s){"use strict";var i=s("bcb6"),a=s.n(i);a.a},b2af:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",["article"==t.currentComponent?s("tj-article"):"comment"==t.currentComponent?s("tj-comment"):"draft"==t.currentComponent?s("tj-draft"):"video"==t.currentComponent?s("tj-video"):"image"==t.currentComponent?s("tj-image"):"notfound"==t.currentComponent?s("not-found"):t._e()],1)},a=[],r=s("8927"),o=s("e878"),n=s("a8f1"),c=s("bb25"),d=s("9991"),l=(s("f8a4"),s("2f62"),{data:function(){return{currentComponent:""}},components:{tjArticle:r["default"],tjComment:o["default"],tjDraft:n["default"],tjVideo:c["default"],tjImage:d["default"]},computed:{},beforeCreate:function(){console.log("beforeCreate:",this.$route.params)},created:function(){var t=this.$route.query,e=t.type,s=t.category;this.currentComponent="2"==e?"3"==s?"comment":"1"==s||"2"==s?"draft":"article":"1"==e?"video":"0"==e?"image":"notfound"}}),u=l,h=s("2877"),f=Object(h["a"])(u,i,a,!1,null,null,null);f.options.__file="index.vue";e["default"]=f.exports},bb25:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[this.$store.state.exist?s("section",{staticClass:"video"},[s("download-bar",{attrs:{placeholder:t.videoInfo.height/t.videoInfo.width<1}}),s("section",{staticClass:"video-wrap"},[s("div",{staticClass:"video-main"},[s("video",{staticStyle:{width:"100%"},attrs:{src:t.videoInfo.src,"data-duration":t.videoInfo.duration,width:t.videoInfo.width,height:t.videoInfo.height,poster:t.videoInfo.img,controls:""}})]),s("section",{staticClass:"video-container bg-f"},[s("focus-bar",{staticClass:"focus-bar",attrs:{showTime:""}}),s("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],staticClass:"content",on:{click:function(e){t.openClick(e)}}},[this.$store.state.res.bigcover||this.$store.state.res.cover?s("div",{staticClass:"video-cover-box"},[s("img",{staticClass:"video-cover-img",attrs:{"data-src":t.makeFileUrl(this.$store.state.res.bigcover||this.$store.state.res.cover)}})]):t._e(),s("div",{staticClass:"video-content",domProps:{innerHTML:t._s(this.$store.state.content.text)}})]),s("author-bar")],1),s("like-bar",{staticClass:"like-bar",attrs:{author:!0}}),s("message-board"),s("feed-list",{attrs:{subjectList:t.hotSubjects}}),s("foot-bar")],1)],1):s("Notfound",{attrs:{isDelete:this.$store.state.res.bool_delete}})],1)},a=[],r=(s("96cf"),s("1da1")),o=s("be94"),n=(s("cadf"),s("551c"),s("097d"),s("a78e"),s("2f62")),c=s("ed08"),d=s("f8a4"),l=s("fb25"),u=s("c3f2"),h=s("c64e"),f=s("1a18"),m=s("d862"),A=s("26a9"),v=s("545f"),p={components:{DownloadBar:l["a"],FootBar:u["a"],Notfound:d["a"],FocusBar:h["a"],LikeBar:f["a"],MessageBoard:m["a"],FeedList:A["a"],AuthorBar:v["a"]},data:function(){return{defaultImg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAGmAQMAAAAZMJMVAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURefn5ySG6Q8AAAA+SURBVHja7cExAQAAAMKg9U9tCj+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAvwGcmgABBZ8R+wAAAABJRU5ErkJggg==",vid:"",video:{},playIconTimer:null,preSrc:"",preShow:!1}},computed:Object(o["a"])({},Object(n["d"])("common",{hotSubjects:function(t){return t.hotSubjects}}),{videoInfo:function(){var t=this.$store.state.content.videos&&this.$store.state.content.videos[0]||{};return console.log("video.duration",t.duration),{src:t.src,img:t.imageUrl,duration:t.duration,width:t.width,height:t.height}}}),methods:Object(o["a"])({},Object(n["c"])("video",["GET_USER_AGENT"]),Object(n["b"])("common",["getHotSubjects","getUserInfoWithWx","fetch_content"]),{fetch:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={subjectid:this.$route.params.id},this.$route.query.udid&&this.$route.query.sto&&(e["share_udid"]=this.$route.query.udid,e["sto"]=this.$route.query.sto),t.next=4,this.fetch_content(e);case 4:this.$player.init(".video",{muted:!1,preload:!0,autoPlay:!0,loop:!1});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),clickImg:function(t){var e=t.target;ENV.app&&e.dataset.index?Object(c["k"])(e.dataset.index):e.dataset.src&&this.clickImgOuter(e.dataset.src)},clickImgOuter:function(t){this.preSrc=t,this.preShow=!0},openClick:function(t){var e=t.target;e.classList;ENV.app&&e.dataset.vid&&e.dataset.uid?Object(c["b"])(e.dataset.uid,e.dataset.vid):e.dataset.index?this.clickImg(t):e.dataset.src&&!ENV.app&&this.clickImgOuter(e.dataset.src)},makeFileUrl:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return console.log("url",decodeURI(t)),Object(c["f"])(t)},listenToMyChild:function(t){this.preShow=t}}),mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.$route.query.code&&(e={plateform:2,code:this.$route.query.code,protocol:"WEB_SOCKET",adid:Cookies.get("h5Adid")||"closer-t1"},console.log("params---",e),this.getUserInfoWithWx(e)),t.next=3,this.fetch();case 3:this.$store.dispatch("wx_config"),console.log("params.id:",this.$route.params.id),this.getHotSubjects();case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},g=p,b=(s("e9a6"),s("2877")),k=Object(b["a"])(g,i,a,!1,null,"32fb65a2",null);k.options.__file="index.vue";e["default"]=k.exports},bcb6:function(t,e,s){},c294:function(t,e,s){},e5e8:function(t,e,s){"use strict";var i=s("029b"),a=s.n(i);a.a},e878:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[this.$store.state.exist?s("div",[s("download-bar"),s("div",{staticClass:"comment"},[t.ENV.app?t._e():s("div",{staticClass:"title"},[t._v("\n        "+t._s(this.$store.state.res.title)+"\n      ")]),s("focus-bar",{attrs:{showTime:""}}),s("div",{staticClass:"cover-box"},[s("img",{staticClass:"cover-img",attrs:{src:t.fileUrlParse(this.$store.state.res.bigcover||this.$store.state.res.cover),alt:"","data-type":"preview"}})]),s("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],staticClass:"content",domProps:{innerHTML:t._s(this.$store.state.content.html)},on:{click:function(e){t.openClick(e)}}}),t._l(this.$store.state.discuss,function(e,i){return s("div",{key:i,staticClass:"discuss"},[s("div",{staticClass:"discuss-content"},[s("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.fileUrlParse(e.avatar),expression:"fileUrlParse(item.avatar)",arg:"background-image"}],staticClass:"avatar"}),s("div",{staticClass:"info"},[s("div",{staticClass:"info-up"},[s("span",{staticClass:"nickname"},[t._v(t._s(e.nickname))])]),0===e.type?s("div",[e.weblink?s("div",{staticClass:"link",domProps:{innerHTML:t._s(e.newText)}}):s("div",{staticClass:"text"},[t._v("\n                "+t._s(e.text)+"\n              ")])]):1===e.type?s("div",[(t.ENV.app,s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.fileUrlParse(e.image.link),expression:"fileUrlParse(item.image.link)"}],staticClass:"image",style:{height:73*e.image.height/e.image.width+"vw"},attrs:{src:t.defaultImg,"data-type":"preview"}}))]):2===e.type?s("div",[t.ENV.app?s("div",{staticClass:"video",style:{background:"url("+e.video.imageUrl+") no-repeat center","background-size":"cover"},attrs:{"data-uid":e.video.src,"data-vid":e.video.vid},on:{click:function(e){t.openClick(e)}}},[s("div",{staticClass:"play-icon",attrs:{"data-uid":e.video.src,"data-vid":e.video.vid}})]):s("video",{staticClass:"video-out",staticStyle:{"object-fit":"fill"},attrs:{src:e.video.src,preload:"auto",controls:"",poster:e.video.imageUrl,playsinline:"true","webkit-playsinline":"true"}})]):3===e.type?s("div",[s("div",{staticClass:"feed",on:{click:function(s){t.tofeed(e.feed.feedId)}}},[s("img",{staticClass:"feed-img",attrs:{src:t.fileUrlParse(e.feed.imageUrl)}}),s("div",{staticClass:"feed-info"},[s("div",{staticClass:"feed-title"},[t._v(t._s(e.feed.title))]),s("div",{staticClass:"feed-summary"},[t._v(t._s(e.feed.summary))])])])]):t._e()])]),s("div",{staticClass:"line"})])}),this.$store.state.end_html?s("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],staticClass:"content",domProps:{innerHTML:t._s(this.$store.state.content.end_html)},on:{click:function(e){t.openClick(e)}}}):t._e(),s("author-bar")],2),s("like-bar",{staticClass:"like-bar"}),s("message-board"),s("feed-list",{attrs:{subject:t.hotSubjects}}),s("foot-bar"),s("preview-list",{attrs:{"preview-src":t.preSrc,"preview-show":t.preShow},on:{"preview-show":t.listenToMyChild}})],1):s("Notfound",{attrs:{isDelete:this.$store.state.res.bool_delete}})],1)},a=[],r=(s("96cf"),s("1da1")),o=s("be94"),n=s("ed08"),c=s("2f62"),d=s("f8a4"),l=s("26a9"),u=s("fb25"),h=s("c64e"),f=s("1a18"),m=s("d862"),A=s("c3f2"),v=s("545f"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.previewShow?s("transition",{attrs:{name:"fade"},on:{click:t.leave}},[s("section",{staticClass:"lg-preview-wrapper",on:{click:t.leave}},[s("img",{staticClass:"lg-preview-img",attrs:{src:t.previewSrc}})])]):t._e()},g=[],b={name:"Preview",props:["previewSrc","previewShow"],data:function(){return{}},methods:{leave:function(t){this.$emit("preview-show",!1)}}},k=b,_=(s("b007"),s("2877")),w=Object(_["a"])(k,p,g,!1,null,"094720d6",null);w.options.__file="previewList.vue";var C=w.exports,y={name:"commentIndex",components:{Notfound:d["a"],FeedList:l["a"],DownloadBar:u["a"],FocusBar:h["a"],LikeBar:f["a"],MessageBoard:m["a"],FootBar:A["a"],AuthorBar:v["a"],PreviewList:C},data:function(){return{defaultImg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAGmAQMAAAAZMJMVAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURefn5ySG6Q8AAAA+SURBVHja7cExAQAAAMKg9U9tCj+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAvwGcmgABBZ8R+wAAAABJRU5ErkJggg==",preSrc:"",preShow:!1}},created:function(){},computed:Object(o["a"])({},Object(c["d"])("common",{hotSubjects:function(t){return t.hotSubjects}})),beforeMount:function(){this.$store.commit("GET_VERSION"),this.$store.commit("SET_ENTER_TIME",Date.now()),this.$store.state.h5Adid?Cookies.set("h5Adid",this.$store.state.h5Adid):Cookies.set("h5Adid","")},mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("params.id:",this.$route.params.id),!this.$route.params.id){t.next=10;break}return e={subjectid:this.$route.params.id},this.$route.query.udid&&this.$route.query.sto&&(e["share_udid"]=this.$route.query.udid,e["sto"]=this.$route.query.sto),t.next=6,this.fetch_content(e);case 6:this.$store.dispatch("wx_config"),this.getHotSubjects(),this.$preview.init(".comment"),console.info("mapstate",c["d"]);case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),watch:{$route:function(t,e){this.$router.go(0)}},methods:Object(o["a"])({},Object(c["b"])("common",["getHotSubjects","fetch_content"]),{fileUrlParse:function(t,e,s){return Object(n["f"])(t,e,s)},openClick:function(t){var e=t.target;console.log("openClick",e.dataset),e.dataset.vid&&e.dataset.uid&&Object(n["b"])(e.dataset.uid,e.dataset.vid)},clickImg:function(t){var e=t.target;console.log("target",e.dataset),ENV.app&&e.dataset.index?Object(n["k"])(e.dataset.index):e.dataset.src&&this.clickImgOuter(e.dataset.src)},clickImgOuter:function(t){this.preSrc=t,this.preShow=!0},tofeed:function(t){ENV.app?location.href="closer://feed/".concat(t):this.$router.push({path:"/feed/".concat(t,"?type=2")})},listenToMyChild:function(t){this.preShow=t}})},$=y,x=(s("87cf"),Object(_["a"])($,i,a,!1,null,"528cad15",null));x.options.__file="index.vue";e["default"]=x.exports},e9a6:function(t,e,s){"use strict";var i=s("8901"),a=s.n(i);a.a}}]);
//# sourceMappingURL=chunk-ce4ad424.e19fcb76.js.map