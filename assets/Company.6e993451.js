import{n as A,j as z,y as E,e as w,s as K,l as Q,m as C,V as B,z as X,F as S,A as R,k as N,E as V,B as Y,R as q,H as Z,I as k,q as ee,o as a,c,a as o,_ as te,g,t as P,b as x,f as _,u as v,w as O,h as L,J as M,O as ae,d as se,r as ne,S as le,$ as oe}from"./index.7821fc39.js";import{P as re,_ as H}from"./LinkedinIcon.42f14963.js";import{_ as W}from"./FacebookIcon.5fb0c8da.js";import{_ as G,u as ie,a as ue}from"./CompaniesMap.0223b510.js";import{r as ce}from"./MapPinIcon.e6762ef8.js";import{r as de,_ as pe,S as fe}from"./SlideShareIcon.993ca1a7.js";import{a as me,f as xe,P as j,M as $}from"./hidden.edbcc23e.js";function he(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(n=>setTimeout(()=>{throw n}))}let ve=A({props:{onFocus:{type:Function,required:!0}},setup(e){let n=z(!0);return()=>n.value?E(xe,{as:"button",type:"button",features:me.Focusable,onFocus(i){i.preventDefault();let d,t=50;function f(){var l;if(t--<=0){d&&cancelAnimationFrame(d);return}if((l=e.onFocus)!=null&&l.call(e)){n.value=!1,cancelAnimationFrame(d);return}d=requestAnimationFrame(f)}d=requestAnimationFrame(f)}}):null}}),U=Symbol("TabsContext");function F(e){let n=Z(U,null);if(n===null){let i=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,F),i}return n}let ye=A({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:n,attrs:i,emit:d}){let t=z(null),f=z([]),l=z([]),m=w(()=>e.selectedIndex!==null),h=w(()=>m.value?e.selectedIndex:t.value),s={selectedIndex:t,orientation:w(()=>e.vertical?"vertical":"horizontal"),activation:w(()=>e.manual?"manual":"auto"),tabs:f,panels:l,setSelectedIndex(u){h.value!==u&&d("change",u),m.value||(t.value=u)},registerTab(u){f.value.includes(u)||f.value.push(u)},unregisterTab(u){let p=f.value.indexOf(u);p!==-1&&f.value.splice(p,1)},registerPanel(u){l.value.includes(u)||l.value.push(u)},unregisterPanel(u){let p=l.value.indexOf(u);p!==-1&&l.value.splice(p,1)}};return K(U,s),Q(()=>{var u;if(s.tabs.value.length<=0||e.selectedIndex===null&&t.value!==null)return;let p=s.tabs.value.map(T=>C(T)).filter(Boolean),y=p.filter(T=>!T.hasAttribute("disabled")),I=(u=e.selectedIndex)!=null?u:e.defaultIndex;if(I<0)t.value=p.indexOf(y[0]);else if(I>s.tabs.value.length)t.value=p.indexOf(y[y.length-1]);else{let T=p.slice(0,I),r=[...p.slice(I),...T].find(b=>y.includes(b));if(!r)return;t.value=p.indexOf(r)}}),()=>{let u={selectedIndex:t.value};return E(S,[f.value.length<=0&&E(ve,{onFocus:()=>{for(let p of f.value){let y=C(p);if((y==null?void 0:y.tabIndex)===0)return y.focus(),!0}return!1}}),B({theirProps:{...i,...X(e,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:u,slots:n,attrs:i,name:"TabGroup"})])}}}),_e=A({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:n,slots:i}){let d=F("TabList");return()=>{let t={selectedIndex:d.selectedIndex.value},f={role:"tablist","aria-orientation":d.orientation.value};return B({ourProps:f,theirProps:e,slot:t,attrs:n,slots:i,name:"TabList"})}}}),ge=A({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},setup(e,{attrs:n,slots:i,expose:d}){let t=F("Tab"),f=`headlessui-tabs-tab-${R()}`,l=z(null);d({el:l,$el:l}),N(()=>t.registerTab(l)),V(()=>t.unregisterTab(l));let m=w(()=>t.tabs.value.indexOf(l)),h=w(()=>m.value===t.selectedIndex.value);function s(r){let b=t.tabs.value.map(D=>C(D)).filter(Boolean);if(r.key===k.Space||r.key===k.Enter){r.preventDefault(),r.stopPropagation(),t.setSelectedIndex(m.value);return}switch(r.key){case k.Home:case k.PageUp:return r.preventDefault(),r.stopPropagation(),j(b,$.First);case k.End:case k.PageDown:return r.preventDefault(),r.stopPropagation(),j(b,$.Last)}if(ee(t.orientation.value,{vertical(){if(r.key===k.ArrowUp)return j(b,$.Previous|$.WrapAround);if(r.key===k.ArrowDown)return j(b,$.Next|$.WrapAround)},horizontal(){if(r.key===k.ArrowLeft)return j(b,$.Previous|$.WrapAround);if(r.key===k.ArrowRight)return j(b,$.Next|$.WrapAround)}}))return r.preventDefault()}function u(){var r;(r=C(l))==null||r.focus()}let p=z(!1);function y(){var r;p.value||(p.value=!0,!e.disabled&&((r=C(l))==null||r.focus(),t.setSelectedIndex(m.value),he(()=>{p.value=!1})))}function I(r){r.preventDefault()}let T=Y(w(()=>({as:e.as,type:n.type})),l);return()=>{var r,b;let D={selected:h.value},J={ref:l,onKeydown:s,onFocus:t.activation.value==="manual"?u:y,onMousedown:I,onClick:y,id:f,role:"tab",type:T.value,"aria-controls":(b=(r=t.panels.value[m.value])==null?void 0:r.value)==null?void 0:b.id,"aria-selected":h.value,tabIndex:h.value?0:-1,disabled:e.disabled?!0:void 0};return B({ourProps:J,theirProps:e,slot:D,attrs:n,slots:i,name:"Tab"})}}}),be=A({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:n,attrs:i}){let d=F("TabPanels");return()=>{let t={selectedIndex:d.selectedIndex.value};return B({theirProps:e,ourProps:{},slot:t,attrs:i,slots:n,name:"TabPanels"})}}}),we=A({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(e,{attrs:n,slots:i,expose:d}){let t=F("TabPanel"),f=`headlessui-tabs-panel-${R()}`,l=z(null);d({el:l,$el:l}),N(()=>t.registerPanel(l)),V(()=>t.unregisterPanel(l));let m=w(()=>t.panels.value.indexOf(l)),h=w(()=>m.value===t.selectedIndex.value);return()=>{var s,u;let p={selected:h.value},y={ref:l,id:f,role:"tabpanel","aria-labelledby":(u=(s=t.tabs.value[m.value])==null?void 0:s.value)==null?void 0:u.id,tabIndex:h.value?0:-1};return B({ourProps:y,theirProps:e,slot:p,attrs:n,slots:i,features:q.Static|q.RenderStrategy,visible:h.value,name:"TabPanel"})}}});function ke(e,n){return a(),c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"})])}const $e={},ze={class:"absolute top-0 left-0 h-24 w-24 translate-y-16 text-zinc-200 opacity-50 lg:-translate-x-1 lg:-translate-y-10",stroke:"currentColor",fill:"none",viewBox:"0 0 144 144","aria-hidden":"true"},Pe=o("path",{"stroke-width":"2",d:"M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"},null,-1),Te=[Pe];function Ie(e,n){return a(),c("svg",ze,Te)}const je=te($e,[["render",Ie]]),Se={class:"my-10 bg-white tracking-tight text-zinc-700 shadow-lg"},Ae={key:0,class:"lg:py-18 mx-auto max-w-7xl p-4 sm:px-6 lg:px-8"},Oe={class:"space-y-12"},Ce=o("h2",{class:"first-letter:text-laravel lg:py-18 w-full justify-center border-b py-10 px-7 text-2xl font-bold sm:px-6 md:text-4xl lg:px-8"}," O firmie ",-1),Be={class:"relative h-full text-xl md:text-3xl lg:flex lg:flex-row-reverse"},Fe={class:"my-10 w-full self-center lg:w-1/3"},Le=["src"],De={class:"text-md mx-4 py-3 text-left leading-8 text-zinc-600 sm:my-2 md:text-lg md:font-normal md:tracking-wide lg:w-2/3 lg:font-semibold"},Me=o("div",{class:"my-5 w-full"},null,-1),Ee={__name:"CompanyDetails",props:{company:{type:Object,default:()=>{}},meetups:{type:Array,default:()=>[]},name:{type:String,default:""}},setup(e){return(n,i)=>(a(),c("div",Se,[e.company.bio?(a(),c("div",Ae,[o("div",Oe,[Ce,o("div",Be,[g(je),o("div",Fe,[o("img",{class:"mx-auto h-14 lg:h-20",src:e.company.logo},null,8,Le)]),o("div",De,P(e.company.bio),1)]),Me])])):x("",!0)]))}},Ne={class:"relative overflow-hidden bg-white shadow-lg"},qe={class:"relative py-5 sm:pb-8"},Re={class:"mx-auto max-w-7xl px-4 sm:mt-20"},Ve={class:"block text-center"},He={class:"hover:text-laravel first-letter:text-laravel text-4xl font-bold tracking-tight text-gray-900 transition duration-200 hover:scale-110 sm:text-5xl md:text-6xl"},We={class:"text-laravel mt-4 text-xl"},Ge={class:"my-3 mx-auto flex items-center justify-center space-x-5 sm:my-10"},Ue=["href"],Je={key:4,href:"#map",class:"flex h-12 w-12 justify-center font-bold text-zinc-600 transition duration-200 hover:scale-110",alt:"location"},Ke={__name:"CompanyHeader",props:{company:{type:Object,default:()=>{}},name:{type:String,default:""}},setup(e){return(n,i)=>(a(),c("div",Ne,[g(re),o("div",qe,[o("main",Re,[o("div",Ve,[o("h1",He,P(e.company.name),1),o("p",We,P(e.company.location),1),o("div",Ge,[e.company.linkedin?(a(),_(H,{key:0,href:e.company.linkedin,class:"h-9 w-9 pr-2 text-zinc-600"},null,8,["href"])):x("",!0),e.company.facebook?(a(),_(W,{key:1,href:e.company.facebook,class:"h-9 w-9 pr-2 text-zinc-600"},null,8,["href"])):x("",!0),e.company.twitter?(a(),_(G,{key:2,href:e.company.twitter,class:"h-9 w-9 pr-2 text-zinc-600"},null,8,["href"])):x("",!0),e.company.website?(a(),c("a",{key:3,href:e.company.website,target:"_blank",class:"align-center flex font-bold text-zinc-600 transition duration-200 hover:scale-110",alt:"website"},[g(v(ke),{class:"h-[40px] w-[40px]"})],8,Ue)):x("",!0),e.company.location?(a(),c("a",Je,[g(v(ce),{class:"h-[43px] w-[43px]"})])):x("",!0)])])])])]))}},Qe="/laravel-poland-meetup/images/placeholders/workingon.webp",Xe={class:"my-10 bg-white text-center text-lg font-bold tracking-tight text-zinc-700 shadow-lg md:text-2xl"},Ye={class:"lg:py-18 mx-auto block w-full max-w-7xl p-4 sm:px-6 lg:px-8"},Ze=o("h2",{class:"first-letter:text-laravel lg:py-18 w-full justify-center border-b py-6 px-7 text-left text-2xl font-bold sm:px-6 md:text-4xl lg:px-8"}," Meetupowy wk\u0142ad ",-1),et={id:"tabs",class:"w-full px-2 py-16 sm:px-0"},tt={role:"list",class:"divide-y divide-zinc-200"},at={key:0,class:"block w-full justify-between space-y-2 border-b border-zinc-200 p-3 md:mr-5 md:ml-2"},st=o("p",{class:"text-wrap"}," Ju\u017C nied\u0142ugo podzielimy si\u0119 naszymi efektami! ",-1),nt=o("img",{class:"center mx-auto max-h-72",src:Qe,alt:"brak wynik\xF3w"},null,-1),lt=[st,nt],ot={class:"relative items-center"},rt={key:0,class:"text-left font-medium leading-5"},it={key:1,class:"flex items-center space-x-5"},ut=["src"],ct={class:"text-left font-medium leading-5"},dt={class:"mt-1 flex space-x-1 text-sm font-normal leading-5 text-gray-500 md:space-x-3"},pt={class:"block"},ft={key:0,class:"px-3 text-left"},mt={key:1,class:"flex w-fit rounded-full bg-zinc-100 px-3"},xt={key:0},ht={class:"flex space-x-6"},vt={__name:"ListTabs",props:{name:{type:String,default:""},meetups:{type:Array,default:()=>[]}},setup(e){const n=e,i=w(()=>{if(n.meetups.length===0)return{};const{lists:d}=ie(n.meetups,n.name);return d.value});return(d,t)=>{const f=ne("router-link"),l=le("auto-animate");return a(),c("div",Xe,[o("div",Ye,[Ze,o("div",et,[g(v(ye),null,{default:O(()=>[g(v(_e),{class:"flex space-x-1 rounded-xl bg-zinc-800 p-1"},{default:O(()=>[(a(!0),c(S,null,L(v(i),m=>(a(),_(v(ge),{key:m,as:"template"},{default:O(({selected:h})=>[o("button",{class:M(["w-full rounded-lg py-2.5 text-base font-medium leading-5 text-zinc-700","ring-zinc-700/60 ring-offset-2 ring-offset-zinc-800 focus:outline-none focus:ring-2",h?"bg-white shadow":"text-zinc-100 hover:bg-white/[0.12] hover:text-white"])},P(m.name),3)]),_:2},1024))),128))]),_:1}),g(v(be),{class:"mt-2"},{default:O(()=>[(a(!0),c(S,null,L(Object.values(v(i)),(m,h)=>(a(),_(v(we),{key:h,class:"max-h-96 overflow-auto rounded-xl bg-white p-3 ring-zinc-800/60 ring-offset-2 ring-offset-zinc-800 focus:outline-none focus:ring-2 lg:max-h-[600px]"},{default:O(()=>[ae((a(),c("ul",tt,[m.data.size?x("",!0):(a(),c("li",at,lt)),(a(!0),c(S,null,L(m.data,(s,u)=>(a(),c("li",{key:u,class:"flex justify-between rounded-md p-3 hover:bg-gray-100 md:mr-5 md:ml-2"},[o("div",ot,[s[1].title?(a(),c("h3",rt,P(s[1].title),1)):(a(),c("div",it,[s[1].image?(a(),c("img",{key:0,src:s[1].image,class:"h-10 w-10 rounded-full hover:scale-110"},null,8,ut)):x("",!0),o("h3",ct,P(s[1].name),1)])),o("ul",dt,[o("div",pt,[s[1].dateFull?(a(),c("li",ft,P(s[1].dateFull),1)):x("",!0),s[1].location?(a(),c("li",mt,[s[1].location==="online"?(a(),_(v(de),{key:0,class:"mr-1 h-4 w-4 self-center"})):x("",!0),se(" "+P(s[1].location),1)])):x("",!0)]),s[1].speakers?(a(),c("li",xt,[(a(!0),c(S,null,L(s[1].speakers,p=>(a(),c("ul",{key:p.name},[o("li",null,P(p.name),1)]))),128))])):x("",!0)]),m.id==="meetups"?(a(),_(f,{key:2,to:{name:"meetups.details",params:{id:s[1].id}},class:M(["absolute inset-0 rounded-md w-full","ring-zinc-400 focus:z-10 focus:outline-none focus:ring-2"])},null,8,["to"])):x("",!0),m.id==="speakers"?(a(),_(f,{key:3,to:{name:"people.details",params:{id:s[1].name}},class:M(["absolute inset-0 rounded-md w-full","ring-zinc-400 focus:z-10 focus:outline-none focus:ring-2"])},null,8,["to"])):x("",!0)]),o("div",ht,[s[1].youtube?(a(),_(pe,{key:0,href:s[1].youtube,class:"h-7 w-7 self-center"},null,8,["href"])):x("",!0),s[1].slideshare?(a(),_(fe,{key:1,href:s[1].slideshare,class:"h-7 w-7 self-center"},null,8,["href"])):x("",!0),s[1].linkedin?(a(),_(H,{key:2,href:s[1].linkedin,class:"h-7 w-7 self-center"},null,8,["href"])):x("",!0),s[1].twitter?(a(),_(G,{key:3,href:s[1].twitter,class:"h-7 w-7 self-center"},null,8,["href"])):x("",!0),s[1].facebook?(a(),_(W,{key:4,href:s[1].facebook,class:"text-red h-7 w-7 self-center"},null,8,["href"])):x("",!0)])]))),128))])),[[l]])]),_:2},1024))),128))]),_:1})]),_:1})])])])}}},yt={key:0,class:"my-10 bg-white tracking-tight text-zinc-700 shadow-lg"},_t={class:"lg:py-18 mx-auto max-w-7xl p-4 sm:px-6 lg:px-8"},gt={class:"my-5 w-full"},bt={key:0,class:"align-center w-full"},wt=o("h2",{class:"first-letter:text-laravel lg:py-18 w-full justify-center border-b py-6 px-7 text-2xl font-bold sm:px-6 md:text-4xl lg:px-8"}," Lokalizacja ",-1),kt={__name:"CompanyMap",props:{company:{type:Object,default:()=>{}},name:{type:String,default:""}},setup(e){return(n,i)=>e.company.coordinates?(a(),c("div",yt,[o("div",_t,[o("div",gt,[e.company.coordinates?(a(),c("div",bt,[wt,g(ue,{class:"my-5",data:e.company,zoom:15,center:[e.company.coordinates.lng,e.company.coordinates.lat]},null,8,["data","center"])])):x("",!0)])])])):x("",!0)}},At={__name:"Company",setup(e){const n=oe();let i=z([]),d=z([]),t=z({});const f=w(()=>{if(d.value.length===0)return{};for(let l of d.value)if(l.name===n.params.id)return l;return t.value});return t.value=f,N(()=>{async function l(){const h=await fetch("/api/companies.json");return d.value=await h.json(),d}l().then(h=>{});async function m(){const h=await fetch("/api/meetups.json");return i.value=await h.json(),i}m().then(h=>{})}),(l,m)=>(a(),c(S,null,[g(Ke,{name:v(n).params.id,company:v(t).value},null,8,["name","company"]),g(Ee,{name:v(n).params.id,company:v(t).value,meetups:v(i)},null,8,["name","company","meetups"]),g(vt,{name:v(n).params.id,meetups:v(i)},null,8,["name","meetups"]),g(kt,{name:v(n).params.id,company:v(t).value},null,8,["name","company"])],64))}};export{At as default};
