import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../globals/Navbar"
import Footer from "../globals/Footer"
import medxresponsive from "../images/medx/medx-responsive.jpg"
import persona1 from "../images/medx/medx-persona.jpg"
import persona2 from "../images/medx/medx-persona2.jpg"
import persona3 from "../images/medx/medx-persona3.jpg"
import existing from "../images/medx/medx-existing.jpg"
import lofi from "../images/medx/medx-lofi.jpg"
import hifi from "../images/medx/medx-hifi.jpg"
import infostructure from "../images/medx/medx-info.jpg"
import brand from "../images/medx/medx-brand.jpg"
import iteration from "../images/medx/medx-iteration.jpg"
import whereweare from "../images/medx/medx-whereweare.jpg"
import signup from "../images/medx/signup.mp4"


import styled from "styled-components"

const Medx = () => (
  <Layout>
    <SEO title="Medx" />

    <Navbar />

    <div className="container mt-5 p-sm-1 p-lg-5 medx">
      <div className="row mb-5">
        <h3 className="mb-5"> Medx Pharmacy</h3>
        <div className="col-sm-12 col-lg-10  mx-auto">
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
        <div className="col-lg-10  mx-auto">
          <h5> Tools Used:</h5>
          <span class=" btn  btn-solidgreen mb-4"> React</span> &emsp;
          <span class=" btn  btn-solidgreen mb-4"> Bootstrap</span> &emsp;
          <span class=" btn  btn-solidgreen mb-4"> Adobe XD</span>&emsp;
          <span class=" btn  btn-solidgreen mb-4"> Prototyping</span>
          <br />
          <article className="project_content">
            I was hired as a web designer by Medx Pharmacy in Pearland to
            redesign their website, as part of the rebranding effort. I utilized
            tools such User Persona, LOFI and HIFI Prototyping, Usability
            Testing, etc. to tackle the problem, aiming to deliver a website
            with simplified flow and improved usability. I also developed
            material kits to guide the graphic development that will present a
            strong brand image. At the latter phase of the project, I
            collaborated with web developers on a daily basis to ensure the
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
              <img src={existing} alt="img" style={{ width: "100%" }} />
              <br />
              <ul className="pt-2">
                <li>
                  <strong>Information Structure</strong> lacks clarity and there
                  is redundant information on multiple pages
                </li>
                <li>
                  The <strong>brand Image</strong> and key Offerings don’t stand
                  out as there is not a good hierarchy in place
                </li>

                <li>
                  There are a lot of words and unnecessary highlights in the
                  <strong> content</strong>, making the content less readable.
                </li>
                <li>
                  <strong> The navigation</strong> has included a lot of less
                  used categories that are clustered and confusing, while major
                  functions such as refill RX is missing
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
                  <strong>Missing components: </strong> there is no information
                  instructing new users to start using the service. Current
                  information regarding existing users are not very friendly
                  either.
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
                <strong>Existing Customers:</strong>Existing customers are customers who have filled prescriptions
                with the pharmacy before. Their main goal is get the
                prescription refilled easily and quickly. During the project
                period, MedX is converting from manually handling the refill
                request to automatic system through a third party application.
                So the website will need to redirect all the refill requests to
                the 3rd party portal.
              </p>
              <p>
                <strong>New/Transfer customers:</strong> These are people who have never filled
                  prescriptions with MedX before. They come to the website to
                  learn about the offerings and benefits, so they can make
                  informed decisions. The information in regards to transferring
                  should be readily accessible and easy to follow.
              </p>
              <p>
                <strong>Partners:</strong>As a full-service pharmacy, MedX has other service sections that
                  are bringing revenues such as compounding, personal injury, and
                  hospice care program. These business sections are operated
                  through collaboration, and it is in MedX’s interest to provide
                  these partners (medical practitioners, senior home
                  administration, personal injury lawyer, etc) information they
                  need on the website.
              </p>
              <br />
              <img src={persona1} alt="img" style={{ width: "50%" }} />
              <img src={persona2} alt="img" style={{ width: "50%" }} />
              <img src={persona3} alt="img" style={{ width: "50%" }} />
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
                will provide direct access to most used functions such as refill
                prescription, transfer prescription, and partner login. A
                customer login/logout component was under discussion but not
                included in this project, as it may be integrated with the
                future ecommerce site.
              </p>

              <img src={infostructure} alt="img" style={{ width: "100%" }} />
            </section>
            <section className="mb-5">
              <h4> Prototyping </h4>
              <h6 className="pt-2">LOFI Prototyping</h6>
              <p className="pt-2">
                The LOFI prototyping process starts with the mobile side as it
                is more stricting.
              </p>
              <img src={lofi} alt="img" style={{ width: "100%" }} />

              <h6 className="pt-2">Create A Brand</h6>
              <p className="pt-2">
                The new logo has orange as the brand color, based on which I
                developed a material kit that will still be subtle and uses
                orange as a highlight color.{" "}
              </p>
              <img src={brand} alt="img" style={{ width: "100%" }} />

              <h6 className="pt-2">HIFI Prototyping</h6>

              <img src={hifi} alt="img" style={{ width: "100%" }} />
            </section>
            <section className="mb-5">
              <h4> Usability Testing and Iteration </h4>
              <p className="pt-2">
                The demo site was created with Adobe XD and shared with multiple
                stakeholders. There are various feedbacks, such as relocating
                the ‘How to Start’ section to the main page.
              </p>
              <img src={iteration} alt="img" style={{ width: "100%" }} />

              <p className="pt-2">
                We also added the membership sign up component. Here is a demo
                of two different options to include the sign up form:
              </p>
              <video controls style={{ width: "100%" }}>



                <source src={signup}
                  type="video/mp4" />

                Sorry, your browser doesn't support embedded videos.
</video>
            </section>
            <section className="mb-5">
              <h4> Where We Are Now </h4>
              <p className="pt-2">
                The website was launched in September 2019, since then, a new
                endeavor has set off to add e-commerce to the site. Here are
                some initial prototyping to show how the e-commerce routine will
                be incorporated with the main site.
              </p>
              <img src={whereweare} alt="img" style={{ width: "100%" }} />
            </section>
          </article>
        </div>
      </div>
    </div>

    <Footer />
  </Layout>
)

export default Medx
