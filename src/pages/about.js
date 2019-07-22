import React, { Component } from "react"
import { Link } from "gatsby"
import { FaArrowRight } from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../globals/Navbar"
import Footer from "../globals/Footer"
import profile from "../images/profilepic.jpg"
import styled from "styled-components"

import {
  DiPhotoshop,
  DiHeroku,
  DiIllustrator,
  Direact,
  DiJavascript1,
  DiNodejsSmall,
  DiMongodb,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiPython,
  DiRuby,
  DiJava,
} from "react-icons/di"

const AboutPage = () => (
  <Layout>
    <SEO title="about" />

    <Navbar />
    <AboutContainer>
      <div className="container mt-5 p-5">
        {" "}
        <div className="row mb-5">
          <div className="col-10 col-md-4  mx-auto">
            <div className="d-flex justify-content-center">
              <img src={profile} alt="profile" className="profilepic" />
            </div>
          </div>
          <div className="col-10 col-md-8">
            <div className="border-bottom">
              {" "}
              <h3 style={{ color: "var(--mainDark)" }}> Design + Code </h3>
              <h5 className="mb-3"> Endless Possibility </h5>{" "}
            </div>

            <p className="about-desc mt-3" style={{ lineHeight: "1.8rem" }}>
              I am a problem solver. That is why both design and coding are so
              intriguing to me.
              <br style={{ lineHeight: "3rem" }} />
              I have been a landscape architect for years. This experience has
              not only given me a keen sense of aesthetics, but more
              importantly, how to design around users.
              <br style={{ lineHeight: "3rem" }} />
              Now I design and build apps that focus on enhanced user
              experience. I strive to build better,lighter, and more effective
              applications. Learning is my superpower.
              <br />
              <br />
            </p>
            <div className="text-subtitle text-capitalize ">
              Check One of My Design Case Study&emsp;
              <Link to="/blog">
                <FaArrowRight
                  style={{ color: "var(--brightGreen)", fontSize: "120%" }}
                />
              </Link>
            </div>
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
        {/*  <div className="row">
            <div className="col-10 text-highlight text-uppercase">
              <h3> Skills</h3>
            </div>
            <div className="col-10 col-md-6">
              <div className="skill-title"> Design</div>{" "}
              <ul>
                <li> PS</li>
              </ul>
            </div>
            <div className="col-10 col-md-6">
              <div className="text-title"> Web </div> <ul> </ul>
            </div>
          </div>*/}
      </div>
    </AboutContainer>
    <Footer />
  </Layout>
)

const AboutContainer = styled.div`
  color: var(--mainGrey) !important;
  height: 70vh;
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

export default AboutPage
