(this["webpackJsonpteam-portal"]=this["webpackJsonpteam-portal"]||[]).push([[0],{240:function(e,t,a){},241:function(e,t,a){},250:function(e,t,a){},268:function(e,t,a){},269:function(e,t,a){},270:function(e,t,a){},271:function(e,t,a){},272:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),i=a.n(c),s=(a(240),a.p,a(241),a(53)),o=a.n(s),l=a(70),u=a(22),j=(a(177),a(314)),b=a(14),d=(a(273),a(193),a(274),b.a.initializeApp({apiKey:"AIzaSyBh3OJpEg7cPbrSLq1VX4jOJ2j-kELNf0k",authDomain:"teamportal-baa93.firebaseapp.com",projectId:"teamportal-baa93",storageBucket:"teamportal-baa93.appspot.com",messagingSenderId:"467926069948",appId:"1:467926069948:web:3e00bb687a97dc5e1c56b9",measurementId:"G-YRV08RKZ76"})),m=b.a,p=d.auth(),h=b.a.firestore(),O=a(4),f=r.a.createContext();function g(){return Object(n.useContext)(f)}function x(e){var t=e.children,a=Object(n.useState)(),r=Object(u.a)(a,2),c=r[0],i=r[1],s=Object(n.useState)(!0),o=Object(u.a)(s,2),l=o[0],j=o[1];Object(n.useEffect)((function(){return p.onAuthStateChanged((function(e){i(e),j(!1)}))}),[]);var b={currentUser:c,login:function(e,t){return p.signInWithEmailAndPassword(e,t)},logout:function(){return p.signOut()},signup:function(e,t){return p.createUserWithEmailAndPassword(e,t)}};return Object(O.jsx)(f.Provider,{value:b,children:!l&&t})}var v=a(23),y=a(135),w=a(185),C=(a(246),a(205)),N=a(38),k=a(59),S=(a(250),Object(j.a)((function(e){return{"@global":{ul:{margin:0,padding:0,listStyle:"none"}},appBar:{borderBottom:"1px solid ".concat(e.palette.divider),position:"fixed",top:0,background:"black",color:"white"},toolbar:{flexWrap:"wrap"},toolbarTitle:{flexGrow:1},link:{margin:e.spacing(1,1.5)}}}))),I=function(){var e=Object(k.b)(),t=(S(),Object(n.useState)("")),a=Object(u.a)(t,2),r=(a[0],a[1]),c=g(),i=(c.currentUser,c.logout);Object(v.f)();function s(){return(s=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(""),e.prev=1,e.next=4,i();case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("Failed to log out"),r("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,6]])})))).apply(this,arguments)}return Object(O.jsxs)(y.a,{id:"myNav",collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(O.jsx)(y.a.Brand,{id:"title",href:"#home",children:"Team Portal"}),Object(O.jsx)(y.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(O.jsxs)(y.a.Collapse,{id:"responsive-navbar-nav",children:[Object(O.jsxs)(w.a,{className:"mr-auto",children:[Object(O.jsx)(N.c,{className:"navLink",as:N.b,to:"/members",children:"Mmebers"}),Object(O.jsx)(N.c,{className:"navLink",to:"/createprofile",onClick:function(){e({type:"createProfile"})},children:"Crate Profile"})]}),Object(O.jsxs)(w.a,{children:[Object(O.jsx)(C.a,{id:"logOutButton",className:"navLink",variant:"outline-warning",onClick:function(e){return s.apply(this,arguments)},children:"Log Out"})," "]})]})]})},P=a(329),R=a(276),F=a(39),E=a(206),D=a.n(E),T=a(142),L=a.n(T),W=a(331),A=a(333),B=a(338),U=a(212),z=a(326),q=a(320),J=a(332),G=a(321),V=a(322),H=a(323);function M(e){return Object(O.jsx)(W.a,Object(F.a)({elevation:6,variant:"filled"},e))}var _=Object(j.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},formPaper:{backgroundColor:e.palette.background.paper,padding:e.spacing(2,4,3),marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},root:{width:"100%",marginTop:"20px"}}})),K={signInFlow:"popup",signInSuccessUrl:"/members",signInOptions:[m.auth.GoogleAuthProvider.PROVIDER_ID,m.auth.GithubAuthProvider.PROVIDER_ID]};function X(){var e=_(),t=Object(n.useRef)(),a=Object(n.useRef)(),c=r.a.useState(!1),i=Object(u.a)(c,2),s=i[0],j=i[1],b=g(),d=b.currentUser,p=b.login,h=Object(n.useState)(""),f=Object(u.a)(h,2),x=f[0],y=f[1],w=Object(n.useState)(!1),C=Object(u.a)(w,2),N=(C[0],C[1]),k=Object(v.f)();function S(){return(S=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),console.log("aaa"),e.prev=2,y(""),N(!0),e.next=7,p(t.current.value,a.current.value);case 7:k.push("/members"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),y("Failed to log in"),j(!0);case 14:N(!1);case 15:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}console.log(d);var I=function(){j(!1)};return Object(O.jsxs)("div",{className:e.formPaper,children:[Object(O.jsx)(B.a,{className:e.avatar,children:Object(O.jsx)(L.a,{})}),Object(O.jsx)(U.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(O.jsx)(A.a,{open:s,autoHideDuration:6e3,onClose:I,children:Object(O.jsx)(M,{onClose:I,severity:"error",children:x})}),Object(O.jsxs)("form",{className:e.form,onSubmit:function(e){return S.apply(this,arguments)},noValidate:!0,children:[Object(O.jsx)(z.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,inputRef:t}),Object(O.jsx)(z.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Password",type:"password",autoComplete:"current-password",inputRef:a}),Object(O.jsx)("div",{children:Object(O.jsx)(D.a,{uiConfig:K,firebaseAuth:m.auth()})}),Object(O.jsx)(q.a,{control:Object(O.jsx)(J.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(O.jsx)(G.a,{fullWidth:!0,variant:"contained",color:"primary",className:e.submit,type:"submit",children:"Sign In"}),Object(O.jsxs)(V.a,{container:!0,children:[Object(O.jsx)(V.a,{item:!0,xs:!0,children:Object(O.jsx)(H.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(O.jsx)(V.a,{item:!0,children:Object(O.jsx)(H.a,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]})}function Y(){var e=r.a.useState(!1),t=Object(u.a)(e,2),a=t[0],n=t[1];return Object(O.jsx)(P.a,{closeIcon:!0,open:a,trigger:Object(O.jsx)(R.a,{className:"button",inverted:!0,color:"violet",content:"Sign in",icon:"sign in",size:"big"}),onClose:function(){return n(!1)},onOpen:function(){return n(!0)},children:Object(O.jsx)(X,{})})}function Z(e){return Object(O.jsx)(W.a,Object(F.a)({elevation:6,variant:"filled"},e))}var Q=Object(j.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2,4,3)},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},root:{width:"100%",marginTop:"20px"}}}));function $(){var e=Q(),t=Object(n.useRef)(),a=Object(n.useRef)(),c=Object(n.useRef)(),i=Object(n.useRef)(),s=Object(n.useRef)(),j=r.a.useState(!1),b=Object(u.a)(j,2),d=b[0],m=b[1],p=r.a.useState(!1),f=Object(u.a)(p,2),x=f[0],y=f[1],w=g(),C=w.currentUser,N=w.signup,k=Object(n.useState)(""),S=Object(u.a)(k,2),I=S[0],F=S[1],E=Object(n.useState)(!1),D=Object(u.a)(E,2),T=D[0],W=D[1];Object(v.f)();function H(){return(H=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a.current.value===c.current.value){e.next=4;break}return F("Passwords do not match"),e.abrupt("return",y(!0));case 4:if(console.log(a.current.value,c.current.value),i.current.value&&s.current.value){e.next=8;break}return F("Name can not be empty"),e.abrupt("return",y(!0));case 8:return F(""),W(!0),e.next=12,N(t.current.value,a.current.value).then((function(e){e.user.updateProfile({displayName:"".concat(i.current.value," ").concat(s.current.value)}),h.collection("users").doc(e.user.uid).set({name:"".concat(i.current.value," ").concat(s.current.value)}).then((function(){console.log("Document successfully written!")})).catch((function(e){console.error("Error writing document: ",e)}))})).catch((function(e){var t=e.message;F(t),y(!0)}));case 12:W(!1);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=function(e,t){y(!1)};return Object(O.jsx)(P.a,{closeIcon:!0,open:d,trigger:Object(O.jsx)(R.a,{className:"button",inverted:!0,color:"pink",content:"Sign up",icon:"signup",size:"big"}),onClose:function(){m(!1),y(!1)},onOpen:function(){return m(!0)},children:Object(O.jsxs)("div",{className:e.paper,children:[Object(O.jsx)(B.a,{className:e.avatar,children:Object(O.jsx)(L.a,{})}),Object(O.jsx)(U.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(O.jsx)("p",{children:JSON.stringify(C)}),Object(O.jsx)(A.a,{open:x,autoHideDuration:6e3,onClose:M,children:Object(O.jsx)(Z,{onClose:M,severity:"error",children:I})}),I&&Object(O.jsx)("p",{children:I}),Object(O.jsxs)("form",{onSubmit:function(e){return H.apply(this,arguments)},className:e.form,noValidate:!0,children:[Object(O.jsxs)(V.a,{container:!0,spacing:2,children:[Object(O.jsx)(V.a,{item:!0,xs:12,sm:6,children:Object(O.jsx)(z.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,label:"First Name",autoFocus:!0,inputRef:i})}),Object(O.jsx)(V.a,{item:!0,xs:12,sm:6,children:Object(O.jsx)(z.a,{variant:"outlined",required:!0,fullWidth:!0,label:"Last Name",autoComplete:"lname",inputRef:s})}),Object(O.jsx)(V.a,{item:!0,xs:12,children:Object(O.jsx)(z.a,{variant:"outlined",required:!0,fullWidth:!0,label:"Email Address",autoComplete:"email",inputRef:t})}),Object(O.jsx)(V.a,{item:!0,xs:12,children:Object(O.jsx)(z.a,{variant:"outlined",required:!0,fullWidth:!0,label:"Password",type:"password",inputRef:a,autoComplete:"current-password"})}),Object(O.jsx)(V.a,{item:!0,xs:12,children:Object(O.jsx)(z.a,{variant:"outlined",required:!0,fullWidth:!0,label:"Password Confirm",type:"password",inputRef:c,autoComplete:"current-password"})}),Object(O.jsx)(V.a,{item:!0,xs:12,children:Object(O.jsx)(q.a,{control:Object(O.jsx)(J.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."})})]}),Object(O.jsx)(G.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,disabled:T,children:"Sign Up"}),Object(O.jsx)(V.a,{container:!0,justify:"flex-end",children:Object(O.jsx)(V.a,{item:!0})})]})]})})}a(268);var ee=a(324),te=a(318);function ae(){return Object(O.jsxs)(te.a,{style:{backgroundImage:"linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)"},children:[" ",Object(O.jsxs)(ee.a,{id:"welcomeContainer",maxWidth:"lg",style:{minHeight:"100vh"},children:[Object(O.jsx)("h1",{children:"Team Portal"}),Object(O.jsxs)("div",{id:"welcomeInner",children:[Object(O.jsx)(Y,{}),Object(O.jsx)($,{})]})]})]})}a(169);var ne=a(105),re=a(328),ce=a(335),ie=a(336);a(269);function se(){return(se=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("users").get();case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var oe=a(98),le=function(e){var t=e.changable,a=e.newProfile,r=Object(n.useState)("https://www.clipartmax.com/png/full/257-2572603_user-man-social-avatar-profile-icon-man-avatar-in-circle.png"),c=Object(u.a)(r,2),i=c[0],s=c[1],o=Object(n.useState)(!t),l=Object(u.a)(o,2),j=l[0],b=l[1],d=(Object(v.g)().id,Object(k.c)((function(e){return e}))),m=Object(n.useState)(d),p=Object(u.a)(m,2),f=p[0],g=p[1];console.log("profile:"+f);var x=function(e,t){var a=t.name,n=t.value;g(Object.assign({},f,Object(ne.a)({},a,n)))};return Object(O.jsx)(te.a,{id:"paper",children:Object(O.jsx)(ee.a,{maxWidth:"lg",style:{minHeight:"100vh"},children:Object(O.jsxs)(re.a,{id:"createProfileForm",onSubmit:function(e){var t;t=f,h.collection("users").add(t).then((function(e){console.log("Document written with ID: ",e.id)})).catch((function(e){console.error("Error adding document: ",e)}))},children:[Object(O.jsxs)("div",{className:"file-input",style:{marginBottom:"30px"},children:[Object(O.jsx)("input",{accept:"image/*",onChange:function(e){if(""!==e.target.value){var t=URL.createObjectURL(e.target.files[0]);s(t),Object.assign(f,{profileImage:t}),console.log("image changed"),console.log(t)}},type:"file",id:"file",className:"file",name:"file"}),Object(O.jsx)("label",{for:"file",style:{backgroundImage:"url(".concat(i,")")},children:Object(O.jsx)("div",{id:"overlay",children:Object(O.jsx)(oe.a,{size:"large",name:"upload"})})})]}),Object(O.jsx)("h2",{style:{textAlign:"center",marginBottom:"30px"},children:f.firstName+" "+f.lastName}),Object(O.jsxs)(ce.a,{stackable:!0,columns:2,children:[Object(O.jsxs)(ce.a.Column,{width:6,children:[Object(O.jsxs)(ie.a,{className:"segment",children:[Object(O.jsx)("h3",{children:"Personal Information"}),Object(O.jsxs)(re.a.Group,{children:[Object(O.jsx)(re.a.Input,{value:f.firstName,readOnly:j,label:"First Name",name:"firstName",width:8,placeholder:"First Name",onChange:x}),Object(O.jsx)(re.a.Input,{value:f.lastName,id:"lastName",readOnly:j,label:"Last Name",name:"lastName",width:8,placeholder:"Last Name",onChange:x})]}),Object(O.jsx)("br",{}),Object(O.jsx)(re.a.Input,{value:f.email,readOnly:j,label:"Email",name:"email",placeholder:"Email",type:"email",onChange:x}),Object(O.jsx)(re.a.Input,{value:f.tel,readOnly:j,label:"Phone Number",name:"tel",placeholder:"Phone Number",type:"tel",onChange:x})]}),Object(O.jsxs)(ie.a,{className:"segment",children:[Object(O.jsx)("h3",{children:"Team Role"}),Object(O.jsx)(re.a.Input,{value:f.team,readOnly:j,label:"Team",placeholder:"Team",name:"team",onChange:x}),Object(O.jsx)(re.a.Input,{value:f.position,readOnly:j,label:"Position",placeholder:"Position",name:"position",onChange:x}),Object(O.jsx)(re.a.Input,{value:f.leader,readOnly:j,label:"Leader ",placeholder:"Leader",name:"leader",onChange:x})]})]}),Object(O.jsx)(ce.a.Column,{width:10,children:Object(O.jsx)(ie.a,{className:"segment",children:Object(O.jsx)(re.a.TextArea,{value:f.des,readOnly:j,label:"Self Description",name:"des",onChange:x})})})]}),a?Object(O.jsx)("div",{children:j?Object(O.jsx)(R.a,{onClick:function(e){b(!1)},color:"linkedin",floated:"right",size:"big",style:{width:"110px"},children:"Edit"}):Object(O.jsxs)("div",{style:{overflow:"hidden"},children:[Object(O.jsx)(R.a,{type:"submit",color:"green",size:"big",content:"Submit",floated:"right",style:{width:"110px"}}),Object(O.jsx)(R.a,{onClick:function(){b(!0),g(d)},type:"reset",color:"red",size:"big",floated:"right",style:{width:"110px"},children:"Cancel"})]})}):Object(O.jsx)("div",{style:{overflow:"hidden"},children:Object(O.jsx)(R.a,{as:N.b,to:"/members",color:"twitter",size:"big",floated:"right",style:{width:"110px"},children:"Back"})})]})})})},ue=a(330),je=(oe.a,function(e){var t=e.onClick,a=e.image,n=e.header,r=e.meta,c=e.des,i=e.toPath,s=e.as;return Object(O.jsx)(ue.a,{onClick:t,image:a,header:n,meta:r,description:c,to:i,as:s})}),be=(a(270),a(271),a(325)),de=a(327),me=function(){var e=Object(k.b)(),t=Object(n.useState)(),a=Object(u.a)(t,2),r=a[0],c=a[1],i=function(e,t){var a=t.value,n=t.name,i=Object.assign({},r);""==a?(console.log("input is empty"),delete i[n],console.log("tempFilter is",i),c(i)):c(Object.assign({},i,Object(ne.a)({},n,a)))};return Object(n.useEffect)((function(){console.log(r),e({type:"applyFilter",content:r})})),Object(O.jsxs)("form",{id:"filter",children:[Object(O.jsx)("h3",{children:"Filter"}),Object(O.jsx)(be.a,{className:"cus_input",name:"name",onChange:i,placeholder:"search name"}),Object(O.jsx)(be.a,{className:"cus_input",name:"team",onChange:i,placeholder:"search team"}),Object(O.jsx)(de.a,{id:"selector",text:"sort by",icon:"filter",floating:!0,labeled:!0,button:!0,className:"icon",children:Object(O.jsx)(de.a.Menu,{children:["Name","Team","Position"].map((function(e){return Object(O.jsx)(de.a.Item,{children:e})}))})}),Object(O.jsx)(R.a,{type:"button",color:"green",size:"small",onClick:function(){e({type:"applyFilter",content:r})},children:"Apply Filter"})]})},pe=a(210),he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{name:"bot1"},t=arguments.length>1?arguments[1]:void 0;switch(console.log("action:"+t.type),t.type){case"selectMember":return t.profile;case"createProfile":return{firstName:"",lastName:"",email:"",tel:"",team:"",position:"",leader:"",des:""};case"applyFilter":return Object(F.a)(Object(F.a)({},e),{},{memberfilter:t.content});default:return{firstName:"",lastName:"",email:"",tel:"",team:"",position:"",leader:"",des:""}}},Oe=Object(pe.a)(he),fe=function(){var e=g(),t=(e.currentUser,e.signup,Object(k.b)()),a=Object(k.c)((function(e){return e.memberfilter})),r=Object(n.useState)([]),c=Object(u.a)(r,2),i=c[0],s=c[1];return Object(n.useEffect)((function(){(function(e){return se.apply(this,arguments)})("users").then((function(e){var t=[];e.forEach((function(e){t.push(Object.assign({},e.data(),{id:e.id}))})),s(t)}))}),[]),Object(O.jsx)(te.a,{style:{backgroundImage:"linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)"},children:Object(O.jsxs)(ee.a,{maxWidth:"lg",style:{minHeight:"100vh"},children:[" ",Object(O.jsx)(ce.a,{id:"cardsGroup",children:i.filter((function(e){return function(e,t){if(!e||0===Object.keys(e).length)return!0;Object.keys(e);var a,n={team:(a=t).team,name:a.name};return JSON.stringify(e)===JSON.stringify(n)}(a,e)})).map((function(e,a){return Object(O.jsxs)(ce.a.Column,{mobile:8,tablet:4,computer:4,children:[Object(O.jsx)(je,{onClick:function(){t({type:"selectMember",profile:e})},image:"https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg",header:e.firstName+" "+e.lastName,meta:e.id,des:e.des,as:N.b,toPath:"/members/".concat(e.id)})," "]},e.id)}))})]})})},ge=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(fe,{}),Object(O.jsx)(me,{})]})};var xe=function(){return Object(O.jsx)(N.a,{children:Object(O.jsx)(x,{children:Object(O.jsxs)(k.a,{store:Oe,children:[Object(O.jsx)(v.b,{exact:!0,path:"/",component:ae}),Object(O.jsx)(v.b,{path:"/(.+)",render:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(I,{}),Object(O.jsx)(v.b,{exact:!0,path:"/members",component:ge}),Object(O.jsx)(v.b,{path:"/createprofile",children:Object(O.jsx)(le,{changable:!0,newProfile:!0})}),Object(O.jsx)(v.b,{path:"/members/:id",children:Object(O.jsx)(le,{changable:!1,newProfile:!1})})]})}})]})})})},ve=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,340)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(xe,{})}),document.getElementById("root")),ve()}},[[272,1,2]]]);
//# sourceMappingURL=main.7d48b18f.chunk.js.map