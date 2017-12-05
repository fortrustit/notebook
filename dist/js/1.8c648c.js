webpackJsonp([1],{274:function(t,e,r){"use strict";function s(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=r(25),o=a(n),i=r(12),u=a(i),l=r(33),c=s(l),m=r(300),d=s(m),p=r(73),f=a(p);e.default={data:function(){return{activeSection:"signIn",formData:{userName:"",password:"",email:""},errorMsg:{}}},methods:{changeSection:function(t){return this.formData={userName:"",password:"",email:""},this.errorMsg={},this.activeSection=t},validateCheck:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){var e=d[t+"Format"](this.formData[t]);e?this.errorMsg=(0,u.default)({},this.errorMsg,(0,o.default)({},t,e)):(delete this.errorMsg[t],this.errorMsg=(0,u.default)({},this.errorMsg))}.bind(this))},singIn:function(){if(this.validateCheck("userName","password"),(0,f.default)(this.errorMsg))return this.$store.dispatch(c.USER_SIGN_IN,this.formData)},singUp:function(){if(this.validateCheck("userName","email","password"),(0,f.default)(this.errorMsg))return this.$store.dispatch(c.USER_SIGN_UP,this.formData)}}}},275:function(t,e,r){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=r(452),n=s(a);e.default={components:{AccountSection:n.default}}},300:function(t,e){"use strict";function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e="";return t?/^[a-z]{1}[a-z\d]{3,11}$/.test(t)||(e="Username format error !"):e="Username is required !",e}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e="";return t?/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(t)||(e="Email format error !"):e="Email is required !",e}function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e="";return t?/^\S{8,20}$/.test(t)||(e="Password format error !"):e="Password is required !",e}Object.defineProperty(e,"__esModule",{value:!0}),e.userNameFormat=r,e.emailFormat=s,e.passwordFormat=a},452:function(t,e,r){var s=r(2)(r(274),r(463),null,null,null);t.exports=s.exports},453:function(t,e,r){var s=r(2)(r(275),r(468),null,null,null);t.exports=s.exports},454:function(t,e,r){var s=r(2)(null,r(481),null,null,null);t.exports=s.exports},463:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"account-section"},[r("div",{staticClass:"sign-up-section"},[r("div",{staticClass:"title unselected",on:{click:function(e){t.changeSection("signUp")}}},[t._v("Create Account")]),t._v(" "),r("div",{staticClass:"form-content",class:{active:"signUp"===t.activeSection}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.userName,expression:"formData.userName"}],staticClass:"form-input btn",class:{"error-input":t.errorMsg.userName},attrs:{type:"text",maxlength:"12",placeholder:"User Name"},domProps:{value:t.formData.userName},on:{input:function(e){e.target.composing||t.$set(t.formData,"userName",e.target.value)}}}),t._v(" "),r("span",{staticClass:"error-tips"},[t._v(t._s(t.errorMsg.userName))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],staticClass:"form-input btn",class:{"error-input":t.errorMsg.email},attrs:{type:"text",maxlength:"40",placeholder:"Email"},domProps:{value:t.formData.email},on:{input:function(e){e.target.composing||t.$set(t.formData,"email",e.target.value)}}}),t._v(" "),r("span",{staticClass:"error-tips"},[t._v(t._s(t.errorMsg.email))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],staticClass:"form-input btn",class:{"error-input":t.errorMsg.password},attrs:{type:"text",maxlength:"20",placeholder:"password (8-20 bits)"},domProps:{value:t.formData.password},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key)?void t.singUp(e):null},input:function(e){e.target.composing||t.$set(t.formData,"password",e.target.value)}}}),t._v(" "),r("span",{staticClass:"error-tips"},[t._v(t._s(t.errorMsg.password))]),t._v(" "),r("button",{staticClass:"form-btn btn",on:{click:t.singUp}},[t._v("Create Account")])])]),t._v(" "),r("div",{staticClass:"sign-in-section"},[r("div",{staticClass:"title unselected",on:{click:function(e){t.changeSection("signIn")}}},[t._v("Sign In")]),t._v(" "),r("div",{staticClass:"form-content",class:{active:"signIn"===t.activeSection}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.userName,expression:"formData.userName"}],staticClass:"form-input btn",class:{"error-input":t.errorMsg.userName},attrs:{type:"text",maxlength:"12",placeholder:"User Name"},domProps:{value:t.formData.userName},on:{input:function(e){e.target.composing||t.$set(t.formData,"userName",e.target.value)}}}),t._v(" "),r("span",{staticClass:"error-tips"},[t._v(t._s(t.errorMsg.userName))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],staticClass:"form-input btn",class:{"error-input":t.errorMsg.password},attrs:{type:"password",maxlength:"20",placeholder:"password"},domProps:{value:t.formData.password},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key)?void t.singIn(e):null},input:function(e){e.target.composing||t.$set(t.formData,"password",e.target.value)}}}),t._v(" "),r("span",{staticClass:"error-tips"},[t._v(t._s(t.errorMsg.password))]),t._v(" "),r("button",{staticClass:"form-btn btn",on:{click:t.singIn}},[t._v("Sign In")])])])])},staticRenderFns:[]}},468:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login-body"},[t._m(0),t._v(" "),r("account-section")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ads-section"},[r("div",{staticClass:"ashshen-iframe"})])}]}},481:471});