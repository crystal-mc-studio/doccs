import{J as u,ap as S,I as a,d as _,Y as $,b as I,c as v,n as w,p as P,i as C,e as x,l as f,a1 as D,r as E,N as c}from"./entry.BPS1-87X.js";import j from"./ComponentPlaygroundData.BDr8UG-D.js";import"./TabsHeader.CvrSvgpO.js";import"./ComponentPlaygroundProps.BXPZyYHP.js";import"./ProseH4.CoUFWIU0.js";import"./ProseCodeInline.DiHQC6dw.js";import"./Badge.CRtOnDG7.js";import"./slot.F2TBsdYA.js";import"./node.2ETV-d1z.js";import"./ProseP.CG3C4PQ7.js";import"./ComponentPlaygroundSlots.vue.K4kgxO3G.js";import"./ComponentPlaygroundTokens.vue.DMGHdhSq.js";async function z(e){const o=u(e);{const{data:n}=await S(`nuxt-component-meta${o?`-${o}`:""}`,()=>$fetch(`/api/component-meta${o?`/${o}`:""}`));return a(()=>n.value)}}const B=e=>(P("data-v-dba14039"),e=e(),C(),e),N=B(()=>x("div",{class:"ellipsis-item"},null,-1)),V=[N],k=_({__name:"Ellipsis",props:{width:{type:String,default:"10rem"},height:{type:String,default:"10rem"},zIndex:{type:String,default:"10"},top:{type:String,default:"0"},left:{type:String,default:"auto"},right:{type:String,default:"auto"},blur:{type:String,default:"50px"},colors:{type:Array,default:()=>["rgba(0, 71, 225, 0.22)","rgba(26, 214, 255, 0.22)","rgba(0, 220, 130, 0.22)"]}},setup(e){const o=a(()=>((t=s)=>t.top)()),n=a(()=>((t=s)=>t.left)()),r=a(()=>((t=s)=>t.right)()),i=a(()=>((t=s)=>t.zIndex)()),l=a(()=>((t=s)=>t.width)()),g=a(()=>((t=s)=>t.height)()),h=a(()=>((t=s)=>`blur(${t.blur})`)()),y=a(()=>((t=s)=>{var p,d,m;return`linear-gradient(97.62deg, ${(p=t==null?void 0:t.colors)==null?void 0:p[0]} 2.27%, ${(d=t==null?void 0:t.colors)==null?void 0:d[1]} 50.88%, ${(m=t==null?void 0:t.colors)==null?void 0:m[2]} 98.48%)`})()),s=e,{$pinceau:b}=$(s,void 0,{_cCN_top:o,_eih_insetInlineStart:n,_IfB_insetInlineEnd:r,_SsE_zIndex:i,_wj8_maxWidth:l,_t33_height:g,_Jfd_filter:h,_yUj_background:y});return(t,p)=>(I(),v("div",{class:w(["ellipsis",[u(b)]])},V,2))}}),q=f(k,[["__scopeId","data-v-dba14039"]]),A=_({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(e){const o=a(()=>D(e.component)),n=E({...e.props}),r=await z(e.component);return{as:o,formProps:n,componentData:r}},render(e){const o=Object.entries(this.$slots).reduce((n,[r,i])=>{if(r.startsWith("component-")){const l=r.replace("component-","");n[l]=i}return n},{});return c("div",{class:"component-playground"},[c("div",{class:"component-playground-wrapper"},[c(q,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),c(e.as,{...e.formProps,class:"component-playground-component"},{...o})]),c(j,{modelValue:e.formProps,componentData:e.componentData,"onUpdate:modelValue":n=>e.formProps=n})])}}),Q=f(A,[["__scopeId","data-v-94dfdb3f"]]);export{Q as default};
