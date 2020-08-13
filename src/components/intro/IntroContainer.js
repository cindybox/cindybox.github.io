import React from "react"
import styled from "styled-components"

const IntroContainer = styled.div`
  position: relative;

  .intro {
    color: var(--mainDark);
    padding-top: 24vh;
    padding-bottom: 8rem;
  }

  .intro-p1 {
    font-size: 26px;
    letter-spacing: -0.01em;
  }

  .intro-p1 strong {
    font-size: 30px;
    font-weight: 900;
    letter-spacing: 0.07em;
  }

  .intro-subtitle {
    font-size: 16px;
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
      font-size: 54px;
    }

    .intro-p1 strong {
      font-size: 86px;
    }

    .intro-subtitle {
      font-size: 24px;
    }
  }

  @media screen and (max-width: 1199px) and (min-width: 481px) {
    .intro-p1,
    .intro-p1.hi {
      font-size: calc(26px + 3.89 * (1vw - 4.8px));
    }

    .intro-p1 strong {
      font-size: calc(30px + 7.78 * (1vw - 4.8px));
    }

    .intro-subtitle {
      font-size: calc(16px + 1.111 * (1vw - 4.8px));
    }
  }

  @media screen and (max-width: 768px) {
    .intro {
      text-align: center;
    }
  }
`

export default ({ children }) => <IntroContainer>{children} </IntroContainer>
