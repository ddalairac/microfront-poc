(function(e){function t(t){for(var n,s,c=t[0],i=t[1],u=t[2],l=0,v=[];l<c.length;l++)s=c[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&v.push(a[s][0]),a[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(v.length)v.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var i=r[s];0!==a[i]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o=[];function s(e){return c.p+"js/"+({page1:"page1"}[e]||e)+"."+{page1:"b503f2f1"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=s(e);var u=new Error;o=function(t){i.onerror=i.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,r[1](u)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/microfronts/container/dist/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var p=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},2561:function(e,t,r){"use strict";r("e6a1")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"72af":function(e,t,r){},"9c0c":function(e,t,r){},a942:function(e,t,r){"use strict";r("cd74")},bdbe:function(e,t,r){"use strict";r("72af")},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("MenuTop"),r("div",{staticClass:"container"},[r("MenuSide"),r("div",{staticClass:"views"},[r("router-view")],1)],1)],1)},o=[],s=r("d4ec"),c=r("262e"),i=r("2caf"),u=r("9ab4"),l=r("2fe1"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"navC"},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/page1"}},[e._v("Page1")]),e._v(" | "),r("router-link",{attrs:{to:"/page2"}},[e._v("Page2")]),e._v(" | "),r("router-link",{attrs:{to:"/page3"}},[e._v("Page3")])],1)},v=[],f=r("1b40"),b=function(e){Object(c["a"])(r,e);var t=Object(i["a"])(r);function r(){return Object(s["a"])(this,r),t.apply(this,arguments)}return r}(f["c"]);Object(u["a"])([Object(f["b"])()],b.prototype,"msg",void 0),b=Object(u["a"])([f["a"]],b);var h=b,g=h,_=(r("bdbe"),r("2877")),m=Object(_["a"])(g,p,v,!1,null,"81f2c432",null),d=m.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"navC navC-side"},[r("router-link",{staticClass:"btn btn-primary",attrs:{to:"/"}},[e._v("Home")]),r("router-link",{staticClass:"btn btn-primary",attrs:{to:"page1"}},[e._v("Page1")]),r("router-link",{staticClass:"btn btn-primary",attrs:{to:"page2"}},[e._v("Page2")]),r("router-link",{staticClass:"btn btn-primary",attrs:{to:"page3"}},[e._v("Page3")]),r("router-link",{staticClass:"btn btn-primary",attrs:{to:"page4"}},[e._v("Page4")])],1)},O=[],y=function(e){Object(c["a"])(r,e);var t=Object(i["a"])(r);function r(){return Object(s["a"])(this,r),t.apply(this,arguments)}return r}(f["c"]);Object(u["a"])([Object(f["b"])()],y.prototype,"msg",void 0),y=Object(u["a"])([f["a"]],y);var k=y,w=k,C=(r("2561"),Object(_["a"])(w,j,O,!1,null,"7fd933d4",null)),P=C.exports,x=function(e){Object(c["a"])(r,e);var t=Object(i["a"])(r);function r(){return Object(s["a"])(this,r),t.apply(this,arguments)}return r}(n["a"]);x=Object(u["a"])([Object(l["b"])({components:{MenuTop:d,MenuSide:P}})],x);var E=x,$=E,T=(r("5c0b"),Object(_["a"])($,a,o,!1,null,null,null)),S=T.exports,M=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js + TypeScript App"}}),n("v-card",{attrs:{title:"param 1",subtitle:"param 2"}})],1)},L=[],W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},A=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),e._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest",target:"_blank",rel:"noopener"}},[e._v("unit-jest")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress",target:"_blank",rel:"noopener"}},[e._v("e2e-cypress")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",target:"_blank",rel:"noopener"}},[e._v("typescript")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],F=function(e){Object(c["a"])(r,e);var t=Object(i["a"])(r);function r(){return Object(s["a"])(this,r),t.apply(this,arguments)}return r}(f["c"]);Object(u["a"])([Object(f["b"])()],F.prototype,"msg",void 0),F=Object(u["a"])([f["a"]],F);var I=F,J=I,V=(r("a942"),Object(_["a"])(J,W,A,!1,null,"da9acad2",null)),q=V.exports,z=function(e){Object(c["a"])(r,e);var t=Object(i["a"])(r);function r(){return Object(s["a"])(this,r),t.apply(this,arguments)}return r}(f["c"]);z=Object(u["a"])([Object(f["a"])({components:{HelloWorld:q}})],z);var D=z,N=D,Y=Object(_["a"])(N,H,L,!1,null,null,null),B=Y.exports,G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-2"},[r("h1",[e._v("This is page 2: ")]),r("wc-2")],1)},K=[],Q={},R=Object(_["a"])(Q,G,K,!1,null,null,null),U=R.exports,X=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-3"},[r("h1",[e._v("This is page 3: ")]),r("wc-3")],1)},Z=[],ee={},te=Object(_["a"])(ee,X,Z,!1,null,null,null),re=te.exports,ne=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-4"},[r("h1",[e._v("This is page 4:")]),r("wc-async-3-about"),r("wc-async-3-home")],1)},ae=[],oe={},se=Object(_["a"])(oe,ne,ae,!1,null,null,null),ce=se.exports;n["a"].use(M["a"]);var ie=[{path:"/",name:"Home",component:B},{path:"/page1",name:"Page1",component:function(){return r.e("page1").then(r.bind(null,"2b0b"))}},{path:"/page2",name:"Page2",component:U},{path:"/page3",name:"Page3",component:re},{path:"/page4",name:"Page4",component:ce}],ue=new M["a"]({mode:"history",base:"/microfronts/container/dist/",routes:ie}),le=ue,pe=r("2f62");n["a"].use(pe["a"]);var ve=new pe["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:le,store:ve,render:function(e){return e(S)}}).$mount("#app")},cd74:function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},e6a1:function(e,t,r){}});
//# sourceMappingURL=app.6dad60fb.js.map