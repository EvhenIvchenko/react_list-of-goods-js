(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var s=n(7),i=n.n(s),c=n(6),a=n(8),r=(n(13),n(14),n(1)),o=n(3),u=n.n(o),l=n(0),d=[{id:1,name:"Dumplings"},{id:2,name:"Carrot"},{id:3,name:"Eggs"},{id:4,name:"Ice cream"},{id:5,name:"Apple"},{id:6,name:"Bread"},{id:7,name:"Fish"},{id:8,name:"Honey"},{id:9,name:"Jam"},{id:10,name:"Garlic"}],b="alphabet",m="length";var j=function(){var e=Object(r.useState)(""),t=Object(c.a)(e,2),n=t[0],s=t[1],i=Object(r.useState)(!1),o=Object(c.a)(i,2),j=o[0],h=o[1],p=function(e,t){var n=t.sortType,s=t.isReversed,i=Object(a.a)(e);return n&&i.sort((function(e,t){switch(n){case b:return e.name.localeCompare(t.name);case m:return e.name.length-t.name.length;default:return 0}})),s&&i.reverse(),i}(d,{sortType:n,isReversed:j});return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{onClick:function(){return s(b)},type:"button",className:u()("button","is-info",{"is-light":n!==b}),children:"Sort alphabetically"}),Object(l.jsx)("button",{onClick:function(){return s(m)},type:"button",className:u()("button","is-success",{"is-light":n!==m}),children:"Sort by length"}),Object(l.jsx)("button",{onClick:function(){h((function(e){return!e}))},type:"button",className:u()("button","is-warning",{"is-light":!j}),children:"Reverse"}),(n||j)&&Object(l.jsx)("button",{onClick:function(){return s(""),void h(!1)},type:"button",className:u()("button","is-danger","is-light"),children:"Reset"})]}),Object(l.jsx)("ul",{children:p.map((function(e){return Object(l.jsx)("li",{"data-cy":"Good",children:e.name},e.id)}))})]})};i.a.render(Object(l.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.c28ad698.chunk.js.map