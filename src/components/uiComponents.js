import styled from 'styled-components'
import Link from 'gatsby-link'

const FormButton = styled.button`
  border: none;
  box-shadow: 0px 4px 0px #7d7b7b;
  cursor: pointer;
  border-radius: 3px;
  text-transform: capitalize;
  width: 230px;
  height: 60px;
  margin: 10px auto;
  font-size: 18px;
  background: #4b4b4b;
  color: #fff;
  text-transform: uppercase;
  &:active {
    background: #111;
    position: relative;
    top: 3px;
    box-shadow: none;
  }
`
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  @media (max-width: 800px) {
    height: 100%;
    flex-direction: column;
    padding: 6em 1.8em 2em;
  }
`
const Title = styled.h1`
  margin: 0;
`

const InternalLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  border-bottom: 3px solid transparent;
  border-image: linear-gradient(90deg, #FEE140 0%, #FA709A 100%);
  border-image-slice: 1;
  `
const ExternalLink = styled.a`
  color: inherit;
  text-decoration: none;
  border-bottom: 3px solid transparent;
  border-image: linear-gradient(90deg, #FEE140 0%, #FA709A 100%);
  border-image-slice: 1;
`


export { FormButton, Container, Title, InternalLink, ExternalLink }