var _1=Object.defineProperty,i1=Object.defineProperties;var p1=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var u1=Object.prototype.hasOwnProperty,h1=Object.prototype.propertyIsEnumerable;var U=(t,e,n)=>e in t?_1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,w=(t,e)=>{for(var n in e||(e={}))u1.call(e,n)&&U(t,n,e[n]);if(Q)for(var n of Q(e))h1.call(e,n)&&U(t,n,e[n]);return t},b=(t,e)=>i1(t,p1(e));import{o as c,c as p,r as $,d as f,a as h,w as d,m as X,b as C,T as A,t as k,u as i,e as N,f as _,n as L,p as E,g as R,h as H,i as Z,j as F,k as s,R as v1,l as S,q as J,s as m1,v as B,x as j,y as f1,z as g1,A as t1,B as y1,C as e1,F as n1,D as $1,E as x1,G as M1,H as z1,I as Y,J as w1,K as b1,L as k1,M as L1,N as S1,S as B1,O as I1,V as C1,P as A1}from"./vendor.9ea455b5.js";const E1=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}};E1();var u=(t,e)=>{const n=t.__vccOpts||t;for(const[o,a]of e)n[o]=a;return n};const R1={},j1={class:"relative overflow-hidden"};function T1(t,e){return c(),p("div",j1,[$(t.$slots,"default")])}var V1=u(R1,[["render",T1]]);const O1={inheritAttrs:!1},P1=f(b(w({},O1),{props:{visible:{type:Boolean}},setup(t){const e=t;return(n,o)=>(c(),h(A,{name:"fade"},{default:d(()=>[e.visible?(c(),p("div",X({key:0},n.$attrs,{class:"fixed top-0 z-10 bg-gray-600/60 inset-0 h-screen backdrop-filter backdrop-blur-md"}),null,16)):C("",!0)]),_:1}))}}));var D1=u(P1,[["__scopeId","data-v-29c2d7e2"]]);const N1={inheritAttrs:!1},T=f(b(w({},N1),{props:{icon:{type:Boolean,default:!1},primary:{type:Boolean,default:!1},outline:{type:Boolean},cta:{type:Boolean,default:!1},component:{default:"button"}},setup(t){const e=t,{icon:n,primary:o,cta:a,outline:r}=k(e);return(l,g)=>(c(),h(N(e.component),X(l.$attrs,{class:["j-button",{icon:i(n),primary:i(o),cta:i(a),outline:i(r)}]}),{default:d(()=>[$(l.$slots,"default")]),_:3},16,["class"]))}}));const H1=t=>(E("data-v-579c50af"),t=t(),R(),t),F1=H1(()=>_("div",{class:"hamburguer"},null,-1)),J1=[F1],Y1=f({props:{opened:{type:Boolean,default:!1}},setup(t){const e=t;return(n,o)=>{const a=T;return c(),h(a,{icon:"",style:{"aspect-ratio":"1"}},{default:d(()=>[_("div",{class:L([{close:e.opened},"relative inline-block w-[24px] h-[24px]"])},J1,2)]),_:1})}}});var q1=u(Y1,[["__scopeId","data-v-579c50af"]]);const G1={},W1={class:"navigation ml-10"},K1={class:"flex items-center space-x-8"};function Q1(t,e){return c(),p("nav",W1,[_("ul",K1,[$(t.$slots,"default")])])}var U1=u(G1,[["render",Q1]]);const X1=f({props:{is:{default:"span"},text:null,height:{default:1}},setup(t){const e=t;H(o=>({"13c78e4a":i(n)}));const{height:n}=k(e);return(o,a)=>(c(),h(N(t.is),{class:"featured"},{default:d(()=>[$(o.$slots,"default",{},()=>[Z(F(e.text),1)],!0)]),_:3}))}});var a1=u(X1,[["__scopeId","data-v-7b07f23b"]]);const Z1=f({props:{to:null,text:null},setup(t){const e=t;return(n,o)=>{const a=a1;return c(),p("li",null,[s(a,{height:4},{default:d(()=>[s(i(v1),{to:e.to},{default:d(()=>[Z(F(e.text),1)]),_:1},8,["to"])]),_:1})])}}});var t2=u(Z1,[["__scopeId","data-v-09d93d60"]]);const q=S(!1),M=S(!1),G=J(window),W=m1("(max-width: 768px)"),o1=B(()=>W.value&&M.value),c1=()=>M.value=!M.value;function e2(){return{toggle:c1,showBackdrop:o1}}function n2(t){const e=j(()=>{G.directions.top&&(q.value=!1)}),n=j(()=>{G.directions.bottom&&(q.value=!0)}),o=j(()=>{W.value||(M.value=!1)}),a=f1(()=>{document.querySelector("html").style.overflowY=M.value?"hidden":"auto"});function r(){t.value.querySelector("ul .router-link-active").focus()}const l=j(()=>M.value&&r());return g1().beforeEach((g,v,y)=>{M.value=!1,y()}),t1(()=>{e(),n(),o(),a(),l()}),y1({toggle:c1,navOpened:e1(M),translate:e1(q),isMobile:W,showBackdrop:o1,isTopReached:B(()=>G.arrivedState.top)})}const s1=t=>(E("data-v-2cda3eb3"),t=t(),R(),t),a2={class:"z-30"},o2=s1(()=>_("div",{class:"spacer-left"},null,-1)),c2=s1(()=>_("div",{class:"ml-8"},null,-1)),s2={class:"z-20"},r2=f({props:{height:null,items:null},setup(t){const e=t;H(x=>({"5cb900a4":i(o)}));const{items:n,height:o}=k(e),a=S(null),{toggle:r,navOpened:l,translate:g,isMobile:v,isTopReached:y}=k(n2(a)),m=B(()=>y.value?"shadow-none":"shadow-md");return(x,K)=>{const V=t2,O=U1,P=q1;return c(),p("header",{ref_key:"header",ref:a,class:L([i(m),{opened:i(l)}]),style:x1({transform:i(l)?"translateY(0%)":i(g)?"translateY(-100%)":"translateY(0%)"})},[_("div",a2,[$(x.$slots,"prepend",{},void 0,!0)]),o2,s(O,{class:L(["z-20",{mobile:i(v),opened:i(l)}])},{default:d(()=>[$(x.$slots,"prepend-inner",{},void 0,!0),(c(!0),p(n1,null,$1(i(n),(D,H3)=>(c(),h(V,{key:D.name,to:D.href,text:D.name},null,8,["to","text"]))),128)),$(x.$slots,"append-inner",{},void 0,!0)]),_:3},8,["class"]),c2,_("div",s2,[$(x.$slots,"append",{},void 0,!0)]),s(A,{name:"translate-left",mode:"out-in"},{default:d(()=>[i(v)?(c(),h(P,{key:0,"aria-label":"Toggle Navigation visibility",onClick:i(r),opened:i(l),class:"ml-8 transition z-20"},null,8,["onClick","opened"])):C("",!0)]),_:1})],6)}}});var l2=u(r2,[["__scopeId","data-v-2cda3eb3"]]);const d2={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},_2=_("path",{d:"M3.55 18.54l1.41 1.41l1.8-1.79l-1.42-1.42M11 22.45h2V19.5h-2m1-14a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6c0-3.32-2.69-6-6-6m8 7h3v-2h-3m-2.76 7.66l1.8 1.79l1.41-1.41l-1.79-1.8m1.79-12.28l-1.41-1.41l-1.8 1.79l1.42 1.42M13 .55h-2V3.5h2m-9 7H1v2h3m2.76-7.66l-1.8-1.79l-1.41 1.41l1.79 1.8l1.42-1.42z",fill:"currentColor"},null,-1),i2=[_2];function p2(t,e){return c(),p("svg",d2,i2)}var u2={name:"mdi-white-balance-sunny",render:p2};const h2={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},v2=_("path",{d:"M17.75 4.09l-2.53 1.94l.91 3.06l-2.63-1.81l-2.63 1.81l.91-3.06l-2.53-1.94L12.44 4l1.06-3l1.06 3l3.19.09m3.5 6.91l-1.64 1.25l.59 1.98l-1.7-1.17l-1.7 1.17l.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95l2.06.05m-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85c-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14c.4-.4.82-.76 1.27-1.08c.75-.53 1.93.36 1.85 1.19c-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82c-2.81 3.14-2.7 7.96.31 10.98c3.02 3.01 7.84 3.12 10.98.31z",fill:"currentColor"},null,-1),m2=[v2];function f2(t,e){return c(),p("svg",h2,m2)}var g2={name:"mdi-weather-night",render:f2};const r1=M1(),y2=z1(r1);const $2=f({setup(t){return(e,n)=>{const o=g2,a=u2,r=T;return c(),h(r,{icon:"",onClick:n[0]||(n[0]=()=>i(y2)()),"aria-label":"Toggle Dark Button"},{default:d(()=>[s(A,{name:"scale",mode:"out-in"},{default:d(()=>[i(r1)?(c(),h(o,{key:0,class:"icon text-primary-dark"})):(c(),h(a,{key:1,class:"icon text-primary"}))]),_:1})]),_:1})}}});var x2=u($2,[["__scopeId","data-v-adb84208"]]);const M2=t=>(E("data-v-6a6194f6"),t=t(),R(),t),z2=M2(()=>_("p",{class:"font-bold text-2xl text-primary dark:text-primary-dark"},"JHR",-1)),w2=f({setup(t){H(l=>({"73c3aaa4":i(o)}));const e=[{name:"Home",href:"/"},{name:"Blog",href:"/blog"}],n=J(window),o=B(()=>`var(${n.arrivedState.top?"--header-expanded-height":"--header-default-height"})`),{toggle:a,showBackdrop:r}=e2();return(l,g)=>{const v=x2,y=l2,m=D1,x=Y("ClientOnly"),K=Y("RouterView"),V=V1;return c(),h(V,{class:"j-container"},{default:d(()=>[s(y,{height:"var(--header-height)",items:e},{prepend:d(()=>[z2]),append:d(()=>[s(v)]),_:1}),s(x,null,{default:d(()=>[s(m,{onClick:i(a),visible:i(r)},null,8,["onClick","visible"])]),_:1}),s(K,null,{default:d(({Component:O,route:P})=>[(c(),h(N(O),{key:P.path}))]),_:1})]),_:1})}}});var b2=u(w2,[["__scopeId","data-v-6a6194f6"]]);const k2={default:b2};function L2(t){return t.map(e=>{var n;return{path:e.path,component:k2[((n=e.meta)==null?void 0:n.layout)||"default"],children:[b(w({},e),{path:""})]}})}const S2={};function B2(t,e){const n=Y("router-view");return c(),h(n)}var I2=u(S2,[["render",B2]]);const C2="modulepreload",l1={},A2="/",z=function(e,n){return!n||n.length===0?e():Promise.all(n.map(o=>{if(o=`${A2}${o}`,o in l1)return;l1[o]=!0;const a=o.endsWith(".css"),r=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":C2,a||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),a)return new Promise((g,v)=>{l.addEventListener("load",g),l.addEventListener("error",v)})})).then(()=>e())};const E2=f({props:{clipped:{type:Boolean,default:!1}},setup(t){const e=t,{clipped:n}=k(e);return(o,a)=>(c(),p("div",{class:L(["j-content",{clipped:i(n)}])},[$(o.$slots,"default",{},void 0,!0)],2))}});var R2=u(E2,[["__scopeId","data-v-c95158a2"]]);const j2={},T2={class:"j-page"};function V2(t,e){return c(),p("div",T2,[$(t.$slots,"default",{},void 0,!0)])}var O2=u(j2,[["render",V2],["__scopeId","data-v-82e612b6"]]);const P2={key:0,class:"text-2xl font-bold uppercase mb-6 text-primary dark:text-primary-dark"},D2=f({props:{title:null},setup(t){const e=t;return(n,o)=>(c(),p("section",null,[e.title?(c(),p("h1",P2,F(e.title),1)):C("",!0),$(n.$slots,"default")]))}}),N2={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},H2=_("path",{d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z",fill:"currentColor"},null,-1),F2=[H2];function J2(t,e){return c(),p("svg",N2,F2)}var Y2={name:"mdi-github",render:J2};const q2={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},G2=_("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",fill:"currentColor"},null,-1),W2=[G2];function K2(t,e){return c(),p("svg",q2,W2)}var Q2={name:"mdi-linkedin",render:K2};const U2={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},X2=_("path",{d:"M11 4h2v12l5.5-5.5l1.42 1.42L12 19.84l-7.92-7.92L5.5 10.5L11 16V4z",fill:"currentColor"},null,-1),Z2=[X2];function t3(t,e){return c(),p("svg",U2,Z2)}var e3={name:"mdi-arrow-down",render:t3};const n3={},a3={class:"min-h-auto max-w-[50ch] lg:max-w-[auto] lg:ml-16 my-10 xl:my-0 xl:min-h-[var(--content-height)] box-border flex flex-col justify-end md:justify-center gap-1"},o3=_("h1",{class:"text-big-fluid font-bold !tracking-tight leading-16 uppercase text-primary dark:text-primary-dark"},"Jose Hermosilla Rodrigo",-1),c3=_("ol",{class:"mt-4 text-xl font-bold"},[_("li",null,"Software crafter"),_("li",null,"Geomatics Engineer (GIS & Cartography)"),_("li",null,"Just another human being")],-1),s3=_("div",{class:"mr-2"},"Want to know more?",-1),r3={class:"flex space-x-4"};function l3(t,e){const n=e3,o=T,a=a1,r=Q2,l=Y2;return c(),p("div",a3,[o3,c3,s(a,{is:"div",height:4,class:"my-6 w-max"},{default:d(()=>[s(o,{component:"a",href:"#about-section",primary:"",cta:""},{default:d(()=>[s3,s(n,{class:"ml-auto"})]),_:1})]),_:1}),_("div",r3,[s(o,{icon:"",component:"a",href:"https://es.linkedin.com/in/jose-%C3%A1ngel-hermosilla-rodrigo-70a590147",class:"text-2xl"},{default:d(()=>[s(r,{class:"text-blue-600 dark:text-primary-dark"})]),_:1}),s(o,{icon:"",component:"a",href:"https://github.com/jahermosilla",class:"text-2xl"},{default:d(()=>[s(l,{class:"text-gray-800 dark:text-gray-100"})]),_:1})])])}var d3=u(n3,[["render",l3]]);const _3={},i3={viewBox:"350 0 700 980"},p3=w1(`<path d="M 589.7188110351562 933.0328979492188 L 501.989501953125 837.9927978515625 L 468.35992431640625 750.2634887695312 L 449.3518981933594 627.4424438476562 L 431.8060302734375 625.9802856445312 L 379.1684265136719 517.78076171875 L 371.857666015625 438.8243713378906 L 399.63861083984375 399.34619140625 L 428.8817138671875 409.5812683105469 L 459.58697509765625 207.80381774902344 L 515.14892578125 124.4609603881836 L 703.7669677734375 25.034393310546875 L 766.6396484375 27.958703994750977 L 828.0501708984375 30.883014678955078 L 958.1820068359375 120.07449340820312 L 981.5764770507812 206.34165954589844 L 1004.970947265625 247.28201293945312 L 1019.592529296875 329.1627197265625 L 1021.0546875 434.43792724609375 L 1040.062744140625 437.3622131347656 L 1044.44921875 510.4700012207031 L 1004.970947265625 625.9802856445312 L 994.7359008789062 709.3231201171875 L 946.4847412109375 808.7496948242188 L 879.2255859375 870.1602172851562 L 798.8070678710938 922.7978515625 L 675.9860229492188 931.5707397460938 L 675.9860229492188 931.5707397460938" class="fill-light-100 dark:fill-primary-darker !stroke-none" data-v-a3904454></path><g transform="matrix(1.6333333333333333, 0, 0, 1.6333333333333333, 250.83333811187077, 4.0354447605750465e-7)" data-v-a3904454><g transform="translate(0.000000,600.000000) scale(0.100000,-0.100000)" data-v-a3904454><path d="M2825 5874 c-27 -8 -93 -19 -145 -25 -52 -6 -113 -15 -135 -21 -22
-5 -65 -14 -95 -20 -30 -6 -59 -14 -64 -19 -6 -5 -18 -9 -28 -9 -16 0 -143
-54 -191 -81 -10 -5 -37 -19 -60 -30 -23 -11 -51 -26 -62 -32 -11 -6 -33 -18
-50 -27 -59 -31 -81 -50 -109 -95 -19 -29 -38 -47 -55 -51 -14 -3 -35 -7 -47
-9 -11 -3 -26 -15 -33 -29 -8 -13 -35 -36 -62 -51 -27 -14 -60 -41 -74 -59
-13 -17 -51 -60 -84 -94 -34 -35 -73 -90 -91 -127 -17 -36 -36 -67 -41 -71 -5
-3 -20 -27 -33 -53 -14 -26 -32 -53 -40 -60 -9 -8 -16 -21 -16 -31 0 -10 -13
-43 -29 -74 -38 -71 -71 -188 -71 -248 0 -40 -20 -149 -51 -283 -5 -22 -15
-74 -23 -115 -7 -41 -16 -82 -20 -90 -3 -8 -10 -67 -16 -130 -5 -63 -16 -162
-25 -220 -12 -83 -13 -114 -4 -147 15 -55 7 -73 -31 -73 -22 0 -38 9 -57 30
-21 26 -32 30 -72 30 -53 0 -64 -7 -109 -66 -22 -29 -32 -53 -32 -78 0 -20 -9
-59 -21 -88 -30 -79 -34 -188 -8 -295 11 -48 22 -115 25 -147 5 -80 43 -232
69 -281 12 -22 25 -53 29 -70 4 -16 20 -47 37 -67 16 -20 29 -41 29 -45 0 -5
17 -29 38 -54 42 -51 64 -94 83 -158 17 -56 54 -91 95 -91 17 0 36 -6 42 -13
5 -6 13 -75 16 -151 7 -150 22 -273 37 -313 5 -13 9 -43 9 -67 0 -23 5 -47 12
-54 6 -6 15 -30 19 -54 13 -73 73 -255 90 -273 5 -5 9 -22 9 -38 0 -21 5 -28
18 -27 32 4 62 -12 68 -36 7 -27 -1 -44 -22 -44 -17 0 -19 -31 -2 -48 18 -18
25 -15 37 19 16 46 38 36 146 -69 32 -30 55 -35 55 -11 0 12 -76 88 -116 117
-19 13 -34 34 -37 52 -4 16 -25 50 -48 75 -37 40 -41 49 -36 81 5 29 3 35 -9
30 -10 -4 -18 4 -26 22 -6 15 -19 43 -29 63 -12 23 -18 53 -17 84 2 37 -2 50
-17 61 -17 13 -20 27 -21 97 0 51 -7 95 -17 117 -9 21 -20 94 -27 180 -7 80
-18 168 -26 196 -8 28 -17 90 -19 138 -4 71 -2 86 10 86 17 0 17 -6 16 135 -1
61 0 146 0 190 1 44 2 91 1 105 -1 51 20 236 30 268 5 18 12 59 14 90 2 31 8
93 14 137 27 202 30 356 7 318 -8 -13 -37 -159 -37 -186 0 -13 -11 -52 -25
-86 -23 -55 -25 -72 -20 -145 3 -48 0 -96 -6 -116 -10 -32 -14 -98 -22 -375
-9 -294 -20 -430 -39 -468 -10 -20 -24 -37 -31 -37 -20 1 -44 23 -52 50 -4 14
-16 37 -26 52 -11 14 -19 32 -19 38 0 19 -69 130 -107 173 -24 27 -33 47 -33
71 0 19 -5 38 -11 42 -6 3 -8 17 -4 31 4 16 1 31 -9 42 -18 20 -37 88 -43 158
-4 38 -8 50 -18 46 -9 -3 -16 4 -19 19 -30 143 -41 301 -26 361 18 73 25 79
84 75 l51 -3 3 34 c2 23 -3 40 -17 55 -26 28 -44 77 -33 88 13 13 120 -1 137
-18 7 -8 22 -14 33 -14 10 0 33 -7 51 -16 19 -9 36 -13 41 -8 5 5 6 43 2 84
-6 58 -4 85 8 118 9 24 21 44 26 45 10 2 9 39 -1 98 -4 23 -3 39 4 43 6 4 11
27 11 52 0 25 7 58 15 73 9 18 12 42 8 65 -3 20 -1 41 4 48 6 7 16 45 23 83 6
39 16 78 21 88 16 30 39 169 39 235 0 63 5 72 29 50 11 -11 12 -8 7 14 -6 27
5 94 26 153 6 17 10 42 10 57 -1 18 5 29 18 33 12 4 20 15 20 29 0 12 3 26 8
30 4 4 7 20 7 34 0 17 5 27 15 27 8 0 28 27 45 59 19 37 37 61 48 62 28 4 32
12 20 44 -10 27 -9 31 15 42 15 8 28 23 30 36 2 13 19 33 40 46 20 13 62 49
92 80 30 31 61 56 68 56 7 0 17 10 23 23 6 13 33 34 61 47 27 13 57 34 65 46
8 13 28 26 44 29 16 4 32 12 36 18 5 7 26 22 48 34 23 12 39 28 39 38 -1 11 4
14 17 10 14 -5 22 0 29 19 5 15 17 26 28 26 10 0 23 5 29 11 16 16 113 48 146
49 15 0 35 4 45 10 57 32 164 53 321 65 47 3 81 11 92 21 14 12 54 16 214 19
121 2 207 0 223 -6 15 -6 48 -12 74 -13 30 -2 56 -10 68 -21 13 -12 46 -22 87
-27 37 -4 71 -12 76 -17 6 -6 23 -7 38 -4 18 3 29 1 29 -6 0 -6 -4 -11 -10
-11 -5 0 -10 -7 -10 -15 0 -11 11 -15 40 -15 36 0 40 -2 40 -25 0 -20 5 -25
25 -25 14 0 25 5 25 10 0 17 29 11 50 -10 11 -11 34 -23 49 -26 17 -4 31 -14
34 -25 3 -12 14 -19 29 -19 14 0 35 -11 48 -25 13 -14 28 -25 33 -25 19 0 78
-52 104 -91 14 -21 32 -39 39 -39 7 0 20 -13 29 -29 10 -20 24 -31 42 -33 27
-3 39 -18 87 -113 14 -27 30 -57 35 -65 29 -45 41 -84 29 -91 -10 -6 -2 -30
31 -95 31 -62 40 -89 32 -97 -6 -6 -11 -25 -11 -43 0 -37 51 -155 79 -181 36
-34 94 -162 129 -283 19 -67 24 -105 22 -178 -2 -83 1 -96 19 -113 17 -16 19
-27 15 -86 -3 -42 0 -88 8 -118 11 -40 12 -121 6 -400 -4 -192 -11 -366 -16
-385 -4 -19 -4 -71 0 -115 4 -44 10 -105 12 -135 6 -99 5 -97 16 -79 5 9 9 56
9 105 0 203 8 349 22 391 6 21 21 56 31 77 19 38 20 41 3 69 -16 26 -17 46
-10 186 5 86 8 202 7 259 -1 141 -21 397 -32 428 -6 14 -10 40 -10 58 0 19 -6
51 -14 73 -8 22 -16 69 -19 104 -10 108 -70 255 -161 393 -39 58 -66 109 -66
125 0 14 -9 46 -20 70 -11 24 -20 57 -20 75 0 17 -7 44 -15 60 -8 15 -15 33
-15 40 0 6 -21 34 -46 61 -25 28 -54 63 -64 79 -10 15 -38 45 -63 65 -109 88
-313 221 -338 221 -9 0 -31 10 -50 23 -154 103 -190 120 -283 134 -50 7 -109
20 -131 29 -22 9 -74 23 -115 30 -99 18 -387 16 -455 -2z" data-v-a3904454></path><path d="M1893 5113 c-20 -7 -15 -23 6 -23 26 0 51 10 51 21 0 9 -36 11 -57 2z" data-v-a3904454></path><path d="M2775 5111 c-5 -9 31 -41 47 -41 16 0 7 30 -11 40 -24 12 -28 12 -36
1z" data-v-a3904454></path><path d="M1820 5069 c0 -24 -20 -43 -67 -65 -34 -15 -44 -41 -18 -50 16 -7 85
42 85 61 0 6 9 20 20 30 11 10 20 24 20 32 0 7 -9 13 -20 13 -14 0 -20 -7 -20
-21z" data-v-a3904454></path><path d="M2970 5021 c0 -12 41 -24 65 -19 33 6 19 23 -22 26 -25 2 -43 -1 -43
-7z" data-v-a3904454></path><path d="M2780 5005 c-30 -36 19 -66 139 -84 50 -8 78 -8 85 -1 5 5 7 12 4 15
-7 7 -106 45 -135 52 -12 3 -28 11 -34 19 -15 18 -43 18 -59 -1z" data-v-a3904454></path><path d="M3075 4990 c3 -5 15 -10 26 -10 10 0 19 5 19 10 0 6 -12 10 -26 10
-14 0 -23 -4 -19 -10z" data-v-a3904454></path><path d="M3350 4980 c0 -5 9 -10 20 -10 11 0 20 5 20 10 0 6 -9 10 -20 10 -11
0 -20 -4 -20 -10z" data-v-a3904454></path><path d="M3485 4941 c-51 -5 -60 -9 -60 -26 0 -25 20 -29 102 -20 42 4 66 12
70 21 3 8 4 16 2 18 -10 9 -60 12 -114 7z" data-v-a3904454></path><path d="M1652 4898 c-12 -12 -17 -68 -6 -68 12 0 43 45 44 63 0 20 -20 23
-38 5z" data-v-a3904454></path><path d="M3634 4896 c-3 -8 7 -36 22 -61 27 -46 28 -47 68 -42 29 4 54 0 85
-13 23 -11 47 -17 52 -14 14 8 11 35 -6 53 -8 9 -27 31 -43 50 -28 33 -31 34
-60 22 -26 -11 -34 -11 -54 3 -28 20 -57 21 -64 2z" data-v-a3904454></path><path d="M4230 4881 c0 -19 23 -35 34 -24 14 15 5 43 -14 43 -13 0 -20 -7 -20
-19z" data-v-a3904454></path><path d="M4340 4868 c0 -30 15 -52 29 -44 17 11 13 53 -5 60 -23 9 -24 8 -24
-16z" data-v-a3904454></path><path d="M1572 4788 c-14 -14 -16 -38 -3 -38 5 0 14 7 21 15 17 20 0 41 -18
23z" data-v-a3904454></path><path d="M1777 3430 c-15 -12 -43 -24 -62 -27 -51 -8 -43 -20 20 -28 30 -3 78
-15 107 -24 29 -10 91 -24 138 -31 90 -13 138 -22 210 -40 25 -6 79 -16 120
-21 147 -18 206 -28 249 -43 52 -19 102 -21 119 -4 16 16 15 63 0 76 -7 6 -30
13 -50 17 -21 4 -38 11 -38 15 0 16 -91 60 -154 75 -45 11 -87 13 -129 9 -49
-5 -71 -3 -95 10 -43 22 -61 20 -72 -9 -12 -31 -49 -33 -94 -6 -22 14 -36 17
-46 11 -20 -13 -100 -13 -100 0 0 12 -26 26 -66 34 -23 5 -37 2 -57 -14z" data-v-a3904454></path><path d="M1162 3413 c5 -25 28 -28 28 -4 0 12 -6 21 -16 21 -9 0 -14 -7 -12
-17z" data-v-a3904454></path><path d="M4794 3365 c-3 -8 1 -24 10 -37 20 -29 20 -71 0 -125 -17 -43 -16
-44 6 -68 22 -23 23 -32 21 -127 -2 -98 -20 -197 -40 -222 -4 -6 -11 -45 -14
-86 -10 -114 -24 -177 -48 -211 -18 -25 -27 -30 -49 -25 -32 6 -40 -6 -40 -62
0 -20 -7 -50 -15 -65 -8 -15 -17 -45 -21 -65 -3 -20 -15 -52 -25 -71 -14 -23
-17 -37 -10 -45 10 -12 6 -118 -5 -175 -4 -19 -7 -22 -14 -11 -11 18 -24 6
-16 -15 3 -9 11 -13 18 -9 8 5 9 0 3 -17 -4 -13 -10 -44 -12 -69 -3 -25 -14
-54 -24 -66 -12 -13 -19 -34 -18 -60 2 -126 -7 -154 -45 -154 -13 0 -26 -6
-29 -14 -7 -18 1 -26 25 -26 22 0 23 -25 3 -60 l-14 -25 -7 33 c-10 51 -29 32
-27 -27 2 -38 -1 -51 -12 -51 -9 0 -16 -16 -21 -45 -6 -43 -27 -61 -37 -32 -2
6 -8 9 -12 4 -5 -4 0 -13 10 -21 26 -19 14 -65 -29 -112 -20 -22 -36 -47 -36
-56 0 -14 -9 -18 -41 -18 -39 0 -41 -2 -35 -24 5 -19 1 -26 -14 -31 -21 -7
-50 -63 -50 -97 0 -26 -26 -33 -54 -14 -27 17 -38 10 -50 -31 -6 -18 -15 -23
-44 -24 -32 0 -34 -1 -14 -9 24 -10 27 -22 12 -51 -14 -25 -37 -24 -45 1 -7
23 -28 26 -44 6 -8 -10 -7 -19 8 -38 12 -15 16 -29 11 -38 -10 -16 -72 -18
-78 -2 -5 15 -32 16 -32 2 0 -5 4 -10 10 -10 15 0 50 -33 50 -47 0 -15 -26
-18 -34 -4 -3 5 -22 11 -41 13 -42 5 -63 -13 -40 -32 12 -10 18 -10 31 1 14
11 15 10 12 -11 -2 -18 -11 -26 -35 -31 -36 -7 -63 -25 -63 -43 0 -19 -87 -96
-109 -96 -11 0 -22 -8 -26 -19 -3 -10 -25 -31 -48 -47 -23 -16 -55 -39 -70
-51 -16 -13 -41 -23 -56 -23 -15 0 -32 -5 -39 -12 -16 -16 -15 -48 1 -48 21 0
101 31 117 45 8 7 26 16 40 20 14 4 34 15 45 26 51 46 63 56 100 79 22 13 63
48 91 77 28 29 57 53 64 53 7 0 22 7 32 16 14 14 20 14 33 4 13 -11 14 -8 10
21 -3 19 -3 28 1 22 6 -15 54 -18 54 -4 0 16 147 156 190 181 61 35 180 159
244 255 80 120 169 320 200 450 10 39 21 84 27 101 5 17 9 47 9 67 0 19 5 48
11 64 12 30 14 50 25 277 6 136 10 155 36 210 15 34 46 86 68 117 23 32 45 78
51 105 5 27 14 67 19 89 5 22 9 66 10 98 0 32 5 68 12 80 22 41 38 181 44 371
l5 189 -28 23 c-33 27 -51 30 -59 9z" data-v-a3904454></path><path d="M4159 3324 c-9 -11 -22 -14 -47 -9 -21 4 -38 2 -42 -4 -4 -8 -28 -8
-82 -1 -54 8 -83 8 -104 -1 -16 -6 -59 -15 -95 -20 -85 -11 -114 -24 -139 -66
-10 -18 -26 -33 -34 -33 -9 0 -21 -10 -27 -22 -20 -37 -47 -61 -63 -55 -9 4
-32 0 -53 -8 -26 -9 -31 -14 -17 -14 12 -1 31 -10 44 -21 34 -29 45 -25 76 28
17 30 22 33 51 27 24 -4 40 0 60 14 22 15 53 21 136 26 60 3 132 12 160 20 29
7 95 16 147 19 163 11 284 28 303 44 17 15 21 11 17 -22 -2 -23 48 -76 72 -76
19 0 24 15 8 25 -6 3 -7 17 -4 29 8 32 -13 103 -32 110 -43 16 -174 -2 -174
-24 0 -5 -14 -11 -31 -15 -39 -9 -114 22 -99 40 10 12 4 25 -10 25 -4 0 -13
-7 -21 -16z" data-v-a3904454></path><path d="M1005 3260 c20 -22 31 -20 22 5 -4 8 -14 15 -23 15 -16 0 -16 -2 1
-20z" data-v-a3904454></path><path d="M2757 3174 c-13 -13 -7 -24 14 -24 11 0 19 5 17 12 -5 14 -22 21 -31
12z" data-v-a3904454></path><path d="M1975 3142 c-11 -2 -33 -10 -50 -17 -16 -8 -41 -15 -55 -17 -45 -5
-26 -23 29 -26 34 -2 74 4 114 17 34 12 89 21 126 22 56 1 61 2 31 9 -46 10
-170 18 -195 12z" data-v-a3904454></path><path d="M2760 3089 c0 -22 81 -100 99 -97 9 2 17 15 19 31 3 23 0 27 -23 27
-14 0 -42 12 -61 26 -23 18 -34 22 -34 13z" data-v-a3904454></path><path d="M2155 3065 c-33 -8 -78 -14 -100 -15 -79 -1 -125 -49 -68 -71 22 -8
36 -6 74 11 72 34 95 25 115 -44 10 -31 60 -57 119 -61 17 -1 45 -5 62 -9 32
-7 33 -6 58 47 34 75 49 89 82 76 15 -5 33 -19 40 -30 8 -10 27 -26 43 -34 15
-8 34 -27 41 -43 7 -17 26 -34 43 -40 51 -20 53 2 5 50 -25 24 -52 55 -62 71
-10 15 -27 27 -38 27 -11 0 -28 9 -38 21 -13 16 -35 23 -101 31 -47 5 -93 14
-102 19 -23 13 -102 10 -173 -6z m61 -70 c-23 -18 -36 -11 -36 19 0 34 11 39
34 16 21 -21 21 -21 2 -35z m138 30 c30 -30 -15 -66 -56 -44 -24 13 -23 24 4
43 28 20 33 20 52 1z" data-v-a3904454></path><path d="M1753 3054 c-7 -19 14 -35 41 -32 29 4 30 23 1 36 -33 15 -34 15 -42
-4z" data-v-a3904454></path><path d="M1090 3040 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
-15 -4 -15 -10z" data-v-a3904454></path><path d="M2640 3015 c0 -8 7 -15 16 -15 14 0 14 3 4 15 -7 8 -14 15 -16 15 -2
0 -4 -7 -4 -15z" data-v-a3904454></path><path d="M3405 3006 c-9 -13 -25 -26 -35 -29 -13 -3 -20 -14 -20 -28 0 -12 -6
-30 -13 -38 -24 -30 -38 -91 -40 -177 -2 -71 1 -88 16 -98 9 -7 17 -18 17 -24
0 -24 21 -21 30 4 8 20 7 31 -3 43 -35 42 -49 194 -19 205 6 3 12 12 12 21 0
9 27 42 60 74 33 31 57 60 54 64 -15 15 -44 6 -59 -17z" data-v-a3904454></path><path d="M4063 3004 c-4 -11 -9 -12 -19 -3 -9 8 -55 9 -154 4 -131 -7 -144
-10 -171 -33 -27 -22 -28 -26 -15 -41 8 -9 18 -40 22 -69 5 -44 10 -53 30 -58
29 -7 197 4 205 14 3 4 12 27 19 52 7 25 19 50 27 56 14 12 63 7 63 -6 0 -4
23 -19 51 -34 56 -29 105 -33 134 -12 18 13 17 14 -8 30 -15 9 -39 24 -53 34
-15 9 -36 22 -47 29 -19 11 -20 13 -4 19 11 4 25 0 36 -10 10 -9 28 -16 42
-16 13 0 36 -6 51 -14 29 -15 38 -12 38 15 0 31 -53 50 -151 53 -71 3 -92 1
-96 -10z m-177 -70 c15 -22 15 -27 3 -35 -23 -14 -66 -10 -73 7 -9 22 11 54
34 54 11 0 27 -12 36 -26z" data-v-a3904454></path><path d="M3638 2984 c-5 -4 -8 -16 -8 -28 0 -14 3 -17 11 -9 6 6 9 19 7 28 -1
9 -6 13 -10 9z" data-v-a3904454></path><path d="M3568 2911 c-23 -23 -23 -31 0 -31 10 0 29 11 42 25 l23 25 -24 -1
c-13 0 -32 -8 -41 -18z" data-v-a3904454></path><path d="M2461 2851 c-10 -7 -8 -12 10 -25 13 -9 30 -16 37 -16 21 0 82 31 82
41 0 11 -111 11 -129 0z" data-v-a3904454></path><path d="M3590 2790 c0 -5 16 -10 36 -10 21 0 33 4 29 10 -3 6 -19 10 -36 10
-16 0 -29 -4 -29 -10z" data-v-a3904454></path><path d="M2230 2711 c23 -14 140 -18 127 -5 -3 3 -36 8 -74 10 -42 2 -62 0
-53 -5z" data-v-a3904454></path><path d="M3727 2669 c12 -12 62 -26 144 -40 40 -7 63 -7 85 2 27 12 24 13 -50
20 -44 5 -93 13 -109 19 -41 14 -84 13 -70 -1z" data-v-a3904454></path><path d="M3360 2528 c0 -36 4 -48 15 -48 19 0 19 18 0 61 l-14 34 -1 -47z" data-v-a3904454></path><path d="M4535 2300 c-4 -6 -3 -14 0 -20 9 -15 35 -12 35 4 0 17 -27 29 -35
16z" data-v-a3904454></path><path d="M3414 2156 c-7 -28 2 -49 17 -41 12 8 12 52 -1 60 -5 3 -12 -5 -16
-19z" data-v-a3904454></path><path d="M2750 2130 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
-15 -4 -15 -10z" data-v-a3904454></path><path d="M2546 1945 c-7 -20 4 -75 21 -101 11 -17 129 -84 147 -84 3 0 21 -11
40 -24 20 -13 59 -30 88 -36 64 -15 106 -36 128 -62 12 -15 30 -20 85 -22 99
-3 211 12 254 35 20 10 42 19 50 19 23 0 132 71 178 116 24 24 43 52 43 63 0
29 -11 26 -50 -14 -19 -19 -58 -44 -87 -55 -29 -11 -80 -33 -112 -49 -59 -30
-151 -51 -228 -51 -45 0 -120 28 -160 60 -14 11 -34 20 -43 20 -10 0 -23 6
-29 14 -6 8 -24 16 -39 19 -28 5 -56 15 -150 51 -54 20 -112 73 -112 101 0 20
-16 19 -24 0z" data-v-a3904454></path><path d="M4303 1764 c-22 -24 -30 -63 -17 -77 3 -3 21 8 39 26 28 27 31 34 22
54 -13 29 -17 29 -44 -3z" data-v-a3904454></path><path d="M1965 1696 c-21 -15 -12 -36 16 -36 12 0 19 7 19 19 0 27 -13 33 -35
17z" data-v-a3904454></path><path d="M2307 1593 c-14 -13 -6 -33 13 -33 11 0 20 4 20 9 0 13 -26 32 -33
24z" data-v-a3904454></path><path d="M2470 1585 c-21 -25 3 -39 58 -36 22 1 22 2 6 26 -18 28 -45 32 -64
10z" data-v-a3904454></path><path d="M3432 1578 c-19 -19 -14 -34 24 -68 38 -33 67 -36 72 -7 2 11 -6 20
-22 27 -14 5 -28 20 -32 35 -7 27 -23 32 -42 13z" data-v-a3904454></path><path d="M2191 1544 c-24 -20 -35 -24 -45 -15 -10 9 -17 7 -27 -5 -11 -14 -11
-18 4 -29 9 -7 17 -17 17 -24 0 -7 19 -11 49 -11 28 0 52 -4 56 -10 3 -5 20
-14 38 -19 61 -19 102 -36 142 -60 22 -13 58 -28 80 -32 22 -4 76 -14 120 -22
158 -30 294 -39 575 -39 l286 0 51 26 c28 14 54 30 58 36 3 5 16 10 27 10 11
0 35 9 53 20 17 11 49 22 70 25 35 4 54 12 44 18 -2 1 -18 12 -36 25 -42 29
-74 28 -104 -4 -60 -64 -162 -95 -329 -99 -58 -2 -148 -7 -201 -10 -70 -5
-123 -3 -190 8 -52 9 -152 21 -223 27 -70 7 -143 18 -162 26 -18 8 -45 14 -59
14 -30 0 -105 36 -105 50 0 6 -4 10 -9 10 -4 0 -36 16 -70 37 -40 23 -61 42
-61 55 0 25 -13 23 -49 -8z" data-v-a3904454></path><path d="M2814 1559 c-13 -22 12 -30 31 -9 18 19 18 20 -3 20 -11 0 -24 -5
-28 -11z" data-v-a3904454></path><path d="M2560 1546 c0 -7 7 -19 15 -26 19 -16 41 1 32 24 -8 20 -47 21 -47 2z" data-v-a3904454></path><path d="M3799 1533 c-7 -16 -15 -31 -17 -35 -8 -18 35 -6 63 16 l30 24 -28
11 c-16 6 -30 11 -31 11 -2 0 -9 -12 -17 -27z" data-v-a3904454></path><path d="M3142 1527 c-13 -15 -6 -73 9 -83 5 -3 12 3 16 13 4 10 13 23 21 29
20 15 11 48 -14 52 -11 2 -26 -3 -32 -11z" data-v-a3904454></path><path d="M2681 1516 c-9 -11 -8 -15 5 -20 19 -7 47 11 38 25 -8 13 -30 11 -43
-5z" data-v-a3904454></path><path d="M2800 1480 c0 -5 15 -10 33 -10 24 0 28 3 17 10 -20 13 -50 13 -50 0z" data-v-a3904454></path><path d="M2984 1469 c-18 -20 -18 -21 1 -35 28 -21 35 -17 35 15 0 39 -13 46
-36 20z" data-v-a3904454></path><path d="M2042 1423 c4 -21 33 -25 33 -3 0 8 -8 16 -18 18 -14 3 -18 -1 -15
-15z" data-v-a3904454></path><path d="M1763 1423 c-7 -3 -13 -11 -13 -19 0 -18 34 -18 49 0 9 11 8 15 -6
18 -10 3 -24 3 -30 1z" data-v-a3904454></path><path d="M1950 1247 c0 -8 7 -20 15 -27 12 -10 15 -10 15 3 0 8 -7 20 -15 27
-12 10 -15 10 -15 -3z" data-v-a3904454></path><path d="M1001 1185 c-24 -14 -74 -57 -110 -94 -94 -98 -116 -109 -266 -141
-55 -12 -99 -29 -191 -72 -33 -15 -64 -28 -68 -28 -8 0 -96 -40 -177 -81 -31
-16 -62 -29 -67 -29 -6 0 -31 -14 -56 -31 -81 -54 -49 -81 40 -34 26 14 53 25
59 25 7 0 18 7 25 15 7 8 19 15 27 15 13 0 45 13 140 56 17 8 41 14 52 14 12
0 41 10 64 21 23 12 98 36 167 54 143 37 195 58 203 80 4 8 13 15 20 15 8 0
20 7 27 15 7 8 18 15 25 15 19 0 40 -59 41 -120 1 -30 5 -78 9 -107 7 -46 5
-52 -14 -62 -27 -15 -26 -20 4 -55 17 -20 25 -41 25 -66 0 -21 7 -43 15 -50 9
-7 13 -21 10 -31 -9 -27 15 -87 37 -92 11 -3 18 -14 18 -31 0 -14 12 -37 26
-51 22 -22 25 -33 21 -61 -4 -25 -2 -34 8 -34 7 0 16 6 18 13 8 18 26 -11 20
-32 -3 -11 8 -27 30 -44 21 -16 38 -39 42 -57 5 -25 11 -30 26 -25 15 5 22 0
30 -25 9 -24 14 -28 25 -19 19 15 31 -16 14 -36 -11 -13 -3 -15 64 -15 51 0
76 4 76 12 0 9 -80 91 -138 140 -36 31 -85 94 -108 141 -14 27 -39 67 -55 90
-16 22 -29 46 -29 54 0 8 -15 58 -34 111 -34 99 -56 236 -56 352 0 78 27 207
50 240 9 14 21 35 24 48 7 20 4 22 -31 22 -22 0 -56 -11 -82 -25z" data-v-a3904454></path><path d="M2627 1134 c-14 -15 -6 -25 30 -41 21 -8 48 -24 62 -34 17 -13 40
-19 78 -19 30 0 63 -5 74 -10 10 -6 58 -13 106 -15 96 -5 203 13 279 45 25 11
55 20 67 21 15 1 11 4 -13 11 -24 7 -45 6 -71 -2 -21 -7 -54 -10 -75 -6 -22 4
-106 11 -189 16 -141 9 -270 23 -319 36 -12 3 -25 2 -29 -2z" data-v-a3904454></path><path d="M4128 1133 c-11 -3 -18 -14 -18 -29 0 -33 16 -30 35 6 16 30 15 31
-17 23z" data-v-a3904454></path><path d="M2120 992 c0 -12 23 -32 37 -32 9 0 8 6 -4 20 -18 21 -33 26 -33 12z" data-v-a3904454></path><path d="M1475 979 c-13 -19 54 -132 134 -227 44 -51 86 -99 94 -105 8 -7 18
-20 23 -29 5 -9 43 -52 84 -96 100 -106 203 -220 232 -257 13 -16 33 -39 45
-50 12 -11 47 -49 78 -84 54 -62 110 -111 127 -111 15 0 8 39 -10 57 -31 31
-77 107 -77 128 0 15 -7 20 -28 20 -20 1 -38 13 -62 40 -36 42 -95 109 -131
150 -12 13 -24 27 -25 32 -2 4 -17 16 -34 25 -16 9 -29 24 -27 32 1 8 -13 26
-32 39 -40 27 -96 93 -96 114 0 7 12 18 28 24 25 10 26 11 8 21 -14 8 -26 7
-46 -5 -26 -16 -29 -15 -50 3 -13 11 -27 20 -32 20 -6 0 -8 19 -6 43 3 38 1
42 -19 42 -33 1 -97 79 -89 109 5 19 1 25 -19 30 -14 4 -25 11 -25 16 0 16
-38 32 -45 19z" data-v-a3904454></path><path d="M1970 924 c0 -17 22 -14 28 4 2 7 -3 12 -12 12 -9 0 -16 -7 -16 -16z" data-v-a3904454></path><path d="M3830 901 c0 -5 -10 -11 -22 -13 -30 -4 -36 -28 -6 -28 13 0 29 -5
36 -12 9 -9 12 -7 12 9 0 12 3 28 6 37 4 11 1 16 -10 16 -9 0 -16 -4 -16 -9z" data-v-a3904454></path><path d="M2100 760 c0 -5 9 -10 20 -10 11 0 20 5 20 10 0 6 -9 10 -20 10 -11
0 -20 -4 -20 -10z" data-v-a3904454></path><path d="M2236 724 c-10 -26 7 -37 38 -23 32 15 29 33 -6 37 -17 2 -28 -3 -32
-14z" data-v-a3904454></path><path d="M3880 586 c-5 -13 -14 -27 -20 -31 -6 -4 -9 -14 -6 -22 8 -19 -77
-181 -120 -232 -19 -21 -34 -43 -34 -47 0 -5 -20 -49 -44 -99 -24 -49 -47
-101 -51 -114 -7 -23 -7 -23 17 -6 22 17 88 114 88 130 0 4 13 24 28 44 65 84
156 245 163 290 4 25 11 61 15 79 5 26 3 32 -10 32 -9 0 -21 -11 -26 -24z" data-v-a3904454></path><path d="M2152 568 c3 -7 13 -15 22 -16 12 -3 17 1 14 10 -3 7 -13 15 -22 16
-12 3 -17 -1 -14 -10z" data-v-a3904454></path><path d="M2217 513 c-14 -13 -7 -33 11 -33 19 0 42 18 42 32 0 10 -44 11 -53
1z" data-v-a3904454></path><path d="M4003 504 c-3 -8 -3 -37 1 -64 8 -60 -22 -224 -66 -355 -5 -16 -13
-42 -18 -57 l-9 -28 55 0 54 0 0 61 c0 52 3 62 20 66 17 4 20 14 20 57 1 65
15 82 74 91 46 7 49 6 44 -12 -4 -16 -1 -19 18 -15 19 3 34 -7 70 -47 36 -40
52 -51 73 -49 18 2 25 -1 23 -11 -3 -16 26 -51 43 -51 7 0 18 -7 25 -15 6 -8
21 -13 33 -12 14 1 22 -5 27 -22 8 -33 47 -43 158 -39 l87 3 -59 28 c-32 16
-86 50 -120 76 -34 26 -119 87 -191 135 -250 168 -276 188 -301 226 -29 44
-52 57 -61 34z" data-v-a3904454></path><path d="M2308 448 c9 -9 15 -9 24 0 9 9 7 12 -12 12 -19 0 -21 -3 -12 -12z" data-v-a3904454></path><path d="M3090 325 c0 -13 4 -14 23 -4 33 17 33 19 4 19 -18 0 -27 -5 -27 -15z" data-v-a3904454></path><path d="M3253 313 c-14 -5 -18 -33 -5 -33 4 0 14 5 22 10 17 11 2 30 -17 23z" data-v-a3904454></path></g></g>`,2),u3=[p3];function h3(t,e){return c(),p("svg",i3,u3)}var v3=u(_3,[["render",h3],["__scopeId","data-v-a3904454"]]);const m3={},d1=t=>(E("data-v-51d0784a"),t=t(),R(),t),f3={class:"outside clippy group"},g3={class:"clippy inside"},y3={class:"j-background"},$3={class:"slide-right !bg-transparent",style:{"--grid-row":"2 / span 2","--grid-col":"2 / span 2"}},x3=d1(()=>_("div",{class:"j-square j-square--right",style:{"--grid-row":"1 / span 3","--grid-col":"4"}},null,-1)),M3=d1(()=>_("div",{class:"j-square j-square--left",style:{"--grid-row":"2 / span 3","--grid-col":"1"}},null,-1));function z3(t,e){const n=v3;return c(),p("div",f3,[_("div",g3,[_("div",y3,[_("div",$3,[s(n,{class:"image-face !group-hover:stroke-transparent !group-hover:fill-current"})]),x3,M3])])])}var w3=u(m3,[["render",z3],["__scopeId","data-v-51d0784a"]]);const b3={},k3={class:"flex items-center justify-center w-auto"};function L3(t,e){const n=w3,o=d3,a=D2;return c(),h(a,{class:"relative grid grid-cols-1 md:grid-cols-2 gap-4"},{default:d(()=>[_("div",k3,[s(n,{class:"nonagon"})]),s(o)]),_:1})}var S3=u(b3,[["render",L3],["__scopeId","data-v-5ccbd6d1"]]);const B3={inheritAttrs:!1},I=f(b(w({},B3),{props:{component:null},setup(t){const e=t;let n=null;const o=()=>new Promise(m=>n=m),a=S(null),r="50px",l=([{isIntersecting:m}])=>m&&n(),{stop:g}=b1(a,l,{rootMargin:r}),v=S(!1);t1(g);const y=k1(()=>o().then(g).then(()=>v.value=!0).then(e.component));return(m,x)=>(c(),p(n1,null,[_("div",{ref_key:"target",ref:a,class:L({"min-h-screen":!v.value})},null,2),(c(),h(B1,null,{default:d(()=>[s(i(y),L1(S1(m.$attrs)),null,16)]),_:1}))],64))}})),I3={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},C3=_("path",{d:"M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8v12z",fill:"currentColor"},null,-1),A3=[C3];function E3(t,e){return c(),p("svg",I3,A3)}var R3={name:"mdi-arrow-up",render:E3};const j3={key:0,class:"!fixed bottom-3 right-3 z-999"},T3=f({setup(t){const{height:e}=I1(),{y:n,isScrolling:o}=J(window),a=B(()=>n.value>e.value),r=()=>!o.value&&window.scrollTo({top:0});return(l,g)=>{const v=R3,y=T;return c(),h(A,{name:"scale"},{default:d(()=>[i(a)?(c(),p("div",j3,[s(y,{onClick:r,icon:"",primary:""},{default:d(()=>[s(v,{class:"text-2xl"})]),_:1})])):C("",!0)]),_:1})}}});var V3=u(T3,[["__scopeId","data-v-6facf2de"]]);const O3=f({setup(t){const e=()=>z(()=>import("./AboutSection.49463eb3.js"),["assets/AboutSection.49463eb3.js","assets/vendor.9ea455b5.js"]),n=()=>z(()=>import("./ExperienceSection.4514ddd7.js"),["assets/ExperienceSection.4514ddd7.js","assets/ExperienceSection.9320c567.css","assets/vendor.9ea455b5.js","assets/use-resizable.d1bf1400.js"]),o=()=>z(()=>import("./SkillsSection.d07aa2d6.js"),["assets/SkillsSection.d07aa2d6.js","assets/SkillsSection.82e7059e.css","assets/vendor.9ea455b5.js"]),a=()=>z(()=>import("./FooterSection.de9ad6c9.js"),["assets/FooterSection.de9ad6c9.js","assets/FooterSection.5d16847e.css","assets/vendor.9ea455b5.js"]),r=()=>z(()=>import("./StackExchangeSection.64288fc4.js"),["assets/StackExchangeSection.64288fc4.js","assets/StackExchangeSection.47c00259.css","assets/vendor.9ea455b5.js","assets/use-resizable.d1bf1400.js"]);return(l,g)=>{const v=S3,y=O2,m=R2;return c(),p("main",null,[s(V3),s(y,null,{default:d(()=>[s(v)]),_:1}),s(m,{id:"about-section",clipped:""},{default:d(()=>[s(I,{component:e})]),_:1}),s(m,null,{default:d(()=>[s(I,{component:n})]),_:1}),s(m,null,{default:d(()=>[s(I,{component:o})]),_:1}),s(m,{clipped:""},{default:d(()=>[s(I,{component:r})]),_:1}),s(I,{component:a})])}}}),P3=[{path:"/blog",component:()=>z(()=>import("./blog.b6f2a14f.js"),["assets/blog.b6f2a14f.js","assets/vendor.9ea455b5.js"]),children:[{name:"blog",path:"",component:()=>z(()=>import("./index.f5454274.js"),["assets/index.f5454274.js","assets/vendor.9ea455b5.js"]),props:!0},{name:"blog-articles-hello-world",path:"articles/hello-world",component:()=>z(()=>import("./hello-world.3a7a7064.js"),["assets/hello-world.3a7a7064.js","assets/vendor.9ea455b5.js"]),props:!0}],props:!0},{name:"index",path:"/",component:O3,props:!0}];const D3=L2(P3),N3=t=>t.hash?{el:t.hash}:{top:0};C1(I2,{routes:D3,scrollBehavior:N3},async({app:t,router:e})=>{t.use(A1)});export{Y2 as M,u as _,a1 as a,D2 as b,T as c,e3 as d,r1 as i};
