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
  width: 100%;
  height: inherit;
    width: 100%;
  height: 200px;
  position: absolute;
  z-index: 1;
  margin-top: 35px;
`
const Alpha = styled.rect`
  fill: rgba(255, 255, 255, 0.8);
  -webkit-animation: fadeIn ease-in 1;
  -moz-animation: fadeIn ease-in 1;
  animation: fadeIn ease-in 1;
  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  animation-duration: 1s;
`
const StyledText = styled.text`
  text-anchor: middle;
  font-size: 5em;
`
const HeroImage = styled.div`
    background: url(${heroImg}) no-repeat top center;
    background-size: cover;
    position: relative;
    width: 100%;
    min-height: 100%;
`
const Base = styled.rect`
  fill: #000;
  mask: url(#mask);
`;

const Hero = () => (
  <HeroContainer>
    <StyledSVG>
      <defs>
        <mask id="mask" x="0" y="0" width="100%" height="100%" >
          <Alpha x="0" y="0" width="100%" height="100%" />
          <StyledText id="name" x="50%" y="65%">Bryan Smith</StyledText>
        </mask>
      </defs>
      <Base id="base" x="0" y="0" width="100%" height="100%" />
    </StyledSVG>
    <HeroImage></HeroImage>
  </HeroContainer>
)

export default Hero