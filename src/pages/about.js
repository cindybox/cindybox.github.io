import React from "react"
import { Link } from "gatsby"
import { FaArrowRight } from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const About = () => {
  const profile = useStaticQuery(
    graphql`
      query {
        allImageSharp(
          filter: { fluid: { originalName: { eq: "profile.jpg" } } }
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
  console.log(profile.allImageSharp.edges[0].node.fluid)

  return (
    <Layout>
      <SEO title="About" />

      <AboutContainer>
        <div className="container mt-5 p-md-5">
          <div className="row mb-5">
            <div className="col-11 col-md-4  mx-auto">
              <Img fluid={profile.allImageSharp.edges[0].node.fluid} />
            </div>
            <div className="col-11 col-md-8 mx-auto">
              {/* <div className="border-bottom">
                <h3 style={{ color: "var(--mainDark)" }}> Design + Code </h3>
                <h5 className="mb-3"> Endless Possibility </h5>
              </div> */}

              <p className="about-desc mt-3" style={{ lineHeight: "1.8rem" }}>
                I am a problem solver. That is why both design and coding are so
                intriguing to me.
              </p>

              <p className="about-desc mt-3" style={{ lineHeight: "1.8rem" }}>
                I have been a landscape architect for years. This experience has
                not only given me a keen sense of aesthetics, but more
                importantly, how to design around users.
              </p>

              <p className="about-desc mt-3" style={{ lineHeight: "1.8rem" }}>
                Now I design and build web applications that focus on enhanced
                user experience. Leveraging on my prior experience working in
                the design field, a versatile skillset, and strong learning
                ability, I bring insight, innovation, and effeciency to my work.
                <br />
                <br />
              </p>

              <div className="text-subtitle text-capitalize ">
                find my resume here&emsp;
                <Link to="/resume">
                  <FaArrowRight
                    style={{ color: "var(--brightGreen)", fontSize: "120%" }}
                  />
                </Link>
              </div>
            </div>{" "}
          </div>
        </div>
      </AboutContainer>
    </Layout>
  )
}

const AboutContainer = styled.div`
  color: var(--mainGrey) !important;

  .profilepic {
    width: 200px;
    height: 300px;
    object-fit: cover;
    object-position: 60% 50%;
  }
  .text-subtitle {
    color: var(--mainDark) !important;
  }

  /*
    ##Device = Desktops
    ##Screen = 1281px to higher resolution desktops
  */

  @media (min-width: 1281px) {
     {
      /*CSS */
    }
  }

  /*
    ##Device = Laptops, Desktops
    ##Screen = B/w 1025px to 1280px
  */

  @media (min-width: 1025px) and (max-width: 1280px) {
     {
      /*CSS */
    }
  }

  /*
    ##Device = Tablets, Ipads (portrait)
    ##Screen = B/w 768px to 1024px
  */

  @media (min-width: 768px) and (max-width: 1024px) {
     {
      /*CSS */
    }
  }

  /*
    ##Device = Tablets, Ipads (landscape)
    ##Screen = B/w 768px to 1024px
  */

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  }

  /*
    ##Device = Low Resolution Tablets, Mobiles (Landscape)
    ##Screen = B/w 481px to 767px
  */

  @media (min-width: 481px) and (max-width: 767px) {
    .profilepic {
      width: 300px;
      height: 200px;
      /* object-position: 45% 50%; */
    }
  }

  /*
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 320px to 479px
  */

  @media (min-width: 320px) and (max-width: 480px) {
    .profilepic {
      width: 300px;
      height: 200px;
      /* object-position: 45% 50%; */
    }
  }
`

export default About
