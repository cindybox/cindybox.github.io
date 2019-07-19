import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"
import styled from "styled-components"
import {
  FaGithubSquare,
  FaDribbbleSquare,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa"

class Footer extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-4 col-md-3 col-lg-2 mx-auto my-5">
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
      </div>
    )
  }
}

export default Footer
