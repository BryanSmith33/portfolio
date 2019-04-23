import React from 'react'
import { Title, Container } from '../components/uiComponents'
import styled from 'styled-components'
import Link from 'gatsby-link'

const SuccessContainer = styled(Container)`
  flex-direction: column;
`

const SucessLink = styled(Link)`
  color: #111;
`

const Success = () => (
  <SuccessContainer>
    <Title>Thanks for the email!</Title>
    <p>I will get back to you ASAP</p>
    <SucessLink to="/">Head on Home</SucessLink>
  </SuccessContainer>
)

export default Success
