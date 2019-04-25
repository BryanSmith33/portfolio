import React, { Component } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { updateFontFamily } from "../helpers/setFont"
import Hero from "../components/Hero"
import About from "../components/About"
import Work from "../components/Work"
import Learn from "../components/Learn"

class IndexPage extends Component {
  componentDidMount() {
    const id = document.querySelectorAll("#fname, #lname")
    updateFontFamily(id)
  }
  render() {
    const { hero, me } = this.props.data
    return (
      <Layout>
        <div>
          <Helmet>
            <title>Bryan Smith | Salt Lake City Web Developer & Designer</title>
            <meta
              http-equiv="Content-Type"
              content="text/html; charset=utf-8"
            />
            <meta
              name="description"
              content="This is an example of a meta description. This will often show up in search results."
            />
          </Helmet>
          <Hero background={hero} />
          <About myMug={me} />
          <Work />
          <Learn />
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const imgQuery = graphql`
  query imgQuery {
    me: file(relativePath: { eq: "yo_boy_bw.jpg" }) {
      childImageSharp {
        fixed(width: 260, height: 260) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    hero: file(relativePath: { eq: "patriarchHike.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
