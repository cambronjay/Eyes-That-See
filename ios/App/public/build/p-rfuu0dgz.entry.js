import{r as t,d as i,h as s,H as e,f as h,c as o}from"./p-dfcc0234.js";import{f as a}from"./p-ac6971bd.js";import{c as n,h as d}from"./p-20d65ce5.js";class r{constructor(i){t(this,i)}hostData(){const t=i(this);return{class:Object.assign({},n(this.color),{[t]:!0})}}__stencil_render(){return s("slot",null)}render(){return s(e,this.hostData(),this.__stencil_render())}static get style(){return":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:40px;background:var(--background);color:var(--color);overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{--background:transparent;--color:var(--ion-text-color,#000);padding-left:calc(var(--ion-safe-area-left, 0px) + 16px);min-height:45px;font-size:14px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;-webkit-padding-start:calc(var(--ion-safe-area-left, 0px) + 16px);padding-inline-start:calc(var(--ion-safe-area-left, 0px) + 16px)}}"}}class l{constructor(i){t(this,i),this.inputId=`ion-rb-${c++}`,this.name=this.inputId,this.disabled=!1,this.checked=!1,this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.onClick=()=>{this.checked?this.ionDeselect.emit():this.checked=!0},this.ionRadioDidLoad=h(this,"ionRadioDidLoad",7),this.ionRadioDidUnload=h(this,"ionRadioDidUnload",7),this.ionStyle=h(this,"ionStyle",7),this.ionSelect=h(this,"ionSelect",7),this.ionDeselect=h(this,"ionDeselect",7),this.ionFocus=h(this,"ionFocus",7),this.ionBlur=h(this,"ionBlur",7)}colorChanged(){this.emitStyle()}checkedChanged(t){t&&this.ionSelect.emit({checked:!0,value:this.value}),this.emitStyle()}disabledChanged(){this.emitStyle()}componentWillLoad(){void 0===this.value&&(this.value=this.inputId),this.emitStyle()}componentDidLoad(){this.ionRadioDidLoad.emit()}componentDidUnload(){this.ionRadioDidUnload.emit()}emitStyle(){this.ionStyle.emit({"radio-checked":this.checked,"interactive-disabled":this.disabled})}render(){const{inputId:t,disabled:h,checked:o,color:r,el:l}=this,c=i(this),u=t+"-lbl",b=a(l);return b&&(b.id=u),s(e,{onClick:this.onClick,role:"radio","aria-disabled":h?"true":null,"aria-checked":`${o}`,"aria-labelledby":u,class:Object.assign({},n(r),{[c]:!0,"in-item":d("ion-item",l),interactive:!0,"radio-checked":o,"radio-disabled":h})},s("div",{class:"radio-icon"},s("div",{class:"radio-inner"})),s("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:h}))}get el(){return o(this)}static get watchers(){return{color:["colorChanged"],checked:["checkedChanged"],disabled:["disabledChanged"]}}static get style(){return":host{display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:layout size style}.radio-icon,button{width:100%;height:100%}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--color:var(--ion-color-step-400,#999);--color-checked:var(--ion-color-primary,#3880ff);--border-width:2px;--border-style:solid;width:20px;height:20px}:host(.ion-color) .radio-inner{background:var(--ion-color-base)}:host(.ion-color.radio-checked) .radio-icon{border-color:var(--ion-color-base)}.radio-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:50%;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner{border-radius:50%;width:calc(50% + var(--border-width));height:calc(50% + var(--border-width));-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0);-webkit-transition:-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:transform .28s cubic-bezier(.4,0,.2,1);transition:transform .28s cubic-bezier(.4,0,.2,1),-webkit-transform .28s cubic-bezier(.4,0,.2,1);background:var(--color-checked)}:host(.radio-checked) .radio-icon{border-color:var(--color-checked)}:host(.radio-checked) .radio-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}:host(.radio-disabled){opacity:.3}:host(.ion-focused) .radio-icon:after{border-radius:50%;left:-12px;top:-12px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:\"\";opacity:.2}:host-context([dir=rtl]).ion-focused .radio-icon:after,:host-context([dir=rtl]):host(.ion-focused) .radio-icon:after{left:unset;right:unset;right:-12px}:host(.in-item){margin-left:0;margin-right:0;margin-top:9px;margin-bottom:9px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:11px;margin-bottom:10px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}"}}let c=0;class u{constructor(i){t(this,i),this.inputId=`ion-rg-${b++}`,this.labelId=`${this.inputId}-lbl`,this.radios=[],this.allowEmptySelection=!1,this.name=this.inputId,this.ionChange=h(this,"ionChange",7)}valueChanged(t){this.updateRadios(),this.ionChange.emit({value:t})}onRadioDidLoad(t){const i=t.target;i.name=this.name,this.radios.push(i),null==this.value&&i.checked?this.value=i.value:this.updateRadios()}onRadioDidUnload(t){const i=this.radios.indexOf(t.target);i>-1&&this.radios.splice(i,1)}onRadioSelect(t){const i=t.target;i&&(this.value=i.value)}onRadioDeselect(t){if(this.allowEmptySelection){const i=t.target;i&&(i.checked=!1,this.value=void 0)}}componentDidLoad(){let t=this.el.querySelector("ion-list-header");if(t||(t=this.el.querySelector("ion-item-divider")),t){const i=t.querySelector("ion-label");i&&(this.labelId=i.id=this.name+"-lbl")}this.updateRadios()}updateRadios(){const t=this.value;let i=!1;for(const s of this.radios)i||s.value!==t?s.checked=!1:(i=!0,s.checked=!0)}hostData(){const t=i(this);return{role:"radiogroup","aria-labelledby":this.labelId,class:{[t]:!0}}}get el(){return o(this)}static get watchers(){return{value:["valueChanged"]}}render(){return s(e,this.hostData())}}let b=0;export{r as ion_list_header,l as ion_radio,u as ion_radio_group};