import styled from 'styled-components'
import Link from 'gatsby-link'

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

const Form = styled.form`
  width: 300px;
  margin: ${props => props.margin};
  @media (max-width: 800px) {
    width: 100%;
  }
`
const Field = styled.div`
  display: flex;
  flex-flow: column-reverse;
  margin-bottom: 1em;
`
const Input = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 1px solid #ccc;
  font-family: inherit;
  -webkit-appearance: none;
  border-radius: 0;
  padding: 0;
  cursor: text;
  transition: all 0.2s;
  z-index: 2;
  background: transparent;
  &::-webkit-input-placeholder {
    opacity: 0;
    transition: inherit;
  }
  &:focus::-webkit-input-placeholder {
    opacity: 1;
    color: #ccc;
  }
  &:focus{
    outline: 0;
    border-bottom: 1px solid #666;
  }
  &:focus ~ label,
  &:valid ~ label,
  &:not(:placeholder-shown) + label{
    top: 0px;
    font-size: .8em;
  }
  `
const Label = styled.label`
  text-transform: uppercase;
  transition: all 0.2s;
  position: relative;
  top: 27px;
`
const TextArea = styled.textarea`
  height: 200px;
  width: 300px;
  background: transparent;
  @media (max-width: 800px) {
    width: 100%;
  }
`
const FormButton = styled.button`
  border: none;
  box-shadow: 0px 4px 0px #7d7b7b;
  cursor: pointer;
  border-radius: 3px;
  text-transform: capitalize;
  width: 100%;
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


export { FormButton, Container, Title, InternalLink, ExternalLink, Form, Field, Input, Label, TextArea }