(this["webpackJsonpacovid19-app"]=this["webpackJsonpacovid19-app"]||[]).push([[0],{22:function(e,a,t){},45:function(e,a,t){e.exports=t(75)},75:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(15),l=t.n(r),o=(t(50),t(6)),i=(t(22),t(78)),s=t(80),m=function(){return c.a.createElement("div",null,c.a.createElement(i.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},c.a.createElement(o.c,{className:"navbar-brand",to:"/"},"Ankit Upadhyay"),c.a.createElement(i.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),c.a.createElement(i.a.Collapse,{id:"responsive-navbar-nav"},c.a.createElement(s.a,{className:"ml-auto"},c.a.createElement(o.c,{className:"nav-link",to:"/"},"Home"),c.a.createElement(o.c,{className:"nav-link",to:"/watch"},"Watchlist"),c.a.createElement(o.c,{className:"nav-link",to:"/contact"},"Contact")))))},u=function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("p",null,"Create By \u2764 Ankit Upadhyay | All Right are reserverd"))},E=t(5),d=t(27),p=t.n(d),v=t(42),b=t(28),f=t(43),h=t.n(f),k=function(e){var a=e.data;return c.a.createElement("div",{class:"card"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w200/".concat(a&&a.poster_path),alt:"".concat(a&&a.title,"Poster")}),c.a.createElement("div",{class:"card-body"},c.a.createElement("h5",{class:"card-title"}," ",a.title," ")))},N=function(e){var a=e.page,t=e.setPage;return c.a.createElement("div",{className:"pagination"},c.a.createElement(o.b,{onClick:function(){return t(--a)}},"\xab"),c.a.createElement(o.b,{className:"".concat(1===a?"active":""),onClick:function(){return t(1)}},"1"),c.a.createElement(o.b,{className:"".concat(2===a?"active":""),onClick:function(){return t(2)}},"2"),c.a.createElement(o.b,{className:"".concat(3===a?"active":""),onClick:function(){return t(3)}},"3"),c.a.createElement(o.b,{className:"".concat(4===a?"active":""),onClick:function(){return t(4)}},"4"),c.a.createElement(o.b,{className:"".concat(5===a?"active":""),onClick:function(){return t(5)}},"5"),c.a.createElement(o.b,{className:"".concat(6===a?"active":""),onClick:function(){return t(6)}},"6"),c.a.createElement(o.b,{className:"".concat(7===a?"active":""),onClick:function(){return t(7)}},"7"),c.a.createElement(o.b,{className:"".concat(8===a?"active":""),onClick:function(){return t(8)}},"8"),c.a.createElement(o.b,{className:"".concat(9===a?"active":""),onClick:function(){return t(9)}},"9"),c.a.createElement(o.b,{className:"".concat(10===a?"active":""),onClick:function(){return t(10)}},"10"),c.a.createElement(o.b,{onClick:function(){return t(++a)}},"\xbb"))},g=function(){var e=Object(n.useState)([]),a=Object(b.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(1),o=Object(b.a)(l,2),i=o[0],s=o[1];return Object(n.useEffect)((function(){(function(){var e=Object(v.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.themoviedb.org/3/movie/top_rated?api_key=7b5cfc81dda4178d68de521426cb274b&language=en-US&page=".concat(i));case 2:a=e.sent,r(a.data.results),console.log(a.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"grid"},t&&t.map((function(e,a){return c.a.createElement(k,{key:a,data:e})}))),c.a.createElement("div",{className:"mb-5 mt-5"},c.a.createElement(N,{page:i,setPage:s})))},C=t(79),y=t(77),w=function(){return c.a.createElement("div",null,c.a.createElement("h1",null," Contact "),c.a.createElement(C.a,null,c.a.createElement(C.a.Group,{controlId:"formBasicEmail"},c.a.createElement(C.a.Label,null,"Email address"),c.a.createElement(C.a.Control,{type:"email",placeholder:"Enter email"}),c.a.createElement(C.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),c.a.createElement(C.a.Group,{controlId:"formBasicPassword"},c.a.createElement(C.a.Label,null,"Password"),c.a.createElement(C.a.Control,{type:"password",placeholder:"Password"})),c.a.createElement(y.a,{variant:"primary",type:"submit"},"Submit")))},x=function(){return c.a.createElement("div",null,c.a.createElement("h1",null," Watchlist "))},O=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null," Movies App "),c.a.createElement(m,null),c.a.createElement(E.c,null,c.a.createElement(E.a,{exact:!0,path:"/"}," ",c.a.createElement(g,null)," "),c.a.createElement(E.a,{path:"/watch"}," ",c.a.createElement(x,null)," "),c.a.createElement(E.a,{path:"/contact"}," ",c.a.createElement(w,null)," ")),c.a.createElement(u,null))};l.a.render(c.a.createElement(o.a,null,c.a.createElement(O,null)),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.11fc5740.chunk.js.map