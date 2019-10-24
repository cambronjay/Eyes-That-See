var __awaiter=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))(function(s,i){function o(t){try{l(n.next(t))}catch(t){i(t)}}function a(t){try{l(n["throw"](t))}catch(t){i(t)}}function l(t){t.done?s(t.value):new r(function(e){e(t.value)}).then(o,a)}l((n=n.apply(t,e||[])).next())})};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,s,i,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(t){return function(e){return l([t,e])}}function l(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,s&&(i=o[0]&2?s["return"]:o[0]?s["throw"]||((i=s["return"])&&i.call(s),0):s.next)&&!(i=i.call(s,o[1])).done)return i;if(s=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;s=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(o[0]===6&&r.label<i[1]){r.label=i[1];i=o;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(o);break}if(i[2])r.ops.pop();r.trys.pop();continue}o=e.call(t,r)}catch(t){o=[6,t];s=0}finally{n=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-3157b6a5.system.js","./p-02683056.system.js"],function(t,e){"use strict";var r,n,s,i,o,a,l,u,h;return{setters:[function(t){r=t.r;n=t.f;s=t.w;i=t.d;o=t.c;a=t.h;l=t.H;u=t.e},function(t){h=t.s}],execute:function(){var c=function(){function t(t){r(this,t);this.appliedStyles=false;this.didStart=false;this.progress=0;this.state=1;this.pullMin=60;this.pullMax=this.pullMin+60;this.closeDuration="280ms";this.snapbackDuration="280ms";this.pullFactor=1;this.disabled=false;this.ionRefresh=n(this,"ionRefresh",7);this.ionPull=n(this,"ionPull",7);this.ionStart=n(this,"ionStart",7)}t.prototype.disabledChanged=function(){if(this.gesture){this.gesture.setDisabled(this.disabled)}};t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,function(){var t,r,n;var s=this;return __generator(this,function(i){switch(i.label){case 0:if(this.el.getAttribute("slot")!=="fixed"){console.error('Make sure you use: <ion-refresher slot="fixed">');return[2]}t=this.el.closest("ion-content");if(!t)return[3,3];return[4,t.componentOnReady()];case 1:i.sent();r=this;return[4,t.getScrollElement()];case 2:r.scrollEl=i.sent();return[3,4];case 3:console.error("ion-refresher did not attach, make sure the parent is an ion-content.");i.label=4;case 4:n=this;return[4,e.import("./p-e4c32055.system.js")];case 5:n.gesture=i.sent().createGesture({el:this.el.closest("ion-content"),gestureName:"refresher",gesturePriority:10,direction:"y",threshold:20,passive:false,canStart:function(){return s.canStart()},onStart:function(){return s.onStart()},onMove:function(t){return s.onMove(t)},onEnd:function(){return s.onEnd()}});this.disabledChanged();return[2]}})})};t.prototype.componentDidUnload=function(){this.scrollEl=undefined;if(this.gesture){this.gesture.destroy();this.gesture=undefined}};t.prototype.complete=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){this.close(32,"120ms");return[2]})})};t.prototype.cancel=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){this.close(16,"");return[2]})})};t.prototype.getProgress=function(){return Promise.resolve(this.progress)};t.prototype.canStart=function(){if(!this.scrollEl){return false}if(this.state!==1){return false}if(this.scrollEl.scrollTop>0){return false}return true};t.prototype.onStart=function(){this.progress=0;this.state=1};t.prototype.onMove=function(t){if(!this.scrollEl){return}var e=t.event;if(e.touches&&e.touches.length>1){return}if((this.state&56)!==0){return}var r=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor;var n=t.deltaY*r;if(n<=0){this.progress=0;this.state=1;if(this.appliedStyles){this.setCss(0,"",false,"");return}return}if(this.state===1){var s=this.scrollEl.scrollTop;if(s>0){this.progress=0;return}this.state=2}if(e.cancelable){e.preventDefault()}this.setCss(n,"0ms",true,"");if(n===0){this.progress=0;return}var i=this.pullMin;this.progress=n/i;if(!this.didStart){this.didStart=true;this.ionStart.emit()}this.ionPull.emit();if(n<i){this.state=2;return}if(n>this.pullMax){this.beginRefresh();return}this.state=4;return};t.prototype.onEnd=function(){if(this.state===4){this.beginRefresh()}else if(this.state===2){this.cancel()}};t.prototype.beginRefresh=function(){this.state=8;this.setCss(this.pullMin,this.snapbackDuration,true,"");this.ionRefresh.emit({complete:this.complete.bind(this)})};t.prototype.close=function(t,e){var r=this;setTimeout(function(){r.state=1;r.progress=0;r.didStart=false;r.setCss(0,"0ms",false,"")},600);this.state=t;this.setCss(0,this.closeDuration,true,e)};t.prototype.setCss=function(t,e,r,n){var i=this;this.appliedStyles=t>0;s(function(){if(i.scrollEl){var s=i.scrollEl.style;s.transform=t>0?"translateY("+t+"px) translateZ(0px)":"translateZ(0px)";s.transitionDuration=e;s.transitionDelay=n;s.overflow=r?"hidden":""}})};t.prototype.hostData=function(){var t;var e=i(this);return{slot:"fixed",class:(t={},t[e]=true,t["refresher-"+e]=true,t["refresher-active"]=this.state!==1,t["refresher-pulling"]=this.state===2,t["refresher-ready"]=this.state===4,t["refresher-refreshing"]=this.state===8,t["refresher-cancelling"]=this.state===16,t["refresher-completing"]=this.state===32,t)}};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{disabled:["disabledChanged"]}},enumerable:true,configurable:true});t.prototype.render=function(){return a(l,this.hostData())};Object.defineProperty(t,"style",{get:function(){return"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;z-index:-1}:host-context([dir=rtl]) ion-refresher,[dir=rtl] ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:.2s;transition:.2s;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon,[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}.refresher-pulling ion-refresher-content .refresher-pulling,.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-cancelling ion-refresher-content .refresher-pulling,.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-icon,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color,#000)}.refresher-md .refresher-refreshing .spinner-crescent circle,.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line{stroke:var(--ion-text-color,#000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color,#000)}"},enumerable:true,configurable:true});return t}();t("ion_refresher",c);var f=function(){function t(t){r(this,t)}t.prototype.componentWillLoad=function(){if(this.pullingIcon===undefined){this.pullingIcon=u.get("refreshingIcon","arrow-down")}if(this.refreshingSpinner===undefined){var t=i(this);this.refreshingSpinner=u.get("refreshingSpinner",u.get("spinner",t==="ios"?"lines":"crescent"))}};t.prototype.hostData=function(){var t;var e=i(this);return{class:(t={},t[e]=true,t)}};t.prototype.__stencil_render=function(){return[a("div",{class:"refresher-pulling"},this.pullingIcon&&a("div",{class:"refresher-pulling-icon"},a("ion-icon",{icon:this.pullingIcon,lazy:false})),this.pullingText&&a("div",{class:"refresher-pulling-text",innerHTML:h(this.pullingText)})),a("div",{class:"refresher-refreshing"},this.refreshingSpinner&&a("div",{class:"refresher-refreshing-icon"},a("ion-spinner",{name:this.refreshingSpinner})),this.refreshingText&&a("div",{class:"refresher-refreshing-text",innerHTML:h(this.refreshingText)}))]};t.prototype.render=function(){return a(l,this.hostData(),this.__stencil_render())};return t}();t("ion_refresher_content",f)}}});