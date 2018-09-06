import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from './../components/Header'
import './index.css'


const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Bryan Smith is a web developer and designer from Salt Lake City, Utah' },
        { name: 'keywords', content: 'web developer, designer, freelance, design, salt lake city, utah' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
