(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={list:"ContactList_list__3iek2",listItem:"ContactList_listItem__3WjDV",listItemText:"ContactList_listItemText__2YWal",button:"ContactList_button__jG5Xe"}},21:function(t,e,n){t.exports={label:"Filter_label__VpynD",input:"Filter_input__anpBv"}},33:function(t,e,n){t.exports={container:"App_container__3ozt2"}},65:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(16),s=n.n(c),u=n(6),o=n(18),i=n(5),l=n(9),b=n(32),p=n.n(b),d=n(12),j=n(2),f={changeFilter:Object(i.b)("contacts/changeFilter")},h=n(4),O=n.n(h),m=n(7),x=n(13),v=n.n(x);function _(){return C.apply(this,arguments)}function C(){return(C=Object(m.a)(O.a.mark((function t(){var e,n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return g.apply(this,arguments)}function g(){return(g=Object(m.a)(O.a.mark((function t(e){var n,a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.post("/contacts",e);case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return N.apply(this,arguments)}function N(){return(N=Object(m.a)(O.a.mark((function t(e){var n,a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.delete("/contacts/".concat(e));case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}v.a.defaults.baseURL="https://61ea82717bc0550017bc67cd.mockapi.io";var k,L=Object(i.c)("contacts/getALLContacts",function(){var t=Object(m.a)(O.a.mark((function t(e,n){var a,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.rejectWithValue,t.prev=1,t.next=4,_();case 4:return r=t.sent,t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",a(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),A=Object(i.c)("contacts/addContacts",function(){var t=Object(m.a)(O.a.mark((function t(e,n){var a,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.rejectWithValue,t.prev=1,t.next=4,y(e);case 4:return r=t.sent,t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",a(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),F=Object(i.c)("contacts/deleteContact",function(){var t=Object(m.a)(O.a.mark((function t(e,n){var a,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.rejectWithValue,t.prev=1,t.next=4,w(e);case 4:return r=t.sent,t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",a(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),I={getALLContacts:L,addContact:A,deleteContact:F},T=I.getALLContacts,z=I.addContact,S=I.deleteContact,D=Object(i.d)([],(k={},Object(d.a)(k,T.fulfilled,(function(t,e){return e.payload})),Object(d.a)(k,z.fulfilled,(function(t,e){return[].concat(Object(o.a)(t),[e.payload])})),Object(d.a)(k,S.fulfilled,(function(t,e){return t.filter((function(t){return t.id!==e.payload.id}))})),k)),V=Object(i.d)("",Object(d.a)({},f.changeFilter,(function(t,e){return e.payload}))),W=Object(j.b)({contacts:D,filter:V}),B=[].concat(Object(o.a)(Object(i.e)({serializableCheck:{ignoredActions:[l.a,l.f,l.b,l.c,l.d,l.e]}})),[p.a]),J=Object(i.a)({reducer:{users:W},middleware:B,devTools:!1}),Z=function(t){return t.users.contacts},q=function(t){return t.users.filter},E=function(t){var e=Z(t),n=q(t);return function(t){var e=n.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(e)}))}(e)},M=n(10),P=n.n(M),Y=n(1);function G(){var t=Object(u.c)(E),e=Object(u.b)();return Object(a.useEffect)((function(){e(I.getALLContacts())}),[e]),Object(Y.jsx)("ul",{className:P.a.list,children:t.map((function(t){var n=t.id,a=t.name,r=t.number;return Object(Y.jsxs)("li",{className:P.a.listItem,children:[Object(Y.jsxs)("p",{className:P.a.listItemText,children:[a,": ",Object(Y.jsx)("span",{className:P.a.listItemText,children:r})]}),Object(Y.jsx)("button",{className:P.a.button,type:"button",onClick:function(){return function(t){return e(I.deleteContact(t))}(n)},children:"Delete"})]},n)}))})}var H=n(22),K=n(8),Q=n.n(K);function R(){var t=Object(a.useState)(""),e=Object(H.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)(""),s=Object(H.a)(c,2),o=s[0],i=s[1],l=Object(u.c)(Z),b=Object(u.b)(),p=function(){r(""),i("")};return Object(Y.jsx)("div",{children:Object(Y.jsxs)("form",{className:Q.a.form,onSubmit:function(t){if(t.preventDefault(),l.find((function(t){return t.name===n})))return alert("".concat(n," is already in contacts.")),void p();!function(t,e){console.log(t),b(I.addContact(t,e))}({name:n,number:o}),p()},children:[Object(Y.jsxs)("label",{className:Q.a.label,children:["Name",Object(Y.jsx)("br",{}),Object(Y.jsx)("input",{className:Q.a.input,type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(t){var e=t.currentTarget.value;r(e)}})]}),Object(Y.jsxs)("label",{className:Q.a.label,children:["Number",Object(Y.jsx)("br",{}),Object(Y.jsx)("input",{className:Q.a.input,type:"tel",name:"number",value:o,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:function(t){var e=t.currentTarget.value;i(e)}})]}),Object(Y.jsx)("button",{className:Q.a.button,type:"submit",children:"Add contact"})]})})}var U=n(21),X=n.n(U);function $(){var t=Object(u.c)(q),e=Object(u.b)();return Object(Y.jsxs)("label",{className:X.a.label,children:["Find contacts by name",Object(Y.jsx)("input",{className:X.a.input,type:"text",value:t,onChange:function(t){return e(f.changeFilter(t.currentTarget.value))}})]})}var tt=n(33),et=n.n(tt);function nt(){return Object(Y.jsxs)("div",{className:et.a.container,children:[Object(Y.jsxs)("div",{children:[Object(Y.jsx)("h2",{children:"Add contact"}),Object(Y.jsx)(R,{})]}),Object(Y.jsxs)("div",{children:[Object(Y.jsx)("h2",{children:"Contacts"}),Object(Y.jsx)($,{}),Object(Y.jsx)(G,{})]})]})}n(65);s.a.render(Object(Y.jsxs)(r.a.StrictMode,{children:[Object(Y.jsx)("h1",{children:"Phonebook"}),Object(Y.jsx)(u.a,{store:J,children:Object(Y.jsx)(nt,{})})]}),document.getElementById("root"))},8:function(t,e,n){t.exports={form:"Form_form__DA4Qu",label:"Form_label__1kOjS",input:"Form_input__1HyLK",button:"Form_button__3SYCO"}}},[[66,1,2]]]);
//# sourceMappingURL=main.91ce725a.chunk.js.map