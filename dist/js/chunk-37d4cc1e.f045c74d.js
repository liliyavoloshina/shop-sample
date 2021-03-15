(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37d4cc1e"],{1331:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=i},"2a12":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))};t.default=i},3360:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))};t.default=i},"34c3b":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"mx-auto",attrs:{elevation:"2","max-width":"374"}},[e.isLoading?r("LoaderLinear"):e._e(),r("form",{staticClass:"pa-4"},[r("v-scale-transition",[e.errors?r("ErrorAlert",{attrs:{error:e.errors}}):e._e()],1),r("v-card-text",[r("v-text-field",{attrs:{"error-messages":e.nameErrors,label:"Name",required:""},on:{input:function(t){return e.$v.name.$touch()},blur:function(t){return e.$v.name.$touch()}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),r("v-text-field",{attrs:{"error-messages":e.emailErrors,label:"E-mail",required:""},on:{input:function(t){return e.$v.email.$touch()},blur:function(t){return e.$v.email.$touch()}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("v-text-field",{attrs:{"error-messages":e.passwordErrors,type:e.show?"text":"password","append-icon":e.show?"mdi-eye":"mdi-eye-off",required:"",counter:"",label:"Password"},on:{"click:append":function(t){e.show=!e.show},input:function(t){return e.$v.password.$touch()},blur:function(t){return e.$v.password.$touch()}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("v-text-field",{attrs:{"error-messages":e.repeatPasswordErrors,type:e.show?"text":"password","append-icon":e.show?"mdi-eye":"mdi-eye-off",required:"",counter:"",label:"Repeat Password"},on:{"click:append":function(t){e.show=!e.show},input:function(t){return e.$v.repeatPassword.$touch()},blur:function(t){return e.$v.repeatPassword.$touch()}},model:{value:e.repeatPassword,callback:function(t){e.repeatPassword=t},expression:"repeatPassword"}}),r("v-checkbox",{attrs:{"error-messages":e.checkboxErrors,label:"Do you agree?",required:""},on:{change:function(t){return e.$v.checkbox.$touch()},blur:function(t){return e.$v.checkbox.$touch()}},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}})],1),r("v-spacer"),r("v-card-actions",{staticClass:"mt-4"},[r("v-row",[r("v-col",{attrs:{cols:"12",align:"center"}},[r("v-btn",{staticClass:"text-center",attrs:{disabled:e.$v.$invalid},on:{click:e.submit}},[e._v(" Зарегистрироваться ")])],1),r("v-col",{attrs:{cols:"12",align:"center"}},[r("v-btn",{attrs:{to:{name:"Login"},plain:""}},[e._v(" Войти ")])],1)],1)],1)],1)],1)},i=[],a=(r("b0c0"),r("ac1f"),r("5319"),r("96cf"),r("1da1")),u=r("db44"),o=r("b5ae"),s={name:"Register",validations:{name:{required:o["required"]},email:{required:o["required"],email:o["email"]},password:{required:o["required"],minLength:Object(o["minLength"])(6)},repeatPassword:{sameAsPassword:Object(o["sameAs"])("password")},checkbox:{checked:function(e){return e}}},components:{LoaderLinear:u["a"]},data:function(){return{name:"",email:"",password:"",repeatPassword:"",checkbox:!1,show:!1,isLoading:!1,errors:null}},computed:{nameErrors:function(){var e=[];return this.$v.name.$dirty?(!this.$v.name.required&&e.push("Name is required."),e):e},emailErrors:function(){var e=[];return this.$v.email.$dirty?(!this.$v.email.email&&e.push("Must be valid e-mail."),!this.$v.email.required&&e.push("E-mail is required."),e):e},passwordErrors:function(){var e=[];return this.$v.password.$dirty?(!this.$v.password.required&&e.push("Password is required."),!this.$v.password.minLength&&e.push("Password must have at least ".concat(this.$v.password.$params.minLength.min," letters.")),e):e},repeatPasswordErrors:function(){var e=[];return this.$v.repeatPassword.$dirty?(!this.$v.repeatPassword.sameAsPassword&&e.push("Passwords must be identical."),e):e},checkboxErrors:function(){var e=[];return this.$v.checkbox.$dirty?(!this.$v.checkbox.checked&&e.push("You must agree to continue!"),e):e}},methods:{submit:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,e.$v.$touch(),t.prev=2,r={username:e.name,email:e.email,password:e.password,checkbox:e.checkbox,admin:!1,mode:"signup"},t.next=6,e.$store.dispatch("auth/auth",r);case 6:e.$router.replace({name:"Home"}),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](2),e.errors=t.t0.message;case 12:e.isLoading=!1;case 13:case"end":return t.stop()}}),t,null,[[2,9]])})))()}},clear:function(){this.$v.$reset(),this.name="",this.email="",this.checkbox=!1,this.error=null}},c=s,l=r("2877"),d=r("6544"),f=r.n(d),p=r("8336"),h=r("b0af"),m=r("99d9"),v=r("ac7c"),b=r("62ad"),y=r("0fd9"),g=r("0789"),x=r("2fa4"),w=r("8654"),P=Object(l["a"])(c,n,i,!1,null,null,null);t["default"]=P.exports;f()(P,{VBtn:p["a"],VCard:h["a"],VCardActions:m["a"],VCardText:m["b"],VCheckbox:v["a"],VCol:b["a"],VRow:y["a"],VScaleTransition:g["e"],VSpacer:x["a"],VTextField:w["a"]})},"3a54":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=i},"45b8":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("numeric",/^[0-9]*$/);t.default=i},"46bc":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t.default=i},"5d75":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,a=(0,n.regex)("email",i);t.default=a},"5db3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))};t.default=i},6235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("alpha",/^[a-zA-Z]*$/);t.default=i},6417:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))};t.default=i},"6ca7":function(e,t,r){},"772d":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,a=(0,n.regex)("url",i);t.default=a},"78ef":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}}),t.regex=t.ref=t.len=t.req=void 0;var n=i(r("8750"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}var u=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===a(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=u;var o=function(e){return Array.isArray(e)?e.length:"object"===a(e)?Object.keys(e).length:String(e).length};t.len=o;var s=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=s;var c=function(e,t){return(0,n.default)({type:e},(function(e){return!u(e)||t.test(e)}))};t.regex=c},8547:function(e,t,r){"use strict";var n=r("2b0e"),i=r("80d2");t["a"]=n["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:i["i"]}}})},8750:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===Object({NODE_ENV:"production",VUE_APP_FIREBASE_API:"AIzaSyCJKZqF24lKrRx12V2Nf5T9d-9lPwiMTnM",VUE_APP_FIREBASE_URL:"https://simple-shop-2-default-rtdb.firebaseio.com",BASE_URL:"/"}).BUILD?r("cb69").withParams:r("0234").withParams,i=n;t.default=i},"91d3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(a)}))};t.default=i;var a=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},aa82:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=i},ac7c:function(e,t,r){"use strict";r("d3b7"),r("25f0");var n=r("5530"),i=(r("6ca7"),r("ec29"),r("9d26")),a=r("c37a"),u=r("fe09");t["a"]=u["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(e){var t=this;this.$nextTick((function(){return t.inputIndeterminate=e}))},inputIndeterminate:function(e){this.$emit("update:indeterminate",e)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(i["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(n["a"])(Object(n["a"])({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},b5ae:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return _.default}}),t.helpers=void 0;var n=j(r("6235")),i=j(r("3a54")),a=j(r("45b8")),u=j(r("ec11")),o=j(r("5d75")),s=j(r("c99d")),c=j(r("91d3")),l=j(r("2a12")),d=j(r("5db3")),f=j(r("d4f4")),p=j(r("aa82")),h=j(r("e652")),m=j(r("b6cb")),v=j(r("772d")),b=j(r("d294")),y=j(r("3360")),g=j(r("6417")),x=j(r("eb66")),w=j(r("46bc")),P=j(r("1331")),_=j(r("c301")),O=$(r("78ef"));function $(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function j(e){return e&&e.__esModule?e:{default:e}}t.helpers=O},b6cb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))};t.default=i},c301:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=i},c99d:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(a)}));t.default=i;var a=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,r){"use strict";(function(e){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},i=function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))},a=n.vuelidate?n.vuelidate.withParams:i;t.withParams=a}).call(this,r("c8ba"))},d294:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))};t.default=i},d4f4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=i},db44:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-progress-linear",{attrs:{color:"orange darken-4",height:"5",indeterminate:""}})},i=[],a={name:"LoaderLinear"},u=a,o=r("2877"),s=r("6544"),c=r.n(s),l=r("8e36"),d=Object(o["a"])(u,n,i,!1,null,null,null);t["a"]=d.exports;c()(d,{VProgressLinear:l["a"]})},e652:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=i},eb66:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t.default=i},ec11:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))};t.default=i},ec29:function(e,t,r){},fe09:function(e,t,r){"use strict";r("4de4"),r("45fc"),r("d3b7"),r("25f0");var n=r("c37a"),i=r("5607"),a=r("2b0e"),u=a["a"].extend({name:"rippleable",directives:{ripple:i["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}}),o=r("8547"),s=r("58df");function c(e){e.preventDefault()}t["a"]=Object(s["a"])(n["a"],u,o["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var e=this,t=this.value,r=this.internalValue;return this.isMultiple?!!Array.isArray(r)&&r.some((function(r){return e.valueComparator(r,t)})):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,r):Boolean(r):this.valueComparator(r,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel:function(){var e=n["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:c},e):e},genInput:function(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:c},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(e){this.onChange(),this.$emit("click",e)},onChange:function(){var e=this;if(this.isInteractive){var t=this.value,r=this.internalValue;if(this.isMultiple){Array.isArray(r)||(r=[]);var n=r.length;r=r.filter((function(r){return!e.valueComparator(r,t)})),r.length===n&&r.push(t)}else r=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(r,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(r,t)?null:t:!r;this.validate(!0,r),this.internalValue=r,this.hasColor=r}},onFocus:function(){this.isFocused=!0},onKeydown:function(e){}}})}}]);
//# sourceMappingURL=chunk-37d4cc1e.f045c74d.js.map