import React from "react"
// import { FaArrowDown } from "react-icons/fa"
// import { Link } from "gatsby"
// import IntroContainer from "./IntroContainer"
import styled from "styled-components"

const Img = props => (
  <div className="col-12 col-lg-6">
    <a href={props.projectInfo.projectUrl}>
      <img
        alt="..."
        class="img-raised"
        src={props.projectInfo.imgUrl}
        style={{
          width: "100vw",
          height: "300px",
          overflow: "hidden",
          objectFit: "cover",
          objectPosition: "0% 0%",
        }}
      />
    </a>
  </div>
)

const Text = props => (
  <div className="col-12 col-lg-6">
    <div className="text-left">
      <p className="project-title text-uppercase">
        <strong> {props.projectInfo.projectName}</strong>
      </p>
      <div className="row">
        <div className="col-10 d-flex">
          <a class=" btn  btn-green  " href={props.projectInfo.projectUrl}>
            See It Live
          </a>
          <span>&emsp;</span>
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
  return (
    <ProjectContainer imageLeft={props.imageLeft}>
      <div className="row my-5">
        <section id="projects" class="project container mb-3">
          <div class="container text-center mt-5">
            <div class="row mt-5 mb-5">
              {props.imageLeft === "true" ? (
                <React.Fragment>
                  <Img projectInfo={props.projectInfo} />
                  <Text projectInfo={props.projectInfo} />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Text projectInfo={props.projectInfo} />
                  <Img projectInfo={props.projectInfo} />
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
`
export default SelectedProject
