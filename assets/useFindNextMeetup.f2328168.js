import{j as o}from"./index.b78a85dd.js";const p="/images/speakers/placeholder.webp";function i(n){let a=o({});const r=new Date,e=[];for(let t of n)new Date(t.date)>r&&e.push(t);return e.length>0&&(e.sort((t,s)=>new Date(t.date).getTime()-new Date(s.date).getTime()),a.value=e[0]),{nextMeetup:a}}export{p as _,i as u};