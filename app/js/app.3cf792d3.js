(function(e){function t(t){for(var r,a,i=t[0],s=t[1],u=t[2],p=0,d=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==c[s]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/app/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1725:function(e){e.exports=JSON.parse('{"headers":[{"name":"division","values":["Current Customer","Acquisition"]},{"name":"year","values":[2020,2021]},{"name":"quarter","values":["Q1","Q2","Q3","Q4"]},{"name":"type","values":["EMAIL","OLA","DIRECT MAIL","MMS","SMS"]}]}')},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(e,t){var n=Object(r["u"])("router-view");return Object(r["p"])(),Object(r["e"])(n)}n("5cb8");const o={};o.render=c;var a=o,i=n("6c02"),s={class:"home max-bound"};function u(e,t,n,c,o,a){var i=Object(r["u"])("router-view");return Object(r["p"])(),Object(r["e"])("div",s,[Object(r["g"])(i,null,{default:Object(r["B"])((function(e){var t=e.Component;return[Object(r["g"])(r["b"],{name:"fade",appear:"",mode:"out-in"},{default:Object(r["B"])((function(){return[(Object(r["p"])(),Object(r["e"])(Object(r["v"])(t)))]})),_:2},1024)]})),_:1})])}var l={name:"Home",components:{}};l.render=u;var p=l,d=n("a506"),b=n.n(d),j={class:"login__container"},O=Object(r["g"])("div",{class:"main-logo"},[Object(r["g"])("img",{src:b.a,alt:"",srcset:""})],-1);function f(e,t,n,c,o,a){var i=Object(r["u"])("login-box");return Object(r["p"])(),Object(r["e"])(r["b"],{name:"fade",appear:""},{default:Object(r["B"])((function(){return[Object(r["g"])("div",j,[O,Object(r["g"])(i)])]})),_:1})}var m={class:"login-box__container"},g=Object(r["g"])("h2",{class:"login-box__title"},"Campaign Repository",-1),v=Object(r["g"])("button",{class:"button",type:"submit"},"Login",-1);function _(e,t,n,c,o,a){return Object(r["p"])(),Object(r["e"])(r["b"],{name:"fade",appear:""},{default:Object(r["B"])((function(){return[Object(r["g"])("div",m,[g,Object(r["g"])("form",{class:"login-box__form",action:"submit",onSubmit:t[3]||(t[3]=Object(r["D"])((function(){return a.login&&a.login.apply(a,arguments)}),["prevent"]))},[Object(r["C"])(Object(r["g"])("input",{class:"input__text","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.email=e}),type:"text",placeholder:"E-MAIL"},null,512),[[r["z"],o.email]]),Object(r["C"])(Object(r["g"])("input",{class:"input__text","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.password=e}),type:"password",placeholder:"Password"},null,512),[[r["z"],o.password]]),v],32)])]})),_:1})}var h={data:function(){return{email:"",password:""}},methods:{login:function(){"ola@hugeinc.com"===this.email&&"123456"===this.password&&this.$router.push({name:"projects"})}}};h.render=_;var y=h,w={name:"Login",components:{LoginBox:y}};w.render=f;var x=w,M={class:"projects__container outer-pad"},S=Object(r["g"])("div",{class:"main-logo component-spacer"},[Object(r["g"])("img",{src:b.a,alt:"",srcset:""})],-1),L={class:"projects__content-container"},P={class:"projects__content"},C=Object(r["g"])("div",{class:"projects__filters"},null,-1),k={class:"projects__list"};function D(e,t,n,c,o,a){var i=Object(r["u"])("side-menu"),s=Object(r["u"])("project-card");return Object(r["p"])(),Object(r["e"])("div",M,[S,Object(r["g"])("div",L,[Object(r["g"])(i,{data:o.data},null,8,["data"]),Object(r["g"])("div",P,[C,Object(r["g"])("div",k,[Object(r["g"])(s),Object(r["g"])(s),Object(r["g"])(s),Object(r["g"])(s),Object(r["g"])(s),Object(r["g"])(s)])])])])}var A=n("1725"),B=(n("b0c0"),n("d3b7"),n("ddb0"),{class:"side-menu__container"}),E=Object(r["g"])("input",{type:"text",placeholder:"Search",class:"input__text"},null,-1),I={class:"side-menu__filter-list"},J={class:"side-menu__form-wrapper"},Q={class:"side-menu__filter-form",action:"submit",name:"division"},q={class:"side-menu__form-label",for:"division"};function H(e,t,n,c,o,a){return Object(r["p"])(),Object(r["e"])("nav",B,[E,Object(r["g"])("ul",I,[(Object(r["p"])(!0),Object(r["e"])(r["a"],null,Object(r["t"])(n.data,(function(e,n,c){return Object(r["p"])(),Object(r["e"])("li",{class:"side-menu__filter-dropdown",key:c},[Object(r["g"])("span",{class:"side-menu__filter-term",onClick:t[1]||(t[1]=function(){return a.toggleDropdown&&a.toggleDropdown.apply(a,arguments)})},Object(r["x"])(e.name),1),Object(r["g"])("div",J,[Object(r["g"])("form",Q,[(Object(r["p"])(!0),Object(r["e"])(r["a"],null,Object(r["t"])(e.values,(function(e,t,n){return Object(r["p"])(),Object(r["e"])("div",{class:"side-menu__form-item",key:n},[Object(r["g"])("input",{type:"radio",value:"current_customer",name:"division",id:e},null,8,["id"]),Object(r["g"])("label",q,Object(r["x"])(e),1)])})),128))])])])})),128))])])}var T={name:"SideMenu",props:{data:{type:Object,required:!0}},methods:{toggleDropdown:function(e){e.target.parentNode.classList.toggle("dropdown--opened")}}};T.render=H;var V=T,z={class:"project-card__container"},N=Object(r["f"])('<div class="project-card__content"><div class="project-card__title">High speed internet - price plan refresh</div><footer class="project-card__footer"><div class="project-card__date">June 2021</div><div class="project-card__tags"><div class="project-card__tag-item">Email</div><div class="project-card__tag-item">MMS</div><div class="project-card__tag-item">Direct Mail</div></div></footer></div><button class="button">View project</button>',2);function R(e,t){return Object(r["p"])(),Object(r["e"])("div",z,[N])}const U={};U.render=R;var $=U,F={name:"Projects",data:function(){return{data:A.headers}},components:{SideMenu:V,ProjectCard:$}};F.render=D;var G=F,K=[{path:"/",name:"Home",component:p,redirect:{name:"Login"},children:[{path:"login",name:"Login",component:x},{path:"projects",name:"projects",component:G}]}],W=Object(i["a"])({history:Object(i["b"])("/app/"),routes:K}),X=W,Y=n("5502"),Z=Object(Y["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["d"])(a).use(Z).use(X).mount("#app")},"5cb8":function(e,t,n){"use strict";n("6644")},6644:function(e,t,n){},a506:function(e,t,n){e.exports=n.p+"img/header-logos.ec269707.png"}});
//# sourceMappingURL=app.3cf792d3.js.map