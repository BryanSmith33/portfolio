import React from 'react'
import styled from 'styled-components'
import yo_boy from '../images/yo_boy.jpg'

const AboutContainer = styled.div`
  padding: 3em;
  display: flex;
  align-items: center;
  position: absolute;
`
const AboutClipPath = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background: #d54343;
  left: 0;
  z-index: -1;
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
`
const TextContainer = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 10px 30px;
`
const AboutTitle = styled.h1`
  color: #16426a;
`
const StyledImg = styled.img`
  height: 400px;
  margin: 3em 0 3em 3em;
`
const About = () => (
  <AboutContainer>
    <AboutClipPath />
    <TextContainer>
      <AboutTitle>Hi, I'm Bryan</AboutTitle>
      <p>but my friends and family call me Beeg (pronounced like Beej). I am a web developer & designer hailing from Salt Lake City, Utah. I have been developing for about 4 years now & absolutely love it.</p>
      <p>I am currently a lead instructor at DevMountain, an immersive coding bootcamp, & I love helping others learn about the web. Being a bootcamp grad myself, it is awesome to see someone go from knowing nothing to being able to contribute to a team in such a short amount of time. I have worked for a wide range of companies both big & small. You can check out my work section for more info on my career history.</p>
      <p>When I'm not teaching or developing I am spending time with my beautiful wife Lindsey, my daughters & two dogs Sperry & Finn. I love being outdoors, making people laugh & doing anything on a board. Oh, I also love University of Utah athletics, Ki-yi!</p>
      <p>If you are interested in learning more about me or have any questions at all, I am an open book & you can contact me here or reach out on Twitter!</p>
    </TextContainer>
    <StyledImg src={yo_boy} />
  </AboutContainer>
)

export default About