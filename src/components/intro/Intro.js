import React from "react"
import { FaArrowDown } from "react-icons/fa"
import { Link } from "gatsby"
import IntroContainer from "./IntroContainer"

const Intro = () => (
  <div>
    <IntroContainer>
      <section id="intro" class="container intro mt-5 pt-5">
        <div className="col">
          <h1 class="intro-p1 mb-5">
            <span className="hi"> HI,</span> I AM
            <br />
            <div className="mb-2 mt-2">
              <strong> XINGLIANG TONG</strong>
            </div>
            I DESIGN AND BUILD WEB APPLICATIONS
          </h1>

          {/*  <h1 class="intro-p2">
    You can find my resume here{" "}
    <Link to="/resume">
      <FaArrowRight />
    </Link>
  </h1>*/}
          <h1 class="text-subtitle">
            View Some of My Projects{" "}
            <FaArrowDown
              style={{ color: "var(--brightGreen)", fontSize: "120%" }}
            />
          </h1>
          {/*  <p class="intro-p2 mb-3">
            Send me a message here{" "}
            <Link to="/resume">
              <FaArrowRight />
            </Link>
          </p>*/}

          <div class="next-page">
            {" "}
            <a href="#">
              <i class="fas fa-arrow-down"></i>
            </a>
          </div>
        </div>
      </section>
    </IntroContainer>
  </div>
)

export default Intro
