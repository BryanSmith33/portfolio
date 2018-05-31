import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { updateFontFamily } from '../helpers/setNavFont'
import Hero from '../components/Hero'
import About from '../components/About'

class IndexPage extends Component {
  componentDidMount() {
    const id = document.getElementById('name');
    updateFontFamily(id);
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Bryan Smith | Salt Lake City Web Developer & Designer</title>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="description" content="This is an example of a meta description. This will often show up in search results." />
        </Helmet>
        <Hero />
        <About />
      </div>
    );
  }
}

export default IndexPage