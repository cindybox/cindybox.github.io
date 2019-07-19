import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"
import styled from "styled-components"

class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },
      {
        id: 2,
        path: "/about",
        text: "about",
      },
    ],
  }

  navbarHandler = () => {}
  render() {
    return (
      <NavContainer>
        <nav className=" navbar   navbar-expand-sm navbar-dark bg-dark">
          <Link class="nav-brand" to="/">
            {" "}
            <img src={logo} width="36rem" />
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerList"
            aria-controls="navbarTogglerList"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse  navbar-collapse" id="navbarTogglerList">
            <ul className="navbar-nav ml-auto mt-2 mr-5 ">
              <li className="nav-item ml-lg-5">
                <Link to="/" className="nav-link">
                  HOME
                  <div className="navborder"></div>
                </Link>
              </li>
              <li className="nav-item ml-lg-5">
                <Link to="/about" className="nav-link">
                  ABOUT
                  <div className="navborder"></div>
                </Link>
              </li>
              <li className="nav-item ml-lg-5">
                <Link to="/portfolio" className="nav-link">
                  PORTFOLIO
                  <div className="navborder"></div>
                </Link>
              </li>
              <li className="nav-item ml-lg-5">
                <Link to="/blog" className="nav-link">
                  BLOG
                  <div className="navborder"></div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </NavContainer>
    )
  }
}

const NavContainer = styled.nav`
  nav .navbar,
  .navbar-expand-sm {
    background-color: var(--mainWhite) !important;
    color: white !important;
  }
  /* .navbar-toggler-icon {
    color: var(--mainDark) !important;
  } */

  .nav-item {
    position: relative;
  }
  .navborder {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0.8rem;
    right: 0.8rem;
    border-bottom: 3px solid var(--mainWhite) !important;
    &:hover {
      border-bottom: 3px solid var(--brightGreen) !important;
    }
  }
  .nav-link {
    color: var(--mainDark) !important;
    &:hover {
      font-weight: bold;
      color: var(--mainGrey) !important;
    }
  }
`

export default Navbar
