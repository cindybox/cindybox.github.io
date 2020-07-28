import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../globals/Navbar"
import Footer from "../globals/Footer"

import page1 from "../images/planterlanddesign/planterlandpage_Page_1.jpg"
import page2 from "../images/planterlanddesign/planterlandpage_Page_2.jpg"
import page3 from "../images/planterlanddesign/planterlandpage_Page_3.jpg"
import page4 from "../images/planterlanddesign/planterlandpage_Page_4.jpg"
import page5 from "../images/planterlanddesign/planterlandpage_Page_5.jpg"
import page6 from "../images/planterlanddesign/planterlandpage_Page_6.jpg"
import page7 from "../images/planterlanddesign/planterlandpage_Page_7.jpg"

const Blog = () => (
  <Layout background="white">
    <SEO title="Blog" />
    <Navbar />
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="project-title ">Methodology</div>
        </div>
        <div className="col-10 mx-auto">
          <img src={page1} alt="page1" />
          <img src={page2} alt="page2" />
          <img src={page3} alt="page3" />
          <img src={page4} alt="page4" />
          <img src={page5} alt="page5" />
          <img src={page6} alt="page6" />
          <img src={page7} alt="page7" />
        </div>
      </div>
    </div>

    <Footer />
  </Layout>
)

export default Blog
