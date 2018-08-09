import React from 'react'
import styled from 'styled-components'
import { FormButton, Container, Title } from '../components/uiComponents'

const FaqContainer = styled.div`
  color: #bb5847;
  margin-right: 2em;
  width: 400px;
  @media (max-width: 800px) {
    width: initial;
    margin: 0;
  }
`
const AMA = styled.span`
  font-size: 3.3em;
  line-height: .8em;
  @media (max-width: 800px) {
    font-size: 2.3em;
  }
`
const Form = styled.form`
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
  width: 200px;
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

const Contact = () => (
  <Container>
    <FaqContainer>
      <Title>Go ahead, <br /> <AMA>AMA</AMA></Title>
      <p>That's Ask Me Anything incase you didn't know. Here are a few quick facts about me just in case it answers any questions you might have:</p>
      <ul>
        <li>Broken Bones: 0 (1 chipped though)</li>
        <li>Favorit Color: red</li>
        <li>Favorite Food: carne asada burrito</li>
        <li>Years Developing: {new Date().getFullYear() - 2014}</li>
        <li>Cats or Dogs: Dogs</li>
        <li>Favorite sport: Football to watch, skateboarding to do</li>
        <li>Height: 6'1"</li>
        <li>Greatest Fear: Being chased up the stairs in the dark</li>
        <li>Favorite Vacation: Hawaii</li>
        <li>Tattoos: 4</li>
      </ul>
    </FaqContainer>
    <Form>
      <Field>
        <Input type="text" name="fullname" placeholder="Jeffrey Lebowski" required />
        <Label for="fullname">Name</Label>
      </Field>
      <Field>
        <Input type="email" name="email" placeholder="youare@awesome.com" required />
        <Label for="email">Email</Label>
      </Field>
      <Field>
        <TextArea placeholder='Hopefully something flattering...'></TextArea>
      </Field>
      <FormButton>Questions Away</FormButton>
    </Form>
  </Container>
)

export default Contact