import React from "react"
import styled from "styled-components"
import {
  FormButton,
  Container,
  Title,
  Form,
  Field,
  Input,
  Label,
  TextArea,
} from "../components/uiComponents"
import Helmet from "react-helmet"
import Layout from "../components/layout"

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
  line-height: 0.8em;
  @media (max-width: 800px) {
    font-size: 2.3em;
  }
`

const Contact = () => (
  <Layout>
    <Container>
      <Helmet
        title="Contact | Bryan Smith Salt Lake City Web Developer & Designer"
        meta={[
          { name: "description", content: "Contact Bryan Smith" },
          {
            name: "keywords",
            content:
              "web developer, designer, freelance, design, salt lake city, Utah",
          },
        ]}
      />
      <FaqContainer>
        <Title>
          Go ahead, <br /> <AMA>AMA</AMA>
        </Title>
        <p>
          That's Ask Me Anything incase you didn't know. Here are a few quick
          facts about me just in case it answers any questions you might have:
        </p>
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
          <li>Tattoos: 5</li>
        </ul>
      </FaqContainer>
      <Form
        margin={`initial`}
        name="ama"
        method="POST"
        action="/Success"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input
          type="hidden"
          name="form-name"
          value="ama"
        />
        <Field>
          <Input
            type="text"
            name="fullname"
            placeholder="Jeffrey Lebowski"
            id="fullname"
            required
          />
          <Label htmlFor="fullname">Name</Label>
        </Field>
        <Field>
          <Input
            type="email"
            name="email"
            placeholder="youare@awesome.com"
            id="email"
            required
          />
          <Label htmlFor="email">Email</Label>
        </Field>
        <Field>
          <TextArea
            name="message"
            placeholder="Hopefully something flattering..."
          />
        </Field>
        <FormButton>Questions Away</FormButton>
      </Form>
    </Container>
  </Layout>
)
export default Contact
