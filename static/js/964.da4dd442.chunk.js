"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[964],{9964:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var a=t(9434),r=t(7689),s=t(9439),c=t(2791),i=function(e){return e.contacts.items},o=function(e){return e.contacts.isLoading},u=function(e){return e.contacts.error},l=function(e){var n=i(e),t=function(e){return e.filter}(e);return n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},m=t(8427),d="ContactForm_form__dhl+T",_="ContactForm_element__0J6Gz",p="ContactForm_input__Bl93P",h="ContactForm_button__eSwX9",f=t(3329),x=function(){var e=(0,c.useState)(""),n=(0,s.Z)(e,2),t=n[0],r=n[1],o=(0,c.useState)(""),u=(0,s.Z)(o,2),l=u[0],x=u[1],j=(0,a.v9)(i),v=(0,a.I0)(),b=function(e){"name"===e.currentTarget.name?r(e.currentTarget.value):x(e.currentTarget.value)};return(0,f.jsxs)("form",{className:d,onSubmit:function(e){e.preventDefault(),j.map((function(e){return e.name})).includes(t)?alert("".concat(t," is already in contacts.")):(v((0,m.uK)({name:t,phone:l})),r(""),x(""))},children:[(0,f.jsxs)("label",{className:_,children:["Name",(0,f.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:b,className:p})]}),(0,f.jsxs)("label",{className:_,children:["Number",(0,f.jsx)("input",{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:l,onChange:b,className:p})]}),(0,f.jsx)("button",{type:"submit",className:h,children:"Add contact"})]})},j=t(2956),v="Filter_container__L5eml",b="Filter_input__N7T3z",g=function(){var e=(0,c.useState)(""),n=(0,s.Z)(e,2),t=n[0],r=n[1],i=(0,a.I0)();return(0,f.jsxs)("div",{className:v,children:[(0,f.jsx)("strong",{children:"Find contacts by name"}),(0,f.jsx)("input",{id:"filter",type:"text",name:"filter",value:t,onChange:function(e){var n=e.currentTarget.value;r(n),i((0,j.T)(n))},className:b})]})},C="Contact_button__c54A1",N=function(e){var n=e.name,t=e.phone,r=e.id,s=(0,a.I0)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("p",{children:[n,": ",t]}),(0,f.jsx)("button",{type:"button",id:r,onClick:function(e){s((0,m.GK)(e.currentTarget.id))},className:C,children:"Delete"})]})},F="ContactList_element__v3kbj",y=function(){var e=(0,a.v9)(o),n=(0,a.v9)(u),t=(0,a.v9)(l),r=(0,a.I0)();return(0,c.useEffect)((function(){r((0,m.yF)())}),[r]),(0,f.jsxs)("ul",{children:[e&&(0,f.jsx)("p",{children:"Request in progress..."}),n&&(0,f.jsxs)("p",{children:["Warning! ",n]}),t.map((function(e){return(0,f.jsx)("li",{className:F,children:(0,f.jsx)(N,{name:e.name,phone:e.number,id:e.id})},e.id)}))]})},k=t(478),w=t(6009),A=function(){var e=(0,a.v9)(k.Qb);return(0,f.jsx)(f.Fragment,{children:e?(0,f.jsxs)("div",{className:w.Z.container,children:[(0,f.jsx)(x,{}),(0,f.jsx)("h2",{children:"Contacts"}),(0,f.jsx)(g,{}),(0,f.jsx)(y,{})]}):(0,f.jsx)(r.Fg,{to:"/"})})}},6009:function(e,n){n.Z={container:"pages_container__xAkcw",form:"pages_form__EXjgv",label:"pages_label__jdIHB",input:"pages_input__YpYFN",button:"pages_button__eH5oD"}}}]);
//# sourceMappingURL=964.da4dd442.chunk.js.map