import classNames from "classnames"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import ReactHtmlParser from "react-html-parser"
import styled from "styled-components"

const Image = ({ projectInfo }) => {
  const { imgUrl, projectUrl } = projectInfo

  const allImages = useStaticQuery(
    graphql`
      query {
        allImageSharp {
          nodes {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const selectedImg = allImages.allImageSharp.nodes.filter(node => {
    let pathStrings = node.fluid.src.split("/")
    return pathStrings[pathStrings.length - 1] === imgUrl
  })

  return (
    <div className="col-12 col-lg-6 p-3">
      <div className="projectImageContainer">
        <a href={projectUrl}>
          <Img fluid={selectedImg[0].fluid} />
        </a>
      </div>
    </div>
  )
}

//run query here to get pictures whose reltaive position name matches project.imgUrl

const Text = props => (
  <div className={props.classname}>
    <div className="text-left ">
      <p className="project-title text-uppercase">
        <strong> {props.projectInfo.projectName}</strong>
      </p>
      <div className="row">
        <div className="col-10 d-flex">
          <a class=" btn  btn-green " href={props.projectInfo.githubUrl}>
            View Code on Github
          </a>
        </div>
      </div>
    </div>

    <p class="project-desc mt-4">
      <strong>
        <em style={{ color: "var(--lightGrey)" }}>
          {props.projectInfo.projectType}
        </em>
      </strong>
      <br />
      <br />
      <span>{ReactHtmlParser(props.projectInfo.projectDescription)} </span>
    </p>
    <div className="text-right">
      <Link
        to={props.projectInfo.moreinfo}
        className="moreInfo text-muted border-bottom "
      >
        More Info
      </Link>
    </div>
  </div>
)

const SelectedProject = ({ projectInfo }) => {
  const textAbove = classNames("col-12", "col-lg-6", "p-3", {
    textAbove: projectInfo.imageLeft === "false",
  })

  const textBelow = classNames("col-12", "col-lg-6", "p-3", {
    textBelow: projectInfo.imageLeft === "false",
  })

  return (
    <ProjectContainer imageLeft={projectInfo.imageLeft}>
      <div className="row my-5">
        <section id="projects" class="project container mb-3">
          <div class="container text-center mt-5">
            <div class=" row mt-5 mb-5 p-3" width="300px">
              {projectInfo.imageLeft === "true" ? (
                <React.Fragment>
                  <Image projectInfo={projectInfo} />
                  <Text projectInfo={projectInfo} classname={textAbove} />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Text projectInfo={projectInfo} classname={textAbove} />
                  <Image projectInfo={projectInfo} />
                  <Text
                    projectInfo={projectInfo}
                    textBelow
                    classname={textBelow}
                  />
                </React.Fragment>
              )}
            </div>
          </div>
        </section>
      </div>
    </ProjectContainer>
  )
}
const ProjectContainer = styled.div`
  background: ${props =>
    props.imageLeft === "true" ? "var(--veryLightGrey)" : "var(--mainWhite)"};

  .project-desc {
    font-size: 1rem;
    text-align: left;
  }

  .projectImageContainer {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .gatsby-image-wrapper:before {
    background: rgba(0, 0, 0, 0.7);
    font-weight: bold;
    font-size: 1.2rem;
    color: var(--brightGreen);
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .gatsby-image-wrapper:hover:before {
    content: "View It Live";
    z-index: 1;
  }

  @media (min-width: 1281px) {
    .textBelow {
      display: none !important;
    }
    .textAbove {
      display: show !important;
    }
  }

  @media (min-width: 998px) and (max-width: 1280px) {
    .textBelow {
      display: none !important;
    }
    .textAbove {
      display: block !important;
    }
  }

  @media (max-width: 998px) {
    .textBelow {
      display: block !important;
    }
    .textAbove {
      display: none !important;
    }
  }
`

export default SelectedProject
