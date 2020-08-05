import React, { useState, useEffect } from "react"
import { FaArrowDown } from "react-icons/fa"
import IntroContainer from "./IntroContainer"
import { Tween } from "react-gsap"
import { gsap } from "gsap"
import { CSSRulePlugin } from "gsap/all"

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
        <section id="intro" class="container intro mt-5 pt-5">
          <div className="col">
            <h1 className="intro-p1 mb-5">
              <Tween from={{ y: "-50" }} opacity={0} duration={1}>
                <p className="text-anim text-highlight hi"> HI, I AM </p>
              </Tween>

              <Tween
                from={{ x: "100" }}
                opacity={0}
                duration={1}
                rotation={360}
                delay={1}
                stagger={0.1}
              >
                <p className="text-anim">
                  <strong>XINGLIANG TONG</strong>
                </p>
              </Tween>
              <Tween from={{ y: "50" }} opacity={0} duration={1}>
                <p className="text-anim">I DESIGN AND BUILD WEB APPLICATIONS</p>
              </Tween>
            </h1>
            <h1 className="text-subtitle">
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
