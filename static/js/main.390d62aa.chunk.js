(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{33:function(n,e,t){"use strict";t.r(e);var a,o,r,i,c,s,l,d,b,u,p,f,h,x=t(1),m=t.n(x),j=t(11),g=t.n(j),O=t(15),v=t(5),y=t(6),w=t(8),C=t(7),k=(t(10),t(12)),S=t.n(k),z=t(2),A=t(3),B=A.a.div(a||(a=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0 100px;\n"]))),F=A.a.h1(o||(o=Object(z.a)(['\n  position: relative;\n  display: inline-block;\n  margin: 15px auto 15px 20px;\n  font-family: \'Merriweather\', serif;\n  font-size: 40px;\n  letter-spacing: 1px;\n  \n  color: #465457;\n  &:before {\n    content: "";\n    position: absolute;\n    top: -8%;\n    left: -12px;\n    width: 80px;\n    height: 20px;\n    border-top: 4px solid #fed57b;\n    border-left: 2px solid #fed57b;\n  }\n  &:after {\n    content: "";\n    position: absolute;\n    bottom: -8%;\n    right: -12px;\n    width: 80px;\n    height: 20px;\n    border-bottom: 4px solid #fed57b;\n    border-right: 2px solid #fed57b;\n  }\n']))),D=A.a.h2(r||(r=Object(z.a)(["\n  display: inline-block;\n  margin: 15px auto 15px 20px;\n  font-family: 'Merriweather', serif;\n  font-size: 28px;\n  letter-spacing: 1px;\n  \n  color: #465457;\n  text-align: left;\n  padding: 0 0 6px 10px;\n  border-left: 10px solid #fed57b;\n  border-bottom: 2px solid #fed57b;\n"]))),J=t(14),M=A.a.form(i||(i=Object(z.a)(["\n  max-width: 400px;\n  padding: 20px;\n  background: #FAAB1B;\n  font-family: 'Oswald', sans-serif;\n"]))),N=A.a.input(c||(c=Object(z.a)(["\n  width: 100%;\n  height: 50px;\n  margin-bottom: 5px;\n  font-size: 20px;\n"]))),I=A.a.label(s||(s=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n  font-size: 16px;\n  font-weight: 700;\n  color: #5a4343;\n  text-transform: uppercase;\n"]))),Z=A.a.button(l||(l=Object(z.a)(["\n  display: inline-block;\n  padding: 5px 10px;\n  background: #ebc785;\n  border-color: #e4a736;\n  border-radius: 5px;\n  color: #5a4343;\n  cursor: pointer;\n&:hover, &:focus {\n  background-color: #9db33b;\n  border-color: #61ec11;\n  }\n"]))),q=t(0),E=function(n){Object(w.a)(t,n);var e=Object(C.a)(t);function t(){var n;Object(v.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))).state={name:"",number:""},n.handleChange=function(e){var t=e.currentTarget,a=t.name,o=t.value;n.setState(Object(J.a)({},a,o))},n.onSubmit=function(e){e.preventDefault(),n.props.onSubmitForm(n.state),n.reset()},n.reset=function(){n.setState({name:" ",number:" "})},n}return Object(y.a)(t,[{key:"render",value:function(){var n=this.state,e=n.name,t=n.number;return Object(q.jsxs)(M,{onSubmit:this.onSubmit,children:[Object(q.jsxs)(I,{children:["Name",Object(q.jsx)(N,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:this.handleChange})]}),Object(q.jsxs)(I,{children:["Number",Object(q.jsx)(N,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:t,onChange:this.handleChange})]}),Object(q.jsx)(Z,{type:"submit",children:"Add contact"})]})}}]),t}(x.Component),L=A.a.div(d||(d=Object(z.a)(["\n  max-width: 400px;\n  padding: 20px;\n  margin-bottom: 10px;\n  \n  font-family: 'Oswald', sans-serif;\n  background: #f5b975;\n"]))),P=A.a.label(b||(b=Object(z.a)(["\ndisplay: flex;\nflex-direction: row;\njustify-content: space-between;\nalign-items: center;\nfont-size: 16px;\nfont-weight: 700;\ncolor: #3d2c2c;\ntransition: .3s linear;\n  &:hover {\n    width: 300px;\n  }\n"]))),V=A.a.input(u||(u=Object(z.a)(["\nheight: 32px;\n"])));function H(n){var e=n.value,t=n.onChange,a=n.onBlur;return Object(q.jsx)(L,{children:Object(q.jsxs)(P,{children:["Find contacts by name",Object(q.jsx)(V,{type:"text",value:e,onChange:t,onBlur:a})]})})}var K,R,T=A.a.p(p||(p=Object(z.a)(["\n  font-family: inherit;\n  font-size: 100%;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.15;\n"]))),U=A.a.span(f||(f=Object(z.a)(["\n  font-family: inherit;\n  font-size: 100%;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.15;\n"]))),$=A.a.button(h||(h=Object(z.a)(["\n  font-size: 16px;\n  font-weight: 500;\n  display: inline-block;\n  padding: 5px 10px;\n  background: #bba172;\n  border-color: #887145;\n  border-radius: 5px;\n  color: #5a4343;\n  cursor: pointer;\n  transition: .3s cubic-bezier(.075, .82, .165, 1);\n&:hover, &:focus {\n  background-color: #da632c;\n  border: none;\n  }\n"])));function G(n){var e=n.name,t=n.number,a=n.onClick;return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(T,{children:e}),Object(q.jsx)(U,{children:t}),Object(q.jsx)($,{type:"button",onClick:a,children:"Delete"})]})}var Q=A.a.ul(K||(K=Object(z.a)(["\n  width: 420px;\n  list-style: none;\n  padding: 0;\n"]))),W=A.a.li(R||(R=Object(z.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 30px;\n  margin-bottom: 5px;\n  font-size: 20px;\n  border-bottom: 1px solid grey;\n  color: #5a4343;\n  background: linear-gradient(to left, #ebc785 0%, white, #e4a736);\n  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2);\n"])));function X(n){var e=n.contacts,t=n.onDeleteContact;return Object(q.jsx)(Q,{children:e.map((function(n){var e=n.id,a=n.name,o=n.number;return Object(q.jsx)(W,{children:Object(q.jsx)(G,{name:a,number:o,onClick:function(){return t(e)}})},e)}))})}var Y=function(n){Object(w.a)(t,n);var e=Object(C.a)(t);function t(){var n;Object(v.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.handleSubmit=function(e){var t=e.name,a=e.number;if(n.state.contacts.map((function(n){return n.name})).includes(t))alert("".concat(t," is already in Phonebook"));else{var o={id:S.a.generate(),name:t,number:a};n.setState((function(n){var e=n.contacts;return{contacts:[o].concat(Object(O.a)(e))}}))}},n.handleFilter=function(e){n.setState({filter:e})},n.handleBlur=function(){n.setState({filter:""})},n.getVisibleContacts=function(){var e=n.state,t=e.contacts,a=e.filter.toLowerCase();return t.filter((function(n){return n.name.toLowerCase().includes(a)}))},n.deleteContact=function(e){n.setState((function(n){return{contacts:n.contacts.filter((function(n){return n.id!==e}))}}))},n}return Object(y.a)(t,[{key:"componentDidMount",value:function(){var n=localStorage.getItem("contacts"),e=JSON.parse(n);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(n,e){var t=this.state.contacts;t!==e&&localStorage.setItem("contacts",JSON.stringify(t))}},{key:"render",value:function(){var n=this,e=this.state.filter,t=this.getVisibleContacts();return Object(q.jsxs)(B,{children:[Object(q.jsx)(F,{children:"PhoneBook"}),Object(q.jsx)(E,{onSubmitForm:this.handleSubmit}),Object(q.jsx)(D,{type:"text",children:"Contacts"}),Object(q.jsx)(H,{type:"text",value:e,onChange:function(e){return n.handleFilter(e.target.value)},onBlur:function(){return n.handleBlur("")}}),Object(q.jsx)(X,{contacts:t,onDeleteContact:this.deleteContact})]})}}]),t}(x.Component),_=Y;g.a.render(Object(q.jsx)(m.a.StrictMode,{children:Object(q.jsx)(_,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.390d62aa.chunk.js.map