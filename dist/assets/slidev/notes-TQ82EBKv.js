import{h as F,i as $,j as D,k as T}from"../modules/unplugin-icons-xu7CGyJ7.js";import{d as I,t as E,Q as H,y as h,D as L,o as c,b as P,e as o,h as x,A as t,l as s,k as i,c as g,x as k,F as U}from"../modules/vue-p3csHQEQ.js";import{u as V,a as j,d as r,s as A,f as M,_ as Q}from"../index-k5A0SBRt.js";import{N as R}from"./NoteDisplay-Cy8N-qwd.js";import{I as u}from"./IconButton-BtsaLkcV.js";import"../modules/shiki-eFrDgDAP.js";const q={class:"h-full pt-2 flex flex-col"},G={class:"flex-none border-t border-main"},J={class:"flex gap-1 items-center px-6 py-3"},K=o("div",{class:"flex-auto"},null,-1),O={class:"p2 text-center"},W=I({__name:"notes",setup(X){V({title:`Notes - ${A}`});const{slides:y,total:_}=j(),{isFullscreen:p,toggle:z}=M,d=E(),n=H("slidev-notes-font-size",18),l=h(()=>{var e;return((e=r.lastUpdate)==null?void 0:e.type)==="viewer"?r.viewerPage:r.page}),a=h(()=>y.value.find(e=>e.no===l.value));L(l,()=>{var e;(e=d.value)==null||e.scrollTo({left:0,top:0,behavior:"smooth"}),window.scrollTo({left:0,top:0,behavior:"smooth"})});function b(){n.value=n.value+1}function w(){n.value=n.value-1}return(e,Y)=>{var f,m,v;const C=D,N=T,S=F,B=$;return c(),P(U,null,[o("div",{class:"fixed top-0 left-0 h-3px bg-primary transition-all duration-500",style:x({width:`${(l.value-1)/(t(_)-1)*100+1}%`})},null,4),o("div",q,[o("div",{ref_key:"scroller",ref:d,class:"px-5 flex-auto h-full overflow-auto",style:x({fontSize:`${t(n)}px`})},[s(R,{note:(f=a.value)==null?void 0:f.meta.slide.note,"note-html":(m=a.value)==null?void 0:m.meta.slide.noteHTML,placeholder:`No notes for Slide ${l.value}.`,"clicks-context":(v=a.value)==null?void 0:v.meta.__clicksContext,"auto-scroll":!0},null,8,["note","note-html","placeholder","clicks-context"])],4),o("div",G,[o("div",J,[s(u,{title:t(p)?"Close fullscreen":"Enter fullscreen",onClick:t(z)},{default:i(()=>[t(p)?(c(),g(C,{key:0})):(c(),g(N,{key:1}))]),_:1},8,["title","onClick"]),s(u,{title:"Increase font size",onClick:b},{default:i(()=>[s(S)]),_:1}),s(u,{title:"Decrease font size",onClick:w},{default:i(()=>[s(B)]),_:1}),K,o("div",O,k(l.value)+" / "+k(t(_)),1)])])])],64)}}}),le=Q(W,[["__file","/Users/kalongchan/Downloads/Excel and Power BI Training/excel_power_bi_training/node_modules/@slidev/client/pages/notes.vue"]]);export{le as default};
