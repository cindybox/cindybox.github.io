import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../globals/Navbar"
import Footer from "../globals/Footer"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const CityScope = () => {
  const image = useStaticQuery(
    graphql`
      query {
        allImageSharp(
          filter: { fluid: { originalName: { eq: "cityscope.png" } } }
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
      <SEO title="CityScope" />
      <Navbar />
      <div className="container mt-5 p-sm-1 p-lg-5">
        <div className="row mb-5">
          <div className="col-11 col-lg-10  mx-auto">
            <h3 className="mb-5"> CityScope</h3>
            <Img fluid={image.allImageSharp.edges[0].node.fluid} />
            <div className=" d-flex justify-content-end mt-3">
              <a
                class=" btn btn-green mb-4 "
                href="https://optimistic-khorana-27037b.netlify.app/citypage"
              >
                Go to Website
              </a>
            </div>
          </div>
          <div className="col-11 col-lg-10  mx-auto">
            <h5> Tools Used:</h5>
            <span class=" btn  btn-solidgreen mb-4"> React</span> &emsp;
            <span class=" btn  btn-solidgreen mb-4"> Bootstrap</span> &emsp;
            <span class=" btn  btn-solidgreen mb-4"> Adobe XD</span>&emsp;
            <span class=" btn  btn-solidgreen mb-4"> Adobe Photoshop</span>
            &emsp;
            <span class=" btn  btn-solidgreen mb-4"> Prototyping</span>
            <br />
            An app that presents city data using third party API
            <br />
            <br />
            <ul>
              <li>Designed and iterated the UI/UX of the app</li>
              <li>
                Developed the landing page as well as city data React components
                on the search result page
              </li>
              <li>Managed various github development branches</li>
              <li>Deployed final app on Netlify</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  )
}

export default CityScope
