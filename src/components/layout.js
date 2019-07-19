/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./bootstrap.min.css"
import WebFont from "webfontloader"
import styled from "styled-components"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
import "./layout.css"
WebFont.load({
  google: {
    families: ["Roboto", "Oswald", "Raleway", "Open sans", "Lato"],
  },
})
const Layout = ({ children }, props) => <> {children}</>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
