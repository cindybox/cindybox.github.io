//js version:es6

import React, { Component, useRef, useEffect } from "react"
import Layout from "../components/layout"
import Intro from "../components/intro/Intro"
import SelectedProject from "../components/project/SelectedProject"
import Demonstration from "../components/demonstration"
// import projectdata from "../data/projectInfo.json"

import { graphql } from "gatsby"
import About from "./about.js"

export default function IndexPage({ data }) {
  const projects = data.allDataJson.edges[0].node.projects

  const images = data.allDataJson.edges[0].node.projects
  return (
    <Layout>
      <Intro />

      {projects.map((project, i) => (
        <SelectedProject projectInfo={project} imageLeft={project.imageLeft} />
      ))}

      <Demonstration />
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
