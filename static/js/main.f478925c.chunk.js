(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{128:function(e,t,n){},129:function(e,t,n){},158:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(29),s=n.n(i),r=(n(128),n(129),n(48)),o=n(229),l=n(225),j=n(215),d=n(224),m=n(234),b=n(230),u=n(233),x=n(68),h=n.n(x),O=n(231),p=n(232),g=n(100),f=n(228),v=n(15),y=n(1);function w(e){return Object(y.jsx)(O.a,Object(r.a)(Object(r.a)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:"Ticket Management System"}))}var C=Object(g.a)();function S(){var e=Object(v.f)();return Object(y.jsx)(f.a,{theme:C,children:Object(y.jsxs)(p.a,{component:"main",maxWidth:"xs",children:[Object(y.jsx)(j.a,{}),Object(y.jsxs)(u.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(y.jsx)(o.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(y.jsx)(h.a,{})}),Object(y.jsx)(O.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(y.jsxs)(u.a,{component:"form",noValidate:!0,onSubmit:function(e){e.preventDefault();var t=new FormData(e.currentTarget);console.log({email:t.get("email"),password:t.get("password")})},sx:{mt:3},children:[Object(y.jsxs)(b.a,{container:!0,spacing:2,children:[Object(y.jsx)(b.a,{item:!0,xs:12,sm:6,children:Object(y.jsx)(d.a,{autoComplete:"given-name",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})}),Object(y.jsx)(b.a,{item:!0,xs:12,sm:6,children:Object(y.jsx)(d.a,{required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"family-name"})}),Object(y.jsx)(b.a,{item:!0,xs:12,children:Object(y.jsx)(d.a,{required:!0,fullWidth:!0,id:"username",label:"User Name",name:"username",autoComplete:"username"})}),Object(y.jsx)(b.a,{item:!0,xs:12,children:Object(y.jsx)(d.a,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})})]}),Object(y.jsx)(l.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"}),Object(y.jsx)(b.a,{container:!0,justifyContent:"center",children:Object(y.jsx)(b.a,{item:!0,children:Object(y.jsx)(m.a,{href:"#",variant:"body2",onClick:function(){e("/login")},children:"Already have an account? Sign in"})})})]})]}),Object(y.jsx)(w,{sx:{mt:5}})]})})}var N=n(69),W=n.n(N);function F(e){return Object(y.jsx)(O.a,Object(r.a)(Object(r.a)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:"Ticket Management System"}))}var k=Object(g.a)();function T(){var e=Object(v.f)();return Object(y.jsx)(f.a,{theme:k,children:Object(y.jsxs)(p.a,{component:"main",maxWidth:"xs",children:[Object(y.jsx)(j.a,{}),Object(y.jsxs)(u.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(y.jsx)(o.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(y.jsx)(h.a,{})}),Object(y.jsx)(O.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(y.jsxs)(u.a,{component:"form",onSubmit:function(e){e.preventDefault();var t=new FormData(e.currentTarget),n={username:t.get("username"),password:t.get("password")};console.log(n),W.a.post("https://team106.pythonanywhere.com/login",n).then((function(e){var t=e.data;"developer"==t?console.log("sucess"):"manager"==t?console.log("2"):"admin"==t&&console.log("3")})).catch((function(e){console.log(e),alert("Login Failed, Try Again")}))},noValidate:!0,sx:{mt:1},children:[Object(y.jsx)(d.a,{margin:"normal",required:!0,fullWidth:!0,id:"username",label:"User Name",name:"username",autoComplete:"username",autoFocus:!0}),Object(y.jsx)(d.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(y.jsx)(l.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign In"}),Object(y.jsx)(b.a,{container:!0,justifyContent:"center",children:Object(y.jsx)(b.a,{item:!0,children:Object(y.jsx)(m.a,{href:"#",variant:"body2",onClick:function(){e("/signup")},children:"Don't have an account? Sign Up"})})})]})]}),Object(y.jsx)(F,{sx:{mt:8,mb:4}})]})})}var D=n(13),q=n(218),I=n(235),L=(n(223),n(221)),B=n(226),M=n(222),P=n(220),U=Object(q.a)({root:{minWidth:200},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),A=Object(q.a)({gridContainer:{paddingLeft:"20px",paddingRight:"20px"}});var H=function(){var e=Object(v.f)(),t=Object(a.useState)([]),n=Object(D.a)(t,2),c=(n[0],n[1]);Object(a.useEffect)((function(){return i()}),[]);var i=function(){W.a.get("https://team106.pythonanywhere.com//tickets_api").then((function(e){console.log(e.data),c(e.data)}))},s=(U(),A());return Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("center",{children:Object(y.jsx)(I.a,{className:s.root,variant:"outlined",children:Object(y.jsxs)(L.a,{children:[Object(y.jsx)(M.a,{className:"Hospital",color:"textSecondary",gutterBottom:!0}),Object(y.jsx)(M.a,{variant:"h5",component:"h2",children:"Hospital Management System"}),Object(y.jsx)(M.a,{variant:"body2",component:"p",children:Object(y.jsx)(B.a,{onClick:function(){e("/insert_hospital")},size:"small",variant:"outlined",children:"Add Hospital"})})]})})}),"\xa0"]}),Object(y.jsx)(P.a,{container:!0,spacing:4,className:s.gridContainer,justifyContent:"center"})]})},_=n(52);var z=function(){return Object(y.jsx)(_.a,{children:Object(y.jsxs)(v.c,{children:[Object(y.jsx)(v.a,{path:"/LogIn",element:Object(y.jsx)(T,{})}),Object(y.jsx)(v.a,{path:"/signup",element:Object(y.jsx)(S,{})}),Object(y.jsx)(v.a,{path:"/developer_menu",element:Object(y.jsx)(H,{})})]})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,238)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(z,{})}),document.getElementById("root")),E()}},[[158,1,2]]]);
//# sourceMappingURL=main.f478925c.chunk.js.map