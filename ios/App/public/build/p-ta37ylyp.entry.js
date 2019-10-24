import{r as i,d as s,f as t,h as o,c as e,H as a}from"./p-dfcc0234.js";import{d as n}from"./p-312fc93b.js";import{B as r,p as l,a as c,e as d}from"./p-a24fb1dc.js";import{g as p}from"./p-20d65ce5.js";import{a as h,d as m}from"./p-8aba239f.js";const w=(i,s)=>{const t=new i,o=new i;o.addElement(s.querySelector("ion-backdrop"));const e=new i;return e.addElement(s.querySelector(".modal-wrapper")),e.beforeStyles({opacity:1}).fromTo("translateY","100%","0%"),o.fromTo("opacity",.01,.4),Promise.resolve(t.addElement(s).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(400).beforeAddClass("show-modal").add(o).add(e))},u=(i,s)=>{const t=new i,o=new i;o.addElement(s.querySelector("ion-backdrop"));const e=new i,a=s.querySelector(".modal-wrapper");e.addElement(a);const n=a.getBoundingClientRect();return e.beforeStyles({opacity:1}).fromTo("translateY","0%",`${s.ownerDocument.defaultView.innerHeight-n.top}px`),o.fromTo("opacity",.4,0),Promise.resolve(t.addElement(s).easing("ease-out").duration(250).add(o).add(e))},b=(i,s)=>{const t=new i,o=new i;o.addElement(s.querySelector("ion-backdrop"));const e=new i;return e.addElement(s.querySelector(".modal-wrapper")),e.fromTo("opacity",.01,1).fromTo("translateY","40px","0px"),o.fromTo("opacity",.01,.32),Promise.resolve(t.addElement(s).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).beforeAddClass("show-modal").add(o).add(e))},D=(i,s)=>{const t=new i,o=new i;o.addElement(s.querySelector("ion-backdrop"));const e=new i,a=s.querySelector(".modal-wrapper");return e.addElement(a),e.fromTo("opacity",.99,0).fromTo("translateY","0px","40px"),o.fromTo("opacity",.32,0),Promise.resolve(t.addElement(s).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).add(o).add(e))};class f{constructor(o){i(this,o),this.presented=!1,this.mode=s(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.didPresent=t(this,"ionModalDidPresent",7),this.willPresent=t(this,"ionModalWillPresent",7),this.willDismiss=t(this,"ionModalWillDismiss",7),this.didDismiss=t(this,"ionModalDidDismiss",7)}onDismiss(i){i.stopPropagation(),i.preventDefault(),this.dismiss()}onBackdropTap(){this.dismiss(void 0,r)}lifecycle(i){const s=this.usersElement,t=y[i.type];if(s&&t){const o=new CustomEvent(t,{bubbles:!1,cancelable:!1,detail:i.detail});s.dispatchEvent(o)}}async present(){if(this.presented)return;const i=this.el.querySelector(".modal-wrapper");if(!i)throw new Error("container is undefined");const s=Object.assign({},this.componentProps,{modal:this.el});return this.usersElement=await h(this.delegate,i,this.component,["ion-page"],s),await n(this.usersElement),l(this,"modalEnter",w,b)}async dismiss(i,s){const t=await c(this,i,s,"modalLeave",u,D);return t&&await m(this.delegate,this.usersElement),t}onDidDismiss(){return d(this.el,"ionModalDidDismiss")}onWillDismiss(){return d(this.el,"ionModalWillDismiss")}hostData(){const i=s(this);return{"no-router":!0,"aria-modal":"true",class:Object.assign({[i]:!0},p(this.cssClass)),style:{zIndex:2e4+this.overlayIndex}}}__stencil_render(){const i={"modal-wrapper":!0,[s(this)]:!0};return[o("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),o("div",{role:"dialog",class:i})]}get el(){return e(this)}render(){return o(a,this.hostData(),this.__stencil_render())}static get style(){return".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color,#fff);--box-shadow:none;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}\@media only screen and (min-width:768px) and (min-height:768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-md-h{--border-radius:2px;--box-shadow:0 28px 48px rgba(0,0,0,0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,40px,0);transform:translate3d(0,40px,0);opacity:.01}"}}const y={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};export{f as ion_modal};