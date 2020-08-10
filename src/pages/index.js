//js version:es6

import React, { Component } from "react"

import Layout from "../components/layout"
import Navbar from "../globals/Navbar"
import Footer from "../globals/Footer"
import Intro from "../components/intro/Intro"

import SelectedProject from "../components/project/SelectedProject"
// import projectdata from "../data/projectInfo.json"

import { graphql } from "gatsby"

export default function IndexPage({ data }) {
  const projects = data.allDataJson.edges[0].node.projects

  const images = data.allDataJson.edges[0].node.projects
  return (
    <Layout>
      <Navbar />
      <Intro />
      {projects.map(project => (
        <SelectedProject projectInfo={project} imageLeft={project.imageLeft} />
      ))}

      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query {
    allDataJson {
      edges {
        node {
          projects {
            projectName
            imgUrl
            projectUrl
            githubUrl
            projectType
            projectDescription
            imageLeft
            moreinfo
          }
        }
      }
    }
  }
`
