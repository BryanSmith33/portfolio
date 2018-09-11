import React from 'react'
import styled from 'styled-components'
import { FormButton, Container, Title, Form, Field, Input, Label, TextArea } from '../components/uiComponents'
import Helmet from 'react-helmet'

const FaqContainer = styled.div`
  color: #ff684e;
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

const Contact = () => (
  <Container>
    <Helmet
      title='Contact | Bryan Smith Salt Lake City Web Developer & Designer'
      meta={[
        { name: 'description', content: 'Contact Bryan Smith' },
        { name: 'keywords', content: 'web developer, designer, freelance, design, salt lake city, utah' },
      ]}
    />
    <FaqContainer>
      <Title>Go ahead, <br /> <AMA>AMA</AMA></Title>
      <p>That's Ask Me Anything incase you didn't know. Here are a few quick facts about me just in case it answers any questions you might have:</p>
      <ul>
        <li>Broken Bones: 0 (1 chipped though)</li>
        <li>Favorit Color: red</li>
        <li>Favorite Food: carne asada burrito</li>
        <li>Years Developing: {new Date().getFullYear() - 2014}</li>
        <li>Cats or Dogs: dogs</li>
        <li>Favorite sport: Football to watch, skateboarding to do</li>
        <li>Height: 6'1"</li>
        <li>Greatest Fear: Being chased up the stairs in the dark</li>
        <li>Favorite Vacation: Hawaii</li>
        <li>Tattoos: 4</li>
      </ul>
    </FaqContainer>
    <Form margin={`initial`} netlify>
      <Field>
        <Input type="text" name="fullname" placeholder="Jeffrey Lebowski" id='fullname' required />
        <Label for="fullname">Name</Label>
      </Field>
      <Field>
        <Input type="email" name="email" placeholder="youare@awesome.com" id='email' required />
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