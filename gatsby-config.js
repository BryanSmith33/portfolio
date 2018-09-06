module.exports = {
  siteMetadata: {
    title: 'Bryan Smith',
  },
  plugins: ['gatsby-plugin-react-helmet', {
    resolve: 'gatsby-plugin-mailchimp',
    options: {
      endpoint: 'https://frontamentals.us17.list-manage.com/subscribe/post?u=a4a925b2d91aa54f026ee8f4b&amp;id=392f9649f2',
    },
  }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`
      }
    }, `gatsby-transformer-sharp`, `gatsby-plugin-sharp`],
}
