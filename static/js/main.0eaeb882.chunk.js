(this["webpackJsonpfilter-users-task"]=this["webpackJsonpfilter-users-task"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(9),l=n.n(c),s=(n(15),n(5)),i=n(2),o=n(3),j=n(0),u=function(e){var t=e.numberOfUsers,n=e.setNumberOfUsers,a=e.setLoadNewUsers;return Object(j.jsxs)("div",{className:"extra-buttons",children:[Object(j.jsxs)("label",{className:"label",htmlFor:"numder-of-users",children:["How many users to download",Object(j.jsx)("input",{type:"number",id:"numder-of-users",value:t,onChange:function(e){e.target.value>=50?n(50):e.target.value>0&&n(e.target.value)}})]}),Object(j.jsx)("button",{className:"button",onClick:function(){return a(!0)},children:"Load new users"})]})},b=n(10),d=function(e){var t=e.setRandomUsers,n=Object(a.useState)("all"),r=Object(o.a)(n,2),c=r[0],l=r[1],s=Object(a.useState)([]),i=Object(o.a)(s,2),u=i[0],d=i[1],f=Object(a.useState)(18),O=Object(o.a)(f,2),h=O[0],x=O[1],v=Object(a.useState)(90),g=Object(o.a)(v,2),p=g[0],N=g[1];return Object(j.jsxs)("form",{className:"filter-form",onSubmit:function(e){return e.preventDefault()},children:[Object(j.jsx)("b",{className:"filter-form__categorie-title",children:"Categories"}),Object(j.jsxs)("label",{className:"filter-form__label",htmlFor:"filterByGender",children:[Object(j.jsx)("b",{children:"Gender"}),Object(j.jsxs)("select",{value:c,onChange:function(e){return l(e.target.value)},name:"gender",id:"filterByGender",className:"filter-form__select",children:[Object(j.jsx)("option",{value:"all",children:"All"}),Object(j.jsx)("option",{value:"male",children:"Male"}),Object(j.jsx)("option",{value:"female",children:"Female"})]})]}),Object(j.jsxs)("label",{className:"filter-form__label",htmlFor:"filterByNationality",children:[Object(j.jsx)("b",{children:"Nationality"}),Object(j.jsxs)("select",{multiple:!0,size:"5",value:u,onChange:function(e){return function(e){if(u.find((function(t){return t===e}))||d([].concat(Object(b.a)(u),[e])),u.find((function(t){return t===e}))){var t=u,n=t.indexOf(e);t.splice(n,1),d(t)}}(e.target.value)},name:"nationality",id:"filterByNationality",className:"filter-form__select",children:[Object(j.jsx)("option",{value:"AU",children:"AU"}),Object(j.jsx)("option",{value:"BR",children:"BR"}),Object(j.jsx)("option",{value:"CA",children:"CA"}),Object(j.jsx)("option",{value:"CH",children:"CH"}),Object(j.jsx)("option",{value:"DE",children:"DE"}),Object(j.jsx)("option",{value:"DK",children:"DK"}),Object(j.jsx)("option",{value:"ES",children:"ES"}),Object(j.jsx)("option",{value:"FI",children:"FI"}),Object(j.jsx)("option",{value:"FR",children:"FR"}),Object(j.jsx)("option",{value:"GB",children:"GB"}),Object(j.jsx)("option",{value:"IE",children:"IE"}),Object(j.jsx)("option",{value:"IR",children:"IR"}),Object(j.jsx)("option",{value:"NO",children:"NO"}),Object(j.jsx)("option",{value:"NL",children:"NL"}),Object(j.jsx)("option",{value:"NZ",children:"NZ"}),Object(j.jsx)("option",{value:"TR",children:"TR"}),Object(j.jsx)("option",{value:"US",children:"US"})]}),Object(j.jsx)("button",{className:"button",onClick:function(){return d([])},children:"Clear nationality filter"})]}),Object(j.jsxs)("label",{className:"filter-form__label",htmlFor:"filterByAge",children:[Object(j.jsx)("b",{children:"Age"}),Object(j.jsxs)("div",{className:"from-to",children:[Object(j.jsx)("input",{className:"filter-form__fromTo",value:h,type:"number",name:"age-from",id:"filterByAge",onChange:function(e){e.target.value>=0&&x(e.target.value),e.target.value>=p&&x(p-1)}}),"\u2014",Object(j.jsx)("input",{className:"filter-form__fromTo",value:p,type:"number",name:"age-to",id:"filterByAge",onChange:function(e){e.target.value>=0&&N(e.target.value),e.target.value<=h&&N(+h+1),e.target.value>=90&&N(90)}})]})]}),Object(j.jsx)("button",{className:"button",onClick:function(){return function(e,n,a,r){if(l("all"),d([]),"all"!==e||0!==n.length||18!==+a||90!==+r){var c=m().filter((function(e){return e.dob.age>+a&&e.dob.age<+r})),s=[];if(18===+a&&90===+r||(t(c),localStorage.setItem("filteredPeople",JSON.stringify(c))),"all"!==e&&n.length){for(var i=c.filter((function(t){return t.gender===e})),o=0;o<i.length;o++)for(var j=0;j<n.length;j++)i[o].nat===n[j]&&s.push(i[o]);return t(s),void localStorage.setItem("filteredPeople",JSON.stringify(s))}if("all"!==e)t(c.filter((function(t){return t.gender===e}))),localStorage.setItem("filteredPeople",JSON.stringify(c.filter((function(t){return t.gender===e}))));else if(n.length){for(var u=0;u<c.length;u++)for(var b=0;b<n.length;b++)c[u].nat===n[b]&&s.push(c[u]);t(s),localStorage.setItem("filteredPeople",JSON.stringify(s))}}else t(m())}(c,u,h,p)},children:"Apply filters"}),Object(j.jsx)("button",{className:"button",onClick:function(){var e=m();t(e),localStorage.setItem("filteredPeople",JSON.stringify(e)),l("all"),d([])},children:"Clear filter"})]})},f=function(e){var t=e.randomUsers;return Object(j.jsx)(j.Fragment,{children:t.map((function(e){return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{className:"card__user-photo",src:e.picture.large,alt:e.name.first}),Object(j.jsxs)("div",{className:"card__user-info",children:[Object(j.jsx)("b",{className:"card__name",children:"".concat(e.name.first," ").concat(e.name.last)}),Object(j.jsx)("a",{className:"card__email",href:"mailto:".concat(e.email),children:e.email}),Object(j.jsx)("a",{className:"card__phone",href:"tel:+".concat(e.phone),children:e.phone}),Object(j.jsx)("div",{className:"card__dob",children:"".concat(e.dob.date.substr(0,10),", (").concat(e.dob.age," y.o.)")})]})]},e.email)}))})};function m(){return JSON.parse(localStorage.getItem("randomPeople"))}var O=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(15),l=Object(o.a)(c,2),s=l[0],i=l[1],b=Object(a.useState)(JSON.parse(localStorage.getItem("filteredPeople"))||m()||[]),O=Object(o.a)(b,2),h=O[0],x=O[1];return Object(a.useEffect)((function(){if(!h.length||n){var e="https://randomuser.me/api/?results=".concat(s,"&inc=gender,email,dob,name,picture,nat,phone");fetch(e).then((function(e){return e.json()})).then((function(e){x(e.results),localStorage.setItem("randomPeople",JSON.stringify(e.results)),localStorage.setItem("filteredPeople",JSON.stringify(e.results))})),r(!1)}}),[n]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("main",{className:"main",children:[Object(j.jsx)("div",{className:"main__left-bar",children:Object(j.jsx)(d,{setRandomUsers:x})}),Object(j.jsx)("div",{className:"main__users",children:Object(j.jsx)(f,{randomUsers:h})})]}),Object(j.jsx)("footer",{className:"footer",children:Object(j.jsx)(u,{numberOfUsers:s,setNumberOfUsers:i,setLoadNewUsers:r})})]})},h=function(){return Object(j.jsx)("main",{className:"main",children:"My friend component"})},x=function(){return Object(j.jsx)("main",{className:"main",children:"Home component"})},v=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("header",{className:"header",children:[Object(j.jsxs)("div",{className:"header__logo-title",children:[Object(j.jsx)(s.b,{to:"/",className:"logo"}),Object(j.jsx)("h1",{className:"header__title",children:"friendbook"})]}),Object(j.jsxs)("nav",{className:"nav",children:[Object(j.jsx)(s.c,{to:"/",className:function(e){return"nav__button"+(e.isActive?" nav__button--active":"")},children:"Home"}),Object(j.jsx)(s.c,{to:"/mf",className:function(e){return"nav__button"+(e.isActive?" nav__button--active":"")},children:"My friends"}),Object(j.jsx)(s.c,{to:"/fnf",className:function(e){return"nav__button"+(e.isActive?" nav__button--active":"")},children:"Find new friend"})]})]}),Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{path:"/fnf",element:Object(j.jsx)(O,{})}),Object(j.jsx)(i.a,{path:"/mf",element:Object(j.jsx)(h,{})}),Object(j.jsx)(i.a,{path:"/",element:Object(j.jsx)(x,{})})]})]})};l.a.render(Object(j.jsx)(s.a,{children:Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(v,{})})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.0eaeb882.chunk.js.map