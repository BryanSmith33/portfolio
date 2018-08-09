import React from 'react'
import styled from 'styled-components'
import heroImg from '../images/patriarchHike.jpg'

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
`
const StyledSVG = styled.svg`
  width: 600px;
  height: 375px;
  position: absolute;
  z-index: 1;
  @media (max-width: 600px) {
    width: 100%;
  }
`
const Alpha = styled.rect`
  fill: rgba(255, 255, 255, 0.8);
  width: 600px;
  height: 500px;
`
const StyledText = styled.text`
  text-anchor: middle;
  font-size: 6em;
  @media (max-width: 500px) {
    font-size: 5em;
  }
`
const HeroImage = styled.div`
    background: url(${heroImg}) no-repeat top center;
    background-size: cover;
    position: relative;
    width: 100%;
    min-height: 100%;
`
const Base = styled.rect`
  fill: #FFF;
  mask: url(#mask);
  width: 100%;
  `;

const Hero = () => (
  <HeroContainer>
    <StyledSVG>
      <defs>
        <mask id="mask" x="0" y="0" width="100%" height="100%" >
          <Alpha x="0" y="0" />
          <StyledText id="name" x="50%" y="50%">Bryan</StyledText>
          <StyledText id="name" x="50%" y="75%">Smith</StyledText>
        </mask>
      </defs>
      <Base id="base" x="0" y="0" />
    </StyledSVG>
    <HeroImage></HeroImage>
  </HeroContainer>
)

export default Hero