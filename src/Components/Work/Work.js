import React from 'react';
import { Helmet } from 'react-helmet';
import './Work.css'
import Companies from '../Companies/Companies';

const Work = Work => {
    return (

        <div className="work">
            <Helmet>
                <title>Work with me | Bryan Smith</title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="description" content="This is an example of a meta description. This will often show up in search results." />
            </Helmet>
            <div className="text-container">
                <h1>Work with me</h1>
                <p>I have been lucky enough to work for a wide range of companies with a wide range of technologies used within those companies. I mostly work with HTML, CSS & JavaScript but have experience with C#, PHP/Laravel, the Demandware platform & a handful of other technologies.</p>
                <p>I also fancy myself to be a bit of a designer & have experience with the Adobe Suite & Sketch.</p>
            </div>
            <Companies />
            <div className="text-container">
                <p>Due to circumstances out of my control, I am unable to display some of the work I am most proud of. If you would like, I am more than happy to send along a few screen shots of what I can show or you can take a look at my <a target="_blank" href="https://codepen.io/beeg/" rel="noopener noreferrer">Codepen Profile</a> to see my latest design or feature I have thought up.</p>
            </div>
        </div>
    );
}

export default Work;