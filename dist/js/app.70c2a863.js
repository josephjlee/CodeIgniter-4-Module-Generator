(function(t){function e(e){for(var a,r,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);h&&h(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},i={app:0},o=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2ce844a2":"02d68067","chunk-2faef7e2":"d3958d56","chunk-705fd6b2":"37bc99f9","chunk-09e6d617":"697084c9","chunk-0ebc7b92":"4f48b77a","chunk-2d22d746":"b8be1334","chunk-e412876e":"04e07acd"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-2faef7e2":1,"chunk-0ebc7b92":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-2ce844a2":"31d6cfe0","chunk-2faef7e2":"3e25cb77","chunk-705fd6b2":"31d6cfe0","chunk-09e6d617":"31d6cfe0","chunk-0ebc7b92":"66ae0c48","chunk-2d22d746":"31d6cfe0","chunk-e412876e":"31d6cfe0"}[t]+".css",i=c.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===i))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===i)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var a=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[t],h.parentNode.removeChild(h),n(o)},h.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(h)})).then((function(){r[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(h);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}i[t]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var h=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("router-view")],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",[n("template",{slot:"brand"},[n("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[n("strong",[t._v("C4-MG")])])],1),n("template",{slot:"start"},[n("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[n("b-icon",{attrs:{icon:"home"}}),n("span",[t._v("Home")])],1),n("b-navbar-item",{attrs:{tag:"router-link",to:{name:"Modules"}}},[n("b-icon",{attrs:{icon:"playlist-plus"}}),n("span",[t._v("Modules")])],1)],1),n("template",{slot:"end"},[n("b-navbar-item",{attrs:{tag:"div"}},[n("div",{staticClass:"buttons"},[n("a",{staticClass:"button is-primary",attrs:{target:"_blank",href:"https://github.com/ctechhindi/CodeIgniter-4-Module-Generator"}},[n("b-icon",{attrs:{icon:"git"}}),t._v(" "),n("strong",[t._v("GitHub")])],1),n("a",{staticClass:"button is-danger",attrs:{target:"_blank",href:"https://www.youtube.com/c/CTechHindi"}},[n("b-icon",{attrs:{icon:"youtube"}}),t._v(" "),n("strong",[t._v("YouTube")])],1)])])],1)],2)},s=[],c={name:"Navbar"},l=c,u=n("2877"),d=Object(u["a"])(l,o,s,!1,null,null,null),h=d.exports,m={name:"App",components:{Navbar:h}},p=m,f=Object(u["a"])(p,r,i,!1,null,null,null),b=f.exports,g=n("9483");Object(g["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var v=n("8c4f"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("section",[n("b-carousel",{attrs:{indicator:!1,"indicator-background":!0,"indicator-inside":!0,"indicator-mode":"hover","indicator-position":"is-top","indicator-style":"is-lines"}},t._l(t.projects,(function(e,a){return n("b-carousel-item",{key:a},[n("section",{class:"hero is-medium is-"+e.color,style:e.style},[n("div",{staticClass:"hero-body has-text-centered"},[n("h1",{staticClass:"title"},[t._v(t._s(e.title))]),n("h2",{staticClass:"subtitle"},[t._v(t._s(e.subtitle))])])])])})),1)],1),n("app-footer")],1)},y=[],C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"footer"}},[n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"content has-text-centered has-text-dark"},[n("p",[n("a",{staticStyle:{"padding-right":"0.5em"},attrs:{target:"_blank",href:"https://www.youtube.com/channel/UCfd4AN4UKiWyHDdq-fizQGA"}},[n("span",{staticClass:"icon has-text-primary is-medium"},[n("i",{staticClass:"mdi mdi-youtube-tv mdi-36px"})])]),n("a",{staticStyle:{"padding-right":"0.5em"},attrs:{target:"_blank",href:"https://www.instagram.com/ctechhindi/"}},[n("span",{staticClass:"icon has-text-primary is-medium"},[n("i",{staticClass:"mdi mdi-instagram mdi-36px"})])]),n("a",{staticStyle:{"padding-right":"0.5em"},attrs:{target:"_blank",href:"https://github.com/ctechhindi"}},[n("span",{staticClass:"icon has-text-primary is-medium"},[n("i",{staticClass:"mdi mdi-github-circle mdi-36px"})])]),n("a",{staticStyle:{"padding-right":"0.5em"},attrs:{target:"_blank",href:"https://stackoverflow.com/users/9976176/c-tech-hindi"}},[n("span",{staticClass:"icon has-text-primary is-medium"},[n("i",{staticClass:"mdi mdi-stack-overflow mdi-36px"})])]),n("a",{staticStyle:{"padding-right":"0.5em"},attrs:{target:"_blank",href:"https://twitter.com/ctechindi"}},[n("span",{staticClass:"icon has-text-primary is-medium"},[n("i",{staticClass:"mdi mdi-twitter mdi-36px"})])]),n("a",{staticStyle:{"padding-right":"0.5em"},attrs:{target:"_blank",href:"https://plus.google.com/100600320837601510513"}},[n("span",{staticClass:"icon has-text-primary is-medium"},[n("i",{staticClass:"mdi mdi-google-plus mdi-36px"})])]),n("a",{staticStyle:{"padding-right":"0.5em"},attrs:{target:"_blank",href:"www.linkedin.com/in/c-tech-hindi"}},[n("span",{staticClass:"icon has-text-primary is-medium"},[n("i",{staticClass:"mdi mdi-linkedin mdi-36px"})])])]),n("p",{staticClass:"copyright"},[t._v(" Copyrights © "),n("a",{attrs:{target:"_blank",href:"http://ctechhindi.in/"}},[t._v("C Tech Hindi")]),t._v(" 2020 | Made with "),n("span",{staticClass:"icon has-text-danger"},[n("i",{staticClass:"mdi mdi-heart mdi-24px"})]),t._v("in India ")])])])])])}],w={},x=Object(u["a"])(w,C,_,!1,null,null,null),S=x.exports,j={name:"Home",components:{"app-footer":S},data:function(){return{projects:[{title:"CodeIgniter 4 - Module Generator",subtitle:"With the help of this, you can create files of module like Controller, Model, View, MySQL.",color:"danger is-bold",style:"background-color: #4158D0; background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);"}]}}},O=j,M=Object(u["a"])(O,k,y,!1,null,null,null),E=M.exports;a["a"].use(v["a"]);var A=[{path:"/",name:"Home",component:E},{path:"/modules",name:"Modules",component:function(){return Promise.all([n.e("chunk-2ce844a2"),n.e("chunk-705fd6b2"),n.e("chunk-09e6d617")]).then(n.bind(null,"4228"))}},{path:"/module/fields/:module",name:"ModuleField",component:function(){return Promise.all([n.e("chunk-2ce844a2"),n.e("chunk-2faef7e2")]).then(n.bind(null,"1169"))}},{path:"/module/files/:module",name:"ModuleFiles",component:function(){return Promise.all([n.e("chunk-2ce844a2"),n.e("chunk-705fd6b2"),n.e("chunk-0ebc7b92")]).then(n.bind(null,"82b0"))}},{path:"/module/settings/:module",name:"ModuleSettings",component:function(){return n.e("chunk-e412876e").then(n.bind(null,"040a"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}}],P=new v["a"]({mode:"history",base:"/",routes:A}),N=P,T=n("2f62");a["a"].use(T["a"]);var H=new T["a"].Store({state:{},mutations:{},actions:{},modules:{}}),F=n("289d");n("5abe");a["a"].use(F["a"]),a["a"].config.productionTip=!1,new a["a"]({router:N,store:H,render:function(t){return t(b)}}).$mount("#app")}});
//# sourceMappingURL=app.70c2a863.js.map