const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("D:\\7. PROGRAMMING\\PROJECTS\\Porfolio - gatsby\\portfolio\\cindybox.github.io\\src\\pages\\404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("D:\\7. PROGRAMMING\\PROJECTS\\Porfolio - gatsby\\portfolio\\cindybox.github.io\\src\\pages\\about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("D:\\7. PROGRAMMING\\PROJECTS\\Porfolio - gatsby\\portfolio\\cindybox.github.io\\src\\pages\\blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\7. PROGRAMMING\\PROJECTS\\Porfolio - gatsby\\portfolio\\cindybox.github.io\\src\\pages\\index.js"))),
  "component---src-pages-medx-js": hot(preferDefault(require("D:\\7. PROGRAMMING\\PROJECTS\\Porfolio - gatsby\\portfolio\\cindybox.github.io\\src\\pages\\medx.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("D:\\7. PROGRAMMING\\PROJECTS\\Porfolio - gatsby\\portfolio\\cindybox.github.io\\src\\pages\\page-2.js"))),
  "component---src-pages-planterland-js": hot(preferDefault(require("D:\\7. PROGRAMMING\\PROJECTS\\Porfolio - gatsby\\portfolio\\cindybox.github.io\\src\\pages\\planterland.js"))),
  "component---src-pages-portfolio-js": hot(preferDefault(require("D:\\7. PROGRAMMING\\PROJECTS\\Porfolio - gatsby\\portfolio\\cindybox.github.io\\src\\pages\\portfolio.js"))),
  "component---src-pages-resume-js": hot(preferDefault(require("D:\\7. PROGRAMMING\\PROJECTS\\Porfolio - gatsby\\portfolio\\cindybox.github.io\\src\\pages\\resume.js")))
}

