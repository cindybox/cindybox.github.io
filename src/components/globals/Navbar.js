import React, { useState, useRef } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"
import styled from "styled-components"
import { Location } from "@reach/router"
import { RiMenu2Line, RiCloseLine } from "react-icons/ri"

import { Navbar, Nav, Collapse } from "react-bootstrap"

const NavPage = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Location>
      {({ location }) => (
        <NavContainer
          pathname={location.pathname.slice(1)}
          menuOpen={collapsed}
        >
          <Navbar bg="light" expand="sm" className="navbar-expand-sm">
            <Navbar.Brand>
              <Link className="ml-2 ml-md-4 ml-lg-5 my-auto" to="/">
                <img src={logo} width="36rem" className="my-auto" alt="logo" />
              </Link>
            </Navbar.Brand>

            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="mr-2"
              onClick={() => {
                setCollapsed(!collapsed)
              }}
            >
              {collapsed ? (
                <RiCloseLine style={{ color: "var(--mainGrey)" }} />
              ) : (
                <RiMenu2Line style={{ color: "var(--mainGrey)" }} />
              )}
            </Navbar.Toggle>

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className=" ml-auto mt-2 mr-md-0 mr-lg-5 ">
                <li className="nav-item mx-md-0 ml-lg-5">
                  <Link to="/" className="nav-link">
                    <div className="col-5 col-sm-auto mx-auto text-center">
                      HOME
                      <div className="navborder" id="homeborder"></div>
                    </div>
                  </Link>
                </li>
                <li className="nav-item ml-lg-5">
                  <Link to="/about" className="nav-link">
                    <div className="col-5 col-sm-auto mx-auto text-center">
                      ABOUT
                      <div className="navborder" id="aboutborder"></div>
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

const NavContainer = styled.nav`
  --linkBorderSize: 6px;
  --linkBorderWidth: 32px;
  z-index: 2;

  .navbar-expand-sm,
  .bg-light {
    background-color: transparent !important;
    color: white !important;
  }

  .nav-item {
    position: relative;
  }
  .nav-brand {
    margin-left: 3rem;
  }

  .collapse.show {
    background: var(--lightGrey);
    top: 0rem;
    position: fixed;
    padding-top: 3rem;
    height: 10rem;
    right: 0;

    z-index: -3;
    width: ${props => (props.menuOpen ? "100%" : "0px")};
    transform-origin: 100% 0%;
    transition: width 2s ease-out;
  }

  .navborder {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 60px;
    height: 100%;
    left: calc(50% - 30px);
    &:hover {
      border-bottom: 6px solid var(--brightGreen) !important;
    }
  }

  li {
    margin-bottom: 0;
  }

  #homeborder {
    border-bottom: ${props =>
      props.pathname === ""
        ? "6px solid var(--brightGreen) !important"
        : "0px solid var(--mainWhite) !important"};
  }

  #portfolioborder {
    border-bottom: ${props =>
      props.pathname === "medx"
        ? "6px solid var(--brightGreen) !important  "
        : "0px solid var(--mainWhite) !important"};
  }
  #aboutborder {
    border-bottom: ${props =>
      props.pathname === "about"
        ? "6px solid var(--brightGreen) !important  "
        : "0px solid var(--mainWhite) !important"};
  }

  .nav-link {
    color: var(--mainDark) !important;
    &:hover {
      font-weight: bold;
      color: var(--mainGrey) !important;
    }
  }

  button,
  button:focus,
  .navbar-toggler {
    border: none !important;
    outline: none !important;
  }
`

export default NavPage
