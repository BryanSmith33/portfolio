import React from 'react'
import styled from 'styled-components'
import { Container, Title, InternalLink } from '../components/uiComponents'
import contacts from '../images/companies/contacts.png'
import overstock from '../images/companies/overstock.png'
import fashionphile from '../images/companies/fashionphile.png'
import devMountain from '../images/companies/devMountain.png'
import wadsco from '../images/companies/wadsco.png'

const WorkContainer = styled(Container)`
  flex-direction: column;
  min-height: 100vh;
  background-color: #8c8c8c;
  background-image: linear-gradient(331deg, #8c8c8c 0%, #ffffff 42%);
`
const TechContainer = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1em;
  justify-content: center;
`
const Tech = styled.span`
  padding: .2em .3em;
  margin: .5em;
  border: 2px solid #666;
  transition: all .3s;
  &:hover {
  color: ${props => props.color};
  font-weight: bold;
  border-color: ${props => props.color};
  transform: scale(1.1);
  }
`
const Companies = styled.div`
  background: #c7c7c7;
  width: 100vw;
  margin: 1.5em 0;
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
const Company = styled.img`
  height: ${props => props.heighht}px;
  margin: 1em;
`
const WorkText = styled.p`
  width: 70%;
  @media (max-width: 800px) {
    width: 100%;
  }
`

const Work = () => (
  <WorkContainer>
    <Title>These companies have trusted me, you can too</Title>
    <Companies>
      <Company src={overstock} alt="company logo" height={30} />
      <Company src={contacts} alt="company logo" height={30} />
      <Company src={fashionphile} alt="company logo" height={30} />
      <Company src={devMountain} alt="company logo" height={40} />
      <Company src={wadsco} alt="company logo" height={50} />
    </Companies>
    <WorkText>I've been fortunate enough to work on a variety of projects and teams which means I also have experience with a wide range of technology. The technologies I use the most are:</WorkText>
    <TechContainer>
      <Tech color={`#D35736`}>HTML</Tech>
      <Tech color={`#3472B1`}>CSS</Tech>
      <Tech color={`#F4DB5D`}>JavaScript</Tech>
      <Tech color={`#62D7FA`}>React</Tech>
      <Tech color={`#64B587`}>Vue</Tech>
      <Tech color={`#B32934`}>Angular</Tech>
      <Tech color={`#94CA4A`}>Node</Tech>
      <Tech color={`#D349A7`}>GraphQL</Tech>
      <Tech color={`#F7CB53`}>Firebase</Tech>
      <Tech color={`#3E668C`}>SQL</Tech>
      <Tech color={`#DA3832`}>Adobe Suite</Tech>
      <Tech color={`#F4B03E`}>Sketch</Tech>
    </TechContainer>
    <WorkText>I also have experience with PHP, C# and the Demandware platform but would need a little ramp up time to be comfortable with them again. I am a quick learner and feel that I can work with any type of team.</WorkText>
    <WorkText>Piqued your interest? Feel free to reach out to me on my <InternalLink to={`/contact`}>contact page</InternalLink></WorkText>
  </WorkContainer>
)

export default Work