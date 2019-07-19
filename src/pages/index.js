//js version:es6

import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

import Navbar from "../globals/Navbar"
import Footer from "../globals/Footer"
import Intro from "../components/intro/Intro"

import About from "../components/About"
import SelectedProject from "../components/project/SelectedProject"
import projectdata from "../projectInfo.json"
// import Contact from "../components/Contact"

class IndexPage extends Component {
  state = { windowWidth: 0 }
  updateWindowSize = () => {
    const currentWindowSize = window.innerWidth
    if (currentWindowSize !== this.state.windowWidth) {
      this.setState({
        windowWidth: currentWindowSize,
      })
    }
    console.log(this.state.windowWidth)
  }

  onResize = () => {
    if (resizeId) {
      clearTimeout(resizeId)
    }
    let resizeId
    resizeId = setTimeout(this.updateWindowSize(), 500)
  }

  componentDidMount() {
    this.setState({ windowWidth: window.innerWidth })
    this.onResize()
    window.onresize = this.onResize
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize)
  }

  render() {
    return (
      <Layout>
        <Navbar />
        <Intro />
        {projectdata.projects.map(project => (
          <SelectedProject
            projectInfo={project}
            imageLeft={
              !this.state.windowWidth
                ? "true"
                : this.state.windowWidth > 1050
                ? project.imageLeft
                : "true"
            }
          />
        ))}

        <Footer />
        {/*imageLeft="left" img={img1} url=""*/}
        {/*
            <About />
            <Projects />
            <Contact />
            <Link to="/page-2/">Go to page 2</Link>*/}
      </Layout>
    )
  }
}

export default IndexPage
