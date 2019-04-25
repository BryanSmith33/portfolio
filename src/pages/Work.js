import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Container, Title, InternalLink } from "../components/uiComponents"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import { graphql } from "gatsby"

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
  padding: 0.2em 0.3em;
  margin: 0.5em;
  border: 2px solid #666;
  transition: all 0.3s;
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

const Work = props => {
  console.log(props.data)
  const { overstock, contacts, fashionphile, devMountain, wadsco } = props.data
  return (
    <Layout>
      <WorkContainer>
        <Helmet
          title="Work | Bryan Smith Salt Lake City Web Developer & Designer"
          meta={[
            { name: "description", content: "Work with Bryan Smith" },
            {
              name: "keywords",
              content:
                "web developer, designer, freelance, design, salt lake city, utah",
            },
          ]}
        />
        <Title>These companies have trusted me, you can too</Title>
        <Companies>
          <Company
            resolutions={overstock.childImageSharp.fixed}
            alt="overstock"
          />
          <Company
            resolutions={contacts.childImageSharp.fixed}
            alt="1-800 contacts"
          />
          <Company
            resolutions={fashionphile.childImageSharp.fixed}
            alt="fashionphile"
          />
          <Company
            resolutions={devMountain.childImageSharp.fixed}
            alt="devmountain"
          />
          <Company
            resolutions={wadsco.childImageSharp.fixed}
            alt="ralph l wadsworth construction"
          />
        </Companies>
        <WorkText>
          I've been fortunate enough to work on a variety of projects and teams
          which means I also have experience with a wide range of technology.
          The technologies I use the most are:
        </WorkText>
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
        <WorkText>
          I also have experience with PHP, C# and the Demandware platform but
          would need a little ramp up time to be comfortable with them again. I
          am a quick learner and feel that I can work with any type of team.
        </WorkText>
        <WorkText>
          Piqued your interest? Feel free to reach out to me on my{" "}
          <InternalLink to={`/Contact`}>contact page</InternalLink>
        </WorkText>
      </WorkContainer>
    </Layout>
  )
}

export default Work

export const companyQuery = graphql`
  query companyQuery {
    overstock: file(relativePath: { eq: "companies/overstock.png" }) {
      childImageSharp {
        fixed(width: 175, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    contacts: file(relativePath: { eq: "companies/contacts.png" }) {
      childImageSharp {
        fixed(width: 210, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    devMountain: file(relativePath: { eq: "companies/devMountain.png" }) {
      childImageSharp {
        fixed(width: 215, height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fashionphile: file(relativePath: { eq: "companies/fashionphile.png" }) {
      childImageSharp {
        fixed(width: 188, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    wadsco: file(relativePath: { eq: "companies/wadsco.png" }) {
      childImageSharp {
        fixed(width: 66, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
