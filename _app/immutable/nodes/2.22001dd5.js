import{S as N,i as W,s as $,k as _,a as B,q as S,l as b,m as k,h as m,c as M,r as q,n as g,b as y,G as p,J as A,H as w,K as E,e as T,u as R}from"../chunks/index.c0f01b21.js";function x(o,l,a){const e=o.slice();return e[7]=l[a],e[9]=a,e}function G(o,l,a){const e=o.slice();return e[10]=l[a],e[12]=a,e}function O(o){let l,a=o[1][o[9]*5+o[12]]+"",e,t,r,s;function u(){return o[4](o[9],o[12])}return{c(){l=_("button"),e=S(a),this.h()},l(f){l=b(f,"BUTTON",{class:!0});var n=k(l);e=q(n,a),n.forEach(m),this.h()},h(){g(l,"class",t=`transition-colors aspect-square border p-4 lg:p-2 overflow-auto ${o[10]?"bg-[#661b1c]":"hover:bg-[#191d26]"}`)},m(f,n){y(f,l,n),p(l,e),r||(s=A(l,"click",u),r=!0)},p(f,n){o=f,n&2&&a!==(a=o[1][o[9]*5+o[12]]+"")&&R(e,a),n&1&&t!==(t=`transition-colors aspect-square border p-4 lg:p-2 overflow-auto ${o[10]?"bg-[#661b1c]":"hover:bg-[#191d26]"}`)&&g(l,"class",t)},d(f){f&&m(l),r=!1,s()}}}function P(o){let l,a=o[7],e=[];for(let t=0;t<a.length;t+=1)e[t]=O(G(o,a,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();l=T()},l(t){for(let r=0;r<e.length;r+=1)e[r].l(t);l=T()},m(t,r){for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(t,r);y(t,l,r)},p(t,r){if(r&7){a=t[7];let s;for(s=0;s<a.length;s+=1){const u=G(t,a,s);e[s]?e[s].p(u,r):(e[s]=O(u),e[s].c(),e[s].m(l.parentNode,l))}for(;s<e.length;s+=1)e[s].d(1);e.length=a.length}},d(t){E(e,t),t&&m(l)}}}function U(o){let l,a,e,t,r,s,u,f=o[0],n=[];for(let i=0;i<f.length;i+=1)n[i]=P(x(o,f,i));return{c(){l=_("main"),a=_("div");for(let i=0;i<n.length;i+=1)n[i].c();e=B(),t=_("button"),r=S("Reset"),this.h()},l(i){l=b(i,"MAIN",{class:!0});var h=k(l);a=b(h,"DIV",{class:!0});var c=k(a);for(let v=0;v<n.length;v+=1)n[v].l(c);c.forEach(m),e=M(h),t=b(h,"BUTTON",{class:!0});var d=k(t);r=q(d,"Reset"),d.forEach(m),h.forEach(m),this.h()},h(){g(a,"class","grid grid-cols-5 grid-rows-5 max-w-[900px] w-full max-h-[900px] h-full text-white"),g(t,"class","px-4 py-2 text-white bg-slate-700"),g(l,"class","w-full flex justify-center items-center font-primary text-xl md:text-lg sm:text-sm flex-col gap-4 p-4")},m(i,h){y(i,l,h),p(l,a);for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(a,null);p(l,e),p(l,t),p(t,r),s||(u=A(t,"click",o[3]),s=!0)},p(i,[h]){if(h&7){f=i[0];let c;for(c=0;c<f.length;c+=1){const d=x(i,f,c);n[c]?n[c].p(d,h):(n[c]=P(d),n[c].c(),n[c].m(a,null))}for(;c<n.length;c+=1)n[c].d(1);n.length=f.length}},i:w,o:w,d(i){i&&m(l),E(n,i),s=!1,u()}}}function C(o,l,a){const e=["Get at least 20 kills","Win with someone on team with less than 10 kills","Get knife kill","Get single digit kills","1v3 clutch","Get at least 5 first bloods","Witness teammate miss a full spray","Steal an ace","Overtime","Top frag","Bottom frag","9-3 win","Another incident...","Play a game on LOTUS","Tilted team","Teammate pushing the wrong site","Win a game","Anybody on team rankup","Anybody on team derank","Odin kill","Sherif kill","Get killed from a bad call","Play a controller","Lose a 3/4/5 vs 1 ","Teammate dies from ego peaking","More than 2 teammates buy an Operator","Win a round due to lineups","Teammate misses a lineup","Thrify the enemy","Team ace","Defuse the bomb while enemies are still alive"],t=[[!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1]];let r=s();function s(){return console.log("a"),e.sort(()=>Math.random()-.5),e.slice(0,25)}function u(i,h){a(0,t[i][h]=!t[i][h],t)}function f(){a(1,r=s())}return[t,r,u,f,(i,h)=>u(i,h)]}class I extends N{constructor(l){super(),W(this,l,C,U,$,{})}}export{I as component};
