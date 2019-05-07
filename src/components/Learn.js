import React, { Component } from 'react'
import styled from 'styled-components'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { Form, Field, Input, Label, FormButton } from './uiComponents'

const LearnContainer = styled.div`
  padding: 3em;
  position: relative;
  background: #fff;
`
const TextContainer = styled.div`
  padding: 10px 15px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`
class Learn extends Component {
  state = {
    name: '',
    email: '',
    subscribeMessage: 'SEND ME THE GOODS!'
  }
  handleSubmit(e) {
    e.preventDefault()
    console.log(e);
    
    addToMailchimp(e.target.email.value, { FNAME: e.target.first_name.value })
      .then(data => {
        data.msg = "🤩THANK YOU🎉"
        this.setState({ subscribeMessage: data.msg })
      })
    e.target.email.value = ''
    e.target.first_name.value = ''
  }
  render() {
    return (
      <LearnContainer>
        <TextContainer>
          <h1>Learn from/with me</h1>
          <h3>I know, I know... <span role='img' aria-label='newspaper'>📰 </span><span role='img' aria-label='right arrow'> ➡️ </span><span role='img' aria-label='trash bin'>🗑</span></h3>
          <p> But if you are wanting to learn web development without any fluff or BS tutorials, then I've got something for you.</p>
          <p>I write up fresh web development articles (sometimes once a week if the children allow!!!) and you can get updated anytime I write something new by dropping your email in that there <span role='img' aria-label='point down'>👇</span> box and clicking "SEND ME THE GOODS!" </p>
          <Form onSubmit={(e) => this.handleSubmit(e)}
            margin={`0 auto 1.5em`}>
            <Field>
              <Input type="text" name="fullname" placeholder="Jeffrey Lebowski" id="fullname" required />
              <Label htmlFor="fullname">Name</Label>
            </Field>
            <Field>
              <Input type="email" name="email" placeholder="youare@awesome.com" id="email" required />
              <Label htmlFor="email">Email</Label>
            </Field>
            <FormButton>{this.state.subscribeMessage}</FormButton>
          </Form>
          <p>P.S. I promise to never, ever spam you. So what do you say? Let's be internet friends <span role='img' aria-label='heart'>❤️</span><span role='img' aria-label='heart'>💚</span><span role='img' aria-label='heart'>💜</span></p>
        </TextContainer>
      </LearnContainer>
    )
  }
}

export default Learn