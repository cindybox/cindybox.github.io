import React from "react"

// import styled from "styled-components"

const ProjectSmall = props => (
  <div className="col-6 col-md-4 col-lg-3">
    <a href="#">
      <img
        alt="..."
        class="img-raised"
        src={props.imgUrl}
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

export default ProjectSmall
