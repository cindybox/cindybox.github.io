import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import resume from "../images/Resume 2019.07-XTong.jpg"

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <img src={resume} alt="resume" style={{ width: "100%" }} />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Resume
