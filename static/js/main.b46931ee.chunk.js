(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={list:"ContactList_list__3iek2",listItem:"ContactList_listItem__3WjDV",listItemText:"ContactList_listItemText__2YWal",button:"ContactList_button__jG5Xe"}},22:function(t,e,n){t.exports={label:"Filter_label__VpynD",input:"Filter_input__anpBv"}},34:function(t,e,n){t.exports={container:"App_container__3ozt2"}},66:function(t,e,n){},67:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(16),s=n.n(c),u=n(6),i=n(19),o=n(5),l=n(9),b=n(33),p=n.n(b),d=n(12),j=n(2),f={changeFilter:Object(o.b)("contacts/changeFilter")},h=n(4),O=n.n(h),m=n(7),x=n(13),v=n.n(x);function _(){return C.apply(this,arguments)}function C(){return(C=Object(m.a)(O.a.mark((function t(){var e,n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return g.apply(this,arguments)}function g(){return(g=Object(m.a)(O.a.mark((function t(e){var n,a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.post("/contacts",e);case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return N.apply(this,arguments)}function N(){return(N=Object(m.a)(O.a.mark((function t(e){var n,a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.delete("/contacts/".concat(e));case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}v.a.defaults.baseURL="https://61ea82717bc0550017bc67cd.mockapi.io";var k,L=Object(o.c)("contacts/getALLContacts",function(){var t=Object(m.a)(O.a.mark((function t(e,n){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.rejectWithValue,t.prev=1,t.next=4,_();case 4:return t.abrupt("return",t.sent);case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",a(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),A=Object(o.c)("contacts/addContacts",function(){var t=Object(m.a)(O.a.mark((function t(e,n){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.rejectWithValue,t.prev=1,t.next=4,y(e);case 4:return t.abrupt("return",t.sent);case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",a(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),F=Object(o.c)("contacts/deleteContact",function(){var t=Object(m.a)(O.a.mark((function t(e,n){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.rejectWithValue,t.prev=1,t.next=4,w(e);case 4:return t.abrupt("return",t.sent);case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",a(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),I={getALLContacts:L,addContact:A,deleteContact:F},T=I.getALLContacts,z=I.addContact,S=I.deleteContact,D=Object(o.d)([],(k={},Object(d.a)(k,T.fulfilled,(function(t,e){return e.payload})),Object(d.a)(k,z.fulfilled,(function(t,e){return[].concat(Object(i.a)(t),[e.payload])})),Object(d.a)(k,S.fulfilled,(function(t,e){return t.filter((function(t){return t.id!==e.payload.id}))})),k)),V=Object(o.d)("",Object(d.a)({},f.changeFilter,(function(t,e){return e.payload}))),W=Object(j.b)({contacts:D,filter:V}),B=[].concat(Object(i.a)(Object(o.e)({serializableCheck:{ignoredActions:[l.a,l.f,l.b,l.c,l.d,l.e]}})),[p.a]),J=Object(o.a)({reducer:{users:W},middleware:B,devTools:!1}),Z=n(17),q=function(t){return t.users.contacts},E=function(t){return t.users.filter},M=Object(Z.a)(q,E,(function(t,e){return function(t){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}(t)})),P=n(10),Y=n.n(P),G=n(1);function H(){var t=Object(u.c)(M),e=Object(u.b)();return Object(a.useEffect)((function(){e(I.getALLContacts())}),[e]),Object(G.jsx)("ul",{className:Y.a.list,children:t.map((function(t){var n=t.id,a=t.name,r=t.number;return Object(G.jsxs)("li",{className:Y.a.listItem,children:[Object(G.jsxs)("p",{className:Y.a.listItemText,children:[a,": ",Object(G.jsx)("span",{className:Y.a.listItemText,children:r})]}),Object(G.jsx)("button",{className:Y.a.button,type:"button",onClick:function(){return function(t){return e(I.deleteContact(t))}(n)},children:"Delete"})]},n)}))})}var K=n(23),Q=n(8),R=n.n(Q);function U(){var t=Object(a.useState)(""),e=Object(K.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)(""),s=Object(K.a)(c,2),i=s[0],o=s[1],l=Object(u.c)(q),b=Object(u.b)(),p=function(){r(""),o("")};return Object(G.jsx)("div",{children:Object(G.jsxs)("form",{className:R.a.form,onSubmit:function(t){if(t.preventDefault(),l.find((function(t){return t.name===n})))return alert("".concat(n," is already in contacts.")),void p();!function(t,e){b(I.addContact(t,e))}({name:n,number:i}),p()},children:[Object(G.jsxs)("label",{className:R.a.label,children:["Name",Object(G.jsx)("br",{}),Object(G.jsx)("input",{className:R.a.input,type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(t){var e=t.currentTarget.value;r(e)}})]}),Object(G.jsxs)("label",{className:R.a.label,children:["Number",Object(G.jsx)("br",{}),Object(G.jsx)("input",{className:R.a.input,type:"tel",name:"number",value:i,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:function(t){var e=t.currentTarget.value;o(e)}})]}),Object(G.jsx)("button",{className:R.a.button,type:"submit",children:"Add contact"})]})})}var X=n(22),$=n.n(X);function tt(){var t=Object(u.c)(E),e=Object(u.b)();return Object(G.jsxs)("label",{className:$.a.label,children:["Find contacts by name",Object(G.jsx)("input",{className:$.a.input,type:"text",value:t,onChange:function(t){return e(f.changeFilter(t.currentTarget.value))}})]})}var et=n(34),nt=n.n(et);function at(){return Object(G.jsxs)("div",{className:nt.a.container,children:[Object(G.jsxs)("div",{children:[Object(G.jsx)("h2",{children:"Add contact"}),Object(G.jsx)(U,{})]}),Object(G.jsxs)("div",{children:[Object(G.jsx)("h2",{children:"Contacts"}),Object(G.jsx)(tt,{}),Object(G.jsx)(H,{})]})]})}n(66);s.a.render(Object(G.jsxs)(r.a.StrictMode,{children:[Object(G.jsx)("h1",{children:"Phonebook"}),Object(G.jsx)(u.a,{store:J,children:Object(G.jsx)(at,{})})]}),document.getElementById("root"))},8:function(t,e,n){t.exports={form:"Form_form__DA4Qu",label:"Form_label__1kOjS",input:"Form_input__1HyLK",button:"Form_button__3SYCO"}}},[[67,1,2]]]);
//# sourceMappingURL=main.b46931ee.chunk.js.map