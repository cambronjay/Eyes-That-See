System.register([],function(e){"use strict";return{execute:function(){var t;(function(e){e["Prompt"]="PROMPT";e["Camera"]="CAMERA";e["Photos"]="PHOTOS"})(t||(t={}));var n;(function(e){e["Rear"]="REAR";e["Front"]="FRONT"})(n||(n={}));var r;(function(e){e["Uri"]="uri";e["Base64"]="base64";e["DataUrl"]="dataUrl"})(r||(r={}));var i;(function(e){e["Application"]="APPLICATION";e["Documents"]="DOCUMENTS";e["Data"]="DATA";e["Cache"]="CACHE";e["External"]="EXTERNAL";e["ExternalStorage"]="EXTERNAL_STORAGE"})(i||(i={}));var o;(function(e){e["UTF8"]="utf8";e["ASCII"]="ascii";e["UTF16"]="utf16"})(o||(o={}));var s;(function(e){e["Heavy"]="HEAVY";e["Medium"]="MEDIUM";e["Light"]="LIGHT"})(s||(s={}));var a;(function(e){e["SUCCESS"]="SUCCESS";e["WARNING"]="WARNING";e["ERROR"]="ERROR"})(a||(a={}));var u;(function(e){e["Default"]="DEFAULT";e["Destructive"]="DESTRUCTIVE";e["Cancel"]="CANCEL"})(u||(u={}));var c;(function(e){e["Smart"]="smart";e["Shared"]="shared";e["User"]="user"})(c||(c={}));var l;(function(e){e["Dark"]="DARK";e["Light"]="LIGHT"})(l||(l={}));var f=function(){function e(){var e=this;this.platform="web";this.isNative=false;this.Plugins={};this.Plugins=new Proxy(this.Plugins,{get:function(t,n){if(typeof t[n]==="undefined"){var r=e;return new Proxy({},{get:function(e,t){if(typeof e[t]==="undefined"){return r.pluginMethodNoop.bind(r,e,t,n)}else{return e[t]}}})}else{return t[n]}}})}e.prototype.pluginMethodNoop=function(e,t,n){return Promise.reject(n+" does not have web implementation.")};e.prototype.getPlatform=function(){return this.platform};e.prototype.isPluginAvailable=function(e){return this.Plugins.hasOwnProperty(e)};e.prototype.convertFileSrc=function(e){return e};e.prototype.handleError=function(e){console.error(e)};return e}();var d=new f;d=window.Capacitor||d;if(!window.Capacitor){window.Capacitor=d}var h=e("P",d.Plugins);var p=function(){function e(){this.plugins={};this.loadedPlugins={}}e.prototype.addPlugin=function(e){this.plugins[e.config.name]=e};e.prototype.getPlugin=function(e){return this.plugins[e]};e.prototype.loadPlugin=function(e){var t=this.getPlugin(e);if(!t){console.error("Unable to load web plugin "+e+", no such plugin found.");return}t.load()};e.prototype.getPlugins=function(){var e=[];for(var t in this.plugins){e.push(this.plugins[t])}return e};return e}();var v=new p;var w=function(){function e(e,t){this.config=e;this.loaded=false;this.listeners={};this.windowListeners={};if(!t){v.addPlugin(this)}else{t.addPlugin(this)}}e.prototype.addWindowListener=function(e){window.addEventListener(e.windowEventName,e.handler);e.registered=true};e.prototype.removeWindowListener=function(e){if(!e){return}window.removeEventListener(e.windowEventName,e.handler);e.registered=false};e.prototype.addListener=function(e,t){var n=this;var r=this.listeners[e];if(!r){this.listeners[e]=[]}this.listeners[e].push(t);var i=this.windowListeners[e];if(i&&!i.registered){this.addWindowListener(i)}return{remove:function(){n.removeListener(e,t)}}};e.prototype.removeListener=function(e,t){var n=this.listeners[e];if(!n){return}var r=n.indexOf(t);this.listeners[e].splice(r,1);if(!this.listeners[e].length){this.removeWindowListener(this.windowListeners[e])}};e.prototype.notifyListeners=function(e,t){var n=this.listeners[e];if(n){n.forEach(function(e){return e(t)})}};e.prototype.hasListeners=function(e){return!!this.listeners[e].length};e.prototype.registerWindowListener=function(e,t){var n=this;this.windowListeners[t]={registered:false,windowEventName:e,pluginEventName:t,handler:function(e){n.notifyListeners(t,e)}}};e.prototype.requestPermissions=function(){if(Capacitor.isNative){return Capacitor.nativePromise(this.config.name,"requestPermissions",{})}else{return Promise.resolve({results:[]})}};e.prototype.load=function(){this.loaded=true};return e}();var m=function(e){return e.config.platforms&&e.config.platforms.indexOf(Capacitor.platform)>=0};var y=function(e){var t=v.getPlugins();for(var n=0,r=t;n<r.length;n++){var i=r[n];g(e,i)}};var g=function(e,t){if(e.hasOwnProperty(t.config.name)&&!m(t)){return}e[t.config.name]=t};var b=function(e,t){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)if(t.hasOwnProperty(n))e[n]=t[n]};return b(e,t)};function P(e,t){b(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}function x(e,t,n,r){return new(n||(n=Promise))(function(i,o){function s(e){try{u(r.next(e))}catch(e){o(e)}}function a(e){try{u(r["throw"](e))}catch(e){o(e)}}function u(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,a)}u((r=r.apply(e,t||[])).next())})}function E(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(e){return function(t){return u([e,t])}}function u(s){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=s[0]&2?i["return"]:s[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;if(i=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;i=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){n.label=s[1];break}if(s[0]===6&&n.label<o[1]){n.label=o[1];o=s;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(s);break}if(o[2])n.ops.pop();n.trys.pop();continue}s=t.call(e,n)}catch(e){s=[6,e];i=0}finally{r=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}}var R=function(e){P(t,e);function t(){return e.call(this,{name:"Accessibility",platforms:["web"]})||this}t.prototype.isScreenReaderEnabled=function(){throw new Error("Feature not available in the browser")};t.prototype.speak=function(e){if(!("speechSynthesis"in window)){return Promise.reject("Browser does not support the Speech Synthesis API")}var t=new SpeechSynthesisUtterance(e.value);if(e.language){t.lang=e.language}window.speechSynthesis.speak(t);return Promise.resolve()};return t}(w);var S=new R;var C=function(e){P(t,e);function t(){var t=e.call(this,{name:"App",platforms:["web"]})||this;document.addEventListener("visibilitychange",t.handleVisibilityChange.bind(t),false);return t}t.prototype.exitApp=function(){throw new Error("Method not implemented.")};t.prototype.canOpenUrl=function(e){return Promise.resolve({value:true})};t.prototype.openUrl=function(e){return Promise.resolve({completed:true})};t.prototype.getLaunchUrl=function(){return Promise.resolve({url:""})};t.prototype.handleVisibilityChange=function(){var e={isActive:document.hidden!==true};this.notifyListeners("appStateChange",e)};return t}(w);var A=new C;var I=function(e){P(t,e);function t(){return e.call(this,{name:"Browser",platforms:["web"]})||this}t.prototype.open=function(e){return x(this,void 0,void 0,function(){return E(this,function(t){this._lastWindow=window.open(e.url,e.windowName||"_blank");return[2,Promise.resolve()]})})};t.prototype.prefetch=function(e){return x(this,void 0,void 0,function(){return E(this,function(e){return[2,Promise.resolve()]})})};t.prototype.close=function(){return x(this,void 0,void 0,function(){return E(this,function(e){this._lastWindow&&this._lastWindow.close();return[2,Promise.resolve()]})})};return t}(w);var L=new I;var O=function(e){P(t,e);function t(){return e.call(this,{name:"Camera",platforms:["web"]})||this}t.prototype.getPhoto=function(e){return x(this,void 0,void 0,function(){var t=this;return E(this,function(n){return[2,new Promise(function(n,r){return x(t,void 0,void 0,function(){var t;var i=this;return E(this,function(o){switch(o.label){case 0:t=document.createElement("pwa-camera-modal");document.body.appendChild(t);return[4,t.componentOnReady()];case 1:o.sent();t.addEventListener("onPhoto",function(o){return x(i,void 0,void 0,function(){var i,s;return E(this,function(a){switch(a.label){case 0:i=o.detail;if(!(i===null))return[3,1];r("User cancelled photos app");return[3,4];case 1:if(!(i instanceof Error))return[3,2];r(i.message);return[3,4];case 2:s=n;return[4,this._getCameraPhoto(i,e)];case 3:s.apply(void 0,[a.sent()]);a.label=4;case 4:t.dismiss();document.body.removeChild(t);return[2]}})})});t.present();return[2]}})})})]})})};t.prototype._getCameraPhoto=function(e,t){return new Promise(function(n,i){var o=new FileReader;var s=e.type.split("/")[1];if(t.resultType==r.Uri){n({webPath:URL.createObjectURL(e),format:s})}else{o.readAsDataURL(e);o.onloadend=function(){var e=o.result;if(t.resultType==r.DataUrl){n({dataUrl:e,format:s})}else{n({base64String:e.split(",")[1],format:s})}};o.onerror=function(e){i(e)}}})};return t}(w);var D=new O;var _=function(e){P(t,e);function t(){return e.call(this,{name:"Clipboard",platforms:["web"]})||this}t.prototype.write=function(e){return x(this,void 0,void 0,function(){return E(this,function(t){switch(t.label){case 0:if(!navigator.clipboard){return[2,Promise.reject("Clipboard API not available in this browser")]}if(!(e.string||e.url))return[3,2];return[4,navigator.clipboard.writeText(e.string||e.url)];case 1:t.sent();return[3,3];case 2:if(e.image){return[2,Promise.reject("Setting images not supported on the web")]}t.label=3;case 3:return[2,Promise.resolve()]}})})};t.prototype.read=function(e){return x(this,void 0,void 0,function(){var t,n,r,i,o;return E(this,function(s){switch(s.label){case 0:if(!navigator.clipboard){return[2,Promise.reject("Clipboard API not available in this browser")]}if(!(e.type==="string"||e.type==="url"))return[3,2];return[4,navigator.clipboard.readText()];case 1:t=s.sent();return[2,Promise.resolve({value:t})];case 2:return[4,navigator.clipboard.read()];case 3:n=s.sent();for(r=0,i=n.items;r<i.length;r++){o=i[r];if(o.type==="text/plain"){return[2,Promise.resolve({value:o.getAs("text/plain")})]}}s.label=4;case 4:return[2,Promise.reject("Unable to get data from clipboard")]}})})};return t}(w);var F=new _;var k=function(e){P(t,e);function t(){var t=e.call(this,{name:"Filesystem",platforms:["web"]})||this;t.DEFAULT_DIRECTORY=i.Data;t.DB_VERSION=1;t.DB_NAME="Disc";t._writeCmds=["add","put","delete"];return t}t.prototype.initDb=function(){return x(this,void 0,void 0,function(){var e=this;return E(this,function(n){if(this._db!==undefined){return[2,this._db]}if(!("indexedDB"in window)){throw new Error("This browser doesn't support IndexedDB")}return[2,new Promise(function(n,r){var i=indexedDB.open(e.DB_NAME,e.DB_VERSION);i.onupgradeneeded=t.doUpgrade;i.onsuccess=function(){e._db=i.result;n(i.result)};i.onerror=function(){return r(i.error)};i.onblocked=function(){console.warn("db blocked")}})]})})};t.doUpgrade=function(e){var t=e.target;var n=t.result;switch(e.oldVersion){case 0:case 1:default:if(n.objectStoreNames.contains("FileStorage")){n.deleteObjectStore("FileStorage")}var r=n.createObjectStore("FileStorage",{keyPath:"path"});r.createIndex("by_folder","folder")}};t.prototype.dbRequest=function(e,t){return x(this,void 0,void 0,function(){var n;return E(this,function(r){n=this._writeCmds.indexOf(e)!==-1?"readwrite":"readonly";return[2,this.initDb().then(function(r){return new Promise(function(i,o){var s=r.transaction(["FileStorage"],n);var a=s.objectStore("FileStorage");var u=a[e].apply(a,t);u.onsuccess=function(){return i(u.result)};u.onerror=function(){return o(u.error)}})})]})})};t.prototype.dbIndexRequest=function(e,t,n){return x(this,void 0,void 0,function(){var r;return E(this,function(i){r=this._writeCmds.indexOf(t)!==-1?"readwrite":"readonly";return[2,this.initDb().then(function(i){return new Promise(function(o,s){var a=i.transaction(["FileStorage"],r);var u=a.objectStore("FileStorage");var c=u.index(e);var l=c[t].apply(c,n);l.onsuccess=function(){return o(l.result)};l.onerror=function(){return s(l.error)}})})]})})};t.prototype.getPath=function(e,t){e=e||this.DEFAULT_DIRECTORY;var n=t!==undefined?t.replace(/^[\/]+|[\/]+$/g,""):"";return"/"+e+"/"+n};t.prototype.clear=function(){return x(this,void 0,void 0,function(){var e,t,n;return E(this,function(r){switch(r.label){case 0:return[4,this.initDb()];case 1:e=r.sent();t=e.transaction(["FileStorage"],"readwrite");n=t.objectStore("FileStorage");n.clear();return[2,{}]}})})};t.prototype.readFile=function(e){return x(this,void 0,void 0,function(){var t,n;return E(this,function(r){switch(r.label){case 0:t=this.getPath(e.directory,e.path);return[4,this.dbRequest("get",[t])];case 1:n=r.sent();if(n===undefined)throw Error("File does not exist.");return[2,{data:n.content}]}})})};t.prototype.writeFile=function(e){return x(this,void 0,void 0,function(){var t,n,r,i,o,s,a,u;return E(this,function(c){switch(c.label){case 0:t=this.getPath(e.directory,e.path);n=e.data;r=t.substr(0,t.lastIndexOf("/"));return[4,this.dbRequest("get",[r])];case 1:i=c.sent();if(!(i===undefined))return[3,3];o=r.indexOf("/",1);if(!(o!==-1))return[3,3];s=r.substr(o);return[4,this.mkdir({path:s,directory:e.directory,createIntermediateDirectories:true})];case 2:c.sent();c.label=3;case 3:a=Date.now();u={path:t,folder:r,type:"file",size:n.length,ctime:a,mtime:a,content:n};return[4,this.dbRequest("put",[u])];case 4:c.sent();return[2,{}]}})})};t.prototype.appendFile=function(e){return x(this,void 0,void 0,function(){var t,n,r,i,o,s,a,u,c;return E(this,function(l){switch(l.label){case 0:t=this.getPath(e.directory,e.path);n=e.data;r=t.substr(0,t.lastIndexOf("/"));i=Date.now();o=i;return[4,this.dbRequest("get",[r])];case 1:s=l.sent();if(!(s===undefined))return[3,3];a=r.substr(r.indexOf("/",1));return[4,this.mkdir({path:a,directory:e.directory,createIntermediateDirectories:true})];case 2:l.sent();l.label=3;case 3:return[4,this.dbRequest("get",[t])];case 4:u=l.sent();if(u!==undefined){n=u.content+n;o=u.ctime}c={path:t,folder:r,type:"file",size:n.length,ctime:o,mtime:i,content:n};return[4,this.dbRequest("put",[c])];case 5:l.sent();return[2,{}]}})})};t.prototype.deleteFile=function(e){return x(this,void 0,void 0,function(){var t,n,r;return E(this,function(i){switch(i.label){case 0:t=this.getPath(e.directory,e.path);return[4,this.dbRequest("get",[t])];case 1:n=i.sent();if(n===undefined)throw Error("File does not exist.");return[4,this.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(t)])];case 2:r=i.sent();if(r.length!==0)throw Error("Folder is not empty.");return[4,this.dbRequest("delete",[t])];case 3:i.sent();return[2,{}]}})})};t.prototype.mkdir=function(e){return x(this,void 0,void 0,function(){var t,n,r,i,o,s,a,u,c;return E(this,function(l){switch(l.label){case 0:t=this.getPath(e.directory,e.path);n=e.createIntermediateDirectories;r=t.substr(0,t.lastIndexOf("/"));i=(t.match(/\//g)||[]).length;return[4,this.dbRequest("get",[r])];case 1:o=l.sent();return[4,this.dbRequest("get",[t])];case 2:s=l.sent();if(i===1)throw Error("Cannot create Root directory");if(s!==undefined)throw Error("Current directory does already exist.");if(!n&&i!==2&&o===undefined)throw Error("Parent directory must exist");if(!(n&&i!==2&&o===undefined))return[3,4];a=r.substr(r.indexOf("/",1));return[4,this.mkdir({path:a,directory:e.directory,createIntermediateDirectories:n})];case 3:l.sent();l.label=4;case 4:u=Date.now();c={path:t,folder:r,type:"directory",size:0,ctime:u,mtime:u};return[4,this.dbRequest("put",[c])];case 5:l.sent();return[2,{}]}})})};t.prototype.rmdir=function(e){return x(this,void 0,void 0,function(){var t,n,r;return E(this,function(i){switch(i.label){case 0:t=this.getPath(e.directory,e.path);return[4,this.dbRequest("get",[t])];case 1:n=i.sent();if(n===undefined)throw Error("Folder does not exist.");return[4,this.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(t)])];case 2:r=i.sent();if(r.length!==0)throw Error("Folder is not empty.");return[4,this.dbRequest("delete",[t])];case 3:i.sent();return[2,{}]}})})};t.prototype.readdir=function(e){return x(this,void 0,void 0,function(){var t,n,r,i;return E(this,function(o){switch(o.label){case 0:t=this.getPath(e.directory,e.path);return[4,this.dbRequest("get",[t])];case 1:n=o.sent();if(n===undefined)throw Error("Folder does not exist.");return[4,this.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(t)])];case 2:r=o.sent();i=r.map(function(e){return e.substring(n.path.length+1)});return[2,{files:i}]}})})};t.prototype.getUri=function(e){return x(this,void 0,void 0,function(){var t,n;return E(this,function(r){switch(r.label){case 0:t=this.getPath(e.directory,e.path);return[4,this.dbRequest("get",[t])];case 1:n=r.sent();if(!(n===undefined))return[3,3];return[4,this.dbRequest("get",[t+"/"])];case 2:n=r.sent();r.label=3;case 3:if(n===undefined)throw Error("Entry does not exist.");return[2,{uri:n.path}]}})})};t.prototype.stat=function(e){return x(this,void 0,void 0,function(){var t,n;return E(this,function(r){switch(r.label){case 0:t=this.getPath(e.directory,e.path);return[4,this.dbRequest("get",[t])];case 1:n=r.sent();if(!(n===undefined))return[3,3];return[4,this.dbRequest("get",[t+"/"])];case 2:n=r.sent();r.label=3;case 3:if(n===undefined)throw Error("Entry does not exist.");return[2,{type:n.type,size:n.size,ctime:n.ctime,mtime:n.mtime,uri:n.path}]}})})};t.prototype.rename=function(e){return x(this,void 0,void 0,function(){var t,n,r,i,o,s,a,u,c,l,f,d,h,p,v,w,m;var y=this;return E(this,function(g){switch(g.label){case 0:t=e.to,n=e.from,r=e.directory;if(!t||!n){throw Error("Both to and from must be provided")}if(n===t){return[2,{}]}if(t.startsWith(n)){throw Error("To path cannot contain the from path")}g.label=1;case 1:g.trys.push([1,3,,6]);return[4,this.stat({path:t,directory:r})];case 2:i=g.sent();return[3,6];case 3:o=g.sent();s=t.split("/");s.pop();a=s.join("/");if(!(s.length>0))return[3,5];return[4,this.stat({path:a,directory:r})];case 4:u=g.sent();if(u.type!=="directory"){throw new Error("Parent directory of the to path is a file")}g.label=5;case 5:return[3,6];case 6:if(i&&i.type==="directory"){throw new Error("Cannot overwrite a directory with a file")}return[4,this.stat({path:n,directory:r})];case 7:c=g.sent();l=function(e,t,n){return x(y,void 0,void 0,function(){var i,o;return E(this,function(s){switch(s.label){case 0:i=this.getPath(r,e);return[4,this.dbRequest("get",[i])];case 1:o=s.sent();o.ctime=t;o.mtime=n;return[4,this.dbRequest("put",[o])];case 2:s.sent();return[2]}})})};f=c.type;switch(f){case"file":return[3,8];case"directory":return[3,13]}return[3,25];case 8:return[4,this.readFile({path:n,directory:r})];case 9:d=g.sent();return[4,this.deleteFile({path:n,directory:r})];case 10:g.sent();return[4,this.writeFile({path:t,directory:r,data:d.data})];case 11:g.sent();return[4,l(t,c.ctime,c.mtime)];case 12:g.sent();return[2,{}];case 13:if(i){throw Error("Cannot move a directory over an existing object")}g.label=14;case 14:g.trys.push([14,17,,18]);return[4,this.mkdir({path:t,directory:r,createIntermediateDirectories:false})];case 15:g.sent();return[4,l(t,c.ctime,c.mtime)];case 16:g.sent();return[3,18];case 17:h=g.sent();return[3,18];case 18:return[4,this.readdir({path:n,directory:r})];case 19:p=g.sent().files;v=0,w=p;g.label=20;case 20:if(!(v<w.length))return[3,23];m=w[v];return[4,this.rename({from:n+"/"+m,to:t+"/"+m,directory:r})];case 21:g.sent();g.label=22;case 22:v++;return[3,20];case 23:return[4,this.rmdir({path:n,directory:r})];case 24:g.sent();g.label=25;case 25:return[2,{}]}})})};t._debug=true;return t}(w);var T=new k;var N=function(e){var t=[];for(var n=1;n<arguments.length;n++){t[n-1]=arguments[n]}t.forEach(function(t){if(t&&typeof t==="object"){for(var n in t){if(t.hasOwnProperty(n)){e[n]=t[n]}}}});return e};var U=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=Math.random()*16|0,n=e=="x"?t:t&3|8;return n.toString(16)})};var q=function(e){P(t,e);function t(){return e.call(this,{name:"Geolocation",platforms:["web"]})||this}t.prototype.getCurrentPosition=function(e){var t=this;return new Promise(function(n,r){return t.requestPermissions().then(function(t){window.navigator.geolocation.getCurrentPosition(function(e){n(e)},function(e){r(e)},N({enableHighAccuracy:true,timeout:1e4,maximumAge:0},e))})})};t.prototype.watchPosition=function(e,t){var n=window.navigator.geolocation.watchPosition(function(e){t(e)},function(e){t(null,e)},N({enableHighAccuracy:true,timeout:1e4,maximumAge:0},e));return""+n};t.prototype.clearWatch=function(e){window.navigator.geolocation.clearWatch(parseInt(e.id,10));return Promise.resolve()};return t}(w);var j=new q;var K=function(e){P(t,e);function t(){return e.call(this,{name:"Device",platforms:["web"]})||this}t.prototype.getInfo=function(){return x(this,void 0,void 0,function(){var e,t,n,r;return E(this,function(i){switch(i.label){case 0:e=navigator.userAgent;t=this.parseUa(e);n={};i.label=1;case 1:i.trys.push([1,3,,4]);return[4,navigator.getBattery()];case 2:n=i.sent();return[3,4];case 3:r=i.sent();return[3,4];case 4:return[2,Promise.resolve({model:t.model,platform:"web",appVersion:"",osVersion:t.osVersion,manufacturer:navigator.vendor,isVirtual:false,batteryLevel:n.level,isCharging:n.charging,uuid:this.getUid()})]}})})};t.prototype.getLanguageCode=function(){return x(this,void 0,void 0,function(){return E(this,function(e){return[2,{value:navigator.language}]})})};t.prototype.parseUa=function(e){var t={};var n=e.indexOf("(")+1;var r=e.indexOf(") AppleWebKit");if(e.indexOf(") Gecko")!==-1){r=e.indexOf(") Gecko")}var i=e.substring(n,r);if(e.indexOf("Android")!==-1){t.model=i.replace("; wv","").split("; ").pop().split(" Build")[0];t.osVersion=i.split("; ")[1]}else{t.model=i.split("; ")[0];if(navigator.oscpu){t.osVersion=navigator.oscpu}else{if(e.indexOf("Windows")!==-1){t.osVersion=i}else{var o=i.split("; ").pop().replace(" like Mac OS X","").split(" ");t.osVersion=o[o.length-1].replace(/_/g,".")}}}return t};t.prototype.getUid=function(){var e=window.localStorage.getItem("_capuid");if(e){return e}e=U();window.localStorage.setItem("_capuid",e);return e};return t}(w);var W=new K;var M=function(e){P(t,e);function t(){var t=e.call(this,{name:"LocalNotifications",platforms:["web"]})||this;t.pending=[];return t}t.prototype.sendPending=function(){var e=this;var t=[];var n=+new Date;this.pending.forEach(function(r){if(r.schedule&&r.schedule.at){if(+r.schedule.at<=n){e.buildNotification(r);t.push(r)}}});console.log("Sent pending, removing",t);this.pending=this.pending.filter(function(e){return!t.find(function(t){return t===e})})};t.prototype.sendNotification=function(e){var t=this;var n=e;if(e.schedule&&e.schedule.at){var r=+e.schedule.at-+new Date;this.pending.push(n);setTimeout(function(){t.sendPending()},r);return}this.buildNotification(e)};t.prototype.buildNotification=function(e){var t=e;return new Notification(t.title,{body:t.body})};t.prototype.schedule=function(e){var t=this;var n=[];e.notifications.forEach(function(e){n.push(t.sendNotification(e))});return Promise.resolve({notifications:n.map(function(e){return{id:""}})})};t.prototype.getPending=function(){return Promise.resolve({notifications:this.pending.map(function(e){return{id:""+e.id}})})};t.prototype.registerActionTypes=function(e){throw new Error("Method not implemented.")};t.prototype.cancel=function(e){console.log("Cancel these",e);this.pending=this.pending.filter(function(t){return!e.notifications.find(function(e){return e.id===""+t.id})});return Promise.resolve()};t.prototype.areEnabled=function(){throw new Error("Method not implemented.")};t.prototype.requestPermissions=function(){return new Promise(function(e,t){Notification.requestPermission().then(function(n){if(n==="denied"||n==="default"){t(n);return}e({results:[n]})}).catch(function(e){t(e)})})};return t}(w);var B=new M;var V=function(e){P(t,e);function t(){return e.call(this,{name:"Share",platforms:["web"]})||this}t.prototype.share=function(e){if(!navigator.share){return Promise.reject("Web Share API not available")}return navigator.share({title:e.title,text:e.text,url:e.url})};return t}(w);var G=new V;var H=function(e){P(t,e);function t(){return e.call(this,{name:"Modals",platforms:["web"]})||this}t.prototype.alert=function(e){return x(this,void 0,void 0,function(){return E(this,function(t){window.alert(e.message);return[2,Promise.resolve()]})})};t.prototype.prompt=function(e){return x(this,void 0,void 0,function(){var t;return E(this,function(n){t=window.prompt(e.message,e.inputPlaceholder||"");return[2,Promise.resolve({value:t,cancelled:t===null})]})})};t.prototype.confirm=function(e){return x(this,void 0,void 0,function(){var t;return E(this,function(n){t=window.confirm(e.message);return[2,Promise.resolve({value:t})]})})};t.prototype.showActions=function(e){return x(this,void 0,void 0,function(){var t=this;return E(this,function(n){return[2,new Promise(function(n,r){return x(t,void 0,void 0,function(){var t,r,i;return E(this,function(o){switch(o.label){case 0:t=document.querySelector("ion-action-sheet-controller");if(!t){t=document.createElement("ion-action-sheet-controller");document.body.appendChild(t)}return[4,t.componentOnReady()];case 1:o.sent();r=e.options.map(function(e,t){return{text:e.title,role:e.style&&e.style.toLowerCase()||"",icon:e.icon||"",handler:function(){n({index:t})}}});return[4,t.create({title:e.title,buttons:r})];case 2:i=o.sent();return[4,i.present()];case 3:o.sent();return[2]}})})})]})})};return t}(w);var z=new H;var X=function(e){P(t,e);function t(){var t=e.call(this,{name:"Motion"})||this;t.registerWindowListener("devicemotion","accel");t.registerWindowListener("deviceorientation","orientation");return t}return t}(w);var Y=new X;var $=function(e){P(t,e);function t(){var t=e.call(this,{name:"Network",platforms:["web"]})||this;t.listenerFunction=null;return t}t.prototype.getStatus=function(){return new Promise(function(e,t){if(!window.navigator){t("Network info not available");return}var n=window.navigator.onLine;var r=window.navigator.connection||window.navigator.mozConnection||window.navigator.webkitConnection;var i=r?r.type||r.effectiveType:"wifi";e({connected:n,connectionType:n?i:"none"})})};t.prototype.addListener=function(e,t){var n=this;var r=window.navigator.connection||window.navigator.mozConnection||window.navigator.webkitConnection;var i=r?r.type||r.effectiveType:"wifi";var o=t.bind(n,{connected:true,connectionType:i});var s=t.bind(n,{connected:false,connectionType:"none"});if(e.localeCompare("networkStatusChange")===0){window.addEventListener("online",o);window.addEventListener("offline",s);return{remove:function(){window.removeEventListener("online",o);window.removeEventListener("offline",s)}}}};return t}(w);var J=new $;var Q=function(e){P(t,e);function t(){return e.call(this,{name:"SplashScreen",platforms:["web"]})||this}t.prototype.show=function(e,t){return Promise.resolve()};t.prototype.hide=function(e,t){return Promise.resolve()};return t}(w);var Z=new Q;var ee=function(e){P(t,e);function t(){var t=e.call(this,{name:"Storage",platforms:["web"]})||this;t.KEY_PREFIX="_cap_";return t}t.prototype.get=function(e){var t=this;return new Promise(function(n,r){n({value:window.localStorage.getItem(t.makeKey(e.key))})})};t.prototype.set=function(e){var t=this;return new Promise(function(n,r){window.localStorage.setItem(t.makeKey(e.key),e.value);n()})};t.prototype.remove=function(e){var t=this;return new Promise(function(n,r){window.localStorage.removeItem(t.makeKey(e.key));n()})};t.prototype.keys=function(){var e=this;return new Promise(function(t,n){t({keys:Object.keys(localStorage).filter(function(t){return e.isKey(t)}).map(function(t){return e.getKey(t)})})})};t.prototype.clear=function(){var e=this;return new Promise(function(t,n){Object.keys(localStorage).filter(function(t){return e.isKey(t)}).forEach(function(e){return window.localStorage.removeItem(e)});t()})};t.prototype.makeKey=function(e){return this.KEY_PREFIX+e};t.prototype.isKey=function(e){return e.indexOf(this.KEY_PREFIX)===0};t.prototype.getKey=function(e){return e.substr(this.KEY_PREFIX.length)};return t}(w);var te=new ee;var ne=function(e){P(t,e);function t(){return e.call(this,{name:"Toast",platforms:["web"]})||this}t.prototype.show=function(e){return x(this,void 0,void 0,function(){var t,n;return E(this,function(r){t=3e3;if(e.duration){t=e.duration==="long"?5e3:3e3}n=document.createElement("pwa-toast");n.duration=t;n.message=e.text;document.body.appendChild(n);return[2]})})};return t}(w);var re=new ne;y(h)}}});