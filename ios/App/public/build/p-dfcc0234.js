const e={allRenderFn:!1,cmpDidLoad:!0,cmpDidUnload:!0,cmpDidUpdate:!0,cmpDidRender:!1,cmpWillLoad:!0,cmpWillUpdate:!0,cmpWillRender:!0,connectedCallback:!0,disconnectedCallback:!0,element:!1,event:!0,hasRenderFn:!0,lifecycle:!0,hostListener:!0,hostListenerTargetWindow:!0,hostListenerTargetDocument:!0,hostListenerTargetBody:!0,hostListenerTargetParent:!0,hostListenerTarget:!0,member:!0,method:!0,mode:!0,noVdomRender:!1,observeAttribute:!0,prop:!0,propBoolean:!0,propNumber:!0,propString:!0,propMutable:!0,reflect:!0,scoped:!0,shadowDom:!0,slot:!0,slotRelocation:!0,state:!0,style:!0,svg:!0,updatable:!0,vdomAttribute:!0,vdomClass:!0,vdomFunctional:!0,vdomKey:!0,vdomListener:!0,vdomRef:!0,vdomRender:!0,vdomStyle:!0,vdomText:!0,watchCallback:!0,taskQueue:!0,lazyLoad:!0,hydrateServerSide:!1,cssVarShim:!0,hydrateClientSide:!0,isDebug:!1,isDev:!1,lifecycleDOMEvents:!1,profile:!1,hotModuleReplacement:!1,constructableCSS:!0,initializeNextTick:!0,cssAnnotations:!0},t=window,n=document,o={t:0,o:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,o)=>e.addEventListener(t,n,o),rel:(e,t,n,o)=>e.removeEventListener(t,n,o)},s=!!n.documentElement.attachShadow,i=(()=>{let e=!1;try{n.addEventListener("e",null,Object.defineProperty({},"passive",{get(){e=!0}}))}catch(e){}return e})(),l=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),r=new WeakMap,c=e=>r.get(e),a=(e,t)=>r.set(t.s=e,t),d=(e,t)=>t in e,f=e=>console.error(e),p=new Map,u=new Map,m=t.__stencil_cssshim;let $=0,h=!1;const b=[],y=[],g=[],w=(e,t)=>n=>{e.push(n),h||(h=!0,t&&4&o.t?R(k):o.raf(k))},v=(e,t)=>{let n=0,o=0;for(;n<e.length&&(o=performance.now())<t;)try{e[n++](o)}catch(e){f(e)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},k=()=>{$++,(e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){f(e)}e.length=0})(b);const e=2==(6&o.t)?performance.now()+10*Math.ceil($*(1/22)):1/0;v(y,e),v(g,e),y.length>0&&(g.push(...y),y.length=0),(h=b.length+y.length+g.length>0)?o.raf(k):$=0},R=e=>Promise.resolve().then(e),j=w(b,!1),S=w(y,!0),_={},O=e=>null!=e,L=e=>e.toLowerCase(),M=e=>["object","function"].includes(typeof e),C=()=>t.CSS&&t.CSS.supports&&t.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_app("./p-3ea8955c.js"),U=async()=>{const e=new RegExp("/app(.esm)?.js$"),o=Array.from(n.querySelectorAll("script")).find(t=>e.test(t.src)||"app"===t.getAttribute("data-namespace")),s=o["data-opts"];{const e=new URL(".",new URL(o.getAttribute("data-resources-url")||o.src,t.location.href));return x(e.href),window.customElements||await __sc_import_app("./p-860d8016.js"),Object.assign({},s,{resourcesUrl:e.href})}},x=e=>{const o=(()=>`__sc_import_${"app".replace(/\s|-/g,"_")}`)();try{t[o]=new Function("w",`return import(w);//${Math.random()}`)}catch(s){const i=new Map;t[o]=s=>{const l=new URL(s,e).href;let r=i.get(l);if(!r){const e=n.createElement("script");e.type="module",e.src=URL.createObjectURL(new Blob([`import * as m from '${l}'; window.${o}.m = m;`],{type:"application/javascript"})),r=new Promise(n=>{e.onload=()=>{n(t[o].m),e.remove()}}),i.set(l,r),n.head.appendChild(e)}return r}}},N="http://www.w3.org/1999/xlink",T=new WeakMap,D=(e,t,n)=>{let o=u.get(e);l&&n?(o=o||new CSSStyleSheet).replace(t):o=t,u.set(e,o)},P=(e,t,o,s)=>{let i=W(t.i,o),l=u.get(i);if(e=11===e.nodeType?e:n,l||(i=W(t.i),l=u.get(i)),l)if("string"==typeof l){let o,r=T.get(e=e.head||e);if(r||T.set(e,r=new Set),!r.has(i)){if(e.host&&(o=e.firstElementChild)&&"STYLE"===o.tagName)o.innerHTML=l;else{if(m){const e=(o=m.createHostStyle(s,i,l,!!(10&t.t)))["s-sc"];e&&(i=e,r=null)}else(o=n.createElement("style")).innerHTML=l;e.insertBefore(o,e.querySelector("link"))}r&&r.add(i)}}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return i},W=(e,t)=>"sc-"+(t?e+"-"+t:e),I=(e,t,...n)=>{let o,s,i=null,l=!1,r=!1,c=[];const a=t=>{for(let n=0;n<t.length;n++)i=t[n],Array.isArray(i)?a(i):null!=i&&"boolean"!=typeof i&&((l="function"!=typeof e&&!M(i))&&(i=String(i)),l&&r?c[c.length-1].l+=i:c.push(l?{t:0,l:i}:i),r=l)};if(a(n),t){o=t.key||void 0,s=t.name;{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(t,c,F);const d={t:0,p:e,u:c.length>0?c:null,$:void 0,h:t};return d.g=o,d.v=s,d},E={},F={forEach:(e,t)=>e.map(A).forEach(t),map:(e,t)=>e.map(A).map(t).map(B)},A=e=>({vattrs:e.h,vchildren:e.u,vkey:e.g,vname:e.v,vtag:e.p,vtext:e.l}),B=e=>({t:0,h:e.vattrs,u:e.vchildren,g:e.vkey,v:e.vname,p:e.vtag,l:e.vtext}),V=(e,t,n,s,i,l)=>{if(n!==s)if("class"===t){const t=e.classList;z(n).forEach(e=>t.remove(e)),z(s).forEach(e=>t.add(e))}else if("style"===t){for(const t in n)s&&null!=s[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in s)n&&s[t]===n[t]||(t.includes("-")?e.style.setProperty(t,s[t]):e.style[t]=s[t])}else if("key"===t);else if("ref"===t)s&&s(e);else if(t.startsWith("on")&&!d(e,t))t=d(e,L(t))?L(t.substring(2)):L(t[2])+t.substring(3),n&&o.rel(e,t,n,!1),s&&o.ael(e,t,s,!1);else{const n=d(e,t),o=M(s),r=e.tagName.includes("-");if((n||o&&null!==s)&&!i)try{r?e[t]=s:e[t]!==s&&(e[t]=s||"")}catch(e){}const c=!(!i||t===(t=t.replace(/^xlink\:?/,"")));null==s||!1===s?c?e.removeAttributeNS(N,L(t)):e.removeAttribute(t):(!n||4&l||i)&&!o&&(s=!0===s?"":s.toString(),c?e.setAttributeNS(N,L(t),s):e.setAttribute(t,s))}},z=e=>e?e.split(/\s+/).filter(e=>e):[],H=(e,t,n,o)=>{const s=11===t.$.nodeType&&t.$.host?t.$.host:t.$,i=e&&e.h||_,l=t.h||_;for(o in i)o in l||V(s,o,i[o],void 0,n,t.t);for(o in l)V(s,o,i[o],l[o],n,t.t)};let J,q,K,Q=!1,Y=!1,G=!1,X=!1;const Z=(e,t,o,s)=>{let i,l,r,c=t.u[o],a=0;if(Q||(G=!0,"slot"===c.p&&(J&&s.classList.add(J+"-s"),c.t|=c.u?2:1)),O(c.l))c.$=n.createTextNode(c.l);else if(1&c.t)c.$=n.createTextNode("");else{if(i=c.$=X||"svg"===c.p?n.createElementNS("http://www.w3.org/2000/svg",c.p):n.createElement(2&c.t?"slot-fb":c.p),H(null,c,X="svg"===c.p||"foreignObject"!==c.p&&X),O(J)&&i["s-si"]!==J&&i.classList.add(i["s-si"]=J),c.u)for(a=0;a<c.u.length;++a)(l=Z(e,c,a,i))&&i.appendChild(l);"svg"===c.p?X=!1:"foreignObject"===c.$.tagName&&(X=!0)}return c.$["s-hn"]=K,3&c.t&&(c.$["s-sr"]=!0,c.$["s-cr"]=q,c.$["s-sn"]=c.v||"",(r=e&&e.u&&e.u[o])&&r.p===c.p&&e.$&&ee(e.$,!1)),c.$},ee=(e,t)=>{o.t|=1;const n=e.childNodes;for(let e=n.length-1;e>=0;e--){const o=n[e];o["s-hn"]!==K&&o["s-ol"]&&(ie(o).insertBefore(o,se(o)),o["s-ol"].remove(),o["s-ol"]=void 0,G=!0),t&&ee(o,t)}o.t&=-2},te=(e,t,n,o,s,i)=>{let l,r=e["s-cr"]&&e["s-cr"].parentNode||e;for(r.shadowRoot&&L(r.tagName)===K&&(r=r.shadowRoot);s<=i;++s)o[s]&&(l=Z(null,n,s,e))&&(o[s].$=l,r.insertBefore(l,se(t)))},ne=(e,t,n,o)=>{for(;t<=n;++t)O(e[t])&&(o=e[t].$,de(e[t],!0),Y=!0,o["s-ol"]?o["s-ol"].remove():ee(o,!0),o.remove())},oe=(e,t)=>e.p===t.p&&("slot"===e.p?e.v===t.v:e.g===t.g),se=e=>e&&e["s-ol"]||e,ie=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,le=(e,t)=>{const n=t.$=e.$,o=e.u,s=t.u;let i;X=n&&O(n.parentNode)&&void 0!==n.ownerSVGElement,X="svg"===t.p||"foreignObject"!==t.p&&X,O(t.l)?(i=n["s-cr"])?i.parentNode.textContent=t.l:e.l!==t.l&&(n.textContent=t.l):("slot"===t.p||H(e,t,X),O(o)&&O(s)?((e,t,n,o)=>{let s,i,l=0,r=0,c=0,a=0,d=t.length-1,f=t[0],p=t[d],u=o.length-1,m=o[0],$=o[u];for(;l<=d&&r<=u;)if(null==f)f=t[++l];else if(null==p)p=t[--d];else if(null==m)m=o[++r];else if(null==$)$=o[--u];else if(oe(f,m))le(f,m),f=t[++l],m=o[++r];else if(oe(p,$))le(p,$),p=t[--d],$=o[--u];else if(oe(f,$))"slot"!==f.p&&"slot"!==$.p||ee(f.$.parentNode,!1),le(f,$),e.insertBefore(f.$,p.$.nextSibling),f=t[++l],$=o[--u];else if(oe(p,m))"slot"!==f.p&&"slot"!==$.p||ee(p.$.parentNode,!1),le(p,m),e.insertBefore(p.$,f.$),p=t[--d],m=o[++r];else{for(c=-1,a=l;a<=d;++a)if(t[a]&&O(t[a].g)&&t[a].g===m.g){c=a;break}c>=0?((i=t[c]).p!==m.p?s=Z(t&&t[r],n,c,e):(le(i,m),t[c]=void 0,s=i.$),m=o[++r]):(s=Z(t&&t[r],n,r,e),m=o[++r]),s&&ie(f.$).insertBefore(s,se(f.$))}l>d?te(e,null==o[u+1]?null:o[u+1].$,n,o,r,u):r>u&&ne(t,l,d)})(n,o,t,s):O(s)?(O(e.l)&&(n.textContent=""),te(n,null,t,s,0,s.length-1)):O(o)&&ne(o,0,o.length-1)),X&&"svg"===t.p&&(X=!1)},re=(e,t,n,o,s,i,l,r)=>{for(o=0,s=(n=e.childNodes).length;o<s;o++)if(1===(t=n[o]).nodeType){if(t["s-sr"])for(l=t["s-sn"],t.hidden=!1,i=0;i<s;i++)if(n[i]["s-hn"]!==t["s-hn"])if(r=n[i].nodeType,""!==l){if(1===r&&l===n[i].getAttribute("slot")){t.hidden=!0;break}}else if(1===r||3===r&&""!==n[i].textContent.trim()){t.hidden=!0;break}re(t)}},ce=[],ae=e=>{let t,n,o,s,i=e.childNodes,l=i.length,r=0,c=0,a=0;for(l=i.length;r<l;r++){if((t=i[r])["s-sr"]&&(n=t["s-cr"]))for(s=t["s-sn"],c=(o=n.parentNode.childNodes).length-1;c>=0;c--)(n=o[c])["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||((3===(a=n.nodeType)||8===a)&&""===s||1===a&&null===n.getAttribute("slot")&&""===s||1===a&&n.getAttribute("slot")===s)&&(ce.some(e=>e.k===n)||(Y=!0,n["s-sn"]=s,ce.push({R:t,k:n})));1===t.nodeType&&ae(t)}},de=(e,t)=>{e&&(e.h&&e.h.ref&&e.h.ref(t?null:e.$),e.u&&e.u.forEach(e=>{de(e,t)}))},fe=(e,t,n,o)=>{t.t|=16;const s=t.s;let i;o?(t.t|=256,t.j&&(t.j.forEach(([e,t])=>$e(s,e,t)),t.j=null),i=$e(s,"componentWillLoad")):i=$e(s,"componentWillUpdate"),i=he(i,()=>$e(s,"componentWillRender"));const l=()=>pe(e,t,n,s,o);return he(i,()=>S(l))},pe=(e,t,i,l,r)=>{t.t&=-17,e["s-lr"]=!1,r&&((e,t,n)=>{const o=P(s&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t,n,e);10&t.t&&(e["s-sc"]=o,e.classList.add(o+"-h"),2&t.t&&e.classList.add(o+"-s"))})(e,i,t.S),t.t|=4;try{((e,t,i,l)=>{K=L(e.tagName);const r=t._||{t:0},c=(e=>e&&e.p===E)(l)?l:I(null,null,l);if(i.O&&(c.h=c.h||{},i.O.forEach(([t,n])=>c.h[n]=e[t])),c.p=null,c.t|=4,t._=c,c.$=r.$=e.shadowRoot||e,J=e["s-sc"],q=e["s-cr"],Q=s&&0!=(1&i.t),G=Y=!1,le(r,c),G){ae(c.$);for(let e=0;e<ce.length;e++){const t=ce[e];if(!t.k["s-ol"]){const e=n.createTextNode("");e["s-nr"]=t.k,t.k.parentNode.insertBefore(t.k["s-ol"]=e,t.k)}}o.t|=1;for(let e=0;e<ce.length;e++){const t=ce[e],n=t.R.parentNode;let o=t.R.nextSibling,s=t.k["s-ol"];for(;s=s.previousSibling;){let e=s["s-nr"];if(e&&e["s-sn"]===t.k["s-sn"]&&n===e.parentNode&&(!(e=e.nextSibling)||!e["s-nr"])){o=e;break}}(!o&&n!==t.k.parentNode||t.k.nextSibling!==o)&&t.k!==o&&n.insertBefore(t.k,o)}o.t&=-2}Y&&re(c.$),ce.length=0})(e,t,i,l.render&&l.render())}catch(e){f(e)}t.t&=-5,m&&m.updateHost(e),e["s-lr"]=!0,t.t|=2,e["s-rc"].length>0&&(e["s-rc"].forEach(e=>e()),e["s-rc"].length=0),ue(e,t)},ue=(e,t,n)=>{if(!e["s-al"]){const o=t.s,s=t.L;64&t.t?$e(o,"componentDidUpdate"):(t.t|=64,e.classList.add("hydrated"),$e(o,"componentDidLoad"),t.M(e),s||me()),s&&((n=s["s-al"])&&(n.delete(e),0===n.size&&(s["s-al"]=void 0,s["s-init"]())),t.L=void 0)}},me=()=>{n.documentElement.classList.add("hydrated"),o.t|=2},$e=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){f(e)}},he=(e,t)=>e&&e.then?e.then(t):t(),be=(e,t,n)=>{if(t.C){e.watchers&&(t.U=e.watchers);const s=Object.entries(t.C),i=e.prototype;if(s.forEach(([e,[o]])=>{31&o||2&n&&32&o?Object.defineProperty(i,e,{get(){return((e,t)=>c(e).N.get(t))(this,e)},set(n){((e,t,n,o)=>{const s=c(this),i=s.T,l=s.N.get(t),r=s.t;if(!((n=((e,t)=>null==e||M(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?String(e):e)(n,o.C[t][0]))===l||8&r&&void 0!==l)&&(s.N.set(t,n),s.s)){if(o.U&&128&r){const e=o.U[t];e&&e.forEach(e=>{try{s.s[e].call(s.s,n,l,t)}catch(e){f(e)}})}2==(22&r)&&fe(i,s,o,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&o&&Object.defineProperty(i,e,{value(...t){const n=c(this);return n.D.then(()=>n.s[e](...t))}})}),1&n){const n=new Map;i.attributeChangedCallback=function(e,t,s){o.jmp(()=>{const t=n.get(e);this[t]=(null!==s||"boolean"!=typeof this[t])&&s})},e.observedAttributes=s.filter(([e,t])=>15&t[0]).map(([e,o])=>{const s=o[1]||e;return n.set(s,e),512&o[0]&&t.O.push([e,s]),s})}}return e},ye=(e,t,o,s,i,l,r)=>{let c,a,d;if(1===l.nodeType){(c=l.getAttribute("c-id"))&&((a=c.split("."))[0]!==r&&"0"!==a[0]||(d={t:0,P:a[0],W:a[1],I:a[2],F:a[3],p:L(l.tagName),$:l},t.push(d),l.removeAttribute("c-id"),e.u||(e.u=[]),e.u[d.F]=d,e=d,s&&"0"===d.I&&(s[d.F]=d.$)));let n=l.childNodes.length-1;for(;n>=0;n--)ye(e,t,o,s,i,l.childNodes[n],r);if(l.shadowRoot)for(n=l.shadowRoot.childNodes.length-1;n>=0;n--)ye(e,t,o,s,i,l.shadowRoot.childNodes[n],r)}else 8===l.nodeType?(a=l.nodeValue.split("."))[1]!==r&&"0"!==a[1]||(d={t:0,P:a[1],W:a[2],I:a[3],F:a[4],$:l},"t"===(c=a[0])?(d.$=l.nextSibling,d.$&&3===d.$.nodeType&&(d.l=d.$.textContent,t.push(d),l.remove(),e.u||(e.u=[]),e.u[d.F]=d,s&&"0"===d.I&&(s[d.F]=d.$))):d.P===r&&("s"===c?(d.p="slot",l["s-sn"]=a[5]?d.v=a[5]:"",l["s-sr"]=!0,s&&(d.$=n.createElement(d.p),d.v&&d.$.setAttribute("name",d.v),l.parentNode.insertBefore(d.$,l),l.remove(),"0"===d.I&&(s[d.F]=d.$)),o.push(d),e.u||(e.u=[]),e.u[d.F]=d):"r"===c&&(s?l.remove():(i["s-cr"]=l,l["s-cn"]=!0)))):e&&"style"===e.p&&(e.u=[{F:"0",l:l.textContent,$:l}])},ge=(e,t)=>{if(1===e.nodeType){let n=0;for(;n<e.childNodes.length;n++)ge(e.childNodes[n],t);if(e.shadowRoot)for(n=0;n<e.shadowRoot.childNodes.length;n++)ge(e.shadowRoot.childNodes[n],t)}else if(8===e.nodeType){const n=e.nodeValue.split(".");"o"===n[0]&&(t.set(n[1]+"."+n[2],e),e.nodeValue="",e["s-sd"]=""===n[3])}},we=[],ve=e=>we.push(e),ke=e=>c(e).S,Re=e=>{$e(e,"connectedCallback")},je=(e,t)=>{let o;o="",(t=e["s-cr"]=n.createComment(""))["s-cn"]=!0,e.insertBefore(t,e.firstChild)},Se=(l,a={})=>{const d=[],u=a.exclude||[],$=n.head,h=t.customElements,b=$.querySelector("meta[charset]"),y=n.createElement("style");let g;Object.assign(o,a),o.o=new URL(a.resourcesUrl||"./",n.baseURI).href,a.syncQueue&&(o.t|=4);{const e=n.querySelectorAll("style[s-id]");let t="";e.forEach(e=>t+=e.innerHTML),e.forEach(e=>{D(e.getAttribute("s-id"),t+(e=>e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{"))(e.innerHTML),!0)})}l.forEach(l=>l[1].forEach(a=>{const $={t:a[0],i:a[1],C:a[2],A:a[3],O:[],U:{}};!s&&1&$.t&&($.t|=8);const b=$.i;$.B=l[0],u.includes(b)||h.get(b)||(d.push(b),h.define(b,be(class extends HTMLElement{constructor(e){super(e),e=this,this["s-lr"]=!1,this["s-rc"]=[],(e=>{{const t={t:0,T:e,N:new Map};t.D=new Promise(e=>t.M=e),r.set(e,t)}})(e),1&$.t&&(s?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){g&&(clearTimeout(g),g=null),o.jmp(()=>((l,r)=>{if(0==(1&o.t)){const a=c(l);if(r.A&&(a.V=((e,s,l)=>{s.j=s.j||[];const r=l.map(([l,r,c])=>{const a=((e,o)=>4&o?n:8&o?t:32&o?n.body:16&o?e.parentElement:e)(e,l),d=((e,t)=>n=>{256&e.t?e.s[t](n):e.j.push([t,n])})(s,c),f=(e=>i?{passive:0!=(1&e),capture:0!=(2&e)}:0!=(2&e))(l);return o.ael(a,r,d,f),()=>o.rel(a,r,d,f)});return()=>r.forEach(e=>e())})(l,a,r.A)),!(1&a.t)){let t;if(a.t|=1,t=l.getAttribute("s-id")){if(s&&1&r.t){const e=P(l.shadowRoot,r,l.getAttribute("s-mode"));l.classList.remove(e+"-h"),l.classList.remove(e+"-s")}((e,t,s,i)=>{const l=e.shadowRoot,r=[],c=l?[]:null,a=i._={t:0,p:t};o.H||ge(n.body,o.H=new Map),e["s-id"]=s,e.removeAttribute("s-id"),ye(a,r,[],c,e,e,s),r.forEach(e=>{const n=e.P+"."+e.W,s=o.H.get(n),i=e.$;s&&(s["s-sd"]||"0"===e.P)&&s.parentNode.insertBefore(i,s.nextSibling),l||(i["s-hn"]=t,s&&(i["s-ol"]=s,i["s-ol"]["s-nr"]=i)),o.H.delete(n)}),l&&c.forEach(e=>{e&&l.appendChild(e)})})(l,r.i,t,a)}t||(4&r.t||8&r.t)&&je(l);{let e=l;for(;e=e.parentNode||e.host;)if(1===e.nodeType&&e.hasAttribute("s-id")||e["s-init"]&&!1===e["s-lr"]){a.L=e,(e["s-al"]=e["s-al"]||new Set).add(l);break}}r.C&&Object.entries(r.C).forEach(([e,[t]])=>{if(31&t&&l.hasOwnProperty(e)){const t=l[e];delete l[e],l[e]=t}}),R(()=>(async(t,n,o,s,i)=>{if(0==(32&n.t)){n.t|=32,null==n.S&&(n.S="string"!=typeof o.B?(e=>we.map(t=>t(e)).find(e=>!!e))(t):""),(i=((e,t)=>{const n=e.i.replace(/-/g,"_"),o="string"!=typeof e.B?e.B[t.S]:e.B,s=p.get(o);return s?s[n]:__sc_import_app(`./${o}.entry.js`).then(e=>(p.set(o,e),e[n]),f)})(o,n)).then&&(i=await i),i.isProxied||(o.U=i.watchers,be(i,o,2),i.isProxied=!0),n.t|=8;try{new i(n)}catch(e){f(e)}if(n.t&=-9,n.t|=128,Re(n.s),!i.J&&i.style){let t=i.style,s=W(o.i,n.S);const l=e.runtimeScopeCss;(8&o.t||l)&&(t=await __sc_import_app("./p-c68d0961.js").then(e=>e.scopeCss(t,s,!1))),D(s,t,!!(1&o.t)),i.J=!0}}const l=n.L,r=()=>fe(t,n,o,!0);l&&!1===l["s-lr"]&&l["s-rc"]?l["s-rc"].push(r):r()})(l,a,r))}Re(a.s)}})(this,$))}disconnectedCallback(){o.jmp(()=>(e=>{if(0==(1&o.t)){const t=c(e);t.V&&(t.V(),t.V=void 0),m&&m.removeHost(e);const n=t.s;$e(n,"disconnectedCallback"),$e(n,"componentDidUnload")}})(this))}"s-init"(){const e=c(this);e.s&&ue(this,e)}"s-hmr"(e){}forceUpdate(){((e,t)=>{{const n=c(e);2&n.t&&fe(e,n,t,!1)}})(this,$)}componentOnReady(){return c(this).D}},$,1)))})),y.innerHTML=d+"{visibility:hidden}.hydrated{visibility:inherit}",y.setAttribute("data-styles",""),$.insertBefore(y,b?b.nextSibling:$.firstChild),o.jmp(()=>g=setTimeout(me,30))},_e=(e,t,n)=>{const o=Me(e);return{emit:e=>o.dispatchEvent(new CustomEvent(t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e}))}},Oe=e=>{const n=new URL(e,o.o);return n.origin!==t.location.origin?n.href:n.pathname},Le=(e,t)=>{function o(){let e=n.querySelector(t);return e||(e=n.createElement(t),n.body.appendChild(e)),"function"==typeof e.componentOnReady?e.componentOnReady():Promise.resolve(e)}return{create:function(...e){return o().then(t=>t.create(...e))},componentOnReady:o}},Me=e=>c(e).T,Ce=(e,t)=>(e=>Ue(e))(e).indexOf(t)>-1,Ue=e=>{e.Ionic=e.Ionic||{};let t=e.Ionic.platforms;return null==t&&(t=e.Ionic.platforms=xe(e)).forEach(t=>e.document.documentElement.classList.add(`plt-${t}`)),t},xe=e=>Object.keys(Ae).filter(t=>Ae[t](e)),Ne=e=>Ee(e,/iPad/i),Te=e=>Ee(e,/android|sink/i),De=e=>Fe(e,"(any-pointer:coarse)"),Pe=e=>We(e)||Ie(e),We=e=>!!(e.cordova||e.phonegap||e.PhoneGap),Ie=e=>{const t=e.Capacitor;return!(!t||!t.isNative)},Ee=(e,t)=>!(!e.navigator||!e.navigator.userAgent)&&t.test(e.navigator.userAgent),Fe=(e,t)=>!!e.matchMedia&&e.matchMedia(t).matches,Ae={ipad:Ne,iphone:e=>Ee(e,/iPhone/i),ios:e=>Ee(e,/iPad|iPhone|iPod/i),android:Te,phablet:e=>{const t=e.innerWidth,n=e.innerHeight,o=Math.min(t,n),s=Math.max(t,n);return o>390&&o<520&&s>620&&s<800},tablet:e=>{const t=e.innerWidth,n=e.innerHeight,o=Math.min(t,n),s=Math.max(t,n);return Ne(e)||(e=>Te(e)&&!Ee(e,/mobile/i))(e)||o>460&&o<820&&s>780&&s<1400},cordova:We,capacitor:Ie,electron:e=>Ee(e,/electron/),pwa:e=>!!e.matchMedia&&(e.matchMedia("(display-mode: standalone)").matches||e.navigator.standalone),mobile:De,mobileweb:e=>De(e)&&!Pe(e),desktop:e=>!De(e),hybrid:Pe};class Be{constructor(){this.m=new Map}reset(e){this.m=new Map(Object.entries(e))}get(e,t){const n=this.m.get(e);return void 0!==n?n:t}getBoolean(e,t=!1){const n=this.m.get(e);return void 0===n?t:"string"==typeof n?"true"===n:!!n}getNumber(e,t){const n=parseFloat(this.m.get(e));return isNaN(n)?void 0!==t?t:NaN:n}set(e,t){this.m.set(e,t)}}const Ve=new Be;let ze;const He=e=>e&&ke(e)||ze,Je=()=>{const e=document,t=window,n=t.Ionic=t.Ionic||{};Ue(t);const o=Object.assign({},(e=>{try{const t=e.sessionStorage.getItem("ionic-persist-config");return null!==t?JSON.parse(t):{}}catch(e){return{}}})(t),{persistConfig:!1},n.config,(e=>{const t={};return e.location.search.slice(1).split("&").map(e=>e.split("=")).map(([e,t])=>[decodeURIComponent(e),decodeURIComponent(t)]).filter(([e])=>(e=>"ionic:"===e.substr(0,"ionic:".length))(e)).map(([e,t])=>[e.slice("ionic:".length),t]).forEach(([e,n])=>{t[e]=n}),t})(t));Ve.reset(o),Ve.getBoolean("persistConfig")&&((e,t)=>{try{e.sessionStorage.setItem("ionic-persist-config",JSON.stringify(t))}catch(e){return}})(t,o),n.config=Ve,n.mode=ze=Ve.get("mode",e.documentElement.getAttribute("mode")||(Ce(t,"ios")?"ios":"md")),Ve.set("mode",ze),e.documentElement.setAttribute("mode",ze),e.documentElement.classList.add(ze),Ve.getBoolean("_testing")&&Ve.set("animated",!1),ve(e=>e.mode=e.mode||e.getAttribute("mode")||ze)},qe=()=>{ve(e=>"ION-ICON"===e.tagName?e.mode||e.getAttribute("mode"):null)};function Ke(){Je(),qe()}export{E as H,C as a,Se as b,Me as c,He as d,Ve as e,_e as f,Ke as g,I as h,Ce as i,j,Oe as k,ke as l,Le as m,U as p,a as r,S as w};