import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Components/Hero/Hero';
import About from './Components/About/About';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact';

export default (

    <Switch >
        <Redirect from="/" to="/home" exact />
        <Route component={Home} path="/home" />
        <Route component={About} path="/about" />
        <Route component={Work} path="/work" />
        <Route component={Contact} path="/contact" />
    </Switch>
);