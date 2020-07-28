import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../globals/Navbar"
import Footer from "../globals/Footer"

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
    </div>
    <Footer />
  </Layout>
)

export default Portfolio
