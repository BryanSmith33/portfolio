import React from 'react'
import styled, { keyframes } from 'styled-components'
import Img from 'gatsby-image'

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
  @media (max-width: 800px) {
    height: initial;
  }
`
const FadeIn = keyframes`
  from {
      opacity: 0
  }
  to {
      opacity: 1
  }
`
const StyledSVG = styled.svg`
  width: 600px;
  height: 375px;
  position: absolute;
  z-index: 1;
  animation: ${FadeIn} ease-in 1;
  animation-duration: 2s;
  @media (max-width: 599px) {
    width: initial;
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
const HeroImage = styled(Img)`
  width: 100vw;
  @media (max-width: 500px) {
    height: 350px;
  }
`
const Base = styled.rect`
  fill: #FFF;
  mask: url(#mask);
  width: 100%;
  `;

const Hero = ({ background }) => {
  return (
    <HeroContainer>
      <StyledSVG>
        <defs>
          <mask id="mask" x="0" y="0" width="100%" height="100%" >
            <Alpha x="0" y="0" />
            <StyledText id="fname" x="50%" y="50%">Bryan</StyledText>
            <StyledText id="lname" x="50%" y="75%">Smith</StyledText>
          </mask>
        </defs>
        <Base id="base" x="0" y="0" />
      </StyledSVG>
      <HeroImage sizes={background.sizes} />
    </HeroContainer>
  )
}

export default Hero