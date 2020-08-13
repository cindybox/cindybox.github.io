import React from "react"
import "../styles/bootstrap.min.css"
import "./layout.css"
import PropTypes from "prop-types"

import Footer from "./globals/Footer"
import Navbar from "./globals/Navbar"

const Layout = ({ children }, props) => (
  <>
    <Navbar />

    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
