import React from "react"
import { Title, Container } from "../components/uiComponents"
import Link from "gatsby-link"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const FourOhFourContainer = styled(Container)`
  flex-direction: column;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <FourOhFourContainer>
      <Title>This isn't the route you are looking for</Title>
      <Link to="/">Go home...</Link>
    </FourOhFourContainer>
  </Layout>
)

export default NotFoundPage
