/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router } from "react-router-dom"
import styled from "styled-components"
// import { useStaticQuery, graphql } from "gatsby"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js"
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
// import Header from "./header"
import "./layout.css"

const Layout = ({ children }, props) => <Router> {children}</Router>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
