(this.webpackJsonpexpensetracker=this.webpackJsonpexpensetracker||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),l=n(8),s=n.n(l),i=(n(15),n(5)),r=n(2),u=(n(16),n(9)),j=(n(17),n(0));var o=function(e){var t="card "+e.className;return Object(j.jsx)("div",{className:t,children:e.children})},d=(n(19),n(20),function(e){return Object(j.jsx)("div",{className:"expense-filter",children:Object(j.jsxs)("div",{className:"expense-filter__control",children:[Object(j.jsx)("label",{children:"Filter By Year"}),Object(j.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(j.jsx)("option",{value:"2023",children:"2023"}),Object(j.jsx)("option",{value:"2022",children:"2022"}),Object(j.jsx)("option",{value:"2021",children:"2021"}),Object(j.jsx)("option",{value:"2020",children:"2020"})]})]})})});n(21),n(22);var b=function(e){var t=e.date.getFullYear(),n=e.date.toLocaleString("en-US",{month:"long"}),a=e.date.toLocaleString("en-US",{day:"2-digit"});return Object(j.jsxs)("div",{className:"expense-date",children:[Object(j.jsx)("div",{className:"expense-date__month",children:n}),Object(j.jsx)("div",{className:"expense-date__year",children:t}),Object(j.jsx)("div",{className:"expense-date__day",children:a})]})};var x=function(e){return Object(j.jsx)("li",{children:Object(j.jsxs)(o,{className:"expense-item",children:[Object(j.jsx)(b,{date:e.date}),Object(j.jsxs)("div",{className:"expense-item__description",children:[Object(j.jsx)("h2",{children:e.title}),Object(j.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})})},v=(n(23),function(e){return 0===e.items.length?Object(j.jsx)("h2",{className:"expenses-list__fallback",children:"No Expenses Found."}):Object(j.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(j.jsx)(x,{title:e.title,amount:e.amount,date:e.date},e.id)}))})}),h=n(10),O=(n(24),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(j.jsxs)("div",{className:"chart-bar",children:[Object(j.jsx)("div",{className:"chart-bar__inner",children:Object(j.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(j.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),m=(n(25),function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(i.a)(t));return Object(j.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(j.jsx)(O,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),p=function(e){var t,n=[{label:"Jan",value:"0"},{label:"Feb",value:"0"},{label:"Mar",value:"0"},{label:"Apr",value:"0"},{label:"May",value:"0"},{label:"Jun",value:"0"},{label:"Jul",value:"0"},{label:"Aug",value:"0"},{label:"Sep",value:"0"},{label:"Oct",value:"0"},{label:"Nov",value:"0"},{label:"Dec",value:"0"}],a=Object(h.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(j.jsx)(m,{dataPoints:n})};var f=function(e){var t=Object(u.useState)("2020"),n=Object(r.a)(t,2),a=n[0],c=n[1],l=e.items.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(j.jsxs)(o,{className:"expenses",children:[Object(j.jsx)(d,{selected:a,onChangeFilter:function(e){c(e)}}),Object(j.jsx)(p,{expenses:l}),Object(j.jsx)(v,{items:l})]})},_=n(7),N=(n(26),n(27),function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],l=n[1],s=Object(a.useState)(""),i=Object(r.a)(s,2),u=i[0],o=i[1],d=Object(a.useState)(""),b=Object(r.a)(d,2),x=b[0],v=b[1];return Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:c,amount:u,date:new Date(x)};e.onSaveExpenseData(n),l(""),o(""),v("")},children:[Object(j.jsxs)("div",{className:"new-expense__controls",children:[Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{children:"Title"}),Object(j.jsx)("input",{type:"text",placeholder:"Enter Title",value:c,onChange:function(e){l(e.target.value)}})]}),Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{children:"Amount"}),Object(j.jsx)("input",{type:"number",min:"0.05",step:"0.01",placeholder:"Enter Amount",value:u,onChange:function(e){o(e.target.value)}})]}),Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{children:"Date"}),Object(j.jsx)("input",{type:"date",min:"2020-01-01",max:"2022-01-01",value:x,onChange:function(e){v(e.target.value)}})]})]}),Object(j.jsx)("div",{className:"new-expense__actions",children:Object(j.jsx)("button",{type:"submit",children:"Add Expense"})})]})}),g=function(e){return Object(j.jsx)("div",{className:"new-expense",children:Object(j.jsx)(N,{onSaveExpenseData:function(t){var n=Object(_.a)(Object(_.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n)}})})},S=[{id:"e1",title:"Toilet Paper",amount:194.67,date:new Date(2021,9,1)},{id:"e2",title:"New TV",amount:799.67,date:new Date(2021,8,1)},{id:"e3",title:"New Desk (Wooden)",amount:450.05,date:new Date(2021,6,1)},{id:"e4",title:"Car Insurance",amount:294.67,date:new Date(2020,9,1)}];var w=function(){var e=Object(a.useState)(S),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(g,{onAddExpense:function(e){c((function(t){return[e].concat(Object(i.a)(t))}))}}),Object(j.jsx)(f,{items:n})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),l(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),y()}],[[28,1,2]]]);
//# sourceMappingURL=main.21333fd7.chunk.js.map