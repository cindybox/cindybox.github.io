import React from "react"
import { FaArrowDown } from "react-icons/fa"
import IntroContainer from "./IntroContainer"
import { Transition } from "react-spring/renderprops"

const Intro = () => (
  <div>
    <IntroContainer>
      <section id="intro" class="container intro mt-5 pt-5">
        <div className="col">
          <h1 className="intro-p1 mb-5">
            <span className="hi">
              <Transition
                items={[{ text: "HI, I AM", key: 1 }]}
                keys={item => item.key}
                from={{ transform: "translate3d(0,-25rem,0)" }}
                enter={{ transform: "translate3d(0,0px,0)" }}
                leave={{ transform: "translate3d(0,-25rem,0)" }}
                className={item => item.className}
              >
                {item => props => (
                  <div style={props} className={props.className}>
                    {item.text}
                  </div>
                )}
              </Transition>
            </span>
            <div className="mb-2 ">
              <strong>
                <span>
                  <Transition
                    items={[
                      {
                        text: "XINGLIANG TONG",
                        key: 2,
                        className: "font-weight-bold",
                      },
                    ]}
                    keys={item => item.key}
                    from={{ transform: "translate3d(0,-100rem,0)" }}
                    enter={{ transform: "translate3d(0,0px,0)" }}
                    leave={{ transform: "translate3d(0,-100rem,0)" }}
                    className={item => item.className}
                  >
                    {item => props => (
                      <div style={props} className={props.className}>
                        {item.text}
                      </div>
                    )}
                  </Transition>
                </span>
              </strong>
            </div>
            <Transition
              items={[{ text: "I DESIGN AND BUILD WEB APPLICATIONS", key: 3 }]}
              keys={item => item.key}
              from={{ transform: "translate3d(0,-235rem,0)" }}
              enter={{ transform: "translate3d(0,0px,0)" }}
              leave={{ transform: "translate3d(0,-235rem,0)" }}
              className={item => item.className}
            >
              {item => props => (
                <div style={props} className={props.className}>
                  {item.text}
                </div>
              )}
            </Transition>
          </h1>

          <h1 className="text-subtitle">
            View Some of My Projects
            <FaArrowDown
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

export default Intro
