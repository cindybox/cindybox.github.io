(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{221:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=(a(222),a(226)),i=a(236),l=a(238),c=a(240),m=a(227),s=m.a.div.withConfig({displayName:"IntroContainer",componentId:"q4nwqh-0"})(['.intro{margin-bottom:10% !important;}.hi{color:var(--brightGreen);}.intro-p1{font-size:4rem;color:var(--mainDark);line-height:6rem;font-family:"Avenir Next",sans-serif;letter-spacing:0.15rem;}.intro-p1 strong{font-size:5rem;color:var(--mainDark);}@media (min-width:1281px){}@media (min-width:1025px) and (max-width:1280px){}@media (min-width:768px) and (max-width:1024px){}@media (min-width:768px) and (max-width:1024px) and (orientation:landscape){.intro-p1{font-size:3.2rem;line-height:5rem;}.intro-p1 strong{font-size:3.6rem;}}@media (min-width:481px) and (max-width:767px){.intro{text-align:center;}.intro-p1{font-size:2.3rem;line-height:4.2rem;}.intro-p1 strong{font-size:2.8rem;}}@media (min-width:320px) and (max-width:480px){.intro{text-align:center;}.intro-p1{font-size:1.6rem;line-height:3rem;}.intro-p1 strong{font-size:2rem;}}']),p=function(e){var t=e.children;return r.a.createElement(s,null,t," ")},d=function(){return r.a.createElement("div",null,r.a.createElement(p,null,r.a.createElement("section",{id:"intro",class:"container intro mt-5 pt-5"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",{class:"intro-p1 mb-5"},r.a.createElement("span",{className:"hi"}," HI,")," I AM",r.a.createElement("br",null),r.a.createElement("div",{className:"mb-2 mt-2"},r.a.createElement("strong",null," XINGLIANG TONG")),"I DESIGN AND BUILD WEB APPLICATIONS"),r.a.createElement("h1",{class:"text-subtitle"},"View Some of My Projects"," ",r.a.createElement(c.a,{style:{color:"var(--brightGreen)",fontSize:"120%"}})),r.a.createElement("div",{class:"next-page"},r.a.createElement("a",{href:"#"},r.a.createElement("i",{class:"fas fa-arrow-down"})))))))},u=a(232),g=a.n(u),h=a(315),v=a.n(h),f=function(e){return r.a.createElement("div",{className:"col-12 col-lg-6 p-3"},r.a.createElement("div",{className:"projectImageContainer"},r.a.createElement("a",{href:e.projectInfo.projectUrl},r.a.createElement("img",{alt:"...",class:"img-raised",src:e.projectInfo.imgUrl,style:{width:"100vw",objectFit:"contain",objectPosition:"50% 50%"}}),r.a.createElement("div",{className:"projectLink text-capitalize d-flex justify-content-center align-items-center"},"View It Live"))))},b=function(e){return r.a.createElement("div",{className:e.classname},r.a.createElement("div",{className:"text-left "},r.a.createElement("p",{className:"project-title text-uppercase"},r.a.createElement("strong",null," ",e.projectInfo.projectName)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 d-flex"},r.a.createElement("a",{class:" btn  btn-green ",href:e.projectInfo.githubUrl},"View Code on Github")))),r.a.createElement("p",{class:"project-desc mt-4"},r.a.createElement("strong",null,r.a.createElement("em",{style:{color:"var(--lightGrey)"}},e.projectInfo.projectType)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("ul",null,v()(e.projectInfo.projectDescription)," ")),r.a.createElement("div",{className:"text-right"},r.a.createElement("a",{class:"moreInfo text-muted border-bottom ",href:"#"},"More Info")))},E=m.a.div.withConfig({displayName:"SelectedProject__ProjectContainer",componentId:"sc-199xea7-0"})(["background:",";.project-desc{font-size:1rem;text-align:left;}.projectImageContainer{position:relative;width:100%;height:100%;}.projectLink{background:rgba(0,0,0,0.7);font-weight:bold;font-size:1.2rem;color:var(--brightGreen);position:absolute;top:0;width:100%;height:100%;left:0;bottom:0;right:0;visibility:hidden;}.projectImageContainer:hover .projectLink{visibility:visible;}@media (min-width:1281px){.textBelow{display:none !important;}.textAbove{display:show !important;}}@media (min-width:998px) and (max-width:1280px){.textBelow{display:none !important;}.textAbove{display:block !important;}}@media (max-width:998px){.textBelow{display:block !important;}.textAbove{display:none !important;}}"],function(e){return"true"===e.imageLeft?"var(--veryLightGrey)":"var(--mainWhite)"}),x=function(e){var t=g()("col-12","col-lg-6","p-3",{textAbove:"false"===e.imageLeft}),a=g()("col-12","col-lg-6","p-3",{textBelow:"false"===e.imageLeft});return r.a.createElement(E,{imageLeft:e.imageLeft},r.a.createElement("div",{className:"row my-5"},r.a.createElement("section",{id:"projects",class:"project container mb-3"},r.a.createElement("div",{class:"container text-center mt-5"},r.a.createElement("div",{class:"row mt-5 mb-5 p-3"},"true"===e.imageLeft?r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{projectInfo:e.projectInfo}),r.a.createElement(b,{projectInfo:e.projectInfo,classname:t})):r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{projectInfo:e.projectInfo,classname:t}),r.a.createElement(f,{projectInfo:e.projectInfo}),r.a.createElement(b,{projectInfo:e.projectInfo,textBelow:!0,classname:a})))))))},y=a(358);var j=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,null),r.a.createElement(d,null),y.projects.map(function(e){return r.a.createElement(x,{projectInfo:e,imageLeft:e.imageLeft})}),r.a.createElement(l.a,null))},n}(n.Component);t.default=j},222:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(12),i=a.n(o),l=a(60),c=a.n(l);a.d(t,"a",function(){return c.a});a(223),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},223:function(e,t,a){var n;e.exports=(n=a(230))&&n.default||n},226:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=(a(234),a(12)),i=a.n(o),l=(a(235),function(e,t){var a=e.children;return r.a.createElement(r.a.Fragment,null," ",a)});l.propTypes={children:i.a.node.isRequired},t.a=l},230:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),o=a(12),i=a.n(o),l=a(89),c=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},231:function(e,t,a){e.exports=a.p+"static/logo-c9beea036b49f9d7281904e113df8d06.png"},236:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(222),i=a(231),l=a.n(i),c=a(227),m=a(21),s=a(245),p=a(365),d=a(364);var u=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={navbarOpen:!1,pathname:""},t.componentDidMount=function(){},t.setLocation=function(){console.log(t.props.location);var e=t.props.location.pathname.slice(1);t.setState({pathname:e})},t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement(m.Location,null,function(e){var t=e.location;return r.a.createElement(g,{pathname:t.pathname.slice(1)},r.a.createElement(p.a,{bg:"light",expand:"sm",className:"navbar-expand-sm"},r.a.createElement(p.a.Brand,null,r.a.createElement(o.a,{className:"ml-2 ml-md-3 my-auto",to:"/"},r.a.createElement("img",{src:l.a,width:"36rem",className:"my-auto"}))),r.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav"},r.a.createElement(s.a,{style:{color:"var(--mainGrey)"}})),r.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(d.a,{className:" ml-auto mt-2 mr-md-0 mr-lg-5 "},r.a.createElement("li",{className:"nav-item mx-md-auto ml-lg-5"},r.a.createElement(o.a,{to:"/",className:"nav-link"},r.a.createElement("div",{className:"col-5 col-sm-auto mx-auto text-center"},"HOME",r.a.createElement("div",{className:"navborder  mx-sm-4 mx-md-2 mx-lg-1",id:"homeborder"})))),r.a.createElement("li",{className:"nav-item ml-lg-5"},r.a.createElement(o.a,{to:"/about",className:"nav-link"},r.a.createElement("div",{className:"col-5 col-sm-auto mx-auto text-center"},"ABOUT",r.a.createElement("div",{className:"navborder  mx-sm-4 mx-md-2 mx-lg-1",id:"aboutborder"})))),r.a.createElement("li",{className:"nav-item ml-lg-5"},r.a.createElement(o.a,{to:"/portfolio",className:"nav-link"},r.a.createElement("div",{className:"col-5 col-sm-auto mx-auto text-center"},"PORTFOLIO",r.a.createElement("div",{className:"navborder  mx-sm-4 mx-md-2 mx-lg-1",id:"portfolioborder"})))),r.a.createElement("li",{className:"nav-item ml-lg-5"},r.a.createElement(o.a,{to:"/blog",className:"nav-link"},r.a.createElement("div",{className:"col-5 col-sm-auto mx-auto text-center"},"BLOG",r.a.createElement("div",{className:"navborder mx-sm-4 mx-md-2 mx-lg-1",id:"blogborder"}))))))))})},n}(n.Component),g=c.a.nav.withConfig({displayName:"Navbar__NavContainer",componentId:"sc-1a5kuvo-0"})([".navbar-expand-sm{background-color:var(--mainWhite) !important;color:white !important;}.nav-item{position:relative;}.navborder{position:absolute;top:0;bottom:0;left:0.8rem;right:0.8rem;&:hover{border-bottom:3px solid var(--brightGreen) !important;}}#homeborder{border-bottom:",";}#portfolioborder{border-bottom:",";}#aboutborder{border-bottom:",";}#blogborder{border-bottom:",";}.nav-link{color:var(--mainDark) !important;&:hover{font-weight:bold;color:var(--mainGrey) !important;}}"],function(e){return""===e.pathname?"3px solid var(--brightGreen) !important ":"3px solid var(--mainWhite) !important"},function(e){return"portfolio"===e.pathname?"3px solid var(--brightGreen) !important  ":"3px solid var(--mainWhite) !important"},function(e){return"about"===e.pathname?"3px solid var(--brightGreen) !important  ":"3px solid var(--mainWhite) !important"},function(e){return"blog"===e.pathname?"3px solid var(--brightGreen) !important  ":"3px solid var(--mainWhite) !important"});t.a=u},238:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=(a(222),a(231),a(240));var i=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 col-md-3 col-lg-2 mx-auto my-5"},r.a.createElement("div",{className:"d-flex flex-row justify-content-around"},r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/cindybox",className:"social-icon"},r.a.createElement(o.d,null))),r.a.createElement("div",null,r.a.createElement("a",{href:"https://dribbble.com/cindybox",className:"social-icon"},r.a.createElement(o.c,null))),r.a.createElement("div",null,r.a.createElement("a",{href:"https://www.instagram.com/cindytong/",className:"social-icon"},r.a.createElement(o.e,null))),r.a.createElement("div",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/xingliang-cindy-tong-63942720/",className:"social-icon"},r.a.createElement(o.f,null))))))},n}(n.Component);t.a=i},337:function(e,t){},358:function(e){e.exports={projects:[{projectName:"Medx Pharmacy",imgUrl:"images/medx.jpg",projectUrl:"https://admiring-beaver-c389fd.netlify.com",githubUrl:"https://github.com/cindybox/medx-demo",projectType:"Professional Project. Design and Develop",projectDescription:"<li>UI and UX Designed and Prototyped in Adobe XD, Adobe Indesign, and Adobe Photoshop</li> <li>Designed graphics including banner image and icons</li><li>Developed in React</li><li>Fully Responsive Design</li>",imageLeft:"true"},{projectName:"Planter Land",imgUrl:"images/planterland.jpg",projectUrl:"https://planterland.herokuapp.com/",githubUrl:"https://github.com/cindybox/Shopping---Planterland",projectType:"Personal Project. Design and Develop",projectDescription:"<li>UI, UX and Branding Elements Designed and Prototyped in Adobe XD, Adobe Indesign, and Adobe Photoshop</li> <li>MongoDB-Express-React-Node stack development</li><li>User Authentication with Passport</li><li>Utilized React Context to pass Props</li><li>Fully Responsive Design</li>",imageLeft:"false"},{projectName:"City Scope",imgUrl:"images/cityscope1.PNG",projectUrl:"https://optimistic-khorana-27037b.netlify.com/",githubUrl:"https://github.com/chingu-voyages/v9-geckos-team-19",projectType:"Team Project. Part of UI, build landing and two components",projectDescription:"<li>UI Design in Photoshop</li><li>Front end developed in React</li><li>Utilized Telescope API</li><li>Fully Responsive Design</li>",imageLeft:"true"},{projectName:"Connect-4",imgUrl:"images/connect-4.PNG",projectUrl:"https://glacial-savannah-17506.herokuapp.com/",githubUrl:"https://github.com/cindybox/Connect4",projectType:"Personal Project. Design and Develop",projectDescription:"<li>UI Design in Photoshop</li><li>Front end developed in React</li><li>Fully Responsive Design</li>",imageLeft:"false"}]}}}]);
//# sourceMappingURL=component---src-pages-index-js-386fad2e53d3fa572203.js.map