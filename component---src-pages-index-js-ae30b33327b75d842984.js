(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{220:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=(a(221),a(224)),i=a(231),c=a(232),l=a(234),s=a(222),m=s.a.div.withConfig({displayName:"IntroContainer",componentId:"q4nwqh-0"})(['.intro{margin-bottom:10% !important;}.hi{color:var(--brightGreen);}.intro-p1{font-size:4rem;color:var(--mainDark);line-height:6rem;font-family:"Avenir Next",sans-serif;letter-spacing:0.2rem;}.intro-p1 strong{font-size:5rem;color:var(--mainDark);}@media (min-width:1281px){}@media (min-width:1025px) and (max-width:1280px){}@media (min-width:768px) and (max-width:1024px){}@media (min-width:768px) and (max-width:1024px) and (orientation:landscape){.intro-p1{font-size:3.2rem;line-height:5rem;}.intro-p1 strong{font-size:3.6rem;}}@media (min-width:481px) and (max-width:767px){.intro{text-align:center;}.intro-p1{font-size:2.3rem;line-height:4.2rem;}.intro-p1 strong{font-size:2.8rem;}}@media (min-width:320px) and (max-width:480px){.intro{text-align:center;}.intro-p1{font-size:1.6rem;line-height:3rem;}.intro-p1 strong{font-size:2rem;}}']),u=function(e){var t=e.children;return r.a.createElement(m,null,t," ")},p=function(){return r.a.createElement("div",null,r.a.createElement(u,null,r.a.createElement("section",{id:"intro",class:"container intro mt-5 pt-5"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",{class:"intro-p1 mb-5"},r.a.createElement("span",{className:"hi"}," HI,")," I AM",r.a.createElement("br",null),r.a.createElement("div",{className:"mb-2 mt-2"},r.a.createElement("strong",null," XINGLIANG TONG")),"I DESIGN AND BUILD WEB APPLICATIONS"),r.a.createElement("h1",{class:"text-subtitle"},"View Some of My Projects"," ",r.a.createElement(l.a,{style:{color:"var(--brightGreen)",fontSize:"120%"}})),r.a.createElement("div",{class:"next-page"}," ",r.a.createElement("a",{href:"#"},r.a.createElement("i",{class:"fas fa-arrow-down"})))))))},d=function(e){return r.a.createElement("div",{className:"col-12 col-lg-6"},r.a.createElement("a",{href:e.projectInfo.projectUrl},r.a.createElement("img",{alt:"...",class:"img-raised",src:e.projectInfo.imgUrl,style:{width:"100vw",height:"300px",overflow:"hidden",objectFit:"cover",objectPosition:"0% 0%"}})))},f=function(e){return r.a.createElement("div",{className:"col-12 col-lg-6"},r.a.createElement("div",{className:"text-left"},r.a.createElement("p",{className:"project-title text-uppercase"},r.a.createElement("strong",null," ",e.projectInfo.projectName)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 d-flex"},r.a.createElement("a",{class:" btn  btn-green  ",href:e.projectInfo.projectUrl},"See It Live"),r.a.createElement("span",null," "),r.a.createElement("a",{class:" btn  btn-green ",href:e.projectInfo.githubUrl},"View Code on Github")))),r.a.createElement("p",{class:"project-desc mt-4"},r.a.createElement("strong",null,r.a.createElement("em",{style:{color:"var(--lightGrey)"}},e.projectInfo.projectType," ")),r.a.createElement("br",null),e.projectInfo.projectDescription.slice(0,300)+"..."),r.a.createElement("div",{className:"text-right"},r.a.createElement("a",{class:"moreInfo text-muted border-bottom ",href:"#"},"More Info")))},h=s.a.div.withConfig({displayName:"SelectedProject__ProjectContainer",componentId:"sc-199xea7-0"})(["background:",";.project-desc{font-size:1rem;text-align:left;}"],function(e){return"true"===e.imageLeft?"var(--veryLightGrey)":"var(--mainWhite)"}),v=function(e){return r.a.createElement(h,{imageLeft:e.imageLeft},r.a.createElement("div",{className:"row my-5"},r.a.createElement("section",{id:"projects",class:"project container mb-3"},r.a.createElement("div",{class:"container text-center mt-5"},r.a.createElement("div",{class:"row mt-5 mb-5"},"true"===e.imageLeft?r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{projectInfo:e.projectInfo}),r.a.createElement(f,{projectInfo:e.projectInfo})):r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{projectInfo:e.projectInfo}),r.a.createElement(d,{projectInfo:e.projectInfo})))))))},g=a(259);function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a(11);var y=a(29),j=a.n(y),w=a(260),x=a.n(w),N=function(){function e(e,t,a){var n=this;this.nativeMediaQueryList=e.matchMedia(t),this.active=!0,this.cancellableListener=function(){n.matches=n.nativeMediaQueryList.matches,n.active&&a.apply(void 0,arguments)},this.nativeMediaQueryList.addListener(this.cancellableListener),this.matches=this.nativeMediaQueryList.matches}return e.prototype.cancel=function(){this.active=!1,this.nativeMediaQueryList.removeListener(this.cancellableListener)},e}(),L=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return E(b(b(t=e.call.apply(e,[this].concat(n))||this)),"state",{matches:t.props.defaultMatches}),E(b(b(t)),"updateMatches",function(){var e=t.mediaQueryList.matches;t.setState({matches:e});var a=t.props.onChange;a&&a(e)}),t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.componentWillMount=function(){if("object"==typeof window){var e=this.props.targetWindow||window;"function"!=typeof e.matchMedia&&j()(!1);var t=this.props.query;"string"!=typeof t&&(t=x()(t)),this.mediaQueryList=new N(e,t,this.updateMatches),this.updateMatches()}},o.componentWillUnmount=function(){this.mediaQueryList.cancel()},o.render=function(){var e=this.props,t=e.children,a=e.render,n=this.state.matches;return a?n?a():null:t?"function"==typeof t?t(n):(!Array.isArray(t)||t.length)&&n?r.a.Children.only(t):null:null},n}(r.a.Component);E(L,"defaultProps",{defaultMatches:!0});var I=L;var k=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,null),r.a.createElement(p,null),r.a.createElement(I,{query:"(max-width:1049px)"},function(e){return e?g.projects.map(function(e){return r.a.createElement(v,{projectInfo:e,imageLeft:"true"})}):g.projects.map(function(e){return r.a.createElement(v,{projectInfo:e,imageLeft:e.imageLeft})})}),r.a.createElement(c.a,null))},n}(n.Component);t.default=k},221:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(11),i=a.n(o),c=a(60),l=a.n(c);a.d(t,"a",function(){return l.a});a(223),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},223:function(e,t,a){var n;e.exports=(n=a(227))&&n.default||n},224:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(11),i=a.n(o),c=(a(229),a(230),function(e,t){var a=e.children;return r.a.createElement(r.a.Fragment,null," ",a)});c.propTypes={children:i.a.node.isRequired},t.a=c},227:function(e,t,a){"use strict";a.r(t);a(22);var n=a(0),r=a.n(n),o=a(11),i=a.n(o),c=a(88),l=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},228:function(e,t,a){e.exports=a.p+"static/logo-c9beea036b49f9d7281904e113df8d06.png"},231:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(221),i=a(228),c=a.n(i),l=a(222);var s=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={navbarOpen:!1,css:"collapse navbar-collapse",links:[{id:1,path:"/",text:"home"},{id:2,path:"/about",text:"about"}]},t.navbarHandler=function(){},t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement(m,null,r.a.createElement("nav",{className:" navbar   navbar-expand-sm navbar-dark bg-dark"},r.a.createElement(o.a,{class:"nav-brand",to:"/"}," ",r.a.createElement("img",{src:c.a,width:"36rem"})),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerList","aria-controls":"navbarTogglerList","aria-expanded":"true","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse  navbar-collapse",id:"navbarTogglerList"},r.a.createElement("ul",{className:"navbar-nav ml-auto mt-2 mr-5 "},r.a.createElement("li",{className:"nav-item ml-lg-5"},r.a.createElement(o.a,{to:"/",className:"nav-link"},"HOME",r.a.createElement("div",{className:"navborder"}))),r.a.createElement("li",{className:"nav-item ml-lg-5"},r.a.createElement(o.a,{to:"/about",className:"nav-link"},"ABOUT",r.a.createElement("div",{className:"navborder"}))),r.a.createElement("li",{className:"nav-item ml-lg-5"},r.a.createElement(o.a,{to:"/portfolio",className:"nav-link"},"PORTFOLIO",r.a.createElement("div",{className:"navborder"}))),r.a.createElement("li",{className:"nav-item ml-lg-5"},r.a.createElement(o.a,{to:"/blog",className:"nav-link"},"BLOG",r.a.createElement("div",{className:"navborder"})))))))},n}(n.Component),m=l.a.nav.withConfig({displayName:"Navbar__NavContainer",componentId:"sc-1a5kuvo-0"})(["nav .navbar,.navbar-expand-sm{background-color:var(--mainWhite) !important;color:white !important;}.nav-item{position:relative;}.navborder{position:absolute;top:0;bottom:0;left:0.8rem;right:0.8rem;border-bottom:3px solid var(--mainWhite) !important;&:hover{border-bottom:3px solid var(--brightGreen) !important;}}.nav-link{color:var(--mainDark) !important;&:hover{font-weight:bold;color:var(--mainGrey) !important;}}"]);t.a=s},232:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=(a(221),a(228),a(234));var i=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 col-md-3 col-lg-2 mx-auto my-5"},r.a.createElement("div",{className:"d-flex flex-row justify-content-around"},r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/cindybox",className:"social-icon"},r.a.createElement(o.d,null))),r.a.createElement("div",null,r.a.createElement("a",{href:"https://dribbble.com/cindybox",className:"social-icon"},r.a.createElement(o.c,null))),r.a.createElement("div",null,r.a.createElement("a",{href:"https://www.instagram.com/cindytong/",className:"social-icon"},r.a.createElement(o.e,null))),r.a.createElement("div",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/xingliang-cindy-tong-63942720/",className:"social-icon"},r.a.createElement(o.f,null))))))},n}(n.Component);t.a=i},235:function(e,t,a){var n=a(3),r=a(128),o=a(14).f,i=a(91).f,c=a(90),l=a(63),s=n.RegExp,m=s,u=s.prototype,p=/a/g,d=/a/g,f=new s(p)!==p;if(a(8)&&(!f||a(9)(function(){return d[a(2)("match")]=!1,s(p)!=p||s(d)==d||"/a/i"!=s(p,"i")}))){s=function(e,t){var a=this instanceof s,n=c(e),o=void 0===t;return!a&&n&&e.constructor===s&&o?e:r(f?new m(n&&!o?e.source:e,t):m((n=e instanceof s)?e.source:e,n&&o?l.call(e):t),a?this:u,s)};for(var h=function(e){e in s||o(s,e,{configurable:!0,get:function(){return m[e]},set:function(t){m[e]=t}})},v=i(m),g=0;v.length>g;)h(v[g++]);u.constructor=s,s.prototype=u,a(15)(n,"RegExp",s)}a(89)("RegExp")},259:function(e){e.exports={projects:[{projectName:"Planter Land",imgUrl:"images/planterland.jpg",projectUrl:"",githubUrl:"",projectType:"Personal Project. Design and Develop",projectDescription:"This is a brand new endeavour to bring a fresh type of service targeted at designers, contractors and suppliers, it sells a collection of high-end planters but not just that. Designers often hustle among various outdoor product stores to find planter product that will work for the project, and it is often painful to put together all that information to communicate with others in the project. The goal is to build a minimalist and modern looking site that is easy to navigate for designers. It also needs to give designers the feeling of control, makes it easy for them to find planters by various criteria and share information easily with others. ",imageLeft:"true"},{projectName:"City Scope",imgUrl:"images/cityscope1.PNG",projectUrl:"https://optimistic-khorana-27037b.netlify.com/",githubUrl:"",projectType:"Team Project. Part of UI, build landing and two components",projectDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",imageLeft:"false"},{projectName:"Gardenful",imgUrl:"images/cityscope1.PNG",projectUrl:"https://optimistic-khorana-27037b.netlify.com/",githubUrl:"",projectType:"Personal Project. Design and Develop",projectDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",imageLeft:"true"}]}},260:function(e,t,a){a(23),a(17),a(12),a(44);var n=a(261),r=function(e){var t="",a=Object.keys(e);return a.forEach(function(r,o){var i=e[r];(function(e){return/[height|width]$/.test(e)})(r=n(r))&&"number"==typeof i&&(i+="px"),t+=!0===i?r:!1===i?"not "+r:"("+r+": "+i+")",o<a.length-1&&(t+=" and ")}),t};e.exports=function(e){var t="";return"string"==typeof e?e:e instanceof Array?(e.forEach(function(a,n){t+=r(a),n<e.length-1&&(t+=", ")}),t):r(e)}},261:function(e,t,a){a(13);e.exports=function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()}}}]);
//# sourceMappingURL=component---src-pages-index-js-ae30b33327b75d842984.js.map