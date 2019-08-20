import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../globals/Navbar"
import Footer from "../globals/Footer"
import medxresponsive from "../images/medx/medx-responsive.jpg"
import styled from "styled-components"

const Medx = () => (
  <Layout>
    <SEO title="Medx" />

    <Navbar />

    <div className="container mt-5 p-5">
      <div className="row mb-5">
        <h3 className="mb-5"> Medx Pharmacy</h3>
        <div className="col-10  mx-auto">
          <img src={medxresponsive} alt="img" style={{ width: "100%" }} />
          <div className=" d-flex justify-content-end">
            <a
              class=" btn  btn-green mb-4 "
              href="https://admiring-beaver-c389fd.netlify.com/"
            >
              Go to Website
            </a>
          </div>
        </div>
        <div className="col-10  mx-auto">
          <h5> Tools Used:</h5>
          <span class=" btn  btn-solidgreen mb-4"> React</span> &emsp;
          <span class=" btn  btn-solidgreen mb-4"> Bootstrap</span> &emsp;
          <span class=" btn  btn-solidgreen mb-4"> Adobe XD</span>&emsp;
          <span class=" btn  btn-solidgreen mb-4"> Prototyping</span>
          <br />
          Working as a web/marketing consultant to work on the rebranding effort
          for Medx Pharmacy in Pearland, my goal is to redesign the website that
          is user-friendly and visually appealing. The current website has a lot
          of information that can be overwelming. By reorganize the user flow,
          simply the user interface, the redesign will have dramatic improvement
          in terms of orientation and usability. I performed below tasks during
          this project:
          <br />
          <br />
          <ul>
            <li>
              Conducted user flow studies and created redesign strategies based
              on the existing website
            </li>
            <li> Extensive prototyping and wireframing in response</li>
            <li>
              to client and user needs Design the site using Adobe XD Develop
              Demo
            </li>
            <li>
              in React Coordinate and collaborate with web developers to achieve
              the UI/UX goals
            </li>
            <li>Work as a client representative to review website drafts </li>
          </ul>
        </div>
      </div>
    </div>

    <Footer />
  </Layout>
)

export default Medx
