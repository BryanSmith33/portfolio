import React from "react"
import { Title, Container } from "../components/uiComponents"
import styled from "styled-components"
import Link from "gatsby-link"
import Layout from "../components/layout"
import SEO from "../components/seo"


const SuccessContainer = styled(Container)`
  flex-direction: column;
`
const SuccessLink = styled(Link)`
  color: #111;
`

const Success = () => (
  <Layout>
    <SEO title="Thanks for the Email!" />
    <SuccessContainer>
      <Title>Thanks for the email!</Title>
      <p>I will get back to you ASAP</p>
      <SuccessLink to="/">Head on Home</SuccessLink>
    </SuccessContainer>
  </Layout>
)

export default Success
