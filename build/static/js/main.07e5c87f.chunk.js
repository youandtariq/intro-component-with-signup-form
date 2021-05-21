(this["webpackJsonpintro-component-with-signup-form"]=this["webpackJsonpintro-component-with-signup-form"]||[]).push([[0],{21:function(e,t,r){},44:function(e,t,r){},45:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),s=r(12),i=r.n(s),c=(r(21),r(3)),o=r(13),l=r(14),d=r(16),u=r(15),m=r(0);var h=function(e){var t=e.label,r=void 0===t?"Click me":t;return Object(m.jsx)("button",{className:"btn btn--secondary",children:r})},b=r(2),j=r.n(b);var p=function(e){var t=e.placeholder,r=void 0===t?"placeholder":t,a=e.type,n=void 0===a?"text":a,s=e.error,i=void 0===s?null:s,c=e.name,o=void 0===c?"text":c,l=e.onChange;return Object(m.jsxs)("div",{className:function(){var e="input-group ";return i&&(e+="error"),e}(),children:[Object(m.jsx)("input",{className:"input",type:n,placeholder:r,name:o,onChange:l}),i&&Object(m.jsx)("p",{className:"error-text",children:i})]})},f=function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(o.a)(this,r);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={data:{},errors:{}},e.schemaObj={firstname:j.a.string().min(3).max(255).required().label("First Name"),lastname:j.a.string().min(3).max(255).required().label("Last Name"),email:j.a.string().email({tlds:{allow:!1}}).min(3).max(255).required().label("Email Address"),password:j.a.string().min(3).max(255).required().label("Password")},e.schema=j.a.object().keys(e.schemaObj),e.handleChange=function(t){var r=t.target,a=r.name,n=r.value,s=Object(c.a)({},e.state.data);s[a]=n,e.setState({data:s})},e.handleSubmit=function(t){t.preventDefault();var r=e.validate();e.setState({errors:r||{}}),r||e.doSubmit()},e.doSubmit=function(){alert("Form Submitted, Thank you")},e.validate=function(){var t=e.schema.validate(e.state.data,{abortEarly:!1}).error,r={};return t?(t.details.forEach((function(e){r[e.path[0]]=e.message})),r):null},e.renderInput=function(t,r,a){for(var n=arguments.length,s=new Array(n>3?n-3:0),i=3;i<n;i++)s[i-3]=arguments[i];return Object(m.jsx)(p,Object(c.a)(Object(c.a)({},s),{},{placeholder:r,error:a,name:t,onChange:e.handleChange}))},e.renderButton=function(e){return Object(m.jsx)(h,{label:e})},e}return Object(l.a)(r,[{key:"render",value:function(){return Object(m.jsxs)("form",{className:"form card",onSubmit:this.handleSubmit,children:[this.renderInput("firstname","First Name",this.state.errors.firstname),this.renderInput("lastname","Last Name",this.state.errors.lastname),this.renderInput("email","Email Address",this.state.errors.email,"email"),this.renderInput("password","Password",this.state.errors.password,"password"),this.renderButton("Claim your free trial"),Object(m.jsxs)("p",{className:"terms-text",children:["By clicking the button you are agreeing to our"," ",Object(m.jsx)("span",{className:"terms-text--danger",children:"Terms & Services"})]})]})}}]),r}(a.Component);var v=function(e){return Object(m.jsxs)("p",{className:"card card-plan",children:[Object(m.jsx)("span",{className:"plan--strong",children:"Try it free 7 days"})," then $20/mo. thereafter"]})};r(44);var g=function(){return Object(m.jsxs)("div",{className:"hero container",children:[Object(m.jsxs)("div",{className:"hero-details",children:[Object(m.jsx)("h1",{className:"hero__title",children:"Learn to code by watching others"}),Object(m.jsx)("p",{className:"hero__tagline",children:"See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable."})]}),Object(m.jsxs)("div",{className:"hero-form",children:[Object(m.jsx)(v,{}),Object(m.jsx)(f,{})]})]})},x=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,46)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;r(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root")),x()}},[[45,1,2]]]);
//# sourceMappingURL=main.07e5c87f.chunk.js.map