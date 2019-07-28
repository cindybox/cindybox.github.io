import React from "react"
// import { FaArrowDown } from "react-icons/fa"
// import { Link } from "gatsby"
// import IntroContainer from "./IntroContainer"
import styled from "styled-components"
import classNames from "classnames"
const Img = props => (
  <div className="col-12 col-lg-6 p-3">
    <div className="projectImageContainer">
      <a href={props.projectInfo.projectUrl}>
        <img
          alt="..."
          class="img-raised"
          src={props.projectInfo.imgUrl}
          style={{
            width: "100vw",
            objectFit: "contain",
            objectPosition: "50% 50%",
          }}
        />
        <div className="projectLink text-capitalize d-flex justify-content-center align-items-center">
          View It Live
        </div>
      </a>
    </div>
  </div>
)

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
          {props.projectInfo.projectType}{" "}
        </em>
      </strong>
      <br />
      {`${props.projectInfo.projectDescription.slice(0, 300)}...`}
    </p>
    <div className="text-right">
      <a class="moreInfo text-muted border-bottom " href="#">
        More Info
      </a>
    </div>
  </div>
)

const SelectedProject = props => {
  const textAbove = classNames("col-12", "col-lg-6", "p-3", {
    textAbove: props.imageLeft === "false",
  })

  const textBelow = classNames("col-12", "col-lg-6", "p-3", {
    textBelow: props.imageLeft === "false",
  })
  return (
    <ProjectContainer imageLeft={props.imageLeft}>
      <div className="row my-5">
        <section id="projects" class="project container mb-3">
          <div class="container text-center mt-5">
            <div class="row mt-5 mb-5 p-3">
              {props.imageLeft === "true" ? (
                <React.Fragment>
                  <Img projectInfo={props.projectInfo} />
                  <Text projectInfo={props.projectInfo} classname={textAbove} />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Text projectInfo={props.projectInfo} classname={textAbove} />
                  <Img projectInfo={props.projectInfo} />
                  <Text
                    projectInfo={props.projectInfo}
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
  .projectLink {
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
    visibility: hidden;
  }

  .projectImageContainer:hover .projectLink {
    visibility: visible;
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
