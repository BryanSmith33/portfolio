import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './Hero.css';
import { updateFontFamily } from '../../helpers/updateFontFamily';


class Hero extends Component {
    componentDidMount() {
        const id = document.getElementById('name');
        updateFontFamily(id);
    }
    render() {
        return (
            <div className="container">
                <Helmet>
                    <title>Salt Lake City Web Developer & Designer | Bryan Smith</title>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="description" content="This is an example of a meta description. This will often show up in search results." />
                </Helmet>
                <div className="home">
                    <svg>
                        <defs>
                            <mask id="mask" x="0" y="0" width="100%" height="100%" >
                                <rect id="alpha" x="0" y="0" width="100%" height="100%" />
                                <text id="name" x="50%" y="50%">Bryan Smith</text>
                                <text id="position" x="50%" y="70%">Web Developer</text>
                            </mask>
                        </defs>
                        <rect id="base" x="0" y="0" width="100%" height="100%" />
                    </svg>
                </div>
                <section className="hero"></section>
            </div>
        );
    }
}

export default Hero;