import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import yo_boy from '../images/yo_boy_cropped.jpg'

const AboutContainer = styled.div`
  padding: 3em;
  display: flex;
  align-items: center;
  position: relative;
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
  height: 340px;
  margin: 3em 0 3em 3em;
  border-radius: 50%;
`
const startYear = 2014
const thisYear = new Date().getFullYear()

const About = () => (
  <AboutContainer>
    <AboutClipPath />
    <TextContainer>
      <AboutTitle>Hi, I'm Bryan</AboutTitle>
      <p> but my friends & family call me Beeg (pronounced like Beej). I am a web developer & designer hailing from Salt Lake City, Utah. I have been developing for about {thisYear - startYear} years now & absolutely love it.</p>
      <p>I recently started as a lead instructor at <a target='_blank' href='https://devmountain.com/' rel="noopener noreferrer">DevMountain</a>, an immersive coding bootcamp, & I absolutely love seeing others learn about the web. Being a bootcamp grad myself, it is awesome to see someone go from knowing nothing to being able to contribute to a team in three months. I have worked for a wide range of companies both big & small. You can check out my <Link to="/work"> work section</Link> for more info on my career history.</p>
      <p>When I'm not teaching or developing I am spending time with my beautiful wife Lindsey, my daughters & two dogs Sperry & Finn. I love being outdoors, making people laugh & doing anything on a board. Oh, I also love University of Utah athletics, Ki-yi!</p>
      <p>If you are interested in learning more about me or have any questions at all, I am an open book & you can <Link to="/contact">contact me here</Link> or reach out on <a target="_blank" href="https://twitter.com/BGSIII" rel="noopener noreferrer">Twitter!</a></p>
    </TextContainer>
    <StyledImg src={yo_boy} />
  </AboutContainer>
)

export default About