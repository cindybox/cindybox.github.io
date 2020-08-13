import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Background = () => {
  const wedge = useStaticQuery(
    graphql`
      query {
        allImageSharp(
          filter: { fluid: { originalName: { eq: "wedge.png" } } }
        ) {
          nodes {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <BackgroundContainer>
      <div className="wedge1">
        <Img fluid={wedge.allImageSharp.nodes[0].fluid} />
      </div>
      <div className="wedge2">
        <Img fluid={wedge.allImageSharp.nodes[0].fluid} />
      </div>
    </BackgroundContainer>
  )
}

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: -1;

  img {
    margin-bottom: 0 !important;
  }
  .wedge1 {
    position: absolute;
    width: 16%;
    left: 55%;
    margin-top: -3rem;
  }
  .wedge2 {
    position: absolute;
    transform: translate(100%, 100%) rotate(90deg) translateX(-100%);
    transform-origin: top left;
    width: 16%;
    right: 0;
    bottom: -3rem;
  }

  @media screen and (max-width: 900px) {
    .wedge2 {
      bottom: 0rem;
    }
  }
`

export default Background
