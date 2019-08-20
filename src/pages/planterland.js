import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../globals/Navbar"
import Footer from "../globals/Footer"

import styled from "styled-components"
import page6 from "../images/planterlanddesign/planterlandpage_Page_6.jpg"
const Planterland = () => (
  <Layout>
    <SEO title="Planterland" />

    <Navbar />

    <div className="container mt-5 p-5">
      <div className="row mb-5">
        <h3 className="mb-5"> Planter Land</h3>
        <div className="col-10  mx-auto">
          <img src={page6} alt="img" style={{ width: "100%" }} />
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
          <span class=" btn  btn-solidgreen mb-4"> MongoDB</span> &emsp;
          <span class=" btn  btn-solidgreen mb-4"> Express</span> &emsp;
          <span class=" btn  btn-solidgreen mb-4"> NodeJS</span> &emsp;
          <span class=" btn  btn-solidgreen mb-4"> Bootstrap</span> &emsp;
          <span class=" btn  btn-solidgreen mb-4"> Adobe XD</span>&emsp;
          <span class=" btn  btn-solidgreen mb-4"> Adobe Photoshop</span>&emsp;
          <span class=" btn  btn-solidgreen mb-4"> Prototyping</span>
          <br />
          A MERN stack e-commerce site. Incorporated MongoDB database and
          RESTful API. Users can log in, create and manage wishlists, add and
          delete items from shopping cart. Front end focus on a minimalist,
          modern look. I performed below tasks during this project:
          <br />
          <br />
          <ul>
            <li>Designed interface with Adobe Photoshop and Adobe Indesign</li>
            <li>
              {" "}
              Built the front end with React, NodeJS, Express, Bootstrap, CSS
            </li>
            <li>Utilized React Context for state management</li>
            <li>Integrated user database management with MongoDB</li>
            <li>Incorporated authentication strategy using passport</li>
          </ul>
        </div>
      </div>
    </div>

    <Footer />
  </Layout>
)

export default Planterland
