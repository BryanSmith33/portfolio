import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Container, Title, InternalLink } from '../components/uiComponents'
import contacts from '../images/companies/contacts.png'
import overstock from '../images/companies/overstock.png'
import fashionphile from '../images/companies/fashionphile.png'
import devMountain from '../images/companies/devMountain.png'
import wadsco from '../images/companies/wadsco.png'
import Helmet from 'react-helmet'

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
const Company = styled(Img)`
  margin: 1em;
`
const WorkText = styled.p`
  width: 70%;
  @media (max-width: 800px) {
    width: 100%;
  }
`

const Work = (props) => {
  const { overstock, contacts, fashionphile, devMountain, wadsco } = props.data
  console.log(props.data);
  return (
    <WorkContainer>
      <Helmet
        title='Work | Bryan Smith Salt Lake City Web Developer & Designer'
        meta={[
          { name: 'description', content: 'Work with Bryan Smith' },
          { name: 'keywords', content: 'web developer, designer, freelance, design, salt lake city, utah' },
        ]}
      />
      <Title>These companies have trusted me, you can too</Title>
      <Companies>
        <Company resolutions={overstock.resolutions} alt="overstock" />
        <Company resolutions={contacts.resolutions} alt="1-800 contacts" />
        <Company resolutions={fashionphile.resolutions} alt="fashionphile" />
        <Company resolutions={devMountain.resolutions} alt="devmountain" />
        <Company resolutions={wadsco.resolutions} alt="ralph l wadsworth construction" />
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
}

export default Work

export const companyQuery = graphql`
  query companyQuery {
    overstock: imageSharp(id: { regex: "companies/overstock/" }) {
      resolutions( width: 175, height: 30) {
        ...GatsbyImageSharpResolutions
      }
    }
    contacts: imageSharp(id: { regex: "companies/contacts/" }) {
      resolutions( width: 210, height: 30) {
        ...GatsbyImageSharpResolutions
      }
    }
    devMountain: imageSharp(id: { regex: "companies/devMountain/" }) {
      resolutions( width: 215, height: 40) {
        ...GatsbyImageSharpResolutions
      }
    }
    fashionphile: imageSharp(id: { regex: "companies/fashionphile/" }) {
      resolutions( width: 188, height: 30) {
        ...GatsbyImageSharpResolutions
      }
    }
    wadsco: imageSharp(id: { regex: "companies/wadsco/" }) {
      resolutions( width: 66, height: 50) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`