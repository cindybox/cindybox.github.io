import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../globals/Navbar"
import Footer from "../globals/Footer"

import styled from "styled-components"

import page1 from "../images/planterlanddesign/planterlandpage_Page_1.jpg"
import page2 from "../images/planterlanddesign/planterlandpage_Page_2.jpg"
import page3 from "../images/planterlanddesign/planterlandpage_Page_3.jpg"
import page4 from "../images/planterlanddesign/planterlandpage_Page_4.jpg"
import page5 from "../images/planterlanddesign/planterlandpage_Page_5.jpg"
import page6 from "../images/planterlanddesign/planterlandpage_Page_6.jpg"

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Navbar />
    <div
      className="container-fluid mt-5 d-flex align-items-center "
      style={{ height: "75vh" }}
    >
      <div className="col-10 text-center mx-auto">
        <h5> THIS PAGE IS UNDER DEVELOPMENT</h5>
      </div>

      {/* <div className="row">
      <div className="col-12 col-md-4 col-lg-3">
        <img src={page1} />
      </div>
      <div className="col-12 col-md-4 col-lg-3">
        <img src={page1} />
      </div>
      <div className="col-12 col-md-4 col-lg-3">
        <img src={page1} />
      </div>
      <div className="col-12 col-md-4 col-lg-3">
        <img src={page1} />
      </div>

      <div className="col-12 col-md-4 col-lg-3">
        <img src={page1} />
      </div>
      <div className="col-12 col-md-4 col-lg-3">
        <img src={page1} />
      </div>
      <div className="col-12 col-md-4 col-lg-3">
        <img src={page1} />
      </div>
      <div className="col-12 col-md-4 col-lg-3">
        <img src={page1} />
      </div>
    </div>*/}
    </div>

    {/*  {Planterlanddesign.map(imgurl => (
        <img url={imgurl} alt="img" />
      ))} */}

    {/*<Projects />*/}
    <Footer />
  </Layout>
)

export default Portfolio
