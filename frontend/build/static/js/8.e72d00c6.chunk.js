(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[8],{43:function(e,t,a){"use strict";var n=a(0),c=a.n(n);a(48);t.a=function(e){return c.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},48:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(46),c=a.n(n),r=a(47),s=a(10),l=a(0),i=a.n(l),m=a(6),u=(a(59),function(e){return i.a.createElement("div",{className:"avatar ".concat(e.className),style:e.style},i.a.createElement("img",{src:e.image,alt:e.alt,style:{width:e.width,height:e.width}}))}),o=a(43),f=(a(60),function(e){return i.a.createElement("li",{className:"user-item"},i.a.createElement(o.a,{className:"user-item__content"},i.a.createElement(m.b,{to:"/".concat(e.id,"/places")},i.a.createElement("div",{className:"user-item__image"},i.a.createElement(u,{image:"".concat("https://mern-backend-000.herokuapp.com","/").concat(e.image),alt:e.name})),i.a.createElement("div",{className:"user-item__info"},i.a.createElement("h2",null,e.name),i.a.createElement("h3",null,e.placeCount.length," ",1===e.placeCount.length?"Place":"Places")))))}),p=(a(61),function(e){return 0===e.items.length?i.a.createElement("div",{className:"center"},i.a.createElement("h2",null,"No users found.")):i.a.createElement("ul",{className:"users-list"},e.items.map((function(e){return i.a.createElement(f,{key:e.id,id:e.id,image:e.image,name:e.name,placeCount:e.places})})))}),d=a(49),h=a(15),E=a(50);t.default=function(){var e=Object(l.useState)(),t=Object(s.a)(e,2),a=t[0],n=t[1],m=Object(E.a)(),u=m.isLoading,o=m.error,f=m.sendRequest,v=m.clearError;return Object(l.useEffect)((function(){(function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("".concat("https://mern-backend-000.herokuapp.com/api","/users"));case 3:t=e.sent,n(t.users),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[f]),i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{error:o,onClear:v}),u&&i.a.createElement("div",{className:"center"},i.a.createElement(h.a,null)),!u&&a&&i.a.createElement(p,{items:a}))}}}]);
//# sourceMappingURL=8.e72d00c6.chunk.js.map