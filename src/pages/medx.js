import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

//convert all the images to gatsby image
import signup from "../images/medx/signup.mp4"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const medxImageNames = [
  "medx-responsive.jpg",
  "medx-existing.jpg",
  "medx-persona.jpg",
  "medx-persona2.jpg",
  "medx-persona3.jpg",
  "medx-info.jpg",
  "medx-lofi.jpg",
  "medx-brand.jpg",
  "medx-hifi.jpg",
  "medx-iteration.jpg",
  "medx-whereweare.jpg",
]

const Medx = () => {
  const medxImages = useStaticQuery(
    graphql`
      query {
        allImageSharp(
          filter: {
            fluid: {
              originalName: {
                in: [
                  "medx-responsive.jpg"
                  "medx-existing.jpg"
                  "medx-persona.jpg"
                  "medx-persona2.jpg"
                  "medx-persona3.jpg"
                  "medx-lofi.jpg"
                  "medx-hifi.jpg"
                  "medx-info.jpg"
                  "medx-brand.jpg"
                  "medx-iteration.jpg"
                  "medx-whereweare.jpg"
                ]
              }
            }
          }
        ) {
          edges {
            node {
              fluid {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Medx" />

      <div className="container mt-5 p-sm-1 p-lg-5 medx">
        <div className="row mb-5">
          <div className="col-11 col-lg-10  mx-auto">
            <h3 className="mb-5"> Medx Pharmacy</h3>
            <Img
              fluid={
                medxImages.allImageSharp.edges.find(
                  edge => edge.node.fluid.originalName === medxImageNames[0]
                ).node.fluid
              }
            />

            <div className=" d-flex justify-content-end mt-3">
              <a
                class=" btn  btn-green mb-4 "
                href="https://admiring-beaver-c389fd.netlify.com/"
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
            <span class=" btn  btn-solidgreen mb-4"> Prototyping</span>
            <br />
            <article className="project_content">
              I was hired as a web designer by Medx Pharmacy in Pearland to
              redesign their website, as part of the rebranding effort. I
              utilized tools such User Persona, LOFI and HIFI Prototyping,
              Usability Testing, etc. to tackle the problem, aiming to deliver a
              website with simplified flow and improved usability. I also
              developed material kits to guide the graphic development that will
              present a strong brand image. At the latter phase of the project,
              I collaborated with web developers on a daily basis to ensure the
              details are executed meticulously, and that the final product is
              responsive and highly effective on all platforms.
              <br />
              <br />
              <section className="mb-5">
                <h4> Define the Problem </h4>
                <p className="pt-2">
                  I start by reviewing the existing website to see what the
                  problems are. Here are some key findings:
                </p>
                <Img
                  fluid={
                    medxImages.allImageSharp.edges.find(
                      edge => edge.node.fluid.originalName === medxImageNames[1]
                    ).node.fluid
                  }
                />
                {/* <img src={existing} alt="img" style={{ width: "100%" }} /> */}
                <br />
                <ul className="pt-2">
                  <li>
                    <strong>Information Structure</strong> lacks clarity and
                    there is redundant information on multiple pages
                  </li>
                  <li>
                    The <strong>brand Image</strong> and key Offerings don’t
                    stand out as there is not a good hierarchy in place
                  </li>

                  <li>
                    There are a lot of words and unnecessary highlights in the
                    <strong> content</strong>, making the content less readable.
                  </li>
                  <li>
                    <strong> The navigation</strong> has included a lot of less
                    used categories that are clustered and confusing, while
                    major functions such as refill RX is missing
                  </li>
                  <li>
                    <strong> The style</strong> is outdated. The sidebar and
                    banner are more of a distraction on some pages.
                  </li>
                  <li>
                    Some of the <strong> interactions</strong> are distractive,
                    the hover animation on the button makes the button text less
                    readable and can be annoying Current forms lack some
                    validation and lacks feedback when form is sent
                  </li>
                  <li>
                    <strong>Missing components: </strong> there is no
                    information instructing new users to start using the
                    service. Current information regarding existing users are
                    not very friendly either.
                  </li>
                </ul>
              </section>
              <section className="mb-5">
                <h4> Who Are the Users? </h4>
                <p className="pt-2">
                  Through several conversations with the pharmacy owners and
                  employees, we mapped out the user group that we are targeting:
                </p>
                <p>
                  <strong>Existing Customers:</strong>Existing customers are
                  customers who have filled prescriptions with the pharmacy
                  before. Their main goal is get the prescription refilled
                  easily and quickly. During the project period, MedX is
                  converting from manually handling the refill request to
                  automatic system through a third party application. So the
                  website will need to redirect all the refill requests to the
                  3rd party portal.
                </p>
                <p>
                  <strong>New/Transfer customers:</strong> These are people who
                  have never filled prescriptions with MedX before. They come to
                  the website to learn about the offerings and benefits, so they
                  can make informed decisions. The information in regards to
                  transferring should be readily accessible and easy to follow.
                </p>
                <p>
                  <strong>Partners:</strong>As a full-service pharmacy, MedX has
                  other service sections that are bringing revenues such as
                  compounding, personal injury, and hospice care program. These
                  business sections are operated through collaboration, and it
                  is in MedX’s interest to provide these partners (medical
                  practitioners, senior home administration, personal injury
                  lawyer, etc) information they need on the website.
                </p>
                <br />

                <div className="container">
                  <div className="row">
                    {[2, 3, 4].map(i => (
                      <div className="col-md-4">
                        <Img
                          fluid={
                            medxImages.allImageSharp.edges.find(
                              edge =>
                                edge.node.fluid.originalName ===
                                medxImageNames[i]
                            ).node.fluid
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <section className="mb-5">
                <h4> Ideation </h4>
                <p className="pt-2">
                  First, the number of links in the navigation bar are reduced.
                  Previously, compounding, Hospice Program, Assisted Living, and
                  Our Services are each a separate item, which is quite messy.
                  There will be two types of links: function, and informational.
                  The information links will provide information in regards to
                  ‘who we are’, ‘what we do’, and ‘why us’. The function links
                  will provide direct access to most used functions such as
                  refill prescription, transfer prescription, and partner login.
                  A customer login/logout component was under discussion but not
                  included in this project, as it may be integrated with the
                  future ecommerce site.
                </p>
                <Img
                  fluid={
                    medxImages.allImageSharp.edges.find(
                      edge => edge.node.fluid.originalName === medxImageNames[5]
                    ).node.fluid
                  }
                />
              </section>
              <section className="mb-5">
                <h4> Prototyping </h4>
                <h6 className="pt-2">LOFI Prototyping</h6>
                <p className="pt-2">
                  The LOFI prototyping process starts with the mobile side as it
                  is more stricting.
                </p>
                <Img
                  fluid={
                    medxImages.allImageSharp.edges.find(
                      edge => edge.node.fluid.originalName === medxImageNames[6]
                    ).node.fluid
                  }
                />

                <h6 className="pt-2">Create A Brand</h6>
                <p className="pt-2">
                  The new logo has orange as the brand color, based on which I
                  developed a material kit that will still be subtle and uses
                  orange as a highlight color.{" "}
                </p>
                <Img
                  fluid={
                    medxImages.allImageSharp.edges.find(
                      edge => edge.node.fluid.originalName === medxImageNames[7]
                    ).node.fluid
                  }
                />

                <h6 className="pt-2">HIFI Prototyping</h6>
                <Img
                  fluid={
                    medxImages.allImageSharp.edges.find(
                      edge => edge.node.fluid.originalName === medxImageNames[8]
                    ).node.fluid
                  }
                />
              </section>
              <section className="mb-5">
                <h4> Usability Testing and Iteration </h4>
                <p className="pt-2">
                  The demo site was created with Adobe XD and shared with
                  multiple stakeholders. There are various feedbacks, such as
                  relocating the ‘How to Start’ section to the main page.
                </p>
                {/* <Img
                  fluid={
                    medxImages.allImageSharp.edges.find(
                      edge =>
                        edge.node.fluid.originalName.split(".")[0] ===
                        medxImageNames[9].split(".")[0]
                    ).node.fluid
                  }
                /> */}

                <p className="pt-2">
                  We also added the membership sign up component. Here is a demo
                  of two different options to include the sign up form:
                </p>
                <video controls style={{ width: "100%" }}>
                  <source src={signup} type="video/mp4" />
                  Sorry, your browser doesn"t support embedded videos.
                </video>
              </section>
              <section className="mb-5">
                <h4> Where We Are Now </h4>
                <p className="pt-2">
                  The website was launched in September 2019, since then, a new
                  endeavor has set off to add e-commerce to the site. Here are
                  some initial prototyping to show how the e-commerce routine
                  will be incorporated with the main site.
                </p>
                <Img
                  fluid={
                    medxImages.allImageSharp.edges.find(
                      edge =>
                        edge.node.fluid.originalName === medxImageNames[10]
                    ).node.fluid
                  }
                />
              </section>
            </article>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Medx
