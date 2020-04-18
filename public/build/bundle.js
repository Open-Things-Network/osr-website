var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function a(e){e.forEach(t)}function o(e){return"function"==typeof e}function l(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function r(e,t){e.appendChild(t)}function s(e,t,n){e.insertBefore(t,n||null)}function i(e){e.parentNode.removeChild(e)}function c(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function u(e){return document.createElement(e)}function g(e){return document.createTextNode(e)}function d(){return g(" ")}function f(){return g("")}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function h(e,t){t=""+t,e.data!==t&&(e.data=t)}function p(e,t,n,a){e.style.setProperty(t,n,a?"important":"")}class ${constructor(e,t=null){this.e=u("div"),this.a=t,this.u(e)}m(e,t=null){for(let n=0;n<this.n.length;n+=1)s(e,this.n[n],t);this.t=e}u(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}p(e){this.d(),this.u(e),this.m(this.t,this.a)}d(){this.n.forEach(i)}}let v;function b(e){v=e}function w(e){(function(){if(!v)throw new Error("Function called outside component initialization");return v})().$$.on_mount.push(e)}const L=[],x=[],M=[],y=[],k=Promise.resolve();let P=!1;function z(e){M.push(e)}let _=!1;const j=new Set;function T(){if(!_){_=!0;do{for(let e=0;e<L.length;e+=1){const t=L[e];b(t),D(t.$$)}for(L.length=0;x.length;)x.pop()();for(let e=0;e<M.length;e+=1){const t=M[e];j.has(t)||(j.add(t),t())}M.length=0}while(L.length);for(;y.length;)y.pop()();P=!1,_=!1,j.clear()}}function D(e){if(null!==e.fragment){e.update(),a(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(z)}}const H=new Set;let N;function A(e,t){e&&e.i&&(H.delete(e),e.i(t))}function F(e,t,n,a){if(e&&e.o){if(H.has(e))return;H.add(e),N.c.push(()=>{H.delete(e),a&&(n&&e.d(1),a())}),e.o(t)}}function O(e){e&&e.c()}function C(e,n,l){const{fragment:r,on_mount:s,on_destroy:i,after_update:c}=e.$$;r&&r.m(n,l),z(()=>{const n=s.map(t).filter(o);i?i.push(...n):a(n),e.$$.on_mount=[]}),c.forEach(z)}function E(e,t){const n=e.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function I(e,t){-1===e.$$.dirty[0]&&(L.push(e),P||(P=!0,k.then(T)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function W(t,o,l,r,s,c,u=[-1]){const g=v;b(t);const d=o.props||{},f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(g?g.$$.context:[]),callbacks:n(),dirty:u};let m=!1;if(f.ctx=l?l(t,d,(e,n,...a)=>{const o=a.length?a[0]:n;return f.ctx&&s(f.ctx[e],f.ctx[e]=o)&&(f.bound[e]&&f.bound[e](o),m&&I(t,e)),n}):[],f.update(),m=!0,a(f.before_update),f.fragment=!!r&&r(f.ctx),o.target){if(o.hydrate){const e=function(e){return Array.from(e.childNodes)}(o.target);f.fragment&&f.fragment.l(e),e.forEach(i)}else f.fragment&&f.fragment.c();o.intro&&A(t.$$.fragment),C(t,o.target,o.anchor),T()}b(g)}class J{$destroy(){E(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function S(e,t,n){const a=e.slice();return a[6]=t[n],a}function q(e){let t,n;return{c(){t=u("img"),m(t,"class","mr-auto svelte-1hu5s9b"),t.src!==(n=e[3].logo)&&m(t,"src",n),m(t,"alt","logo")},m(e,n){s(e,t,n)},p(e,a){8&a&&t.src!==(n=e[3].logo)&&m(t,"src",n)},d(e){e&&i(t)}}}function U(e){let t,n,a,o,l=e[6].label[e[2]]+"";return{c(){t=u("a"),n=g(l),m(t,"class","nav-item nav-link ml-auto mycolor svelte-1hu5s9b"),m(t,"href",a="/"===e[6].url?e[1]:e[6].url),m(t,"target",o=e[6].target)},m(e,a){s(e,t,a),r(t,n)},p(e,r){12&r&&l!==(l=e[6].label[e[2]]+"")&&h(n,l),10&r&&a!==(a="/"===e[6].url?e[1]:e[6].url)&&m(t,"href",a),8&r&&o!==(o=e[6].target)&&m(t,"target",o)},d(e){e&&i(t)}}}function B(t){let n,a,o,l,g,f,h,p=!(t[0]===t[1]||t[0]===t[1]+"index.html")&&q(t),$=t[3].elements,v=[];for(let e=0;e<$.length;e+=1)v[e]=U(S(t,$,e));return{c(){n=u("nav"),a=u("div"),p&&p.c(),o=d(),l=u("button"),l.innerHTML='<span class="navbar-toggler-icon"></span>',g=d(),f=u("div"),h=u("ul");for(let e=0;e<v.length;e+=1)v[e].c();m(l,"class","navbar-toggler ml-auto"),m(l,"type","button"),m(l,"data-toggle","collapse"),m(l,"data-target","#navbarNavAltMarkup"),m(l,"aria-controls","navbarNavAltMarkup"),m(l,"aria-expanded","false"),m(l,"aria-label","Toggle navigation"),m(h,"class","navbar-nav ml-auto"),m(f,"class","collapse navbar-collapse"),m(f,"id","navbarNavAltMarkup"),m(a,"class","container"),m(n,"class","navbar navbar-expand-lg navbar-light bg-light svelte-1hu5s9b")},m(e,t){s(e,n,t),r(n,a),p&&p.m(a,null),r(a,o),r(a,l),r(a,g),r(a,f),r(f,h);for(let e=0;e<v.length;e+=1)v[e].m(h,null)},p(e,[t]){if(e[0]!==e[1]&&e[0]!==e[1]+"index.html"?p?p.p(e,t):(p=q(e),p.c(),p.m(a,o)):p&&(p.d(1),p=null),14&t){let n;for($=e[3].elements,n=0;n<$.length;n+=1){const a=S(e,$,n);v[n]?v[n].p(a,t):(v[n]=U(a),v[n].c(),v[n].m(h,null))}for(;n<v.length;n+=1)v[n].d(1);v.length=$.length}},i:e,o:e,d(e){e&&i(n),p&&p.d(),c(v,e)}}}function K(e,t,n){let{path:a}=t,{homePath:o}=t,{language:l}=t,{defaultLanguage:r}=t,{cmsMode:s}=t,i={title:"",logo:"",elements:[{url:"/",label:{en:"Home",pl:"Home"},target:""}]};return w(async()=>{if(s){const e=await cricketDocs.getJsonFile("navigation.json");n(3,i=await e)}else{const e=await cricketDocs.getJsonFile("navigation.json");n(3,i=await e)}document.title=i.title}),e.$set=e=>{"path"in e&&n(0,a=e.path),"homePath"in e&&n(1,o=e.homePath),"language"in e&&n(2,l=e.language),"defaultLanguage"in e&&n(4,r=e.defaultLanguage),"cmsMode"in e&&n(5,s=e.cmsMode)},[a,o,l,i,r,s]}class R extends J{constructor(e){super(),W(this,e,K,B,l,{path:0,homePath:1,language:2,defaultLanguage:4,cmsMode:5})}}function Z(t){let n,a,o;return{c(){n=u("div"),a=u("div"),o=u("div"),m(o,"class","row"),m(a,"class","container"),m(n,"class","jumbotron ft svelte-17l067w")},m(e,l){s(e,n,l),r(n,a),r(a,o),o.innerHTML=t[0]},p(e,[t]){1&t&&(o.innerHTML=e[0])},i:e,o:e,d(e){e&&i(n)}}}function G(e,t,n){let a,{file:o}=t,{language:l}=t,{defaultLanguage:r}=t,{cmsMode:s}=t,i="";return w(async()=>{a=l===r?"":l+"_";let e="";e=await fetch(a+o),n(0,i=await e.text())}),e.$set=e=>{"file"in e&&n(1,o=e.file),"language"in e&&n(2,l=e.language),"defaultLanguage"in e&&n(3,r=e.defaultLanguage),"cmsMode"in e&&n(4,s=e.cmsMode)},[i,o,l,r,s]}class Q extends J{constructor(e){super(),W(this,e,G,Z,l,{file:1,language:2,defaultLanguage:3,cmsMode:4})}}function V(t){let n,a;return{c(){n=u("div"),a=u("div"),a.innerHTML='<img src="resources/new_logo_horizontal_v3.svg" alt="logo" class="logo_img svelte-14uvmc6">',m(a,"class","container text-center"),m(n,"class","jumbotron"),p(n,"background-image","linear-gradient(to bottom, rgba(255,255,255,0.7) 0%,rgba(255,255,255,0.5) 100%), url("+t[0]+")")},m(e,t){s(e,n,t),r(n,a)},p:e,i:e,o:e,d(e){e&&i(n)}}}function X(e,t,n){let{homePath:a}=t,o=a+"resources/jumbotron.png";return e.$set=e=>{"homePath"in e&&n(1,a=e.homePath)},[o,a]}class Y extends J{constructor(e){super(),W(this,e,X,V,l,{homePath:1})}}function ee(t){let n,a,o,l,c,f,$,v,b,w,L,x;return{c(){n=u("div"),a=u("div"),o=u("center"),l=u("h2"),c=u("img"),$=u("br"),v=g(t[0]),b=d(),w=u("hr"),L=d(),x=u("div"),c.src!==(f=t[1])&&m(c,"src",f),m(c,"width","50px;"),m(c,"alt",t[0]),p(c,"margin-bottom","1rem"),m(w,"class","svelte-k6tlcu"),m(a,"class","container section"),m(x,"class","container"),p(n,"background",t[3]),p(n,"padding-top","2rem"),p(n,"padding-bottom","2rem")},m(e,i){s(e,n,i),r(n,a),r(a,o),r(o,l),r(l,c),r(l,$),r(l,v),r(a,b),r(a,w),r(n,L),r(n,x),x.innerHTML=t[2]},p(e,[t]){2&t&&c.src!==(f=e[1])&&m(c,"src",f),1&t&&m(c,"alt",e[0]),1&t&&h(v,e[0]),4&t&&(x.innerHTML=e[2])},i:e,o:e,d(e){e&&i(n)}}}function te(e,t,n){let a,o,{title:l}=t,{icon:r}=t,{file:s}=t,{language:i}=t,{defaultLanguage:c}=t,{idx:u}=t,g=u%2==0?"white":"#f8f8f8";return w(async()=>{o=i===c?"":i+"_";const e=await fetch(o+s);n(2,a=await e.text())}),e.$set=e=>{"title"in e&&n(0,l=e.title),"icon"in e&&n(1,r=e.icon),"file"in e&&n(4,s=e.file),"language"in e&&n(5,i=e.language),"defaultLanguage"in e&&n(6,c=e.defaultLanguage),"idx"in e&&n(7,u=e.idx)},[l,r,a,g,s,i,c,u]}class ne extends J{constructor(e){super(),W(this,e,te,ee,l,{title:0,icon:1,file:4,language:5,defaultLanguage:6,idx:7})}}function ae(e,t,n){const a=e.slice();return a[16]=t[n],a}function oe(e,t,n){const a=e.slice();return a[13]=t[n],a}function le(e){let t,n,a,o,l,c,p,$,v,b,w,L,x,M,y,k,P,z,_,j,T,D=e[7](e[13].uid)+"",H=e[7](e[13].uid)>0,N=H&&re(e);return{c(){t=u("hr"),n=d(),a=u("div"),o=u("div"),l=u("a"),c=u("img"),$=g(" Link do artykułu"),w=d(),L=u("div"),x=g("Komentarze: "),M=g(D),y=d(),k=u("div"),P=u("a"),z=g("Wyślij komentarz"),j=d(),N&&N.c(),T=f(),m(t,"class","comments svelte-f9z9h7"),c.src!==(p="resources/link.svg")&&m(c,"src","resources/link.svg"),m(l,"class","permalink svelte-f9z9h7"),m(l,"href",v="#"+e[13].uid),m(l,"onclick",b="prompt('Naciśnij Ctrl + C żeby skopiować odnośnik do schowka','https://otwartasiecrzeczy.org"+e[1]+e[0]+".html#"+e[13].uid+"'); return false;"),m(o,"class","col-4"),m(L,"class","col-4"),m(P,"class","btn btn-sm btn-outline-secondary"),m(P,"role","button"),m(P,"href",_="mailto:comments@otwartasiecrzeczy.org?subject=ID:"+e[13].uid+"&body="+e[5]),m(P,"target","_blank"),m(k,"class","col-4 text-right"),m(a,"class","row comments svelte-f9z9h7")},m(e,i){s(e,t,i),s(e,n,i),s(e,a,i),r(a,o),r(o,l),r(l,c),r(l,$),r(a,w),r(a,L),r(L,x),r(L,M),r(a,y),r(a,k),r(k,P),r(P,z),s(e,j,i),N&&N.m(e,i),s(e,T,i)},p(e,t){8&t&&v!==(v="#"+e[13].uid)&&m(l,"href",v),11&t&&b!==(b="prompt('Naciśnij Ctrl + C żeby skopiować odnośnik do schowka','https://otwartasiecrzeczy.org"+e[1]+e[0]+".html#"+e[13].uid+"'); return false;")&&m(l,"onclick",b),8&t&&D!==(D=e[7](e[13].uid)+"")&&h(M,D),8&t&&_!==(_="mailto:comments@otwartasiecrzeczy.org?subject=ID:"+e[13].uid+"&body="+e[5])&&m(P,"href",_),8&t&&(H=e[7](e[13].uid)>0),H?N?N.p(e,t):(N=re(e),N.c(),N.m(T.parentNode,T)):N&&(N.d(1),N=null)},d(e){e&&i(t),e&&i(n),e&&i(a),e&&i(j),N&&N.d(e),e&&i(T)}}}function re(e){let t,n=e[6][e[13].uid],a=[];for(let t=0;t<n.length;t+=1)a[t]=se(ae(e,n,t));return{c(){for(let e=0;e<a.length;e+=1)a[e].c();t=f()},m(e,n){for(let t=0;t<a.length;t+=1)a[t].m(e,n);s(e,t,n)},p(e,o){if(72&o){let l;for(n=e[6][e[13].uid],l=0;l<n.length;l+=1){const r=ae(e,n,l);a[l]?a[l].p(r,o):(a[l]=se(r),a[l].c(),a[l].m(t.parentNode,t))}for(;l<a.length;l+=1)a[l].d(1);a.length=n.length}},d(e){c(a,e),e&&i(t)}}}function se(e){let t,n,a,o,l,c,f,p,$,v,b,w=e[16].date+"",L=e[16].email+"",x=e[16].text+"";return{c(){t=u("div"),n=u("div"),a=g(w),o=d(),l=u("i"),c=g(L),f=d(),p=u("div"),$=u("div"),v=g(x),b=d(),m(n,"class","col-12"),m(t,"class","row comment-header svelte-f9z9h7"),m($,"class","col-12"),m(p,"class","row comment svelte-f9z9h7")},m(e,i){s(e,t,i),r(t,n),r(n,a),r(n,o),r(n,l),r(l,c),s(e,f,i),s(e,p,i),r(p,$),r($,v),r(p,b)},p(e,t){8&t&&w!==(w=e[16].date+"")&&h(a,w),8&t&&L!==(L=e[16].email+"")&&h(c,L),8&t&&x!==(x=e[16].text+"")&&h(v,x)},d(e){e&&i(t),e&&i(f),e&&i(p)}}}function ie(e){let t,n,a,o,l,c,g,f=e[13].content+"",h="/"===e[1]&&le(e);return{c(){t=u("div"),n=u("a"),o=d(),c=d(),h&&h.c(),g=d(),m(n,"id",a=e[13].uid),l=new $(f,c),m(t,"class","container")},m(e,a){s(e,t,a),r(t,n),r(t,o),l.m(t),r(t,c),h&&h.m(t,null),r(t,g)},p(e,o){8&o&&a!==(a=e[13].uid)&&m(n,"id",a),8&o&&f!==(f=e[13].content+"")&&l.p(f),"/"===e[1]?h?h.p(e,o):(h=le(e),h.c(),h.m(t,g)):h&&(h.d(1),h=null)},d(e){e&&i(t),h&&h.d()}}}function ce(t){let n,a,o,l,f,$,v,b,w,L,x,M,y=t[2].pl+"",k=t[3],P=[];for(let e=0;e<k.length;e+=1)P[e]=ie(oe(t,k,e));return{c(){n=u("div"),a=u("div"),o=u("h1"),l=g(y),f=d(),$=u("div"),v=u("div"),b=u("div"),w=u("img"),x=d(),M=u("div");for(let e=0;e<P.length;e+=1)P[e].c();m(o,"class","title svelte-f9z9h7"),m(a,"class","container text-center"),p(n,"background-image","linear-gradient(to bottom, rgba(255,255,255,0.9) 0%,rgba(255,255,255,0.7) 100%), url("+t[4]+")"),w.src!==(L=t[0]+"/icon.png")&&m(w,"src",L),m(w,"class","subpage_img svelte-f9z9h7"),m(b,"class","col-md-3 text-center"),m(M,"class","col-md-9"),m(v,"class","row"),m($,"class","container")},m(e,t){s(e,n,t),r(n,a),r(a,o),r(o,l),s(e,f,t),s(e,$,t),r($,v),r(v,b),r(b,w),r(v,x),r(v,M);for(let e=0;e<P.length;e+=1)P[e].m(M,null)},p(e,[t]){if(4&t&&y!==(y=e[2].pl+"")&&h(l,y),16&t&&p(n,"background-image","linear-gradient(to bottom, rgba(255,255,255,0.9) 0%,rgba(255,255,255,0.7) 100%), url("+e[4]+")"),1&t&&w.src!==(L=e[0]+"/icon.png")&&m(w,"src",L),235&t){let n;for(k=e[3],n=0;n<k.length;n+=1){const a=oe(e,k,n);P[n]?P[n].p(a,t):(P[n]=ie(a),P[n].c(),P[n].m(M,null))}for(;n<P.length;n+=1)P[n].d(1);P.length=k.length}},i:e,o:e,d(e){e&&i(n),e&&i(f),e&&i($),c(P,e)}}}function ue(e,t,n){let a,o,{folder:l}=t,{language:r}=t,{defaultLanguage:s}=t,{cmsMode:i}=t,{homePath:c}=t,u={pl:"aktualności",en:"news"},g=[],d="%0D%0A%0D%0A"+encodeURI("Wysyłając komentarz akceptujesz warunki korzystania ze strony: https://otwartasiecrzeczy.org/legal.html"),f={};return w(async()=>{a=r===s?"":r+"_",n(4,o=c+"resources/jumbotron.png");const e=await cricketDocs.getJsonFile(a+l+"/title.json");n(2,u=await e);const t=await cricketDocs.getJsonFile(a+l+"/index.json");n(3,g=await t);for(var i=0;i<g.length;i++){const e=await cricketDocs.getTextFile(a+l+"/"+g[i].name);n(3,g[i].uid=g[i].name.substring(0,g[i].name.lastIndexOf(".")),g),n(3,g[i].content=await e,g)}n(3,g)}),e.$set=e=>{"folder"in e&&n(0,l=e.folder),"language"in e&&n(8,r=e.language),"defaultLanguage"in e&&n(9,s=e.defaultLanguage),"cmsMode"in e&&n(10,i=e.cmsMode),"homePath"in e&&n(1,c=e.homePath)},[l,c,u,g,o,d,f,function(e){const t=f[e];return void 0!==t&&null!==typeof t?t.length:0},r,s,i]}class ge extends J{constructor(e){super(),W(this,e,ue,ce,l,{folder:0,language:8,defaultLanguage:9,cmsMode:10,homePath:1})}}function de(t){let n,a,o,l,c,f,$,v,b,w,L,x;return{c(){n=u("div"),a=u("div"),o=u("h1"),l=g(t[1]),c=d(),f=u("div"),$=u("div"),v=u("div"),b=u("img"),L=d(),x=u("div"),m(o,"class","title svelte-o10zcn"),m(a,"class","container text-center"),p(n,"background-image","linear-gradient(to bottom, rgba(255,255,255,0.9) 0%,rgba(255,255,255,0.7) 100%), url("+t[3]+")"),b.src!==(w="subpages/"+t[0]+".png")&&m(b,"src",w),m(b,"class","subpage_img svelte-o10zcn"),m(v,"class","col-md-3 text-center"),m(x,"class","col-md-9"),m($,"class","row"),m(f,"class","container")},m(e,i){s(e,n,i),r(n,a),r(a,o),r(o,l),s(e,c,i),s(e,f,i),r(f,$),r($,v),r(v,b),r($,L),r($,x),x.innerHTML=t[2]},p(e,[t]){2&t&&h(l,e[1]),8&t&&p(n,"background-image","linear-gradient(to bottom, rgba(255,255,255,0.9) 0%,rgba(255,255,255,0.7) 100%), url("+e[3]+")"),1&t&&b.src!==(w="subpages/"+e[0]+".png")&&m(b,"src",w),4&t&&(x.innerHTML=e[2])},i:e,o:e,d(e){e&&i(n),e&&i(c),e&&i(f)}}}function fe(e,t,n){let a,o,{name:l}=t,{language:r}=t,{defaultLanguage:s}=t,{cmsMode:i}=t,{homePath:c}=t,u="title",g="";return w(async()=>{if(a=r===s?"":r+"_",i){n(3,o=c+"resources/jumbotron.png");const e=await cricketDocs.getJsonFile(a+"subpages/"+l+".html");n(1,u=e.title),n(2,g=e.content)}else{n(3,o=c+"resources/jumbotron.png");const t=await cricketDocs.getTextFile(a+"subpages/"+l+".html");n(2,g=await t);var e=(new DOMParser).parseFromString(g,"text/html");try{n(1,u=e.querySelector("article header title").innerHTML)}catch(e){n(1,u=l)}}}),e.$set=e=>{"name"in e&&n(0,l=e.name),"language"in e&&n(4,r=e.language),"defaultLanguage"in e&&n(5,s=e.defaultLanguage),"cmsMode"in e&&n(6,i=e.cmsMode),"homePath"in e&&n(7,c=e.homePath)},[l,u,g,o,r,s,i,c]}class me extends J{constructor(e){super(),W(this,e,fe,de,l,{name:0,language:4,defaultLanguage:5,cmsMode:6,homePath:7})}}function he(e){let t;const n=new me({props:{homePath:e[5],name:e[7],language:e[0],defaultLanguage:e[1],cmsMode:e[2]}});return{c(){O(n.$$.fragment)},m(e,a){C(n,e,a),t=!0},p(e,t){const a={};32&t&&(a.homePath=e[5]),128&t&&(a.name=e[7]),1&t&&(a.language=e[0]),2&t&&(a.defaultLanguage=e[1]),4&t&&(a.cmsMode=e[2]),n.$set(a)},i(e){t||(A(n.$$.fragment,e),t=!0)},o(e){F(n.$$.fragment,e),t=!1},d(e){E(n,e)}}}function pe(e){let t;const n=new ge({props:{homePath:e[5],folder:e[7],language:e[0],defaultLanguage:e[1],cmsMode:e[2]}});return{c(){O(n.$$.fragment)},m(e,a){C(n,e,a),t=!0},p(e,t){const a={};32&t&&(a.homePath=e[5]),128&t&&(a.folder=e[7]),1&t&&(a.language=e[0]),2&t&&(a.defaultLanguage=e[1]),4&t&&(a.cmsMode=e[2]),n.$set(a)},i(e){t||(A(n.$$.fragment,e),t=!0)},o(e){F(n.$$.fragment,e),t=!1},d(e){E(n,e)}}}function $e(e){let t,n,a,o,l,r,c,u;const g=new Y({props:{homePath:e[5]}}),f=new ne({props:{idx:"0",title:"O nas",icon:"sections/about.png",file:"sections/about.html",language:e[0],defaultLanguage:e[1]}}),m=new ne({props:{idx:"1",title:"Manifest",icon:"sections/manifest.png",file:"sections/manifest.html",language:e[0],defaultLanguage:e[1]}}),h=new ne({props:{idx:"2",title:"Cele",icon:"sections/goals.png",file:"sections/goals.html",language:e[0],defaultLanguage:e[1]}}),p=new ne({props:{idx:"3",title:"Zadania",icon:"sections/tasks.png",file:"sections/tasks.html",language:e[0],defaultLanguage:e[1]}}),$=new ne({props:{idx:"4",title:"Udział w projektach",icon:"sections/projects.png",file:"sections/projects.html",language:e[0],defaultLanguage:e[1]}}),v=new ne({props:{idx:"5",title:"Dołącz do nas",icon:"sections/join.png",file:"sections/join.html",language:e[0],defaultLanguage:e[1]}}),b=new ne({props:{idx:"6",title:"Partnerzy",icon:"sections/partners.png",file:"sections/partners.html",language:e[0],defaultLanguage:e[1]}});return{c(){O(g.$$.fragment),t=d(),O(f.$$.fragment),n=d(),O(m.$$.fragment),a=d(),O(h.$$.fragment),o=d(),O(p.$$.fragment),l=d(),O($.$$.fragment),r=d(),O(v.$$.fragment),c=d(),O(b.$$.fragment)},m(e,i){C(g,e,i),s(e,t,i),C(f,e,i),s(e,n,i),C(m,e,i),s(e,a,i),C(h,e,i),s(e,o,i),C(p,e,i),s(e,l,i),C($,e,i),s(e,r,i),C(v,e,i),s(e,c,i),C(b,e,i),u=!0},p(e,t){const n={};32&t&&(n.homePath=e[5]),g.$set(n);const a={};1&t&&(a.language=e[0]),2&t&&(a.defaultLanguage=e[1]),f.$set(a);const o={};1&t&&(o.language=e[0]),2&t&&(o.defaultLanguage=e[1]),m.$set(o);const l={};1&t&&(l.language=e[0]),2&t&&(l.defaultLanguage=e[1]),h.$set(l);const r={};1&t&&(r.language=e[0]),2&t&&(r.defaultLanguage=e[1]),p.$set(r);const s={};1&t&&(s.language=e[0]),2&t&&(s.defaultLanguage=e[1]),$.$set(s);const i={};1&t&&(i.language=e[0]),2&t&&(i.defaultLanguage=e[1]),v.$set(i);const c={};1&t&&(c.language=e[0]),2&t&&(c.defaultLanguage=e[1]),b.$set(c)},i(e){u||(A(g.$$.fragment,e),A(f.$$.fragment,e),A(m.$$.fragment,e),A(h.$$.fragment,e),A(p.$$.fragment,e),A($.$$.fragment,e),A(v.$$.fragment,e),A(b.$$.fragment,e),u=!0)},o(e){F(g.$$.fragment,e),F(f.$$.fragment,e),F(m.$$.fragment,e),F(h.$$.fragment,e),F(p.$$.fragment,e),F($.$$.fragment,e),F(v.$$.fragment,e),F(b.$$.fragment,e),u=!1},d(e){E(g,e),e&&i(t),E(f,e),e&&i(n),E(m,e),e&&i(a),E(h,e),e&&i(o),E(p,e),e&&i(l),E($,e),e&&i(r),E(v,e),e&&i(c),E(b,e)}}}function ve(e){let t,n,o,l,c,g,f={path:e[4],homePath:e[5],language:e[0],defaultLanguage:e[1],cmsMode:e[2]};const m=new R({props:f});e[14](m);const h=[$e,pe,he],p=[];function $(e,t){return"home"===e[6]?0:"multi"===e[6]?1:"single"===e[6]?2:-1}~(o=$(e))&&(l=p[o]=h[o](e));const v=new Q({props:{file:"sections/footer.html",language:e[0],defaultLanguage:e[1],cmsMode:e[2]}});return{c(){t=u("main"),O(m.$$.fragment),n=d(),l&&l.c(),c=d(),O(v.$$.fragment)},m(e,a){s(e,t,a),C(m,t,null),r(t,n),~o&&p[o].m(t,null),r(t,c),C(v,t,null),g=!0},p(e,[n]){const r={};16&n&&(r.path=e[4]),32&n&&(r.homePath=e[5]),1&n&&(r.language=e[0]),2&n&&(r.defaultLanguage=e[1]),4&n&&(r.cmsMode=e[2]),m.$set(r);let s=o;o=$(e),o===s?~o&&p[o].p(e,n):(l&&(N={r:0,c:[],p:N},F(p[s],1,1,()=>{p[s]=null}),N.r||a(N.c),N=N.p),~o?(l=p[o],l||(l=p[o]=h[o](e),l.c()),A(l,1),l.m(t,c)):l=null);const i={};1&n&&(i.language=e[0]),2&n&&(i.defaultLanguage=e[1]),4&n&&(i.cmsMode=e[2]),v.$set(i)},i(e){g||(A(m.$$.fragment,e),A(l),A(v.$$.fragment,e),g=!0)},o(e){F(m.$$.fragment,e),F(l),F(v.$$.fragment,e),g=!1},d(n){n&&i(t),e[14](null),E(m),~o&&p[o].d(),E(v)}}}function be(e,t,n){let a,o,l,r,s,i,{language:c}=t,{defaultLanguage:u}=t,{devModePort:g}=t,{devMode:d=!1}=t,{cmsMode:f}=t;return w(async()=>{var e;n(4,o=window.location.pathname),n(8,d=window.origin.endsWith(":"+g)),d||"localhost"===window.location.hostname||"https:"===window.location.protocol||(window.location.protocol="https:"),n(6,r=window.localStorage.getItem("pageType")),n(7,(e=window.location.pathname,s=""===e||"/"===e||e.endsWith("index.html")?"":e.endsWith(".html")?e.substring(e.lastIndexOf("/")+1,e.lastIndexOf(".html")):void 0)),n(5,l=function(e){let t;return t=e.startsWith("/")?e.indexOf("/",1):e.indexOf("/",0),t>-1?e.substring(0,t+1):"/"}(o)),i=c===u?"":c+"_",cricketDocs.setCmsMode(f)}),e.$set=e=>{"language"in e&&n(0,c=e.language),"defaultLanguage"in e&&n(1,u=e.defaultLanguage),"devModePort"in e&&n(9,g=e.devModePort),"devMode"in e&&n(8,d=e.devMode),"cmsMode"in e&&n(2,f=e.cmsMode)},[c,u,f,a,o,l,r,s,d,g,i,void 0,{title:"",summary:"",content:""},{},function(e){x[e?"unshift":"push"](()=>{n(3,a=e)})}]}return new class extends J{constructor(e){super(),W(this,e,be,ve,l,{language:0,defaultLanguage:1,devModePort:9,devMode:8,cmsMode:2})}}({target:document.body,props:{devModePort:"5000",defaultLanguage:"pl",languages:["pl","en"],language:"pl",cmsMode:!1,texts:{hello:"Hello!",navigation:{},article:{}}}})}();
//# sourceMappingURL=bundle.js.map
