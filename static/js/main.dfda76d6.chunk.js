(this["webpackJsonpreact-marshrytizaciya-router"]=this["webpackJsonpreact-marshrytizaciya-router"]||[]).push([[0],{18:function(e,t,i){e.exports={title:"PageHeading_title__28Uoh"}},22:function(e,t,i){e.exports={header:"AppBar_header__dHEcb"}},23:function(e,t,i){e.exports={container:"Container_container__182cd"}},36:function(e,t,i){},38:function(e,t,i){"use strict";i.r(t);var s=i(1),a=i.n(s),u=i(17),n=i.n(u),c=i(4),o=i(2),r=i(18),l=i.n(r),m=i(0);function d(e){var t=e.text;return Object(m.jsx)("h1",{className:l.a.title,children:t})}function j(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(d,{text:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c"}),Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vel velit nihil illo est! Quos cum rerum dolores voluptates odio iste est nam excepturi placeat eligendi voluptatibus a illo eos ipsam, necessitatibus quo at quae pariatur et asperiores odit! Quasi sunt odit omnis at deserunt placeat ipsa earum dignissimos magni voluptatum quisquam veniam libero qui fugit accusantium cum ratione, facilis tempore in! Voluptates, minus nesciunt sed optio voluptate et quae accusamus est eos, dolorum quibusdam dolorem debitis perferendis voluptas rem quos eius ab, commodi cumque dolor. Repellendus porro impedit, enim temporibus quibusdam eum natus corporis id? Ducimus fugit consequatur consequuntur."}),Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vel velit nihil illo est! Quos cum rerum dolores voluptates odio iste est nam excepturi placeat eligendi voluptatibus a illo eos ipsam, necessitatibus quo at quae pariatur et asperiores odit! Quasi sunt odit omnis at deserunt placeat ipsa earum dignissimos magni voluptatum quisquam veniam libero qui fugit accusantium cum ratione, facilis tempore in! Voluptates, minus nesciunt sed optio voluptate et quae accusamus est eos, dolorum quibusdam dolorem debitis perferendis voluptas rem quos eius ab, commodi cumque dolor. Repellendus porro impedit, enim temporibus quibusdam eum natus corporis id? Ducimus fugit consequatur consequuntur."}),Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vel velit nihil illo est! Quos cum rerum dolores voluptates odio iste est nam excepturi placeat eligendi voluptatibus a illo eos ipsam, necessitatibus quo at quae pariatur et asperiores odit! Quasi sunt odit omnis at deserunt placeat ipsa earum dignissimos magni voluptatum quisquam veniam libero qui fugit accusantium cum ratione, facilis tempore in! Voluptates, minus nesciunt sed optio voluptate et quae accusamus est eos, dolorum quibusdam dolorem debitis perferendis voluptas rem quos eius ab, commodi cumque dolor. Repellendus porro impedit, enim temporibus quibusdam eum natus corporis id? Ducimus fugit consequatur consequuntur."}),Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vel velit nihil illo est! Quos cum rerum dolores voluptates odio iste est nam excepturi placeat eligendi voluptatibus a illo eos ipsam, necessitatibus quo at quae pariatur et asperiores odit! Quasi sunt odit omnis at deserunt placeat ipsa earum dignissimos magni voluptatum quisquam veniam libero qui fugit accusantium cum ratione, facilis tempore in! Voluptates, minus nesciunt sed optio voluptate et quae accusamus est eos, dolorum quibusdam dolorem debitis perferendis voluptas rem quos eius ab, commodi cumque dolor. Repellendus porro impedit, enim temporibus quibusdam eum natus corporis id? Ducimus fugit consequatur consequuntur."})]})}var p=i(10),b=i(14),h=i.n(b),x=i(19),O="http://localhost:4040";function v(){return f.apply(this,arguments)}function f(){return f=Object(x.a)(h.a.mark((function e(){var t,i,s,a=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",i=a.length>1&&void 0!==a[1]?a[1]:{},e.next=4,fetch(t,i);case 4:if(!(s=e.sent).ok){e.next=11;break}return e.next=8,s.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function q(e){var t=e.authors,i=Object(o.f)().authorId,s=t.find((function(e){return e.id===Number(i)}));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{children:s.name}),Object(m.jsx)("ul",{children:s.books.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)(c.b,{to:"/books/".concat(e.id),children:e.title})},e.id)}))})]})}function g(){var e=Object(o.g)(),t=e.url,i=e.path,a=Object(s.useState)(null),u=Object(p.a)(a,2),n=u[0],r=u[1];return Object(s.useEffect)((function(){v("".concat(O,"/authors?_embed=books")).then(r)}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(d,{text:"\u0410\u0432\u0442\u043e\u0440\u044b"}),n&&Object(m.jsx)("ul",{children:n.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)(c.c,{to:"".concat(t,"/").concat(e.id),children:e.name})},e.id)}))}),Object(m.jsx)("hr",{}),Object(m.jsx)(o.a,{path:"".concat(i,"/:authorId"),children:n&&Object(m.jsx)(q,{authors:n})})]})}function k(){var e=Object(o.g)().url,t=Object(s.useState)(null),i=Object(p.a)(t,2),a=i[0],u=i[1];return Object(s.useEffect)((function(){v("".concat(O,"/books")).then(u)}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(d,{text:"\u041a\u043d\u0438\u0433\u0438"}),a&&Object(m.jsx)("ul",{children:a.map((function(t){return Object(m.jsx)("li",{children:Object(m.jsx)(c.b,{to:"".concat(e,"/").concat(t.id),children:t.title})},t.id)}))})]})}var _=i(9),N=i.n(_),E=function(){return Object(m.jsxs)("nav",{children:[Object(m.jsx)(c.c,{exact:!0,to:"/",className:N.a.link,activeClassName:N.a.activeLink,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(m.jsx)(c.c,{to:"/authors",className:N.a.link,activeClassName:N.a.activeLink,children:"\u0410\u0432\u0442\u043e\u0440\u044b"}),Object(m.jsx)(c.c,{to:"/books",className:N.a.link,activeClassName:N.a.activeLink,children:"\u041a\u043d\u0438\u0433\u0438"})]})},L=i(22),F=i.n(L);function Q(){return Object(m.jsx)("header",{className:F.a.header,children:Object(m.jsx)(E,{})})}var y=i(23),C=i.n(y);function D(e){var t=e.children;return Object(m.jsx)("div",{className:C.a.container,children:t})}function w(){return Object(m.jsx)("h1",{children:"404 \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"})}function I(){var e=Object(o.f)().bookId,t=Object(s.useState)(null),i=Object(p.a)(t,2),a=i[0],u=i[1];return Object(s.useEffect)((function(){(function(e){return v("".concat(O,"/books/").concat(e,"?_expand=author"))})(e).then(u)}),[e]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(d,{text:"\u041a\u043d\u0438\u0433\u0430 ".concat(e)}),a&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("img",{src:a.imgUrl,alt:a.title}),Object(m.jsx)("h2",{children:a.title}),Object(m.jsxs)("p",{children:["\u0410\u0432\u0442\u043e\u0440: ",a.author.name]}),Object(m.jsx)("p",{children:a.descr})]})]})}function R(){return Object(m.jsxs)(D,{children:[Object(m.jsx)(Q,{}),Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{path:"/",exact:!0,children:Object(m.jsx)(j,{})}),Object(m.jsx)(o.a,{path:"/authors",children:Object(m.jsx)(g,{})}),Object(m.jsx)(o.a,{path:"/books",exact:!0,children:Object(m.jsx)(k,{})}),Object(m.jsx)(o.a,{path:"/books/:bookId",children:Object(m.jsx)(I,{})}),Object(m.jsx)(o.a,{children:Object(m.jsx)(w,{})})]})]})}i(35),i(36),i(37);n.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(c.a,{children:Object(m.jsx)(R,{})})}),document.getElementById("root"))},9:function(e,t,i){e.exports={link:"Navigation_link__3hCDF",activeLink:"Navigation_activeLink__2X0U5 Navigation_link__3hCDF"}}},[[38,1,2]]]);
//# sourceMappingURL=main.dfda76d6.chunk.js.map