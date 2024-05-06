import{h as U,i as W,l as j,m as A}from"../modules/unplugin-icons-xu7CGyJ7.js";import{d as $,o,c,i as q,A as e,t as z,y as h,D as F,M as J,ac as O,J as K,ae as X,a1 as Y,b as y,e as s,l as t,k as b,g as I,h as D,x as Z,F as ee,p as te,a as se}from"../modules/vue-p3csHQEQ.js";import{_ as P,a as oe,u as ne,e as re,c as ae,d as ie,h as le,s as ce,p as ue,j as de,k as pe,l as me,m as _e}from"../index-fY6EWHD-.js";import{r as fe,u as ve,S as xe,o as ge,N as be,G as ke,Q as he,C as ye}from"./ContextMenu-DWmi11x6.js";import{b as Ce,c as Se,a as M,S as we}from"./DrawingPreview-DFEKRiuA.js";import{N as Ne}from"./NoteDisplay-BA_7Qtki.js";import ze from"./DrawingControls-DnjWJZdj.js";import{I as B}from"./IconButton-BOsQXkqs.js";import{C as Fe}from"./ClicksSlider-BI322AgC.js";import"../modules/shiki-eFrDgDAP.js";import"./context-BioJx5Uy.js";const Ie=$({__name:"NoteStatic",props:{no:{type:Number,required:!0},class:{type:String,required:!1},clicksContext:{type:null,required:!1}},setup(a){const i=a,{info:r}=Ce(i.no);return(u,d)=>{var f,v;return o(),c(Ne,{class:q(i.class),note:(f=e(r))==null?void 0:f.note,"note-html":(v=e(r))==null?void 0:v.noteHTML,"clicks-context":u.clicksContext},null,8,["class","note","note-html","clicks-context"])}}}),De=P(Ie,[["__file","/Users/kalongchan/programmer/excel-power-bi-training/node_modules/@slidev/client/internals/NoteStatic.vue"]]),C=a=>(te("data-v-d0ba6bbb"),a=a(),se(),a),Me={class:"bg-main h-full slidev-presenter"},Be=C(()=>s("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Current ",-1)),$e={class:"relative grid-section next flex flex-col p-2 lg:p-4"},qe=C(()=>s("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Next ",-1)),Pe={key:0,class:"grid-section note of-auto"},Re={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Te={class:"border-t border-main py-1 px-2 text-sm"},Ee={class:"grid-section bottom flex"},Ve=C(()=>s("div",{"flex-auto":""},null,-1)),Ge={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},He={class:"progress-bar"},Le=$({__name:"presenter",setup(a){const i=z();fe(),ve(i);const{clicksContext:r,currentSlideNo:u,currentSlideRoute:d,hasNext:f,nextRoute:v,slides:R,queryClicks:T,getPrimaryClicks:E,total:V}=oe(),{isDrawing:G}=Se();ne({title:`Presenter - ${ce}`}),z(!1);const{timer:H,resetTimer:S}=re(),L=h(()=>R.value.map(g=>ae(g))),l=h(()=>r.value.current<r.value.total?[d.value,r.value.current+1]:f.value?[v.value,0]:null),x=h(()=>l.value&&L.value[l.value[0].no-1]);F([d,T],()=>{x.value&&(x.value.current=l.value[1])},{immediate:!0});const w=J();return O(()=>{const g=i.value.querySelector("#slide-content"),p=K(X()),k=Y();F(()=>{if(!k.value||G.value||!le.value)return;const n=g.getBoundingClientRect(),m=(p.x-n.left)/n.width*100,_=(p.y-n.top)/n.height*100;if(!(m<0||m>100||_<0||_>100))return{x:m,y:_}},n=>{ie.cursor=n})}),(g,p)=>{var N;const k=U,n=W,m=j,_=A;return o(),y(ee,null,[s("div",Me,[s("div",{class:q(["grid-container",`layout${e(ue)}`])},[s("div",{ref_key:"main",ref:i,class:"relative grid-section main flex flex-col"},[t(M,{key:"main",class:"p-2 lg:p-4 flex-auto","is-main":"",onContextmenu:e(ge)},{default:b(()=>[t(xe,{"render-context":"presenter"})]),_:1},8,["onContextmenu"]),(o(),c(Fe,{key:(N=e(d))==null?void 0:N.no,"clicks-context":e(E)(e(d)),class:"w-full pb2 px4 flex-none"},null,8,["clicks-context"])),Be],512),s("div",$e,[l.value&&x.value?(o(),c(M,{key:"next"},{default:b(()=>[(o(),c(we,{key:l.value[0].no,"clicks-context":x.value,route:l.value[0],"render-context":"previewNext"},null,8,["clicks-context","route"]))]),_:1})):I("v-if",!0),qe]),w.value&&e(de)?(o(),y("div",Pe,[t(e(w))])):(o(),y("div",Re,[(o(),c(De,{key:`static-${e(u)}`,no:e(u),class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:D({fontSize:`${e(pe)}em`}),"clicks-context":e(r)},null,8,["no","style","clicks-context"])),s("div",Te,[t(B,{title:"Increase font size",onClick:e(me)},{default:b(()=>[t(k)]),_:1},8,["onClick"]),t(B,{title:"Decrease font size",onClick:e(_e)},{default:b(()=>[t(n)]),_:1},8,["onClick"]),I("v-if",!0)])])),s("div",Ee,[t(be,{persist:!0}),Ve,s("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:p[2]||(p[2]=(...Q)=>e(S)&&e(S)(...Q))},[t(m,{class:"absolute"}),t(_,{class:"absolute opacity-0"})]),s("div",Ge,Z(e(H)),1)]),(o(),c(ze,{key:2}))],2),s("div",He,[s("div",{class:"progress h-3px bg-primary transition-all",style:D({width:`${(e(u)-1)/(e(V)-1)*100+1}%`})},null,4)])]),t(ke),t(he),t(ye)],64)}}}),et=P(Le,[["__scopeId","data-v-d0ba6bbb"],["__file","/Users/kalongchan/programmer/excel-power-bi-training/node_modules/@slidev/client/pages/presenter.vue"]]);export{et as default};
