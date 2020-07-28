//js version:es6

import React, { Component } from "react"

import Layout from "../components/layout"
import Navbar from "../globals/Navbar"
import Footer from "../globals/Footer"
import Intro from "../components/intro/Intro"

import SelectedProject from "../components/project/SelectedProject"
import projectdata from "../projectInfo.json"

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <Navbar />
        <Intro />
        {projectdata.projects.map(project => (
          <SelectedProject
            projectInfo={project}
            imageLeft={project.imageLeft}
          />
        ))}

        <Footer />
      </Layout>
    )
  }
}

export default IndexPage
