webpackJsonp([2],{0:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var u=n(26),r=o(u);n(231);var a=n(20),i=o(a);n(398);var s=n(400),l=o(s),c=n(412),f=o(c),d=n(402),_=o(d),p=n(224),v=o(p);n(232),_.default.checkLogin().then(function(t){if(t){var e=f.default.data;f.default.data=function(){return(0,r.default)({},e(),{userData:t})}}new i.default({el:"#app",store:v.default,router:l.default,render:function(t){return t(f.default)}})}),console.info("[当前环境] 生产环境"),i.default.config.devtools=!1},14:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.GET_NOTE_LIST="GET_NOTE_LIST",e.GET_NOTE_LIST_REQUEST="GET_NOTE_LIST_REQUEST",e.GET_NOTE_LIST_SUCCESS="GET_NOTE_LIST_SUCCESS",e.GET_NOTE_LIST_FAILURE="GET_NOTE_LIST_FAILURE",e.UPDATE_CURRENT_NOTE="UPDATE_CURRENT_NOTE",e.SAVE_NOTE="SAVE_NOTE",e.CHANGE_ACTIVE_NOTE="CHANGE_ACTIVE_NOTE",e.CREATE_NEW_NOTE="CREATE_NEW_NOTE"},43:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.CHANGE_ORDER_TYPE="CHANGE_ORDER_TYPE",e.GET_NOTEBOOKS_LIST="GET_NOTEBOOKS_LIST",e.GET_NOTEBOOKS_LIST_REQUEST="GET_NOTEBOOKS_LIST_REQUEST",e.GET_NOTEBOOKS_LIST_SUCCESS="GET_NOTEBOOKS_LIST_SUCCESS",e.GET_NOTEBOOKS_LIST_FAILURE="GET_NOTEBOOKS_LIST_FAILURE"},70:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(404).default;e.default=o},223:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u=n(67),r=o(u),a=n(68),i=o(a),s=n(70),l=o(s),c=function(){function t(){(0,r.default)(this,t)}return(0,i.default)(t,[{key:"fetchList",value:function(){return(0,l.default)({url:"/notebook/notebooksList"})}},{key:"newNotebook",value:function(t){return(0,l.default)({url:"/notebook/newNotebook",method:"post",body:t})}}]),t}();e.default=new c},224:function(t,e,n){"use strict";function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function u(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(20),a=u(r),i=n(19),s=u(i),l=n(405),c=o(l),f=n(406),d=o(f),_=n(407),p=u(_),v=n(409),E=u(v),T=n(408),O=u(T);a.default.use(s.default);var h=!1;e.default=new s.default.Store({actions:c,getters:d,modules:{loading:p.default,notebooks:E.default,note:O.default},strict:h})},225:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.LOADING_CHANGE="LOADING_CHANGE"},232:function(t,e){},235:function(t,e){t.exports=" <div> <req-loading></req-loading> <navbar></navbar> <div class=main-content> <div class=left-menu> <sidebar></sidebar> </div> <div class=right-content> <router-view transition=fade transition-mode=out-in></router-view> </div> </div> </div> "},236:function(t,e){t.exports=' <ul class="breadcrumb clearfix"> <i class="fa fa-map-marker m-r-5"></i> <li v-for="route in matchedRoutes" :class="{ \'active\': $index === matchedRoutes.length - 1 }"> <span v-if="$index === matchedRoutes.length - 1"> {{ route.handler.title }} </span> <a v-else v-link=route.handler.fullPath> {{ route.handler.title }} </a> </li> <button @click=refresh class="btn btn-default btn-xs pull-right"> <i class="fa fa-refresh m-r-5"></i> 强制刷新 </button> <button @click=back class="btn btn-default btn-xs pull-right"> <i class="fa fa-reply m-r-5"></i> 返回 </button> </ul> '},237:function(t,e){t.exports=' <nav class="navbar navbar-default"> <h1 class=page-title>Notebooks</h1> <div class=top-function-bar> <span class="fa fa-angle-left"></span> <span class="fa fa-angle-right"></span> <span class="fa fa-user-o"></span> <span class=account-name>Ash</span> <span class="fa fa-refresh"></span> <span class="fa fa-bell-o"></span> <div class="right-section txt-ellipsis"> <input type=text class="btn search-btn" placeholder="Search notes"/> </div> </div> </nav> '},239:function(t,e){t.exports=" <div class=req-loading-bg> <div :class=\"{\n      'loading-complete': $store.state.loading.loading.length === 0,\n      'loading-progress': $store.state.loading.loading.length > 0\n    }\"> <div class=loading-animation></div> </div> </div> "},240:function(t,e){t.exports=' <div> <p class=recent-notes-title v-show="recentNote.length > 0">Recent Notes</p> <ul class=recent-notes v-show="recentNote.length > 0"> <li class=note-link v-for="(note, index) in recentNote" :key=index :class="{ active: isNoteActive(note) }"> <a class=link-a @click=linkToRecentNote(note)>{{note.title}}</a> </li> </ul> <ul class=menu-list> <li class=menu-link> <a class="vlink notes-link" :class="{ active: $route.path.indexOf(\'/note/\') === 0}" @click=linkToTag>Notes</a> </li> <li class=menu-link> <router-link class="vlink notebooks-link" :class="{ active: $route.path.indexOf(\'/notebooks\') === 0}" to=/notebooks> Notebooks </router-link> </li> <li class=menu-link> <router-link class="vlink tags-link" :class="{ active: $route.path.indexOf(\'/tags\') === 0}" to=/tags> Tags </router-link> </li> </ul> </div> '},383:function(t,e,n){"use strict";function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function u(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(414),a=u(r),i=n(417),s=u(i),l=n(413),c=u(l),f=n(43),d=o(f),_=n(14),p=o(_),v=n(416),E=u(v);e.default={components:{Navbar:a.default,Sidebar:s.default,Breadcrumb:c.default,ReqLoading:E.default},data:function(){return{userData:null}},created:function(){this.$store.state.notebooks.notebooksList.length||"/note/all"===this.$route.path||this.$store.dispatch(d.GET_NOTEBOOKS_LIST),this.$store.state.note.notesList.length||this.$store.dispatch(p.GET_NOTE_LIST)}}},384:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u=n(411),r=o(u);e.default={computed:{matchedRoutes:function(){return this.$route.matched.slice()}},methods:{refresh:function(){var t=(0,r.default)(this.$route.path);this.$router.go("/redirect?dest="+t)},back:function(){history.back()}}}},385:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},387:385,388:function(t,e,n){"use strict";function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function u(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(26),a=u(r),i=n(14),s=o(i),l=n(19);e.default={methods:{linkToTag:function(){this.$store.commit(s.CHANGE_ACTIVE_NOTE,{noteInfo:this.notesList.length?this.notesList[0]:{}}),this.$router.replace("/note/all")},linkToRecentNote:function(t){this.$store.commit(s.CHANGE_ACTIVE_NOTE,{noteInfo:t}),this.$router.replace("/note/"+t.notebookId)},isNoteActive:function(t){var e=this.$store.state.note.currentNote;return 0===this.$route.path.indexOf("/note/"+t.notebookId)&&t.id===e.id}},computed:(0,a.default)({recentNote:function(){var t=this.$store.state.note.notesList;return t.length?t.slice(0,5):[]}},(0,l.mapGetters)({notesList:"notesList"}))}},397:function(t,e){"use strict";function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return window.moment(t).format(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},398:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var u=n(20),r=o(u);r.default.filter("dateTimeFormatter",n(397).default),r.default.filter("noteFilter",n(399).default)},399:function(t,e){"use strict";function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e?t.map(function(t){return t.notebookId===e}):t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},400:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u=n(20),r=o(u),a=n(294),i=o(a),s=n(401),l=o(s);r.default.use(i.default);var c=new i.default({suppressTransitionError:!0,routes:l.default});e.default=c},401:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{path:"/",component:function(t){n.e(0,function(e){var n=[e(418)];t.apply(null,n)}.bind(this))},redirect:function(t){return"/notebooks"}},{path:"/notebooks",component:function(t){n.e(0,function(e){var n=[e(425)];t.apply(null,n)}.bind(this))}},{path:"/note",component:function(t){n.e(0,function(e){var n=[e(419)];t.apply(null,n)}.bind(this))},children:[{path:"/note/:notebookId",component:function(t){n.e(0,function(e){var n=[e(420)];t.apply(null,n)}.bind(this))}}]}]},402:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u=n(67),r=o(u),a=n(68),i=o(a),s=n(70),l=o(s),c=function(){function t(){(0,r.default)(this,t)}return(0,i.default)(t,[{key:"checkLogin",value:function(){return(0,l.default)({url:"/auth/checkLogin"})}},{key:"login",value:function(t){return(0,l.default)({method:"post",url:"/auth/login",body:t})}},{key:"logout",value:function(){return(0,l.default)({method:"delete",url:"/auth/logout"})}}]),t}();e.default=new c},403:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u=n(67),r=o(u),a=n(68),i=o(a),s=n(70),l=o(s),c=function(){function t(){(0,r.default)(this,t)}return(0,i.default)(t,[{key:"fetchList",value:function(){return(0,l.default)({url:"/note/notesList"})}},{key:"newNotebook",value:function(t){return(0,l.default)({url:"/note/newNote",method:"post",body:t})}},{key:"saveNote",value:function(t){return(0,l.default)({url:"/note/saveNote",method:"post",body:t})}},{key:"newNote",value:function(t){return(0,l.default)({url:"/note/newNote",method:"post",body:t})}}]),t}();e.default=new c},404:function(t,e,n){"use strict";function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function u(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(379),a=u(r),i=n(378),s=u(i),l=n(382),c=u(l),f=n(428),d=u(f),_=n(224),p=u(_),v=n(225),E=o(v),T="/api",O=function(t){var e=t.method,n=void 0===e?"get":e,o=t.url,u=t.body,r=void 0===u?null:u,i=function(t){var e="",n="object"===("undefined"==typeof t?"undefined":(0,c.default)(t))?t:{};return(0,s.default)(n||{}).forEach(function(t,o){e+=(0===o?"?":"&")+t+"="+n[t]}),e},l=new a.default(function(t,e){var u=T+o+("get"===n?i(r):"");p.default.commit(E.LOADING_CHANGE,{path:T,loading:!0}),(0,d.default)({method:n,url:u,data:r}).then(function(n){var o=n.status,u=n.data;return p.default.commit(E.LOADING_CHANGE,{path:T,loading:!1}),200!==o?e(u):void t(u.data)}).catch(function(t){p.default.commit(E.LOADING_CHANGE,{path:T,loading:!1}),console.log(t,2)})});return l};e.default=O},405:function(t,e,n){"use strict";function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}Object.defineProperty(e,"__esModule",{value:!0}),e.addToCart=void 0;var u=n(410),r=o(u);e.addToCart=function(t,e){var n=t.commit;e.inventory>0&&n(r.ADD_TO_CART,{id:e.id})}},406:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.cartProducts=function(t){return t.cart.added.map(function(e){var n=e.id,o=e.quantity,u=t.products.all.find(function(t){return t.id===n});return{title:u.title,price:u.price,quantity:o}})}},407:function(t,e,n){"use strict";function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function u(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(69),a=u(r),i=n(225),s=o(i),l={loading:[]},c={loading:function(t){return t.loading}},f={},d=(0,a.default)({},s.LOADING_CHANGE,function(t,e){var n=e.path,o=e.loading,u=t.loading;o?u.push(n):u.splice(u[u.indexOf(n)],1)});e.default={state:l,getters:c,actions:f,mutations:d}},408:function(t,e,n){"use strict";function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function u(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r,a,i=n(66),s=u(i),l=n(42),c=u(l),f=n(69),d=u(f),_=n(14),p=o(_),v=n(403),E=u(v),T=n(1),O=u(T),h={noteUpdateInfo:JSON.parse(localStorage.noteUpdateInfo||"[]"),notesList:JSON.parse(localStorage.notesList||"[]"),currentNote:{}},N={noteUpdateInfo:function(t){return t.noteUpdateInfo},notesList:function(t){return t.notesList},currentNote:function(t){return t.currentNote}},b=(r={},(0,d.default)(r,p.GET_NOTE_LIST,function(t){var e=t.commit;t.state;E.default.fetchList().then(function(t){e(p.GET_NOTE_LIST_SUCCESS,{data:t})},function(){e(p.GET_NOTE_LIST_FAILURE)})}),(0,d.default)(r,p.SAVE_NOTE,function(t,e){var n=this;t.commit,t.state;E.default.saveNote(e).then(function(t){console.log("save note success!"),n.dispatch(p.GET_NOTE_LIST)},function(){console.log("save note error!")})}),(0,d.default)(r,p.CREATE_NEW_NOTE,function(t,e){var n=this,o=t.commit;t.state;E.default.newNote(e).then(function(t){console.log("new note success!"),o(p.UPDATE_CURRENT_NOTE,{noteInfo:t}),n.dispatch(p.GET_NOTE_LIST)},function(){console.log("new note error!")})}),r),m=(a={},(0,d.default)(a,p.GET_NOTE_LIST_SUCCESS,function(t,e){var n=e.data;t.notesList=n,localStorage.notesList=(0,c.default)(n),n.length&&(t.currentNote=(0,s.default)({},n[0]))}),(0,d.default)(a,p.GET_NOTE_LIST_FAILURE,function(t,e){e.data;t.notesList=[]}),(0,d.default)(a,p.UPDATE_CURRENT_NOTE,function(t,e){var n=e.noteInfo;t.currentNote=(0,s.default)(t.currentNote,n,{updateTime:(0,O.default)().format("x")})}),(0,d.default)(a,p.CHANGE_ACTIVE_NOTE,function(t,e){var n=e.noteInfo;t.currentNote=n}),a);e.default={state:h,getters:N,actions:b,mutations:m}},409:function(t,e,n){"use strict";function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function u(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r,a=n(69),i=u(a),s=n(42),l=u(s),c=n(43),f=o(c),d=n(223),_=u(d),p={orderType:"name",notebooksList:JSON.parse(localStorage.notebooksList||"[]")},v={notebooksList:function(t){return t.notebooksList}},E=(0,i.default)({},f.GET_NOTEBOOKS_LIST,function(t){var e=t.commit;t.state;_.default.fetchList().then(function(t){e(f.GET_NOTEBOOKS_LIST_SUCCESS,{data:t}),localStorage.notebooksList=(0,l.default)(t)},function(){e(f.GET_NOTEBOOKS_LIST_FAILURE)})}),T=(r={},(0,i.default)(r,f.CHANGE_ORDER_TYPE,function(t,e){var n=e.type;t.orderType=n}),(0,i.default)(r,f.GET_NOTEBOOKS_LIST_FAILURE,function(t){t.notebooksList=[]}),(0,i.default)(r,f.GET_NOTEBOOKS_LIST_SUCCESS,function(t,e){var n=e.data;t.notebooksList=n}),r);e.default={state:p,getters:v,actions:E,mutations:T}},410:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.ADD_TO_CART="ADD_TO_CART"},411:function(t,e){"use strict";function n(t){return t?t.split("?")[0]:""}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},412:function(t,e,n){var o,u,r={};o=n(383),u=n(235),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var a="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;u&&(a.template=u),a.computed||(a.computed={}),Object.keys(r).forEach(function(t){var e=r[t];a.computed[t]=function(){return e}})},413:function(t,e,n){var o,u,r={};o=n(384),u=n(236),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var a="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;u&&(a.template=u),a.computed||(a.computed={}),Object.keys(r).forEach(function(t){var e=r[t];a.computed[t]=function(){return e}})},414:[447,385,237],416:[447,387,239],417:[447,388,240],447:function(t,e,n,o,u){var r,a,i={};r=n(o),a=n(u),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports.default);var s="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;a&&(s.template=a),s.computed||(s.computed={}),Object.keys(i).forEach(function(t){var e=i[t];s.computed[t]=function(){return e}})}});