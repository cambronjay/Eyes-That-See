import{n as t,p as o}from"./p-ac6971bd.js";const e=e=>{let l,d,f,v,p=10*-u,m=0;const T=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),b=new WeakMap,h=o=>{p=t(o),S(o)},w=()=>{clearTimeout(v),v=void 0,d&&(k(!1),d=void 0)},E=t=>{d||(()=>void 0!==l&&null!==l.parentElement)()||(l=void 0,x(i(t),t))},S=t=>{x(void 0,t)},x=(t,e)=>{if(t&&t===d)return;clearTimeout(v),v=void 0;const{x:i,y:r}=o(e);if(d){if(b.has(d))throw new Error("internal error");d.classList.contains(c)||D(d,i,r),k(!0)}if(t){const o=b.get(t);o&&(clearTimeout(o),b.delete(t));const e=n(t)?0:a;t.classList.remove(c),v=setTimeout(()=>{D(t,i,r),v=void 0},e)}d=t},D=(t,o,e)=>{m=Date.now(),t.classList.add(c);const i=T&&r(t);i&&i.addRipple&&(j(),f=i.addRipple(o,e))},j=()=>{void 0!==f&&(f.then(t=>t()),f=void 0)},k=t=>{j();const o=d;if(!o)return;const e=s-Date.now()+m;if(t&&e>0&&!n(o)){const t=setTimeout(()=>{o.classList.remove(c),b.delete(o)},s);b.set(o,t)}else o.classList.remove(c)},y=document;y.addEventListener("ionScrollStart",t=>{l=t.target,w()}),y.addEventListener("ionScrollEnd",()=>{l=void 0}),y.addEventListener("ionGestureCaptured",w),y.addEventListener("touchstart",o=>{p=t(o),E(o)},!0),y.addEventListener("touchcancel",h,!0),y.addEventListener("touchend",h,!0),y.addEventListener("mousedown",o=>{const e=t(o)-u;p<e&&E(o)},!0),y.addEventListener("mouseup",o=>{const e=t(o)-u;p<e&&S(o)},!0)},i=t=>{if(!t.composedPath)return t.target.closest(".ion-activatable");{const o=t.composedPath();for(let t=0;t<o.length-2;t++){const e=o[t];if(e.classList&&e.classList.contains("ion-activatable"))return e}}},n=t=>t.classList.contains("ion-activatable-instant"),r=t=>{if(t.shadowRoot){const o=t.shadowRoot.querySelector("ion-ripple-effect");if(o)return o}return t.querySelector("ion-ripple-effect")},c="activated",a=200,s=200,u=2500;export{e as startTapClick};