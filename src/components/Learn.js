import React, { Component } from 'react'
import styled from 'styled-components'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import image from '../images/frontamentals.png'
import { FormButton } from './uiComponents'

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
const FrontamentalsCol = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  margin: 0;
  opacity: .2;
`
const SubscribeForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto 26px;
  @media (max-width: 800px) {
    width: initial;
  }
`
const FormInput = styled.input`
  width: 100%;
  margin: 10px 0;
  border: 1px solid #666;
  border-radius: 3px;
`
class Learn extends Component {
  state = {
    name: '',
    email: '',
    subscribeMessage: 'SEND ME THE GOODS!'
  }
  handleSubmit(e) {
    e.preventDefault()
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
          <h1>Learn from me/With me</h1>
          <h3>I know, I know... <span role='image' aria-label='newspaper'>📰 </span><span role='image' aria-label='right arrow'> ➡️ </span><span role='image' aria-label='trash bin'>🗑</span></h3>
          <p> But if you are wanting to learn web development without any fluff or BS tutorials, then I've got something for you.</p>
          <p>I write up fresh web development articles (sometimes once a week if the children allow!!!) and you can get updated anytime I write something new by dropping your email in that there <span role='image' aria-label='point down'>👇</span> box and clicking "SEND ME THE GOODS!" </p>
          <SubscribeForm onSubmit={(e) => this.handleSubmit(e)}>
            <FormInput type="text" placeholder='first name' name="first_name" />
            <FormInput type="email" placeholder='email' name="email" />
            <FormButton>{this.state.subscribeMessage}</FormButton>
          </SubscribeForm>
          <p>P.S. I promise to never, ever spam you. So what do you say? Let's be internet friends <span role='image' aria-label='heart'>❤️</span><span role='image' aria-label='heart'>💚</span><span role='image' aria-label='heart'>💜</span></p>
        </TextContainer>
        <FrontamentalsCol src={image} />
      </LearnContainer>
    )
  }
}

export default Learn