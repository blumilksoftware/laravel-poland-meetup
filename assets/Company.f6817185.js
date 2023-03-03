import{n as A,j as b,y as E,e as k,s as Q,l as K,m as O,V as B,z as X,F as S,A as R,k as N,E as V,B as Y,R as q,H as Z,I as $,q as ee,o as t,c,a as o,_ as te,g,t as P,b as f,f as y,u as x,w as C,h as L,J as M,O as ae,d as se,r as ne,Q as le,X as re}from"./index.674e6576.js";import{P as oe,_ as H}from"./LinkedinIcon.a0691209.js";import{_ as W,L as ie}from"./LoadingSpinner.6f12cc4b.js";import{_ as G}from"./TwitterIcon.83858318.js";import{r as ue}from"./MapPinIcon.48b68913.js";import{u as ce,_ as de}from"./CompaniesMap.ad78271b.js";import{r as pe,_ as me,a as fe}from"./SlideShareIcon.d5344063.js";import{a as xe,f as he,P as I,M as z}from"./hidden.9a6ffb1f.js";import{_ as ve}from"./NoDataError.f019989e.js";function ye(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(n=>setTimeout(()=>{throw n}))}let _e=A({props:{onFocus:{type:Function,required:!0}},setup(e){let n=b(!0);return()=>n.value?E(he,{as:"button",type:"button",features:xe.Focusable,onFocus(u){u.preventDefault();let d,a=50;function p(){var l;if(a--<=0){d&&cancelAnimationFrame(d);return}if((l=e.onFocus)!=null&&l.call(e)){n.value=!1,cancelAnimationFrame(d);return}d=requestAnimationFrame(p)}d=requestAnimationFrame(p)}}):null}}),U=Symbol("TabsContext");function F(e){let n=Z(U,null);if(n===null){let u=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,F),u}return n}let ge=A({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:n,attrs:u,emit:d}){let a=b(null),p=b([]),l=b([]),h=k(()=>e.selectedIndex!==null),v=k(()=>h.value?e.selectedIndex:a.value),s={selectedIndex:a,orientation:k(()=>e.vertical?"vertical":"horizontal"),activation:k(()=>e.manual?"manual":"auto"),tabs:p,panels:l,setSelectedIndex(r){v.value!==r&&d("change",r),h.value||(a.value=r)},registerTab(r){p.value.includes(r)||p.value.push(r)},unregisterTab(r){let m=p.value.indexOf(r);m!==-1&&p.value.splice(m,1)},registerPanel(r){l.value.includes(r)||l.value.push(r)},unregisterPanel(r){let m=l.value.indexOf(r);m!==-1&&l.value.splice(m,1)}};return Q(U,s),K(()=>{var r;if(s.tabs.value.length<=0||e.selectedIndex===null&&a.value!==null)return;let m=s.tabs.value.map(T=>O(T)).filter(Boolean),_=m.filter(T=>!T.hasAttribute("disabled")),j=(r=e.selectedIndex)!=null?r:e.defaultIndex;if(j<0)a.value=m.indexOf(_[0]);else if(j>s.tabs.value.length)a.value=m.indexOf(_[_.length-1]);else{let T=m.slice(0,j),i=[...m.slice(j),...T].find(w=>_.includes(w));if(!i)return;a.value=m.indexOf(i)}}),()=>{let r={selectedIndex:a.value};return E(S,[p.value.length<=0&&E(_e,{onFocus:()=>{for(let m of p.value){let _=O(m);if((_==null?void 0:_.tabIndex)===0)return _.focus(),!0}return!1}}),B({theirProps:{...u,...X(e,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:r,slots:n,attrs:u,name:"TabGroup"})])}}}),be=A({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:n,slots:u}){let d=F("TabList");return()=>{let a={selectedIndex:d.selectedIndex.value},p={role:"tablist","aria-orientation":d.orientation.value};return B({ourProps:p,theirProps:e,slot:a,attrs:n,slots:u,name:"TabList"})}}}),we=A({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},setup(e,{attrs:n,slots:u,expose:d}){let a=F("Tab"),p=`headlessui-tabs-tab-${R()}`,l=b(null);d({el:l,$el:l}),N(()=>a.registerTab(l)),V(()=>a.unregisterTab(l));let h=k(()=>a.tabs.value.indexOf(l)),v=k(()=>h.value===a.selectedIndex.value);function s(i){let w=a.tabs.value.map(D=>O(D)).filter(Boolean);if(i.key===$.Space||i.key===$.Enter){i.preventDefault(),i.stopPropagation(),a.setSelectedIndex(h.value);return}switch(i.key){case $.Home:case $.PageUp:return i.preventDefault(),i.stopPropagation(),I(w,z.First);case $.End:case $.PageDown:return i.preventDefault(),i.stopPropagation(),I(w,z.Last)}if(ee(a.orientation.value,{vertical(){if(i.key===$.ArrowUp)return I(w,z.Previous|z.WrapAround);if(i.key===$.ArrowDown)return I(w,z.Next|z.WrapAround)},horizontal(){if(i.key===$.ArrowLeft)return I(w,z.Previous|z.WrapAround);if(i.key===$.ArrowRight)return I(w,z.Next|z.WrapAround)}}))return i.preventDefault()}function r(){var i;(i=O(l))==null||i.focus()}let m=b(!1);function _(){var i;m.value||(m.value=!0,!e.disabled&&((i=O(l))==null||i.focus(),a.setSelectedIndex(h.value),ye(()=>{m.value=!1})))}function j(i){i.preventDefault()}let T=Y(k(()=>({as:e.as,type:n.type})),l);return()=>{var i,w;let D={selected:v.value},J={ref:l,onKeydown:s,onFocus:a.activation.value==="manual"?r:_,onMousedown:j,onClick:_,id:p,role:"tab",type:T.value,"aria-controls":(w=(i=a.panels.value[h.value])==null?void 0:i.value)==null?void 0:w.id,"aria-selected":v.value,tabIndex:v.value?0:-1,disabled:e.disabled?!0:void 0};return B({ourProps:J,theirProps:e,slot:D,attrs:n,slots:u,name:"Tab"})}}}),ke=A({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:n,attrs:u}){let d=F("TabPanels");return()=>{let a={selectedIndex:d.selectedIndex.value};return B({theirProps:e,ourProps:{},slot:a,attrs:u,slots:n,name:"TabPanels"})}}}),$e=A({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(e,{attrs:n,slots:u,expose:d}){let a=F("TabPanel"),p=`headlessui-tabs-panel-${R()}`,l=b(null);d({el:l,$el:l}),N(()=>a.registerPanel(l)),V(()=>a.unregisterPanel(l));let h=k(()=>a.panels.value.indexOf(l)),v=k(()=>h.value===a.selectedIndex.value);return()=>{var s,r;let m={selected:v.value},_={ref:l,id:p,role:"tabpanel","aria-labelledby":(r=(s=a.tabs.value[h.value])==null?void 0:s.value)==null?void 0:r.id,tabIndex:v.value?0:-1};return B({ourProps:_,theirProps:e,slot:m,attrs:n,slots:u,features:q.Static|q.RenderStrategy,visible:v.value,name:"TabPanel"})}}});function ze(e,n){return t(),c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"})])}const Pe={},Te={class:"absolute top-0 left-0 h-24 w-24 translate-y-16 text-zinc-200 opacity-50 lg:-translate-x-1 lg:-translate-y-10",stroke:"currentColor",fill:"none",viewBox:"0 0 144 144","aria-hidden":"true"},je=o("path",{"stroke-width":"2",d:"M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"},null,-1),Ie=[je];function Se(e,n){return t(),c("svg",Te,Ie)}const Ae=te(Pe,[["render",Se]]),Ce={class:"my-10 bg-white tracking-tight text-zinc-700 shadow-lg"},Oe={key:0,class:"lg:py-18 mx-auto max-w-7xl p-4 sm:px-6 lg:px-8"},Be={class:"space-y-12"},Fe=o("h2",{class:"first-letter:text-laravel lg:py-18 w-full justify-center border-b py-10 px-7 text-2xl font-bold sm:px-6 md:text-4xl lg:px-8"}," O firmie ",-1),Le={class:"relative h-full text-xl md:text-3xl lg:flex lg:flex-row-reverse"},De={class:"my-10 w-full self-center lg:w-1/3"},Me=["src"],Ee={class:"text-md mx-4 py-3 text-left leading-8 text-zinc-600 sm:my-2 md:text-lg md:font-normal md:tracking-wide lg:w-2/3 lg:font-semibold"},Ne=o("div",{class:"my-5 w-full"},null,-1),qe={__name:"CompanyDetails",props:{company:{type:Object,default:()=>{}},meetups:{type:Array,default:()=>[]},name:{type:String,default:""}},setup(e){return(n,u)=>(t(),c("div",Ce,[e.company.bio?(t(),c("div",Oe,[o("div",Be,[Fe,o("div",Le,[g(Ae),o("div",De,[o("img",{class:"mx-auto h-14 lg:h-20",src:e.company.logo},null,8,Me)]),o("div",Ee,P(e.company.bio),1)]),Ne])])):f("",!0)]))}},Re={class:"relative overflow-hidden bg-white shadow-lg"},Ve={class:"relative py-5 sm:pb-8"},He={class:"mx-auto max-w-7xl px-4 sm:mt-20"},We={class:"block text-center"},Ge={class:"hover:text-laravel first-letter:text-laravel text-4xl font-bold tracking-tight text-gray-900 transition duration-200 hover:scale-110 sm:text-5xl md:text-6xl"},Ue={class:"text-laravel mt-4 text-xl"},Je={class:"my-3 mx-auto flex items-center justify-center space-x-5 sm:my-10"},Qe=["href"],Ke={key:4,href:"#map",class:"flex h-12 w-12 justify-center font-bold text-zinc-600 transition duration-200 hover:scale-110",alt:"location"},Xe={__name:"CompanyHeader",props:{company:{type:Object,default:()=>{}},name:{type:String,default:""}},setup(e){return(n,u)=>(t(),c("div",Re,[g(oe),o("div",Ve,[o("main",He,[o("div",We,[o("h1",Ge,P(e.company.name),1),o("p",Ue,P(e.company.location),1),o("div",Je,[e.company.linkedin?(t(),y(H,{key:0,href:e.company.linkedin,class:"h-9 w-9 pr-2 text-zinc-600"},null,8,["href"])):f("",!0),e.company.facebook?(t(),y(W,{key:1,href:e.company.facebook,class:"h-9 w-9 pr-2 text-zinc-600"},null,8,["href"])):f("",!0),e.company.twitter?(t(),y(G,{key:2,href:e.company.twitter,class:"h-9 w-9 pr-2 text-zinc-600"},null,8,["href"])):f("",!0),e.company.website?(t(),c("a",{key:3,href:e.company.website,target:"_blank",class:"align-center flex font-bold text-zinc-600 transition duration-200 hover:scale-110",alt:"website"},[g(x(ze),{class:"h-[40px] w-[40px]"})],8,Qe)):f("",!0),e.company.location?(t(),c("a",Ke,[g(x(ue),{class:"h-[43px] w-[43px]"})])):f("",!0)])])])])]))}},Ye="/images/placeholders/workingon.webp",Ze={class:"my-10 bg-white text-center text-lg font-bold tracking-tight text-zinc-700 shadow-lg md:text-2xl"},et={class:"lg:py-18 mx-auto block w-full max-w-7xl p-4 sm:px-6 lg:px-8"},tt=o("h2",{class:"first-letter:text-laravel lg:py-18 w-full justify-center border-b py-6 px-7 text-left text-2xl font-bold sm:px-6 md:text-4xl lg:px-8"}," Meetupowy wk\u0142ad ",-1),at={id:"tabs",class:"w-full px-2 py-16 sm:px-0"},st={role:"list",class:"divide-y divide-zinc-200"},nt={key:0,class:"block w-full justify-between space-y-2 border-b border-zinc-200 p-3 md:mr-5 md:ml-2"},lt=o("p",{class:"text-wrap"}," Ju\u017C nied\u0142ugo podzielimy si\u0119 naszymi efektami! ",-1),rt=o("img",{class:"center mx-auto max-h-72",src:Ye,alt:"brak wynik\xF3w"},null,-1),ot=[lt,rt],it={class:"relative items-center"},ut={key:0,class:"text-left font-medium leading-5"},ct={key:1,class:"flex items-center space-x-5"},dt=["src"],pt={class:"text-left font-medium leading-5"},mt={class:"mt-1 flex space-x-1 text-sm font-normal leading-5 text-gray-500 md:space-x-3"},ft={class:"block"},xt={key:0,class:"px-3 text-left"},ht={key:1,class:"flex w-fit rounded-full bg-zinc-100 px-3"},vt={key:0},yt={class:"flex space-x-6"},_t={__name:"ListTabs",props:{name:{type:String,default:""},meetups:{type:Array,default:()=>[]}},setup(e){const n=e,u=k(()=>{if(n.meetups.length===0)return{};const{lists:d}=ce(n.meetups,n.name);return d.value});return(d,a)=>{const p=ne("router-link"),l=le("auto-animate");return t(),c("div",Ze,[o("div",et,[tt,o("div",at,[g(x(ge),null,{default:C(()=>[g(x(be),{class:"flex space-x-1 rounded-xl bg-zinc-800 p-1"},{default:C(()=>[(t(!0),c(S,null,L(x(u),h=>(t(),y(x(we),{key:h,as:"template"},{default:C(({selected:v})=>[o("button",{class:M(["w-full rounded-lg py-2.5 text-base font-medium leading-5 text-zinc-700","ring-zinc-700/60 ring-offset-2 ring-offset-zinc-800 focus:outline-none focus:ring-2",v?"bg-white shadow":"text-zinc-100 hover:bg-white/[0.12] hover:text-white"])},P(h.name),3)]),_:2},1024))),128))]),_:1}),g(x(ke),{class:"mt-2"},{default:C(()=>[(t(!0),c(S,null,L(Object.values(x(u)),(h,v)=>(t(),y(x($e),{key:v,class:"max-h-96 overflow-auto rounded-xl bg-white p-3 ring-zinc-800/60 ring-offset-2 ring-offset-zinc-800 focus:outline-none focus:ring-2 lg:max-h-[600px]"},{default:C(()=>[ae((t(),c("ul",st,[h.data.size?f("",!0):(t(),c("li",nt,ot)),(t(!0),c(S,null,L(h.data,(s,r)=>(t(),c("li",{key:r,class:"flex justify-between p-3 hover:bg-gray-100 md:mr-5 md:ml-2"},[o("div",it,[s[1].title?(t(),c("h3",ut,P(s[1].title),1)):(t(),c("div",ct,[s[1].image?(t(),c("img",{key:0,src:s[1].image,class:"h-10 w-10 rounded-full hover:scale-110"},null,8,dt)):f("",!0),o("h3",pt,P(s[1].name),1)])),o("ul",mt,[o("div",ft,[s[1].dateFull?(t(),c("li",xt,P(s[1].dateFull),1)):f("",!0),s[1].location?(t(),c("li",ht,[s[1].location==="online"?(t(),y(x(pe),{key:0,class:"mr-1 h-4 w-4 self-center"})):f("",!0),se(" "+P(s[1].location),1)])):f("",!0)]),s[1].speakers?(t(),c("li",vt,[(t(!0),c(S,null,L(s[1].speakers,m=>(t(),c("ul",{key:m.name},[o("li",null,P(m.name),1)]))),128))])):f("",!0)]),h.id==="meetups"?(t(),y(p,{key:2,to:{name:"meetups.details",params:{id:s[1].id}},class:M(["absolute inset-0 rounded-md w-full","ring-zinc-400 focus:z-10 focus:outline-none focus:ring-2"])},null,8,["to"])):f("",!0),h.id==="speakers"?(t(),y(p,{key:3,to:{name:"people.details",params:{id:s[1].name}},class:M(["absolute inset-0 rounded-md w-full","ring-zinc-400 focus:z-10 focus:outline-none focus:ring-2"])},null,8,["to"])):f("",!0)]),o("div",yt,[s[1].youtube?(t(),y(me,{key:0,href:s[1].youtube,class:"h-7 w-7 self-center"},null,8,["href"])):f("",!0),s[1].slideshare?(t(),y(fe,{key:1,href:s[1].slideshare,class:"h-7 w-7 self-center"},null,8,["href"])):f("",!0),s[1].linkedin?(t(),y(H,{key:2,href:s[1].linkedin,class:"h-7 w-7 self-center"},null,8,["href"])):f("",!0),s[1].twitter?(t(),y(G,{key:3,href:s[1].twitter,class:"h-7 w-7 self-center"},null,8,["href"])):f("",!0),s[1].facebook?(t(),y(W,{key:4,href:s[1].facebook,class:"text-red h-7 w-7 self-center"},null,8,["href"])):f("",!0)])]))),128))])),[[l]])]),_:2},1024))),128))]),_:1})]),_:1})])])])}}},gt={key:0,class:"my-10 bg-white tracking-tight text-zinc-700 shadow-lg"},bt={class:"lg:py-18 mx-auto max-w-7xl p-4 sm:px-6 lg:px-8"},wt={class:"my-5 w-full"},kt={key:0,class:"align-center w-full"},$t=o("h2",{class:"first-letter:text-laravel lg:py-18 w-full justify-center border-b py-6 px-7 text-2xl font-bold sm:px-6 md:text-4xl lg:px-8"}," Lokalizacja ",-1),zt={__name:"CompanyMap",props:{company:{type:Object,default:()=>{}},name:{type:String,default:""}},setup(e){return(n,u)=>e.company.coordinates?(t(),c("div",gt,[o("div",bt,[o("div",wt,[e.company.coordinates?(t(),c("div",kt,[$t,g(de,{class:"my-5",data:e.company,zoom:15,center:[e.company.coordinates.lng,e.company.coordinates.lat]},null,8,["data","center"])])):f("",!0)])])])):f("",!0)}},Pt={key:1},Lt={__name:"Company",setup(e){const n=re();let u=b([]),d=b([]),a=b({}),p=b(!0),l=b(!1);const h=k(()=>{if(d.value.length===0)return{};for(let v of d.value)if(v.name.toLowerCase().replaceAll(" ","-")===n.params.id)return v;return a.value});return a.value=h,N(()=>{async function v(){const r=await fetch("/api/companies.json");return d.value=await r.json(),d}v().then(r=>{}).catch(()=>{l.value=!0});async function s(){const r=await fetch("/api/meetups.json");return u.value=await r.json(),u}s().then(r=>{}).catch(()=>{l.value=!0}),p.value=!1}),(v,s)=>(t(),c(S,null,[g(ve,{error:x(l),text:"Nie ma takiej firmy"},null,8,["error"]),x(p)?(t(),y(ie,{key:0})):f("",!0),!x(l)&&!x(p)?(t(),c("div",Pt,[g(Xe,{name:x(n).params.id,company:x(a).value},null,8,["name","company"]),g(qe,{name:x(n).params.id,company:x(a).value,meetups:x(u)},null,8,["name","company","meetups"]),g(_t,{name:x(n).params.id,meetups:x(u)},null,8,["name","meetups"]),g(zt,{name:x(n).params.id,company:x(a).value},null,8,["name","company"])])):f("",!0)],64))}};export{Lt as default};
