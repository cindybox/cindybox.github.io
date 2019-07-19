const ghpages = require("gh-pages")

ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "https://github.com/cindybox/cindybox.github.io.git",
  },
  () => {
    console.log("Deploy Complete!")
  }
)
