(function(t){function e(e){for(var r,o,u=e[0],s=e[1],c=e[2],d=0,l=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);p&&p(e);while(l.length)l.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a={app:0},i=[];function u(t){return s.p+"js/"+({Auth:"Auth",Main:"Main"}[t]||t)+"."+{Auth:"5505e6a0",Main:"e2d5c42c"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={Auth:1,Main:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({Auth:"Auth",Main:"Main"}[t]||t)+"."+{Auth:"8f06e573",Main:"2ab2b09e"}[t]+".css",a=s.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===r||d===a))return e()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){c=l[u],d=c.getAttribute("data-href");if(d===r||d===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[t],p.parentNode.removeChild(p),n(i)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=i);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=u(t);var l=new Error;c=function(e){d.onerror=d.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=d;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2910:function(t,e,n){},"305b":function(t,e,n){"use strict";var r=n("6297"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i={name:"App"},u=i,s=(n("5c0b"),n("2877")),c=Object(s["a"])(u,o,a,!1,null,null,null),d=c.exports,l=n("2f62"),p=(n("d3b7"),n("bc3a")),f=n.n(p);f.a.interceptors.response.use((function(t){return t}),(function(t){return 401===t.response.status&&(window.localStorage.removeItem("token"),window.location="/#/auth/",window.alert("Срок авторизации кончился, выполните вход")),Promise.reject(t)})),f.a.interceptors.request.use((function(t){return t.secured&&(t.headers.Authorization="JWT "+window.localStorage.getItem("token")),t}));var m=f.a,h={token:window.localStorage.getItem("token")||null},v={},b={USER_AUTHORIZATION:function(t,e){var n=t.commit;t.dispatch;return m.post("https://trello.backend.tests.nekidaem.ru/api/v1/users/login/",e).then((function(t){return n("setToken",t.data.token),t})).catch((function(t){return t.response}))},USER_REGISTRATION:function(t,e){var n=t.commit;t.dispatch;return m.post("https://trello.backend.tests.nekidaem.ru/api/v1/users/create/",e).then((function(t){return n("setToken",t.data.token),t})).catch((function(t){return t.response}))}},g={setToken:function(t,e){t.token=e,window.localStorage.setItem("token",e)}},_={namespaced:!0,state:h,getters:v,actions:b,mutations:g},w=(n("c740"),n("13d5"),n("a434"),{cards:{}}),y={},k={GET_CARDS:function(t){var e=t.commit;return m.get("https://trello.backend.tests.nekidaem.ru/api/v1/cards/",{secured:!0}).then((function(t){return e("setCards",t.data),t})).catch((function(t){return t.response}))},CREATE_CARD:function(t,e){var n=t.commit;return m.post("https://trello.backend.tests.nekidaem.ru/api/v1/cards/",e,{secured:!0}).then((function(t){return n("addCard",t.data),t})).catch((function(t){return t.response}))},UPDATE_CARD:function(t,e){var n=t.dispatch,r=t.commit;return r("removeCard",e.id),r("updateCard",e),m.patch("https://trello.backend.tests.nekidaem.ru/api/v1/cards/".concat(e.id,"/"),e,{secured:!0}).then((function(t){return t})).catch((function(t){return n("GET_CARDS"),t.response}))},DELETE_CARD:function(t,e){var n=t.commit;return m.delete("https://trello.backend.tests.nekidaem.ru/api/v1/cards/".concat(e,"/"),{secured:!0}).then((function(t){return n("removeCard",e),t})).catch((function(t){return t.response}))}},A={setCards:function(t,e){e.sort((function(t,e){return t.seq_num-e.seq_num})),t.cards=e.reduce((function(t,e){var n=t[e.row];return n?n.items.push(e):t[e.row]={id:e.row,items:[e]},t}),{})},addCard:function(t,e){t.cards[e.row]?t.cards[e.row].items.push(e):r["a"].set(t.cards,e.row,{id:e.row,items:[e]})},removeCard:function(t,e){for(var n in t.cards){var r=t.cards[n].items.findIndex((function(t){return t.id===e}));r>-1&&t.cards[n].items.splice(r,1)}},updateCard:function(t,e){if(t.cards[e.row]){var n=t.cards[e.row].items.findIndex((function(t){return t.id===e.id}));-1===n?t.cards[e.row].items.splice(e.seq_num,0,e):t.cards[e.row].items.splice(n,1,e)}else r["a"].set(t.cards,e.row,{id:e.row,items:[e]})}},C={namespaced:!0,state:w,getters:y,actions:k,mutations:A};r["a"].use(l["a"]);var E=new l["a"].Store({modules:{users:_,cards:C}}),S=n("8c4f");r["a"].use(S["a"]);var O=[{path:"/",name:"Main",component:function(){return n.e("Main").then(n.bind(null,"ffbd"))},beforeEnter:function(t,e,n){var r=window.localStorage.getItem("token");r?n():n({name:"Auth"})}},{path:"/auth",name:"Auth",component:function(){return n.e("Auth").then(n.bind(null,"16db"))},beforeEnter:function(t,e,n){var r=window.localStorage.getItem("token");r?n({name:"Main"}):n()}}],T=new S["a"]({mode:"hash",routes:O}),I=T,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"v-input",attrs:{for:"input_"+t._uid}},[t._v(" "+t._s(t.label)+" "),n("input",t._g(t._b({staticClass:"v-input__input",class:{"slot__append-icon":t.hasSlotAppendIcon},attrs:{id:"input_"+t._uid,type:t.type}},"input",t.$attrs,!1),t.allListeners)),t.hasSlotAppendIcon?n("div",{staticClass:"v-input__append-icon"},[t._t("append-icon")],2):t._e(),t.errorMessage?n("div",{staticClass:"v-input__error"},[t._v(" Ошибка:"),n("br"),t._v(" "+t._s(t.errorMessage)+" ")]):t._e()])},j=[],x=n("5530"),P={name:"VInput",inheritAttrs:!1,props:{type:{type:String,default:"text"},label:{type:String,default:""},errorMessage:{type:String,default:""}},computed:{hasSlotAppendIcon:function(){return this.$slots["append-icon"]},allListeners:function(){return Object(x["a"])(Object(x["a"])({},this.$listeners),{},{input:this.input})},iconPath:function(){return n("73d2")(this.appendIcon)}},methods:{input:function(t){this.$emit("input",t.target.value)}}},D=P,R=(n("8226"),Object(s["a"])(D,M,j,!1,null,"4cbdad2e",null)),$=R.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",t._b({staticClass:"v-button",on:{click:function(e){return t.$emit("click")}}},"button",t.$attrs,!1),[t._t("default")],2)},N=[],U={name:"VButton",inheritAttrs:!1,props:{modifiers:{type:Array,default:function(){return[]}}}},q=U,B=(n("305b"),Object(s["a"])(q,L,N,!1,null,"01b17ab9",null)),G=B.exports;r["a"].component("vInput",$),r["a"].component("vButton",G),r["a"].config.productionTip=!1,new r["a"]({store:E,router:I,render:function(t){return t(d)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},6297:function(t,e,n){},"73d2":function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="73d2"},8226:function(t,e,n){"use strict";var r=n("2910"),o=n.n(r);o.a},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.ff0b1c5a.js.map