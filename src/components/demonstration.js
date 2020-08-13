import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap/gsap-core"

const Demonstration = () => {
  const plusRef = useRef(null)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    plusRef.current &&
      gsap.to(plusRef.current, {
        scrollTrigger: {
          trigger: plusRef.current,
          toggleActions: "restart pause none none",
        },
        opacity: 1,
        rotation: 720,
        x: 0,
        y: 0,
        duration: 0.6,
        delay: 2,
        scale: 1.4,
        color: "var(--brightGreen)",
      })
  }, [])
  return (
    <DemoContainer className="mt-5 p-5">
      <div className="headline">
        <h1>design </h1>
        <span className="plus" ref={plusRef}>
          +
        </span>
        <h1>code</h1>
      </div>

      <h4>endless possibility</h4>
    </DemoContainer>
  )
}

const DemoContainer = styled.div`
  text-align: center;
  .headline {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    margin: 0 !important;
  }
  h1 {
    font-weight: 900;
  }
  .plus {
    opacity: 0.2;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 2.5rem;
  }
`
export default Demonstration
