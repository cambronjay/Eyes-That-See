import{r as t,g as s}from"./p-c77a41df.js";import{A as r}from"./p-65bb5d1b.js";const i=class{constructor(s){t(this,s)}componentWillLoad(){if(this.history&&this.root&&this.url)return this.history.replace(((t,s)=>"/"==t.charAt(0)&&"/"==s.charAt(s.length-1)?s.slice(0,s.length-1)+t:s+t)(this.url,this.root))}get el(){return s(this)}};r.injectProps(i,["history","root"]);export{i as stencil_router_redirect};