import{r as t,h as s}from"./p-dfcc0234.js";import{P as e}from"./p-7552130a.js";function i(t){return"function"==typeof t}let n=!1;const r={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){if(t){const t=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+t.stack)}n=t},get useDeprecatedSynchronousErrorHandling(){return n}};function o(t){setTimeout(()=>{throw t},0)}const h={closed:!0,next(t){},error(t){if(r.useDeprecatedSynchronousErrorHandling)throw t;o(t)},complete(){}},c=Array.isArray||(t=>t&&"number"==typeof t.length);function l(t){return Error.call(this),this.message=t?`${t.length} errors occurred during unsubscription:\n${t.map((t,s)=>`${s+1}) ${t.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=t,this}l.prototype=Object.create(Error.prototype);const u=l;class a{constructor(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}unsubscribe(){let t;if(this.closed)return;let{_parentOrParents:s,_unsubscribe:e,_subscriptions:n}=this;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,s instanceof a)s.remove(this);else if(null!==s)for(let t=0;t<s.length;++t)s[t].remove(this);if(i(e))try{e.call(this)}catch(s){t=s instanceof u?f(s.errors):[s]}if(c(n)){let s=-1,e=n.length;for(;++s<e;){const e=n[s];if(null!==(r=e)&&"object"==typeof r)try{e.unsubscribe()}catch(s){t=t||[],s instanceof u?t=t.concat(f(s.errors)):t.push(s)}}}var r;if(t)throw new u(t)}add(t){let s=t;if(!t)return a.EMPTY;switch(typeof t){case"function":s=new a(t);case"object":if(s===this||s.closed||"function"!=typeof s.unsubscribe)return s;if(this.closed)return s.unsubscribe(),s;if(!(s instanceof a)){const t=s;(s=new a)._subscriptions=[t]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}let{_parentOrParents:e}=s;if(null===e)s._parentOrParents=this;else if(e instanceof a){if(e===this)return s;s._parentOrParents=[e,this]}else{if(-1!==e.indexOf(this))return s;e.push(this)}const i=this._subscriptions;return null===i?this._subscriptions=[s]:i.push(s),s}remove(t){const s=this._subscriptions;if(s){const e=s.indexOf(t);-1!==e&&s.splice(e,1)}}}function f(t){return t.reduce((t,s)=>t.concat(s instanceof u?s.errors:s),[])}a.EMPTY=function(t){return t.closed=!0,t}(new a);const b="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random();class w extends a{constructor(t,s,e){switch(super(),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=h;break;case 1:if(!t){this.destination=h;break}if("object"==typeof t){t instanceof w?(this.syncErrorThrowable=t.syncErrorThrowable,this.destination=t,t.add(this)):(this.syncErrorThrowable=!0,this.destination=new d(this,t));break}default:this.syncErrorThrowable=!0,this.destination=new d(this,t,s,e)}}[b](){return this}static create(t,s,e){const i=new w(t,s,e);return i.syncErrorThrowable=!1,i}next(t){this.isStopped||this._next(t)}error(t){this.isStopped||(this.isStopped=!0,this._error(t))}complete(){this.isStopped||(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe())}_next(t){this.destination.next(t)}_error(t){this.destination.error(t),this.unsubscribe()}_complete(){this.destination.complete(),this.unsubscribe()}_unsubscribeAndRecycle(){const{_parentOrParents:t}=this;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this}}class d extends w{constructor(t,s,e,n){let r;super(),this._parentSubscriber=t;let o=this;i(s)?r=s:s&&(r=s.next,e=s.error,n=s.complete,s!==h&&(i((o=Object.create(s)).unsubscribe)&&this.add(o.unsubscribe.bind(o)),o.unsubscribe=this.unsubscribe.bind(this))),this._context=o,this._next=r,this._error=e,this._complete=n}next(t){if(!this.isStopped&&this._next){const{_parentSubscriber:s}=this;r.useDeprecatedSynchronousErrorHandling&&s.syncErrorThrowable?this.__tryOrSetError(s,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}}error(t){if(!this.isStopped){const{_parentSubscriber:s}=this,{useDeprecatedSynchronousErrorHandling:e}=r;if(this._error)e&&s.syncErrorThrowable?(this.__tryOrSetError(s,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(s.syncErrorThrowable)e?(s.syncErrorValue=t,s.syncErrorThrown=!0):o(t),this.unsubscribe();else{if(this.unsubscribe(),e)throw t;o(t)}}}complete(){if(!this.isStopped){const{_parentSubscriber:t}=this;if(this._complete){const s=()=>this._complete.call(this._context);r.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,s),this.unsubscribe()):(this.__tryOrUnsub(s),this.unsubscribe())}else this.unsubscribe()}}__tryOrUnsub(t,s){try{t.call(this._context,s)}catch(t){if(this.unsubscribe(),r.useDeprecatedSynchronousErrorHandling)throw t;o(t)}}__tryOrSetError(t,s,e){if(!r.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{s.call(this._context,e)}catch(s){return r.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=s,t.syncErrorThrown=!0,!0):(o(s),!0)}return!1}_unsubscribe(){const{_parentSubscriber:t}=this;this._context=null,this._parentSubscriber=null,t.unsubscribe()}}const p="function"==typeof Symbol&&Symbol.observable||"@@observable";class m{constructor(t){this._isScalar=!1,t&&(this._subscribe=t)}lift(t){const s=new m;return s.source=this,s.operator=t,s}subscribe(t,s,e){const{operator:i}=this,n=function(t,s,e){if(t){if(t instanceof w)return t;if(t[b])return t[b]()}return t||s||e?new w(t,s,e):new w(h)}(t,s,e);if(n.add(i?i.call(n,this.source):this.source||r.useDeprecatedSynchronousErrorHandling&&!n.syncErrorThrowable?this._subscribe(n):this._trySubscribe(n)),r.useDeprecatedSynchronousErrorHandling&&n.syncErrorThrowable&&(n.syncErrorThrowable=!1,n.syncErrorThrown))throw n.syncErrorValue;return n}_trySubscribe(t){try{return this._subscribe(t)}catch(s){r.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=s),function(t){for(;t;){const{closed:s,destination:e,isStopped:i}=t;if(s||i)return!1;t=e&&e instanceof w?e:null}return!0}(t)?t.error(s):console.warn(s)}}forEach(t,s){return new(s=y(s))((s,e)=>{let i;i=this.subscribe(s=>{try{t(s)}catch(t){e(t),i&&i.unsubscribe()}},e,s)})}_subscribe(t){const{source:s}=this;return s&&s.subscribe(t)}[p](){return this}pipe(...t){return 0===t.length?this:((s=t)?1===s.length?s[0]:function(t){return s.reduce((t,s)=>s(t),t)}:function(){})(this);var s}toPromise(t){return new(t=y(t))((t,s)=>{let e;this.subscribe(t=>e=t,t=>s(t),()=>t(e))})}}function y(t){if(t||(t=Promise),!t)throw new Error("no Promise impl found");return t}function _(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}m.create=t=>new m(t),_.prototype=Object.create(Error.prototype);const x=_;class g extends a{constructor(t,s){super(),this.subject=t,this.subscriber=s,this.closed=!1}unsubscribe(){if(this.closed)return;this.closed=!0;const t=this.subject,s=t.observers;if(this.subject=null,!s||0===s.length||t.isStopped||t.closed)return;const e=s.indexOf(this.subscriber);-1!==e&&s.splice(e,1)}}class E extends w{constructor(t){super(t),this.destination=t}}class S extends m{constructor(){super(),this.observers=[],this.closed=!1,this.isStopped=!1,this.hasError=!1,this.thrownError=null}[b](){return new E(this)}lift(t){const s=new k(this,this);return s.operator=t,s}next(t){if(this.closed)throw new x;if(!this.isStopped){const{observers:s}=this,e=s.length,i=s.slice();for(let s=0;s<e;s++)i[s].next(t)}}error(t){if(this.closed)throw new x;this.hasError=!0,this.thrownError=t,this.isStopped=!0;const{observers:s}=this,e=s.length,i=s.slice();for(let s=0;s<e;s++)i[s].error(t);this.observers.length=0}complete(){if(this.closed)throw new x;this.isStopped=!0;const{observers:t}=this,s=t.length,e=t.slice();for(let t=0;t<s;t++)e[t].complete();this.observers.length=0}unsubscribe(){this.isStopped=!0,this.closed=!0,this.observers=null}_trySubscribe(t){if(this.closed)throw new x;return super._trySubscribe(t)}_subscribe(t){if(this.closed)throw new x;return this.hasError?(t.error(this.thrownError),a.EMPTY):this.isStopped?(t.complete(),a.EMPTY):(this.observers.push(t),new g(this,t))}asObservable(){const t=new m;return t.source=this,t}}S.create=(t,s)=>new k(t,s);class k extends S{constructor(t,s){super(),this.destination=t,this.source=s}next(t){const{destination:s}=this;s&&s.next&&s.next(t)}error(t){const{destination:s}=this;s&&s.error&&this.destination.error(t)}complete(){const{destination:t}=this;t&&t.complete&&this.destination.complete()}_subscribe(t){const{source:s}=this;return s?this.source.subscribe(t):a.EMPTY}}class T extends S{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){const s=super._subscribe(t);return s&&!s.closed&&t.next(this._value),s}getValue(){if(this.hasError)throw this.thrownError;if(this.closed)throw new x;return this._value}next(t){super.next(this._value=t)}}const{CapacitorDataStorageSqlite:v}=e,j=new class{constructor(){}async fetch(t,s){return null!=s?await fetch(t,s):await fetch(t)}},O=new class{constructor(){this.twitterTimeline=new T([]),this.getTwitterTimeline()}async getTwitterTimeline(){try{let t=await j.fetch("https://us-central1-api-project-324114021707.cloudfunctions.net/getTimeline",{method:"GET"});if(!t.ok)throw new Error(t.statusText);{let s=await t.json();this.twitterTimeline.next(s),await async function(t,s){await v.set({key:"ScreenNews",value:JSON.stringify(s)})}(0,s)}}catch(t){let s=await async function(){const t=await v.get({key:"ScreenNews"});return JSON.parse(t.value)}();this.twitterTimeline.next(null!=s?s:null)}}async getTweet(t){const s="https://us-central1-api-project-324114021707.cloudfunctions.net/getTweet?id="+t;try{let t=await j.fetch(s,{method:"GET"});if(t.ok){return await t.json()}throw new Error(t.statusText)}catch(t){}}};class P{constructor(s){t(this,s),this.skeleton=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],this.twitterTimelineObservable=O.twitterTimeline}componentDidLoad(){this.twitterTimelineSubscription=this.twitterTimelineObservable.subscribe(t=>{this.tweets=t})}componentDidUnload(){this.twitterTimelineSubscription.unsubscribe()}componentWillRender(){}renderMedia(t){if(t.entities.media&&t.extended_entities.media.length>0)return s("div",null,t.extended_entities.media.map(t=>s("img",{src:t.media_url_https})))}renderData(){return null!=this.tweets?s("ion-list",null,this.tweets.length>0?this.tweets.map(t=>s("ion-card",null,s("ion-item",{lines:"none"},s("ion-avatar",{slot:"start"},s("img",t.retweeted_status?{src:t.retweeted_status.user.profile_image_url_https}:{src:t.user.profile_image_url_https})),s("ion-label",null,s("h2",t.retweeted_status?{innerHTML:t.retweeted_status.user.name}:{innerHTML:t.user.name}),s("p",t.retweeted_status?{innerHTML:"@"+t.retweeted_status.user.screen_name}:{innerHTML:"@"+t.user.screen_name}))),this.renderMedia(t),s("ion-card-content",null,t.full_text))):this.skeleton.map(()=>s("ion-card",null,s("ion-item",{lines:"none"},s("ion-avatar",{slot:"start"},s("ion-skeleton-text",{animated:!0})),s("ion-label",null,s("h3",null,s("ion-skeleton-text",{animated:!0,class:"skeleton-80"})))),s("ion-card-content",null,s("ion-thumbnail",{class:"skeleton-card-image",slot:"start"},s("ion-skeleton-text",{animated:!0})),s("ion-item",{lines:"none","text-left":!0},s("ion-label",null,s("ion-skeleton-text",{animated:!0,class:"skeleton-100"}),s("ion-skeleton-text",{animated:!0,class:"skeleton-70"}),s("ion-skeleton-text",{animated:!0,class:"skeleton-80"}))))))):s("ion-item",{lines:"none","text-left":!0},s("ion-label",null,s("h3",null,"There seems to be a problem with your connection. Pull down to refresh!")))}render(){return[s("ion-header",null,s("ion-toolbar",null,s("ion-title",null,s("img",{class:"logo",src:"/assets/logo/logo.svg"})))),s("ion-content",null,s("ion-refresher",{slot:"fixed",id:"refresher"},s("ion-refresher-content",null)),s("ion-grid",null,s("ion-row",{"justify-content-center":!0,"align-items-center":!0,class:"center-row"},s("ion-col",{sizeMd:"11",sizeLg:"10",sizeXl:"8"},this.renderData()))))]}static get style(){return".logo{max-height:35px}.skeleton-50{width:50%}.skeleton-100{width:100%}.skeleton-80{width:80%}.skeleton-70{width:70%}ion-thumbnail.skeleton-card-image{width:100%!important;height:300px!important}.center-row{-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important}"}}export{P as screen_news};