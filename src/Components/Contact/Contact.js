import React from 'react';
import { Helmet } from 'react-helmet';
import './Contact.css';

const Contact = Contact => {
    return (
        <div className="contact-me">
            <Helmet>
                <title>Contact me | Bryan Smith</title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="description" content="This is an example of a meta description. This will often show up in search results." />
            </Helmet>
            <div className="text-container">
                <h1>Contact</h1>
                <p>Like what you see?</p>
                <p>While I am happily employed, I am more than happy to give my two cents on how I can help you grow as a developer or how I could help your company grow. Don't hesitate to ask me anything!</p>
                <p>You can send me an email at <a href="mailto:me@imbryan.com">me@imbryan.com</a>, tweet at me on <a target="_blank" href="https://twitter.com/BGSIII" rel="noopener noreferrer">Twitter</a> or even peep my <a target="_blank" href="https://www.linkedin.com/in/b-smith/" rel="noopener noreferrer">LinkedIn profile</a>, if that is your thing!</p>
            </div>
        </div>
    );
}

export default Contact;