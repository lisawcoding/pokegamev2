(this.webpackJsonppokemon_game=this.webpackJsonppokemon_game||[]).push([[0],{25:function(e,t,a){e.exports=a(44)},30:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),l=a.n(r),s=(a(30),a(6)),o=a(1),i=a(15),m=a.n(i),u=a(23),d=a(3),p=Object(n.createContext)();function E(e){var t=Object(n.useState)(365),a=Object(d.a)(t,1)[0],r=Object(n.useState)(12),l=Object(d.a)(r,2),s=l[0],o=l[1],i=Object(n.useState)([]),E=Object(d.a)(i,2),f=E[0],h=E[1],v=Object(n.useState)("https://pokeapi.co/api/v2/pokemon?offset=0&limit=".concat(s)),b=Object(d.a)(v,2),g=b[0],x=b[1],k=Object(n.useState)(""),N=Object(d.a)(k,2),j=N[0],O=N[1],S=Object(n.useState)(""),y=Object(d.a)(S,2),w=y[0],C=y[1],_=Object(n.useState)(!0),T=Object(d.a)(_,2),F=T[0],P=T[1],W=Object(n.useState)(""),B=Object(d.a)(W,2),U=B[0],q=B[1],A=Object(n.useState)(!1),R=Object(d.a)(A,2),I=R[0],L=R[1];return Object(n.useEffect)((function(){var e=U.length>0?"https://pokeapi.co/api/v2/pokemon?offset=0&limit=".concat(a):g;function t(){return(t=Object(u.a)(m.a.mark((function t(){var a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return a=t.sent,t.next=5,a.json();case 5:return n=t.sent,O(n.next),C(n.previous),t.t0=h,t.next=11,Promise.all(n.results.filter((function(e){return e.name.indexOf(U.toLowerCase())>-1})).map((function(e){return fetch(e.url).then((function(e){return e.json()})).then((function(e){return{id:e.id,name:e.name,height:e.height,weight:e.weight,exp:e.base_experience,src:e.sprites.front_default,src_back:e.sprites.back_default,isSelected:!1}})).catch((function(e){return console.log(e)}))})));case 11:t.t1=t.sent,(0,t.t0)(t.t1),P(!1);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[g,U,I]),c.a.createElement(p.Provider,{value:{pokes:f,setPokes:h,curUrl:g,setCurUrl:x,nextUrl:j,setNextUrl:O,prevUrl:w,setPrevUrl:C,loading:F,setLoading:P,search:U,setSearch:q,gameStart:I,setGameStart:L,perPokes:s,setPerPokes:o,totalPokes:a}},c.a.createElement(c.a.Fragment,null,e.children))}var f=Object(n.createContext)();function h(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)([]),o=Object(d.a)(s,2),i=o[0],m=o[1],u=Object(n.useState)([]),p=Object(d.a)(u,2),E=p[0],h=p[1],v=Object(n.useState)(),b=Object(d.a)(v,2),g=b[0],x=b[1];return c.a.createElement(f.Provider,{value:{team:r,setTeam:l,teamA:i,setTeamA:m,teamB:E,setTeamB:h,isWinner:g,setIsWinner:x}},e.children)}a(32);var v=function(){var e=Object(n.useContext)(p),t=e.search,a=e.setSearch,r=e.pokes,l=Object(n.useContext)(f),s=l.team,o=l.setTeamA;t.length>0&&r.length<1&&(alert("no pokemon"),a(""));return c.a.createElement("div",{className:"SearchBar"},c.a.createElement("input",{id:"auto",type:"text",value:t,onChange:function(e){!function(e){a(e.target.value),o(s)}(e)},required:!0}))};a(33);var b=Object(o.f)((function(e){return c.a.createElement(c.a.Fragment,null,"/"!==e.location.pathname&&c.a.createElement("nav",{id:"nav"},"/pokeplay"===e.location.pathname?c.a.createElement(v,null):c.a.createElement("div",null),c.a.createElement("ul",{ref:e.fullscreenModal},c.a.createElement(s.c,{exact:!0,className:"btn btn-white btn-animate tooltip",activeClassName:"active-link",to:"/","data-lan":"tab"},c.a.createElement("i",{className:"fas fa-home"}),c.a.createElement("span",{className:"tooltiptext"},"home")),c.a.createElement(s.c,{exact:!0,className:"btn btn-white btn-animate tooltip",activeClassName:"active-link",to:"/pokeplay","data-lan":"tab"},c.a.createElement("i",{className:"fas fa-play"}),c.a.createElement("span",{className:"tooltiptext"},"play game")),c.a.createElement(s.c,{exact:!0,className:"btn btn-white btn-animate tooltip scorelink",activeClassName:"active-link",to:"/scoresheet","data-lan":"tab"},c.a.createElement("i",{className:"fas fa-clipboard"}),c.a.createElement("span",{className:"tooltiptext"},"score sheet")))))}));a(39);var g=function(e){return c.a.createElement("div",{className:"Home",onClick:e.openFullscreen},c.a.createElement("ul",{className:"menu"},c.a.createElement(s.b,{to:"/pokeplay",className:"index-btn"},c.a.createElement("span",null,"start game")),c.a.createElement(s.b,{to:"/scoresheet",className:"index-btn"},c.a.createElement("span",null,"scroe sheet"))))};var x=function(){var e=Object(n.useContext)(p),t=e.setCurUrl,a=e.nextUrl,r=e.prevUrl,l=e.loading,s=e.search,o=Object(n.useContext)(f),i=o.team,m=o.setTeamA,u={display:s.length>0?"none":"block"};return c.a.createElement("div",{className:"pagination",style:u},c.a.createElement("button",{onClick:function(){m(i),t(r)},disabled:l,className:"prev",style:{opacity:null===r&&0}}),c.a.createElement("button",{onClick:function(){m(i),t(a)},disabled:l,className:"next",style:{opacity:null===a&&0}}))},k=function(e){return c.a.createElement("section",{className:"teamDiv"},c.a.createElement("h2",null,void 0!==e.isWinner&&e.hand),c.a.createElement("p",null,void 0!==e.isWinner&&"total experience: ".concat(e.exp)),e.team.map((function(t){return c.a.createElement("div",{key:"team".concat(t.name),className:"card"},c.a.createElement("img",{src:t.src,alt:t.name,className:void 0!==t.isWinner?"teamDiv-img-active":""}),c.a.createElement("p",{className:"exp"},void 0!==e.isWinner&&"exp:".concat(t.exp)))})))},N=function(){var e=Object(n.useContext)(f),t=e.team,a=e.teamB,r=e.setTeamB,l=e.isWinner,s=e.setIsWinner,o=Object(n.useContext)(p),i=o.pokes,m=o.gameStart,u=t.reduce((function(e,t){return e+t.exp}),0);return Object(n.useEffect)((function(){if(m){var e=function(e,t){var a=new Array(t),n=e.length,c=new Array(n);if(t>n)throw new RangeError("getRandom: more elements taken than available");for(;t--;){var r=Math.floor(Math.random()*n);a[t]=e[r in c?c[r]:r],c[r]=--n in c?c[n]:n}return a}(i.filter((function(e){return e.id!==t[0].id&&e.id!==t[1].id&&e.id!==t[2].id})),3);a.length<3?r(e):setTimeout((function(){s(t.reduce((function(e,t){return e+t.exp}),0)>a.reduce((function(e,t){return e+t.exp}),0)&&!0)}),600)}})),c.a.createElement(k,{hand:"your hand",isWinner:l,exp:u,team:t})};function j(e){var t=Object(n.useContext)(f),a=t.teamB,r=t.isWinner,l=a.reduce((function(e,t){return e+t.exp}),0);return c.a.createElement(k,{hand:"dealer's hand",isWinner:r,exp:l,team:a})}var O=a(10),S=function(e){var t=Object(n.useContext)(f).team;if(t.length>0)for(var a=0;a<t.length;a++)if(e.id===t[a].id)return!0===e.isSelected;return c.a.createElement("div",{className:"pokeCard"},c.a.createElement("div",{className:"flip-card",key:e.id,id:e.id,onClick:function(){e.choosePoke(e.id)},value:e.id},c.a.createElement("div",{className:"flip-card-inner"},c.a.createElement("div",{className:"flip-card-front"},c.a.createElement("p",{className:"exp","data-exp":"".concat(e.exp)}),c.a.createElement("div",{className:"img-wrapper"},c.a.createElement("img",{src:e.src,alt:e.name})),c.a.createElement("h2",{className:"name"},e.name)),c.a.createElement("div",{className:"flip-card-back"},c.a.createElement("img",{src:e.src_back,alt:e.name})))))};var y=function(){var e=Object(n.useContext)(p),t=e.setCurUrl,a=e.setGameStart,r=e.pokes,l=e.setPokes,s=e.setSearch,o=e.perPokes,i=Object(n.useContext)(f),m=i.isWinner,u=i.team,d=i.setTeam,E=i.teamA;function h(e){u.length<3&&(l(r.map((function(t){return t.id===e&&(t.isSelected=!t.isSelected),t}))),d([].concat(Object(O.a)(E),Object(O.a)(r.filter((function(e){if(e.isSelected)return e})))))),u.length>=2&&(s(""),t("https://pokeapi.co/api/v2/pokemon?offset=0&limit=".concat(o)),a(!0))}return c.a.createElement("section",{className:r.length>o?"pokesDiv scroll-active":"pokesDiv"},void 0===m&&r.map((function(e){return c.a.createElement(S,{key:e.id,id:e.id,src:e.src,height:e.height,weight:e.weight,name:e.name,exp:e.exp,isSelected:e.isSelected,src_back:e.src_back,choosePoke:h})})))},w=function(e){return c.a.createElement("div",{dangerouslySetInnerHTML:{__html:'<iframe width="0" height="0" src="https://www.youtube.com/embed/vX1xq4Ud2z8?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}})};a(40);var C=function(e){var t=Object(n.useContext)(p),a=t.setCurUrl,r=t.gameStart,l=t.setGameStart,s=t.setLoading,o=t.perPokes,i=Object(n.useContext)(f),m=i.isWinner,u=i.setIsWinner,d=i.setTeam,E=i.setTeamA,h=i.setTeamB;return c.a.createElement("div",{className:"play-pannel"},c.a.createElement(w,null),c.a.createElement("div",{className:void 0!==m?"top-div top-div-active":"top-div"},c.a.createElement(j,null),!r&&c.a.createElement("p",{className:"remark"},"Choose Three Pokemons"),void 0!==m&&c.a.createElement("div",{className:"winlose-div"},c.a.createElement("h1",{className:"text-shadow",style:{color:!0===m&&"var(--yellow)"}},m?"WINNER!!!!!!!!":"LOSER!!!!!!!!"),c.a.createElement("button",{className:"replayBtn",onClick:function(){s(!0),a("https://pokeapi.co/api/v2/pokemon?offset=0&limit=".concat(o)),u(),l(!1),d([]),E([]),h([])}},c.a.createElement("i",{className:"fas fa-redo"}))),c.a.createElement(N,null)),c.a.createElement("div",{className:"play-zone"},r&&void 0===m?c.a.createElement("button",{className:"startBtn",disabled:!0},"Game Start!!!!!"):c.a.createElement("div",null),c.a.createElement(y,null),!r&&c.a.createElement(x,null)))},_=a(9),T=a.n(_),F=Object(n.createContext)();function P(e){var t=Object(n.useContext)(f),a=t.team,r=t.teamB,l=t.isWinner,s=Object(n.useState)([]),o=Object(d.a)(s,2),i=o[0],m=o[1],u=Object(n.useState)([]),p=Object(d.a)(u,2),E=p[0],h=p[1];return Object(n.useEffect)((function(){r.length>=3&&(m([].concat(Object(O.a)(i),[{yourScore:a.reduce((function(e,t){return e+t.exp}),0),dealerScore:r.reduce((function(e,t){return e+t.exp}),0),win:l,date:(new Date).toLocaleDateString()+" "+(new Date).toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"}).replace(" ","")}])),h([].concat(Object(O.a)(E),[{yourTeam:a,dealersTeam:r}])))}),[l]),c.a.createElement(F.Provider,{value:{teams:E,setTeams:h,scores:i,setScores:m}},c.a.createElement(c.a.Fragment,null,e.children))}var W=function(e){return c.a.createElement("ul",{className:"round",key:T()()},c.a.createElement("li",null,e.date),c.a.createElement("li",null,e.round),c.a.createElement("li",null,e.yourScore),c.a.createElement("li",null,e.dealerScore),c.a.createElement("li",null,e.yourScore>e.dealerScore?c.a.createElement("i",{className:"fas fa-trophy"}):c.a.createElement("i",{className:"fas fa-tired"})),c.a.createElement("li",null,c.a.createElement(s.b,{to:"scoresheet/detail/round_".concat(e.round)},c.a.createElement("i",{className:"fas fa-book"}))))};a(43);var B=function(e){var t=Object(n.useContext)(F).scores;return c.a.createElement("div",{className:"ScoreSheet"},c.a.createElement("h1",null,"Pokemon Game"),c.a.createElement("h2",null,"Score Sheet"),c.a.createElement("section",{className:"table"},c.a.createElement("ul",{className:"top-div"},c.a.createElement("li",{className:"title"}),c.a.createElement("li",{className:"title"}),c.a.createElement("li",{className:"score"},"score"),c.a.createElement("li",{className:"win-lose"},"win lose"),c.a.createElement("li",{className:"detail"},"detail"),c.a.createElement("li",null,"date"),c.a.createElement("li",null,"round"),c.a.createElement("li",null,"you"),c.a.createElement("li",null,"dealer")),c.a.createElement("ul",{className:"data-div"},t.map((function(e,t){return c.a.createElement(W,{id:t,yourScore:e.yourScore,dealerScore:e.dealerScore,win:e.isWinner,key:T()(),round:t+1,date:e.date})})))))};var U=function(e){var t=e.team,a=e.title,n=e.score;return console.log(t),c.a.createElement("div",{className:"members"},c.a.createElement("h1",null,a),c.a.createElement("h1",null,"total score: ".concat(n)),t.map((function(e){return c.a.createElement("div",{key:T()(),className:"member"},c.a.createElement("img",{src:e.src,alt:e.src}),c.a.createElement("img",{src:e.src_back,alt:e.src}),c.a.createElement("div",{className:"info-div"},c.a.createElement("p",null,e.name),c.a.createElement("p",null,"exp: ".concat(e.exp)),c.a.createElement("p",null,"height: ".concat(e.height)),c.a.createElement("p",null,"weight: ".concat(e.weight))))})))};var q=function(e){var t=Object(n.useContext)(F),a=t.teams,r=t.scores,l=e.match.params.round,s=Number(l.replace("round_",""))-1;return c.a.createElement("div",{id:s,className:"detail-frame"},c.a.createElement("h1",null,"round ".concat(l)),c.a.createElement("div",null,!0===r[s].win&&c.a.createElement("i",{className:"fas fa-trophy"})),c.a.createElement("section",null,c.a.createElement(U,{team:a[s].yourTeam,title:"your  hand",score:r[s].yourScore}),c.a.createElement(U,{team:a[s].dealersTeam,title:"dealer's hand",score:r[s].dealerScore})),c.a.createElement("button",{onClick:e.history.goBack,className:"index-btn"},"Back"))};var A=Object(o.f)((function(e){return c.a.createElement("div",{className:"bg",style:{backgroundImage:"url(".concat(e.location.pathname.indexOf("score")>0?"https://cdn.pixabay.com/photo/2016/09/08/15/18/textured-1654610__340.jpg":e.location.pathname.indexOf("play")>0?"https://cdn.pixabay.com/photo/2017/06/02/10/28/cartoons-2365895__340.jpg":"https://cdn.pixabay.com/photo/2020/04/23/20/13/space-5083905_960_720.jpg",")")},onClick:e.openFullscreen},c.a.createElement("div",{className:"rotate-div"},c.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Ic_screen_rotation_48px.svg/1024px-Ic_screen_rotation_48px.svg.png",alt:"rotate"})))}));var R=function(e){if(Object(n.useContext)(p).loading)return c.a.createElement("div",{className:"loader-wrapper"},c.a.createElement("div",{className:"loader"}));function t(){var e=document.querySelector(".GameApp");e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}return c.a.createElement("div",{className:"GameApp"},c.a.createElement(s.a,null,c.a.createElement(A,{openFullscreen:t}),c.a.createElement(b,{openFullscreen:t}),c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/",component:function(e){return c.a.createElement(g,{stuff:e,openFullscreen:t})}}),c.a.createElement(o.a,{exact:!0,path:"/pokeplay",render:function(){return c.a.createElement(C,null)}}),c.a.createElement(o.a,{exact:!0,path:"/scoresheet",component:B}),c.a.createElement(o.a,{exact:!0,path:"/scoresheet/detail/:round",component:q}),c.a.createElement(o.a,{component:function(e){return c.a.createElement(g,{stuff:e,openFullscreen:t})}}))))};var I=function(){return window.addEventListener("hashchange",(function(){console.log("hash change")})),c.a.createElement(E,null,c.a.createElement(h,null,c.a.createElement(P,null,c.a.createElement(R,null))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(I,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.21e2aaae.chunk.js.map