const __vite__fileDeps=["assets/slidev/DrawingControls-Bg9Br9Md.js","assets/modules/unplugin-icons-xu7CGyJ7.js","assets/modules/vue-p3csHQEQ.js","assets/modules/shiki-eFrDgDAP.js","assets/modules/shiki-BSchMNmt.css","assets/slidev/DrawingPreview-CGm2gR_u.js","assets/index-k5A0SBRt.js","assets/index-BoDI-_BN.css","assets/DrawingPreview-BB_gIMFu.css","assets/slidev/ContextMenu-BI2uwkNa.js","assets/slidev/IconButton-BtsaLkcV.js","assets/slidev/context-B8CHhdaD.js","assets/ContextMenu-EZAKxWQn.css","assets/DrawingControls-C5T1oZL5.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{d as v,a7 as M,o as t,c as d,A as e,b as f,e as r,f as U,i as D,g as l,af as z,y as B,k as y,ag as P,a6 as I,M as x,l as _,F as $,x as E,v as N,h as A,t as R}from"../modules/vue-p3csHQEQ.js";import{_ as g,o as h,a as T,q as H,v as b,w as V,x as O,y as W,d as C,z as L,j as S,A as j,B as F}from"../index-k5A0SBRt.js";import{Q as G,G as Q,C as q,u as K,r as X,S as Y,N as J,o as Z}from"./ContextMenu-BI2uwkNa.js";import{c as ee,a as oe}from"./DrawingPreview-CGm2gR_u.js";import{o as te}from"../modules/unplugin-icons-xu7CGyJ7.js";import"../modules/shiki-eFrDgDAP.js";import"./IconButton-BtsaLkcV.js";import"./context-B8CHhdaD.js";const se="/assets/logo-BYkHSa_O.png",ne={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},ae=v({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(p,{emit:i}){const n=p,a=M(n,"modelValue",i);function u(){a.value=!1}return(m,s)=>(t(),d(z,null,[e(a)?(t(),f("div",ne,[r("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:s[0]||(s[0]=c=>u())}),r("div",{class:D(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ main"},[U(m.$slots,"default")],2)])):l("v-if",!0)],1024))}}),le=g(ae,[["__file","/Users/kalongchan/Downloads/Excel and Power BI Training/excel_power_bi_training/node_modules/@slidev/client/internals/Modal.vue"]]),ie={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},re=["innerHTML"],de=r("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[r("div",{class:"flex gap-1 children:my-auto"},[r("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),r("img",{class:"w-5 h-5",src:se,alt:"Slidev logo"}),r("div",{style:{color:"#2082A6"}},[r("b",null,"Sli"),I("dev ")])])],-1),ue=v({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(p,{emit:i}){const a=M(p,"modelValue",i),u=B(()=>typeof h.info=="string");return(m,s)=>(t(),d(le,{modelValue:e(a),"onUpdate:modelValue":s[0]||(s[0]=c=>P(a)?a.value=c:null),class:"px-6 py-4"},{default:y(()=>[r("div",ie,[u.value?(t(),f("div",{key:0,class:"mb-4",innerHTML:e(h).info},null,8,re)):l("v-if",!0),de])]),_:1},8,["modelValue"]))}}),ce=g(ue,[["__file","/Users/kalongchan/Downloads/Excel and Power BI Training/excel_power_bi_training/node_modules/@slidev/client/internals/InfoDialog.vue"]]),_e=v({__name:"Controls",setup(p){const{isEmbedded:i}=T(),n=!h.drawings.presenterOnly&&!i.value,o=x();n&&H(()=>import("./DrawingControls-Bg9Br9Md.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13])).then(m=>o.value=m.default);const a=x(),u=x();return(m,s)=>(t(),f($,null,[e(n)&&o.value?(t(),d(e(o),{key:0})):l("v-if",!0),_(G),_(Q),a.value?(t(),d(e(a),{key:1})):l("v-if",!0),u.value?(t(),d(e(u),{key:2,modelValue:e(b),"onUpdate:modelValue":s[0]||(s[0]=c=>P(b)?b.value=c:null)},null,8,["modelValue"])):l("v-if",!0),e(h).info?(t(),d(ce,{key:3,modelValue:e(V),"onUpdate:modelValue":s[1]||(s[1]=c=>P(V)?V.value=c:null)},null,8,["modelValue"])):l("v-if",!0),_(q)],64))}}),pe=g(_e,[["__file","/Users/kalongchan/Downloads/Excel and Power BI Training/excel_power_bi_training/node_modules/@slidev/client/internals/Controls.vue"]]),me=v({__name:"PrintStyle",setup(p){function i(n,{slots:o}){if(o.default)return N("style",o.default())}return(n,o)=>(t(),d(i,null,{default:y(()=>[I(" @page { size: "+E(e(O))+"px "+E(e(W))+"px; margin: 0px; } ",1)]),_:1}))}}),fe=g(me,[["__file","/Users/kalongchan/Downloads/Excel and Power BI Training/excel_power_bi_training/node_modules/@slidev/client/internals/PrintStyle.vue"]]),ve={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},ge=v({__name:"PresenterMouse",setup(p){return(i,n)=>{const o=te;return e(C).cursor?(t(),f("div",ve,[_(o,{class:"absolute stroke-white dark:stroke-black",style:A({left:`${e(C).cursor.x}%`,top:`${e(C).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):l("v-if",!0)}}}),we=g(ge,[["__file","/Users/kalongchan/Downloads/Excel and Power BI Training/excel_power_bi_training/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),xe=v({__name:"play",setup(p){const{next:i,prev:n,isPrintMode:o}=T(),{isDrawing:a}=ee(),u=R();function m(w){var k;S.value||w.button===0&&((k=w.target)==null?void 0:k.id)==="slide-container"&&(w.pageX/window.innerWidth>.5?i():n())}K(u),X();const s=B(()=>L.value||S.value),c=x();return(w,k)=>(t(),f($,null,[e(o)?(t(),d(fe,{key:0})):l("v-if",!0),r("div",{id:"page-root",ref_key:"root",ref:u,class:D(["grid",e(F)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[_(oe,{style:{background:"var(--slidev-slide-container-background, black)"},width:e(o)?e(j).width.value:void 0,"is-main":"",onPointerdown:m,onContextmenu:e(Z)},{default:y(()=>[_(Y,{"render-context":"slide"}),_(we)]),controls:y(()=>[e(o)?l("v-if",!0):(t(),f("div",{key:0,class:D(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[s.value?"!opacity-100 right-0":"opacity-0 p-2",e(a)?"pointer-events-none":""]])},[_(J,{persist:s.value},null,8,["persist"])],2))]),_:1},8,["width","onContextmenu"]),c.value&&e(S)?(t(),d(e(c),{key:0,resize:!0})):l("v-if",!0)],2),e(o)?l("v-if",!0):(t(),d(pe,{key:1}))],64))}}),Pe=g(xe,[["__file","/Users/kalongchan/Downloads/Excel and Power BI Training/excel_power_bi_training/node_modules/@slidev/client/pages/play.vue"]]);export{Pe as default};
