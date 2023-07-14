"use strict";(self.webpackChunkmileageCalculator=self.webpackChunkmileageCalculator||[]).push([[4458],{4458:(I,x,h)=>{h.r(x),h.d(x,{ion_radio:()=>l,ion_radio_group:()=>k});var b=h(5861),r=h(6953),v=h(2587),p=h(544),y=h(7690),u=h(4237),g=h(7876);const l=class{constructor(e){(0,r.r)(this,e),this.ionStyle=(0,r.d)(this,"ionStyle",7),this.ionFocus=(0,r.d)(this,"ionFocus",7),this.ionBlur=(0,r.d)(this,"ionBlur",7),this.inputId="ion-rb-"+w++,this.radioGroup=null,this.inheritedAttributes={},this.hasLoggedDeprecationWarning=!1,this.updateState=()=>{this.radioGroup&&(this.checked=this.radioGroup.value===this.value)},this.onClick=()=>{this.checked=this.nativeInput.checked},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.checked=!1,this.buttonTabindex=-1,this.color=void 0,this.name=this.inputId,this.disabled=!1,this.value=void 0,this.labelPlacement="start",this.legacy=void 0,this.justify="space-between"}valueChanged(){this.updateState()}setFocus(e){var t=this;return(0,b.Z)(function*(){e.stopPropagation(),e.preventDefault(),(t.legacyFormController.hasLegacyControl()?t.el:t.nativeInput).focus()})()}setButtonTabindex(e){var t=this;return(0,b.Z)(function*(){t.buttonTabindex=e})()}connectedCallback(){this.legacyFormController=(0,v.c)(this.el),void 0===this.value&&(this.value=this.inputId);const e=this.radioGroup=this.el.closest("ion-radio-group");e&&(this.updateState(),(0,p.a)(e,"ionValueChange",this.updateState))}disconnectedCallback(){const e=this.radioGroup;e&&((0,p.b)(e,"ionValueChange",this.updateState),this.radioGroup=null)}componentWillLoad(){this.emitStyle(),this.legacyFormController.hasLegacyControl()||(this.inheritedAttributes=Object.assign({},(0,p.i)(this.el)))}styleChanged(){this.emitStyle()}emitStyle(){const e={"interactive-disabled":this.disabled};this.legacyFormController.hasLegacyControl()&&(e["radio-checked"]=this.checked),this.ionStyle.emit(e)}get hasLabel(){return""!==this.el.textContent}renderRadioControl(){return(0,r.h)("div",{class:"radio-icon",part:"container"},(0,r.h)("div",{class:"radio-inner",part:"mark"}),(0,r.h)("div",{class:"radio-ripple"}))}render(){const{legacyFormController:e}=this;return e.hasLegacyControl()?this.renderLegacyRadio():this.renderRadio()}renderRadio(){const{checked:e,disabled:t,inputId:i,color:o,el:d,justify:c,labelPlacement:s,inheritedAttributes:f,hasLabel:_,buttonTabindex:C}=this,E=(0,g.b)(this),j=(0,u.h)("ion-item",d);return(0,r.h)(r.H,{onClick:this.onClick,class:(0,u.c)(o,{[E]:!0,"in-item":j,"radio-checked":e,"radio-disabled":t,[`radio-justify-${c}`]:!0,[`radio-label-placement-${s}`]:!0,"ion-activatable":!j,"ion-focusable":!j})},(0,r.h)("label",{class:"radio-wrapper"},(0,r.h)("input",Object.assign({type:"radio",checked:e,disabled:t,id:i,tabindex:C,ref:z=>this.nativeInput=z},f)),(0,r.h)("div",{class:{"label-text-wrapper":!0,"label-text-wrapper-hidden":!_}},(0,r.h)("slot",null)),(0,r.h)("div",{class:"native-wrapper"},this.renderRadioControl())))}renderLegacyRadio(){this.hasLoggedDeprecationWarning||((0,y.p)('ion-radio now requires providing a label with either the default slot or the "aria-label" attribute. To migrate, remove any usage of "ion-label" and pass the label text to either the component or the "aria-label" attribute.\n\nExample: <ion-radio>Option Label</ion-radio>\nExample with aria-label: <ion-radio aria-label="Option Label"></ion-radio>\n\nDevelopers can use the "legacy" property to continue using the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.',this.el),this.legacy&&(0,y.p)('ion-radio is being used with the "legacy" property enabled which will forcibly enable the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.\n\nDevelopers can dismiss this warning by removing their usage of the "legacy" property and using the new radio syntax.',this.el),this.hasLoggedDeprecationWarning=!0);const{inputId:e,disabled:t,checked:i,color:o,el:d,buttonTabindex:c}=this,s=(0,g.b)(this),{label:f,labelId:_,labelText:C}=(0,p.e)(d,e);return(0,r.h)(r.H,{"aria-checked":`${i}`,"aria-hidden":t?"true":null,"aria-labelledby":f?_:null,role:"radio",tabindex:c,onFocus:this.onFocus,onBlur:this.onBlur,onClick:this.onClick,class:(0,u.c)(o,{[s]:!0,"in-item":(0,u.h)("ion-item",d),interactive:!0,"radio-checked":i,"radio-disabled":t,"legacy-radio":!0})},this.renderRadioControl(),(0,r.h)("label",{htmlFor:e},C),(0,r.h)("input",{type:"radio",checked:i,disabled:t,tabindex:"-1",id:e,ref:E=>this.nativeInput=E}))}get el(){return(0,r.f)(this)}static get watchers(){return{value:["valueChanged"],checked:["styleChanged"],color:["styleChanged"],disabled:["styleChanged"]}}};let w=0;l.style={ios:':host{--inner-border-radius:50%;display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;min-height:inherit;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(:not(.legacy-radio)){cursor:pointer}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host(.legacy-radio) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}@supports (inset-inline-start: 0){:host(.legacy-radio) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-radio) label{left:0}:host-context([dir=rtl]):host(.legacy-radio) label,:host-context([dir=rtl]).legacy-radio label{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(.legacy-radio) label:dir(rtl){left:unset;right:unset;right:0}}}:host(.legacy-radio) label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host(.in-item:not(.legacy-radio)){width:100%;height:100%}:host([slot=start]:not(.legacy-radio)),:host([slot=end]:not(.legacy-radio)){width:auto}.radio-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;cursor:inherit}.label-text-wrapper{pointer-events:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between) .radio-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.radio-justify-start) .radio-wrapper{-ms-flex-pack:start;justify-content:start}:host(.radio-justify-end) .radio-wrapper{-ms-flex-pack:end;justify-content:end}:host(.radio-label-placement-start) .radio-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.radio-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.radio-label-placement-end) .radio-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.radio-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.radio-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.radio-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px}:host{--color-checked:var(--ion-color-primary, #3880ff)}:host(.legacy-radio){width:15px;height:24px}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{-webkit-margin-start:0;margin-inline-start:0}.radio-inner{width:33%;height:50%}:host(.radio-checked) .radio-inner{-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--color-checked)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:"";opacity:0.2}@supports (inset-inline-start: 0){:host(.ion-focused) .radio-icon::after{inset-inline-start:-9px}}@supports not (inset-inline-start: 0){:host(.ion-focused) .radio-icon::after{left:-9px}:host-context([dir=rtl]):host(.ion-focused) .radio-icon::after,:host-context([dir=rtl]).ion-focused .radio-icon::after{left:unset;right:unset;right:-9px}@supports selector(:dir(rtl)){:host(.ion-focused) .radio-icon::after:dir(rtl){left:unset;right:unset;right:-9px}}}:host(.in-item.legacy-radio){-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:11px;margin-inline-end:11px;margin-top:8px;margin-bottom:8px;display:block;position:static}:host(.in-item.legacy-radio[slot=start]){-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:21px;margin-inline-end:21px;margin-top:8px;margin-bottom:8px}.native-wrapper .radio-icon{width:15px;height:24px}',md:':host{--inner-border-radius:50%;display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;min-height:inherit;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(:not(.legacy-radio)){cursor:pointer}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host(.legacy-radio) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}@supports (inset-inline-start: 0){:host(.legacy-radio) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-radio) label{left:0}:host-context([dir=rtl]):host(.legacy-radio) label,:host-context([dir=rtl]).legacy-radio label{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(.legacy-radio) label:dir(rtl){left:unset;right:unset;right:0}}}:host(.legacy-radio) label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host(.in-item:not(.legacy-radio)){width:100%;height:100%}:host([slot=start]:not(.legacy-radio)),:host([slot=end]:not(.legacy-radio)){width:auto}.radio-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;cursor:inherit}.label-text-wrapper{pointer-events:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between) .radio-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.radio-justify-start) .radio-wrapper{-ms-flex-pack:start;justify-content:start}:host(.radio-justify-end) .radio-wrapper{-ms-flex-pack:end;justify-content:end}:host(.radio-label-placement-start) .radio-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.radio-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.radio-label-placement-end) .radio-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.radio-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.radio-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.radio-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px}:host{--color:rgb(var(--ion-text-color-rgb, 0, 0, 0), 0.6);--color-checked:var(--ion-color-primary, #3880ff);--border-width:2px;--border-style:solid;--border-radius:50%}:host(.legacy-radio){width:20px;height:20px}:host(.ion-color) .radio-inner{background:var(--ion-color-base)}:host(.ion-color.radio-checked) .radio-icon{border-color:var(--ion-color-base)}.radio-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner{border-radius:var(--inner-border-radius);width:calc(50% + var(--border-width));height:calc(50% + var(--border-width));-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0);-webkit-transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background:var(--color-checked)}:host(.radio-checked) .radio-icon{border-color:var(--color-checked)}:host(.radio-checked) .radio-inner{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}:host(.legacy-radio.radio-disabled),:host(.radio-disabled) .label-text-wrapper{opacity:0.38}:host(.radio-disabled) .native-wrapper{opacity:0.63}:host(.ion-focused.legacy-radio) .radio-icon::after{top:-12px}@supports (inset-inline-start: 0){:host(.ion-focused.legacy-radio) .radio-icon::after{inset-inline-start:-12px}}@supports not (inset-inline-start: 0){:host(.ion-focused.legacy-radio) .radio-icon::after{left:-12px}:host-context([dir=rtl]):host(.ion-focused.legacy-radio) .radio-icon::after,:host-context([dir=rtl]).ion-focused.legacy-radio .radio-icon::after{left:unset;right:unset;right:-12px}@supports selector(:dir(rtl)){:host(.ion-focused.legacy-radio) .radio-icon::after:dir(rtl){left:unset;right:unset;right:-12px}}}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:"";opacity:0.2}:host(.in-item.legacy-radio){margin-left:0;margin-right:0;margin-top:9px;margin-bottom:9px;display:block;position:static}:host(.in-item.legacy-radio[slot=start]){-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px;margin-top:11px;margin-bottom:10px}.native-wrapper .radio-icon{width:20px;height:20px}'};const k=class{constructor(e){(0,r.r)(this,e),this.ionChange=(0,r.d)(this,"ionChange",7),this.ionValueChange=(0,r.d)(this,"ionValueChange",7),this.inputId="ion-rg-"+m++,this.labelId=`${this.inputId}-lbl`,this.setRadioTabindex=t=>{const i=this.getRadios(),o=i.find(s=>!s.disabled),d=i.find(s=>s.value===t&&!s.disabled);if(!o&&!d)return;const c=d||o;for(const s of i)s.setButtonTabindex(s===c?0:-1)},this.onClick=t=>{t.preventDefault();const i=t.target&&t.target.closest("ion-radio");if(i){const d=i.value;d!==this.value?(this.value=d,this.emitValueChange(t)):this.allowEmptySelection&&(this.value=void 0,this.emitValueChange(t))}},this.allowEmptySelection=!1,this.name=this.inputId,this.value=void 0}valueChanged(e){this.setRadioTabindex(e),this.ionValueChange.emit({value:e})}componentDidLoad(){this.setRadioTabindex(this.value)}connectedCallback(){var e=this;return(0,b.Z)(function*(){const t=e.el.querySelector("ion-list-header")||e.el.querySelector("ion-item-divider");if(t){const i=e.label=t.querySelector("ion-label");i&&(e.labelId=i.id=e.name+"-lbl")}})()}getRadios(){return Array.from(this.el.querySelectorAll("ion-radio"))}emitValueChange(e){const{value:t}=this;this.ionChange.emit({value:t,event:e})}onKeydown(e){const t=!!this.el.closest("ion-select-popover");if(e.target&&!this.el.contains(e.target))return;const i=this.getRadios().filter(o=>!o.disabled);if(e.target&&i.includes(e.target)){const o=i.findIndex(s=>s===e.target),d=i[o];let c;if(["ArrowDown","ArrowRight"].includes(e.key)&&(c=o===i.length-1?i[0]:i[o+1]),["ArrowUp","ArrowLeft"].includes(e.key)&&(c=0===o?i[i.length-1]:i[o-1]),c&&i.includes(c)&&(c.setFocus(e),t||(this.value=c.value,this.emitValueChange(e))),[" "].includes(e.key)){const s=this.value;this.value=this.allowEmptySelection&&void 0!==this.value?void 0:d.value,(s!==this.value||this.allowEmptySelection)&&this.emitValueChange(e),e.preventDefault()}}}render(){const{label:e,labelId:t,el:i,name:o,value:d}=this,c=(0,g.b)(this);return(0,p.d)(!0,i,o,d,!1),(0,r.h)(r.H,{role:"radiogroup","aria-labelledby":e?t:null,onClick:this.onClick,class:c})}get el(){return(0,r.f)(this)}static get watchers(){return{value:["valueChanged"]}}};let m=0},4237:(I,x,h)=>{h.d(x,{c:()=>v,g:()=>y,h:()=>r,o:()=>g});var b=h(5861);const r=(a,n)=>null!==n.closest(a),v=(a,n)=>"string"==typeof a&&a.length>0?Object.assign({"ion-color":!0,[`ion-color-${a}`]:!0},n):n,y=a=>{const n={};return(a=>void 0!==a?(Array.isArray(a)?a:a.split(" ")).filter(l=>null!=l).map(l=>l.trim()).filter(l=>""!==l):[])(a).forEach(l=>n[l]=!0),n},u=/^[a-z][a-z0-9+\-.]*:/,g=function(){var a=(0,b.Z)(function*(n,l,w,k){if(null!=n&&"#"!==n[0]&&!u.test(n)){const m=document.querySelector("ion-router");if(m)return l?.preventDefault(),m.push(n,w,k)}return!1});return function(l,w,k,m){return a.apply(this,arguments)}}()}}]);