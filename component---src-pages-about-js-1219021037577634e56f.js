(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{216:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(222),i=a(242),l=a(227),c=a(229),m=a(238),s=a(239),d=a(324),p=a.n(d),u=a(223).a.div.withConfig({displayName:"about__AboutContainer",componentId:"sc-190nmfb-0"})(["color:var(--mainGrey) !important;.profilepic{width:200px;height:300px;object-fit:cover;object-position:60% 50%;}.text-subtitle{color:var(--mainDark) !important;}@media (min-width:1281px){{}}@media (min-width:1025px) and (max-width:1280px){{}}@media (min-width:768px) and (max-width:1024px){{}}@media (min-width:768px) and (max-width:1024px) and (orientation:landscape){}@media (min-width:481px) and (max-width:767px){.profilepic{width:300px;height:200px;}}@media (min-width:320px) and (max-width:480px){.profilepic{width:300px;height:200px;}}"]);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(c.a,{title:"About"}),r.a.createElement(m.a,null),r.a.createElement(u,null,r.a.createElement("div",{className:"container mt-5 p-5"},r.a.createElement("div",{className:"row mb-5"},r.a.createElement("div",{className:"col-10 col-md-4  mx-auto"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("img",{src:p.a,alt:"profile",className:"profilepic"}))),r.a.createElement("div",{className:"col-10 col-md-8 mx-auto"},r.a.createElement("div",{className:"border-bottom"}," ",r.a.createElement("h3",{style:{color:"var(--mainDark)"}}," Design + Code "),r.a.createElement("h5",{className:"mb-3"}," Endless Possibility ")),r.a.createElement("p",{className:"about-desc mt-3",style:{lineHeight:"1.8rem"}},"I am a problem solver. That is why both design and coding are so intriguing to me.",r.a.createElement("br",{style:{lineHeight:"3rem"}}),"I have been a landscape architect for years. This experience has not only given me a keen sense of aesthetics, but more importantly, how to design around users.",r.a.createElement("br",{style:{lineHeight:"3rem"}}),"Now I design and build apps that focus on enhanced user experience. I strive to build better,lighter, and more effective applications. Learning is my superpower.",r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("div",{className:"text-subtitle text-capitalize "},"Check One of My Design Case Study ",r.a.createElement(o.a,{to:"/blog"},r.a.createElement(i.b,{style:{color:"var(--brightGreen)",fontSize:"120%"}}))),r.a.createElement("div",{className:"text-subtitle text-capitalize "},"find my resume here ",r.a.createElement(o.a,{to:"/resume"},r.a.createElement(i.b,{style:{color:"var(--brightGreen)",fontSize:"120%"}}))))," "))),r.a.createElement(s.a,null))}},222:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(12),i=a.n(o),l=a(60),c=a.n(l);a.d(t,"a",function(){return c.a});a(226),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},226:function(e,t,a){var n;e.exports=(n=a(231))&&n.default||n},227:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(12),i=a.n(o),l=a(228),c=(a(236),a(237),function(e,t){var a=e.children;return r.a.createElement(l.a,null," ",a)});c.propTypes={children:i.a.node.isRequired},t.a=c},229:function(e,t,a){"use strict";var n=a(230),r=a(0),o=a.n(r),i=a(12),l=a.n(i),c=a(241),m=a.n(c);function s(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,l=n.data.site,c=t||l.siteMetadata.description;return o.a.createElement(m.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:c}].concat(r)})}s.defaultProps={lang:"en",meta:[],description:""},s.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},t.a=s},230:function(e){e.exports={data:{site:{siteMetadata:{title:"Xingliang Tong",description:"Designer and Coder, building the next web product",author:"xtong"}}}}},231:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),o=a(12),i=a.n(o),l=a(89),c=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},232:function(e,t,a){e.exports=a.p+"static/logo-c9beea036b49f9d7281904e113df8d06.png"},238:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(222),i=a(232),l=a.n(i),c=a(223),m=a(265),s=a(246),d=a(376),p=a(375);var u=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={navbarOpen:!1,pathname:""},t.componentDidMount=function(){t.setLocation()},t.setLocation=function(){var e=t.props.location.pathname.slice(1);t.setState({pathname:e})},t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement(b,{pathname:this.state.pathname},r.a.createElement(d.a,{bg:"light",expand:"sm",className:"navbar-expand-sm"},r.a.createElement(d.a.Brand,null,r.a.createElement(o.a,{className:"ml-2 ml-md-3 my-auto",to:"/"},r.a.createElement("img",{src:l.a,width:"36rem",className:"my-auto"}))),r.a.createElement(d.a.Toggle,{"aria-controls":"basic-navbar-nav"},r.a.createElement(s.a,{style:{color:"var(--mainGrey)"}})),r.a.createElement(d.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(p.a,{className:" ml-auto mt-2 mr-md-0 mr-lg-5 "},r.a.createElement("li",{className:"nav-item mx-md-auto ml-lg-5"},r.a.createElement(o.a,{to:"/",className:"nav-link"},r.a.createElement("div",{className:"col-5 col-sm-auto mx-auto text-center"},"HOME",r.a.createElement("div",{className:"navborder  mx-sm-4 mx-md-2 mx-lg-1",id:"homeborder"})))),r.a.createElement("li",{className:"nav-item ml-lg-5"},r.a.createElement(o.a,{to:"/about",className:"nav-link"},r.a.createElement("div",{className:"col-5 col-sm-auto mx-auto text-center"},"ABOUT",r.a.createElement("div",{className:"navborder  mx-sm-4 mx-md-2 mx-lg-1",id:"aboutborder"})))),r.a.createElement("li",{className:"nav-item ml-lg-5"},r.a.createElement(o.a,{to:"/portfolio",className:"nav-link"},r.a.createElement("div",{className:"col-5 col-sm-auto mx-auto text-center"},"PORTFOLIO",r.a.createElement("div",{className:"navborder  mx-sm-4 mx-md-2 mx-lg-1",id:"portfolioborder"})))),r.a.createElement("li",{className:"nav-item ml-lg-5"},r.a.createElement(o.a,{to:"/blog",className:"nav-link"},r.a.createElement("div",{className:"col-5 col-sm-auto mx-auto text-center"},"BLOG",r.a.createElement("div",{className:"navborder mx-sm-4 mx-md-2 mx-lg-1",id:"blogborder"}))))))))},n}(n.Component),b=c.a.nav.withConfig({displayName:"Navbar__NavContainer",componentId:"sc-1a5kuvo-0"})([".navbar-expand-sm{background-color:var(--mainWhite) !important;color:white !important;}.nav-item{position:relative;}.navborder{position:absolute;top:0;bottom:0;left:0.8rem;right:0.8rem;&:hover{border-bottom:3px solid var(--brightGreen) !important;}}#homeborder{border-bottom:",";}#portfolioborder{border-bottom:",";}#aboutborder{border-bottom:",";}#blogborder{border-bottom:",";}.nav-link{color:var(--mainDark) !important;&:hover{font-weight:bold;color:var(--mainGrey) !important;}}"],function(e){return""===e.pathname?"3px solid var(--brightGreen) !important ":"3px solid var(--mainWhite) !important"},function(e){return"portfolio"===e.pathname?"3px solid var(--brightGreen) !important  ":"3px solid var(--mainWhite) !important"},function(e){return"about"===e.pathname?"3px solid var(--brightGreen) !important  ":"3px solid var(--mainWhite) !important"},function(e){return"blog"===e.pathname?"3px solid var(--brightGreen) !important  ":"3px solid var(--mainWhite) !important"}),h=Object(m.d)(u);t.a=h},239:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=(a(222),a(232),a(242));var i=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 col-md-3 col-lg-2 mx-auto my-5"},r.a.createElement("div",{className:"d-flex flex-row justify-content-around"},r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/cindybox",className:"social-icon"},r.a.createElement(o.d,null))),r.a.createElement("div",null,r.a.createElement("a",{href:"https://dribbble.com/cindybox",className:"social-icon"},r.a.createElement(o.c,null))),r.a.createElement("div",null,r.a.createElement("a",{href:"https://www.instagram.com/cindytong/",className:"social-icon"},r.a.createElement(o.e,null))),r.a.createElement("div",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/xingliang-cindy-tong-63942720/",className:"social-icon"},r.a.createElement(o.f,null))))))},n}(n.Component);t.a=i},324:function(e,t,a){e.exports=a.p+"static/profilepic-8a368fb3eb2345e0a3266e789a938a62.jpg"}}]);
//# sourceMappingURL=component---src-pages-about-js-1219021037577634e56f.js.map