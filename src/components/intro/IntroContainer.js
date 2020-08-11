import React from "react"
import styled from "styled-components"

const IntroContainer = styled.div`
  --scaleTextBlock: 1;
  .intro {
    margin-bottom: 10% !important;
    color: var(--mainDark);
    font-family: "Avenir Next", sans-serif;
  }

  .intro-p1 {
    font-size: 26px;
    letter-spacing: 0.03em;
  }

  .intro-p1 .hi {
    color: var(--brightGreen);
    letter-spacing: 0.12em;
  }

  .intro-p1 strong {
    font-size: 30px;
    letter-spacing: 0.07em;
  }

  .arrow {
    animation: arrow-down 2s 0.5s infinite ease-in;
  }

  @keyframes arrow-down {
    70% {
      transform: translateY(50%);
    }

    100% {
      transform: translateY(0);
    }
  }

  @media screen and (min-width: 1200px) {
    .intro-p1 {
      font-size: 90px;
    }

    .intro-p1 strong {
      font-size: 111px;
    }
  }

  @media screen and (max-width: 1199px) and (min-width: 481px) {
    .intro-p1,
    .intro-p1.hi {
      font-size: calc(26px + 8.889 * (1vw - 4.8px));
    }

    .intro-p1 strong {
      font-size: calc(30px + 11.25 * (1vw - 4.8px));
    }
  }

  @media screen and (max-width: 768px) {
    .intro {
      text-align: center;
    }
  }
`

export default ({ children }) => <IntroContainer>{children} </IntroContainer>
