import{o as t,c as s,a as e,g as n,t as c,b as i,u as m,f as p,r as g,F as h,h as f,d as y,w as x,j as v,S as w,k as b,Z as k}from"./index.0e78de9d.js";import{_ as z,L as $}from"./LoadingSpinner.a185f334.js";import{P as j}from"./PulseBackgroundAnimation.fad6dca4.js";import{r as M}from"./SignalIcon.ca33e21a.js";import{r as V,_ as H}from"./person.fd9fe808.js";import{_ as A}from"./LinkedinIcon.b0fa273b.js";import{_ as C,a as B}from"./SlideShareIcon.40153929.js";function S(o,r){return t(),s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"})])}const F={class:"relative overflow-hidden bg-white"},P={class:"relative z-10 mx-auto max-w-7xl space-y-5 py-16 px-4 text-center sm:py-24 sm:px-6 lg:block lg:justify-center lg:px-8"},L={key:0,class:"text-laravel text-4xl font-bold tracking-tight sm:text-5xl"},N={class:"space-y-2 text-xl text-gray-500 sm:text-2xl"},T={class:"flex items-center justify-center"},Z={class:"flex items-center justify-center"},E={class:"flex justify-center text-gray-500 sm:text-2xl"},D=["href"],G=e("span",null," Sprawd\u017A wydarzenie na Facebooku! ",-1),O={__name:"MeetupHeader",props:{meetup:{type:Object,default:()=>{}}},setup(o){return(r,u)=>(t(),s("div",F,[n(j),e("div",P,[o.meetup?(t(),s("h1",L,c(o.meetup.name),1)):i("",!0),e("div",N,[e("div",T,[n(m(S),{class:"mr-1.5 h-7 w-7 shrink-0 text-gray-400","aria-hidden":"true"}),e("p",null,c(o.meetup.dateFull),1)]),e("div",Z,[o.meetup.location==="online"?(t(),p(m(M),{key:0,class:"mr-1.5 h-7 w-7 shrink-0 text-gray-400","aria-hidden":"true"})):i("",!0),e("p",null,c(o.meetup.location),1)])]),e("div",E,[e("a",{href:o.meetup.facebookEvent,class:"flex justify-center space-x-5"},[G,n(z,{href:o.meetup.facebook,class:"h-6 w-6 self-center"},null,8,["href"])],8,D)])])]))}},R={class:"mt-12 overflow-hidden bg-white text-zinc-700"},U=e("div",{class:"border-b border-zinc-200 px-4 py-5 sm:px-6"},[e("h3",{class:"pl-4 text-xl font-medium leading-8"}," Prezentacje ")],-1),Y={role:"list",class:"divide-y divide-zinc-200"},q={class:"block p-6"},I={class:"mb-10 flex text-lg font-medium"},J={class:"flex w-full justify-center"},K={class:"block self-center lg:w-1/3"},Q={key:0,class:"mx-9 -mt-5 mb-5 flex"},W=e("p",{class:"mr-3 text-zinc-500"}," Tagi: ",-1),X={class:"flex w-full space-x-2 text-zinc-400"},ee={href:"#",class:"underline"},te={class:"w-full flex-col"},se={class:"mx-9 block items-center space-y-4 text-base sm:flex sm:space-y-0 sm:space-x-16"},ae=["href"],le={class:"h-6 w-6"},oe=e("p",{class:"group-hover:text-laravel"}," Zobacz na YouTube ",-1),ne=["href"],ie=e("p",{class:"group-hover:text-laravel"}," Zobacz na SlideShare ",-1),ce={class:"text-md m-auto flex w-full justify-center"},re={class:"block w-fit md:ml-0"},de=["src"],me={key:1,class:"mx-auto rounded-full shadow-xl",src:H,alt:""},ue={class:"my-auto ml-6 md:mx-6"},he=e("p",{class:"-mb-3 text-sm text-zinc-500"}," Prelegent: ",-1),_e={class:"text-laravel my-3 text-lg font-medium leading-6 sm:shrink-0"},fe={class:"text-zinc-600"},xe={key:0,class:"my-4 flex space-x-3"},ve=e("div",{class:"mx-auto hidden min-w-0 flex-1 justify-center px-4 lg:flex lg:w-2/3"},[e("div",{class:"relative hidden lg:block"},[e("iframe",{class:"relative",src:"//www.slideshare.net/slideshow/embed_code/key/o9jxGUln7m5Vat",width:"595",height:"385",frameborder:"0",marginwidth:"0",marginheight:"0",scrolling:"no",style:{border:"1px solid #CCC","border-width":"1px","margin-bottom":"10px","max-width":"100%"},allowfullscreen:""})])],-1),pe={__name:"PresentationsList",props:{presentations:{type:Array,default:()=>[]}},setup(o){return(r,u)=>{const d=g("router-link");return t(),s("div",R,[U,e("ul",Y,[(t(!0),s(h,null,f(o.presentations,l=>(t(),s("li",{key:l.id,class:"hover:bg-zinc-50"},[e("div",q,[e("div",I,[n(m(V),{class:"mr-3 h-7 w-7 shrink-0 text-zinc-400","aria-hidden":"true"}),y(" "+c(l.title),1)]),e("div",J,[e("div",K,[l.tags.length?(t(),s("div",Q,[W,e("ul",X,[(t(!0),s(h,null,f(l.tags,a=>(t(),s("li",{key:a},[e("a",ee,c(a)+c(","),1)]))),128))])])):i("",!0),e("div",te,[e("div",se,[l.youtube?(t(),s("a",{key:0,href:l.youtube,target:"_blank",class:"group flex w-fit space-x-2 font-semibold transition hover:scale-105 md:space-x-3"},[e("div",le,[n(C,{"aria-hidden":"true",href:l.youtube},null,8,["href"])]),oe],8,ae)):i("",!0),l.slideshare?(t(),s("a",{key:1,href:l.slideshare,target:"_blank",class:"group flex w-fit space-x-2 font-semibold transition hover:scale-105 md:space-x-3"},[n(B,{"aria-hidden":"true",href:l.slideshare,class:"h-6 w-6 fill-zinc-600"},null,8,["href"]),ie],8,ne)):i("",!0)]),(t(!0),s(h,null,f(l.speakers,a=>(t(),s("div",{key:a.name,class:"my-5 ml-9 flex min-w-0 flex-1"},[e("div",ce,[e("div",re,[n(d,{to:{name:"people.details",params:{id:a.slug}},class:"my-8 flex h-32 w-32 justify-center"},{default:x(()=>[a.image.length>2?(t(),s("img",{key:0,class:"rounded-full shadow-xl sm:items-start",src:a.image,alt:""},null,8,de)):(t(),s("img",me))]),_:2},1032,["to"])]),e("div",ue,[he,e("div",_e,[n(d,{to:{name:"people.details",params:{id:a.slug}}},{default:x(()=>[e("h3",null,c(a.name),1)]),_:2},1032,["to"]),a.company?(t(),p(d,{key:0,to:{name:"companies.details",params:{id:a.company.slug}}},{default:x(()=>[e("p",fe,c(a.company.name),1)]),_:2},1032,["to"])):i("",!0)]),a.linkedin?(t(),s("div",xe,[n(A,{href:a.linkedin},null,8,["href"])])):i("",!0)])])]))),128))])]),ve])])]))),128))])])}}},ge={key:1},Me={__name:"Meetup",setup(o){const r=v({}),u=w();let d=v(!0),l=v(!1);return b(()=>{async function a(){const _=await fetch("/api/meetups/"+u.params.id+".json");return r.value=await _.json(),r}a().then(_=>{}).catch(()=>{l.value=!0,k.push({name:"not.found",params:{pathMatch:u.path.substring(1).split("/")}})}),l.value||(d.value=!1)}),(a,_)=>(t(),s(h,null,[m(d)?(t(),p($,{key:0})):i("",!0),m(d)?i("",!0):(t(),s("div",ge,[n(O,{meetup:r.value},null,8,["meetup"]),n(pe,{presentations:r.value.presentations},null,8,["presentations"])]))],64))}};export{Me as default};
