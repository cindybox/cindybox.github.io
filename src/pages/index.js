//js version:es6

import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Navbar from "../globals/Navbar"
import Footer from "../globals/Footer"
import Intro from "../components/intro/Intro"

import About from "../components/About"
import SelectedProject from "../components/project/SelectedProject"
import projectdata from "../projectInfo.json"
import Media from "react-media"
class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <Navbar />
        <Intro />

        <Media query="(max-width:1049px)">
          {matches =>
            matches
              ? projectdata.projects.map(project => (
                  <SelectedProject projectInfo={project} imageLeft="true" />
                ))
              : projectdata.projects.map(project => (
                  <SelectedProject
                    projectInfo={project}
                    imageLeft={project.imageLeft}
                  />
                ))
          }
        </Media>
        <Footer />
      </Layout>
    )
  }
}

export default IndexPage
