(function(e){function t(t){for(var i,r,o=t[0],c=t[1],l=t[2],u=0,d=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},s={app:0},a=[];function r(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"27af5f29"}[e]+".js"}function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=s[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,i){n=s[e]=[t,i]}));t.push(n[2]=i);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=r(e);var l=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=s[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,n[1](l)}s[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"075d":function(e,t,n){"use strict";n("9947")},"2d3f":function(e,t,n){e.exports=n.p+"img/creatives.5fc7a33b.png"},4003:function(e,t,n){"use strict";n("8e8d")},"48f9":function(e,t,n){},"492a":function(e,t,n){"use strict";n("fd2f")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i,s,a,r,o=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},l=[],u=(n("5c0b"),n("2877")),f={},d=Object(u["a"])(f,c,l,!1,null,null,null),p=d.exports,m=(n("d3b7"),n("8c4f")),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"count-number"},[e._v("0"+e._s(e.counter)+".")]),e._m(0),n("transition",{on:{leave:e.leave}},[1==e.counter?n("manifestjs"):e._e()],1),n("transition",{on:{leave:e.leave}},[2==e.counter?n("animations"):e._e()],1),n("transition",{on:{leave:e.leave}},[3==e.counter?n("newsize"):e._e()],1),n("transition",{on:{leave:e.leave}},[4==e.counter?n("versions"):e._e()],1),n("transition",{on:{leave:e.leave}},[5==e.counter?n("update"):e._e()],1),n("transition",{on:{leave:e.leave}},[6==e.counter?n("agents"):e._e()],1),e.counter>1?n("div",{staticClass:"prev",on:{click:function(t){return e.count("prev")}}},[n("span",{staticClass:"text"},[e._v(" Prev. ")]),n("span",{staticClass:"line"})]):e._e(),e.counter<6?n("div",{staticClass:"next",on:{click:function(t){return e.count("next")}}},[n("span",{staticClass:"text"},[e._v(" Next. ")]),n("span",{staticClass:"line"})]):e._e()],1)},v=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"huge-logo"},[i("img",{attrs:{src:n("e0b4"),alt:""}})])}],g=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"manifestRef",staticClass:"main-container"},[i("div",{ref:"image",staticClass:"image"},[i("img",{attrs:{src:n("5fb8"),alt:""}})]),i("div",{staticClass:"content"},[i("h1",{ref:"title"}),i("p",{ref:"description",staticClass:"description"})])])},A=[],b=(n("a4d3"),n("e01a"),n("ac1f"),n("1276"),n("cffa")),x={methods:{breakAllTitles:function(e,t){this.createWords(e,t)},createWords:function(e,t){var n=e,i=n.innerHTML,s=i.split(" ");n.innerHTML="";for(var a=0;a<s.length;a++)if(""==!s[a]){var r=s[a].split(""),o=document.createElement("span"),c=document.createElement("span");o.classList.add("title-letter__wrapper"),o.style.display="inline-block",o.style.overflow="hidden";for(var l=document.createTextNode(" "),u=0;u<r.length;u++){var f=r[u],d=document.createElement("span"),p=document.createTextNode(f);d.appendChild(p),d.classList.add("title-letter"),o.appendChild(d)}c.appendChild(l),n.appendChild(o),n.appendChild(c)}this.animateLetters(t)},animateLetters:function(e){b["a"].from(".title-letter",{y:"100px",scale:0,stagger:{each:.05,from:"edges",grid:"auto",ease:"linear",amount:.3},delay:e})}}},C=x,y=Object(u["a"])(C,i,s,!1,null,null,null),E=y.exports,w=(n("4160"),n("159b"),{methods:{breakText:function(e){var t=e.split(/\r?\n/);return t},createTextLine:function(e,t){var n=document.createElement("span");return n.innerHTML=e,n.style.display="inline-block",t.appendChild(n),n},animateTextLines:function(e,t,n){var i=this,s=this.breakText(e),a=[];s.forEach((function(e){var n=i.createTextLine(e,t);a.push(n)})),b["a"].from(a,.5,{y:"20px",opacity:0,stagger:.2,delay:n})}}}),O=w,_=Object(u["a"])(O,a,r,!1,null,null,null),L=_.exports,T={name:"Manifestjs",data:function(){return{title:"ManifestJS (Our\nFeed Settings)",description:"This may sound as a database, but its not. Repeat with us:\nexcel spread sheets are not databases."}},mixins:[L,E],mounted:function(){this.animateTextLines(this.title,this.$refs.title,.8),this.animateTextLines(this.description,this.$refs.description,1.3),this.$refs.image.classList.add("opened")},methods:{}},j=T,$=(n("d3b1"),Object(u["a"])(j,g,A,!1,null,"60e0938e",null)),k=$.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-container"},[n("div",{staticClass:"content"},[n("h1",{ref:"title"},[e._v("Animations Boilerplate")]),n("p",{ref:"description",staticClass:"description"})]),n("div",{staticClass:"squares"},[n("span",{ref:"first"}),n("span",{ref:"second"}),n("span",{ref:"third"}),n("span",{ref:"fourth"}),n("span",{ref:"fourth"}),n("span",{ref:"fourth"})])])},B=[],Q={name:"Animations",data:function(){return{title:"",description:"We'd say this is the most fun part. Creating our very\nown library for saving us some lines of code its just\n good AF."}},mixins:[L,E],mounted:function(){this.breakAllTitles(this.$refs.title,1),this.animateTextLines(this.description,this.$refs.description,2);var e=b["a"].timeline({delay:2,repeat:4,yoyo:!0,repeatDelay:.5}),t=b["a"].from(".squares span",.5,{x:"-40px",y:"0",opacity:0,stagger:.2}),n=b["a"].to(".squares span",.5,{scale:.3,ease:"back.out",stagger:{each:.05,from:"edges",grid:"auto",ease:"linear",amount:.3}});e.add(t,"+=0").add(n,"+=0").play()},methods:{}},G=Q,H=(n("492a"),Object(u["a"])(G,P,B,!1,null,"a6ad7782",null)),J=H.exports,M=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-container"},[i("div",{staticClass:"content"},[i("h1",{ref:"title"}),i("p",{ref:"description",staticClass:"description"})]),i("div",{ref:"image",staticClass:"image"},[i("img",{attrs:{src:n("bc97"),alt:""}})])])},S=[],z={name:"Versions",mixins:[L],data:function(){return{title:"Create new unit\nfrom template",description:"This is the most mechanic copy paste ever! All we do is importing a\nspreadsheet with all units content in it"}},mounted:function(){this.animateTextLines(this.title,this.$refs.title,.8),this.animateTextLines(this.description,this.$refs.description,1.3),this.$refs.image.classList.add("opened")}},I=z,U=(n("cc5c"),Object(u["a"])(I,M,S,!1,null,"b79f7a7e",null)),q=U.exports,R=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-container"},[i("div",{ref:"image",staticClass:"image"},[i("img",{attrs:{src:n("2d3f"),alt:""}})]),i("div",{staticClass:"content"},[i("h1",{ref:"title"}),i("p",{ref:"description",staticClass:"description"})])])},F=[],N={name:"Newsize",mixins:[L],data:function(){return{title:"Create new\ntemplate size",description:"Once our template is defined, we will replicate this as a virus\nin order to form the required sizes by the USCELL team"}},mounted:function(){this.animateTextLines(this.title,this.$refs.title,.8),this.animateTextLines(this.description,this.$refs.description,1.3),this.$refs.image.classList.add("opened")}},D=N,V=(n("4003"),Object(u["a"])(D,R,F,!1,null,"18a77ab3",null)),W=V.exports,X=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-container"},[i("div",{ref:"image",staticClass:"image"},[i("img",{attrs:{src:n("cd11"),alt:""}})]),i("div",{staticClass:"content"},[i("h1",{ref:"title"}),i("p",{ref:"description",staticClass:"description"})])])},K=[],Y={name:"Agents",mixins:[L],data:function(){return{title:"Prepare our\ndeliver for\nexternal agents",description:"There are tons of other agencies who will traffic our Ad Units, but all\nof them does not use the Flashtalking platform, so we need to give\nraw delivers in order to provide flexibility."}},mounted:function(){this.animateTextLines(this.title,this.$refs.title,.8),this.animateTextLines(this.description,this.$refs.description,1.3),this.$refs.image.classList.add("opened")}},Z=Y,ee=(n("075d"),Object(u["a"])(Z,X,K,!1,null,"eaa2ca32",null)),te=ee.exports,ne=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-container"},[i("div",{ref:"image",staticClass:"image"},[i("img",{attrs:{src:n("2d3f"),alt:""}})]),i("div",{staticClass:"content"},[i("h1",{ref:"title"}),i("p",{ref:"description",staticClass:"description"})])])},ie=[],se={name:"Update",mixins:[L],data:function(){return{title:"Update unit to\nFlashtalking",description:"Each time anyone occurs to require any change on the code,\nwe have to update the unit in the platform."}},mounted:function(){this.animateTextLines(this.title,this.$refs.title,.8),this.animateTextLines(this.description,this.$refs.description,1.3),this.$refs.image.classList.add("opened")}},ae=se,re=(n("af24"),Object(u["a"])(ae,ne,ie,!1,null,"1d66a9fc",null)),oe=re.exports,ce={name:"Home",data:function(){return{counter:1}},components:{Manifestjs:k,Animations:J,Versions:q,Agents:te,Newsize:W,Update:oe},methods:{count:function(e){this.counter+="next"===e?1:-1,console.log(this.counter)},leave:function(e,t){b["a"].to(e,.6,{opacity:0,onComplete:t})}}},le=ce,ue=(n("cccb"),Object(u["a"])(le,h,v,!1,null,null,null)),fe=ue.exports;o["a"].use(m["a"]);var de=[{path:"/",name:"Home",component:fe},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],pe=new m["a"]({mode:"history",base:"/",routes:de}),me=pe,he=n("2f62");o["a"].use(he["a"]);var ve=new he["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["a"].config.productionTip=!1,new o["a"]({router:me,store:ve,render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"5ced":function(e,t,n){},"5fb8":function(e,t,n){e.exports=n.p+"img/manifest.a088e424.png"},"7ce5":function(e,t,n){},"8e8d":function(e,t,n){},9947:function(e,t,n){},"9c0c":function(e,t,n){},af24:function(e,t,n){"use strict";n("fb05")},bc97:function(e,t,n){e.exports=n.p+"img/versions.d05986bf.png"},cc5c:function(e,t,n){"use strict";n("48f9")},cccb:function(e,t,n){"use strict";n("5ced")},cd11:function(e,t,n){e.exports=n.p+"img/agents.0f537b1c.png"},d3b1:function(e,t,n){"use strict";n("7ce5")},e0b4:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAALVBMVEXqF4z////sOZbpAIXpAIjxgbf50OL5zuPrMpP62Of61ubvaqzxebPoAIH73+xpGaX2AAABHUlEQVR4nO3dOQ7CQBAAQQ5zH/9/LokjvLSEhExSFU8w6nQs72YDAAAAAAAAAAAAAADAbD80LQen8eT6G6/nfDkOXG+LOtPtOpq8nP+x9Up226HDMs5hPLn7x9YrESeIE8QJ4gRxgjhBnCBOECeIE8QJ4gRxgjhBnCBOECeIE8QJ4gRxgjhBnCBOECeIE8QJ4gRxwoc498f7dziPuziz52nhKc7XxBFHnHfiBHGCOEGcIE4QJ4gTxAniBHGCOEGcIE4QJ4gTxAniBHGC60NwtwounkGcIE4QJ4gTxAniBHGCOEGcIE4QJ4gTxAniBHGCOEGcIE4QJ4gTxAniBHGCOEGcIE4QJ4gTxAn+3l+8+wAAAAAAAAAAAAAAAPArLw9LG2WzuEEhAAAAAElFTkSuQmCC"},fb05:function(e,t,n){},fd2f:function(e,t,n){}});
//# sourceMappingURL=app.8e001893.js.map