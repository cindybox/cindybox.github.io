import React from "react"
import styled from "styled-components"

const IntroContainer = styled.div`
  .intro {
    margin-bottom: 10% !important;
  }
  .hi {
    color: var(--brightGreen);
  }
  .intro-p1 {
    font-size: 4rem;
    color: var(--mainDark);
    line-height: 6rem;
    font-family: "Avenir Next", sans-serif;

    letter-spacing: 0.15rem;
    /* font-weight: bold; */
  }

  .intro-p1 strong {
    font-size: 5rem;
    color: var(--mainDark);
  }

  /*
    ##Device = Desktops
    ##Screen = 1281px to higher resolution desktops
  */

  @media (min-width: 1281px) {
    //CSS
  }

  /*
    ##Device = Laptops, Desktops
    ##Screen = B/w 1025px to 1280px
  */

  @media (min-width: 1025px) and (max-width: 1280px) {
    //CSS
  }

  /*
    ##Device = Tablets, Ipads (portrait)
    ##Screen = B/w 768px to 1024px
  */

  @media (min-width: 768px) and (max-width: 1024px) {
    //CSS
  }

  /*
    ##Device = Tablets, Ipads (landscape)
    ##Screen = B/w 768px to 1024px
  */

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    .intro-p1 {
      font-size: 3.2rem;
      line-height: 5rem;
    }

    .intro-p1 strong {
      font-size: 3.6rem;
    }
  }

  /*
    ##Device = Low Resolution Tablets, Mobiles (Landscape)
    ##Screen = B/w 481px to 767px
  */

  @media (min-width: 481px) and (max-width: 767px) {
    .intro {
      text-align: center;
    }
    .intro-p1 {
      font-size: 2.3rem;
      line-height: 4.2rem;
    }

    .intro-p1 strong {
      font-size: 2.8rem;
    }
  }

  /*
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 320px to 479px
  */

  @media (min-width: 320px) and (max-width: 480px) {
    .intro {
      text-align: center;
    }
    .intro-p1 {
      font-size: 1.6rem; /*1.6*/
      line-height: 3rem; /*3*/
    }

    .intro-p1 strong {
      font-size: 2rem; /*2*/
    }
  }
`

export default ({ children }) => <IntroContainer>{children} </IntroContainer>
