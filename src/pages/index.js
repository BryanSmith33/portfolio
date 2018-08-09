import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { updateFontFamily } from '../helpers/setNavFont'
import Hero from '../components/Hero'
import About from '../components/About'
import Work from '../components/Work'
import Learn from '../components/Learn'

class IndexPage extends Component {
  componentDidMount() {
    const id = document.querySelectorAll('#name');
    updateFontFamily(id);
  }
  render() {
    console.log(this.props.data);
    return (
      <div>
        <Helmet>
          <title>Bryan Smith | Salt Lake City Web Developer & Designer</title>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="description" content="This is an example of a meta description. This will often show up in search results." />
        </Helmet>
        <Hero />
        <About myMug={this.props.data} />
        <Work />
        <Learn />
      </div>
    );
  }
}

export default IndexPage

export const imgQuery = graphql`
  query imgQuery {
    test: imageSharp(id: { regex: "/frontamentals/" }) {
      resolutions( width: 300) {
          ...GatsbyImageSharpResolutions
        }
    }
  }
`