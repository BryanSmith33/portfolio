import React from "react"
import styled from "styled-components"
import { InternalLink, ExternalLink } from "../components/uiComponents"
import Img from "gatsby-image"

const AboutContainer = styled.div`
  padding: 3em;
  display: flex;
  align-items: center;
  position: relative;
  background: #2b2427;
  @media (max-width: 550px) {
    padding: 3em 1em;
  }
`
const AboutClipPath = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background: #fffafa;
  left: 0;
  clip-path: polygon(100% 0, 100% 75%, 50% 100%, 0 75%, 0 0);
  z-index: 1;
`
const TextContainer = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 10px 15px;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  box-shadow: 0px 4px 20px 2px #868686ab;
  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
  }
`
const Title = styled.h1`
  color: #2b3f52;
  @media (max-width: 550px) {
    text-align: center;
  }
`
const StyledImg = styled(Img)`
  margin: 0 1.5em 1em;
  border-radius: 50%;
  float: right;
  @media (max-width: 850px) {
    height: 35vw;
  }
  @media (max-width: 550px) {
    align-self: center;
    margin: 0 0 1em;
  }
`
const startYear = 2014
const thisYear = new Date().getFullYear()

const About = ({ myMug }) => {
  return (
    <AboutContainer>
      <AboutClipPath />
      <TextContainer>
        <Title>Hi, I'm Bryan</Title>
        <StyledImg resolutions={myMug.childImageSharp.fixed} alt="my ugly mug" />
        <p>
          {" "}
          but my friends and family call me Beeg (pronounced like Beej). I am a
          web developer and designer hailing from Salt Lake City, Utah. I have
          been developing for about {thisYear - startYear} years now and
          absolutely love it.
        </p>
        <p>
          I am a lead instructor at{" "}
          <ExternalLink
            target="_blank"
            href="https://devmountain.com/"
            rel="noopener noreferrer"
          >
            DevMountain
          </ExternalLink>
          , an immersive coding bootcamp, and I absolutely love seeing others
          learn about the web. Being a bootcamp grad myself, it is awesome to
          see someone go from knowing nothing to being able to contribute to a
          team in such a short amount of time. I have worked for a wide range of
          companies both big and small. You can check out my{" "}
          <InternalLink to="/Work"> work section</InternalLink> for more info on
          my career history and find out a little more about my freelance
          availability. I also regularly post my tech related ramblings to my
          blog,{" "}
          <ExternalLink
            target="_blank"
            href="https://frontamentals.com/"
            rel="noopener noreferrer"
          >
            Frontamentals
          </ExternalLink>
          . Give it peek{" "}
          <span role="img" aria-label="eyes">
            &nbsp;👀
          </span>{" "}
          and let me know what you think.
        </p>
        <p>
          When I'm not teaching or developing I am spending time with my
          beautiful wife Lindsey, my daughters and two dogs. I love being
          outdoors, making people laugh and doing anything on a board. Oh, I
          also love University of Utah athletics, Ki-yi!
        </p>
        <p>
          If you are interested in learning more about me or have any questions
          at all, I am an open book and you can{" "}
          <InternalLink to={`/Contact`}>contact me here</InternalLink> or reach
          out on{" "}
          <ExternalLink
            target="_blank"
            href="https://twitter.com/beeg_smith"
            rel="noopener noreferrer"
          >
            Twitter!
          </ExternalLink>
        </p>
      </TextContainer>
    </AboutContainer>
  )
}

export default About
