import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import resume from '../images/bryanGeorgeSmithResume.pdf'

const WorkContainer = styled.div`
  padding: 3em;
  background: #2b2427;
  color: #f6f6f6;
  position: relative;
  @media (max-width: 550px) {
    padding: 3em 1em;
  }
`
const WorkTextContainer = styled.div`
  padding: 10px 15px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`
const ExternalLink = styled.a`
  color: inherit;
  text-decoration: none;
  border-bottom: 3px solid transparent;
  border-image: linear-gradient(90deg, #FEE140 0%, #FA709A 100%);
  border-image-slice: 1;
`
const InternalLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  border-bottom: 3px solid transparent;
  border-image: linear-gradient(90deg, #FEE140 0%, #FA709A 100%);
  border-image-slice: 1;
`
const LineContainer = styled.div`
  height: 140%;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
`
const Line = styled.div`
  height: 100%;
  width: 3px;
  background: rgba(0, 76, 54, 0.5);
  transform: skew(45deg);
`
const Work = () => (
  <WorkContainer>
    <LineContainer>
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
    </LineContainer>
    <WorkTextContainer>
      <h1>Work with me</h1>
      <p>I've been fortunate enough to work for a wide range of companies and with a wide range of technology. If resumes are your thing, feast your eyes on <ExternalLink target='_blank' href={resume} rel="noopener noreferrer">this bad boy</ExternalLink>. Some of the technology that I am most comofortable with is HTML, CSS, JavaScript (ES6+), React, Angular, Vue, Node and the Adobe Suite along with Sketch for designing. I pride myself on creating user experiences that are not only stunning but highy functional as well and I would be happy to talk to you about any projects you need done or give my thoughts on a project you are currently working on. Feel free to contact me <InternalLink to={`/contact`}>here</InternalLink>.</p>
      <p>Still not convinced? Check out some of my <InternalLink to={`/work`}>work</InternalLink> and see why companies have chosen me for their projects.</p>
    </WorkTextContainer>
  </WorkContainer>
)

export default Work