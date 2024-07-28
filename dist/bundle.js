(()=>{var e,t,n,o,r={339:()=>{customElements.define("about-me-item",class extends HTMLDivElement{constructor(){super()}connectedCallback(){this.className="w-full sm:w-1/2 xl:w-1/4";const e=document.createElement("div");e.className="flex max-w-64 w-full mx-auto items-center";const t=document.createElement("img");t.className="w-8 h-8 mr-8 fill-zinc-600",t.src=this.getAttribute("icon-src"),e.appendChild(t);const n=document.createElement("div"),o=document.createElement("div");o.className="font-Roboto text-2xl font-bold text-zinc-600 w-fit text-left",o.innerHTML=this.getAttribute("label"),n.appendChild(o);const r=document.createElement("div");r.className="font-Roboto text-lg font-normal text-zinc-600 w-fit text-left break-words",r.innerHTML=this.getAttribute("value"),n.appendChild(r),e.appendChild(n),this.appendChild(e)}},{extends:"div"})},251:(e,t,n)=>{"use strict";function o(e){return"number"==typeof e}function r(e){return"string"==typeof e}function i(e){return"boolean"==typeof e}function s(e){return"[object Object]"===Object.prototype.toString.call(e)}function a(e){return Math.abs(e)}function c(e){return Math.sign(e)}function l(e,t){return a(e-t)}function u(e){return h(e).map(Number)}function d(e){return e[p(e)]}function p(e){return Math.max(0,e.length-1)}function f(e,t){return t===p(e)}function m(e,t=0){return Array.from(Array(e),((e,n)=>t+n))}function h(e){return Object.keys(e)}function g(e,t){return[e,t].reduce(((e,t)=>(h(t).forEach((n=>{const o=e[n],r=t[n],i=s(o)&&s(r);e[n]=i?g(o,r):r})),e)),{})}function b(e,t){return void 0!==t.MouseEvent&&e instanceof t.MouseEvent}function w(){let e=[];const t={add:function(n,o,r,i={passive:!0}){let s;if("addEventListener"in n)n.addEventListener(o,r,i),s=()=>n.removeEventListener(o,r,i);else{const e=n;e.addListener(r),s=()=>e.removeListener(r)}return e.push(s),t},clear:function(){e=e.filter((e=>e()))}};return t}function y(e=0,t=0){const n=a(e-t);function o(t){return t<e}function r(e){return e>t}function i(e){return o(e)||r(e)}return{length:n,max:t,min:e,constrain:function(n){return i(n)?o(n)?e:t:n},reachedAny:i,reachedMax:r,reachedMin:o,removeOffset:function(e){return n?e-n*Math.ceil((e-t)/n):e}}}function v(e,t,n){const{constrain:o}=y(0,e),r=e+1;let i=s(t);function s(e){return n?a((r+e)%r):o(e)}function c(){return i}function l(){return v(e,c(),n)}const u={get:c,set:function(e){return i=s(e),u},add:function(e){return l().set(c()+e)},clone:l};return u}function x(e,t,n,o,r,s,u,d,p,f,m,h,g,v,x,S,k,P,E){const{cross:_,direction:T}=e,A=["INPUT","SELECT","TEXTAREA"],I={passive:!1},j=w(),C=w(),L=y(50,225).constrain(v.measure(20)),M={mouse:300,touch:400},D={mouse:500,touch:600},H=x?43:25;let F=!1,O=0,q=0,N=!1,V=!1,z=!1,B=!1;function W(e){if(!b(e,o)&&e.touches.length>=2)return U(e);const t=s.readPoint(e),n=s.readPoint(e,_),i=l(t,O),a=l(n,q);if(!V&&!B){if(!e.cancelable)return U(e);if(V=i>a,!V)return U(e)}const c=s.pointerMove(e);i>S&&(z=!0),f.useFriction(.3).useDuration(.75),d.start(),r.add(T(c)),e.preventDefault()}function U(e){const t=m.byDistance(0,!1).index!==h.get(),n=s.pointerUp(e)*(x?D:M)[B?"mouse":"touch"],o=function(e,t){const n=h.add(-1*c(e)),o=m.byDistance(e,!x).distance;return x||a(e)<L?o:k&&t?.5*o:m.byIndex(n.get(),0).distance}(T(n),t),r=function(e,t){if(0===e||0===t)return 0;if(a(e)<=a(t))return 0;const n=l(a(e),a(t));return a(n/e)}(n,o),i=H-10*r,u=P+r/50;V=!1,N=!1,C.clear(),f.useDuration(i).useFriction(u),p.distance(o,!x),B=!1,g.emit("pointerUp")}function R(e){z&&(e.stopPropagation(),e.preventDefault(),z=!1)}return{init:function(e){if(!E)return;function a(a){(i(E)||E(e,a))&&function(e){const i=b(e,o);B=i,z=x&&i&&!e.buttons&&F,F=l(r.get(),u.get())>=2,i&&0!==e.button||function(e){const t=e.nodeName||"";return A.includes(t)}(e.target)||(N=!0,s.pointerDown(e),f.useFriction(0).useDuration(0),r.set(u),function(){const e=B?n:t;C.add(e,"touchmove",W,I).add(e,"touchend",U).add(e,"mousemove",W,I).add(e,"mouseup",U)}(),O=s.readPoint(e),q=s.readPoint(e,_),g.emit("pointerDown"))}(a)}const c=t;j.add(c,"dragstart",(e=>e.preventDefault()),I).add(c,"touchmove",(()=>{}),I).add(c,"touchend",(()=>{})).add(c,"touchstart",a).add(c,"mousedown",a).add(c,"touchcancel",U).add(c,"contextmenu",U).add(c,"click",R,!0)},destroy:function(){j.clear(),C.clear()},pointerDown:function(){return N}}}function S(e,t){let n,o;function r(e){return e.timeStamp}function i(n,o){const r="client"+("x"===(o||e.scroll)?"X":"Y");return(b(n,t)?n:n.touches[0])[r]}return{pointerDown:function(e){return n=e,o=e,i(e)},pointerMove:function(e){const t=i(e)-i(o),s=r(e)-r(n)>170;return o=e,s&&(n=e),t},pointerUp:function(e){if(!n||!o)return 0;const t=i(o)-i(n),s=r(e)-r(n),c=r(e)-r(o)>170,l=t/s;return s&&!c&&a(l)>.1?l:0},readPoint:i}}function k(e,t,n,o,r,s,c){let l,u,d=[],p=!1;function f(e){return r.measureSize(c.measure(e))}return{init:function(r){s&&(u=f(e),d=o.map(f),l=new ResizeObserver((c=>{p||(i(s)||s(r,c))&&function(i){for(const s of i){const i=s.target===e,c=o.indexOf(s.target),l=i?u:d[c];if(a(f(i?e:o[c])-l)>=.5){n.requestAnimationFrame((()=>{r.reInit(),t.emit("resize")}));break}}}(c)})),[e].concat(o).forEach((e=>l.observe(e))))},destroy:function(){l&&l.disconnect(),p=!0}}}function P(e,t,n,o,r){const i=r.measure(10),s=r.measure(50),c=y(.1,.99);let l=!1;function u(){return!l&&!!e.reachedAny(n.get())&&!!e.reachedAny(t.get())}return{shouldConstrain:u,constrain:function(r){if(!u())return;const l=e.reachedMin(t.get())?"min":"max",d=a(e[l]-t.get()),p=n.get()-t.get(),f=c.constrain(d/s);n.subtract(p*f),!r&&a(p)<i&&(n.set(e.constrain(n.get())),o.useDuration(25).useBaseFriction())},toggleActive:function(e){l=!e}}}function E(e,t,n,o){const r=t.min+.1,i=t.max+.1,{reachedMin:s,reachedMax:a}=y(r,i);return{loop:function(t){if(!function(e){return 1===e?a(n.get()):-1===e&&s(n.get())}(t))return;const r=e*(-1*t);o.forEach((e=>e.add(r)))}}}function _(e){let t=e;function n(e){return o(e)?e:e.get()}return{get:function(){return t},set:function(e){t=n(e)},add:function(e){t+=n(e)},subtract:function(e){t-=n(e)}}}function T(e,t){const n="x"===e.scroll?function(e){return`translate3d(${e}px,0px,0px)`}:function(e){return`translate3d(0px,${e}px,0px)`},o=t.style;let r=!1;return{clear:function(){r||(o.transform="",t.getAttribute("style")||t.removeAttribute("style"))},to:function(t){r||(o.transform=n(e.direction(t)))},toggleActive:function(e){r=!e}}}function A(e,t,n,o,r,i,s,a,c){const l=u(r),d=u(r).reverse(),p=function(){const e=s[0];return h(m(d,e),n,!1)}().concat(function(){const e=t-s[0]-1;return h(m(l,e),-n,!0)}());function f(e,t){return e.reduce(((e,t)=>e-r[t]),t)}function m(e,t){return e.reduce(((e,n)=>f(e,t)>0?e.concat([n]):e),[])}function h(r,s,l){const u=function(e){return i.map(((n,r)=>({start:n-o[r]+.5+e,end:n+t-.5+e})))}(s);return r.map((t=>{const o=l?0:-n,r=l?n:0,i=l?"end":"start",s=u[t][i];return{index:t,loopPoint:s,slideLocation:_(-1),translate:T(e,c[t]),target:()=>a.get()>s?o:r}}))}return{canLoop:function(){return p.every((({index:e})=>f(l.filter((t=>t!==e)),t)<=.1))},clear:function(){p.forEach((e=>e.translate.clear()))},loop:function(){p.forEach((e=>{const{target:t,translate:n,slideLocation:o}=e,r=t();r!==o.get()&&(n.to(r),o.set(r))}))},loopPoints:p}}function I(e,t,n){let o,r=!1;return{init:function(s){n&&(o=new MutationObserver((e=>{r||(i(n)||n(s,e))&&function(e){for(const n of e)if("childList"===n.type){s.reInit(),t.emit("slidesChanged");break}}(e)})),o.observe(e,{childList:!0}))},destroy:function(){o&&o.disconnect(),r=!0}}}function j(e,t,n,i,s,g,b){const{align:j,axis:C,direction:L,startIndex:M,loop:D,duration:H,dragFree:F,dragThreshold:O,inViewThreshold:q,slidesToScroll:N,skipSnaps:V,containScroll:z,watchResize:B,watchSlides:W,watchDrag:U}=g,R={measure:function(e){const{offsetTop:t,offsetLeft:n,offsetWidth:o,offsetHeight:r}=e;return{top:t,right:n+o,bottom:t+r,left:n,width:o,height:r}}},G=R.measure(t),$=n.map(R.measure),K=function(e,t){const n="rtl"===t,o="y"===e,r=!o&&n?-1:1;return{scroll:o?"y":"x",cross:o?"x":"y",startEdge:o?"top":n?"right":"left",endEdge:o?"bottom":n?"left":"right",measureSize:function(e){const{height:t,width:n}=e;return o?t:n},direction:function(e){return e*r}}}(C,L),J=K.measureSize(G),Q=function(e){return{measure:function(t){return e*(t/100)}}}(J),X=function(e,t){const n={start:function(){return 0},center:function(e){return o(e)/2},end:o};function o(e){return t-e}return{measure:function(o,i){return r(e)?n[e](o):e(t,o,i)}}}(j,J),Y=!D&&!!z,Z=D||!!z,{slideSizes:ee,slideSizesWithGaps:te,startGap:ne,endGap:oe}=function(e,t,n,o,r,i){const{measureSize:s,startEdge:c,endEdge:l}=e,u=n[0]&&r,p=function(){if(!u)return 0;const e=n[0];return a(t[c]-e[c])}(),m=function(){if(!u)return 0;const e=i.getComputedStyle(d(o));return parseFloat(e.getPropertyValue(`margin-${l}`))}(),h=n.map(s),g=n.map(((e,t,n)=>{const o=!t,r=f(n,t);return o?h[t]+p:r?h[t]+m:n[t+1][c]-e[c]})).map(a);return{slideSizes:h,slideSizesWithGaps:g,startGap:p,endGap:m}}(K,G,$,n,Z,s),re=function(e,t,n,r,i,s,c,l,f){const{startEdge:m,endEdge:h,direction:g}=e,b=o(n);return{groupSlides:function(e){return b?function(e,t){return u(e).filter((e=>e%t==0)).map((n=>e.slice(n,n+t)))}(e,n):function(e){return e.length?u(e).reduce(((n,o,u)=>{const b=d(n)||0,w=0===b,y=o===p(e),v=i[m]-s[b][m],x=i[m]-s[o][h],S=!r&&w?g(c):0,k=a(x-(!r&&y?g(l):0)-(v+S));return u&&k>t+f&&n.push(o),y&&n.push(e.length),n}),[]).map(((t,n,o)=>{const r=Math.max(o[n-1]||0);return e.slice(r,t)})):[]}(e)}}}(K,J,N,D,G,$,ne,oe,2),{snaps:ie,snapsAligned:se}=function(e,t,n,o,r){const{startEdge:i,endEdge:s}=e,{groupSlides:c}=r,l=c(o).map((e=>d(e)[s]-e[0][i])).map(a).map(t.measure),u=o.map((e=>n[i]-e[i])).map((e=>-a(e))),p=c(u).map((e=>e[0])).map(((e,t)=>e+l[t]));return{snaps:u,snapsAligned:p}}(K,X,G,$,re),ae=-d(ie)+d(te),{snapsContained:ce,scrollContainLimit:le}=function(e,t,n,o,r){const i=y(-t+e,0),s=n.map(((e,t)=>{const{min:o,max:r}=i,s=i.constrain(e),a=!t,l=f(n,t);return a?r:l||c(o,s)?o:c(r,s)?r:s})).map((e=>parseFloat(e.toFixed(3)))),a=function(){const e=s[0],t=d(s);return y(s.lastIndexOf(e),s.indexOf(t)+1)}();function c(e,t){return l(e,t)<1}return{snapsContained:function(){if(t<=e+2)return[i.max];if("keepSnaps"===o)return s;const{min:n,max:r}=a;return s.slice(n,r)}(),scrollContainLimit:a}}(J,ae,se,z),ue=Y?ce:se,{limit:de}=function(e,t,n){const o=t[0];return{limit:y(n?o-e:d(t),o)}}(ae,ue,D),pe=v(p(ue),M,D),fe=pe.clone(),me=u(n),he=function(e,t,n){const o=w(),r=1e3/60;let i=null,s=0,a=0;function c(e){if(!s)return;i||(i=e);const o=e-i;for(i=e,a+=o;a>=r;)n(),a-=r;s&&t.requestAnimationFrame(c)}function l(){t.cancelAnimationFrame(s),i=null,a=0,s=0}return{init:function(){o.add(e,"visibilitychange",(()=>{e.hidden&&(i=null,a=0)}))},destroy:function(){l(),o.clear()},start:function(){s||(s=t.requestAnimationFrame(c))},stop:l,update:n}}(i,s,(()=>(({dragHandler:e,eventHandler:t,scrollBody:n,scrollBounds:o,scrollLooper:r,slideLooper:i,translate:s,location:a,animation:c,options:{loop:l}})=>{l||o.constrain(e.pointerDown()),n.seek();const u=n.settled(),d=!o.shouldConstrain(),p=l?u:u&&d;p&&!e.pointerDown()&&(c.stop(),t.emit("settle")),p||t.emit("scroll"),l&&(r.loop(n.direction()),i.loop()),s.to(a.get())})(Te))),ge=ue[pe.get()],be=_(ge),we=_(ge),ye=function(e,t,n,o){let r=0,i=0,s=n,l=.68,u=e.get(),d=0;function p(e){return s=e,m}function f(e){return l=e,m}const m={direction:function(){return i},duration:function(){return s},velocity:function(){return r},seek:function(){const n=t.get()-e.get();let o=0;return s?(r+=n/s,r*=l,u+=r,e.add(r),o=u-d):(r=0,e.set(t),o=n),i=c(o),d=u,m},settled:function(){return a(t.get()-e.get())<.001},useBaseFriction:function(){return f(.68)},useBaseDuration:function(){return p(n)},useFriction:f,useDuration:p};return m}(be,we,H),ve=function(e,t,n,o,r){const{reachedAny:i,removeOffset:s,constrain:l}=o;function u(e){return e.concat().sort(((e,t)=>a(e)-a(t)))[0]}function p(t,o){const r=[t,t+n,t-n];if(!e)return t;if(!o)return u(r);const i=r.filter((e=>c(e)===o));return i.length?u(i):d(r)-n}return{byDistance:function(n,o){const c=r.get()+n,{index:u,distance:d}=function(n){const o=e?s(n):l(n),r=t.map(((e,t)=>({diff:p(e-o,0),index:t}))).sort(((e,t)=>a(e.diff)-a(t.diff))),{index:i}=r[0];return{index:i,distance:o}}(c),f=!e&&i(c);return!o||f?{index:u,distance:n}:{index:u,distance:n+p(t[u]-d,0)}},byIndex:function(e,n){return{index:e,distance:p(t[e]-r.get(),n)}},shortcut:p}}(D,ue,ae,de,we),xe=function(e,t,n,o,r,i){function s(o){const s=o.distance,a=o.index!==t.get();r.add(s),s&&e.start(),a&&(n.set(t.get()),t.set(o.index),i.emit("select"))}return{distance:function(e,t){s(o.byDistance(e,t))},index:function(e,n){const r=t.clone().set(e);s(o.byIndex(r.get(),n))}}}(he,pe,fe,ve,we,b),Se=function(e){const{max:t,length:n}=e;return{get:function(e){return n?(e-t)/-n:0}}}(de),ke=w(),Pe=function(e,t,n,o){const r={};let i,s=null,a=null,c=!1;return{init:function(){i=new IntersectionObserver((e=>{c||(e.forEach((e=>{const n=t.indexOf(e.target);r[n]=e})),s=null,a=null,n.emit("slidesInView"))}),{root:e.parentElement,threshold:o}),t.forEach((e=>i.observe(e)))},destroy:function(){i&&i.disconnect(),c=!0},get:function(e=!0){if(e&&s)return s;if(!e&&a)return a;const t=function(e){return h(r).reduce(((t,n)=>{const o=parseInt(n),{isIntersecting:i}=r[o];return(e&&i||!e&&!i)&&t.push(o),t}),[])}(e);return e&&(s=t),e||(a=t),t}}}(t,n,b,q),{slideRegistry:Ee}=function(e,t,n,o,r,i){const{groupSlides:s}=r,{min:a,max:c}=o;return{slideRegistry:function(){const o=s(i),r=!e||"keepSnaps"===t;return 1===n.length?[i]:r?o:o.slice(a,c).map(((e,t,n)=>{const o=!t,r=f(n,t);return o?m(d(n[0])+1):r?m(p(i)-d(n)[0]+1,d(n)[0]):e}))}()}}(Y,z,ue,le,re,me),_e=function(e,t,n,r,i,s,a){let c=0;function l(e){"Tab"===e.code&&(c=(new Date).getTime())}function u(l){s.add(l,"focus",(()=>{if((new Date).getTime()-c>10)return;e.scrollLeft=0;const s=t.indexOf(l),u=n.findIndex((e=>e.includes(s)));o(u)&&(i.useDuration(0),r.index(u,0),a.emit("slideFocus"))}),{passive:!0,capture:!0})}return{init:function(){s.add(document,"keydown",l,!1),t.forEach(u)}}}(e,n,Ee,xe,ye,ke,b),Te={ownerDocument:i,ownerWindow:s,eventHandler:b,containerRect:G,slideRects:$,animation:he,axis:K,dragHandler:x(K,e,i,s,we,S(K,s),be,he,xe,ye,ve,pe,b,Q,F,O,V,.68,U),eventStore:ke,percentOfView:Q,index:pe,indexPrevious:fe,limit:de,location:be,options:g,resizeHandler:k(t,b,s,n,K,B,R),scrollBody:ye,scrollBounds:P(de,be,we,ye,Q),scrollLooper:E(ae,de,be,[be,we]),scrollProgress:Se,scrollSnapList:ue.map(Se.get),scrollSnaps:ue,scrollTarget:ve,scrollTo:xe,slideLooper:A(K,J,ae,ee,te,ie,ue,be,n),slideFocus:_e,slidesHandler:I(t,b,W),slidesInView:Pe,slideIndexes:me,slideRegistry:Ee,slidesToScroll:re,target:we,translate:T(K,t)};return Te}n.d(t,{U:()=>F});const C={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function L(e){function t(e,t){return g(e,t||{})}return{mergeOptions:t,optionsAtMedia:function(n){const o=n.breakpoints||{},r=h(o).filter((t=>e.matchMedia(t).matches)).map((e=>o[e])).reduce(((e,n)=>t(e,n)),{});return t(n,r)},optionsMediaQueries:function(t){return t.map((e=>h(e.breakpoints||{}))).reduce(((e,t)=>e.concat(t)),[]).map(e.matchMedia)}}}function M(e,t,n){const o=e.ownerDocument,i=o.defaultView,s=L(i),a=function(e){let t=[];return{init:function(n,o){return t=o.filter((({options:t})=>!1!==e.optionsAtMedia(t).active)),t.forEach((t=>t.init(n,e))),o.reduce(((e,t)=>Object.assign(e,{[t.name]:t})),{})},destroy:function(){t=t.filter((e=>e.destroy()))}}}(s),c=w(),l=function(){let e,t={};function n(e){return t[e]||[]}const o={init:function(t){e=t},emit:function(t){return n(t).forEach((n=>n(e,t))),o},off:function(e,r){return t[e]=n(e).filter((e=>e!==r)),o},on:function(e,r){return t[e]=n(e).concat([r]),o},clear:function(){t={}}};return o}(),{mergeOptions:u,optionsAtMedia:d,optionsMediaQueries:p}=s,{on:f,off:m,emit:h}=l,g=A;let b,y,v,x,S=!1,k=u(C,M.globalOptions),P=u(k),E=[];function _(t){const n=j(e,v,x,o,i,t,l);return t.loop&&!n.slideLooper.canLoop()?_(Object.assign({},t,{loop:!1})):n}function T(t,n){S||(k=u(k,t),P=d(k),E=n||E,function(){const{container:t,slides:n}=P,o=r(t)?e.querySelector(t):t;v=o||e.children[0];const i=r(n)?v.querySelectorAll(n):n;x=[].slice.call(i||v.children)}(),b=_(P),p([k,...E.map((({options:e})=>e))]).forEach((e=>c.add(e,"change",A))),P.active&&(b.translate.to(b.location.get()),b.animation.init(),b.slidesInView.init(),b.slideFocus.init(),b.eventHandler.init(F),b.resizeHandler.init(F),b.slidesHandler.init(F),b.options.loop&&b.slideLooper.loop(),v.offsetParent&&x.length&&b.dragHandler.init(F),y=a.init(F,E)))}function A(e,t){const n=H();I(),T(u({startIndex:n},e),t),l.emit("reInit")}function I(){b.dragHandler.destroy(),b.eventStore.clear(),b.translate.clear(),b.slideLooper.clear(),b.resizeHandler.destroy(),b.slidesHandler.destroy(),b.slidesInView.destroy(),b.animation.destroy(),a.destroy(),c.clear()}function D(e,t,n){P.active&&!S&&(b.scrollBody.useBaseFriction().useDuration(!0===t?0:P.duration),b.scrollTo.index(e,n||0))}function H(){return b.index.get()}const F={canScrollNext:function(){return b.index.add(1).get()!==H()},canScrollPrev:function(){return b.index.add(-1).get()!==H()},containerNode:function(){return v},internalEngine:function(){return b},destroy:function(){S||(S=!0,c.clear(),I(),l.emit("destroy"),l.clear())},off:m,on:f,emit:h,plugins:function(){return y},previousScrollSnap:function(){return b.indexPrevious.get()},reInit:g,rootNode:function(){return e},scrollNext:function(e){D(b.index.add(1).get(),e,-1)},scrollPrev:function(e){D(b.index.add(-1).get(),e,1)},scrollProgress:function(){return b.scrollProgress.get(b.location.get())},scrollSnapList:function(){return b.scrollSnapList},scrollTo:D,selectedScrollSnap:H,slideNodes:function(){return x},slidesInView:function(){return b.slidesInView.get()},slidesNotInView:function(){return b.slidesInView.get(!1)}};return T(t,n),setTimeout((()=>l.emit("init")),0),F}M.globalOptions=void 0;class D{root;initPromise;constructor(e){this.initPromise=this.init(e)}async init(e){const t=await(await fetch("./src/components/"+e)).text(),n=document.createElement("div");n.innerHTML=t,this.root=n.querySelector("div")}}const H="kaismic";class F extends D{constructor(e){super("project-card.html"),this.initPromise=this.initPromise.then((async()=>{this.root.querySelector(".project-card__title").innerHTML=e.title,this.root.querySelector(".project-card__subtitle").innerHTML=e.subtitle,await fetch(`https://api.github.com/repos/${H}/${e.repo}/commits/${e.defaultBranch}`).then((async e=>{if(!e.ok)return Promise.reject();const t=await e.json();return fetch(t.commit.tree.url+"?recursive=1")})).then((async t=>{if(!t.ok)return Promise.reject();const n=(await t.json()).tree,o=new RegExp(/resources\/preview_(image|video)_\d/),r=[],i=[];for(const t of n){const n=t.path.match(o);if(null!==n){const o=`https://raw.githubusercontent.com/${H}/${e.repo}/${e.defaultBranch}/${t.path}`;switch(n[1]){case"image":i.push({src:o,tag:"img"});break;case"video":r.push({src:o,tag:"video"})}}}const s=r.concat(i),a=this.root.querySelector(".project-card__carousel-slides-container");for(const e of s){const t=document.createElement(e.tag);switch(t.className="flex grow-0 shrink-0 basis-full min-w-0 object-scale-down",e.tag){case"img":t.src=e.src;break;case"video":t.autoplay=!0,t.loop=!0,t.muted=!0,t.src=e.src}a.appendChild(t)}})).catch((()=>{}));const t=this.root.querySelector(".project-card__badges-container");e.badges.length>0&&t.classList.add("mb-4");for(const n of e.badges){const e=document.createElement("a");e.href=n.href;const o=document.createElement("img");o.src=n.badgeUrl,o.alt=n.altText,e.appendChild(o),t.appendChild(e)}const n=this.root.querySelector(".project-card__main-desc"),o=e.paragraphs.map((e=>{const t=document.createElement("p");return t.innerHTML=e,t})).flatMap((e=>[e,document.createElement("br")])).slice(0,-1);for(const e of o)n.appendChild(e);this.root.querySelector(".project-card__details__github-link").href=e.githubLink;const r=this.root.querySelector(".project-card__details__skills-container");for(const t of e.skills){const e=document.createElement("div");e.className="border h-fit py-1 px-3 border-neutral-400 rounded-3xl";const n=document.createElement("span");n.className="max-w-full",n.innerHTML=t,e.appendChild(n),r.appendChild(e)}const i=M(this.root.querySelector(".project-card__carousel-root"),{loop:!1,duration:25});this.root.querySelector(".project-card__carousel-prev-btn").addEventListener("click",(()=>{i.scrollPrev()})),this.root.querySelector(".project-card__carousel-next-btn").addEventListener("click",(()=>{i.scrollNext()})),i.on("select",this.setCarouselPageNum),i.on("select",this.setVideoPlayState),this.setCarouselPageNum(i);const s=new ResizeObserver((()=>{const e=this.root.querySelector(".project-card__details-container"),t=e.computedStyleMap().get("column-gap").value,n=this.root.querySelector(".project-card__details__skills-label").offsetWidth,o=e.offsetWidth-n-t,r=this.root.querySelector(".project-card__details__skills-container");for(const e of Array.from(r.children)){const t=e.firstElementChild;t.style.textWrap="nowrap";const n=e.computedStyleMap();e.offsetWidth<=o?e.style.removeProperty("width"):(t.style.removeProperty("text-wrap"),e.style.width=t.offsetWidth+n.get("padding-left").value+n.get("padding-right").value+2*n.get("border-left-width").value+"px")}}).bind(this));s.observe(this.root.querySelector(".project-card__carousel-root"))}))}setCarouselPageNum(e){const t=e.rootNode().querySelector(".project-card__carousel-page-display"),n=e.slideNodes().length;t.innerText=0===n?"-":e.selectedScrollSnap()+1+"/"+n.toString()}setVideoPlayState(e){const t=e.selectedScrollSnap(),n=e.slideNodes();for(let e=0;e<n.length;e++)if(n[e]instanceof HTMLVideoElement){const o=n[e];t===e?o.play():o.pause()}}}},172:(e,t,n)=>{"use strict";n.a(e,(async(e,t)=>{try{var o=n(251);const e=[{title:"The Carbon-Conscious Traveller - Internship",subtitle:"Dec 2023 - Jan 2024",repo:"The-Carbon-Conscious-Traveller",defaultBranch:"master",badges:[],paragraphs:["<b>Summer Internship Project offered by Macquarie University.</b> This project involved developing an <b>Android application that calculates and displays carbon emissions with different transport modes.</b> It was developed using <span class='text-pink-500'>Kotlin</span> and <span class='text-pink-500'>Android Studio</span>, utilising various <span class='text-emerald-600'>APIs</span> provided by <span class='text-pink-500'>Google Maps Platform</span>.","My responsibilities in this project were: presenting progress in the weekly meeting, background research for other similar projects/apps and developing, testing and streamlining the app.","Contributing to this project has made me gain extensive knowledge about <span class='text-emerald-600'>Android Fragments</span>, <span class='text-emerald-600'>Kotlin Coroutines</span>, and further broadened my understanding of Android application development."],githubLink:"https://github.com/kaismic/The-Carbon-Conscious-Traveller/",skills:["Kotlin","Android","Android Studio","Google Maps API"]}],r=document.getElementById("experience-container");for(const t of e){const e=new o.U(t);await e.initPromise.then((()=>{r.appendChild(e.root)}))}const i=[{title:"Portfolio Website",subtitle:"Apr 2024 - Present (Solo Project)",repo:"My-Portfolio",defaultBranch:"main",badges:[],paragraphs:["<b>Portfolio website</b> (which you are currently looking at) for presenting my software development projects and works.","<span class='text-emerald-600'>Responsive Web Design</span> is applied throughout the whole website via <span class='text-pink-500'>Tailwind CSS</span>, making the website respond to different screen sizes to change its layout accordingly. Furthermore, this was the first time I have utilised a module bundler like <span class='text-pink-500'>Webpack</span>, and it was quite interesting to see how it bundles different JavaScript files into a single file by analysing module dependencies."],githubLink:"https://github.com/kaismic/My-Portfolio/",skills:["HTML","CSS","JavaScript","TypeScript","Tailwind CSS","WebPack","npm"]},{title:"Hitomi Scroll Viewer",subtitle:"Jul 2022 - Present (Solo Project)",repo:"Hitomi-Scroll-Viewer",defaultBranch:"master",badges:[{href:"https://github.com/kaismic/Hitomi-Scroll-Viewer/releases/latest",badgeUrl:"https://img.shields.io/github/release/kaismic/Hitomi-Scroll-Viewer.svg?logo=github",altText:"GitHub latest release"},{href:"https://github.com/kaismic/Hitomi-Scroll-Viewer/releases/latest",badgeUrl:"https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fkaismic%2FHitomi-Scroll-Viewer%2Freleases%2Flatest&query=%24.assets%5B%3F(%2Fmsixbundle%2F.test(%40.name))%5D.download_count&label=downloads%40latest&color=9BC913",altText:"GitHub downloads count latest release"},{href:"https://github.com/kaismic/Hitomi-Scroll-Viewer/releases",badgeUrl:"https://img.shields.io/github/downloads/kaismic/Hitomi-Scroll-Viewer/total.svg?logo=github",altText:"GitHub downloads count total"}],paragraphs:["<b>A gallery viewer application with various features such as creating search links with combinable tag filters, auto scrolling and downloading.</b> This application was developed because the original website lacked functionalities that I required and it was inconvenient to use the already existing features in the website. Developed using <span class='text-pink-500'>C#</span>, <span class='text-pink-500'>.NET</span> and <span class='text-pink-500'>WinUI 3</span> Platform","One of the things that I have learnt about in <i>Systems Programming</i> unit was <span class='text-emerald-600'>Mutex</span>. This concept came in very handy because it enabled the app to handle the user inputs without causing any <span class='text-emerald-600'>race conditions</span>. Moreover, two concepts which I have learnt from <i>Object-Oriented Programming Practices</i> were <span class='text-emerald-600'>Concurrency</span> and <span class='text-emerald-600'>Design Pattern</span>, which were incredibly helpful when developing this app. The former was used when implementing the image downloading function with a bit of TCP/IP knowledge I have gained from <i>Data Communications</i>. The latter was utilised for modularising different components of the app, which helped to keep the project code managable and refactorable.","This app also allows users to sync their data on Google Drive using Google APIs with the OAuth 2.0 protocol for authentication and authorization."],githubLink:"https://github.com/kaismic/Hitomi-Scroll-Viewer",skills:["C#",".NET","WinUI 3","Windows","OAuth 2.0"]},{title:"Custom Layout Keyboard for Android",subtitle:"Apr 2022 - Dec 2023 (Solo Project)",repo:"Custom-Layout-Keyboard-for-Android",defaultBranch:"master",badges:[],paragraphs:["<b>An Android application which allows customising keyboard layouts</b> developed using <span class='text-pink-500'>Kotlin</span> and <span class='text-pink-500'>Android Studio</span>. This application was developed because I could not find a decent keyboard application which also supports keyboard layout customisation.","One of the valuable experiences that I have gained while working on this project was the experience of using features of <span class='text-emerald-600'>Object Oriented Programming</span>. As an example, during development, I realised that I was writing overlapping codes repeatedly, and this was when the concept of <span class='text-emerald-600'>inheritance</span> came to my mind. Using inheritance effectively reduced the amount of code I had to write and improved reusability of the code. Furthermore, I have also gained hands-on experience on Kotlin and android application lifecycle while working on this project."],githubLink:"https://github.com/kaismic/My-Portfolio/",skills:["Kotlin","Android","Android Studio"]}],s=document.getElementById("projects-container");for(const e of i){const t=new o.U(e);await t.initPromise.then((()=>{s.appendChild(t.root)}))}t()}catch(e){t(e)}}),1)}},i={};function s(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return r[e](n,n.exports,s),n.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",o=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},s.a=(r,i,s)=>{var a;s&&((a=[]).d=-1);var c,l,u,d=new Set,p=r.exports,f=new Promise(((e,t)=>{u=t,l=e}));f[t]=p,f[e]=e=>(a&&e(a),d.forEach(e),f.catch((e=>{}))),r.exports=f,i((r=>{var i;c=(r=>r.map((r=>{if(null!==r&&"object"==typeof r){if(r[e])return r;if(r.then){var i=[];i.d=0,r.then((e=>{s[t]=e,o(i)}),(e=>{s[n]=e,o(i)}));var s={};return s[e]=e=>e(i),s}}var a={};return a[e]=e=>{},a[t]=r,a})))(r);var s=()=>c.map((e=>{if(e[n])throw e[n];return e[t]})),l=new Promise((t=>{(i=()=>t(s)).r=0;var n=e=>e!==a&&!d.has(e)&&(d.add(e),e&&!e.d&&(i.r++,e.push(i)));c.map((t=>t[e](n)))}));return i.r?l:s()}),(e=>(e?u(f[n]=e):l(p),o(a)))),a&&a.d<0&&(a.d=0)},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s(339),s(172)})();