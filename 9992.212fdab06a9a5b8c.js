"use strict";(self.webpackChunkmileageCalculator=self.webpackChunkmileageCalculator||[]).push([[9992],{9992:(A,g,d)=>{d.r(g),d.d(g,{ion_picker_column_internal:()=>s});var b=d(5861),a=d(6953),u=d(544),f=d(2966),_=d(7876),k=d(4237);const s=class{constructor(i){(0,a.r)(this,i),this.ionChange=(0,a.d)(this,"ionChange",7),this.isScrolling=!1,this.isColumnVisible=!1,this.canExitInputMode=!0,this.centerPickerItemInView=(e,t=!0,r=!0)=>{const{el:n,isColumnVisible:h}=this;if(h){const c=e.offsetTop-3*e.clientHeight+e.clientHeight/2;n.scrollTop!==c&&(this.canExitInputMode=r,n.scroll({top:c,left:0,behavior:t?"smooth":void 0}))}},this.setPickerItemActiveState=(e,t)=>{t?(e.classList.add(l),e.part.add(p)):(e.classList.remove(l),e.part.remove(p))},this.inputModeChange=e=>{if(!this.numericInput)return;const{useInputMode:t,inputModeColumn:r}=e.detail;this.setInputModeActive(!(!t||void 0!==r&&r!==this.el))},this.setInputModeActive=e=>{this.isScrolling?this.scrollEndCallback=()=>{this.isActive=e}:this.isActive=e},this.initializeScrollListener=()=>{const e=(0,_.a)("ios"),{el:t}=this;let r,n=this.activeItem;const h=()=>{(0,u.r)(()=>{r&&(clearTimeout(r),r=void 0),this.isScrolling||(e&&(0,f.a)(),this.isScrolling=!0);const c=t.getBoundingClientRect(),m=t.shadowRoot.elementFromPoint(c.x+c.width/2,c.y+c.height/2);null!==n&&this.setPickerItemActiveState(n,!1),null!==m&&!m.disabled&&(m!==n&&(e&&(0,f.b)(),this.canExitInputMode&&this.exitInputMode()),n=m,this.setPickerItemActiveState(m,!0),r=setTimeout(()=>{this.isScrolling=!1,e&&(0,f.h)();const{scrollEndCallback:C}=this;C&&(C(),this.scrollEndCallback=void 0),this.canExitInputMode=!0;const x=m.getAttribute("data-index");if(null===x)return;const w=parseInt(x,10),E=this.items[w];E.value!==this.value&&this.setValue(E.value)},250))})};(0,u.r)(()=>{t.addEventListener("scroll",h),this.destroyScrollListener=()=>{t.removeEventListener("scroll",h)}})},this.exitInputMode=()=>{const{parentEl:e}=this;null!=e&&(e.exitInputMode(),this.el.classList.remove("picker-column-active"))},this.isActive=!1,this.items=[],this.value=void 0,this.color="primary",this.numericInput=!1}valueChange(){this.isColumnVisible&&this.scrollActiveItemIntoView()}componentWillLoad(){new IntersectionObserver(t=>{if(t[0].isIntersecting){const{activeItem:n,el:h}=this;this.isColumnVisible=!0;const c=(0,u.g)(h).querySelector(`.${l}`);c&&this.setPickerItemActiveState(c,!1),this.scrollActiveItemIntoView(),n&&this.setPickerItemActiveState(n,!0),this.initializeScrollListener()}else this.isColumnVisible=!1,this.destroyScrollListener&&(this.destroyScrollListener(),this.destroyScrollListener=void 0)},{threshold:.001}).observe(this.el);const e=this.parentEl=this.el.closest("ion-picker-internal");null!==e&&e.addEventListener("ionInputModeChange",t=>this.inputModeChange(t))}componentDidRender(){var i;const{activeItem:e,items:t,isColumnVisible:r,value:n}=this;r&&(e?this.scrollActiveItemIntoView():(null===(i=t[0])||void 0===i?void 0:i.value)!==n&&this.setValue(t[0].value))}scrollActiveItemIntoView(){var i=this;return(0,b.Z)(function*(){const e=i.activeItem;e&&i.centerPickerItemInView(e,!1,!1)})()}setValue(i){var e=this;return(0,b.Z)(function*(){const{items:t}=e;e.value=i;const r=t.find(n=>n.value===i&&!0!==n.disabled);r&&e.ionChange.emit(r)})()}get activeItem(){return(0,u.g)(this.el).querySelector(`.picker-item[data-value="${this.value}"]:not([disabled])`)}render(){const{items:i,color:e,isActive:t,numericInput:r}=this,n=(0,_.b)(this);return(0,a.h)(a.H,{exportparts:`${v}, ${p}`,tabindex:0,class:(0,k.c)(e,{[n]:!0,"picker-column-active":t,"picker-column-numeric-input":r})},(0,a.h)("div",{class:"picker-item picker-item-empty","aria-hidden":"true"},"\xa0"),(0,a.h)("div",{class:"picker-item picker-item-empty","aria-hidden":"true"},"\xa0"),(0,a.h)("div",{class:"picker-item picker-item-empty","aria-hidden":"true"},"\xa0"),i.map((h,c)=>(0,a.h)("button",{tabindex:"-1",class:{"picker-item":!0,"picker-item-disabled":h.disabled||!1},"data-value":h.value,"data-index":c,onClick:y=>{this.centerPickerItemInView(y.target,!0)},disabled:h.disabled,part:v},h.text)),(0,a.h)("div",{class:"picker-item picker-item-empty","aria-hidden":"true"},"\xa0"),(0,a.h)("div",{class:"picker-item picker-item-empty","aria-hidden":"true"},"\xa0"),(0,a.h)("div",{class:"picker-item picker-item-empty","aria-hidden":"true"},"\xa0"))}get el(){return(0,a.f)(this)}static get watchers(){return{value:["valueChange"]}}},l="picker-item-active",v="wheel-item",p="active";s.style={ios:":host{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0px;padding-bottom:0px;height:200px;outline:none;font-size:22px;-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none;text-align:center}:host::-webkit-scrollbar{display:none}:host .picker-item{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden;scroll-snap-align:center}:host .picker-item-empty,:host .picker-item.picker-item-disabled{scroll-snap-align:none;cursor:default}:host .picker-item.picker-item-disabled{opacity:0.4}:host(.picker-column-active) .picker-item.picker-item-active{color:var(--ion-color-base)}@media (any-hover: hover){:host(:focus){outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}",md:":host{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0px;padding-bottom:0px;height:200px;outline:none;font-size:22px;-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none;text-align:center}:host::-webkit-scrollbar{display:none}:host .picker-item{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden;scroll-snap-align:center}:host .picker-item-empty,:host .picker-item.picker-item-disabled{scroll-snap-align:none;cursor:default}:host .picker-item.picker-item-disabled{opacity:0.4}:host(.picker-column-active) .picker-item.picker-item-active{color:var(--ion-color-base)}@media (any-hover: hover){:host(:focus){outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}:host .picker-item-active{color:var(--ion-color-base)}"}},4237:(A,g,d)=>{d.d(g,{c:()=>u,g:()=>_,h:()=>a,o:()=>I});var b=d(5861);const a=(o,s)=>null!==s.closest(o),u=(o,s)=>"string"==typeof o&&o.length>0?Object.assign({"ion-color":!0,[`ion-color-${o}`]:!0},s):s,_=o=>{const s={};return(o=>void 0!==o?(Array.isArray(o)?o:o.split(" ")).filter(l=>null!=l).map(l=>l.trim()).filter(l=>""!==l):[])(o).forEach(l=>s[l]=!0),s},k=/^[a-z][a-z0-9+\-.]*:/,I=function(){var o=(0,b.Z)(function*(s,l,v,p){if(null!=s&&"#"!==s[0]&&!k.test(s)){const i=document.querySelector("ion-router");if(i)return l?.preventDefault(),i.push(s,v,p)}return!1});return function(l,v,p,i){return o.apply(this,arguments)}}()}}]);