import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  background: #111;
  color: #f6f6f6;
  text-align: center;
  padding: 1em;
` 
const FooterP = styled.p`
  margin: 0;
`

const Footer = () => (
  <FooterContainer>
    <FooterP>This website was built in God's country, whatever that means.</FooterP>
  </FooterContainer>
)

export default Footer