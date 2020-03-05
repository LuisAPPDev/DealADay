(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),s=a.n(l),c=(a(76),a(7)),i=a(11),o=a(13),u=a(12),m=a(14),d=a(33),h=(a(77),a(78),a(36)),g=a(18),p=a(29),E=a.n(p),f=function e(){var t=this;Object(c.a)(this,e),this.signup=function(e){var a=e.username,n=e.password,r=e.email;return t.service.post("/signup",{username:a,password:n,email:r}).then((function(e){return e.data}))},this.login=function(e){var a=e.username,n=e.password;return t.service.post("/login",{username:a,password:n}).then((function(e){return e.data}))},this.logout=function(){return t.service.post("/logout").then((function(e){return e.data}))},this.loggedin=function(){return t.service.get("/loggedin").then((function(e){return e.data}))},this.service=E.a.create({baseURL:"".concat("\u200bhttps://dealaday.herokuapp.com/api","/auth"),withCredentials:!0})},v=a(10),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).logout=function(){a.services.logout().then((function(e){a.props.setTheUser(!1)})).catch((function(e){return console.log(e)}))},a.state={},a.services=new f,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.loggedInUser?r.a.createElement(r.a.Fragment,null,"Hola, ",this.props.loggedInUser.username,"!"):r.a.createElement(r.a.Fragment,null,"Hola, invitad@");return this.props.loggedInUser?r.a.createElement(h.a,{bg:"dark",expand:"lg",variant:"dark"},r.a.createElement(g.a.Link,{as:"div"}," ",r.a.createElement(v.b,{to:"/"},"Deal a Day!")),r.a.createElement(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(h.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(g.a,{className:"ml-auto"},r.a.createElement(g.a.Link,{as:"div"}," ",r.a.createElement(v.b,{to:"/"},"Inicio")),r.a.createElement(g.a.Link,{as:"div"}," ",r.a.createElement(v.b,{to:"/profile"},"Perfil")),r.a.createElement(g.a.Link,{onClick:this.logout},"Cerrar sesi\xf3n"),r.a.createElement(g.a.Link,{as:"div"},e)))):r.a.createElement(h.a,{bg:"dark",expand:"lg",variant:"dark"},r.a.createElement(g.a.Link,{as:"div"}," ",r.a.createElement(v.b,{to:"/"},"Deal a Day!")),r.a.createElement(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(h.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(g.a,{className:"ml-auto"},r.a.createElement(g.a.Link,{as:"div"}," ",r.a.createElement(v.b,{to:"/"},"Inicio")),r.a.createElement(g.a.Link,{as:"div"}," ",r.a.createElement(v.b,{to:"/signup"},"Registro")),r.a.createElement(g.a.Link,{as:"div"}," ",r.a.createElement(v.b,{to:"/login"},"Inicio sesi\xf3n")),r.a.createElement(g.a.Link,{as:"div"},e))))}}]),t}(n.Component),C=a(31),D=a(6),O=a(16),j=a(23),U=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(C.a)({},n,r))},a.postUser=function(){a.services.login(a.state).then((function(e){a.setState({username:"",password:""}),a.props.setTheUser(e),a.props.history.push("/")})).catch((function(e){return console.log({err:e})}))},a.handleSubmit=function(e){e.preventDefault(),a.postUser()},a.state={username:"",password:""},a.services=new f,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(j.a,null,r.a.createElement("h1",null,"Inicio de sesi\xf3n"),r.a.createElement(D.a,{onSubmit:this.handleSubmit},r.a.createElement(D.a.Group,null,r.a.createElement(D.a.Label,null,"Usuario"),r.a.createElement(D.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange})),r.a.createElement(D.a.Group,null,r.a.createElement(D.a.Label,null,"Contrase\xf1a"),r.a.createElement(D.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange})),r.a.createElement(O.a,{variant:"dark",type:"submit"},"Iniciar sesi\xf3n")))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(C.a)({},n,r))},a.postUser=function(){a.services.signup(a.state).then((function(e){a.setState({username:"",password:"",email:""}),a.props.setTheUser(e)})).catch((function(e){return console.log({err:e})}))},a.handleSubmit=function(e){e.preventDefault(),a.postUser()},a.state={username:"",password:"",email:""},a.services=new f,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(j.a,null,r.a.createElement("h1",null,"Registro de usuarios"),r.a.createElement(D.a,{onSubmit:this.handleSubmit},r.a.createElement(D.a.Group,null,r.a.createElement(D.a.Label,null,"Usuario"),r.a.createElement(D.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange})),r.a.createElement(D.a.Group,null,r.a.createElement(D.a.Label,null,"Contrase\xf1a"),r.a.createElement(D.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange})),r.a.createElement(D.a.Group,null,r.a.createElement(D.a.Label,null,"Email"),r.a.createElement(D.a.Control,{type:"email",name:"email",value:this.state.email,onChange:this.handleChange})),r.a.createElement(O.a,{variant:"dark",type:"submit"},"Registrarse")))}}]),t}(n.Component),y=a(54),w=a(53),I=function e(){var t=this;Object(c.a)(this,e),this.handleUpload=function(e){return t.service.post("/upload",e).then((function(e){return e.data}))},this.service=E.a.create({baseURL:"".concat("\u200bhttps://dealaday.herokuapp.com/api","/files"),withCredentials:!0})},L=function e(){var t=this;Object(c.a)(this,e),this.postDeal=function(e){return t.service.post("/new",e).then((function(e){return e.data}))},this.getDealsApproved=function(){return t.service.get("/getDealsApproved").then((function(e){return e.data}))},this.getDealsPending=function(){return t.service.get("/getDealsPending").then((function(e){return e.data}))},this.service=E.a.create({baseURL:"".concat("\u200bhttps://dealaday.herokuapp.com/api","/profile"),withCredentials:!0})},S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).finishAction=function(){a.props.closeModal()},a.postDeal=function(){a.ProfileServices.postDeal(a.state.deal).then((function(){return a.finishAction()})).catch((function(e){return console.log(e)}))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState({deal:Object(w.a)({},a.state.deal,Object(C.a)({},n,r))})},a.handleSubmit=function(e){e.preventDefault(),a.postDeal()},a.handleFileUpload=function(e){var t=new FormData;t.append("imageUrl",e.target.files[0]),a.FilesServices.handleUpload(t).then((function(e){console.log("Subida de archivo finalizada! La URL de Cloudinray es: ",e.secure_url),a.setState({deal:Object(w.a)({},a.state.deal,{imageUrl:e.secure_url})})})).catch((function(e){return console.log(e)}))},a.ProfileServices=new L,a.FilesServices=new I,a.state={deal:{name:"",category:"",description:"",imageUrl:"",author:a.props.loggedInUser._id}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(D.a,{onSubmit:this.handleSubmit},r.a.createElement(D.a.Group,null,r.a.createElement(D.a.Label,null,"Nombre"),r.a.createElement(D.a.Control,{type:"text",name:"name",value:this.state.deal.name,onChange:this.handleChange})),r.a.createElement(D.a.Group,null,r.a.createElement(D.a.Label,null,"Descripci\xf3n"),r.a.createElement(D.a.Control,{type:"text",name:"description",value:this.state.deal.description,onChange:this.handleChange})),r.a.createElement(D.a.Group,null,r.a.createElement(D.a.Label,null,"Category"),r.a.createElement(D.a.Control,{type:"text",name:"category",value:this.state.deal.category,onChange:this.handleChange})),r.a.createElement(D.a.Group,null,r.a.createElement(D.a.Label,null,"Imagen"),r.a.createElement(D.a.Control,{type:"file",name:"imageUrl",onChange:this.handleFileUpload})),r.a.createElement(O.a,{variant:"dark",type:"submit"},"Crear nuevo chollo!"))}}]),t}(n.Component),x=a(32),N=(a(102),a(26)),A=a(35),T=a(70),F=a(40),G=function(e){var t=e.name,a=e.description,n=e.imageUrl,l=e._id;return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,null,r.a.createElement(A.a,{border:"warning",style:{width:"18rem"}},r.a.createElement(A.a.Img,{variant:"top",className:" imgDeals rounded",src:"".concat(n)}),r.a.createElement(A.a.Body,null,r.a.createElement(A.a.Title,null,t),r.a.createElement(A.a.Text,null,a),r.a.createElement(A.a.Text,null,r.a.createElement("span",{style:{color:"orange"}},"899.95\u20ac")," ",r.a.createElement("strike",{style:{color:"red"}},"1156\u20ac")),r.a.createElement(O.a,{as:"div",variant:"dark",size:"sm"},r.a.createElement(v.b,{to:"/deals/".concat(l)},"Detalles"))),r.a.createElement(A.a.Footer,null,r.a.createElement(x.a,null,r.a.createElement(N.a,null,"12",r.a.createElement(F.a,{className:"icons",src:"../../../../icons/fire.png"}),"4",r.a.createElement(F.a,{className:"icons",src:"../../../../icons/icicle.png"})),r.a.createElement(N.a,null,r.a.createElement(F.a,{className:"icons",src:"../../../../icons/alarm-24px.svg"}),r.a.createElement("small",{className:"text-muted"},"3 mins ago")))))))},M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).closeModal=function(){return a.setState({showmodal:!1})},a.openModal=function(){return a.setState({showmodal:!0})},a.getDealsApproved=function(){a.state.searchDeals="Aprobados",a.services.getDealsApproved().then((function(e){return a.setState({deals:e})})).catch((function(e){return console.log(e)}))},a.getDealsPending=function(){a.state.searchDeals="Pendientes",a.services.getDealsPending().then((function(e){return a.setState({deals:e})})).catch((function(e){return console.log(e)}))},a.state={deals:[],searchDeals:"",showmodal:!1},a.services=new L,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,null,r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("h4",null,"Bienvenido ",this.props.loggedInUser.username)),r.a.createElement(x.a,null,r.a.createElement("br",null),r.a.createElement("div",{class:"col-md-5"},r.a.createElement("ul",{class:"list-group"},r.a.createElement("li",{class:"list-group-item d-flex justify-content-between align-items-center"},this.props.loggedInUser&&r.a.createElement(v.b,{to:"#",onClick:this.openModal},"Crear nuevo chollo")),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},this.props.loggedInUser&&r.a.createElement(v.b,{to:"#",onClick:this.getDealsApproved},"Ver chollos publicados"),r.a.createElement("span",{className:"badge badge-primary badge-pill"},this.state.deals.length)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},this.props.loggedInUser&&r.a.createElement(v.b,{to:"#",onClick:this.getDealsPending},"Ver chollos pendientes de aprobacion"),r.a.createElement("span",{className:"badge badge-primary badge-pill"},"1"))))),r.a.createElement("div",{className:"row"},this.state.searchDeals,this.state.deals.map((function(e){return r.a.createElement(r.a.Fragment,null," ",r.a.createElement(G,Object.assign({key:e._id},e)))})))),r.a.createElement(y.a,{show:this.state.showmodal,onHide:this.closeModal},r.a.createElement(y.a.Body,null,r.a.createElement("h3",null,"Nuevo chollo"),r.a.createElement("hr",null),r.a.createElement(S,{loggedInUser:this.props.loggedInUser,closeModal:this.closeModal}))))}}]),t}(n.Component),R=function e(){var t=this;Object(c.a)(this,e),this.getAllDeals=function(){return t.service.get("/getAllDeals").then((function(e){return e.data}))},this.getDealDetails=function(e){return t.service.get("/getOneDeal/".concat(e)).then((function(e){return e.data}))},this.getDealCreator=function(e){return t.service.get("/getDealCreator/".concat(e)).then((function(e){return e.data}))},this.giveLike=function(e){return t.service.get("/giveLike/".concat(e)).then((function(e){return e.data}))},this.giveDislike=function(e){return t.service.get("/giveDislike").then((function(e){return e.data}))},this.service=E.a.create({baseURL:"".concat("\u200bhttps://dealaday.herokuapp.com/api","/deals"),withCredentials:!0})},P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){return a.getAllDeals()},a.getAllDeals=function(){a.services.getAllDeals().then((function(e){return a.setState({deals:e})})).catch((function(e){return console.log(e)}))},a.state={deals:[]},a.services=new R,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(j.a,{style:{textAlign:"center"}},this.state.deals.length?r.a.createElement(x.a,{style:{justifyContent:"center"}},this.state.deals.map((function(e){return r.a.createElement(G,Object.assign({key:e._id},e))}))):r.a.createElement("p",null,"CARGANDO..."))}}]),t}(n.Component),B=(a(103),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){return a.getOneDeal()},a.getOneDeal=function(){a.services.getDealDetails(a.props.match.params.id).then((function(e){return a.setState({deal:e})})).catch((function(e){return console.log(e)}))},a.giveLike=function(){a.services.giveLike(a.props.match.params.id).then((function(){return a.getOneDeal()}))},a.giveDislike=function(){},a.state={deal:{}},a.services=new R,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(j.a,{className:"dealDescription"},r.a.createElement("h1",null,this.state.deal.name),r.a.createElement(F.a,{className:"icons",src:"../../../../icons/alarm-24px.svg"}),r.a.createElement("small",{className:"text-muted"},"3 mins ago"),r.a.createElement(x.a,null,r.a.createElement(N.a,{md:{span:4,offset:1}},r.a.createElement("br",null),r.a.createElement("h3",null,"Info:"),r.a.createElement("hr",null),r.a.createElement("p",null,"Descripci\xf3n: ",this.state.deal.description),r.a.createElement("p",null,"Likes: ",this.state.deal.likes&&this.state.deal.likes.length),r.a.createElement("p",null,"Dislikes:  "),r.a.createElement(O.a,{as:"div",variant:"outline-warning",className:"buttonBack",onClick:this.giveLike,size:"sm"},"DAR LIKE")),r.a.createElement(N.a,{md:{span:5,offset:1}},r.a.createElement("img",{className:"rounded dealDescriptionImg",src:this.state.deal.imageUrl,alt:this.state.deal.title}))),r.a.createElement(O.a,{as:"div",variant:"outline-warning",className:"buttonBack",size:"sm"},r.a.createElement(v.b,{to:"/"},"Volver")))}}]),t}(n.Component)),_=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).componentDidUpdate=function(t,a){return console.log("El estado de App se ha actualizado:",e.state)},e.componentDidMount=function(){return e.fetchUser()},e.setTheUser=function(t){return e.setState({loggedInUser:t})},e.fetchUser=function(){e.services.loggedin().then((function(t){return e.setState({loggedInUser:t})})).catch((function(){return e.setState({loggedInUser:!1})}))},e.state={loggedInUser:!1},e.services=new f,e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{setTheUser:this.setTheUser,loggedInUser:this.state.loggedInUser}),r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",render:function(){return r.a.createElement(P,{loggedInUser:e.state.loggedInUser})}}),r.a.createElement(d.b,{exact:!0,path:"/signup",render:function(){return r.a.createElement(k,{setTheUser:e.setTheUser})}}),r.a.createElement(d.b,{exact:!0,path:"/login",render:function(t){return r.a.createElement(U,Object.assign({setTheUser:e.setTheUser},t))}}),r.a.createElement(d.b,{exact:!0,path:"/profile",render:function(){return e.state.loggedInUser?r.a.createElement(M,{loggedInUser:e.state.loggedInUser}):r.a.createElement(d.a,{to:"/"})}}),r.a.createElement(d.b,{path:"/deals/:id",render:function(e){return r.a.createElement(B,e)}})))}}]),t}(n.Component);s.a.render(r.a.createElement(v.a,null,r.a.createElement(_,null)),document.getElementById("root"))},71:function(e,t,a){e.exports=a(104)},76:function(e,t,a){},77:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.8c2ab3f4.chunk.js.map