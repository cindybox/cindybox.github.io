import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"
import styled from "styled-components"
import { withRouter } from "react-router-dom"

class NavbarPage extends Component {
  state = {
    navbarOpen: false,
    pathname: "",
  }
  componentDidMount = () => {
    this.setLocation()
    console.log("set path to current page location")
  }

  setLocation = () => {
    let pathname = this.props.location.pathname.slice(1)
    console.log(pathname === "about")
    this.setState({ pathname: pathname })
  }

  render() {
    return (
      <NavContainer pathname={this.state.pathname}>
        <nav className=" navbar navbar-expand-sm navbar-dark bg-dark">
          <Link class="nav-brand" to="/">
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
                  <div className="navborder" id="homeborder"></div>
                </Link>
              </li>
              <li className="nav-item ml-lg-5">
                <Link to="/about" className="nav-link">
                  ABOUT
                  <div className="navborder" id="aboutborder"></div>
                </Link>
              </li>
              <li className="nav-item ml-lg-5">
                <Link to="/portfolio" className="nav-link">
                  PORTFOLIO
                  <div className="navborder" id="portfolioborder"></div>
                </Link>
              </li>
              <li className="nav-item ml-lg-5">
                <Link to="/blog" className="nav-link">
                  BLOG
                  <div className="navborder" id="blogborder"></div>
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
let Navbar = withRouter(NavbarPage)
export default Navbar
