customElements.define("about-me-item",class extends HTMLDivElement{constructor(){super()}connectedCallback(){this.className="w-full sm:w-1/2 lg:w-1/3";let e=document.createElement("div");e.className="flex max-w-64 w-full mx-auto items-center";let t=document.createElement("img");t.className="w-8 h-8 mr-8 fill-zinc-600",t.src=this.getAttribute("icon-src"),e.appendChild(t);let n=document.createElement("div"),i=document.createElement("div");i.className="font-Roboto text-2xl font-bold text-zinc-600 w-fit text-left",i.innerHTML=this.getAttribute("label"),n.appendChild(i);let r=document.createElement("div");r.className="font-Roboto text-lg font-normal text-zinc-600 w-fit text-left",r.innerHTML=this.getAttribute("value"),n.appendChild(r),e.appendChild(n),this.appendChild(e)}},{extends:"div"}),(()=>{"use strict";function e(e){return"number"==typeof e}function t(e){return"string"==typeof e}function n(e){return"boolean"==typeof e}function i(e){return"[object Object]"===Object.prototype.toString.call(e)}function r(e){return Math.abs(e)}function o(e){return Math.sign(e)}function s(e,t){return r(e-t)}function a(e){return p(e).map(Number)}function c(e){return e[l(e)]}function l(e){return Math.max(0,e.length-1)}function u(e,t){return t===l(e)}function d(e,t=0){return Array.from(Array(e),((e,n)=>t+n))}function p(e){return Object.keys(e)}function f(e,t){return[e,t].reduce(((e,t)=>(p(t).forEach((n=>{const r=e[n],o=t[n],s=i(r)&&i(o);e[n]=s?f(r,o):o})),e)),{})}function m(e,t){return void 0!==t.MouseEvent&&e instanceof t.MouseEvent}function g(){let e=[];const t={add:function(n,i,r,o={passive:!0}){let s;if("addEventListener"in n)n.addEventListener(i,r,o),s=()=>n.removeEventListener(i,r,o);else{const e=n;e.addListener(r),s=()=>e.removeListener(r)}return e.push(s),t},clear:function(){e=e.filter((e=>e()))}};return t}function h(e=0,t=0){const n=r(e-t);function i(t){return t<e}function o(e){return e>t}function s(e){return i(e)||o(e)}return{length:n,max:t,min:e,constrain:function(n){return s(n)?i(n)?e:t:n},reachedAny:s,reachedMax:o,reachedMin:i,removeOffset:function(e){return n?e-n*Math.ceil((e-t)/n):e}}}function b(e,t,n){const{constrain:i}=h(0,e),o=e+1;let s=a(t);function a(e){return n?r((o+e)%o):i(e)}function c(){return s}function l(){return b(e,c(),n)}const u={get:c,set:function(e){return s=a(e),u},add:function(e){return l().set(c()+e)},clone:l};return u}function y(e,t,i,a,c,l,u,d,p,f,b,y,v,w,x,S,k,_,P){const{cross:E,direction:T}=e,I=["INPUT","SELECT","TEXTAREA"],L={passive:!1},A=g(),M=g(),j=h(50,225).constrain(w.measure(20)),C={mouse:300,touch:400},D={mouse:500,touch:600},H=x?43:25;let O=!1,N=0,q=0,F=!1,z=!1,V=!1,W=!1;function R(e){const t=l.readPoint(e),n=l.readPoint(e,E),i=s(t,N),r=s(n,q);if(!z&&!W){if(!e.cancelable)return B(e);if(z=i>r,!z)return B(e)}const o=l.pointerMove(e);i>S&&(V=!0),f.useFriction(.3).useDuration(1),d.start(),c.add(T(o)),e.preventDefault()}function B(e){const t=b.byDistance(0,!1).index!==y.get(),n=l.pointerUp(e)*(x?D:C)[W?"mouse":"touch"],i=function(e,t){const n=y.add(-1*o(e)),i=b.byDistance(e,!x).distance;return x||r(e)<j?i:k&&t?.5*i:b.byIndex(n.get(),0).distance}(T(n),t),a=function(e,t){if(0===e||0===t)return 0;if(r(e)<=r(t))return 0;const n=s(r(e),r(t));return r(n/e)}(n,i),c=H-10*a,u=_+a/50;z=!1,F=!1,M.clear(),f.useDuration(c).useFriction(u),p.distance(i,!x),W=!1,v.emit("pointerUp")}function G(e){V&&(e.stopPropagation(),e.preventDefault(),V=!1)}return{init:function(e){if(!P)return;function r(r){(n(P)||P(e,r))&&function(e){const n=m(e,a);W=n,V=x&&n&&!e.buttons&&O,O=s(c.get(),u.get())>=2,n&&0!==e.button||function(e){const t=e.nodeName||"";return I.includes(t)}(e.target)||(F=!0,l.pointerDown(e),f.useFriction(0).useDuration(0),c.set(u),function(){const e=W?i:t;M.add(e,"touchmove",R,L).add(e,"touchend",B).add(e,"mousemove",R,L).add(e,"mouseup",B)}(),N=l.readPoint(e),q=l.readPoint(e,E),v.emit("pointerDown"))}(r)}const o=t;A.add(o,"dragstart",(e=>e.preventDefault()),L).add(o,"touchmove",(()=>{}),L).add(o,"touchend",(()=>{})).add(o,"touchstart",r).add(o,"mousedown",r).add(o,"touchcancel",B).add(o,"contextmenu",B).add(o,"click",G,!0)},pointerDown:function(){return F},destroy:function(){A.clear(),M.clear()}}}function v(e,t){let n,i;function o(e){return e.timeStamp}function s(n,i){const r="client"+("x"===(i||e.scroll)?"X":"Y");return(m(n,t)?n:n.touches[0])[r]}return{pointerDown:function(e){return n=e,i=e,s(e)},pointerMove:function(e){const t=s(e)-s(i),r=o(e)-o(n)>170;return i=e,r&&(n=e),t},pointerUp:function(e){if(!n||!i)return 0;const t=s(i)-s(n),a=o(e)-o(n),c=o(e)-o(i)>170,l=t/a;return a&&!c&&r(l)>.1?l:0},readPoint:s}}function w(e,t,i,o,s,a,c){let l,u,d=[],p=!1;function f(e){return s.measureSize(c.measure(e))}return{init:function(s){a&&(u=f(e),d=o.map(f),l=new ResizeObserver((c=>{p||(n(a)||a(s,c))&&function(n){for(const a of n){const n=a.target===e,c=o.indexOf(a.target),l=n?u:d[c];if(r(f(n?e:o[c])-l)>=.5){i.requestAnimationFrame((()=>{s.reInit(),t.emit("resize")}));break}}}(c)})),[e].concat(o).forEach((e=>l.observe(e))))},destroy:function(){l&&l.disconnect(),p=!0}}}function x(e,t,n,i,o){const s=o.measure(10),a=o.measure(50),c=h(.1,.99);let l=!1;return{constrain:function(o){if(l||!e.reachedAny(n.get())||!e.reachedAny(t.get()))return;const u=e.reachedMin(t.get())?"min":"max",d=r(e[u]-t.get()),p=n.get()-t.get(),f=c.constrain(d/a);n.subtract(p*f),!o&&r(p)<s&&(n.set(e.constrain(n.get())),i.useDuration(25).useBaseFriction())},toggleActive:function(e){l=!e}}}function S(e,t,n,i){const r=t.min+.1,o=t.max+.1,{reachedMin:s,reachedMax:a}=h(r,o);return{loop:function(t){if(!function(e){return 1===e?a(n.get()):-1===e&&s(n.get())}(t))return;const r=e*(-1*t);i.forEach((e=>e.add(r)))}}}function k(t){let n=t;function i(t){return e(t)?t:t.get()}return{get:function(){return n},set:function(e){n=i(e)},add:function(e){n+=i(e)},subtract:function(e){n-=i(e)}}}function _(e,t){const n="x"===e.scroll?function(e){return`translate3d(${e}px,0px,0px)`}:function(e){return`translate3d(0px,${e}px,0px)`},i=t.style;let r=!1;return{clear:function(){r||(i.transform="",t.getAttribute("style")||t.removeAttribute("style"))},to:function(t){r||(i.transform=n(e.direction(t)))},toggleActive:function(e){r=!e}}}function P(e,t,n,i,r,o,s,c,l){const u=a(r),d=a(r).reverse(),p=function(){const e=s[0];return g(m(d,e),n,!1)}().concat(function(){const e=t-s[0]-1;return g(m(u,e),-n,!0)}());function f(e,t){return e.reduce(((e,t)=>e-r[t]),t)}function m(e,t){return e.reduce(((e,n)=>f(e,t)>0?e.concat([n]):e),[])}function g(r,s,a){const u=function(e){return o.map(((n,r)=>({start:n-i[r]+.5+e,end:n+t-.5+e})))}(s);return r.map((t=>{const i=a?0:-n,r=a?n:0,o=a?"end":"start",s=u[t][o];return{index:t,loopPoint:s,slideLocation:k(-1),translate:_(e,l[t]),target:()=>c.get()>s?i:r}}))}return{canLoop:function(){return p.every((({index:e})=>f(u.filter((t=>t!==e)),t)<=.1))},clear:function(){p.forEach((e=>e.translate.clear()))},loop:function(){p.forEach((e=>{const{target:t,translate:n,slideLocation:i}=e,r=t();r!==i.get()&&(n.to(r),i.set(r))}))},loopPoints:p}}function E(e,t,i){let r,o=!1;return{init:function(s){i&&(r=new MutationObserver((e=>{o||(n(i)||i(s,e))&&function(e){for(const n of e)if("childList"===n.type){s.reInit(),t.emit("slidesChanged");break}}(e)})),r.observe(e,{childList:!0}))},destroy:function(){r&&r.disconnect(),o=!0}}}function T(n,i,f,m,T,I,L){const{align:A,axis:M,direction:j,startIndex:C,loop:D,duration:H,dragFree:O,dragThreshold:N,inViewThreshold:q,slidesToScroll:F,skipSnaps:z,containScroll:V,watchResize:W,watchSlides:R,watchDrag:B}=I,G={measure:function(e){const{offsetTop:t,offsetLeft:n,offsetWidth:i,offsetHeight:r}=e;return{top:t,right:n+i,bottom:t+r,left:n,width:i,height:r}}},U=G.measure(i),K=f.map(G.measure),J=function(e,t){const n="rtl"===t,i="y"===e,r=!i&&n?-1:1;return{scroll:i?"y":"x",cross:i?"x":"y",startEdge:i?"top":n?"right":"left",endEdge:i?"bottom":n?"left":"right",measureSize:function(e){const{height:t,width:n}=e;return i?t:n},direction:function(e){return e*r}}}(M,j),$=J.measureSize(U),Q=function(e){return{measure:function(t){return e*(t/100)}}}($),X=function(e,n){const i={start:function(){return 0},center:function(e){return r(e)/2},end:r};function r(e){return n-e}return{measure:function(r,o){return t(e)?i[e](r):e(n,r,o)}}}(A,$),Y=!D&&!!V,Z=D||!!V,{slideSizes:ee,slideSizesWithGaps:te,startGap:ne,endGap:ie}=function(e,t,n,i,o,s){const{measureSize:a,startEdge:l,endEdge:d}=e,p=n[0]&&o,f=function(){if(!p)return 0;const e=n[0];return r(t[l]-e[l])}(),m=function(){if(!p)return 0;const e=s.getComputedStyle(c(i));return parseFloat(e.getPropertyValue(`margin-${d}`))}(),g=n.map(a),h=n.map(((e,t,n)=>{const i=!t,r=u(n,t);return i?g[t]+f:r?g[t]+m:n[t+1][l]-e[l]})).map(r);return{slideSizes:g,slideSizesWithGaps:h,startGap:f,endGap:m}}(J,U,K,f,Z,T),re=function(t,n,i,o,s,u,d,p,f){const{startEdge:m,endEdge:g,direction:h}=t,b=e(i);return{groupSlides:function(e){return b?function(e,t){return a(e).filter((e=>e%t==0)).map((n=>e.slice(n,n+t)))}(e,i):function(e){return e.length?a(e).reduce(((t,i,a)=>{const b=c(t)||0,y=0===b,v=i===l(e),w=s[m]-u[b][m],x=s[m]-u[i][g],S=!o&&y?h(d):0,k=r(x-(!o&&v?h(p):0)-(w+S));return a&&k>n+f&&t.push(i),v&&t.push(e.length),t}),[]).map(((t,n,i)=>{const r=Math.max(i[n-1]||0);return e.slice(r,t)})):[]}(e)}}}(J,$,F,D,U,K,ne,ie,2),{snaps:oe,snapsAligned:se}=function(e,t,n,i,o){const{startEdge:s,endEdge:a}=e,{groupSlides:l}=o,u=l(i).map((e=>c(e)[a]-e[0][s])).map(r).map(t.measure),d=i.map((e=>n[s]-e[s])).map((e=>-r(e))),p=l(d).map((e=>e[0])).map(((e,t)=>e+u[t]));return{snaps:d,snapsAligned:p}}(J,X,U,K,re),ae=-c(oe)+c(te),{snapsContained:ce,scrollContainLimit:le}=function(e,t,n,i,r){const o=h(-t+e,0),a=n.map(((e,t)=>{const{min:i,max:r}=o,s=o.constrain(e),a=!t,c=u(n,t);return a?r:c||d(i,s)?i:d(r,s)?r:s})).map((e=>parseFloat(e.toFixed(3)))),l=function(){const e=a[0],t=c(a);return h(a.lastIndexOf(e),a.indexOf(t)+1)}();function d(e,t){return s(e,t)<1}return{snapsContained:function(){if(t<=e+2)return[o.max];if("keepSnaps"===i)return a;const{min:n,max:r}=l;return a.slice(n,r)}(),scrollContainLimit:l}}($,ae,se,V),ue=Y?ce:se,{limit:de}=function(e,t,n){const i=t[0];return{limit:h(n?i-e:c(t),i)}}(ae,ue,D),pe=b(l(ue),C,D),fe=pe.clone(),me=a(f),ge=function(e,t,n,i){const o=g(),s=1e3/60;let a=null,c=0,l=0;function u(e){if(!l)return;a||(a=e);const o=e-a;for(a=e,c+=o;c>=s;)n(),c-=s;const d=r(c/s);i(d),l&&t.requestAnimationFrame(u)}function d(){t.cancelAnimationFrame(l),a=null,c=0,l=0}return{init:function(){o.add(e,"visibilitychange",(()=>{e.hidden&&(a=null,c=0)}))},destroy:function(){d(),o.clear()},start:function(){l||(l=t.requestAnimationFrame(u))},stop:d,update:n,render:i}}(m,T,(()=>(({dragHandler:e,scrollBody:t,scrollBounds:n,options:{loop:i}})=>{i||n.constrain(e.pointerDown()),t.seek()})(Ie)),(e=>(({scrollBody:e,translate:t,location:n,offsetLocation:i,scrollLooper:r,slideLooper:o,dragHandler:s,animation:a,eventHandler:c,options:{loop:l}},u)=>{const d=e.velocity(),p=e.settled();p&&!s.pointerDown()&&(a.stop(),c.emit("settle")),p||c.emit("scroll"),i.set(n.get()-d+d*u),l&&(r.loop(e.direction()),o.loop()),t.to(i.get())})(Ie,e))),he=ue[pe.get()],be=k(he),ye=k(he),ve=k(he),we=function(e,t,n,i,s){let a=0,c=0,l=i,u=.68,d=e.get(),p=0;function f(e){return l=e,g}function m(e){return u=e,g}const g={direction:function(){return c},duration:function(){return l},velocity:function(){return a},seek:function(){const t=n.get()-e.get();let i=0;return l?(a+=t/l,a*=u,d+=a,e.add(a),i=d-p):(a=0,e.set(n),i=t),c=o(i),p=d,g},settled:function(){return r(n.get()-t.get())<.001},useBaseFriction:function(){return m(.68)},useBaseDuration:function(){return f(i)},useFriction:m,useDuration:f};return g}(be,ye,ve,H),xe=function(e,t,n,i,s){const{reachedAny:a,removeOffset:l,constrain:u}=i;function d(e){return e.concat().sort(((e,t)=>r(e)-r(t)))[0]}function p(t,i){const r=[t,t+n,t-n];if(!e)return r[0];if(!i)return d(r);const s=r.filter((e=>o(e)===i));return s.length?d(s):c(r)-n}return{byDistance:function(n,i){const o=s.get()+n,{index:c,distance:d}=function(n){const i=e?l(n):u(n),o=t.map(((e,t)=>({diff:p(e-i,0),index:t}))).sort(((e,t)=>r(e.diff)-r(t.diff))),{index:s}=o[0];return{index:s,distance:i}}(o),f=!e&&a(o);return!i||f?{index:c,distance:n}:{index:c,distance:n+p(t[c]-d,0)}},byIndex:function(e,n){return{index:e,distance:p(t[e]-s.get(),n)}},shortcut:p}}(D,ue,ae,de,ve),Se=function(e,t,n,i,r,o,s){function a(r){const a=r.distance,c=r.index!==t.get();o.add(a),a&&(i.duration()?e.start():(e.update(),e.render(1),e.update())),c&&(n.set(t.get()),t.set(r.index),s.emit("select"))}return{distance:function(e,t){a(r.byDistance(e,t))},index:function(e,n){const i=t.clone().set(e);a(r.byIndex(i.get(),n))}}}(ge,pe,fe,we,xe,ve,L),ke=function(e){const{max:t,length:n}=e;return{get:function(e){return n?(e-t)/-n:0}}}(de),_e=g(),Pe=function(e,t,n,i){const r={};let o,s=null,a=null,c=!1;return{init:function(){o=new IntersectionObserver((e=>{c||(e.forEach((e=>{const n=t.indexOf(e.target);r[n]=e})),s=null,a=null,n.emit("slidesInView"))}),{root:e.parentElement,threshold:i}),t.forEach((e=>o.observe(e)))},destroy:function(){o&&o.disconnect(),c=!0},get:function(e=!0){if(e&&s)return s;if(!e&&a)return a;const t=function(e){return p(r).reduce(((t,n)=>{const i=parseInt(n),{isIntersecting:o}=r[i];return(e&&o||!e&&!o)&&t.push(i),t}),[])}(e);return e&&(s=t),e||(a=t),t}}}(i,f,L,q),{slideRegistry:Ee}=function(e,t,n,i,r,o){const{groupSlides:s}=r,{min:a,max:p}=i;return{slideRegistry:function(){const i=s(o),r=!e||"keepSnaps"===t;return 1===n.length?[o]:r?i:i.slice(a,p).map(((e,t,n)=>{const i=!t,r=u(n,t);return i?d(c(n[0])+1):r?d(l(o)-c(n)[0]+1,c(n)[0]):e}))}()}}(Y,V,ue,le,re,me),Te=function(t,n,i,r,o,s){let a=0;function c(e){"Tab"===e.code&&(a=(new Date).getTime())}function l(c){s.add(c,"focus",(()=>{if((new Date).getTime()-a>10)return;t.scrollLeft=0;const s=n.indexOf(c),l=i.findIndex((e=>e.includes(s)));e(l)&&(o.useDuration(0),r.index(l,0))}),{passive:!0,capture:!0})}return{init:function(){s.add(document,"keydown",c,!1),n.forEach(l)}}}(n,f,Ee,Se,we,_e),Ie={ownerDocument:m,ownerWindow:T,eventHandler:L,containerRect:U,slideRects:K,animation:ge,axis:J,dragHandler:y(J,n,m,T,ve,v(J,T),be,ge,Se,we,xe,pe,L,Q,O,N,z,.68,B),eventStore:_e,percentOfView:Q,index:pe,indexPrevious:fe,limit:de,location:be,offsetLocation:ye,options:I,resizeHandler:w(i,L,T,f,J,W,G),scrollBody:we,scrollBounds:x(de,ye,ve,we,Q),scrollLooper:S(ae,de,ye,[be,ye,ve]),scrollProgress:ke,scrollSnapList:ue.map(ke.get),scrollSnaps:ue,scrollTarget:xe,scrollTo:Se,slideLooper:P(J,$,ae,ee,te,oe,ue,ye,f),slideFocus:Te,slidesHandler:E(i,L,R),slidesInView:Pe,slideIndexes:me,slideRegistry:Ee,slidesToScroll:re,target:ve,translate:_(J,i)};return Ie}const I={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function L(e){function t(e,t){return f(e,t||{})}return{mergeOptions:t,optionsAtMedia:function(n){const i=n.breakpoints||{},r=p(i).filter((t=>e.matchMedia(t).matches)).map((e=>i[e])).reduce(((e,n)=>t(e,n)),{});return t(n,r)},optionsMediaQueries:function(t){return t.map((e=>p(e.breakpoints||{}))).reduce(((e,t)=>e.concat(t)),[]).map(e.matchMedia)}}}function A(e,n,i){const r=e.ownerDocument,o=r.defaultView,s=L(o),a=function(e){let t=[];return{init:function(n,i){return t=i.filter((({options:t})=>!1!==e.optionsAtMedia(t).active)),t.forEach((t=>t.init(n,e))),i.reduce(((e,t)=>Object.assign(e,{[t.name]:t})),{})},destroy:function(){t=t.filter((e=>e.destroy()))}}}(s),c=g(),l=function(){const e={};let t;function n(t){return e[t]||[]}const i={init:function(e){t=e},emit:function(e){return n(e).forEach((n=>n(t,e))),i},off:function(t,r){return e[t]=n(t).filter((e=>e!==r)),i},on:function(t,r){return e[t]=n(t).concat([r]),i}};return i}(),{mergeOptions:u,optionsAtMedia:d,optionsMediaQueries:p}=s,{on:f,off:m,emit:h}=l,b=j;let y,v,w,x,S=!1,k=u(I,A.globalOptions),_=u(k),P=[];function E(t){const n=T(e,w,x,r,o,t,l);return t.loop&&!n.slideLooper.canLoop()?E(Object.assign({},t,{loop:!1})):n}function M(n,i){S||(k=u(k,n),_=d(k),P=i||P,function(){const{container:n,slides:i}=_,r=t(n)?e.querySelector(n):n;w=r||e.children[0];const o=t(i)?w.querySelectorAll(i):i;x=[].slice.call(o||w.children)}(),y=E(_),p([k,...P.map((({options:e})=>e))]).forEach((e=>c.add(e,"change",j))),_.active&&(y.translate.to(y.location.get()),y.animation.init(),y.slidesInView.init(),y.slideFocus.init(),y.eventHandler.init(O),y.resizeHandler.init(O),y.slidesHandler.init(O),y.options.loop&&y.slideLooper.loop(),w.offsetParent&&x.length&&y.dragHandler.init(O),v=a.init(O,P)))}function j(e,t){const n=H();C(),M(u({startIndex:n},e),t),l.emit("reInit")}function C(){y.dragHandler.destroy(),y.eventStore.clear(),y.translate.clear(),y.slideLooper.clear(),y.resizeHandler.destroy(),y.slidesHandler.destroy(),y.slidesInView.destroy(),y.animation.destroy(),a.destroy(),c.clear()}function D(e,t,n){_.active&&!S&&(y.scrollBody.useBaseFriction().useDuration(!0===t?0:_.duration),y.scrollTo.index(e,n||0))}function H(){return y.index.get()}const O={canScrollNext:function(){return y.index.add(1).get()!==H()},canScrollPrev:function(){return y.index.add(-1).get()!==H()},containerNode:function(){return w},internalEngine:function(){return y},destroy:function(){S||(S=!0,c.clear(),C(),l.emit("destroy"))},off:m,on:f,emit:h,plugins:function(){return v},previousScrollSnap:function(){return y.indexPrevious.get()},reInit:b,rootNode:function(){return e},scrollNext:function(e){D(y.index.add(1).get(),e,-1)},scrollPrev:function(e){D(y.index.add(-1).get(),e,1)},scrollProgress:function(){return y.scrollProgress.get(y.location.get())},scrollSnapList:function(){return y.scrollSnapList},scrollTo:D,selectedScrollSnap:H,slideNodes:function(){return x},slidesInView:function(){return y.slidesInView.get()},slidesNotInView:function(){return y.slidesInView.get(!1)}};return M(n,i),setTimeout((()=>l.emit("init")),0),O}A.globalOptions=void 0;class M{root;initPromise;constructor(e){this.initPromise=this.init(e)}async init(e){const t=await(await fetch("./src/components/"+e)).text(),n=document.createElement("div");n.innerHTML=t,this.root=n.querySelector("div")}}class j extends M{constructor(e){super("project-card.html"),this.initPromise.then((()=>{this.root.querySelector(".project-card__title").innerHTML=e.title,this.root.querySelector(".project-card__subtitle").innerHTML=e.subtitle;const t=this.root.querySelector(".project-card__carousel-slides-container");e.slides.map((e=>{const n=document.createElement(e.tag);switch(n.className="flex grow-0 shrink-0 basis-full min-w-0 object-scale-down",e.tag){case"img":n.src=e.src;break;case"video":{n.autoplay=!0,n.loop=!0,n.muted=!0;const t=document.createElement("source");t.src=e.src,t.type="video/"+e.src.split(".").at(-1),n.appendChild(t);break}}t.appendChild(n)})),this.root.querySelector(".project-card__main-desc").innerHTML=e.paragraphs.map((e=>"<p>"+e+"</p>")).join("<br>"),this.root.querySelector(".project-card__details__github-link").href=e.githubLink;const n=this.root.querySelector(".project-card__details__skills-container");e.skills.map((e=>{const t=document.createElement("div");t.className="border h-fit py-1 px-3 border-neutral-400 rounded-3xl";const i=document.createElement("span");i.className="max-w-full",i.innerHTML=e,t.appendChild(i),n.appendChild(t)}));const i=this.root.querySelector(".project-card__carousel-root");setTimeout((()=>{const e=A(i,{loop:!1,duration:25});this.root.querySelector(".project-card__carousel-prev-btn").addEventListener("click",(()=>{e.scrollPrev()})),this.root.querySelector(".project-card__carousel-next-btn").addEventListener("click",(()=>{e.scrollNext()})),e.on("select",this.setCarouselPageNum),e.on("select",this.setVideoPlayState),this.setCarouselPageNum(e)}),200);const r=new ResizeObserver((()=>{const e=this.root.querySelector(".project-card__details-container"),t=e.computedStyleMap().get("column-gap").value,n=this.root.querySelector(".project-card__details__skills-label").offsetWidth,i=e.offsetWidth-n-t,r=this.root.querySelector(".project-card__details__skills-container");Array.from(r.children).map((e=>{const t=e.firstElementChild;t.style.textWrap="nowrap";const n=e.computedStyleMap();e.offsetWidth<=i?e.style.removeProperty("width"):(t.style.removeProperty("text-wrap"),e.style.width=t.offsetWidth+n.get("padding-left").value+n.get("padding-right").value+2*n.get("border-left-width").value+"px")}))}).bind(this));r.observe(i)}))}setCarouselPageNum(e){e.rootNode().querySelector(".project-card__carousel-page-display").innerText=e.selectedScrollSnap()+1+"/"+e.slideNodes().length}setVideoPlayState(e){const t=e.selectedScrollSnap();e.slideNodes().map(((e,n,i)=>{e instanceof HTMLVideoElement&&(t===n?e.play():e.pause())}))}}const C=document.getElementById("experience-container");[{title:"The Carbon-Conscious Traveller - Internship",subtitle:"Dec 2023 - Jan 2024",slides:[{tag:"img",src:"./images/the-carbon-conscious-traveller/Screenshot_1.png"},{tag:"img",src:"./images/the-carbon-conscious-traveller/Screenshot_2.png"},{tag:"img",src:"./images/the-carbon-conscious-traveller/Screenshot_3.png"},{tag:"img",src:"./images/the-carbon-conscious-traveller/Screenshot_4.png"},{tag:"img",src:"./images/the-carbon-conscious-traveller/Screenshot_5.png"},{tag:"img",src:"./images/the-carbon-conscious-traveller/Screenshot_6.png"},{tag:"img",src:"./images/the-carbon-conscious-traveller/Screenshot_7.png"},{tag:"img",src:"./images/the-carbon-conscious-traveller/Screenshot_8.png"}],paragraphs:["<b>Summer Internship Project offered by Macquarie University.</b> This project involved developing an <b>Android application that calculates and displays carbon emissions with different transport modes.</b> It was developed using <span class='text-pink-500'>Kotlin</span> and <span class='text-pink-500'>Android Studio</span>, utilising various <span class='text-emerald-600'>APIs</span> provided by <span class='text-pink-500'>Google Maps Platform</span>.","My responsibilities in this project were: presenting progress in the weekly meeting, background research for other similar projects/apps and developing, testing and streamlining the app.","Contributing to this project has made me gain extensive knowledge about <span class='text-emerald-600'>Android Fragments</span>, <span class='text-emerald-600'>Kotlin Coroutines</span>, and further broadened my understanding of Android application development."],githubLink:"https://github.com/kaismic/The-Carbon-Conscious-Traveller/",skills:["Kotlin","Android","Android Studio","Google Maps API"]}].map((e=>{const t=new j(e);t.initPromise.then((()=>{C.appendChild(t.root)}))}));const D=document.getElementById("projects-container");[{title:"Portfolio Website",subtitle:"Apr 2024 - Work in Progress (Solo Project)",slides:[{tag:"img",src:"./images/my-portfolio/Screenshot_1.jpeg"},{tag:"img",src:"./images/my-portfolio/Screenshot_2.jpeg"},{tag:"img",src:"./images/my-portfolio/Screenshot_3.jpeg"}],paragraphs:["<b>Portfolio website</b> (which you are currently looking at) for presenting my software development projects and works.","<span class='text-emerald-600'>Responsive Web Design</span> is applied throughout the whole website via <span class='text-pink-500'>Tailwind CSS</span>, making the website respond to different screen sizes to change its layout accordingly. Furthermore, this was the first time I have utilised a module bundler like <span class='text-pink-500'>Webpack</span>, and it was quite interesting how it analyses module dependencies in different JavaScript files and bundles them into a single JavaScript file."],githubLink:"https://github.com/kaismic/My-Portfolio/",skills:["HTML","CSS","JavaScript","TypeScript","Tailwind CSS","WebPack","npm"]},{title:"Hitomi Scroll Viewer",subtitle:"Jul 2022 - Mar 2024 (Solo Project)",slides:[{tag:"img",src:"./images/hitomi-scroll-viewer/preview_0.png"},{tag:"img",src:"./images/hitomi-scroll-viewer/preview_1.png"},{tag:"img",src:"./images/hitomi-scroll-viewer/preview_2.png"},{tag:"img",src:"./images/hitomi-scroll-viewer/preview_3.png"}],paragraphs:["<b>A manga viewer Windows application with additional features such as auto scrolling, searching by tags and downloading.</b> This application was developed because the original website lacked functionalities I required and it was inconvenient to use the already existing features in the website. Developed using <span class='text-pink-500'>C#</span>, <span class='text-pink-500'>.NET</span> and <span class='text-pink-500'>WinUI 3</span> Platform","One of the things that I have learnt about in <i>Systems Programming</i> unit was <span class='text-emerald-600'>Mutex</span>. This concept came in very handy because it enabled the app to handle page switching without causing any <span class='text-emerald-600'>race conditions</span>. Moreover, two concepts which I have learnt from <i>Object-Oriented Programming Practices</i> were <span class='text-emerald-600'>Concurrency</span> and <span class='text-emerald-600'>Design Pattern</span>, which were incredibly helpful when developing this app. The former was used when implementing the image downloading function with a bit of TCP/IP knowledge I have gained from <i>Data Communications</i>. The latter was utilised for modularising different components of the app, which helped to keep the project code managable and easy to refactor."],githubLink:"https://github.com/kaismic/Hitomi-Scroll-Viewer",skills:["C#",".NET","WinUI 3","Windows"]},{title:"Custom Layout Keyboard for Android",subtitle:"Apr 2022 - Dec 2023 (Solo Project)",slides:[{tag:"video",src:"./images/custom-layout-keyboard/screen_record_0.mp4"},{tag:"img",src:"./images/custom-layout-keyboard/screenshot_0.png"},{tag:"img",src:"./images/custom-layout-keyboard/screenshot_1.png"},{tag:"img",src:"./images/custom-layout-keyboard/screenshot_2.png"}],paragraphs:["<b>An Android application which allows customising keyboard layouts</b> developed using <span class='text-pink-500'>Kotlin</span> and <span class='text-pink-500'>Android Studio</span>. This application was developed because I could not find a decent keyboard application which also supports keyboard layout customisation.","One of the valuable experiences that I have gained while working on this project was the experience of using features of <span class='text-emerald-600'>Object Oriented Programming</span>. As an example, during development, I realised that I was writing overlapping codes repeatedly, and this was when the concept of <span class='text-emerald-600'>inheritance</span> came to my mind. Using inheritance effectively reduced the amount of code I had to write and improved reusability of the code. Furthermore, I have also gained hands-on experience on Kotlin and android application lifecycle while working on this project."],githubLink:"https://github.com/kaismic/My-Portfolio/",skills:["Kotlin","Android","Android Studio"]}].map((e=>{const t=new j(e);t.initPromise.then((()=>{D.appendChild(t.root)}))}))})();