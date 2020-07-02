(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{215:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(221),i=a(238),l=a(224),c=a(226),m=a(235),s=a(236),d=a(278),p=a.n(d),u=a(222).a.div.withConfig({displayName:"about__AboutContainer",componentId:"sc-190nmfb-0"})(["color:var(--mainGrey) !important;.profilepic{width:200px;height:300px;object-fit:cover;object-position:60% 50%;}.text-subtitle{color:var(--mainDark) !important;}@media (min-width:1281px){{}}@media (min-width:1025px) and (max-width:1280px){{}}@media (min-width:768px) and (max-width:1024px){{}}@media (min-width:768px) and (max-width:1024px) and (orientation:landscape){}@media (min-width:481px) and (max-width:767px){.profilepic{width:300px;height:200px;}}@media (min-width:320px) and (max-width:480px){.profilepic{width:300px;height:200px;}}"]);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(c.a,{title:"About"}),r.a.createElement(m.a,null),r.a.createElement(u,null,r.a.createElement("div",{className:"container mt-5 p-5"},r.a.createElement("div",{className:"row mb-5"},r.a.createElement("div",{className:"col-10 col-md-4  mx-auto"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("img",{src:p.a,alt:"profile",className:"profilepic"}))),r.a.createElement("div",{className:"col-10 col-md-8 mx-auto"},r.a.createElement("div",{className:"border-bottom"}," ",r.a.createElement("h3",{style:{color:"var(--mainDark)"}}," Design + Code "),r.a.createElement("h5",{className:"mb-3"}," Endless Possibility ")),r.a.createElement("p",{className:"about-desc mt-3",style:{lineHeight:"1.8rem"}},"I am a problem solver. That is why both design and coding are so intriguing to me.",r.a.createElement("br",{style:{lineHeight:"3rem"}}),"I have been a landscape architect for years. This experience has not only given me a keen sense of aesthetics, but more importantly, how to design around users.",r.a.createElement("br",{style:{lineHeight:"3rem"}}),"Now I design and build apps that focus on enhanced user experience. I strive to build better,lighter, and more effective applications. Learning is my superpower.",r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("div",{className:"text-subtitle text-capitalize "},"Check One of My Design Case Study ",r.a.createElement(o.a,{to:"/blog"},r.a.createElement(i.b,{style:{color:"var(--brightGreen)",fontSize:"120%"}}))),r.a.createElement("div",{className:"text-subtitle text-capitalize "},"find my resume here ",r.a.createElement(o.a,{to:"/resume"},r.a.createElement(i.b,{style:{color:"var(--brightGreen)",fontSize:"120%"}}))))," "))),r.a.createElement(s.a,null))}},221:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(11),i=a.n(o),l=a(60),c=a.n(l);a.d(t,"a",function(){return c.a});a(223),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},223:function(e,t,a){var n;e.exports=(n=a(228))&&n.default||n},224:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(11),i=a.n(o),l=a(225),c=(a(230),a(231),a(233),a(234),function(e,t){var a=e.children;return r.a.createElement(l.a,null," ",a)});c.propTypes={children:i.a.node.isRequired},t.a=c},226:function(e,t,a){"use strict";var n=a(227),r=a(0),o=a.n(r),i=a(11),l=a.n(i),c=a(237),m=a.n(c);function s(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,l=n.data.site,c=t||l.siteMetadata.description;return o.a.createElement(m.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:c}].concat(r)})}s.defaultProps={lang:"en",meta:[],description:""},s.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},t.a=s},227:function(e){e.exports={data:{site:{siteMetadata:{title:"Xingliang Tong",description:"Designer and Coder, building the next web product",author:"xtong"}}}}},228:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),o=a(11),i=a.n(o),l=a(89),c=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},229:function(e,t,a){e.exports=a.p+"static/logo-c9beea036b49f9d7281904e113df8d06.png"},235:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(221),i=a(229),l=a.n(i),c=a(222),m=a(251),s=a(239);var d=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={navbarOpen:!1,pathname:""},t.componentDidMount=function(){t.setLocation(),console.log("set path to current page location")},t.setLocation=function(){var e=t.props.location.pathname.slice(1);console.log("about"===e),t.setState({pathname:e})},t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement(p,{pathname:this.state.pathname},r.a.createElement("nav",{className:" navbar navbar-expand-sm navbar-dark bg-dark"},r.a.createElement(o.a,{className:"nav-brand ml-2 ml-md-3 my-auto",to:"/"},r.a.createElement("img",{src:l.a,width:"36rem",className:"my-auto"})),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerList","aria-controls":"navbarTogglerList","aria-expanded":"true","aria-label":"Toggle navigation"},r.a.createElement(s.a,{style:{color:"var(--mainGrey)"}})),r.a.createElement("div",{class:"collapse  navbar-collapse",id:"navbarTogglerList"},r.a.createElement("ul",{className:"navbar-nav ml-auto mt-2 mr-md-0 mr-lg-5 "},r.a.createElement("li",{className:"nav-item mx-md-auto ml-lg-5"},r.a.createElement(o.a,{to:"/",className:"nav-link"},r.a.createElement("div",{className:"col-3 col-sm-auto mx-auto text-center"},"HOME",r.a.createElement("div",{className:"navborder mx-2",id:"homeborder"})))),r.a.createElement("li",{className:"nav-item ml-lg-5"},r.a.createElement(o.a,{to:"/about",className:"nav-link"},r.a.createElement("div",{className:"col-3 col-sm-auto mx-auto text-center"},"ABOUT",r.a.createElement("div",{className:"navborder mx-2",id:"aboutborder"})))),r.a.createElement("li",{className:"nav-item ml-lg-5"},r.a.createElement(o.a,{to:"/portfolio",className:"nav-link"},r.a.createElement("div",{className:"col-3 col-sm-auto mx-auto text-center"},"PORTFOLIO",r.a.createElement("div",{className:"navborder mx-2",id:"portfolioborder"})))),r.a.createElement("li",{className:"nav-item ml-lg-5"},r.a.createElement(o.a,{to:"/blog",className:"nav-link"},r.a.createElement("div",{className:"col-3 col-sm-auto mx-auto text-center"},"BLOG",r.a.createElement("div",{className:"navborder mx-2",id:"blogborder"}))))))))},n}(n.Component),p=c.a.nav.withConfig({displayName:"Navbar__NavContainer",componentId:"sc-1a5kuvo-0"})(["nav .navbar,.navbar-expand-sm{background-color:var(--mainWhite) !important;color:white !important;}.nav-item{position:relative;}.navborder{position:absolute;top:0;bottom:0;left:0.8rem;right:0.8rem;&:hover{border-bottom:3px solid var(--brightGreen) !important;}}#homeborder{border-bottom:",";}#portfolioborder{border-bottom:",";}#aboutborder{border-bottom:",";}#blogborder{border-bottom:",";}.nav-link{color:var(--mainDark) !important;&:hover{font-weight:bold;color:var(--mainGrey) !important;}}"],function(e){return""===e.pathname?"3px solid var(--brightGreen) !important ":"3px solid var(--mainWhite) !important"},function(e){return"portfolio"===e.pathname?"3px solid var(--brightGreen) !important  ":"3px solid var(--mainWhite) !important"},function(e){return"about"===e.pathname?"3px solid var(--brightGreen) !important  ":"3px solid var(--mainWhite) !important"},function(e){return"blog"===e.pathname?"3px solid var(--brightGreen) !important  ":"3px solid var(--mainWhite) !important"}),u=Object(m.d)(d);t.a=u},236:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=(a(221),a(229),a(238));var i=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 col-md-3 col-lg-2 mx-auto my-5"},r.a.createElement("div",{className:"d-flex flex-row justify-content-around"},r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/cindybox",className:"social-icon"},r.a.createElement(o.d,null))),r.a.createElement("div",null,r.a.createElement("a",{href:"https://dribbble.com/cindybox",className:"social-icon"},r.a.createElement(o.c,null))),r.a.createElement("div",null,r.a.createElement("a",{href:"https://www.instagram.com/cindytong/",className:"social-icon"},r.a.createElement(o.e,null))),r.a.createElement("div",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/xingliang-cindy-tong-63942720/",className:"social-icon"},r.a.createElement(o.f,null))))))},n}(n.Component);t.a=i},278:function(e,t,a){e.exports=a.p+"static/profilepic-8a368fb3eb2345e0a3266e789a938a62.jpg"}}]);
//# sourceMappingURL=component---src-pages-about-js-64a15b3108524cc30b6f.js.map