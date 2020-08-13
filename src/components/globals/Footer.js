import React from "react"
import styled from "styled-components"

import {
  FaGithubSquare,
  FaDribbbleSquare,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa"

const Footer = () => {
  return (
    <FooterContainer>
      <h6
        style={{
          color: "var(--brightGreen)",
          textAlign: "center",
          paddingTop: "2rem",
        }}
      >
        cindybox.33@gmail.com
      </h6>
      <small
        style={{
          color: "var(--mainWhite)",
          textAlign: "center",
          paddingLeft: "2rem",
        }}
      >
        @ 2020 Cindy Tong | Built With Gatsby
      </small>
      {/* <div className="row">
        <div className="col-4 col-md-3 col-lg-2 mx-auto mt-2 mb-5">
          <div className="d-flex flex-row justify-content-around">
            <div>
              <a href="https://github.com/cindybox" className="social-icon">
                <FaGithubSquare />
              </a>
            </div>
            <div>
              <a href="https://dribbble.com/cindybox" className="social-icon">
                <FaDribbbleSquare />
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/cindytong/"
                className="social-icon"
              >
                <FaInstagram />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/xingliang-cindy-tong-63942720/"
                className="social-icon"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  background-color: var(--mainDark);
`
export default Footer
