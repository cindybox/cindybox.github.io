import React, { useState, useEffect } from "react"
import { FaArrowDown } from "react-icons/fa"
import IntroContainer from "./IntroContainer"
import { Tween } from "react-gsap"
import { gsap } from "gsap"
import { CSSRulePlugin } from "gsap/all"
import Background from "../globals/Background"

const Intro = () => {
  gsap.registerPlugin(CSSRulePlugin)
  const [rule, setRule] = useState([])
  useEffect(() => {
    let newrule = CSSRulePlugin.getRule(".text-anim:after")
    console.log(newrule["transform"])
    newrule && setRule(newrule)
    newrule &&
      gsap.to(newrule, {
        duration: 1,
        cssRule: { scaleY: 0 },
      })
  }, [rule])

  return (
    <div>
      <IntroContainer>
        <Background />
        <section id="intro" class="container intro mt-5">
          <div className="col">
            <h1 className="intro-p1 mb-5">
              <p className="text-anim text-highlight hi">
                <Tween
                  from={{ y: "-50" }}
                  opacity={0}
                  duration={1}
                  stagger={0.2}
                >
                  <span> HI,</span>
                  <span> I </span>
                  <span>AM</span>
                </Tween>
              </p>
              <p className="text-anim">
                <strong>
                  <Tween
                    from={{ x: "100" }}
                    opacity={0}
                    duration={1}
                    delay={1}
                    rotation={360}
                    stagger={0.4}
                  >
                    <span>XINGLIANG </span>
                    <span>TONG </span>
                  </Tween>
                </strong>
              </p>
              <Tween from={{ y: "50" }} opacity={0} duration={1}>
                <p className="text-anim">
                  I DESIGN AND BUILD <br />
                  WEB APPLICATIONS
                </p>
              </Tween>
            </h1>
            <h1 className="intro-subtitle pt-5">
              View Some of My Projects &ensp;
              <FaArrowDown
                className="arrow"
                style={{ color: "var(--brightGreen)", fontSize: "120%" }}
              />
            </h1>

            <div className="next-page">
              <a href="#">
                <i className="fas fa-arrow-down"></i>
              </a>
            </div>
          </div>
        </section>
      </IntroContainer>
    </div>
  )
}

export default Intro
