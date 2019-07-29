import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"
import styled from "styled-components"
import { Location } from "@reach/router"
// import { withRouter } from "react-router-dom"
import { IoMdMenu } from "react-icons/io"

import { Navbar, Nav } from "react-bootstrap"

class NavPage extends Component {
  state = {
    navbarOpen: false,
    pathname: "",
  }
  componentDidMount = () => {
    // this.setLocation()
  }

  setLocation = () => {
    console.log(this.props.location)
    let pathname = this.props.location.pathname.slice(1)
    this.setState({ pathname: pathname })
  }

  render() {
    return (
      <Location>
        {({ location }) => (
          <NavContainer pathname={location.pathname.slice(1)}>
            <Navbar bg="light" expand="sm" className="navbar-expand-sm">
              <Navbar.Brand>
                <Link className="ml-2 ml-md-3 my-auto" to="/">
                  <img src={logo} width="36rem" className="my-auto" />
                </Link>
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav">
                <IoMdMenu style={{ color: "var(--mainGrey)" }} />
              </Navbar.Toggle>

              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className=" ml-auto mt-2 mr-md-0 mr-lg-5 ">
                  <li className="nav-item mx-md-auto ml-lg-5">
                    <Link to="/" className="nav-link">
                      <div className="col-5 col-sm-auto mx-auto text-center">
                        HOME
                        <div
                          className="navborder  mx-sm-4 mx-md-2 mx-lg-1"
                          id="homeborder"
                        ></div>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item ml-lg-5">
                    <Link to="/about" className="nav-link">
                      <div className="col-5 col-sm-auto mx-auto text-center">
                        ABOUT
                        <div
                          className="navborder  mx-sm-4 mx-md-2 mx-lg-1"
                          id="aboutborder"
                        ></div>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item ml-lg-5">
                    <Link to="/portfolio" className="nav-link">
                      <div className="col-5 col-sm-auto mx-auto text-center">
                        PORTFOLIO
                        <div
                          className="navborder  mx-sm-4 mx-md-2 mx-lg-1"
                          id="portfolioborder"
                        ></div>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item ml-lg-5">
                    <Link to="/blog" className="nav-link">
                      <div className="col-5 col-sm-auto mx-auto text-center">
                        BLOG
                        <div
                          className="navborder mx-sm-4 mx-md-2 mx-lg-1"
                          id="blogborder"
                        ></div>
                      </div>
                    </Link>
                  </li>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </NavContainer>
        )}
      </Location>
    )
  }
}

const NavContainer = styled.nav`
  .navbar-expand-sm {
    background-color: var(--mainWhite) !important;
    color: white !important;
  }

  .nav-item {
    position: relative;
  }

  .navborder {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0.8rem;
    right: 0.8rem;

    &:hover {
      border-bottom: 3px solid var(--brightGreen) !important;
    }
  }
  #homeborder {
    border-bottom: ${props =>
      props.pathname === ""
        ? "3px solid var(--brightGreen) !important "
        : "3px solid var(--mainWhite) !important"};
  }
  #portfolioborder {
    border-bottom: ${props =>
      props.pathname === "portfolio"
        ? "3px solid var(--brightGreen) !important  "
        : "3px solid var(--mainWhite) !important"};
  }
  #aboutborder {
    border-bottom: ${props =>
      props.pathname === "about"
        ? "3px solid var(--brightGreen) !important  "
        : "3px solid var(--mainWhite) !important"};
  }
  #blogborder {
    border-bottom: ${props =>
      props.pathname === "blog"
        ? "3px solid var(--brightGreen) !important  "
        : "3px solid var(--mainWhite) !important"};
  }
  .nav-link {
    color: var(--mainDark) !important;
    &:hover {
      font-weight: bold;
      color: var(--mainGrey) !important;
    }
  }
`
// const NavPage = withRouter(NavbarPage)
export default NavPage
