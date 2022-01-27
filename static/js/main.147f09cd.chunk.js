(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={list:"ContactList_list__3iek2",listItem:"ContactList_listItem__3WjDV",listItemText:"ContactList_listItemText__2YWal",button:"ContactList_button__jG5Xe"}},21:function(t,e,n){t.exports={label:"Filter_label__VpynD",input:"Filter_input__anpBv"}},33:function(t,e,n){t.exports={container:"App_container__3ozt2"}},65:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(16),s=n.n(r),o=n(6),u=n(18),i=n(2),l=n(9),b=n(32),d=n.n(b),j=n(12),p=n(3),f={getContactRequest:Object(i.b)("contacts/getContactRequest"),getContactSuccess:Object(i.b)("contacts/getContactSuccess"),getContactError:Object(i.b)("contacts/getContactError"),addContactRequest:Object(i.b)("contacts/addContactRequest"),addContactSuccess:Object(i.b)("contacts/addContactSuccess"),addContactError:Object(i.b)("contacts/addContactError"),deleteContactRequest:Object(i.b)("contacts/deleteContactRequest"),deleteContactSuccess:Object(i.b)("contacts/deleteContactSuccess"),deleteContactError:Object(i.b)("contacts/deleteContactError"),changeFilter:Object(i.b)("contacts/changeFilter")},O=n(5),m=n.n(O),h=n(7),x=n(13),C=n.n(x);function v(){return _.apply(this,arguments)}function _(){return(_=Object(h.a)(m.a.mark((function t(){var e,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.get("/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return y.apply(this,arguments)}function y(){return(y=Object(h.a)(m.a.mark((function t(e){var n,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.post("/contacts",e);case 2:return n=t.sent,c=n.data,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return N.apply(this,arguments)}function N(){return(N=Object(h.a)(m.a.mark((function t(e){var n,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.delete("/contacts/".concat(e));case 2:return n=t.sent,c=n.data,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}C.a.defaults.baseURL="https://61ea82717bc0550017bc67cd.mockapi.io";var k,L=Object(i.c)("contacts/getALLContacts",Object(h.a)(m.a.mark((function t(){var e;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))),A=Object(i.c)("contacts/addContacts",function(){var t=Object(h.a)(m.a.mark((function t(e){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),F=Object(i.c)("contacts/deleteContact",function(){var t=Object(h.a)(m.a.mark((function t(e){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),S={getALLContacts:L,addContact:A,deleteContact:F},q=S.getALLContacts,E=S.addContact,I=S.deleteContact,T=Object(i.d)([],(k={},Object(j.a)(k,q.fulfilled,(function(t,e){return e.payload})),Object(j.a)(k,E.fulfilled,(function(t,e){return[].concat(Object(u.a)(t),[e.payload])})),Object(j.a)(k,I.fulfilled,(function(t,e){return t.filter((function(t){return t.id!==e.payload.id}))})),k)),R=Object(i.d)("",Object(j.a)({},f.changeFilter,(function(t,e){return e.payload}))),z=Object(p.b)({contacts:T,filter:R}),D=[].concat(Object(u.a)(Object(i.e)({serializableCheck:{ignoredActions:[l.a,l.f,l.b,l.c,l.d,l.e]}})),[d.a]),B=Object(i.a)({reducer:{users:z},middleware:D,devTools:!1}),J=function(t){return t.users.contacts},Z=function(t){return t.users.filter},M=function(t){var e=J(t),n=Z(t);return function(t){var e=n.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(e)}))}(e)},P=n(10),V=n.n(P),W=n(1);function Y(){var t=Object(o.c)(M),e=Object(o.b)();return Object(c.useEffect)((function(){e(S.getALLContacts())}),[e]),Object(W.jsx)("ul",{className:V.a.list,children:t.map((function(t){var n=t.id,c=t.name,a=t.number;return Object(W.jsxs)("li",{className:V.a.listItem,children:[Object(W.jsxs)("p",{className:V.a.listItemText,children:[c,": ",Object(W.jsx)("span",{className:V.a.listItemText,children:a})]}),Object(W.jsx)("button",{className:V.a.button,type:"button",onClick:function(){return function(t){return e(S.deleteContact(t))}(n)},children:"Delete"})]},n)}))})}var G=n(22),H=n(8),K=n.n(H);function Q(){var t=Object(c.useState)(""),e=Object(G.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),s=Object(G.a)(r,2),u=s[0],i=s[1],l=Object(o.c)(J),b=Object(o.b)(),d=function(){a(""),i("")};return Object(W.jsx)("div",{children:Object(W.jsxs)("form",{className:K.a.form,onSubmit:function(t){if(t.preventDefault(),l.find((function(t){return t.name===n})))return alert("".concat(n," is already in contacts.")),void d();!function(t,e){console.log(t),b(S.addContact(t,e))}({name:n,number:u}),d()},children:[Object(W.jsxs)("label",{className:K.a.label,children:["Name",Object(W.jsx)("br",{}),Object(W.jsx)("input",{className:K.a.input,type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(t){var e=t.currentTarget.value;a(e)}})]}),Object(W.jsxs)("label",{className:K.a.label,children:["Number",Object(W.jsx)("br",{}),Object(W.jsx)("input",{className:K.a.input,type:"tel",name:"number",value:u,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:function(t){var e=t.currentTarget.value;i(e)}})]}),Object(W.jsx)("button",{className:K.a.button,type:"submit",children:"Add contact"})]})})}var U=n(21),X=n.n(U);function $(){var t=Object(o.c)(Z),e=Object(o.b)();return Object(W.jsxs)("label",{className:X.a.label,children:["Find contacts by name",Object(W.jsx)("input",{className:X.a.input,type:"text",value:t,onChange:function(t){return e(f.changeFilter(t.currentTarget.value))}})]})}var tt=n(33),et=n.n(tt);function nt(){return Object(W.jsxs)("div",{className:et.a.container,children:[Object(W.jsxs)("div",{children:[Object(W.jsx)("h2",{children:"Add contact"}),Object(W.jsx)(Q,{})]}),Object(W.jsxs)("div",{children:[Object(W.jsx)("h2",{children:"Contacts"}),Object(W.jsx)($,{}),Object(W.jsx)(Y,{})]})]})}n(65);s.a.render(Object(W.jsxs)(a.a.StrictMode,{children:[Object(W.jsx)("h1",{children:"Phonebook"}),Object(W.jsx)(o.a,{store:B,children:Object(W.jsx)(nt,{})})]}),document.getElementById("root"))},8:function(t,e,n){t.exports={form:"Form_form__DA4Qu",label:"Form_label__1kOjS",input:"Form_input__1HyLK",button:"Form_button__3SYCO"}}},[[66,1,2]]]);
//# sourceMappingURL=main.147f09cd.chunk.js.map