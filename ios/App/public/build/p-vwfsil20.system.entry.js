var __awaiter=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))(function(n,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function s(e){try{l(o["throw"](e))}catch(e){i(e)}}function l(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(a,s)}l((o=o.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,n,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return l([e,t])}}function l(a){if(o)throw new TypeError("Generator is already executing.");while(r)try{if(o=1,n&&(i=a[0]&2?n["return"]:a[0]?n["throw"]||((i=n["return"])&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;if(n=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;n=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){r.label=a[1];break}if(a[0]===6&&r.label<i[1]){r.label=i[1];i=a;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(a);break}if(i[2])r.ops.pop();r.trys.pop();continue}a=t.call(e,r)}catch(e){a=[6,e];n=0}finally{o=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-3157b6a5.system.js","./p-5e13a069.system.js","./p-317bb7e9.system.js","./p-17730780.system.js","./p-307e3eda.system.js"],function(e){"use strict";var t,r,o,n,i,a,s,l,p,u,c,d,f,v;return{setters:[function(e){t=e.r;r=e.d;o=e.f;n=e.h;i=e.c;a=e.H},function(e){s=e.d},function(e){l=e.B;p=e.p;u=e.a;c=e.e},function(e){d=e.g},function(e){f=e.a;v=e.d}],execute:function(){var h=function(e,t,r){var o="top";var n="left";var i=t.querySelector(".popover-content");var a=i.getBoundingClientRect();var s=a.width;var l=a.height;var p=t.ownerDocument.defaultView.innerWidth;var u=t.ownerDocument.defaultView.innerHeight;var c=r&&r.target&&r.target.getBoundingClientRect();var d=c!=null&&"top"in c?c.top:u/2-l/2;var f=c!=null&&"left"in c?c.left:p/2;var v=c&&c.width||0;var h=c&&c.height||0;var y=t.querySelector(".popover-arrow");var w=y.getBoundingClientRect();var b=w.width;var g=w.height;if(c==null){y.style.display="none"}var E={top:d+h,left:f+v/2-b/2};var D={top:d+h+(g-1),left:f+v/2-s/2};var P=false;var _=false;if(D.left<m+25){P=true;D.left=m}else if(s+m+D.left+25>p){_=true;D.left=p-s-m;n="right"}if(d+h+l>u&&d-l>0){E.top=d-(g+1);D.top=d-l-(g-1);t.className=t.className+" popover-bottom";o="bottom"}else if(d+h+l>u){i.style.bottom=m+"%"}y.style.top=E.top+"px";y.style.left=E.left+"px";i.style.top=D.top+"px";i.style.left=D.left+"px";if(P){i.style.left="calc("+D.left+"px + var(--ion-safe-area-left, 0px))"}if(_){i.style.left="calc("+D.left+"px - var(--ion-safe-area-right, 0px))"}i.style.transformOrigin=o+" "+n;var x=new e;var S=new e;S.addElement(t.querySelector("ion-backdrop"));S.fromTo("opacity",.01,.08);var k=new e;k.addElement(t.querySelector(".popover-wrapper"));k.fromTo("opacity",.01,1);return Promise.resolve(x.addElement(t).easing("ease").duration(100).add(S).add(k))};var m=5;var y=function(e,t){var r=new e;var o=new e;o.addElement(t.querySelector("ion-backdrop"));var n=new e;n.addElement(t.querySelector(".popover-wrapper"));n.fromTo("opacity",.99,0);o.fromTo("opacity",.08,0);return Promise.resolve(r.addElement(t).easing("ease").duration(500).add(o).add(n))};var w=function(e,t,r){var o=t.ownerDocument;var n=o.dir==="rtl";var i="top";var a=n?"right":"left";var s=t.querySelector(".popover-content");var l=s.getBoundingClientRect();var p=l.width;var u=l.height;var c=o.defaultView.innerWidth;var d=o.defaultView.innerHeight;var f=r&&r.target&&r.target.getBoundingClientRect();var v=f!=null&&"bottom"in f?f.bottom:d/2-u/2;var h=f!=null&&"left"in f?n?f.left-p+f.width:f.left:c/2-p/2;var m=f&&f.height||0;var y={top:v,left:h};if(y.left<b){y.left=b;a="left"}else if(p+b+y.left>c){y.left=c-p-b;a="right"}if(v+m+u>d&&v-u>0){y.top=v-u-m;t.className=t.className+" popover-bottom";i="bottom"}else if(v+m+u>d){s.style.bottom=b+"px"}s.style.top=y.top+"px";s.style.left=y.left+"px";s.style.transformOrigin=i+" "+a;var w=new e;var g=new e;g.addElement(t.querySelector("ion-backdrop"));g.fromTo("opacity",.01,.32);var E=new e;E.addElement(t.querySelector(".popover-wrapper"));E.fromTo("opacity",.01,1);var D=new e;D.addElement(t.querySelector(".popover-content"));D.fromTo("scale",.001,1);var P=new e;P.addElement(t.querySelector(".popover-viewport"));P.fromTo("opacity",.01,1);return Promise.resolve(w.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).add(g).add(E).add(D).add(P))};var b=12;var g=function(e,t){var r=new e;var o=new e;o.addElement(t.querySelector("ion-backdrop"));var n=new e;n.addElement(t.querySelector(".popover-wrapper"));n.fromTo("opacity",.99,0);o.fromTo("opacity",.32,0);return Promise.resolve(r.addElement(t).easing("ease").duration(500).add(o).add(n))};var E=function(){function e(e){t(this,e);this.presented=false;this.mode=r(this);this.keyboardClose=true;this.backdropDismiss=true;this.showBackdrop=true;this.translucent=false;this.animated=true;this.didPresent=o(this,"ionPopoverDidPresent",7);this.willPresent=o(this,"ionPopoverWillPresent",7);this.willDismiss=o(this,"ionPopoverWillDismiss",7);this.didDismiss=o(this,"ionPopoverDidDismiss",7)}e.prototype.onDismiss=function(e){e.stopPropagation();e.preventDefault();this.dismiss()};e.prototype.onBackdropTap=function(){this.dismiss(undefined,l)};e.prototype.lifecycle=function(e){var t=this.usersElement;var r=D[e.type];if(t&&r){var o=new CustomEvent(r,{bubbles:false,cancelable:false,detail:e.detail});t.dispatchEvent(o)}};e.prototype.present=function(){return __awaiter(this,void 0,void 0,function(){var e,t,r;return __generator(this,function(o){switch(o.label){case 0:if(this.presented){return[2]}e=this.el.querySelector(".popover-content");if(!e){throw new Error("container is undefined")}t=Object.assign({},this.componentProps,{popover:this.el});r=this;return[4,f(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],t)];case 1:r.usersElement=o.sent();return[4,s(this.usersElement)];case 2:o.sent();return[2,p(this,"popoverEnter",h,w,this.event)]}})})};e.prototype.dismiss=function(e,t){return __awaiter(this,void 0,void 0,function(){var r;return __generator(this,function(o){switch(o.label){case 0:return[4,u(this,e,t,"popoverLeave",y,g,this.event)];case 1:r=o.sent();if(!r)return[3,3];return[4,v(this.delegate,this.usersElement)];case 2:o.sent();o.label=3;case 3:return[2,r]}})})};e.prototype.onDidDismiss=function(){return c(this.el,"ionPopoverDidDismiss")};e.prototype.onWillDismiss=function(){return c(this.el,"ionPopoverWillDismiss")};e.prototype.hostData=function(){var e;var t=r(this);return{"aria-modal":"true","no-router":true,style:{zIndex:2e4+this.overlayIndex},class:Object.assign({},d(this.cssClass),(e={},e[t]=true,e["popover-translucent"]=this.translucent,e))}};e.prototype.__stencil_render=function(){return[n("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),n("div",{class:"popover-wrapper"},n("div",{class:"popover-arrow"}),n("div",{class:"popover-content"}))]};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});e.prototype.render=function(){return n(a,this.hostData(),this.__stencil_render())};Object.defineProperty(e,"style",{get:function(){return".sc-ion-popover-ios-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1000}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios:after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:\"\";z-index:10}[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios:after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after{top:-6px}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, .popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}"},enumerable:true,configurable:true});return e}();e("ion_popover",E);var D={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"}}}});