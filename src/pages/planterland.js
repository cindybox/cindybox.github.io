import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Planterland = () => {
  const image = useStaticQuery(
    graphql`
      query {
        allImageSharp(
          filter: {
            fluid: { originalName: { eq: "planterlandpage_Page_6.jpg" } }
          }
        ) {
          edges {
            node {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <SEO title="Planterland" />

      <div className="container mt-5 p-sm-1 p-lg-5">
        <div className="row mb-5">
          <div className="col-11 col-lg-10 mx-auto">
            <h3 className="mb-5"> Planter Land</h3>
            <Img fluid={image.allImageSharp.edges[0].node.fluid} />
            <div className=" d-flex justify-content-end mt-3">
              <a
                class=" btn btn-green mb-4 "
                href="https://admiring-beaver-c389fd.netlify.com/"
              >
                Go to Website
              </a>
            </div>
          </div>
          <div className="col-11 col-lg-10  mx-auto">
            <h5> Tools Used:</h5>
            <span class=" btn  btn-solidgreen mb-4"> React</span> &emsp;
            <span class=" btn  btn-solidgreen mb-4"> MongoDB</span> &emsp;
            <span class=" btn  btn-solidgreen mb-4"> Express</span> &emsp;
            <span class=" btn  btn-solidgreen mb-4"> NodeJS</span> &emsp;
            <span class=" btn  btn-solidgreen mb-4"> Bootstrap</span> &emsp;
            <span class=" btn  btn-solidgreen mb-4"> Adobe XD</span>&emsp;
            <span class=" btn  btn-solidgreen mb-4"> Adobe Photoshop</span>
            &emsp;
            <span class=" btn  btn-solidgreen mb-4"> Prototyping</span>
            <br />
            A MERN stack e-commerce site. Incorporated MongoDB database and
            RESTful API. Users can log in, create and manage wishlists, add and
            delete items from shopping cart. Front end focus on a minimalist,
            modern look. I performed below tasks during this project:
            <br />
            <br />
            <ul>
              <li>
                Designed interface with Adobe Photoshop and Adobe Indesign
              </li>
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
    </Layout>
  )
}

export default Planterland
