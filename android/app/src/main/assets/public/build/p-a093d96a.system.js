var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function s(e){try{$(n.next(e))}catch(t){i(t)}}function o(e){try{$(n["throw"](e))}catch(t){i(t)}}function $(e){e.done?r(e.value):a(e.value).then(s,o)}$((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(t){return $([e,t])}}function $(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;a=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(o){s=[6,o];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),a=0,t=0;t<r;t++)for(var i=arguments[t],s=0,o=i.length;s<o;s++,a++)n[a]=i[s];return n};System.register([],(function(e,t){"use strict";return{execute:function(){var r=this;var n="app";var a=0;var i=false;var s;var o;var $;var l=false;var f=false;var c=false;var u=false;var v=window;var d=document;var h={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var m=function(){return!!d.documentElement.attachShadow}();var g=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var p={};var y=new WeakMap;var b=function(e){return y.get(e)};var w=e("r",(function(e,t){return y.set(t.$lazyInstance$=e,t)}));var S=function(e){{var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));return y.set(e,t)}};var x=function(e,t){return t in e};var R=function(e){return console.error(e)};var N=new Map;var _=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=N.get(i);if(s){return s[a]}return t.import("./"+i+".entry.js"+"").then((function(e){{N.set(i,e)}return e[a]}),R)};var T=new Map;var L=[];var C=[];var E=[];var A=function(e,t){return function(r){e.push(r);if(!i){i=true;if(t&&h.$flags$&4){U(I)}else{h.raf(I)}}}};var j=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(r){R(r)}}e.length=0};var k=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(a){R(a)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var I=function(){a++;j(L);var e=(h.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;k(C,e);k(E,e);if(C.length>0){E.push.apply(E,C);C.length=0}if(i=L.length+C.length+E.length>0){h.raf(I)}else{a=0}};var U=function(e){return Promise.resolve().then(e)};var M=A(L,false);var O=A(C,true);var B={};var P=function(e){return e!=null};var z=function(e){e=typeof e;return e==="object"||e==="function"};var H=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var V=e("a",(function(){if(!(v.CSS&&v.CSS.supports&&v.CSS.supports("color","var(--c)"))){return t.import("./p-9b741424.system.js").then((function(){h.$cssShim$=v.__stencil_cssshim;if(h.$cssShim$){return h.$cssShim$.initShim()}}))}return Promise.resolve()}));var q=e("p",(function(){return __awaiter(r,void 0,void 0,(function(){var e,r,a,i,s;return __generator(this,(function(o){switch(o.label){case 0:{h.$cssShim$=v.__stencil_cssshim}e=t.meta.url;r=new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)");a=Array.from(d.querySelectorAll("script")).find((function(e){return r.test(e.src)||e.getAttribute("data-stencil-namespace")===n}));i=a["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign(Object.assign({},i),{resourcesUrl:new URL(".",e).href})];case 1:s=new URL(".",new URL(a.getAttribute("data-resources-url")||a.src,v.location.href));D(s.href);if(!!window.customElements)return[3,3];return[4,t.import("./p-5b416380.system.js")];case 2:o.sent();o.label=3;case 3:return[2,Object.assign(Object.assign({},i),{resourcesUrl:s.href})]}}))}))}));var D=function(e){var t=H(n);try{v[t]=new Function("w","return import(w);//"+Math.random())}catch(a){var r=new Map;v[t]=function(n){var a=new URL(n,e).href;var i=r.get(a);if(!i){var s=d.createElement("script");s.type="module";s.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+t+".m = m;"],{type:"application/javascript"}));i=new Promise((function(e){s.onload=function(){e(v[t].m);s.remove()}}));r.set(a,i);d.head.appendChild(s)}return i}}};var F=function(e,t){if(e!=null&&!z(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var W="r";var G="o";var Q="s";var Y="t";var J="hydrated";var K="s-id";var X="c-id";var Z=new WeakMap;var ee=function(e,t,r){var n=T.get(e);if(g&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}T.set(e,n)};var te=function(e,t,r,n){var a=ne(t.$tagName$);var i=T.get(a);e=e.nodeType===11?e:d;if(i){if(typeof i==="string"){e=e.head||e;var s=Z.get(e);var o=void 0;if(!s){Z.set(e,s=new Set)}if(!s.has(a)){if(e.host&&(o=e.firstElementChild)&&o.tagName==="STYLE"){o.innerHTML=i}else{if(h.$cssShim$){o=h.$cssShim$.createHostStyle(n,a,i,!!(t.$flags$&10));var $=o["s-sc"];if($){a=$;s=null}}else{o=d.createElement("style");o.setAttribute("data-styles","");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var re=function(e,t,r){var n=te(m&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t,r,e);if(t.$flags$&10){e["s-sc"]=n;e.classList.add(n+"-h")}};var ne=function(e,t){return"sc-"+e};var ae=function(e){return e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{")};var ie=e("h",(function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=false;var s=false;var o;var $=[];var l=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){l(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!z(a)){a=String(a)}if(i&&s){$[$.length-1].$text$+=a}else{$.push(i?{$flags$:0,$text$:a}:a)}s=i}}};l(r);if(t){{o=t.name}{var f=t.className||t.class;if(f){t.class=typeof f!=="object"?f:Object.keys(f).filter((function(e){return f[e]})).join(" ")}}}if(typeof e==="function"){return e(t,$,$e)}var c={$flags$:0,$tag$:e,$children$:$.length>0?$:null,$elm$:undefined,$attrs$:t};{c.$name$=o}return c}));var se={};var oe=function(e){return e&&e.$tag$===se};var $e={forEach:function(e,t){return e.map(le).forEach(t)},map:function(e,t){return e.map(le).map(t).map(fe)}};var le=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var fe=function(e){return{$flags$:0,$attrs$:e.vattrs,$children$:e.vchildren,$key$:e.vkey,$name$:e.vname,$tag$:e.vtag,$text$:e.vtext}};var ce=function(e,t,r,n,a,i){if(r===n){return}var s=x(e,t);var o=t.toLowerCase();if(t==="class"){var $=e.classList;ue(r).forEach((function(e){return $.remove(e)}));ue(n).forEach((function(e){return $.add(e)}))}else{var l=z(n);if((s||l&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var f=n==null?"":n;if(r==null||e[t]!==(f=String(f))){e[t]=f}}else{e[t]=n}}catch(c){}}if(n==null||n===false){{e.removeAttribute(t)}}else if((!s||i&4||a)&&!l){n=n===true?"":n;{e.setAttribute(t,n)}}}};var ue=function(e){return!e?[]:e.split(/\s+/).filter((function(e){return e}))};var ve=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||B;var s=t.$attrs$||B;{for(n in i){if(!(n in s)){ce(a,n,i[n],undefined,r,t.$flags$)}}}for(n in s){ce(a,n,i[n],s[n],r,t.$flags$)}};var de=function(e,t,r,n){var a=t.$children$[r];var i=0;var f;var v;var h;if(!l){c=true;if(a.$tag$==="slot"){if(s){n.classList.add(s+"-s")}if(!a.$children$){a.$flags$|=1}else{a.$flags$|=2}}}if(P(a.$text$)){a.$elm$=d.createTextNode(a.$text$)}else if(a.$flags$&1){a.$elm$=d.createTextNode("")}else{f=a.$elm$=d.createElement(a.$flags$&2?"slot-fb":a.$tag$);{ve(null,a,u)}if(P(s)&&f["s-si"]!==s){f.classList.add(f["s-si"]=s)}if(a.$children$){for(i=0;i<a.$children$.length;++i){v=de(e,a,i,f);if(v){f.appendChild(v)}}}}{a.$elm$["s-hn"]=$;if(a.$flags$&(2|1)){a.$elm$["s-sr"]=true;a.$elm$["s-cr"]=o;a.$elm$["s-sn"]=a.$name$||"";h=e&&e.$children$&&e.$children$[r];if(h&&h.$tag$===a.$tag$&&e.$elm$){he(e.$elm$,false)}}}return a.$elm$};var he=function(e,t){h.$flags$|=1;var r=e.childNodes;for(var n=r.length-1;n>=0;n--){var a=r[n];if(a["s-hn"]!==$&&a["s-ol"]){we(a).insertBefore(a,be(a));a["s-ol"].remove();a["s-ol"]=undefined;c=true}if(t){he(a,t)}}h.$flags$&=~1};var me=function(e,t,r,n,a,i){var s=e["s-cr"]&&e["s-cr"].parentNode||e;var o;if(s.shadowRoot&&s.tagName===$){s=s.shadowRoot}for(;a<=i;++a){if(n[a]){o=de(null,r,a,e);if(o){n[a].$elm$=o;s.insertBefore(o,be(t))}}}};var ge=function(e,t,r,n){for(;t<=r;++t){if(P(e[t])){n=e[t].$elm$;{f=true;if(n["s-ol"]){n["s-ol"].remove()}else{he(n,true)}}n.remove()}}};var pe=function(e,t,r,n){var a=0;var i=0;var s=t.length-1;var o=t[0];var $=t[s];var l=n.length-1;var f=n[0];var c=n[l];var u;while(a<=s&&i<=l){if(o==null){o=t[++a]}else if($==null){$=t[--s]}else if(f==null){f=n[++i]}else if(c==null){c=n[--l]}else if(ye(o,f)){Se(o,f);o=t[++a];f=n[++i]}else if(ye($,c)){Se($,c);$=t[--s];c=n[--l]}else if(ye(o,c)){if(o.$tag$==="slot"||c.$tag$==="slot"){he(o.$elm$.parentNode,false)}Se(o,c);e.insertBefore(o.$elm$,$.$elm$.nextSibling);o=t[++a];c=n[--l]}else if(ye($,f)){if(o.$tag$==="slot"||c.$tag$==="slot"){he($.$elm$.parentNode,false)}Se($,f);e.insertBefore($.$elm$,o.$elm$);$=t[--s];f=n[++i]}else{{u=de(t&&t[i],r,i,e);f=n[++i]}if(u){{we(o.$elm$).insertBefore(u,be(o.$elm$))}}}}if(a>s){me(e,n[l+1]==null?null:n[l+1].$elm$,r,n,i,l)}else if(i>l){ge(t,a,s)}};var ye=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}return true}return false};var be=function(e){return e&&e["s-ol"]||e};var we=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var Se=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var i;if(!P(t.$text$)){{if(t.$tag$==="slot");else{ve(e,t,u)}}if(P(n)&&P(a)){pe(r,n,t,a)}else if(P(a)){if(P(e.$text$)){r.textContent=""}me(r,null,t,a,0,a.length-1)}else if(P(n)){ge(n,0,n.length-1)}}else if(i=r["s-cr"]){i.parentNode.textContent=t.$text$}else if(e.$text$!==t.$text$){r.textContent=t.$text$}};var xe=function(e,t,r,n,a,i,s,o){r=e.childNodes;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){s=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==t["s-hn"]){o=r[i].nodeType;if(s!==""){if(o===1&&s===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(o===1||o===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}}xe(t)}}};var Re=[];var Ne=function(e){var t=e.childNodes;var r=t.length;var n=0;var a=0;var i=0;var s;var o;var $;var l;for(r=t.length;n<r;n++){s=t[n];if(s["s-sr"]&&(o=s["s-cr"])){$=o.parentNode.childNodes;l=s["s-sn"];for(a=$.length-1;a>=0;a--){o=$[a];if(!o["s-cn"]&&!o["s-nr"]&&o["s-hn"]!==s["s-hn"]){i=o.nodeType;if((i===3||i===8)&&l===""||i===1&&o.getAttribute("slot")===null&&l===""||i===1&&o.getAttribute("slot")===l){if(!Re.some((function(e){return e.$nodeToRelocate$===o}))){f=true;o["s-sn"]=l;Re.push({$slotRefNode$:s,$nodeToRelocate$:o})}}}}}if(s.nodeType===1){Ne(s)}}};var _e=function(e,t,r,n){$=e.tagName;var a=t.$vnode$||{$flags$:0};var i=oe(n)?n:ie(null,null,n);if(r.$attrsToReflect$){i.$attrs$=i.$attrs$||{};r.$attrsToReflect$.forEach((function(t){var r=t[0],n=t[1];return i.$attrs$[n]=e[r]}))}i.$tag$=null;i.$flags$|=4;t.$vnode$=i;i.$elm$=a.$elm$=e.shadowRoot||e;{s=e["s-sc"]}{o=e["s-cr"];l=m&&(r.$flags$&1)!==0;c=f=false}Se(a,i);{if(c){Ne(i.$elm$);for(var u=0;u<Re.length;u++){var v=Re[u];if(!v.$nodeToRelocate$["s-ol"]){var g=d.createTextNode("");g["s-nr"]=v.$nodeToRelocate$;v.$nodeToRelocate$.parentNode.insertBefore(v.$nodeToRelocate$["s-ol"]=g,v.$nodeToRelocate$)}}h.$flags$|=1;for(var u=0;u<Re.length;u++){var v=Re[u];var p=v.$slotRefNode$.parentNode;var y=v.$slotRefNode$.nextSibling;var g=v.$nodeToRelocate$["s-ol"];while(g=g.previousSibling){var b=g["s-nr"];if(b&&b["s-sn"]===v.$nodeToRelocate$["s-sn"]&&p===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&p!==v.$nodeToRelocate$.parentNode||v.$nodeToRelocate$.nextSibling!==y){if(v.$nodeToRelocate$!==y){p.insertBefore(v.$nodeToRelocate$,y)}}}h.$flags$&=~1}if(f){xe(i.$elm$)}Re.length=0}};var Te=function(e,t,r,n){{t.$flags$|=16}var a=t.$lazyInstance$;var i=function(){return Le(e,t,r,a,n)};var s;if(n){{s=je(a,"componentWillLoad")}}return ke(s,(function(){return O(i)}))};var Le=function(e,t,r,n,a){{t.$flags$&=~16}{e["s-lr"]=false}if(a){re(e,r,t.$modeName$)}{{t.$flags$|=4;try{_e(e,t,r,n.render&&n.render())}catch(i){R(i)}t.$flags$&=~4}}if(h.$cssShim$){h.$cssShim$.updateHost(e)}{e["s-lr"]=true}{t.$flags$|=2}if(e["s-rc"].length>0){e["s-rc"].forEach((function(e){return e()}));e["s-rc"].length=0}Ce(e,t)};var Ce=function(e,t,r){if(!e["s-al"]){var n=t.$lazyInstance$;var a=t.$ancestorComponent$;if(!(t.$flags$&64)){t.$flags$|=64;{e.classList.add(J)}{je(n,"componentDidLoad")}{t.$onReadyResolve$(e)}if(!a){Ae()}}else{{je(n,"componentDidUpdate")}}if(a){if(r=a["s-al"]){r.delete(e);if(r.size===0){a["s-al"]=undefined;a["s-init"]()}}t.$ancestorComponent$=undefined}}};var Ee=function(e,t){{var r=b(e);if(r.$flags$&2){Te(e,r,t,false)}}};var Ae=function(){{d.documentElement.classList.add(J)}{h.$flags$|=2}};var je=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(n){R(n)}}return undefined};var ke=function(e,t){return e&&e.then?e.then(t):t()};var Ie=function(e,t){return b(e).$instanceValues$.get(t)};var Ue=function(e,t,r,n){var a=b(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(t);var o=a.$flags$;var $=a.$lazyInstance$;r=F(r,n.$members$[t][0]);if(r!==s&&(!(o&8)||s===undefined)){a.$instanceValues$.set(t,r);if($){if(n.$watchers$&&o&128){var l=n.$watchers$[t];if(l){l.forEach((function(e){try{$[e](r,s,t)}catch(n){R(n)}}))}}if((o&(4|2|16))===2){Te(i,a,n,false)}}}};var Me=function(e,t,r){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var n=Object.entries(t.$members$);var a=e.prototype;n.forEach((function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return Ie(this,n)},set:function(e){Ue(this,n,e,t)},configurable:true,enumerable:true})}}));if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;h.jmp((function(){var t=i.get(e);n[t]=r===null&&typeof n[t]==="boolean"?false:r}))};e.observedAttributes=n.filter((function(e){var t=e[0],r=e[1];return r[0]&15})).map((function(e){var r=e[0],n=e[1];var a=n[1]||r;i.set(a,r);if(n[0]&512){t.$attrsToReflect$.push([r,a])}return a}))}}return e};var Oe=function(e,t,r,n){var a=e.shadowRoot;var i=[];var s=[];var o=a?[]:null;var $=n.$vnode$={$flags$:0,$tag$:t};if(!h.$orgLocNodes$){Pe(d.body,h.$orgLocNodes$=new Map)}e[K]=r;e.removeAttribute(K);Be($,i,s,o,e,e,r);i.forEach((function(e){var r=e.$hostId$+"."+e.$nodeId$;var n=h.$orgLocNodes$.get(r);var i=e.$elm$;if(n&&(n["s-sd"]||e.$hostId$==="0")){n.parentNode.insertBefore(i,n.nextSibling)}if(!a){i["s-hn"]=t;if(n){i["s-ol"]=n;i["s-ol"]["s-nr"]=i}}h.$orgLocNodes$.delete(r)}));if(a){o.forEach((function(e){if(e){a.appendChild(e)}}))}};var Be=function(e,t,r,n,a,i,s){var o;var $;var l;var f;if(i.nodeType===1){o=i.getAttribute(X);if(o){$=o.split(".");if($[0]===s||$[0]==="0"){l={$flags$:0,$hostId$:$[0],$nodeId$:$[1],$depth$:$[2],$index$:$[3],$tag$:i.tagName.toLowerCase(),$elm$:i};t.push(l);i.removeAttribute(X);if(!e.$children$){e.$children$=[]}e.$children$[l.$index$]=l;e=l;if(n&&l.$depth$==="0"){n[l.$index$]=l.$elm$}}}for(f=i.childNodes.length-1;f>=0;f--){Be(e,t,r,n,a,i.childNodes[f],s)}if(i.shadowRoot){for(f=i.shadowRoot.childNodes.length-1;f>=0;f--){Be(e,t,r,n,a,i.shadowRoot.childNodes[f],s)}}}else if(i.nodeType===8){$=i.nodeValue.split(".");if($[1]===s||$[1]==="0"){o=$[0];l={$flags$:0,$hostId$:$[1],$nodeId$:$[2],$depth$:$[3],$index$:$[4],$elm$:i};if(o===Y){l.$elm$=i.nextSibling;if(l.$elm$&&l.$elm$.nodeType===3){l.$text$=l.$elm$.textContent;t.push(l);i.remove();if(!e.$children$){e.$children$=[]}e.$children$[l.$index$]=l;if(n&&l.$depth$==="0"){n[l.$index$]=l.$elm$}}}else if(l.$hostId$===s){if(o===Q){l.$tag$="slot";if($[5]){i["s-sn"]=l.$name$=$[5]}else{i["s-sn"]=""}i["s-sr"]=true;if(n){l.$elm$=d.createElement(l.$tag$);if(l.$name$){l.$elm$.setAttribute("name",l.$name$)}i.parentNode.insertBefore(l.$elm$,i);i.remove();if(l.$depth$==="0"){n[l.$index$]=l.$elm$}}r.push(l);if(!e.$children$){e.$children$=[]}e.$children$[l.$index$]=l}else if(o===W){if(n){i.remove()}else{a["s-cr"]=i;i["s-cn"]=true}}}}}else if(e&&e.$tag$==="style"){e.$children$=[{$index$:"0",$text$:i.textContent,$elm$:i}]}};var Pe=function(e,t){if(e.nodeType===1){var r=0;for(;r<e.childNodes.length;r++){Pe(e.childNodes[r],t)}if(e.shadowRoot){for(r=0;r<e.shadowRoot.childNodes.length;r++){Pe(e.shadowRoot.childNodes[r],t)}}}else if(e.nodeType===8){var n=e.nodeValue.split(".");if(n[0]===G){t.set(n[1]+"."+n[2],e);e.nodeValue="";e["s-sd"]=n[3]===""}}};var ze=function(e,n,a,i,s){return __awaiter(r,void 0,void 0,(function(){var r,i,o,$;return __generator(this,(function(l){switch(l.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=_(a);if(!s.then)return[3,2];return[4,s];case 1:s=l.sent();l.label=2;case 2:if(!s.isProxied){{a.$watchers$=s.watchers}Me(s,a,2);s.isProxied=true}{n.$flags$|=8}try{new s(n)}catch(f){R(f)}{n.$flags$&=~8}{n.$flags$|=128}He(n.$lazyInstance$);r=ne(a.$tagName$);if(!(!T.has(r)&&s.style))return[3,5];i=s.style;if(!(a.$flags$&8))return[3,4];return[4,t.import("./p-ed968002.system.js").then((function(e){return e.scopeCss(i,r,false)}))];case 3:i=l.sent();l.label=4;case 4:ee(r,i,!!(a.$flags$&1));l.label=5;case 5:o=n.$ancestorComponent$;$=function(){return Te(e,n,a,true)};if(o&&o["s-lr"]===false&&o["s-rc"]){o["s-rc"].push($)}else{$()}return[2]}}))}))};var He=function(e){{je(e,"connectedCallback")}};var Ve=function(e,t){if((h.$flags$&1)===0){var r=b(e);if(!(r.$flags$&1)){r.$flags$|=1;var n=void 0;{n=e.getAttribute(K);if(n){if(m&&t.$flags$&1){var a=te(e.shadowRoot,t);e.classList.remove(a+"-h");e.classList.remove(a+"-s")}Oe(e,t.$tagName$,n,r)}}if(!n){if(t.$flags$&4||t.$flags$&8){qe(e)}}{var i=e;while(i=i.parentNode||i.host){if(i.nodeType===1&&i.hasAttribute("s-id")||i["s-init"]&&i["s-lr"]===false){r.$ancestorComponent$=i;(i["s-al"]=i["s-al"]||new Set).add(e);break}}}if(t.$members$){Object.entries(t.$members$).forEach((function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}}))}{U((function(){return ze(e,r,t)}))}}He(r.$lazyInstance$)}};var qe=function(e,t){t=e["s-cr"]=d.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var De=function(e){if((h.$flags$&1)===0){var t=b(e);var r=t.$lazyInstance$;if(h.$cssShim$){h.$cssShim$.removeHost(e)}{je(r,"disconnectedCallback")}{je(r,"componentDidUnload")}}};var Fe=e("b",(function(e,t){if(t===void 0){t={}}var r=[];var n=t.exclude||[];var a=d.head;var i=v.customElements;var s=a.querySelector("meta[charset]");var o=d.createElement("style");var $;Object.assign(h,t);h.$resourcesUrl$=new URL(t.resourcesUrl||"./",d.baseURI).href;if(t.syncQueue){h.$flags$|=4}{h.$flags$|=2}{var l=d.querySelectorAll("style[s-id]");var f="";var c=0;for(;c<l.length;c++){f+=l[c].innerHTML}for(c=0;c<l.length;c++){var u=l[c];ee(u.getAttribute(K),f+ae(u.innerHTML),true)}}e.forEach((function(e){return e[1].forEach((function(t){var a={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{a.$attrsToReflect$=[]}{a.$watchers$={}}if(!m&&a.$flags$&1){a.$flags$|=8}var s=a.$tagName$;var o=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;{r["s-lr"]=false;r["s-rc"]=[]}S(t);if(a.$flags$&1){if(m){t.attachShadow({mode:"open"})}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return r}t.prototype.connectedCallback=function(){var e=this;if($){clearTimeout($);$=null}h.jmp((function(){return Ve(e,a)}))};t.prototype.disconnectedCallback=function(){var e=this;h.jmp((function(){return De(e)}))};t.prototype["s-init"]=function(){var e=b(this);if(e.$lazyInstance$){Ce(this,e)}};t.prototype["s-hmr"]=function(e){};t.prototype.forceUpdate=function(){Ee(this,a)};t.prototype.componentOnReady=function(){return b(this).$onReadyPromise$};return t}(HTMLElement);a.$lazyBundleIds$=e[0];if(!n.includes(s)&&!i.get(s)){r.push(s);i.define(s,Me(o,a,1))}}))}));o.innerHTML=r+"{visibility:hidden}.hydrated{visibility:inherit}";o.setAttribute("data-styles","");a.insertBefore(o,s?s.nextSibling:a.firstChild);h.jmp((function(){return $=setTimeout(Ae,30)}))}));var We=function(e){var t=new URL(e,h.$resourcesUrl$);return t.origin!==v.location.origin?t.href:t.pathname};var Ge=e("c",(function(e,t){if(t in p){return p[t]}else if(t==="window"){return v}else if(t==="document"){return d}else if(t==="isServer"||t==="isPrerender"){return false}else if(t==="isClient"){return true}else if(t==="resourcesUrl"||t==="publicPath"){return We(".")}else if(t==="queue"){return{write:O,read:M,tick:{then:function(e){return U(e)}}}}return undefined}));var Qe=e("g",(function(e){return b(e).$hostElement$}))}}}));