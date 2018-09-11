import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { updateFontFamily } from '../helpers/setFont'
import Hero from '../components/Hero'
import About from '../components/About'
import Work from '../components/Work'
import Learn from '../components/Learn'

class IndexPage extends Component {
  componentDidMount() {
    const id = document.querySelectorAll('#fname, #lname');
    updateFontFamily(id);
  }
  render() {
    const { hero, me } = this.props.data
    return (
      <div>
        <Helmet>
          <title>Bryan Smith | Salt Lake City Web Developer & Designer</title>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="description" content="This is an example of a meta description. This will often show up in search results." />
        </Helmet>
        <Hero background={hero} />
        <About myMug={me} />
        <Work />
        <Learn />
      </div>
    );
  }
}

export default IndexPage

export const imgQuery = graphql`
  query imgQuery {
    me: imageSharp(id: { regex: "/yo_boy_cropped/" }) {
      resolutions( width: 260, height: 260) {
        ...GatsbyImageSharpResolutions
      }
    }
    hero: imageSharp(id: { regex: "/patriarchHike/" }) {
      sizes( maxWidth: 1400) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`