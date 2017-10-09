import React from 'react';
import { Helmet } from 'react-helmet';
import './About.css';
import { Link } from 'react-router-dom';

const About = About => {
    let thisYear = new Date().getFullYear();
    let startYear = 2014;

    return (
        <div className="about-me">
            <Helmet>
                <title>What I'm all about | Bryan Smith</title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="description" content="This is an example of a meta description. This will often show up in search results." />
            </Helmet>
            <div className="text-container">
                <h1>What I'm all about</h1>
                <img src='/images/yo_boy.jpg' alt='my ugly mug' /><p>Hi! My name is Bryan Smith but my friends & family call me Beeg (pronounced like Beej). I am a web developer & designer hailing from Salt Lake City, Utah. I have been developing for about {thisYear - startYear} years now & absolutely love it.</p>
                <p>I recently started as a lead instructor at <a target='_blank' href='https://devmountain.com/' rel="noopener noreferrer">DevMountain</a>, an immersive coding bootcamp, & I absolutely love seeing others learn about the web. Being a bootcamp grad myself, it is awesome to see someone go from knowing nothing to being able to contribute to a team in three months. I have worked for a wide range of companies both big & small. You can check out my <Link to="/work"> work section</Link> for more info on my career history.</p>
                <p>When I'm not teaching or developing I am spending time with my beautiful wife Lindsey, my daughters & two dogs Sperry & Finn. I love being outdoors, making people laugh & doing anything on a board. Oh, I also love University of Utah athletics, Ki-yi!</p>
                <p>If you are interested in learning more about me or have any questions at all, I am an open book & you can <Link to="/contact">contact me here</Link> or reach out on <a target="_blank" href="https://twitter.com/BGSIII" rel="noopener noreferrer">Twitter!</a></p>
            </div>
        </div>
    );
}

export default About;