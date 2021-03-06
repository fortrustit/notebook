webpackJsonp([3],{264:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(299),a=s(o);e.default={computed:{matchedRoutes:function(){return this.$route.matched.slice()}},methods:{refresh:function(){var t=(0,a.default)(this.$route.path);this.$router.go("/redirect?dest="+t)},back:function(){history.back()}}}},266:function(t,e,n){"use strict";function s(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}Object.defineProperty(e,"__esModule",{value:!0});var o=n(33),a=s(o);e.default={data:function(){return{accountInfo:JSON.parse(localStorage.accountInfo)}},methods:{close:function(){this.$parent.hide()},logout:function(){this.$store.dispatch(a.USER_LOG_OUT)}}}},267:function(t,e,n){"use strict";function s(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(12),i=o(a),r=n(18),l=n(444),c=o(l),u=n(33),f=s(u);e.default={components:{AccountInfo:c.default},computed:(0,i.default)({},(0,r.mapGetters)({accountInfo:"accountInfo"})),methods:{closeOption:function(){this.$emit("close-account-option")},showAccountInfo:function(){this.$refs.accountInfoDialog.show()},logout:function(){this.closeOption(),this.$store.dispatch(f.USER_LOG_OUT)}}}},268:function(t,e,n){"use strict";function s(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(305),i=o(a),r=n(12),l=o(r),c=n(18),u=n(445),f=o(u),d=n(449),v=o(d),p=n(7),_=s(p);e.default={components:{AccountSetting:f.default,Search:v.default},data:function(){return{showAccountSetting:!1}},computed:(0,l.default)({},(0,c.mapGetters)({accountInfo:"accountInfo"})),methods:{accountOptions:function(t){[].concat((0,i.default)(t.target.classList)).indexOf("account-name")>=0&&(this.showAccountSetting=!0)},closeAccountOptions:function(){this.showAccountSetting=!1},syncNote:function(){this.$store.dispatch(_.GET_NOTE_UPDATE_LIST)}}}},270:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},271:function(t,e,n){"use strict";function s(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}Object.defineProperty(e,"__esModule",{value:!0});var o=n(7),a=s(o);e.default={data:function(){return{showResultList:!1,keyWords:"",resultData:{notes:{},notebooks:{}}}},methods:{toggleResultList:function(t){"show"===t?this.showResultList=!0:setTimeout(function(){this.showResultList=!1}.bind(this),100)},clearKeyWords:function(){this.keyWords=""},jumpToNote:function(t){this.$store.commit(a.CHANGE_ACTIVE_NOTE,{noteInfo:t}),this.$router.replace("/note/"+t.notebookId)},jumpToNotebook:function(t){this.$router.replace("/note/"+t.id)}},watch:{keyWords:function(t){""===t?this.resultData={notes:{},notebooks:{}}:this.resultData={notes:this.$store.state.note.notesList.filter(function(e){return e.title.indexOf(t)>=0||e.content.indexOf(t)>=0}),notebooks:this.$store.state.notebooks.notebooksList.filter(function(e){return e.name.indexOf(t)>=0})}}}}},272:function(t,e,n){"use strict";function s(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(12),i=o(a),r=n(7),l=s(r),c=n(18);e.default={methods:{linkToTag:function(){this.$store.commit(l.CHANGE_ACTIVE_NOTE,{noteInfo:this.notesList.length?this.notesList[0]:{}}),this.$router.replace("/note/all")},linkToRecentNote:function(t){this.$store.commit(l.CHANGE_ACTIVE_NOTE,{noteInfo:t}),this.$router.replace("/note/"+t.notebookId)},isNoteActive:function(t){var e=this.$store.state.note.currentNote;return 0===this.$route.path.indexOf("/note/"+t.notebookId)&&t.id===e.id}},computed:(0,i.default)({recentNote:function(){var t=this.$store.state.note.notesList;return t.length?t.slice(0,5):[]}},(0,c.mapGetters)({notesList:"notesList"}))}},273:function(t,e,n){"use strict";function s(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(446),i=o(a),r=n(450),l=o(r),c=n(442),u=o(c),f=n(19),d=s(f),v=n(7),p=s(v),_=n(448),h=o(_);e.default={components:{Navbar:i.default,Sidebar:l.default,Breadcrumb:u.default,ReqLoading:h.default},data:function(){return{userData:null}},created:function(){return!!localStorage.accountInfo&&(this.$store.dispatch(d.GET_NOTEBOOKS_LIST),void(this.$store.state.note.notesList.length?this.$store.dispatch(p.GET_NOTE_UPDATE_LIST):this.$store.dispatch(p.GET_NOTE_LIST)))}}},299:function(t,e){"use strict";function n(t){return t?t.split("?")[0]:""}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},301:function(t,e,n){t.exports={default:n(307),__esModule:!0}},305:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(301),a=s(o);e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,a.default)(t)}},307:function(t,e,n){n(65),n(337),t.exports=n(3).Array.from},318:function(t,e,n){"use strict";var s=n(9),o=n(30);t.exports=function(t,e,n){e in t?s.f(t,e,o(0,n)):t[e]=n}},337:function(t,e,n){"use strict";var s=n(27),o=n(8),a=n(39),i=n(96),r=n(95),l=n(61),c=n(318),u=n(107);o(o.S+o.F*!n(98)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,o,f,d=a(t),v="function"==typeof this?this:Array,p=arguments.length,_=p>1?arguments[1]:void 0,h=void 0!==_,m=0,g=u(d);if(h&&(_=s(_,p>2?arguments[2]:void 0,2)),void 0==g||v==Array&&r(g))for(e=l(d.length),n=new v(e);e>m;m++)c(n,m,h?_(d[m],m):d[m]);else for(f=g.call(d),n=new v;!(o=f.next()).done;m++)c(n,m,h?i(f,_,[o.value,m],!0):o.value);return n.length=m,n}})},353:352,355:352,442:function(t,e,n){var s=n(2)(n(264),n(473),null,null,null);t.exports=s.exports},444:function(t,e,n){var s=n(2)(n(266),n(475),null,null,null);t.exports=s.exports},445:function(t,e,n){var s=n(2)(n(267),n(477),null,null,null);t.exports=s.exports},446:function(t,e,n){var s=n(2)(n(268),n(484),null,null,null);t.exports=s.exports},448:function(t,e,n){var s=n(2)(n(270),n(472),null,null,null);t.exports=s.exports},449:function(t,e,n){function s(t){n(353)}var o=n(2)(n(271),n(465),s,null,null);t.exports=o.exports},450:function(t,e,n){var s=n(2)(n(272),n(467),null,null,null);t.exports=s.exports},451:function(t,e,n){function s(t){n(355)}var o=n(2)(n(273),n(478),s,null,null);t.exports=o.exports},465:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-components-bg"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.keyWords,expression:"keyWords"}],staticClass:"btn search-btn",attrs:{type:"text",placeholder:"Search notes"},domProps:{value:t.keyWords},on:{focus:function(e){t.toggleResultList("show")},blur:function(e){t.toggleResultList("hide")},input:function(e){e.target.composing||(t.keyWords=e.target.value)}}}),t._v(" "),n("i",{directives:[{name:"show",rawName:"v-show",value:t.keyWords,expression:"keyWords"}],staticClass:"fa fa-times-circle clear-key-words",on:{click:t.clearKeyWords}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showResultList&&t.keyWords,expression:"showResultList && keyWords"}],staticClass:"result-list"},[n("label",{staticClass:"sub-title"},[t._v("notes")]),t._v(" "),n("ul",{staticClass:"result-ul"},[t._l(t.resultData.notes,function(e,s){return n("li",{key:s,staticClass:"result-li txt-ellipsis",on:{click:function(n){t.jumpToNote(e)}}},[t._v(t._s(e.title))])}),t._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:!t.resultData.notes.length,expression:"!resultData.notes.length"}],staticClass:"result-li txt-ellipsis no-result"},[t._v("no result")])],2),t._v(" "),n("label",{staticClass:"sub-title"},[t._v("notebooks")]),t._v(" "),n("ul",{staticClass:"result-ul"},[t._l(t.resultData.notebooks,function(e,s){return n("li",{key:s,staticClass:"result-li txt-ellipsis",on:{click:function(n){t.jumpToNotebook(e)}}},[t._v(t._s(e.name))])}),t._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:!t.resultData.notebooks.length,expression:"!resultData.notebooks.length"}],staticClass:"result-li txt-ellipsis no-result"},[t._v("no result")])],2)])])},staticRenderFns:[]}},467:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{directives:[{name:"show",rawName:"v-show",value:t.recentNote.length>0,expression:"recentNote.length > 0"}],staticClass:"recent-notes-title"},[t._v("Recent Notes")]),t._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.recentNote.length>0,expression:"recentNote.length > 0"}],staticClass:"recent-notes"},t._l(t.recentNote,function(e,s){return n("li",{key:s,staticClass:"note-link",class:{active:t.isNoteActive(e)}},[n("a",{staticClass:"link-a",on:{click:function(n){t.linkToRecentNote(e)}}},[t._v(t._s(e.title))])])})),t._v(" "),n("ul",{staticClass:"menu-list"},[n("li",{staticClass:"menu-link"},[n("a",{staticClass:"vlink notes-link",class:{active:0===t.$route.path.indexOf("/note/")},on:{click:t.linkToTag}},[t._v("Notes")])]),t._v(" "),n("li",{staticClass:"menu-link"},[n("router-link",{staticClass:"vlink notebooks-link",class:{active:0===t.$route.path.indexOf("/notebooks")},attrs:{to:"/notebooks"}},[t._v("\n        Notebooks\n      ")])],1),t._v(" "),n("li",{staticClass:"menu-link"},[n("router-link",{staticClass:"vlink tags-link",class:{active:0===t.$route.path.indexOf("/tags")},attrs:{to:"/tags"}},[t._v("\n        Tags\n      ")])],1)])])},staticRenderFns:[]}},472:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"req-loading-bg"},[n("div",{class:{"loading-complete":0===t.$store.state.loading.loading.length,"loading-progress":t.$store.state.loading.loading.length>0}},[n("div",{staticClass:"loading-animation"})])])},staticRenderFns:[]}},473:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"breadcrumb clearfix"},[n("i",{staticClass:"fa fa-map-marker m-r-5"}),t._v(" "),t._l(t.matchedRoutes,function(e){return n("li",{class:{active:t.$index===t.matchedRoutes.length-1}},[t.$index===t.matchedRoutes.length-1?n("span",[t._v("\n      "+t._s(e.handler.title)+"\n    ")]):n("a",{directives:[{name:"link",rawName:"v-link",value:e.handler.fullPath,expression:"route.handler.fullPath"}]},[t._v("\n      "+t._s(e.handler.title)+"\n    ")])])}),t._v(" "),n("button",{staticClass:"btn btn-default btn-xs pull-right",on:{click:t.refresh}},[n("i",{staticClass:"fa fa-refresh m-r-5"}),t._v("\n    强制刷新\n  ")]),t._v(" "),n("button",{staticClass:"btn btn-default btn-xs pull-right",on:{click:t.back}},[n("i",{staticClass:"fa fa-reply m-r-5"}),t._v("\n    返回\n  ")])],2)},staticRenderFns:[]}},475:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"account-info-body"},[n("section",{staticClass:"image-and-operate"},[t._m(0),t._v(" "),n("p",{staticClass:"user-name"},[t._v(t._s(t.accountInfo.userName))]),t._v(" "),n("p",{staticClass:"user-email"},[t._v(t._s(t.accountInfo.email))]),t._v(" "),n("section",{staticClass:"operate-section"},[n("button",{staticClass:"btn",on:{click:t.logout}},[t._v("Log Out")]),t._v(" "),n("button",{staticClass:"btn",on:{click:t.close}},[t._v("close")])])]),t._v(" "),n("section",{staticClass:"account-info-section"},[n("h3",{staticClass:"title"},[t._v("Account Info")]),t._v(" "),n("div",{staticClass:"form-item"},[n("label",{staticClass:"form-label"},[t._v("User Name:")]),t._v(" "),n("span",{staticClass:"form-content"},[t._v(t._s(t.accountInfo.userName))])]),t._v(" "),n("div",{staticClass:"form-item"},[n("label",{staticClass:"form-label"},[t._v("Nick Name:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.accountInfo.userName,expression:"accountInfo.userName"}],staticClass:"form-control",attrs:{type:"text",maxlength:"10"},domProps:{value:t.accountInfo.userName},on:{input:function(e){e.target.composing||t.$set(t.accountInfo,"userName",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-item"},[n("label",{staticClass:"form-label"},[t._v("Phone:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.accountInfo.phoneNum,expression:"accountInfo.phoneNum"}],staticClass:"form-control",attrs:{type:"text",maxlength:"11"},domProps:{value:t.accountInfo.phoneNum},on:{input:function(e){e.target.composing||t.$set(t.accountInfo,"phoneNum",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-item"},[n("label",{staticClass:"form-label"},[t._v("Introduction:")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.accountInfo.introduction,expression:"accountInfo.introduction"}],staticClass:"form-control",attrs:{rows:"4"},domProps:{value:t.accountInfo.introduction},on:{input:function(e){e.target.composing||t.$set(t.accountInfo,"introduction",e.target.value)}}})])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-image-div"},[n("img",{staticClass:"user-image",attrs:{src:"http://oxjejkjw8.bkt.clouddn.com/image/dog.jpg",alt:"user-image"}})])}]}},477:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"account-setting"},[n("div",{staticClass:"image-and-name"},[n("img",{staticClass:"account-iamge",attrs:{src:"http://oxjejkjw8.bkt.clouddn.com/image/dog.jpg",alt:"img"}}),t._v(" "),n("span",{staticClass:"txt-ellipsis account-name-span"},[t._v(t._s(t.accountInfo.userName))])]),t._v(" "),n("p",{staticClass:"account-info-p",on:{click:t.showAccountInfo}},[t._v("Account Info...")]),t._v(" "),n("p",{staticClass:"log-out-p",on:{click:t.logout}},[t._v("Log Out")]),t._v(" "),n("div",{staticClass:"account-setting-bg",on:{click:t.closeOption}}),t._v(" "),n("vue-popup",{ref:"accountInfoDialog"},[n("account-info")],1)],1)},staticRenderFns:[]}},478:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("req-loading"),t._v(" "),n("navbar"),t._v(" "),n("div",{staticClass:"main-content"},[n("div",{staticClass:"left-menu"},[n("sidebar")],1),t._v(" "),n("div",{staticClass:"right-content"},[n("router-view",{attrs:{transition:"fade","transition-mode":"out-in"}})],1)])],1)},staticRenderFns:[]}},484:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-default"},[n("h1",{staticClass:"page-title"},[t._v("Notebooks")]),t._v(" "),n("div",{staticClass:"top-function-bar"},[n("span",{staticClass:"fa fa-angle-left",staticStyle:{display:"none"}}),t._v(" "),n("span",{staticClass:"fa fa-angle-right",staticStyle:{display:"none"}}),t._v(" "),n("span",{staticClass:"fa fa-user-o",on:{click:t.accountOptions}}),t._v(" "),n("span",{staticClass:"account-name txt-ellipsis",on:{click:t.accountOptions}},[t._v("\n      "+t._s(t.accountInfo.userName)+"\n      "),t.showAccountSetting?n("account-setting",{on:{"close-account-option":t.closeAccountOptions}}):t._e()],1),t._v(" "),n("span",{staticClass:"fa fa-refresh",on:{click:t.syncNote}}),t._v(" "),n("span",{staticClass:"fa fa-bell-o"}),t._v(" "),n("div",{staticClass:"right-section"},[n("search")],1)])])},staticRenderFns:[]}}});